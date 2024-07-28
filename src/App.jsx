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
import AddJobPage from './components/pages/AddJobsPage';
import FirstCourse from './components/coursepage/FirstCourse';
import Tailwind from './components/tailwindExemple/Tailwind';

import Home from './components/navbarexemple/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element= {<MainLayout/>}>
    <Route index element= {<HomePage/>}/>
    <Route path='/jobs' element= {<JobesPage />}/>
    <Route path='/add' element= {<AddJobPage />}/>
    <Route path='/first' element= {<FirstCourse />}/>
    <Route path='/tail' element= {<Tailwind />}/>
    <Route path='/home' element= {<Home />}/>
    <Route path='*' element= {<NotFoundPage />}/>
    
  </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />
    
  
}

export default App
