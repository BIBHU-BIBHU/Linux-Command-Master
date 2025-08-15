
export type Level = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export type Command = string;

export interface CommandTutorial {
  commandName: string;
  summary: string;
  description: string;
  examples: {
    command: string;
    explanation: string;
  }[];
}

export type Progress = Record<Command, boolean>;