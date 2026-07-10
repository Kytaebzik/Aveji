import { useState } from 'react'
import hero1 from '../assets/image/hero1.png' 
import hero2 from '../assets/image/hero2.png' 

import '../scss/Hero.scss'
 
function Hero() {
 
    return (
        <>
            <div className="hero">
                <div className="hero__text"> <div className="hero__text__text">Эксклюзивная и нестандартная мебель для дома</div></div>
                <div className="hero__text__info">Мы можем произвести любую мебель для вашего проекта и найти производственное решение любой задумки.</div>
                <div className="hero__button"><a href="#">ЗАКАЗАТЬ ПРОЕКТ</a></div>
                <div className="hero__photo1"><img src={hero1} alt="" /></div>
                <div className="hero__photo2"><img src={hero2} alt="" /></div>
            </div>
        </>
    )
 
}
export default Hero