import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
 
//PAGES
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Login from './pages/login/Login';

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
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
