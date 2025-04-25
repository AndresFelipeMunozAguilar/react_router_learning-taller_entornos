import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Clients from './Pages/Clients.jsx'
import Providers from './Pages/Providers.jsx'
import Users from './Pages/Users.jsx'
import Logout from './Pages/LogOut.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Clients />} />
          <Route path="clients" element={<Clients />} />
          <Route path="providers" element={<Providers />} />
          <Route path="users" element={<Users />} />
          <Route path="log-out" element={<Logout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
