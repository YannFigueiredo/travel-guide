import logo from '../../assets/logo.png';
import { HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { ContainerHeader, Logo, TituloSite, Menu } from './styles';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

export default function Header(){
    const [menu, setMenu] = useState(false);

    const btnFecharMenu = useRef(null);
    const btnMenu = useRef(null);

    useEffect(() => {
        window.addEventListener('resize', function(){
            if(window.innerWidth >= 992){
                setMenu(true)
            }else{
                setMenu(false);
            }
        });

        if(window.innerWidth >= 992){
            setMenu(true)
        }else{
            setMenu(false);
        }
    }, []);

    return(
        <ContainerHeader>
            <div>
                <Logo>
                    <Link to='/'>
                        <img src={logo} alt='Logo do site'/>
                    </Link>
                </Logo>
                <TituloSite>
                    <Link to='/'>Travel Guide</Link>
                    <span>Viagens nacionais e internacionais</span>
                </TituloSite>
            </div>
            <nav>
                <HiMenu size={25} color="black" style={{cursor: 'pointer', display: window.innerWidth >= 992 ? 'none' : 'block'}} onClick={() => {setMenu(!menu)}} ref={btnMenu}/>
                {menu &&
                    <Menu>
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/news'><li>News</li></Link>
                        <Link to='/help'><li>Help</li></Link>
                    </Menu>
                }
                {menu && 
                    <AiOutlineClose size={20} color="#fff" style={{
                        fontFamily: 'Barlow',
                        fontWeight: '900',
                        position: 'absolute',
                        top: '0',
                        right: '0',
                        backgroundColor: 'rgb(242, 83, 83)',
                        paddingTop: '10px',
                        paddingBottom: '10px',
                        paddingRight: '20px',
                        paddingLeft: '20px',
                        cursor: 'pointer',
                        boxSizing: 'content-box',
                        display: window.innerWidth >= 992 ? 'none' : 'block'
                    }} onClick={() => {setMenu(!menu)}} ref={btnFecharMenu}/>
                }
            </nav>
        </ContainerHeader>
    );
}