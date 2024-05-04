// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

function myButtonClicked() {
  const firstNumber = parseInt(document.getElementById("first-number").value)
  const secondNumber = parseInt(document.getElementById("second-number").value)
  let counter = 0
  let answer = 0

  while (counter < secondNumber) {
    answer += firstNumber
    counter++
  }

  document.getElementById("answer").innerHTML = answer
} 
