
import React from 'react';
import { useProgress } from '../hooks/useProgress';
import type { Level, Command } from '../types';

interface ResumeLearningProps {
  onSelectCommand: (level: Level, command: string) => void;
}

const ResumeLearning: React.FC<ResumeLearningProps> = ({ onSelectCommand }) => {
  const { lastViewedCommand } = useProgress();

  if (!lastViewedCommand) {
    return null;
  }

  const { level, command } = lastViewedCommand;

  return (
    <div className="bg-brand-surface rounded-lg p-6 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in">
      <div>
        <p className="text-brand-subtle text-sm">Welcome back! Continue where you left off.</p>
        <h3 className="text-2xl font-bold text-brand-text mt-1">
          Last Viewed: <span className="font-mono text-brand-accent">{command}</span>
        </h3>
      </div>
      <button
        onClick={() => onSelectCommand(level, command)}
        className="w-full sm:w-auto px-6 py-3 bg-brand-accent text-brand-bg font-semibold rounded-lg hover:bg-teal-300 transition-all transform hover:-translate-y-0.5"
      >
        Jump Back In
      </button>
    </div>
  );
};

export default ResumeLearning;
