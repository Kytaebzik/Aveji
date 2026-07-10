import { useState } from 'react'
 
import '../scss/Footer.scss'
 
function Footer() {
 
    return (
        <>
            <div className="footer">
                <span className="footer__links2"><a href="#">ВКОНТАКТЕ</a> <span className="footer__sl">/</span> <a href="#">ТЕЛЕГРАМ</a></span><br></br>
                <span className="footer__links"><a href="#">Политика конфедециальности</a> <span className="footer__sl">/</span> <a href="#">Оплата и доставка</a></span>
                <span className="footer__rights">
                    <div className="footer__rights__c">© 2023 Aveji</div>
                    <div className="footer__rights__right">Все права защищены</div>
                </span>
            </div>
        </>
    )
 
}
export default Footer