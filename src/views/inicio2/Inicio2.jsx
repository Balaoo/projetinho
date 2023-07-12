import React from 'react'

const Inicio2 = () => (
  
    <>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>BarberDash</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
      crossOrigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
      crossOrigin="anonymous"
      referrerPolicy="no-referrer"
    />
    <link rel="shortcut icon" href="public/img/Dash.ico" type="image/x-icon" />
    <link rel="stylesheet" href="css/inicio.css" />
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n    /* Estilos para o corpo do documento */\nbody {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n  background-color: azure;  \n  }\n  \n  /* Estilos para o cabeçalho */\n  header {\n    background-color: #333;\n    color: #fff;\n    padding: 20px;\n  }\n  \n  header h1 {\n    margin: 0;\n  }\n  \n \n  \n  nav ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n  }\n  \n  nav ul li {\n    display: inline-block;\n    margin-right: 10px;\n  }\n  \n  nav ul li a {\n    color: #fff;\n    text-decoration: none;\n  }\n  \n  /* Estilos para o carrossel */\n  .carousel {\n    width: 100%;\n  }\n  \n  .carousel .carousel-inner .carousel-item {\n    height: 400px;\n  }\n  \n  .carousel .carousel-inner .carousel-item img {\n    height: 100%;\n    object-fit: cover;\n  }\n  \n  /* Estilos para as seções de conteúdo */\n  section {\n    padding: 40px 0;\n  }\n  \n  section h2 {\n    margin-bottom: 20px;\n  }\n  \n  /* Estilos para o rodapé */\n  footer {\n    background-color: #333;\n    color: #fff;\n    padding: 10px;\n  }\n  \n  .social-icons {\n    margin-top: 10px;\n  }\n  \n  .social-icons a {\n    color: #fff;\n    margin-right: 5px;\n  }\n  \n  \n  .social-icons a:hover {\n    color: #ccc;\n  }\n  \n  .logo{\n    width: 200px; height: 200px;\n    \n  }\n  \n\n  .img-fluid{\n    -webkit-box-shadow: 25px 14px 6px 4.5px #dddddd;\n-moz-box-shadow: 25px 14px 6px 4.5px #dddddd;\nbox-shadow: 25px 14px 6px 4.5px #dddddd;\nwidth: 600px;\nborder-radius: 125px;\n  }\n  .col-lg-6 img{\n    float: left;\n   \n    border: thin solid;\n    padding: 5px;\n    margin: 0px 10px 10px 0;\n   }\n\n  \n\n  \n  "
      }}
    />
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="img/logopequena.png"
            alt=""
            style={{ width: 50, height: 50 }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"></li>
            <li className="nav-item">
              <a className="nav-link" href="#sobre">
                Sobre
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="form-inicio">
                Sair
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar Cortes"
              aria-label="Search"
            />
            <a className="btn btn-outline-light" type="submit" href="form-agenda" role='button'>
              Buscar
            </a>
          </form>
        </div>
      </div>
    </nav>
    <br />
    <br />
    <br />
    <br />
    <br />
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "25vh"
      }}
    >
      <img src="img/Logo de Tela.png" className="logo" alt="logo" />
    </div>
    <section id="anchor" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="display-4">Cortes de cabelo para todos os estilos</h2>
            <p className="lead">
              Na Barbearia BarberDash, oferecemos uma ampla variedade de cortes de
              cabelo para atender a todos os estilos e preferências. Nossos
              barbeiros experientes garantem que você saia com um visual impecável
              e confiante.
            </p>
            <a className="btn btn-primary" href="form-agenda" role="button">
              Agendar um horário
            </a>
          </div>
          <br />
          <br />
          <br />
          <div className="col-lg-6">
            <img
              src="img/cortes.jpg"
              className="img-fluid"
              alt="Corte de cabelo"
            />
          </div>
        </div>
      </div>
    </section>
    <br />
    <br />
    <br />
    <section id="sobre" className="bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img
              src="img/sobre.jpg"
              className="img-fluid"
              alt="Sobre a barbearia"
            />
          </div>
          <div className="col-lg-6">
            <h2 className="display-4">Sobre BarberDash</h2>
            <p className="lead">
              A Barbearia BarberDash é o lugar perfeito para homens que valorizam
              seu estilo e bem-estar. Com uma equipe de barbeiros altamente
              qualificados e um ambiente acolhedor, proporcionamos uma experiência
              única de cuidados pessoais.
            </p>
          </div>
        </div>
      </div>
    </section>
    <br />
    <br />
    <br />
    <footer className="bg-dark text-light text-center py-3">
      <p>© 2023 BarberDash. Todos os direitos reservados.</p>
      <div className="social-icons">
        <a href="#">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="#">
          <i className="fab fa-instagram" />
        </a>
        <a href="#">
          <i className="fab fa-twitter" />
        </a>
      </div>
    </footer>
  </>
  
)


export default Inicio2