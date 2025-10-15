import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hi from './screens/Hi';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/hi" element={<Hi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;