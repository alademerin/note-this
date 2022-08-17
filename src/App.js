import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './components/styles/Global';
import HomePage from './pages/HomePage';
// import { useContext } from 'react';
// import { AuthContext } from './context/AuthContext';
function App() {

  return (
    <>
      <Router>
        <Routes>
          {/* <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} /> */}
          <Route
            path='/'
            element={
              // <RequireAuth>
              <HomePage />
              // </RequireAuth>
            }
          />
        </Routes>
      </Router>

      <GlobalStyles />
    </>
  );
}

export default App;
