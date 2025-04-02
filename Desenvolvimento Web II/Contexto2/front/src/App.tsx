import './App.css';
import { LetterProvider } from './contexts/LetterCtx';
import Input from './components/input';
import Display from './components/display';

export default function App() {
  return (
    <LetterProvider>
      <Input />
      <Display /> 
    </LetterProvider>
  );
}
