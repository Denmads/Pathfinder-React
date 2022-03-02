import React, { ChangeEvent, useEffect, useState } from 'react'
import Globals from '../../../globals'

function ToolSelector() {

    const [showSetting, setShowSetting] = useState(false)

    const updateTool = (event: ChangeEvent<HTMLSelectElement>) => {
        Globals.engine.setSelectedTool(event.currentTarget.value)

        setShowSetting(event.currentTarget.value === "weight")
    }

    const updateSetting = (event: React.KeyboardEvent<HTMLInputElement>) => {
        Globals.engine.setToolSetting(event.currentTarget.value)
    }

    const toolChanged = (val: string)  => {
        const el = document.querySelector("#tool-selector")! as HTMLSelectElement
        el.value = val
        setShowSetting(val === "weight")
    }

    useEffect(() => {
        Globals.engine.addToolChangeListener(toolChanged)

        return () => {
            Globals.engine.removeToolChangeListener(toolChanged)
        }
    }, [])

    return (
        <div className="tool-selection">
            <select id="tool-selector" onChange={updateTool}>
                <option key="-1" value="" disabled selected>Select Tool</option>
                {
                    Globals.engine.getAllTools().map((tool, index) => <option key={index} value={tool.id}>{tool.name}</option>)
                }
            </select>
            <input id="tool-setting" type="text" style={{display: showSetting ? "block" : "none"}} onKeyUp={updateSetting} defaultValue="1"></input>
        </div>
    )
}

export default ToolSelector
