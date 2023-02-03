import "../css/contacto.css";

function Contacto() {
  return (
    <div className="contacto" id="contacto">

<h2 className="text-center mt-5">Contacto</h2>

<div className="conten-general-contact">
  
      <div className="formulario-contact">
        <section id="contact" className="content-form">
          <form className="form-contact" action="/email" method="POST">
            <label for="contact-name">Ingresa tu nombre</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              minLength="1"
              maxLenght="50"
              pattern="[A-Za-z ñÑ]{2,50}"
              placeholder="Utiliza solamente letras para su nombre"
              required
            ></input>
            <label for="contact-email">Ingrese tu email</label>
            <input
              id="contact_email"
              type="text"
              name="email"
              minLength="8"
              placeholder="ejemplo@email.com"
              required
            ></input>
            <label for="contact-email">Ingrese su telefono</label>
            <input
              id="contact_email"
              type="text"
              name="phone"
              minlength="8"
              placeholder="0114423453"
              required
            ></input>
            <label for="contact-consult">Ingrese tu consulta</label>
            <textarea
              id="contact_consult"
              type="text"
              name="message"
              minLength="20"
              maxLength="200 "
              placeholder="Escribi en ésta sección tu consulta"
              required
            ></textarea>

            <button type="submit">Enviar</button>
          </form>
        </section>
      </div>
    </div>
    </div>
  );
}

export default Contacto;
