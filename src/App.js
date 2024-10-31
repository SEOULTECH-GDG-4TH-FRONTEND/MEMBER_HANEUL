import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/login';
import Main from './pages/main';
import Sample from './pages/sample';
import MyPage from './pages/mypage';
import Question from './pages/question';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/sample" element={<Sample />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/question" element={<Question/>} />
      </Routes>
    </Router>
  );
}

export default App;
