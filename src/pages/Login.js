import React, { Component } from "react";
import logo from "../images/verano-logo.png";
import Input from "../components/form/Input";
import I_TAG from "../components/text/I-tag";
import { Link } from "react-router-dom";
import ForgotPassModal from "../components/ForgotPassModal";

const inputStyle = {
  display: "block"
};

const unlockStyle = {
  marginRight: "10px"
};

let toggle = true;

// Función que se encarga de cambiar el ícono de ver contraseña junto a su respectivo input.
function changeView() {
  // Obtención de objetos mediante id.
  let btnOn = document.getElementById("on-eye");
  let btnOff = document.getElementById("off-eye");
  let inputPass = document.getElementById("input-pass");
  toggle = toggle = !toggle;
  /*
        Condicional que verifica si la variable toggle (ícono ver contraseña) es igual a falso,
        de ser el caso cambia el estilo del ícono de ver y el tipo de dato del input de contraseña (text o password).
    */

  if (toggle === false) {
    btnOn.style.display = "block";
    btnOff.style.display = "none";
    inputPass.type = "text";
  } else {
    btnOn.style.display = "none";
    btnOff.style.display = "block";
    inputPass.type = "password";
  }
}
// Constante que contiene el HTML del div que contiene los inputs del login.
const divInput = (
  <div className="my-3">
    <Input
      type="text"
      class="validate inputTop"
      placeholder="Correo Electrónico"
    />
    <div className="relative cont-input-pass">
      <Input
        id="input-pass"
        type="password"
        class="validate inputBottom"
        placeholder="Contraseña"
      />
      <div
        onClick={changeView}
        id="off-eye"
        className="cont-icon"
        style={inputStyle}
      >
        <I_TAG class="far fa-eye-slash" />
      </div>
      <div onClick={changeView} className="cont-icon" id="on-eye">
        <I_TAG class="far fa-eye" />
      </div>
    </div>
  </div>
);
// Constante que contiene el html con los botones de iniciar sesión y recuperar contraseña.
const divBtn = (
  <div className="input-field">
    <div className="tc">
      <Link
        id="btn-init"
        className="btn waves-effect waves-light"
        to="/veranolink/proveedores"
      >
        INICIAR SESIÓN
      </Link>
    </div>
    <div className="tc mt-2">
      <a
        className="waves-effect waves-black btn-flat modal-trigger t-semibold"
        href="#modalForgotPassword"
      >
        <I_TAG class="fas fa-unlock-alt left p9" style={unlockStyle} />
        Recuperar Contraseña
      </a>
    </div>
  </div>
);

// Clase que contiene la interfaz de login
class Login extends Component {
  render() {
    return (
      <div>
        <section>
          <div id="summer_bg_login"></div>
          <section id="summer_cont_login">
            <section id="summer_card_login">
              <form>
                <div className="summer_head_login tc mb-3">
                  <img src={logo} alt="logo Verano" width="190px" />
                </div>
                {divInput}
                <div className="tc t-error t-semibold">
                  Usuario o Contraseña incorrectas.
                </div>
                {divBtn}
              </form>
            </section>
            <div className="p9 tc mt-3 t-semibold t-white">
              Creado por Verano - 2019
            </div>
          </section>
        </section>
        {/* Modal temporal */}
        <ForgotPassModal />
      </div>
    );
  }
}
// Fragmento necesario para llamar el componente login en demas archivos.
export default Login;
