import { createContext, useState, ReactNode, useContext } from 'react';

type SuggestionContextType = {
  suggestions: number[][];
  generateSuggestion: () => number[];
};

const SuggestionContext = createContext<SuggestionContextType | undefined>(undefined);

export const SuggestionProvider = ({ children }: { children: ReactNode }) => {
  const [suggestions, setSuggestions] = useState<number[][]>([]);

  const generateSuggestion = () => {
    const newSuggestion = Array.from({ length: 6 }, () =>
      Math.floor(Math.random() * 60) + 1
    );
    setSuggestions(prev => [...prev, newSuggestion]);
    return newSuggestion;
  };

  return (
    <SuggestionContext.Provider value={{ suggestions, generateSuggestion }}>
      {children}
    </SuggestionContext.Provider>
  );
};

export const useSuggestionContext = () => {
  const context = useContext(SuggestionContext);
  if (!context) throw new Error('useSuggestionContext must be used inside SuggestionProvider');
  return context;
};
