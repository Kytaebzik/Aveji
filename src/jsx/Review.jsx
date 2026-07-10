import { useState } from 'react'
import icon from '../assets/image/icon.svg' 

import '../scss/Review.scss'
 
function Review() {
 
    return (
        <>
            <div className="rev">
                <div className="rev__text">Отзывы</div>
                <div className="rev__item">
                    <div className="rev__item__img"><img src={icon} alt="" /></div>
                    <div className="rev__item__name">Игорь Антонов</div>
                    <div className="rev__item__disc">Обратилась к Aveji по рекомендации. Команда сразу поняла, какой дизайн я хочу. Предоставили несколько вариантов и в течение недели сделали наброски. Итог понравился, все на высшем уровне.</div>
                </div>
                <div className="rev__item">
                    <div className="rev__item__img"><img src={icon} alt="" /></div>
                    <div className="rev__item__name">Ольга Иванова</div>
                    <div className="rev__item__disc">После пары заказов у компании Aveji убедилась, что за мебелью теперь только к ним. Абсолютно любые решения, в любых размерах и форм-факторе, то что нужно!</div>
                </div>
                <div className="rev__item">
                    <div className="rev__item__img"><img src={icon} alt="" /></div>
                    <div className="rev__item__name">Аркадий Макаров</div>
                    <div className="rev__item__disc">Aveji — настоящие профессионалы своего дела. Быстро поняли мою задумку, сделали дизайн, согласовали и изготовили мебель. А потом еще и бесплатно все собрали на месте. Большое спасибо!</div>
                </div>
            </div>
        </>
    )
 
}
export default Review