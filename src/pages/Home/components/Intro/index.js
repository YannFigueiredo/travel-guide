import { BiSearch } from 'react-icons/bi';
import { FaFolderOpen } from 'react-icons/fa';
import { GiPositionMarker } from 'react-icons/gi';
import { BsArrowRight } from 'react-icons/bs';
import { useState } from 'react';
import card1 from '../../../../assets/intro-hiking.jpg';
import card2 from '../../../../assets/intro-skiing.jpg';
import card3 from '../../../../assets/intro-hotels.jpg';
import card4 from '../../../../assets/intro-food.jpg';
import { ContainerIntro, Presentation, Cards } from './styles';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../../../contexts/Themes';

export default function Intro(){
    const [ cards, setCards ] = useState([
        {id: '1', photo: card1, caption: 'Hiking', color: 'rgb(241, 183, 83)'},
        {id: '2', photo: card2, caption: 'Skiing', color: 'rgb(89, 179, 239)'},
        {id: '3', photo: card3, caption: 'Hotels', color: 'rgb(241, 83, 82)'},
        {id: '4', photo: card4, caption: 'Food', color: 'rgb(183, 82, 241)'}
    ]);

    const { headerTheme, setHeaderTheme } = useContext(ThemeContext);
    
    useEffect(() => {setHeaderTheme('#222222');}, []);

    useEffect(() => {
        window.addEventListener('scroll', function(e){
            setHeaderTheme('#222222');
        });
    }, []);
    
    return(
        <ContainerIntro>
            <Presentation>
                <div>
                    <h1>New adventure awaits you in the scapes of <span>Switzerland</span></h1>
                    <p>Explore many places, trails ranging from hiking to biking and handful of other activities. Plan your visit with a help of a vast list of accommodation and other facilities.</p>
                    <div>
                        <div>
                            <BiSearch size={24} color="#909090" className='icon-search'/>
                            <input type='search' placeholder='Search keyword'/>
                        </div>
                        <FaFolderOpen size={23} color="#909090" className='btn-category'/>
                        <GiPositionMarker size={23} color="#909090" className='btn-position'/>
                        <button>Search</button>
                    </div>
                </div>
                <div></div>
            </Presentation>
            <Cards>
                    {cards.map(card => (
                        <div key={card.id}>
                            <img src={card.photo} alt='Card Photo' style={{borderBottom: '8px solid ' + card.color}}/>
                            <h3>{card.caption}</h3>
                        </div>
                    ))}
            </Cards>
        </ContainerIntro>
    );
}