import React from "react";

export const Coffee = ({ setter, value, header }) =>{

    return(
        <div className="numOfCups">
            <label>{header}</label>
            <input 
            type="number"
            name="numOfCups"
            placeholder="1"
            value={value} onChange={(e)=>setter(parseFloat(e.target.value))}/>
        </div>
    )
}

Coffee.propTypes = {
    setter: propTypes.func,
    value: propTypes.number,
    header: propTypes.string
}