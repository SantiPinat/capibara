import React, { Component } from "react";
import Recaptcha from "react-recaptcha";

class Contacto extends Component {
  constructor(props) {
    super(props);

    this.handleSubscribe = this.handleSubscribe.bind(this);
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);

    this.state = {
      isVerified: false,
    };
  }

  recaptchaLoaded() {
    console.log("capcha successfully loaded");
  }

  handleSubscribe() {
    if (this.state.isVerified) {
      alert("You have successfully subscribed!");
    } else {
      alert("Please verify that you are a human!");
    }
  }

  verifyCallback(response) {
    if (response) {
      this.setState({
        isVerified: true,
      });
    }
  }

  render() {
    return (
      <div className="App">
        <form>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              id="floatingInput"
              type="text"
              placeholder="Nombre"
            />
            <label htmlFor="floatingInput"> Nombre </label>
          </div>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              id="floatingInput"
              type="text"
              placeholder="Apellido"
            />
            <label htmlFor="floatingInput"> Apellido </label>
          </div>{" "}
          <div className="form-floating mb-3">
            <input
              className="form-control"
              id="floatingInput"
              type="email"
              placeholder="email@ejemplo.com"
            />
            <label htmlFor="floatingInput"> Email </label>
          </div>
          <div className=" form-floating mb-3">
            <textarea
              className="escribinos form-control"
              id="floatingInput"
              type="text-area"
              placeholder="Escribinos"
            ></textarea>
            <label htmlFor="floatingInput"> Escribinos... </label>
          </div>
          <button className="btn btn-secondary" onClick={this.handleSubscribe}>
            
            Enviar
          </button>
          <Recaptcha
            sitekey="6LcvZI0aAAAAAFZ1i_BAHnls1FsG8epPzmvoRxoY"
            render="explicit"
            onloadCallback={this.recaptchaLoaded}
            verifyCallback={this.verifyCallback}
          />
        </form>
      </div>
    );
  }
}

export default Contacto;
