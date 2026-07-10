import { useState } from 'react'
 
import '../scss/Work.scss'
 
function Work() {
 
    return (
        <>
            <div className="work">
                <div className="work__text">Как мы работаем</div>
                <div className="work__disc">Алгоритм работы с нами для удобства и понимания проекта</div>
                <div className="work__ul">
                    <div className="work__ul__item">
                        <div className="work__ul__item__name">Идея</div>
                        <div className="work__ul__item__disc">Клиент приходит к нам с идеей. Это может быть изображение/ эскиз или другой референс. А мы думаем над тем, как это реализовать, делаем технические чертежи и предлагаем решения по материалам.</div>
                        <div className="work__ul__item__line"></div>
                    </div>
                    <div className="work__ul__item">
                        <div className="work__ul__item__name">Техническое задание</div>
                        <div className="work__ul__item__disc">Вместе с клиентом формулируем корректное ТЗ, которое включает в себя визуализацию изделия, эскизный чертёж с габаритами, информацию по материалам и отделке, срок реализации проекта и другие обязательные пункты.</div>
                        <div className="work__ul__item__line"></div>
                    </div>
                    <div className="work__ul__item">
                        <div className="work__ul__item__name">Коммерческое предложение</div>
                        <div className="work__ul__item__disc">Предпочтительно используем натуральные материалы. Но любую смету можем оптимизировать, упростив материалы или конструктив. Сможем подстроиться под бюджет клиента и согласуем коммерческое предложение</div>
                        <div className="work__ul__item__line"></div>
                    </div>
                    <div className="work__ul__item">
                        <div className="work__ul__item__name">Подготовка рабочего проекта</div>
                        <div className="work__ul__item__disc">Создадим рабочую документацию и чертежи. Это фундамент качественного производства. На этом этапе утверждаем с клиентом все габариты и материалы, чертежи и приступаем к производству.</div>
                        <div className="work__ul__item__line"></div>
                    </div>
                    <div className="work__ul__item">
                        <div className="work__ul__item__name">Производство и монтаж</div>
                        <div className="work__ul__item__disc">Производство занимает от 15 рабочих дней, в зависимости от сложности и объёма. Монтажом тоже занимаемся самостоятельно. Ведь мы это сделаем быстро и аккуратно.</div>
                        <div className="work__ul__item__line"></div>
                    </div>
                </div>
            </div>
        </>
    )
 
}
export default Work