import {useState} from 'react'
import menuIcon from '../assets/menu_icon.svg'

function Menu() {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <div className={`navbar${isOpen ? ' opened' : ''}`}>
                <button onClick={() => setOpen(!isOpen)}>
                    <img src={menuIcon} alt="menu icon"/>
                </button>
            </div>
            {isOpen &&
                <div className="navbar-dropdown">
                    <div className="navbar-dropdown__content">
                        <div></div>
                    </div>
                </div>
            }

        </>
    )
}

export default Menu