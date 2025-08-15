
import React from 'react';
import { LEVELS } from '../constants';
import { useProgress } from '../hooks/useProgress';
import type { Level, Command } from '../types';
import ProgressBar from './ProgressBar';
import { CodeIcon } from './icons/CodeIcon';
import Introduction from './Introduction';
import Profile from './Profile';
import ProgressOverview from './ProgressOverview';
import Challenge from './Challenge';
import ResumeLearning from './ResumeLearning';

interface DashboardProps {
  onSelectLevel: (level: Level) => void;
  onSelectCommand: (level: Level, command: string) => void;
}

const levelColors: Record<Level, string> = {
  'Beginner': 'text-green-500',
  'Intermediate': 'text-yellow-500',
  'Advanced': 'text-red-500',
  'Expert': 'text-purple-500',
};

const levelDescriptions: Record<Level, string> = {
  'Beginner': 'Basics: navigation, files, and simple operations.',
  'Intermediate': 'Search, permissions, processes, and network commands.',
  'Advanced': 'Networking, monitoring, scripting, and system control.',
  'Expert': 'Pro Hacker’s Toolkit: Fun, automation, and deep debugging tools.',
};


const LevelCard: React.FC<{ level: Level; progress: number; description: string; onClick: () => void }> = ({ level, progress, description, onClick }) => {

  return (
    <div
      onClick={onClick}
      className="bg-brand-surface rounded-lg p-6 shadow-lg hover:shadow-xl hover:bg-brand-primary transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
      role="button"
      tabIndex={0}
      onKeyPress={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className={`text-2xl font-bold ${levelColors[level]}`}>{level}</h2>
        <CodeIcon className={`w-8 h-8 ${levelColors[level]}`} />
      </div>
      <p className="text-brand-subtle mb-4 h-12">{description}</p>
      <ProgressBar percentage={progress} />
      <div className="text-right text-sm text-brand-subtle mt-2">{progress}% Complete</div>
    </div>
  );
};


const Dashboard: React.FC<DashboardProps> = ({ onSelectLevel, onSelectCommand }) => {
  const { calculateLevelProgress } = useProgress();

  return (
    <div className="animate-fade-in space-y-12">
      <ResumeLearning onSelectCommand={onSelectCommand} />
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:items-start">
        <div className="lg:col-span-2 space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
            <Profile />
            <ProgressOverview />
          </div>
          <Challenge />
        </div>
        <div className="lg:col-span-3">
          <Introduction />
        </div>
      </div>
      
      <div>
        <h2 className="text-3xl font-bold text-center mb-8 text-brand-text">Learning Section</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {LEVELS.map(level => (
            <LevelCard
              key={level}
              level={level}
              progress={calculateLevelProgress(level)}
              onClick={() => onSelectLevel(level)}
              description={levelDescriptions[level]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;