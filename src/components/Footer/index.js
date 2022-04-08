import { Link } from 'react-router-dom';
import { ContainerFooter } from './style';

export default function Footer(){
    return(
        <ContainerFooter>
            <nav>
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/news'><li>News</li></Link>
                    <Link to='/help'><li>Help</li></Link>
                </ul>
            </nav>
        </ContainerFooter>
    );
}