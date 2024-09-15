import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './components/pages/Homepage';
import MainLayout from './components/layout/MainLayout';
import JobesPage from './components/pages/jobesPage';
import NotFoundPage from './components/pages/NotFoundPage';
import Faliyet from './components/Faliyet/Faliyet';
import Home from './components/navbarexemple/Home';
import ContactForm from './components/Slider/Contact';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element= {<MainLayout/>}>
    <Route index element= {<HomePage/>}/>  
    <Route path='/kurumsal' element= {<JobesPage />}/>
    <Route path='/home' element= {<Home />}/> 
    <Route path='/contact' element= {<ContactForm />}/>
    <Route path='/faliyet' element= {<Faliyet/>}/>
    <Route path='*'  element= {<NotFoundPage />}/>
  </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />
    
  
}

export default App
