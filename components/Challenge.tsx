
import React, { useState, useMemo } from 'react';
import { TargetIcon } from './icons/TargetIcon';
import { ChevronDownIcon } from './icons/ChevronDownIcon';
import ProgressBar from './ProgressBar';
import { QUIZ_QUESTIONS } from '../data';

interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
}
interface ActiveChallenge {
    command: string;
    questions: QuizQuestion[];
}

const QuizQuestion: React.FC<{
  questionData: QuizQuestion;
  selectedAnswer: string | null;
  onAnswer: (selection: string) => void;
}> = ({ questionData, selectedAnswer, onAnswer }) => {
  const { question, options, answer } = questionData;
  const isAnswered = selectedAnswer !== null;

  const getButtonClass = (option: string) => {
    if (!isAnswered) {
      return 'bg-brand-primary/50 hover:bg-brand-primary text-brand-text';
    }
    if (option === answer) {
      return 'bg-green-500/80 text-white'; // Correct answer
    }
    if (option === selectedAnswer) {
      return 'bg-red-500/80 text-white'; // Incorrect selection
    }
    return 'bg-brand-primary/30 text-brand-secondary cursor-not-allowed'; // Other options
  };

  return (
    <div className="bg-brand-primary/50 p-3 rounded-lg text-sm">
      <p className="text-brand-subtle mb-3">{question}</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {options.map((option, index) => (
          <button 
            key={index}
            onClick={() => onAnswer(option)}
            disabled={isAnswered}
            className={`w-full text-left px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${getButtonClass(option)}`}
          >
            {option}
          </button>
        ))}
      </div>
      {isAnswered && selectedAnswer !== answer && (
        <p className="text-xs text-green-400 mt-2">Correct answer: {answer}</p>
      )}
    </div>
  );
};


