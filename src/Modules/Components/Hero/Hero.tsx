import { FunctionComponent } from 'react';
import './Hero.css'

interface HeroProps {
    img: string;
    title1: string;
    title2: string;
    desc: string;
    btn1: string;
}

const Hero: FunctionComponent<HeroProps> = ({ img, title1, title2, desc, btn1 }) => {
    return (
        <div className="container heroHight">
            <div className="hero">
                <div className="background-box square1"></div>
                <div className="background-box square2"></div>
                <img src={img} alt="" />
                <div className="info">
                    <h5>{title1}</h5>
                    <h1>{title2}</h1>
                    <p>{desc}</p>
                    <button>{btn1}</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;