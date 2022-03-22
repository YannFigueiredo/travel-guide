import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Help from './pages/Help';

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/help' element={<Help/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;