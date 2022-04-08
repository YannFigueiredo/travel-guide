import { useState } from 'react';
import { ContainerNews, IntroNews, SectionNews, Category, Banner, Description } from './style.js';
import news1 from '../../assets/news1.jpg';
import news2 from '../../assets/news2.jpg';
import news3 from '../../assets/news3.jpg';
import news4 from '../../assets/news4.jpg';
import news5 from '../../assets/news5.jpg';
import news6 from '../../assets/news6.jpg';

import Social from '../../components/Social';

import { ThemeContext } from '../../contexts/Themes';
import { useContext, useEffect } from 'react';

export default function News(){
    const { headerTheme, setHeaderTheme } = useContext(ThemeContext);
    
    useEffect(() => {setHeaderTheme('#222222');}, []);

    useEffect(() => {
        window.addEventListener('scroll', function(e){
            setHeaderTheme('#222222');
        });
    }, []);

    const [ news, setNews ] = useState([
        {id: '1', title: 'Changes to routes in Zermatt and around Matterhorn', photo: news1, date: '04 apr 2022', description: 'Etiam elementum, libero consectetur posuere ultricies, sem urna consequat dui, a lobortis massa orci id lectus. Curabitur ac semper mauris. Nam sed odio nec ipsum auctor maximus id eu risus. Suspendisse faucibus risus urna, ut aliquet mauris finibus eu.', categories: ['News']},
        {id: '2', title: "Don't miss these special offers, list of hotels included", photo: news2, date: '04 apr 2022', description: 'Cras placerat vulputate sapien, id sollicitudin est dictum ut. Praesent ut molestie tortor. Vestibulum volutpat orci non dolor ullamcorper dapibus id ac elit. Curabitur pharetra turpis augue, id elementum ante ornare nec. In mollis sagittis lectus, eget facilisis neque. Morbi tristique urna odio.', categories: ['Tips']},
        {id: '3', title: "Attention: New restrictions for tourists in Lauterbrunnen", photo: news3, date: '04 apr 2022', description: 'Suspendisse ullamcorper non ligula eu sodales. Mauris fringilla ligula ut dolor auctor, vel lacinia dui hendrerit. Sed rhoncus sit amet sem ac egestas. Vestibulum dolor risus, mattis et placerat rutrum, ultricies in odio. Donec vitae felis in arcu aliquam malesuada sit amet et diam.', categories: ['News', 'Tips']},
        {id: '4', title: "April update: New trails added", photo: news4, date: '04 apr 2022', description: 'Suspendisse ullamcorper non ligula eu sodales. Mauris fringilla ligula ut dolor auctor, vel lacinia dui hendrerit. Sed rhoncus sit amet sem ac egestas. Vestibulum dolor risus, mattis et placerat rutrum, ultricies in odio. Donec vitae felis in arcu aliquam malesuada sit amet et diam.', categories: ['News', 'Tips', 'Update']},
        {id: '5', title: "Restaurants you have to visit while staying at Switzerland", photo: news5, date: '04 apr 2022', description: 'Aenean auctor eu velit finibus blandit? Maecenas eleifend ex et orci interdum volutpat. Phasellus tempor faucibus nisi id molestie. Aenean egestas lectus mauris, a iaculis tortor malesuada quis. Etiam mollis elementum sapien non accumsan.', categories: ['Tips']},
        {id: '6', title: "City Tour in Zürich organized by Citadela Team soon", photo: news6, date: '04 apr 2022', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nibh nulla, bibendum sit amet euismod vel, commodo eget sem. Nullam hendrerit viverra blandit. Aenean ac justo vitae risus sagittis pellentesque. Sed tincidunt magna id justo porta volutpat.', categories: ['News']}
    ]);

    return(
        <ContainerNews>
            <IntroNews>
                <h1>News <br/><span>& Tips</span></h1>
                <p>
                    Aliquam erat volutpat. Maecenas a nunc velit. Fusce dui orci, auctor quis leo sit amet, scelerisque gravida lectus. Suspendisse potenti.
                </p>
                <hr/>
                <Social/>
            </IntroNews>
            <SectionNews>
                {news.map(item => (<article key={item.id}>
                    <Banner>
                        <span>{item.date}</span>
                        <img src={item.photo} alt={item.title}/>
                    </Banner>
                    <h3>{item.title}</h3>
                    <Description>{item.description}</Description>
                    <div>
                        {item.categories.map((category, key) => (<Category key={key}>{category}</Category>))}
                    </div>
                </article>))}
            </SectionNews>
        </ContainerNews>
    );
}