import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SuggestionProvider } from './context/SuggestionContext';
import Home from './pages/Home';
import Suggestion from './pages/Suggestion';
import History from './pages/History';

function App() {
  return (
    <SuggestionProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/palpite" element={<Suggestion />} />
          <Route path="/historico" element={<History />} />
        </Routes>
      </Router>
    </SuggestionProvider>
  );
}

export default App;