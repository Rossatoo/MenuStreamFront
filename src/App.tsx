
import { Navbar } from './components/navbar/navbar';
import { CartProvider } from './context/CartContext';
import AppRoutes from './routes';

function App() {
  return (
    <CartProvider>
    <> <Navbar/>
      <div className='container'>
        <AppRoutes />
      </div>
    </>
    </CartProvider>
  )
}

export default App
