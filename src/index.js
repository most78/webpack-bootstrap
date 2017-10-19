import _ from 'lodash';
import './style.css';
import logo from './webpack-logo.png';
import Data from './data.xml';

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  var myLogo = new Image();
  myLogo.src = logo;

  element.appendChild(myLogo);

  console.log(Data);

  return element;
}

document.body.appendChild(component());

