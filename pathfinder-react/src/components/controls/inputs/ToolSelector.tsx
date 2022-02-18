import React, { ChangeEvent, useEffect, useState } from 'react'
import { PropsWithEngine } from '../../../App'

function ToolSelector(props: PropsWithEngine) {

    const [showSetting, setShowSetting] = useState(false)

    const updateTool = (event: ChangeEvent<HTMLSelectElement>) => {
        props.pathEngine.setSelectedTool(event.currentTarget.value)

        setShowSetting(event.currentTarget.value === "weight")
    }

    const updateSetting = (event: React.KeyboardEvent<HTMLInputElement>) => {
        props.pathEngine.setToolSetting(event.currentTarget.value)
    }

    const toolChanged = (val: string)  => {
        const el = document.querySelector("#tool-selector")! as HTMLSelectElement
        el.value = val
        setShowSetting(val === "weight")
    }

    useEffect(() => {
        props.pathEngine.addToolChangeListener(toolChanged)

        return () => {
            props.pathEngine.removeToolChangeListener(toolChanged)
        }
    }, [])

    return (
        <div className="tool-selection">
            <select id="tool-selector" onChange={updateTool}>
                <option key="-1" value="" disabled selected>Select Tool</option>
                {
                    props.pathEngine.getAllTools().map((tool, index) => <option key={index} value={tool.id}>{tool.name}</option>)
                }
            </select>
            <input id="tool-setting" type="text" style={{display: showSetting ? "block" : "none"}} onKeyUp={updateSetting} defaultValue="1"></input>
        </div>
    )
}

export default ToolSelector
