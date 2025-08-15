
import React from 'react';
import { COMMANDS } from '../constants';
import { useProgress } from '../hooks/useProgress';
import type { Level } from '../types';
import { CheckIcon } from './icons/CheckIcon';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';

interface LevelViewProps {
  level: Level;
  onSelectCommand: (level: Level, command: string) => void;
  onBack: () => void;
}

const LevelView: React.FC<LevelViewProps> = ({ level, onSelectCommand, onBack }) => {
  const { isComplete } = useProgress();
  const commands = COMMANDS[level];

  return (
    <div className="animate-fade-in">
      <div className="flex items-center mb-8">
        <button
          onClick={onBack}
          className="p-2 rounded-full hover:bg-brand-primary transition-colors mr-4"
        >
          <ChevronLeftIcon className="w-6 h-6 text-brand-subtle" />
        </button>
        <h1 className="text-3xl font-bold text-brand-text">{level} Commands</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {commands.map(command => {
          const completed = isComplete(command);
          return (
            <div
              key={command}
              onClick={() => onSelectCommand(level, command)}
              className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-all duration-200 shadow
                ${completed
                  ? 'bg-brand-accent/20 border border-brand-accent'
                  : 'bg-brand-surface hover:bg-brand-primary transform hover:scale-105'
                }`}
            >
              <span className={`font-mono text-lg ${completed ? 'text-brand-accent' : 'text-brand-text'}`}>
                {command}
              </span>
              {completed && <CheckIcon className="w-6 h-6 text-brand-accent" />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LevelView;
