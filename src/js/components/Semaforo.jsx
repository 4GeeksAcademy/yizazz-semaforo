import react, { useState } from "react"

const Semaforo = ()=>{
    return <div id="Box" className="container">
        <div id="superior" className="row">        
              <div id="left" className="col-5"></div>
              <span className="col-2"></span>
              <div id="right"className="col-5"></div>
      
        </div>
        <div id="bordeSuperior" className="row">
          <div id="Lights">
            <div id="red"></div>
            <div id="orange"></div>
            <div id="green"></div>
          </div>        
        </div>
    </div>
}
export {Semaforo};