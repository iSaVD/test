import {useState} from 'react'
import photoIcon from '../assets/photo_icon.svg'
import textIcon from '../assets/text_icon.svg'
import decorIcon from '../assets/decor_icon.svg'
import templateIcon from '../assets/template_icon.svg'

function Tabs () {
    const[active, setActive] = useState(-1)

    const tabs = [
        {
            name: 'Фото',
            icon: photoIcon,
            code: 'photo'
        },
        {
            name: 'Текст',
            icon: textIcon,
            code: 'text'
        },
        {
            name: 'Декоры',
            icon: decorIcon,
            code: 'decor'
        },
        {
            name: 'Шаблоны',
            icon: templateIcon,
            code: 'template'
        },
    ]

    return (
        <>
            <div className="tabs-content">

            </div>
            <div className="tabs-nav">
                {tabs.map((value, index) => {
                    return (
                        <div
                            key={index}
                            className={`tabs-nav-item${active === index ? ' active' : ''}` + ' tab-nav-' + value.code}
                            onClick={() => setActive(index)}
                        >
                            <div className="tabs-nav-item__icon">
                                <img src={value.icon} alt={value.code + ' icon'}/>
                            </div>
                            <div className="tabs-nav-item__title">
                                {value.name}
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Tabs