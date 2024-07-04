
import { Navbar } from './components/navbar/navbar';
import AppRoutes from './routes';

function App() {
  return (
    <> <Navbar/>
      <div className='container'>
        <AppRoutes />
      </div>
    </>
  )
}

export default App
