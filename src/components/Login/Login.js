import React from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './styles.css'
import Logo from './logo.png';

const ColoredButton = withStyles(theme => ({
  root: {
    color: '#FFFFFF',
    backgroundColor: '#2DAB5F',
    '&:hover': {
      backgroundColor: 'rgba(45, 171, 95, 0.85)',
    },
    width: '330px',
    height: '56px',
    marginTop: '50px',
    marginBottom: '24px'
  },
}))(Button);

const ColoredTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#2DAB5F',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#2DAB5F',
    },
    width: '330px'
  }
})(TextField);

const Login = () => {
  return (
    <div id='mainContainer'>
      <div className='logo-item'>
        <img src={Logo} alt="Logo"/>
      </div>
      <div className='form-item'>
        <h1 className='form-title-item'>Bienvenido</h1>
        <ColoredTextField
          label="Email"
          margin="normal"
        />
        <ColoredTextField
          label="Password"
          type="password"
          margin="normal"
        />
        <ColoredButton>Ingresar</ColoredButton>
        <Link className="register-link-item" to={'/sign_up'}>Registrarme</Link>
      </div>
      <Link className="forgot-password-item" to={'/'}>¿Olvidaste tu contraseña?</Link>
    </div>
  );
};

export default Login;
