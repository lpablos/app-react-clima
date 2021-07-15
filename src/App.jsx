import React, {Fragment, useState, useEffect} from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import Clima from './components/Clima'
import Error from './components/Error'

const App = () => {
  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: ''

  })

  const [consultar, setConsultar] = useState(false)
  
  const {ciudad, pais} = busqueda

  const [resultado, setResultado] = useState({})
  
  const [error, setError] = useState(false)

  // Carga condicionar de componente
  let componente = (error)
    ?<Error mensaje="No hay resultados"/>
    :<Clima resultado={resultado}/>

  useEffect(() => {
    if(consultar){
      const consultarAPI = async () =>{
        const appId = '26c1084d972c52760dea736e66166909'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
        const respuesta = await fetch(url)
                          .then(peticcion=> peticcion.json())
        setResultado(respuesta)
        setConsultar(false)
        //Dectar si existen resultados correctos
        if(resultado.cod === '404'){
          setError(true)
        }else{
          setError(false)
        }
      }
      consultarAPI()
    }
    
  }, [ciudad, consultar, pais, resultado])

 

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
            {/* Aqui despliege del componente condicional */}
            {componente}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App

