import React, { useState } from 'react'
import Button from "../components/Button"

const TemperatureControllerApp = () => {
    const [temperature, setTemperature] = useState(0)
    const increaseTemperature = () =>{
        setTemperature(temperature + 1)
    }
    const decreaseTemperature = () =>{
        setTemperature(temperature - 1)
    }
    const resetTemperature = () =>{
        setTemperature(0)
    }
  return (
    <div className='container mt-3 text-center'>
        <div className="card bg-light m-auto" style={{width:200}}> 
            <h1 
            className= {`text-light card border-50 ${ temperature > 0 ? "bg-danger" : temperature < 0 ? "bg-info" : "bg-success"}`}
            style={{height:150,width:150,border:"2px solid #666"}}
            >{temperature}° C
            </h1>
            <br/>
            <h3>Set Temperature</h3>
            <div className="d-flex my-2">
                <Button text='-' btnClass={"btn-lg"} onClick={decreaseTemperature}/>
                <Button text='+' btnClass={"btn-lg"} onClick={increaseTemperature}/>
            </div>
                <Button text='Reset' btnClass={"btn-lg"} onClick={resetTemperature}/>
        </div>
    </div>
  )
}

export default TemperatureControllerApp