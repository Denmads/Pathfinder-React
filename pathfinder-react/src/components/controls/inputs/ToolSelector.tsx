import React from 'react'

function ToolSelector() {
    return (
        <div className="tool-selection">
            <select>
                <option value="" disabled selected>Select Tool</option>
            </select>
            <input id="tool-setting" type="text"></input>
        </div>
    )
}

export default ToolSelector
