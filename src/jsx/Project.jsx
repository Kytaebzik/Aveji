import { useState } from 'react'
import arrow from '../assets/image/arrow.svg'
 
import '../scss/Project.scss'
 
function Project() {
 
    return (
        <>
            <div className="proj">
                <div className="proj__name">Проекты</div>
                <div className="proj__flexer">
                    <a href="#" className="proj__item proj__item__first">
                        <div className="proj__item__pod">
                            <div className="proj__item__pod__text">Тумба под телевизор</div>
                            <div className="proj__item__pod__link-photo"><img src={arrow} alt="" /></div>
                        </div>
                    </a>
                    <a href="#" className="proj__item proj__item__second">
                        <div className="proj__item__pod">
                            <div className="proj__item__pod__text">Тумба под телевизор</div>
                            <div className="proj__item__pod__link-photo"><img src={arrow} alt="" /></div>
                        </div>
                    </a>
                    <a href="#" className="proj__item proj__item__third">
                        <div className="proj__item__pod">
                            <div className="proj__item__pod__text">Тумба под телевизор</div>
                            <div className="proj__item__pod__link-photo"><img src={arrow} alt="" /></div>
                        </div>
                    </a>
                    <a href="#" className="proj__item proj__item__four">
                        <div className="proj__item__pod">
                            <div className="proj__item__pod__text">Тумба под телевизор</div>
                            <div className="proj__item__pod__link-photo"><img src={arrow} alt="" /></div>
                        </div>
                    </a>
                    <a href="#" className="proj__item proj__item__five">
                        <div className="proj__item__pod">
                            <div className="proj__item__pod__text">Тумба под телевизор</div>
                            <div className="proj__item__pod__link-photo"><img src={arrow} alt="" /></div>
                        </div>
                    </a>
                    <a href="#" className="proj__item proj__item__six">
                        <div className="proj__item__pod">
                            <div className="proj__item__pod__text">Тумба под телевизор</div>
                            <div className="proj__item__pod__link-photo"><img src={arrow} alt="" /></div>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
 
}
export default Project