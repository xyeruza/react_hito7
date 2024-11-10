import React from 'react'
import { useState } from 'react';

const Login = () => {
  const [datos, setDatos] = useState({
    email: "",
    password: "",
  });
  const actualizarDatos = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };
    //Funcion antes de enviar formulario
    const validarInput = (e) => {
      e.preventDefault();
  
      // Validacion
      if (
        !datos.email.trim() ||
        !datos.password.trim()
        
      ) {
        alert("Todos los campos son obligatorios");
        return;
      }
      if (datos.password.length < 6) {
        alert("La password debe contener al menos 6 caracteres");
        return;
      }
        
      setDatos({
        email: "",
        password: "",
      });
      alert("Bienvenido!");
    };
  
    return (
    <>
    <main className="form-signin m-5 p-5">
      <div className="container formulario">
        <form onSubmit={validarInput} >
          <h1 className="h3 mb-3 fw-normal p-3">Login</h1>
          <input
            type="email"
            className="form-control"
            id="floatingEmail"
            name="email"
            onChange={actualizarDatos}
            placeholder="name@example.com"
            value={datos.email}
          />
          <br />
          <input
            type="text"
            className="form-control"
            id="floatingPassword"
            name="password"
            onChange={actualizarDatos}
            placeholder="Password"
            value={datos.password}
          />
          <br/>
          <button className="btn btn-primary py-2" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </main>
  </>
  )
}

export default Login