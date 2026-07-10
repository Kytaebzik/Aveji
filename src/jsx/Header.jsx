import { useEffect, useState } from 'react'
import logo from '../assets/image/logo.svg' 
import burger from '../assets/image/burger.svg' 

import '../scss/Header.scss'
 
function Header() {
    
    useEffect(() => {
        const tel = document.querySelector('.header__tel')
        const tel2 = document.querySelector('.header__tele')

        const handleClick = () => {
            navigator.clipboard.writeText('79999999999')
        }

        tel.addEventListener('click', handleClick)
        tel2.addEventListener('click', handleClick)
        
        const burger = document.querySelector('.header__menu');
        const menu = document.querySelector('.header__mobile-menu-dis')
        const close = document.querySelector('.header__mobile__close')

        burger.addEventListener('click', () => {
            menu.classList.add('header__mobile-menu-act')
        });
        close.addEventListener('click', () => {
            menu.classList.remove('header__mobile-menu-act')
        })

        return () => {
            tel.removeEventListener('click', handleClick)
            tel2.removeEventListener('click', handleClick)
        }
    })


    return (
        <>
            <div className="header">
                <div className="header__logo"><img src={logo} alt="" /></div>
                <ul className="header__ul">
                    <li className="header__ul__item"><a href="#">О нас</a><span className="header__ul__item__line"></span></li>
                    <li className="header__ul__item"><a href="#">Проекты</a><span className="header__ul__item__line"></span></li>
                    <li className="header__ul__item"><a href="#">Материалы</a><span className="header__ul__item__line"></span></li>
                    <li className="header__ul__item"><a href="#">Отзывы</a><span className="header__ul__item__line"></span></li>
                </ul>
                <div className="header__tel">+7 999 999 99 99</div>
                <div className="header__menu"><img src={burger} alt="" /></div>
                <div className="header__mobile-menu-dis">
                    <div className="header__mobile__close">Закрыть</div>
                    <ul className="header__mobile__ul">
                        <li className="header__mobile__ul__item"><a href="#">О нас</a></li>
                        <li className="header__mobile__ul__item"><a href="#">Проекты</a></li>
                        <li className="header__mobile__ul__item"><a href="#">Материалы</a></li>
                        <li className="header__mobile__ul__item"><a href="#">Отзывы</a></li>
                        <li className="header__mobile__ul__item header__tele">+7 999 999 99 99</li>
                    </ul>    
                </div>
            </div>
        </>
    )
 
}
export default Header