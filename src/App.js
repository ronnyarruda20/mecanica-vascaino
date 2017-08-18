import React, { Component } from 'react';
import { Button, Card, Row, Col, Navbar } from 'react-materialize';
import $ from 'jquery';
import { Parallax } from 'react-parallax';
import './css/materialize.min.css';
import './css/style.css';
import logo from './img/logo.jpg';
import img1 from './img/background1.jpg';
import img2 from './img/background2.jpg';
import img3 from './img/background3.jpg';

class App extends Component {
  render() {
    return (

      <div className="grey lighten-1">

        <Navbar className="grey lighten-1" role="navigation">
          <div className="nav-wrapper container">
            <a id="logo-container" href="#" className="brand-logo">Logo</a>

            <ul className="right hide-on-med-and-down">
              <li><a href="#">Home</a></li>
              <li><a href="#">Quem somos</a></li>
              <li><a href="#">Serviços</a></li>
              <li><a href="#">Contato</a></li>
            </ul>

            <ul id="nav-mobile" className="side-nav">
              <li><a href="#">Home</a></li>
              <li><a href="#">Quem somos</a></li>
              <li><a href="#">Serviços</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
            <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
          </div>
        </Navbar>

        <Parallax bgImage={img1} strength={500}>
          <div id="index-banner" className="parallax-container">
            <div className="section no-pad-bot">
              <div className="container">
                <h1 className="header center teal-text text-lighten-2">Mecânica do Vascaino</h1>
                <div className="row center">
                  <h5 className="header col s12 light">Experiência. Integridade. Alta Qualidade.</h5>
                </div>
                <div className="row center">
                  <a href="http://materializecss.com/getting-started.html"
                    id="contato-button" className="btn-large waves-effect waves-light teal lighten-1">
                    Fale Conosco
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Parallax>

        <div className="container">
          <div className="section">

            <div className="row">
              <div className="col s12 m4">
                <div className="icon-block card blue-grey darken-1">
                  <div className="card-content white-text">
                    <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
                    <h5 className="center">Mecânica</h5>
                    <p className="light">I am a very simple card. I am good at containing small bits of information.
                       I am convenient because I require little markup to use effectively.</p>
                  </div>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block card blue-grey darken-1">
                  <div className="card-content white-text">
                    <h2 className="center brown-text"><i className="material-icons">group</i></h2>
                    <h5 className="center">Troa de Óleo Rapida</h5>
                    <p className="light">I am a very simple card. I am good at containing small bits of information.
                       I am convenient because I require little markup to use effectively.</p>
                  </div>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block card blue-grey darken-1">
                  <div className="card-content white-text">
                    <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
                    <h5 className="center">Funilaria</h5>
                    <p className="light">I am a very simple card. I am good at containing small bits of information.
                       I am convenient because I require little markup to use effectively.</p>
                  </div>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block card blue-grey darken-1">
                  <div className="card-content white-text">
                    <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
                    <h5 className="center">Restauração</h5>
                    <p className="light">I am a very simple card. I am good at containing small bits of information.
                       I am convenient because I require little markup to use effectively.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <Parallax bgImage={img3} strength={400}>

          <div className="parallax-container valign-wrapper">

            <div className="section no-pad-bot">
              <div className="container">
                <div className="row center">
                  <h5 className="header col s12 light">A Mecânica do Vascaino, é uma empresa especializada em mecânica automotiva, 
                    destacando-se pela alta qualidade no atendimento ao cliente e conhecimento profundo. Como principal objetivo, temos o de 
                    manter a originalidade do seu veículo e conquistar a sua confiança, 
                    atendendo cada cliente de forma diferenciada e investindo em tecnologia e especialização para atender melhor.
                  </h5>
                </div>
              </div>
            </div>
          </div>

        </Parallax>

        <div className="container">
          <div className="section">

            <div className="row">
              <div className="col s12 center">
                <h3><i className="mdi-content-send brown-text"></i></h3>
                <h4 className="white-text">Contato</h4>
                <p className="white-text left-align text-lighten-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
              </div>
            </div>

          </div>
        </div>

        <Parallax bgImage={img3} strength={400}>
          <div className="parallax-container valign-wrapper">
            <div className="section no-pad-bot">
              <div className="container">
                <div className="row center">
                  <h5 className="header col s12 text-lighten-4">A modern responsive front-end framework based on Material Design</h5>
                </div>
              </div>
            </div>
          </div>
        </Parallax>

        <footer className="page-footer grey lighten-1">
          <div className="container">
            <div className="row">
              
              <div className="col l7 s12">
                <h5 className="white-text">Quem somos</h5>
                <p className="white-text text-lighten-4">
                    A Mecânica do Vascaino, é uma empresa especializada em mecânica automotiva, 
                    destacando-se pela alta qualidade no atendimento ao cliente e conhecimento profundo. Como principal objetivo, temos o de 
                    manter a originalidade do seu veículo e conquistar a sua confiança, 
                    atendendo cada cliente de forma diferenciada e investindo em tecnologia e especialização para atender melhor.
                  </p>
              </div>
              
              <div className="col l5 s12">
                <h5 className="white-text">Contato</h5>
                <ul>
                  <li><a className="white-text text-lighten-4" href="#!">Email: welton@oficinadovascaino.com.br</a></li>
                  <li><a className="white-text text-lighten-4" href="#!">Endereço: Rua Stambu, 09 Jardin Monte Libano, Cuiabá/MT</a></li>
                  <li><a className="white-text text-lighten-4" href="#!">Telefone: (65) xxxx xxxx</a></li>
                  <li><a className="white-text text-lighten-4" href="#!">Atendimento: (65) xxxx xxxx</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              Made by <a className="brown-text text-lighten-3" href="http://materializecss.com">Materialize</a>
            </div>
          </div>
        </footer>


      </div>
    );
  }
}

export default App;
