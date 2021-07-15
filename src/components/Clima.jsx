import React from 'react'

const Clima = ({resultado}) => {
    const { name, main } = resultado 
    if(!name) return null;
    const kelvin = 273.15
    return (
        
        <div className="card-panel white s12">
            <div className="black-text">
                <h2>El clima de {name} es: </h2>
                <p className="temperatura">
                    { parseFloat(main.temp - kelvin).toFixed(2) } <span>° C</span>
                </p>
                <p>
                    Temp. Máxima
                    { parseFloat(main.temp_max - kelvin).toFixed(2) } <span>° C</span>
                </p>
                <p>
                    Temp. Mínima
                    { parseFloat(main.temp_max - kelvin).toFixed(2) } <span>° C</span>
                </p>
            </div>
        </div>
    )
}

export default Clima
