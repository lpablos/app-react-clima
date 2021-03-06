import React, {Fragment, useState} from 'react'
import Error from './Error'
import PropTypes from 'prop-types'

const Formulario = ({busqueda, setBusqueda, setConsultar}) => {
    
    // Fragmentar a busqueda para el value
    const { ciudad, pais} = busqueda;

    // Function que coloca los elementos en el state
    const handleChange = e => {        
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    const [error, setError] = useState(false)

    const handleSubmit = e =>{
        
        e.preventDefault()
        // Validar
        if(ciudad.trim()==='' || pais.trim() === ''){
            setError(true)
            return
        }
        setError(false)
        // Pasarlo al componente principal
        setConsultar(true)
    }
    return (
        <Fragment>            
            <form onSubmit={handleSubmit} method="post">
                {
                error 
                ? <Error mensaje="Todos los campos son obligatorios"/>
                : null
                }
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
                <div className="input-field col s12">
                    <button className="waves-effect waves-light btn-large btn-block yellow accent-4" type="submit">
                        Buscar Clima
                    </button>
                </div>
            </form>
        </Fragment>
    )   
}

Formulario.propTypes = {
    busqueda : PropTypes.object.isRequired, 
    setBusqueda : PropTypes.func.isRequired,
    setConsultar : PropTypes.func.isRequired
}

export default Formulario
