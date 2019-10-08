import React from 'react';
import Logo from '../../shared/images/logo.png';
import Img1 from '../../shared/images/landingImg1.png';
import IconTextLink from '../shared/IconTextLink/IconTextLink';
import FieldFilter from '../shared/FieldFilter/FieldFilter';

import './styles.css'

class LandingPage extends React.Component {
  render() {
    return (
      <div id='main-container'>
        <div id="app-bar">
          <img id='app-bar-icon' src={Logo} alt="Logo"/>
          <IconTextLink url='login' color='#1C1C1C' marginRight='19px'>Ingresar</IconTextLink>
          <IconTextLink url='sign_up' color='#2DAB5F' marginRight='10px'>Registro</IconTextLink>
        </div>
        <div id='fieldFilterContainer'>
          <img id='fieldFilterImg' src={Img1} alt="landingImg1"/>
          <div id='fieldFilterTitle'>Encuentra canchas en tu ciudad</div>
          <FieldFilter classNames='field-filter'/>
        </div>
      </div>  
    );
  }
}

export default LandingPage;