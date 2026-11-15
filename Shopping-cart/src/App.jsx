import Cart from './Components/Cart'
import ProductList from './Components/ProductList'
import { useCart } from './context/CartContext'
import './App.css'

function App() {
  const { totalItems } = useCart()

  return (
    <main className="app">
      <header className="app-header">
        <h1>My Store</h1>
        <p>Cart: {totalItems} {totalItems === 1 ? 'item' : 'items'}</p>
      </header>

      <div className="shop-layout">
        <ProductList />
        <Cart />
      </div>
    </main>
  )
}

export default App
