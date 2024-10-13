import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Welcome from './pages/Welcome'
import Shop from './pages/Shop'
import ShopDetails from './pages/ShopDetails'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Welcome />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop-detail" element={<ShopDetails />} />
      </Route>
    </Routes>
  )
}

export default App
