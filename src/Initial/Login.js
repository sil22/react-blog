import React from "react";
import LoginForm from './LoginFom.js';
import axios from "axios";
import { connect } from "react-redux";

const Login = (props) => {
  const formData = (datos) => {
    console.log(datos);
    axios.post('https://blog-api-u.herokuapp.com/v1/login', {
      login: {
        email: datos.email,
        password: datos.password,
      }
    })
    .then(function(response){
      console.log(response);
      props.login(response.data);
      
    })
    .catch(function(error){
      console.log(error);
      props.errorLogin();      
    })
  }
    return (
      <div>
        <h2>
            Login
        </h2>
        {props.mensaje.mensaje}
        <LoginForm onSubmit={formData}/>
      </div>
    )
  }
  
  const mapStateToProps = (state) =>{
    return {
      mensaje: state.userStatus
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      login: (datos) => {
        dispatch({
          type: "LOGIN",
          data: datos
        });
      },
      errorLogin: () => {
        dispatch({
          type: 'USER_ERROR'
        });
      }
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Login);