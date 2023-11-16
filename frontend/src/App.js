import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import { LandingPage, SignIn, SignUp, Dashboard } from './pages';

function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route path='/' element={<LandingPage />}/>
            <Route path='/signup' element={<SignUp />}/>
            <Route path='/signin' element={<SignIn />}/>
          </Routes>
        </Router>
      </>
  );
}

export default App;
