import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from './routes';
import { ContextProvider } from './Context';
import MusicPlayer from './components/MusicPlayer';

const router = createBrowserRouter(routes);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <MusicPlayer></MusicPlayer>
      <RouterProvider router={router}></RouterProvider>
    </ContextProvider>
  </React.StrictMode>,
)
