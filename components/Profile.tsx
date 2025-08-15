import React from 'react';
import { useProgress } from '../hooks/useProgress';
import { UserIcon } from './icons/UserIcon';

const getTitle = (percentage: number): string => {
  if (percentage < 10) return 'Linux Novice';
  if (percentage < 30) return 'Shell Apprentice';
  if (percentage < 60) return 'Command-Line Adept';
  if (percentage < 90) return 'System Sorcerer';
  return 'Kernel Wizard';
};

const Profile: React.FC = () => {
  const { calculateOverallProgress } = useProgress();
  const { percentage } = calculateOverallProgress();
  const title = getTitle(percentage);

  return (
    <div className="bg-brand-surface rounded-lg p-6 shadow-lg h-full flex flex-col justify-center">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-brand-primary rounded-full">
          <UserIcon className="w-10 h-10 text-brand-accent" />
        </div>
        <div>
          <p className="text-sm text-brand-subtle">Welcome back!</p>
          <h3 className="text-xl font-bold text-brand-text">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Profile;
