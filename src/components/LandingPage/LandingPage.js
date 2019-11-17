import React from 'react';
import Logo from '../../shared/images/logo.png';
import Img1 from '../../shared/images/landingImg1.png';
import IconTextLink from '../shared/IconTextLink/IconTextLink';
import FieldFilter from '../shared/FieldFilter/FieldFilter';
import { Link } from '@material-ui/core';
import AwesomeSlider from 'react-awesome-slider';
// import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import 'react-awesome-slider/dist/styles.css';

import './styles.css'

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  async componentDidMount(){
    this.getSliders();
  }

  getSliders(){
    fetch('http://ec2-3-18-105-140.us-east-2.compute.amazonaws.com:3001/health_advices',{method:'GET'})
    .then(function(res) {
      console.log(res)
      res.json().then(function(response) {
        console.log(response);
      });
    });
  }
  
  render() {
    return (
      <div id='main-container'>

        {/* NAVBAR */}
        <div id="app-bar">
          <img id='app-bar-icon' src={Logo} alt="Logo"/>
          <Link id='app-bar-text'>Inicio</Link>
          <Link id='app-bar-text'>Nosotros</Link>
          <IconTextLink url='login' color='#1C1C1C' marginRight='19px'>Ingresar</IconTextLink>
          <IconTextLink url='sign_up' color='#2DAB5F' marginRight='10px'>Registro</IconTextLink>
        </div>

        {/* HEADER */}
        <div id='fieldFilterContainer'>
          <img id='fieldFilterImg' src={Img1} alt="landingImg1"/>
          <div id='fieldFilterTitle'>Encuentra canchas en tu ciudad</div>
          <FieldFilter classNames='field-filter'/>
        </div>

        {/* CONSEJOS DE SALUD  */}
        <div id='new-fields-container'>
          <div id='new-fields-title'>
            Consejos de salud
          </div>

          <AwesomeSlider className='slider'
            play={true}
            cancelOnInteraction={false}
            interval={6000}
          >
            <div id='slide'>
              <img id='slide-row' src="assets/lorempixel1.jpg" alt='consejos' style={{width:"50%", borderRadius:50}}></img>
              <div id='slide-row2'>
                <h3 id='slide-text'>Duración de un buen calentamiento</h3>
                <p id='slide-text'>Antes de realizar cualquier ejercicio, el precalentamiento debe durar entre 15 y 20 minutos, dependiendo de la actividad y del estado físico de cada persona.</p>
              </div>
            </div>
            <div id='slide'>
              <img id='slide-row' src="assets/lorempixel6.jpg" alt='consejos' style={{width:"50%", borderRadius:50}}></img>
              <div id='slide-row2'>
                <h3 id='slide-text'>Iniciar calentamiento</h3>
                <p id='slide-text'>Los especialistas recomiendan empezar la preparación con una actividad aeróbica rítmica y suave, como la rotación de las extremidades, para luego pasar, por ejemplo, a una breve carrera sin moverse del sitio para activar las piernas.</p>
              </div>
            </div>
            <div id='slide'>
              <img id='slide-row' src="assets/lorempixel5.jpg" alt='consejos' style={{width:"50%", borderRadius:50}}></img>
              <div id='slide-row2'>
                <h3 id='slide-text'>Duracion de estiramiento de un musculo</h3>
                <p id='slide-text'>Lo aconsejable es entre 10 y 30 segundos. Más de 30 segundos ya no genera beneficios, pero entre 10 y 30 segundos está bien.</p>
              </div>
            </div>
          </AwesomeSlider>
        </div>

        {/* RESERVAS */}
        <div id='reservation-container'>
          <div id='reservation-row'>
            <h3 id='reservation-text'>Encuentra una cancha</h3>
            <p id='reservation-text'>Con Sportify puedes encontrar el escenario deportivo más cercano y disponible para que puedas practicar tu deporte favorito.</p>
          </div>
          <div id='reservation-row'>
            <h3 id='reservation-text'>Reserva inteligente</h3>
            <p id='reservation-text'>Sportify te muestra todos los escenarios deportivos con sus horarios disponibles y precios para que puedas reservar sin necesidad de preguntar en cada cancha conocida.</p>
          </div>
          <div id='reservation-row'>
            <h3 id='reservation-text'>Disfruta</h3>
            <p id='reservation-text'>Practica tu deporte favorito sin estresarte buscando un escenario disponible</p>
          </div>
        </div>

        {/* TORNEOS */}
        <div id='tournament-container'>
          <div id='tournament-row'>
            <img src="assets/tournament.jpg" alt='torneos' style={{width:"100%",borderRadius:50}}></img>
            <a href="https://www.freepik.es/fotos-vectores-gratis/logo">Foto de Logo creado por freepik - www.freepik.es</a>
          </div>
          <div id='tournament-row'>
            <h3 id='tournament-text'>Participa en torneos</h3>
            <p id='tournament-text'>Sportify tiene una gran variedad de torneos disponibles en los que puedes visualizar las estadísticas de tu equipo, te permite revisar la cantidad de goles, pase gol, tarjetas, entre otras.</p>
          </div>
        </div>

        {/* COMUNIDAD */}
        <div id='community-container'>
          <div id='community-text'>
            <p id='community-power'>Comunidad</p>
            <h1 id='community-power' className='community-h1'>Creemos en el poder de la comunidad</h1>
            <p id='community-power' className='community-p'>
              Nuestro objetivo es crear un producto y servicio con el que esté satisfecho y usarlo todos los días. Es por eso que trabajamos constantemente en nuestros servicios para mejorarlo todos los días y realmente escuchamos lo que nuestros usuarios tienen que decir.
            </p>
            <IconTextLink url='sign_up' color='white' textColor='black' borderRadius='4px' NoIcon={true}>
              Registrarme
            </IconTextLink>
          </div>

          <div id='community-blocks'>
            <div id='community-row'>
              <div id='block'>
                <div style={{display:'flex',flexDirection:'row'}}>
                  <div style={{width:32,height:32,borderRadius:64,backgroundImage:"url("+ require("../../shared/images/Oval 3.png") +")"}}></div>
                  <p id='block-text' className='block-title' style={{color:'white'}}>Albeiro Espitia</p>
                </div>
                <p id='block-text'
                >
                  Es una verdadera joya! Empecé a usarlo hace un par de meses y cambió por completo la forma en que organizo torneos. ¡Solo puedo recomendarlo!
                </p>
                <p id='block-text'>Oct 18, 2019</p>
              </div>

              <div id='block'>
                <div style={{display:'flex',flexDirection:'row'}}>
                  <div style={{width:32,height:32,borderRadius:64,backgroundImage:"url("+ require("../../shared/images/sebastian.png") +")"}}></div>
                  <p id='block-text' className='block-title' style={{color:'white'}}>Sebastian Cabarcas</p>
                </div>
                <p id='block-text'
                >
                  Uso SCCR todos los días, ¡y es increíble! Rastreo todos mis partidos en él. :)
                </p>
                <p id='block-text'>Oct 18, 2019</p>
              </div>

              <div id='block'>
                <div style={{display:'flex',flexDirection:'row'}}>
                  <div style={{width:32,height:32,borderRadius:64,backgroundImage:"url("+ require("../../shared/images/valentina.png") +")"}}></div>
                  <p id='block-text' className='block-title' style={{color:'white'}}>Valentina Cepeda</p>
                </div>
                <p id='block-text'
                >
                  Es una verdadera joya! Empecé a usarlo hace un par de meses y cambió por completo la forma en que organizo torneos. ¡Solo puedo recomendarlo!
                </p>
                <p id='block-text'>Oct 18, 2019</p>
              </div>
            </div>

            <div id='community-row'>
              <div id='block'>
                <div style={{display:'flex',flexDirection:'row'}}>
                  <div style={{width:32,height:32,borderRadius:64,backgroundImage:"url("+ require("../../shared/images/thomas.png") +")"}}></div>
                  <p id='block-text' className='block-title' style={{color:'white'}}>Thomas Cruz</p>
                </div>
                <p id='block-text'
                >
                  Uso SCCR todos los días, ¡y es increíble! Rastreo todos mis partidos en él. :)
                </p>
                <p id='block-text'>Oct 18, 2019</p>
              </div>

              <div id='block'>
                <div style={{display:'flex',flexDirection:'row'}}>
                  <div style={{width:32,height:32,borderRadius:64,backgroundImage:"url("+ require("../../shared/images/megan.png") +")"}}></div>
                  <p id='block-text' className='block-title' style={{color:'white'}}>Megan Fox</p>
                </div>
                <p id='block-text'
                >
                  Es una verdadera joya! Empecé a usarlo hace un par de meses y cambió por completo la forma en que organizo torneos. ¡Solo puedo recomendarlo!
                </p>
                <p id='block-text'>Oct 18, 2019</p>
              </div>

              <div id='block'>
                <div style={{display:'flex',flexDirection:'row'}}>
                  <div style={{width:32,height:32,borderRadius:64,backgroundImage:"url("+ require("../../shared/images/andres.png") +")"}}></div>
                  <p id='block-text' className='block-title' style={{color:'white'}}>Andres Herrera</p>
                </div>
                <p id='block-text'
                >
                  Uso SCCR todos los días, ¡y es increíble! Rastreo todos mis partidos en él. :)
                </p>
                <p id='block-text'>Oct 18, 2019</p>
              </div>

            </div>

          </div>
        </div>

        {/* FOOTER */}
      </div>  
    );
  }
}

export default LandingPage;