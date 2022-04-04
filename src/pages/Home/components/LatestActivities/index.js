import { useState } from "react";
import { GiPositionMarker } from 'react-icons/gi';
import act1 from '../../../../assets/intro-act1.jpg';
import act2 from '../../../../assets/intro-act2.jpg';
import act3 from '../../../../assets/intro-act3.jpg';
import act4 from '../../../../assets/intro-act4.jpg';

import { Activitie } from "./style";

export default function LatestActivities(){
    const [ activies, setActivities ] = useState([
        {id: '1', photo: act1, title: 'Burgalp Run Challenge', caption: 'Popular running trail', local: 'Interlaken-Oberhasli', category: 'Trail running'},
        {id: '2', photo: act2, title: 'Schwarzenberg-Grundbach', caption: 'Motocross dirt racing track', local: 'Bern', category: 'Dirtbike'},
        {id: '3', photo: act3, title: 'Around Matterhorn', caption: 'Schwarzsee-Stafelalp', local: 'Zermatt', category: 'Hiking'},
        {id: '4', photo: act4, title: 'M-T Connect', caption: 'Road back to the World', local: 'Bern', category: 'Mountain Bike'},
    ]);
    
    return(
        <section>
            {activies.map(act => (
                <Activitie key={act.id}>
                    <div>
                        <img src={act.photo} alt={act.title}/>
                    </div>
                    <div>
                        <h3>{act.title}</h3>
                        <span>{act.caption}</span>
                    </div>
                    <span>{act.local}</span>
                    <span>{act.category}</span>
                </Activitie>
            ))}
        </section>
    );
}