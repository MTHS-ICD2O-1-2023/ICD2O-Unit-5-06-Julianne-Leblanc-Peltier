// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Julianne Leblanc-Peltier
// Created on: May 2024
// This file contains the JS functions for index.html

function myButtonClicked() {
  const firstNumber = parseInt(document.getElementById("first-number").value)
  const secondNumber = parseInt(document.getElementById("second-number").value)
  let counter = 0
  let answer = 0

  while (counter < Math.abs(secondNumber)) {
    answer += Math.abs(firstNumber)
    counter++
  }

  if (((firstNumber < 0) && (secondNumber > 0)) || ((firstNumber > 0) && (secondNumber < 0))) {
    answer = answer * -1
  } 

  document.getElementById("answer").innerHTML = firstNumber + " x " + secondNumber + " = " + answer
} 
