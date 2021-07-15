import React, {Fragment, useState, useEffect} from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'

const App = () => {
  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: 'MX'

  })

  const [consultar, setConsultar] = useState(false)
  
  const {ciudad, pais} = busqueda

  useEffect(() => {
    if(consultar){
      const consultarAPI = async ()=>{
        const appId = '26c1084d972c52760dea736e66166909'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
        const respuesta = await fetch(url)
                          .then(peticcion=> peticcion.json())
        console.log("PEticion", respuesta);
      }
      consultarAPI()
    }
    
  }, [ciudad, consultar, pais])
  return (
    <Fragment>
      <Header titulo="Clima React App"/>
      <div className="contenedor-form">
        <div className="row">
          <div className="col m6 s12">
            <Formulario
            busqueda={busqueda}
            setBusqueda={setBusqueda}
            setConsultar={setConsultar}/>
          </div>
          <div className="col m6 s12">
            2
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App

