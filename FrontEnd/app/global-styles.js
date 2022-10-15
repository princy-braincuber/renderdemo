import { injectGlobal } from 'styled-components';
import background from './img/intro-bg.jpg';
/* eslint no-unused-expressions: 0 */
injectGlobal`
/*!
 * Start Bootstrap - Grayscale v3.3.7+1 (http://startbootstrap.com/template-overviews/grayscale)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */
body {
  width: 100%;
  height: 100%;
  font-family: "Lora", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: white;
  background-color: black;
}
html {
  width: 100%;
  height: 100%;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0 0 35px;
  text-transform: uppercase;
  font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  letter-spacing: 1px;
}
p {
  margin: 0 0 25px;
  font-size: 18px;
  line-height: 1.5;
}
@media (min-width: 768px) {
  p {
    margin: 0 0 35px;
    font-size: 20px;
    line-height: 1.6;
  }
}
a {
  color: #42DCA3;
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
a:hover,
a:focus {
  text-decoration: none;
  color: #1d9b6c;
}
.light {
  font-weight: 400;
}
.navbar-custom {
  margin-bottom: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  text-transform: uppercase;
  font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
  background-color: black;
}
.navbar-custom .navbar-toggle {
  color: white;
  background-color: rgba(255, 255, 255, 0.2);
  font-size: 12px;
}
.navbar-custom .navbar-toggle:focus,
.navbar-custom .navbar-toggle:active {
  outline: none;
}
.navbar-custom .navbar-brand {
  font-weight: 700;
}
.navbar-custom .navbar-brand:focus {
  outline: none;
}
.navbar-custom a {
  color: white;
}
.navbar-custom .nav li a {
  -webkit-transition: background 0.3s ease-in-out;
  -moz-transition: background 0.3s ease-in-out;
  transition: background 0.3s ease-in-out;
}
.navbar-custom .nav li a:hover {
  color: rgba(255, 255, 255, 0.8);
  outline: none;
  background-color: transparent;
}
.navbar-custom .nav li a:focus,
.navbar-custom .nav li a:active {
  outline: none;
  background-color: transparent;
}
.navbar-custom .nav li.active {
  outline: none;
}
.navbar-custom .nav li.active a {
  background-color: rgba(255, 255, 255, 0.3);
}
.navbar-custom .nav li.active a:hover {
  color: white;
}
@media (min-width: 768px) {
  .navbar-custom {
    padding: 20px 0;
    border-bottom: none;
    letter-spacing: 1px;
    background: transparent;
    -webkit-transition: background 0.5s ease-in-out, padding 0.5s ease-in-out;
    -moz-transition: background 0.5s ease-in-out, padding 0.5s ease-in-out;
    transition: background 0.5s ease-in-out, padding 0.5s ease-in-out;
  }
  .navbar-custom.top-nav-collapse {
    padding: 0;
    background: black;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
}
.intro {
  display: table;
  width: 100%;
  height: auto;
  padding: 100px 0;
  text-align: center;
  color: white;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
}
.intro .intro-body {
  display: table-cell;
  vertical-align: middle;
}
.intro .intro-body .brand-heading {
  font-size: 40px;
}
.intro .intro-body .intro-text {
  font-size: 18px;
}
@media (min-width: 768px) {
  .intro {
    height: 100%;
    padding: 0;
  }
  .intro .intro-body .brand-heading {
    font-size: 100px;
  }
  .intro .intro-body .intro-text {
    font-size: 26px;
  }
}
.btn-circle {
  width: 70px;
  height: 70px;
  margin-top: 15px;
  padding: 7px 16px;
  border: 2px solid white;
  border-radius: 100% !important;
  font-size: 40px;
  color: white;
  background: transparent;
  -webkit-transition: background 0.3s ease-in-out;
  -moz-transition: background 0.3s ease-in-out;
  transition: background 0.3s ease-in-out;
}
.btn-circle:hover,
.btn-circle:focus {
  outline: none;
  color: white;
  background: rgba(255, 255, 255, 0.1);
}
.btn-circle i.animated {
  -webkit-transition-property: -webkit-transform;
  -webkit-transition-duration: 1s;
  -moz-transition-property: -moz-transform;
  -moz-transition-duration: 1s;
}
.btn-circle:hover i.animated {
  -webkit-animation-name: pulse;
  -moz-animation-name: pulse;
  -webkit-animation-duration: 1.5s;
  -moz-animation-duration: 1.5s;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  -moz-animation-timing-function: linear;
}
@-webkit-keyframes pulse {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@-moz-keyframes pulse {
  0% {
    -moz-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -moz-transform: scale(1.2);
    transform: scale(1.2);
  }
  100% {
    -moz-transform: scale(1);
    transform: scale(1);
  }
}
.content-section {
  padding-top: 70px;
}
.download-section {
  width: 100%;
  padding: 50px 0;
  color: white;
  background: url(../img/downloads-bg.jpg) no-repeat center center scroll;
  background-color: black;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
}
#map {
  width: 100%;
  height: 200px;
  margin-top: 100px;
}
@media (min-width: 767px) {
  .content-section {
    padding-top: 100px;
  }
  .download-section {
    padding: 100px 0;
  }
  #map {
    height: 400px;
    margin-top: 250px;
  }
}
.btn {
  text-transform: uppercase;
  font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 400;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  border-radius: 0;
}
.btn-default {
  border: 1px solid #42DCA3;
  color: #42DCA3;
  background-color: transparent;
}
.btn-default:hover,
.btn-default:focus {
  border: 1px solid #42DCA3;
  outline: none;
  color: black;
  background-color: #42DCA3;
}
ul.banner-social-buttons {
  margin-top: 0;
}
@media (max-width: 1199px) {
  ul.banner-social-buttons {
    margin-top: 15px;
  }
}
@media (max-width: 767px) {
  ul.banner-social-buttons li {
    display: block;
    margin-bottom: 20px;
    padding: 0;
  }
  ul.banner-social-buttons li:last-child {
    margin-bottom: 0;
  }
}
footer {
  padding: 50px 0;
}
footer p {
  margin: 0;
}
::-moz-selection {
  text-shadow: none;
  background: #fcfcfc;
  background: rgba(255, 255, 255, 0.2);
}
::selection {
  text-shadow: none;
  background: #fcfcfc;
  background: rgba(255, 255, 255, 0.2);
}
img::selection {
  background: transparent;
}
img::-moz-selection {
  background: transparent;
}
body {
  webkit-tap-highlight-color: rgba(255, 255, 255, 0.2);
}
#app, #appWrapper{
  height:100%;
    background: url('${background}') no-repeat bottom center scroll;
}


/* LOGIN PAGE */
.card-container.card {
    max-width: 350px;
    padding: 40px 40px;
}

.btn {
    font-weight: 700;
    height: 36px;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    cursor: default;
}

/*
 * Card component
 */
.card {
    background-color: #F7F7F7;
    /* just in case there no content*/
    padding: 20px 25px 30px;
    margin: 0 auto 25px;
    margin-top: 50px;
    /* shadows and rounded borders */
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
    width: 96px;
    height: 96px;
    margin: 0 auto 10px;
    display: block;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
}

/*
 * Form styles
 */
.profile-name-card {
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    margin: 10px 0 0;
    min-height: 1em;
}

.reauth-email {
    display: block;
    color: #404040;
    line-height: 2;
    margin-bottom: 10px;
    font-size: 14px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.form-signin #inputEmail,
.form-signin #inputPassword {
    direction: ltr;
    height: 44px;
    font-size: 16px;
}

.form-signin input[type=email],
.form-signin input[type=password],
.form-signin input[type=text],
.form-signin button {
    width: 100%;
    display: block;
    margin-bottom: 10px;
    z-index: 1;
    position: relative;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.form-signin .form-control:focus {
    border-color: rgb(104, 145, 162);
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);
}

.btn.btn-signin {
    /*background-color: #4d90fe; */
    background-color: rgb(104, 145, 162);
    /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/
    padding: 0px;
    font-weight: 700;
    font-size: 14px;
    height: 36px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    border: none;
    -o-transition: all 0.218s;
    -moz-transition: all 0.218s;
    -webkit-transition: all 0.218s;
    transition: all 0.218s;
}

.btn.btn-signin:hover,
.btn.btn-signin:active,
.btn.btn-signin:focus {
    background-color: rgb(12, 97, 33);
}

.forgot-password {
    color: rgb(104, 145, 162);
}

.forgot-password:hover,
.forgot-password:active,
.forgot-password:focus{
    color: rgb(12, 97, 33);
}
label{
  color: grey;
}
`;
