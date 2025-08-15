
import React, { useState, useCallback } from 'react';
import type { Level } from './types';
import { ProgressProvider, useProgress } from './hooks/useProgress';
import Dashboard from './components/Dashboard';
import LevelView from './components/LevelView';
import CommandView from './components/CommandView';
import { TerminalIcon } from './components/icons/TerminalIcon';
import { FireIcon } from './components/icons/FireIcon';

type ViewState = 
  | { name: 'dashboard' }
  | { name: 'level'; level: Level }
  | { name: 'command'; level: Level; command: string };

const Header: React.FC = () => {
  const { streak } = useProgress();
  return (
    <header className="py-4 bg-brand-surface/50 border-b border-brand-primary">
      <div className="container mx-auto px-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <TerminalIcon className="w-8 h-8 text-brand-accent" />
          <h1 className="text-2xl font-bold text-brand-text tracking-wider">Linux Command Master</h1>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-primary hover:bg-brand-surface transition-colors">
          <FireIcon className="w-5 h-5 text-orange-400" />
          <span className="font-semibold text-brand-text">{streak} Day{streak !== 1 && 's'} Streak</span>
        </button>
      </div>
    </header>
  );
};

const AppContent: React.FC = () => {
  const [view, setView] = useState<ViewState>({ name: 'dashboard' });

  const navigateToLevel = useCallback((level: Level) => {
    setView({ name: 'level', level });
  }, []);

  const navigateToCommand = useCallback((level: Level, command: string) => {
    setView({ name: 'command', level, command });
  }, []);

  const navigateToDashboard = useCallback(() => {
    setView({ name: 'dashboard' });
  }, []);

  const renderView = () => {
    switch (view.name) {
      case 'dashboard':
        return <Dashboard onSelectLevel={navigateToLevel} onSelectCommand={navigateToCommand} />;
      case 'level':
        return <LevelView level={view.level} onSelectCommand={navigateToCommand} onBack={navigateToDashboard} />;
      case 'command':
        return <CommandView level={view.level} command={view.command} onBack={() => navigateToLevel(view.level)} />;
      default:
        return <Dashboard onSelectLevel={navigateToLevel} onSelectCommand={navigateToCommand} />;
    }
  };

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        {renderView()}
      </main>
      <footer className="text-center py-4 text-brand-subtle text-sm">
        <p>Learn Linux commands interactively.</p>
        <p className="mt-1">@Ink & Inquiry</p>
      </footer>
    </>
  );
};


const App: React.FC = () => {
  return (
    <ProgressProvider>
      <div className="min-h-screen bg-brand-bg font-sans">
        <AppContent />
      </div>
    </ProgressProvider>
  );
};

export default App;
