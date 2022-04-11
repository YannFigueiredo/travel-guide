import logo from '../../assets/logo.png';
import { HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { ContainerHeader, Logo, TituloSite, Menu } from './style';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/Themes';
import { useState, useEffect, useContext } from 'react';

export default function Header(){
    const [ menu, setMenu ] = useState(window.innerWidth >= 992 ? true : false);
    const [ mobile, setMobile ] = useState(window.innerWidth >= 992 ? false : true);
    const [ posScroll, setPosScroll ] = useState(window.scrollY);
    const [ pageActive, setPageActive ] = useState();

    const { headerTheme } = useContext(ThemeContext);

    useEffect(() => {
        switch(window.location.pathname){
            case '/':
                setPageActive('1');
                break;
            case '/news':
                setPageActive('2');
                break;
            case '/help':
                setPageActive('3');
                break;
            default:
                break;
        }
    }, [window.location.pathname]);

    useEffect(() => {
        window.addEventListener('resize', function(){
            if(window.innerWidth >= 992){
                setMobile(false);
                setMenu(true);
            }else{
                setMobile(true);
                setMenu(false);
            }
        })
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

    return(
        <ContainerHeader theme={headerTheme} posScroll={posScroll}>
            <div>
                <Logo posScroll={posScroll}>
                    <Link to='/'>
                        <img src={logo} alt='Logo do site'/>
                    </Link>
                </Logo>
                <TituloSite theme={headerTheme} posScroll={posScroll}>
                    <Link to='/'>Travel Guide</Link>
                    <span>Switzerland travel guide</span>
                </TituloSite>
            </div>
            <nav>
                {menu === false && <HiMenu size={25} color={headerTheme} style={{cursor: 'pointer'}} onClick={() => {setMenu(true)}}/>}
                {menu &&
                    <Menu theme={headerTheme} pageActive={pageActive}>
                        <Link to='/' onClick={window.innerWidth >= 992 ? ()=>{} : ()=>{setMenu(false)}}><li>Home</li></Link>
                        <Link to='/news' onClick={window.innerWidth >= 992 ? ()=>{} : ()=>{setMenu(false)}}><li>News</li></Link>
                        <Link to='/help' onClick={window.innerWidth >= 992 ? ()=>{} : ()=>{setMenu(false)}}><li>Help</li></Link>
                    </Menu>
                }
                {menu && mobile &&
                    (<AiOutlineClose size={20} color="#fff" style={{
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
                    }} onClick={() => {setMenu(false)}}/>)
                }
            </nav>
        </ContainerHeader>
    );
}