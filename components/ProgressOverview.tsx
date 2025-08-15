import React from 'react';
import { useProgress } from '../hooks/useProgress';
import ProgressBar from './ProgressBar';
import { TrophyIcon } from './icons/TrophyIcon';

const ProgressOverview: React.FC = () => {
    const { calculateOverallProgress } = useProgress();
    const { completed, total, percentage } = calculateOverallProgress();

    return (
        <div className="bg-brand-surface rounded-lg p-6 shadow-lg h-full flex flex-col justify-center">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                    <TrophyIcon className="w-6 h-6 text-yellow-400" />
                    <h3 className="text-xl font-bold text-brand-text">Overall Progress</h3>
                </div>
                <span className="font-semibold text-brand-subtle">{completed} / {total}</span>
            </div>
            <ProgressBar percentage={percentage} />
            <p className="text-right text-sm text-brand-subtle mt-2">{percentage}% Mastered</p>
        </div>
    );
};

export default ProgressOverview;
