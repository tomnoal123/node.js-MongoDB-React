import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Produkty from './pages/Produkty';
import About from './pages/About';
import Home from './pages/Home';
import Navbar from './compotents/Navbar';
import ProductDetails from './pages/ProductDetails'
function App(){
    return(
        
        <BrowserRouter>

        <Navbar />


        <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/produkty' element={<Produkty />} />

            <Route path='/about' element={<About />} />

            <Route path='/products/:id' element={<ProductDetails />} />

        </Routes>

        </BrowserRouter>
    )
}
export default App;