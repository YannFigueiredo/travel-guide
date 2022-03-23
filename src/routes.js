import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Help from './pages/Help';

import Header from './components/Header';

const Rotas = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/help' element={<Help/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;