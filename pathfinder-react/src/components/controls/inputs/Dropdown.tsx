import React from 'react'
import '../controls.css'

export interface DropdownItem {
    name: string,
    value: string
}

export interface DropdownProps {
    btnColor?: string,
    btnTextColor?: string,
    btnText?: string,
    items: Array<DropdownItem>
    onSelect?: (val: string) => void
}

function Dropdown(props: DropdownProps) {

    const click = (event: React.MouseEvent<HTMLAnchorElement>) => {
        const val = event.currentTarget.getAttribute("data-value")

        if (props.onSelect && val != null)
            props.onSelect(val)
    }

    return (
        <div className="dropdown">
            <button className="dropbtn">{props.btnText || "Dropdown"}</button>
            <div className="dropdown-content">
                {
                    props.items.map(item => (<a href="#" data-value={item.value} onClick={click}>{item.name}</a>))
                }
            </div>
        </div>
    )
}

export default Dropdown
