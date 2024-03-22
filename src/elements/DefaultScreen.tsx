import {useState} from "react";

const colors = [
    {
        name: 'Белый',
        code: 'white'
    },
    {
        name: 'Черный',
        code: 'black'
    },
    {
        name: 'Красный',
        code: 'red'
    }
]

const positions = [
    {
        name: 'Вид спереди',
        code: 'front'
    },
    {
        name: 'Вид сзади',
        code: 'back'
    },
    {
        name: 'Левое плечо',
        code: 'left'
    },
    {
        name: 'Правое плечо',
        code: 'right'
    },
]

function DefaultScreen() {
    const [color, setColor] = useState(0)
    const [position, setPosition] = useState(0)
    const [colorOpened, setColorOpened] = useState(false)
    const [positionOpened, setPositionOpened] = useState(false)

    return (
        <div className="default-screen">
            <div className="default-screen-content">
                <div className="color-chooser">
                    <div
                        className="color-chooser-current"
                        onClick={() => setColorOpened(!colorOpened)}
                    >
                        <div className={'product-color' + (colors[color] ? ' ' + colors[color].code : '')}></div>
                        <div className="product-color-title">{colors[color] ? colors[color].name : ''}</div>
                    </div>
                    {colorOpened &&
                        <div className="color-chooser-dropdown">
                            {colors.map((value, index) => {
                                if (index !== color) {
                                    return (
                                        <div
                                            key={index}
                                            className="color-chooser-dropdown__item"
                                            onClick={() => {setColor(index); setColorOpened(false)}}
                                        >
                                            <div className={'color-chooser-dropdown__item-icon ' + value.code }></div>
                                            <div className="color-chooser-dropdown__item-title">{value.name}</div>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    }
                </div>
                <div className="position-chooser">
                    <div
                        className="position-chooser-current"
                        onClick={() => setPositionOpened(!positionOpened)}
                    >
                        <div className="product-position-title">{positions[position] ? positions[position].name : ''}</div>
                    </div>
                    {positionOpened &&
                        <div className="color-position-dropdown">
                            {positions.map((value, index) => {
                                if (index !== position) {
                                    return (
                                        <div
                                            key={index}
                                            className="position-chooser-dropdown__item"
                                            onClick={() => {setPosition(index); setPositionOpened(false)}}
                                        >
                                            <div className="position-chooser-dropdown__item-title">{value.name}</div>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    }
                </div>
                <div
                    className={
                        'product-background ' +
                        (colors[color] ? ' ' + colors[color].code : '') +
                        (positions[position] ? '-' + positions[position].code : '')
                    }
                ></div>
            </div>
        </div>
    )
}

export default DefaultScreen