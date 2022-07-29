import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({crearCita}) => {
//crear state de cita
const[cita,actualizarCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
})

const[error, actualizarError] = useState(false)

const actualizarState = e => {
    actualizarCita({
        ...cita,
        [e.target.name]: e.target.value
    })
}
const {mascota, propietario, fecha, hora, sintomas} = cita

//Cuando el usuario de click que mande el formulario
const submitCita = e => {
    e.preventDefault();
    
    //validar
    if(mascota.trim()==='' || propietario.trim()==='' || fecha.trim===''
    || hora.trim()==='' || sintomas.trim()===''){
      actualizarError(true)
      return
    }
    //Eliminar el mensaje previo
    actualizarError(false)
    //asignar ID
    cita.id = uuidv4();
    
    //Crear la cita
    crearCita(cita)

    //Reiniciar el formulario
    actualizarCita({
      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: ''
    })

    
}

  return (
    <Fragment>
      <h2>Crear Cita</h2>
      {error ? <p className="alerta-error">Rellene todos los campos</p>:null}
      <form
      onSubmit={submitCita}
      >
        <label>Nombre de la Mascota:</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre de la mascota"
          value={mascota}
          onChange={actualizarState}
        ></input>

        <label>Propietario:</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre del propietario"
          value={propietario}
          onChange={actualizarState}
        ></input>
 
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          value={fecha}
          onChange={actualizarState}
        ></input>


        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          value={hora}
          onChange={actualizarState}
        ></input>

      <label>Sintomas</label>
      <textarea
      className="u-full-width"
      name="sintomas"
      placeholder="Escriba los sintomas de su mascota aqui"
      value={sintomas}
      onChange={actualizarState}
      ></textarea>

      <button type="submit"
      className="u-full-width button button-primary"
      >Agregar Cita
      </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
