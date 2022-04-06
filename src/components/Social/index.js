import { BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs';
import { ContainerSocial } from './style';

export default function Social(){
    return(
        <ContainerSocial>
            <BsFacebook className='btn-social' size={20} color='#fff' style={{
                backgroundColor: 'rgb(23, 120, 242)'
            }}/>
            <BsTwitter className='btn-social' size={20} color='#fff' style={{
                backgroundColor: 'rgb(29, 161, 242)'
            }}/>
            <BsYoutube className='btn-social' size={20} color='#fff' style={{
                backgroundColor: 'rgb(255, 0, 0)'
            }}/>
        </ContainerSocial>
    );
}