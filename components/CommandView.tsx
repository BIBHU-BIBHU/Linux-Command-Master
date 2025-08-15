
import React, { useEffect } from 'react';
import { marked } from 'marked';
import type { CommandTutorial, Level } from '../types';
import { useProgress } from '../hooks/useProgress';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';
import { CheckIcon } from './icons/CheckIcon';
import { TUTORIALS } from '../data';

interface CommandViewProps {
  level: Level;
  command: string;
  onBack: () => void;
}

const CommandView: React.FC<CommandViewProps> = ({ level, command, onBack }) => {
  const tutorial: CommandTutorial | null = TUTORIALS[command] || null;
  const { markAsComplete, isComplete, setLastViewedCommand } = useProgress();

  useEffect(() => {
    setLastViewedCommand(level, command);
  }, [level, command, setLastViewedCommand]);

  const completed = isComplete(command);

  const handleMarkAsComplete = () => {
    markAsComplete(command);
  };

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="flex items-center mb-8">
        <button onClick={onBack} className="p-2 rounded-full hover:bg-brand-primary transition-colors mr-4">
          <ChevronLeftIcon className="w-6 h-6 text-brand-subtle" />
        </button>
        <h1 className="text-4xl font-bold font-mono text-brand-text">{command}</h1>
      </div>

      <div className="bg-brand-surface rounded-lg p-6 sm:p-8 shadow-lg">
        {!tutorial ? (
          <div className="text-yellow-800 text-center p-4 bg-yellow-100 rounded-lg">
            Tutorial for "<strong>{command}</strong>" is not available yet.
          </div>
        ) : (
          <div className="prose max-w-none prose-p:text-brand-subtle prose-headings:text-brand-text prose-strong:text-brand-text">
            <h2>{tutorial.commandName}</h2>
            <p className="text-lg italic text-brand-accent">{tutorial.summary}</p>
            <div dangerouslySetInnerHTML={{ __html: marked.parse(tutorial.description) }} />
            
            <h3 className="mt-8">Examples</h3>
            <div className="space-y-4">
              {tutorial.examples.map((example, index) => (
                <div key={index} className="bg-brand-bg p-4 rounded-lg border border-brand-primary">
                  <pre className="bg-transparent p-0 m-0 overflow-x-auto">
                    <code className="text-emerald-600 font-mono">{example.command}</code>
                  </pre>
                  <p className="mt-2 text-sm text-brand-subtle">{example.explanation}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10 flex justify-end">
              <button
                onClick={handleMarkAsComplete}
                disabled={completed}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300
                  ${completed
                    ? 'bg-green-600 text-white cursor-not-allowed'
                    : 'bg-brand-accent text-white hover:bg-teal-600 transform hover:-translate-y-1'
                  }`}
              >
                <CheckIcon className="w-5 h-5" />
                {completed ? 'Completed' : 'Mark as Complete'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommandView;