import React from 'react'

const Agenda = () => (
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
    <link rel="shortcut icon" href="img/Dash.ico" type="image/x-icon" />
    <link rel="stylesheet" href="css/agenda.css" />
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n\n    body {\n  background-color: azure;\n}\n.navbar {\nz-index: 999;\n}\n\n.carousel-control-prev,\n.carousel-control-next {\nbackground-color: rgba(0, 0, 0, 0.5);\n}\n\n.carousel-indicators {\nbottom: 10px;\n}\n\n.card-img-top {\nheight: 300px;\nobject-fit: cover;\n}\n\n.modal-dialog {\nmax-width: 600px;\n}\n\n.modal-body img {\nwidth: 100%;\nheight: auto;\n}\n\n#sobre {\nmargin-top: 50px;\n}\n\n\n\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n/* Estilos para o rodapé */\nfooter {\n  background-color: #333;\n  color: #fff;\n  padding: 10px;\n}\n\n.social-icons {\n  margin-top: 10px;\n}\n\n.social-icons a {\n  color: #fff;\n  margin-right: 5px;\n}\n\n.social-icons a:hover {\n  color: #ccc;\n}\n.destaque {\n  font-weight: bold;\n  border: 2px solid rgb(0, 0, 0);\n  background-color: rgb(119, 119, 119); padding: 5px;\n  border-radius: 50px;\n  text-align: center;\n}\n\n  "
      }}
    />
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
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
            <li className="nav-item">
              <a className="nav-link" href="form-inicio2">
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
            <button className="btn btn-outline-light" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
    <br />
    <br />
    <br />
    <div className="container mt-5">
      <h2 className="destaque">Cortes de cabelo</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img
              src="img/corte americano.jpg"
              className="card-img-top"
              alt="Corte 1"
            />
            <div className="card-body">
              <h5 className="card-title">Corte Americano</h5>
              <p className="card-text">Descrição do corte americano.</p>
              <a
                href="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modal1"
              >
                Ver Mais
              </a>
              &nbsp;
              <a
                href="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modalAgendamento"
              >
                Agendar
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="img/corte2.jpeg" className="card-img-top" alt="Corte 2" />
            <div className="card-body">
              <h5 className="card-title">Corte Clássico</h5>
              <p className="card-text">Descrição do corte clássico.</p>
              <a
                href="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modal2"
              >
                Ver Mais
              </a>
              &nbsp;
              <a
                href="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modalAgendamento"
              >
                Agendar
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src="img/corte reflexo.jpg"
              className="card-img-top"
              alt="Corte 3"
            />
            <div className="card-body">
              <h5 className="card-title">Corte Descolado</h5>
              <p className="card-text">Descrição do corte descolado.</p>
              <a
                href="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modal3"
              >
                Ver Mais
              </a>
              &nbsp;
              <a
                href="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modalAgendamento"
              >
                Agendar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="img/corte4.jpg" className="card-img-top" alt="Corte 4" />
            <div className="card-body">
              <h5 className="card-title">Corte Americano</h5>
              <p className="card-text">Descrição do corte americano.</p>
              <a
                href="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modal4"
              >
                Ver Mais
              </a>
              &nbsp;
              <a
                href="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modalAgendamento"
              >
                Agendar
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="img/corte5.jpg" className="card-img-top" alt="Corte 5" />
            <div className="card-body">
              <h5 className="card-title">Corte Clássico</h5>
              <p className="card-text">Descrição do corte clássico.</p>
              <a
                href="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modal5"
              >
                Ver Mais
              </a>
              &nbsp;
              <a
                href="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modalAgendamento"
              >
                Agendar
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="img/corte6.jpg" className="card-img-top" alt="Corte 6" />
            <div className="card-body">
              <h5 className="card-title">Corte Descolado</h5>
              <p className="card-text">Descrição do corte descolado.</p>
              <a
                href="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modal6"
              >
                Ver Mais
              </a>
              &nbsp;
              <a
                href="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modalAgendamento"
              >
                Agendar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container mt-5">
      <h2 className="destaque">Cortes de barbas </h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="img/barbar1.jpg" className="card-img-top" alt="Corte 6" />
            <div className="card-body">
              <h5 className="card-title">Corte Americano</h5>
              <p className="card-text">Descrição do corte americano.</p>
              <a
                href="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modal6"
              >
                Ver Mais
              </a>
              &nbsp;
              <a
                href="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modalAgendamento"
              >
                Agendar
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="img/baraba-2.jpg" className="card-img-top" alt="Corte 7" />
            <div className="card-body">
              <h5 className="card-title">Corte Clássico</h5>
              <p className="card-text">Descrição do corte clássico.</p>
              <a
                href="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modal7"
              >
                Ver Mais
              </a>
              &nbsp;
              <a
                href="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modalAgendamento"
              >
                Agendar
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="img/barbar3.jpg" className="card-img-top" alt="Corte 8" />
            <div className="card-body">
              <h5 className="card-title">Corte Descolado</h5>
              <p className="card-text">Descrição do corte descolado.</p>
              <a
                href="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modal8"
              >
                Ver Mais
              </a>
              &nbsp;
              <a
                href="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modalAgendamento"
              >
                Agendar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="img/barbar4.jpg" className="card-img-top" alt="Corte 9" />
            <div className="card-body">
              <h5 className="card-title">Corte Americano</h5>
              <p className="card-text">Descrição do corte americano.</p>
              <a
                href="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modal9"
              >
                Ver Mais
              </a>
              &nbsp;
              <a
                href="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modalAgendamento"
              >
                Agendar
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="img/barbar5.jpg" className="card-img-top" alt="Corte 10" />
            <div className="card-body">
              <h5 className="card-title">Corte Clássico</h5>
              <p className="card-text">Descrição do corte clássico.</p>
              <a
                href="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modal10"
              >
                Ver Mais
              </a>
              &nbsp;
              <a
                href="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modalAgendamento"
              >
                Agendar
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="img/barbar6jpeg" className="card-img-top" alt="Corte 11" />
            <div className="card-body">
              <h5 className="card-title">Corte Descolado</h5>
              <p className="card-text">Descrição do corte descolado.</p>
              <a
                href="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modal11"
              >
                Ver Mais
              </a>
              &nbsp;
              <a
                href="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modalAgendamento"
              >
                Agendar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Modal 1 */}
    <div
      className="modal fade"
      id="modal1"
      tabIndex={-1}
      aria-labelledby="modal1Label"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modal1Label">
              Corte americano
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <img
              src="img/corte americano.jpg"
              className="card-img-top"
              alt="Corte 1"
            />
            <p>
              o corte americano é mais um corte de cabelo masculino clássico, que
              foi ganhando variações com o tempo. Pode apresentar diferentes
              níveis de degradê, mas se caracteriza, principalmente, pelas
              laterais raspadas..
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* Modal 2 */}
    <div
      className="modal fade"
      id="modal2"
      tabIndex={-1}
      aria-labelledby="modal2Label"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modal2Label">
              Corte Clássico
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <img src="img/corte2.jpeg" className="card-img-top" alt="Corte 2" />
            <p>
              O degradê ou disfarçado é um estilo de corte tradicionalmente
              masculino. Tem por base a passagem do cabelo cheio no topo da cabeça
              para as laterais levemente raspadas, diminuindo levemente o
              comprimento dos fios até a altura das orelhas.
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* Modal 3 */}
    <div
      className="modal fade"
      id="modal3"
      tabIndex={-1}
      aria-labelledby="modal3Label"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modal3Label">
              Corte Descolado
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <img
              src="img/corte reflexo.jpg"
              className="card-img-top"
              alt="Corte 3"
            />
            <p>
              O reflexo é usado para dar mais de uma tonalidade ao cabelo.
              Pequenas mechas recebem a tintura e são envolvidas em papel
              laminado. Normalmente é usada uma touca plástica para separar as
              mechas. O reflexo deve ser feito novamente sempre que o fio crescer
              e aparecer a raiz com outra cor
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* Modal 4 */}
    <div
      className="modal fade"
      id="modal4"
      tabIndex={-1}
      aria-labelledby="modal3Label"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modal3Label">
              Corte Descolado
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <img src="img/corte4.jpg" className="card-img-top" alt="Corte 3" />
            <p>
              O reflexo é usado para dar mais de uma tonalidade ao cabelo.
              Pequenas mechas recebem a tintura e são envolvidas em papel
              laminado. Normalmente é usada uma touca plástica para separar as
              mechas. O reflexo deve ser feito novamente sempre que o fio crescer
              e aparecer a raiz com outra cor
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
      {/* Modal 5 */}
      <div
        className="modal fade"
        id="modal5"
        tabIndex={-1}
        aria-labelledby="modal5Label"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modal5Label">
                Corte Clássico
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <img src="img/corte5.jpeg" className="card-img-top" alt="Corte 5" />
              <p>
                O degradê ou disfarçado é um estilo de corte tradicionalmente
                masculino. Tem por base a passagem do cabelo cheio no topo da
                cabeça para as laterais levemente raspadas, diminuindo levemente o
                comprimento dos fios até a altura das orelhas.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal 6*/}
      <div
        className="modal fade"
        id="modal6"
        tabIndex={-1}
        aria-labelledby="modal3Label"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modal3Label">
                Corte Descolado
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <img src="img/corte6.jpg" className="card-img-top" alt="Corte 3" />
              <p>
                O reflexo é usado para dar mais de uma tonalidade ao cabelo.
                Pequenas mechas recebem a tintura e são envolvidas em papel
                laminado. Normalmente é usada uma touca plástica para separar as
                mechas. O reflexo deve ser feito novamente sempre que o fio
                crescer e aparecer a raiz com outra cor
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
        {/* Modal de Agendamento */}
        <div
          className="modal fade"
          id="modalAgendamento"
          tabIndex={-1}
          aria-labelledby="modalAgendamentoLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalAgendamentoLabel">
                  Agendar Horário
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                {/* Conteúdo do modal */}
                <form id="agendamentoForm">
                  <div className="mb-3">
                    <label htmlFor="nome" className="form-label">
                      Nome:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nome"
                      placeholder="Digite seu nome"
                      required=""
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="data" className="form-label">
                      Data:
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="data"
                      required=""
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="horario" className="form-label">
                      Horário:
                    </label>
                    <input
                      type="time"
                      className="form-control"
                      id="horario"
                      required=""
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Fechar
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onclick="agendar()"
                >
                  Agendar
                </button>
              </div>
            </div>
          </div>
        </div>
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
      </div>
    </div>
  </>
  
  
)


export default Agenda