import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Formulario.css";

function Formulario() {
  {
    /* const [form, setForm] = useState({
    name: "",
    tel: "",
    email: "",
    msg: "",
  });

  console.log(form);

  const changeForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  */
  }
  const submitForm = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_jizvzv1",
        "template_r2zqeqe",
        e.target,
        "Fsp3Y3J6QRjejr8hl"
      )
      .then(
        function (response) {
          console.log(e.target);
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    window.location.href = "/";
  };

  return (
    <>
      <div className="container-form">
        <form onSubmit={submitForm}>
          <div className="name-tel">
            <div className="label-input">
              <label>Nombre</label>
              <input
                type="text"
                //value={form.name}
                minLength="2"
                required 
                name="name"
                id="name"
                style={{marginRight:'5em'}}
                //onChange={(e) => changeForm(e)}
              ></input>
            </div>

            <div className="label-input">
              <label>Telefono</label>
              <input
                type="tel"
                // value={form.tel}
                minLength="6"
                pattern="[0-9]+"
                title='Ingresa un numero'
                required
                id="tel"
                name="tel"
                //onChange={(e) => changeForm(e)}
              ></input>
            </div>
          </div>
          <div className="email-msg">
            <label>Email</label>
            <input
              type="email"
              //value={form.email}
              required
              name="email"
              pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}"
              //onChange={(e) => changeForm(e)}
              id="email"
            ></input>

            <label>Mensaje</label>
            <textarea className="msg"
              type="text"
              required
              //value={form.msg}
              id="msg"
              name="msg"
              //onChange={(e) => changeForm(e)}
            ></textarea>

          </div>
            <input className='button-form' type="submit" value='Enviar'>
                
            </input>
        </form>
      </div>
    </>
  );
}

export default Formulario;
