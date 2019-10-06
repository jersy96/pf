import React from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import './styles.css'
import Img from '../../shared/images/signUpImg1.png';

const GreenCheckbox = withStyles({
  root: {
    color: '#2DAB5F',
    '&$checked': {
      color: '#2DAB5F',
    }
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

const ColoredButton = withStyles(theme => ({
  root: {
    color: '#FFFFFF',
    backgroundColor: '#2DAB5F',
    '&:hover': {
      backgroundColor: 'rgba(45, 171, 95, 0.85)',
    },
    width: '330px',
    height: '56px',
    marginTop: '24px'
  }
}))(Button);

const ColoredTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#2DAB5F',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#2DAB5F',
    },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: '#2DAB5F',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#2DAB5F',
      }
    },
    width: '330px',
    marginBottom: '16px'
  }
})(TextField);

const SignUp = () => {
  return (
    <div className='mainContainer'>
      <div className="formContainer">
        <div className='fieldContainer'>
          <div className="login-link-item">¿Ya tienes cuenta? <Link to='/login'>Ingresar</Link></div>
          <div className='form-title'>Registrate</div>
          <ColoredTextField
            label="Nombre"
            variant="outlined"
          />
          <ColoredTextField
            label="Apellido"
            variant="outlined"
          />
          <ColoredTextField
            label="Email"
            variant="outlined"
          />
          <ColoredTextField
            label="Contraseña"
            variant="outlined"
          />
          <FormControlLabel
            control={
              <GreenCheckbox/>
            }
            label="He leído los Terminos y Condiciones"
          />
          <ColoredButton>Ingresar</ColoredButton>        
        </div>
        <div className='imageContainer'>
          <img src={Img} alt="Imagen de registro"/>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
