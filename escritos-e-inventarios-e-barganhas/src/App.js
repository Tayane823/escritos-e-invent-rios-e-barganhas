import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
 
//PAGES
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Club from './pages/club/Club'
import Books from './pages/books/Books'
import Challenge from './pages/challenge/Challenge'
import Review from './pages/review/Review';
import Quiz from './pages/quiz/Quiz'

// COMPONENTS
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

//CONTEXT
import { AuthProvider } from './context/AuthContext';

//HOOKS
import { useAuthentication } from './hooks/useAuthentication';
import { useEffect, useState } from 'react';

function App() {

  const [user, setUser]  = useState(undefined)
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
    
  }, [auth])

  if (loadingUser) {
    <p>Carregando...</p>
  };

  return (
    <div className="App">
      <AuthProvider value={{user}}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/club' element={<Club /> }></Route>
            <Route path='/books' element={<Books />}></Route>
            <Route path='/challenge' element={<Challenge />}></Route>
            <Route path='/quiz' element={<Quiz />}></Route>
            <Route path='/review' element={<Review />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
