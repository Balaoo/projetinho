import React from 'react'

const Inicio = () => (
  
  <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Login</title>
  <link rel="stylesheet" href="css/index.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  />
  <link rel="shortcut icon" href="img/Dash.ico" type="image/x-icon" />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n\n    @import url('https://fonts.googleapis.com/css2?family=Play&display=swap');\n\n*{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Play', sans-serif;\n}\nbody{\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\nbackground-color: azure;\n}\n::selection{\n  color: #fff;\n  background: #3d96a8;\n}\n.wrapper{\n  width: 380px;\n  padding: 40px 30px 50px 30px;\n  background: #fff;\n  border-radius: 5px;\n  text-align: center;\n  box-shadow: 10px 10px 15px rgba(0,0,0,0.1);\n}\n.wrapper header{\n  font-size: 35px;\n  font-weight: 600;\n}\n.wrapper form{\n  margin: 40px 0;\n}\nform .field{\n  width: 100%;\n  margin-bottom: 20px;\n}\nform .field.shake{\n  animation: shake 0.3s ease-in-out;\n}\n@keyframes shake {\n  0%, 100%{\n    margin-left: 0px;\n  }\n  20%, 80%{\n    margin-left: -12px;\n  }\n  40%, 60%{\n    margin-left: 12px;\n  }\n}\nform .field .input-area{\n  height: 50px;\n  width: 100%;\n  position: relative;\n}\nform input{\n  width: 100%;\n  height: 100%;\n  outline: none;\n  padding: 0 45px;\n  font-size: 18px;\n  background: none;\n  caret-color: #3175d4cf;\n  border-radius: 5px;\n  border: 1px solid #bfbfbf;\n  border-bottom-width: 2px;\n  transition: all 0.2s ease;\n}\nform .field input:focus,\nform .field.valid input{\n  border-color: #1e33d4;\n}\nform .field.shake input,\nform .field.error input{\n  border-color: #1e33d4;\n}\n.field .input-area i{\n  position: absolute;\n  top: 50%;\n  font-size: 18px;\n  pointer-events: none;\n  transform: translateY(-50%);\n}\n.input-area .icon{\n  left: 15px;\n  color: #bfbfbf;\n  transition: color 0.2s ease;\n}\n.input-area .error-icon{\n  right: 15px;\n  color: #d41e1e;\n}\nform input:focus ~ .icon,\nform .field.valid .icon{\n  color: #d41e1e;\n}\nform .field.shake input:focus ~ .icon,\nform .field.error input:focus ~ .icon{\n  color: #bfbfbf;\n}\nform input::placeholder{\n  color: #bfbfbf;\n  font-size: 17px;\n}\nform .field .error-txt{\n  color: #c80d0d;\n  text-align: left;\n  margin-top: 5px;\n}\nform .field .error{\n  display: none;\n}\nform .field.shake .error,\nform .field.error .error{\n  display: block;\n}\nform .pass-txt{\n  text-align: left;\n  margin-top: -10px;\n}\n.wrapper a{\n  color: #1c50de;\n  text-decoration: none;\n}\n.wrapper a:hover{\n  text-decoration: underline;\n}\nform input[type=\"submit\"]{\n  height: 50px;\n  margin-top: 30px;\n  color: #fff;\n  padding: 0;\n  border: none;\n  background: #0949d4;\n  cursor: pointer;\n  border-bottom: 2px solid rgba(0,0,0,0.1);\n  transition: all 0.3s ease;\n}\nform input[type=\"submit\"]:hover{\n  background: #1e33d4a5;;\n}\n\n.input-area .toggle-password {\n    right: 45px;\n    color: #bfbfbf;\n    cursor: pointer;\n    transition: color 0.2s ease;\n  }\n  \n  .input-area .toggle-password:hover {\n    color: #1e33d4;\n  }\n  "
    }}
  />
  <div className="wrapper">
    <header>Login</header>
    <form action="index.php" method="POST">
      <div className="field email">
        <div className="input-area">
          <input type="text" name="email" placeholder="Endereço de e-mail" />
          <i className="icon fas fa-envelope" />
          <i className="error error-icon fas fa-exclamation-circle" />
        </div>
        <div className="error error-txt">O e-mail não pode ficar em branco</div>
      </div>
      <div className="field password">
        <div className="input-area">
          <input type="password" name="senha" placeholder="Senha" />
          <i className="icon fas fa-lock" />
          <i className="error error-icon fas fa-exclamation-circle" />
          <i className="toggle-password fas fa-eye" />
        </div>
        <div className="error error-txt">A senha não pode ficar em branco</div>
      </div>
      <div className="pass-txt">
        <a href="#">Esqueceu a senha?</a>
      </div>
      <input type="submit" defaultValue="Entrar" />
    </form>
    <div className="sign-txt">
      Ainda não é membro? <a href="cadastro.html"> Inscreva-se agora</a>
    </div>
  </div>
</>

)


export default Inicio