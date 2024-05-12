import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter, createBrowserRouter} from 'react-router-dom';
import Dashboard from './Modules/Pages/Dashboard/Dashboard';
import Projects from './Modules/Pages/Projects/Projects';
import AddProjects from './Modules/Pages/AddProjects/AddProjects';


const routes = createBrowserRouter([{
  path: "/dashboard",
  element: <Dashboard />,
  children: [
    {
      path:"/project",
      element:<Projects />,
      children:[
        {
          path: "/add",
          element: <AddProjects />
        }
      ]
    }
  ]
}]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />

    </BrowserRouter>

    
  </React.StrictMode>
)