const Challenge: React.FC = () => {
    const [quizState, setQuizState] = useState<'idle' | 'active' | 'finished'>('idle');
    const [activeChallenges, setActiveChallenges] = useState<ActiveChallenge[]>([]);
    const [openCommand, setOpenCommand] = useState<string | null>(null);
    const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string | null>>({});
    
    const totalQuestions = useMemo(() => activeChallenges.reduce((sum, c) => sum + c.questions.length, 0), [activeChallenges]);

    const startQuiz = () => {
        const allCommands = Object.keys(QUIZ_QUESTIONS);
        const shuffled = allCommands.sort(() => 0.5 - Math.random());
        const selectedCommands = shuffled.slice(0, 5); // Select 5 random commands

        const newChallenges = selectedCommands.map(command => ({
            command,
            questions: QUIZ_QUESTIONS[command],
        }));
        
        const initialAnswers: Record<string, null> = {};
        newChallenges.forEach(c => {
            c.questions.forEach((_, i) => {
                initialAnswers[`${c.command}-${i}`] = null;
            });
        });

        setActiveChallenges(newChallenges);
        setSelectedAnswers(initialAnswers);
        setQuizState('active');
    };

    const handleSelectAnswer = (command: string, qIndex: number, selection: string) => {
        const key = `${command}-${qIndex}`;
        if (selectedAnswers[key] === null) { // Prevent re-answering
            setSelectedAnswers(prev => ({...prev, [key]: selection}));
        }
    };
    
    const handleSubmit = () => {
        setQuizState('finished');
    };

    const resetQuiz = () => {
        setSelectedAnswers({});
        setOpenCommand(null);
        setActiveChallenges([]);
        setQuizState('idle');
    };
    
    const score = useMemo(() => {
      return activeChallenges.reduce((currentScore, challenge) => {
        return currentScore + challenge.questions.reduce((subScore, question, index) => {
          const key = `${challenge.command}-${index}`;
          if (selectedAnswers[key] === question.answer) {
            return subScore + 1;
          }
          return subScore;
        }, 0);
      }, 0);
    }, [activeChallenges, selectedAnswers]);

    const answeredCount = Object.values(selectedAnswers).filter(a => a !== null).length;
    const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

    if (quizState === 'finished') {
        return (
            <div className="bg-brand-surface rounded-lg p-6 shadow-lg text-center flex flex-col items-center justify-center animate-fade-in">
                <h3 className="text-2xl font-bold text-brand-text mb-2">Quiz Results</h3>
                <p className="text-5xl font-bold text-brand-accent my-3">{score} <span className="text-3xl text-brand-subtle">/ {totalQuestions}</span></p>
                <div className="w-full max-w-xs mx-auto my-4">
                    <ProgressBar percentage={percentage} />
                </div>
                {percentage >= 80 ? (
                    <p className="mt-4 text-lg text-green-400 font-semibold">Congratulations! You're a true command-line master!</p>
                ) : (
                    <p className="mt-4 text-lg text-yellow-400 font-semibold">Great effort! Keep practicing to master them all.</p>
                )}
                <button onClick={resetQuiz} className="mt-6 px-6 py-2 bg-brand-accent text-brand-bg font-semibold rounded-lg hover:bg-teal-300 transition-colors">
                    Try Again
                </button>
            </div>
        );
    }

    if (quizState === 'active') {
        return (
             <div className="bg-brand-surface rounded-lg p-6 shadow-lg animate-fade-in">
                <div className="flex items-center gap-3 mb-4">
                    <TargetIcon className="w-6 h-6 text-red-400" />
                    <h3 className="text-xl font-bold text-brand-text">Daily Challenge Quiz</h3>
                </div>
                <div className="space-y-2">
                    {activeChallenges.map(challenge => (
                        <div key={challenge.command} className="bg-brand-primary/30 rounded-lg">
                            <button 
                                onClick={() => setOpenCommand(prev => prev === challenge.command ? null : challenge.command)} 
                                className="w-full flex justify-between items-center text-left p-3"
                                aria-expanded={openCommand === challenge.command}
                            >
                                <h4 className="font-mono text-lg text-brand-text">{challenge.command}</h4>
                                <ChevronDownIcon className={`w-5 h-5 text-brand-subtle transition-transform duration-300 ${openCommand === challenge.command ? 'rotate-180' : ''}`} />
                            </button>
                            {openCommand === challenge.command && (
                                <div className="px-3 pb-3 space-y-2 animate-fade-in">
                                    {challenge.questions.map((qa, index) => (
                                        <QuizQuestion
                                            key={index}
                                            questionData={qa}
                                            selectedAnswer={selectedAnswers[`${challenge.command}-${index}`]}
                                            onAnswer={(selection) => handleSelectAnswer(challenge.command, index, selection)}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="mt-6 pt-4 border-t border-brand-primary text-center">
                        <p className="text-brand-subtle mb-3">{answeredCount} of {totalQuestions} questions answered</p>
                        <button 
                            onClick={handleSubmit} 
                            disabled={answeredCount < totalQuestions} 
                            className="w-full px-6 py-3 bg-brand-accent text-brand-bg font-semibold rounded-lg hover:bg-teal-300 transition-all disabled:bg-brand-primary disabled:cursor-not-allowed disabled:text-brand-subtle"
                        >
                            See My Score
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    
    // Idle state
    return (
        <div className="bg-brand-surface rounded-lg p-6 shadow-lg flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
                <TargetIcon className="w-6 h-6 text-red-400" />
                <h3 className="text-xl font-bold text-brand-text">Daily Challenge Quiz</h3>
            </div>
            <p className="text-brand-subtle mb-6 text-center">
                Test your knowledge with a quick, multiple-choice quiz on essential Linux commands.
            </p>
            <button 
                onClick={startQuiz}
                className="w-full px-6 py-3 bg-brand-accent text-brand-bg font-semibold rounded-lg hover:bg-teal-300 transition-all transform hover:-translate-y-1"
            >
                Start Challenge
            </button>
        </div>
    );
};

export default Challenge;
