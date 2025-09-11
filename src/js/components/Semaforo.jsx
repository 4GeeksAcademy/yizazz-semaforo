import react, { useState } from "react"

const Semaforo = () => {

  const [luzEncendida, setLuzEncendida] = useState(null);
  const luces = [
    { color: "red" },
    { color: "orange" },
    { color: "green" },
  ];

  const prenderApagar = (color) => {
     setLuzEncendida(luzEncendida === color ? null : color)
  }

  return (

    <div id="Box" className="container">
      <div id="container1">
        <div id="superior" className="row">
          <div id="left" className="col-5"></div>
          <span id="middle" className="col-2"></span>
          <div id="right" className="col-5"></div>

        </div>
      </div>
      <div id="container2" className="row">
        <div id="Lights">
          {luces.map((luz) => (
            <div
              key={luz.color}
              onClick={() => prenderApagar(luz.color)}
              className={`light ${luz.color} ${luzEncendida === luz.color ? "on" : "off"}`}>
            </div>
          ))}

        </div>
      </div>
    </div>

  )
}
export { Semaforo };