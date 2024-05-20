import { FunctionComponent } from 'react';
import img1 from '../../../assets/Hero.png'
import Hero from '../../Components/Hero/Hero';

const ShowHero: FunctionComponent = () => {
return (
    <Hero 
    img={img1}
    title1=" Software Engineering "
    title2 =" looking For a FullStack developer"
    desc= " i have experience in React and Laravel"
    btn1= " DownLoad Cv "
/>);
};

export default ShowHero;