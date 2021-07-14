import React, {Fragment, useState} from 'react'

const Formulario = () => {
    const [busqueda, setBusqueda] = useState({
        ciudad: '',
        pais: 'MX'

    })
    // Fragmentar a busqueda para el value
    const { ciudad, pais} = busqueda;

    // Function que coloca los elementos en el state
    const handleChange = e => {        
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }
    return (
        <Fragment>
            <h1>Formulario</h1>
            <form action="" method="post">
                <div className="input-field col s12">
                    <input type="text" 
                        name="ciudad" 
                        id="ciudad" 
                        value={ciudad} 
                        onChange={handleChange}/>
                    <label htmlFor="ciudad">Ciudad</label>
                </div>
                <div className="input-field col s12">                    
                    <select 
                        name="pais" 
                        id="pais" 
                        value={pais} 
                        onChange={handleChange}>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">México</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="PE">Perú</option>
                    </select>
                    <label htmlFor="pais">Pais</label>
                </div>
            </form>
        </Fragment>
    )   
}

export default Formulario
