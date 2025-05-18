import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './assets/pages/Home.jsx'
import Contato from './assets/pages/Contato.jsx'
import Erro from './assets/pages/Erro.jsx'
import Youtube from './assets/Youtube.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


//const router = createBrowserRouter([
//{
// path:'/' ,
// element: <Home/>
//},
//{
//  path: 'Contato',
//  element: <Contato/>
//},
//])

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    // pagina de erro 
    errorElement : <Erro/>,
    children: [
      {
        path: '/',
        element : <Home/>
      },
      {
        path: 'contato',
        element : <Contato/>,
      }
      ,{
        path: 'youtube',
        element: <Youtube/>
      }
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)