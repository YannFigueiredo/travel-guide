import logo from '../../assets/logo.png';
import { HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { ContainerHeader, Logo, TituloSite, Menu } from './style';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/Themes';
import { useState, useEffect, useRef, useContext } from 'react';

export default function Header(){
    const [menu, setMenu] = useState(false);
    const [ posScroll, setPosScroll ] = useState(window.scrollY);

    //const btnFecharMenu = useRef(null);
    //const btnMenu = useRef(null);

    const { headerTheme, setHeaderTheme } = useContext(ThemeContext);

    useEffect(() => {
        window.addEventListener('resize', function(){
            if(window.innerWidth >= 992){
                setMenu(true)
            }else{
                setMenu(false);
            }
        });

        if(window.innerWidth >= 992){
            setMenu(true);
        }else{
            setMenu(false);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', function(e){
            setPosScroll(window.scrollY);
        });
    }, []);

    useEffect(() => {
        if(menu && window.innerWidth < 992){
            document.querySelector('body').style.overflow = 'hidden';
        }else{
            document.querySelector('body').style.overflow = 'auto';
        }
    }, [menu]);

    useEffect(() => {
        var isFullScreen = document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen;

        document.addEventListener('webkitfullscreenchange mozfullscreenchange fullscreenchange', function(){
            console.log('ola');

            if(isFullScreen){
                console.log('tela cheia');
            }else{
                console.log('tela nao cheia');
            }
        });
    }, []);

    return(
        <ContainerHeader theme={headerTheme} posScroll={posScroll}>
            <div>
                <Logo>
                    <Link to='/'>
                        <img src={logo} alt='Logo do site'/>
                    </Link>
                </Logo>
                <TituloSite theme={headerTheme} posScroll={posScroll}>
                    <Link to='/'>Travel Guide</Link>
                    <span>Viagens nacionais e internacionais</span>
                </TituloSite>
            </div>
            <nav>
                <HiMenu size={25} color={headerTheme} style={{cursor: 'pointer', display: window.innerWidth >= 992 ? 'none' : 'block'}} onClick={() => {setMenu(!menu)}}/>
                {menu &&
                    <Menu theme={window.innerWidth < 992 ? 'current' : headerTheme}>
                        <Link to='/' onClick={window.innerWidth >= 992 ? ()=>{} : ()=>{setMenu(!menu)}}><li>Home</li></Link>
                        <Link to='/news' onClick={window.innerWidth >= 992 ? ()=>{} : ()=>{setMenu(!menu)}}><li>News</li></Link>
                        <Link to='/help' onClick={window.innerWidth >= 992 ? ()=>{} : ()=>{setMenu(!menu)}}><li>Help</li></Link>
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
                        zIndex: '999',
                        display: window.innerWidth >= 992 ? 'none' : 'block'
                    }} onClick={() => {setMenu(!menu)}}/>
                }
            </nav>
        </ContainerHeader>
    );
}