// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import routes from './Pages/routes';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';

function App() {
  const router = createBrowserRouter(routes);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;