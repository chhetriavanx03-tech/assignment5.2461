import { useCart } from '../context/CartContext'

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 59.99,
    description: 'Noise-canceling over-ear headphones',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 129.99,
    description: 'Track fitness and notifications',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    price: 89.5,
    description: 'Portable speaker with deep bass',
    image: 'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'Gaming Mouse',
    price: 49.0,
    description: 'Ergonomic and ultra-responsive',
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80',
  },
]

function ProductList() {
  const { addToCart } = useCart()

  return (
    <div className="product-list">
      <h2>Featured Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="product-footer">
                <span className="price">${product.price.toFixed(2)}</span>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList
