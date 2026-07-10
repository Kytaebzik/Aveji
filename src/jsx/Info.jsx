import { useState } from 'react'
 
import '../scss/Info.scss'
 
function Info() {
 
    return (
        <>
            <div className="info">
                <div className="info__textD">Более 5 лет создаем мебель для вашего комфорта</div>
                <div className="info__textM">О компании</div>
                <div className="info__info-block">
                    <div className="info__info-block__item">Мы — команда профессионалов, которые могут произвести любую мебель для вашего проекта, а также найти производственное решение любой задумки.</div>
                    <div className="info__info-block__item">Наша основная цель — реализовывать самые смелые задумки, и делать это качественно и аккуратно.</div>
                    <div className="info__info-block__item">В качестве материалов мы используем натуральные — стекло, дерево, бетон, камень, металл и эпоксидную смолу.</div>
                </div>
                <div className="info__achivments">
                    <div className="info__achivments__item">
                        <div className="info__achivments__item__name">1 год</div>
                        <div className="info__achivments__item__disc">гарантии на всю<br></br>продукцию</div>
                    </div>
                    <div className="info__achivments__item">
                        <div className="info__achivments__item__name">300+</div>
                        <div className="info__achivments__item__disc">выполненных<br></br>проектов</div>
                    </div>
                    <div className="info__achivments__item">
                        <div className="info__achivments__item__name">15 дней</div>
                        <div className="info__achivments__item__disc">срок производства</div>
                    </div>
                </div>
            </div>
        </>
    )
 
}
export default Info