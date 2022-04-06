import Social from '../../components/Social';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { GiSoccerBall, GiForkKnifeSpoon } from 'react-icons/gi';
import { ContainerHelp, IntroHelp, Contact, Options, Option } from './style';

export default function Help(){
    return(
        <ContainerHelp>
            <IntroHelp>
                <h1>Help Center</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mi diam, sagittis et nisi eu, pulvinar dictum nunc. Quisque malesuada nisl tortor. Proin aliquet scelerisque orci, vitae ornare nisl blandit ut tincidunt lacus a ipsum varius.</p>
                <hr/>
                <span>More info. Contact. Support.</span>
                <Social/>
            </IntroHelp>
            <Contact>
                <div>
                    <span>+012 3456 678</span>
                    <span>mail@example.com</span>
                    <span>
                        Neumühlequai<br/>
                        8001 Zürich
                    </span>
                </div>
                <hr/>
            </Contact>
            <Options>
                <Option>
                    <div>
                        <HiOutlineOfficeBuilding className='icone' size={50} color='rgb(240, 83, 81)'/>  
                    </div>
                    <div>
                        <h3>Accommodation</h3>
                        <p>Nunc ut ornare est. Sed lacus ipsum, maximus quis mattis.</p>
                    </div>
                </Option>
                <Option>
                    <div>
                        <GiSoccerBall className='icone' size={50} color='rgb(241, 183, 82)'/>
                    </div>
                    <div>
                        <h3>Activities</h3>
                        <p>Duis eget imperdiet risus, non ultricies dui quam semper.</p>
                    </div>
                </Option>
                <Option>
                    <div>
                        <GiForkKnifeSpoon className='icone' size={50} color='rgb(183, 83, 239)'/>
                    </div>
                    <div>
                        <h3>Food</h3>
                        <p>Proin viverra mauris vitae eros interdum posuere phasellus </p>
                    </div>
                </Option>
            </Options>
        </ContainerHelp>
    );
}