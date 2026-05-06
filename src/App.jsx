import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Footer from './components/Footer'
import Home from './pages/Home'
import Profile from './pages/Profile'
import { GlobalStyle } from './styles/global'

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil/:id" element={<Profile />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)

export default App
