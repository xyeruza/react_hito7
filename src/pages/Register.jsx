import React from "react";
import { useState } from "react";

//Estados del formulario
const Register = () => {
    const [datos, setDatos] = useState({
        email: "",
        password: "",
        confirmar_password: "",
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
      !datos.password.trim() ||
      !datos.confirmar_password.trim()
    ) {
      alert("Todos los campos son obligatorios");
      return;
    }
    if (datos.password.length < 6) {
      alert("La password debe contener al menos 6 caracteres");
      return;
    }
    if (datos.password !== datos.confirmar_password) {
      alert("Password no coincide");
      return;
    }

    setDatos({
      email: "",
      password: "",
      confirmar_password: "",
    });
    alert("Haz sido registrado");
  };

  return (
    <>
      <main className="form-signin m-4 p-5">
        <div className="container formulario">
        <h1 className="h3 mb-3 fw-normal py-3">Registrar</h1>
          <form onSubmit={validarInput}>
            <label htmlFor="floatingEmail">Email</label>
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
            <label htmlFor="floatingPassword">Password</label>
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
            <label htmlFor="floatingConfirmarPassword">Confirmar Password</label>
            <input
              type="text"
              className="form-control"
              id="floatingConfirmarPassword"
              name="confirmar_password"
              onChange={actualizarDatos}
              placeholder="Confirmar Password"
              value={datos.confirmar_password}
            />
            <br/>
            <p>*Password debe contener al menos 6 caracteres</p>
            <button className="btn btn-primary py-2" type="submit">
              Registrar
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Register;
