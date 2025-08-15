
import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import type { Progress, Command, Level } from '../types';
import { COMMANDS } from '../constants';

interface LastViewed {
  level: Level;
  command: string;
}
interface ProgressContextType {
  progress: Progress;
  streak: number;
  lastViewedCommand: LastViewed | null;
  markAsComplete: (command: Command) => void;
  isComplete: (command: Command) => boolean;
  calculateLevelProgress: (level: Level) => number;
  calculateOverallProgress: () => { completed: number; total: number; percentage: number };
  setLastViewedCommand: (level: Level, command: string) => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

const progressStorageKey = 'linuxCommandMasterProgress';
const streakStorageKey = 'linuxCommandMasterStreak';
const lastViewedStorageKey = 'linuxCommandMasterLastViewed';

const getInitialProgress = (): Progress => {
  try {
    const item = window.localStorage.getItem(progressStorageKey);
    return item ? JSON.parse(item) : {};
  } catch (error) {
    console.error('Error reading progress from localStorage', error);
    return {};
  }
};

const getInitialStreak = (): { count: number; lastDate: string } => {
    try {
        const item = window.localStorage.getItem(streakStorageKey);
        return item ? JSON.parse(item) : { count: 0, lastDate: '' };
    } catch (error) {
        console.error('Error reading streak from localStorage', error);
        return { count: 0, lastDate: '' };
    }
};

const getInitialLastViewed = (): LastViewed | null => {
    try {
        const item = window.localStorage.getItem(lastViewedStorageKey);
        return item ? JSON.parse(item) : null;
    } catch (error) {
        console.error('Error reading last viewed command from localStorage', error);
        return null;
    }
};

const isToday = (dateString: string) => {
    if (!dateString) return false;
    const date = new Date(dateString);
    const today = new Date();
    return date.getFullYear() === today.getFullYear() &&
           date.getMonth() === today.getMonth() &&
           date.getDate() === today.getDate();
};

const isYesterday = (dateString: string) => {
    if (!dateString) return false;
    const date = new Date(dateString);
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return date.getFullYear() === yesterday.getFullYear() &&
           date.getMonth() === yesterday.getMonth() &&
           date.getDate() === yesterday.getDate();
};


export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<Progress>(getInitialProgress);
  const [streakState, setStreakState] = useState(getInitialStreak);
  const [lastViewedCommand, setLastViewed] = useState<LastViewed | null>(getInitialLastViewed);

  useEffect(() => {
    const todayStr = new Date().toISOString().split('T')[0];
    if (!isToday(streakState.lastDate)) {
        if (isYesterday(streakState.lastDate)) {
            // Continued streak
            setStreakState({ count: streakState.count + 1, lastDate: todayStr });
        } else {
            // New or broken streak
            setStreakState({ count: 1, lastDate: todayStr });
        }
    }
  }, []); // Run only on initial mount


  useEffect(() => {
    try {
      window.localStorage.setItem(progressStorageKey, JSON.stringify(progress));
    } catch (error) {
      console.error('Error saving progress to localStorage', error);
    }
  }, [progress]);
  
  useEffect(() => {
    try {
        window.localStorage.setItem(streakStorageKey, JSON.stringify(streakState));
    } catch (error) {
        console.error('Error saving streak to localStorage', error);
    }
  }, [streakState]);
  
  useEffect(() => {
    try {
        if (lastViewedCommand) {
            window.localStorage.setItem(lastViewedStorageKey, JSON.stringify(lastViewedCommand));
        }
    } catch (error) {
        console.error('Error saving last viewed command to localStorage', error);
    }
  }, [lastViewedCommand]);

  const markAsComplete = useCallback((command: Command) => {
    setProgress(prev => ({ ...prev, [command]: true }));
  }, []);

  const isComplete = useCallback((command: Command) => {
    return !!progress[command];
  }, [progress]);

  const calculateLevelProgress = useCallback((level: Level) => {
    const levelCommands = COMMANDS[level];
    if (!levelCommands || levelCommands.length === 0) return 0;
    const completedCommands = levelCommands.filter(cmd => progress[cmd]).length;
    return Math.round((completedCommands / levelCommands.length) * 100);
  }, [progress]);
  
  const calculateOverallProgress = useCallback(() => {
    const allCommands = Object.values(COMMANDS).flat();
    const total = allCommands.length;
    if (total === 0) return { completed: 0, total: 0, percentage: 0 };
    
    const completed = allCommands.filter(cmd => progress[cmd]).length;
    const percentage = Math.round((completed / total) * 100);

    return { completed, total, percentage };
  }, [progress]);
  
  const setLastViewedCommand = useCallback((level: Level, command: string) => {
    setLastViewed({ level, command });
  }, []);

  const value = useMemo(() => ({
    progress,
    streak: streakState.count,
    lastViewedCommand,
    markAsComplete,
    isComplete,
    calculateLevelProgress,
    calculateOverallProgress,
    setLastViewedCommand
  }), [progress, streakState.count, lastViewedCommand, markAsComplete, isComplete, calculateLevelProgress, calculateOverallProgress, setLastViewedCommand]);

  return React.createElement(ProgressContext.Provider, { value: value }, children);
};

export const useProgress = (): ProgressContextType => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
