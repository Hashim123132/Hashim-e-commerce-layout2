import './App.css';
import {BrowserRouter , Routes , Route , Link , NavLink} from 'react-router-dom'

//PAGES
import HOME from './PAGES/HOME';
import Product from './PAGES/PRODUCT';

function App() {
  return (
    <BrowserRouter>
    <header>
      <nav>
        <NavLink className='' to='/'>HOME</NavLink>
        <NavLink to='product'>Product</NavLink>
      </nav>
    </header>
    <main>
      <Routes>
        <Route index element={<HOME />} />
        <Route path='Product' element={<Product />} />
      </Routes>
    </main>
    </BrowserRouter>


);
}

export default App;
