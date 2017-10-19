import _ from 'lodash';
import './style.css';
import logo from './webpack-logo.png';

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  var myLogo = new Image();
  myLogo.src = logo;

  element.appendChild(myLogo);

  return element;
}

document.body.appendChild(component());

