import { useState } from 'react'
import order from '../assets/image/order.png'
import GP from '../assets/image/GooglePlay.png'
import AS from '../assets/image/AppStore.png'
 
import '../scss/Order.scss'
 
function Order() {
 
    return (
        <>
            <div className="order">
                <div className="order__text">Хотите заказать проект?</div>
                <div className="order__disc">Оставьте заявку, и мы вам перезвоним</div>
                <div className="order__form">
                    <form action="#" method="post">
                        <input type="text" name='name' className="order__form__name" placeholder='Имя' required/>
                        <input type="email" name='email' className="order__form__email" placeholder='E-mail' required/>
                        <input type="tel" name='phone' className="order__form__tel" placeholder='Телефон' required/>
                        <button className="order__form__button" type='submit'>Отправить заявку</button>
                    </form>
                </div>
                <div className="order__link">
                    <div className="order__link__appstore"><a href="#"><img src={AS} alt="" /></a></div>
                    <div className="order__link__googleplay"><a href="#"><img src={GP} alt="" /></a></div>
                </div>
                <div className="order__photo"><img src={order} alt="" /></div>
            </div> 
        </>
    )
 
}
export default Order