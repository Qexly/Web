'use strict'

let fieldDiv = document.getElementById('field');
let fieldDivWidth = fieldDiv.clientWidth;
let fieldDivHeight = fieldDiv.clientHeight;
let ball = document.getElementById('ball');
ball.style.top = (fieldDivHeight/2 - ball.offsetHeight / 2) + 'px';
ball.style.left = (fieldDivWidth/2 -  ball.offsetWidth / 2) + 'px';
