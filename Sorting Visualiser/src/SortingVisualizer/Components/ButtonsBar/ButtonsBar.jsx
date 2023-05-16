// ## This component includes the buttons for sorting algorithms and also generating new array. ## //

import React, { Component } from "react";
import "./ButtonsBar.css";

export default class ButtonsBar extends Component {
  render() {
    return (
      <div>
      <button onClick={this.props.generateNewArray}>Generate New Array</button>
      <button onClick={this.props.bubbleSort}>Bubble Sort</button>
      <button onClick={this.props.selectionSort}>Selection Sort</button>
      <button onClick={this.props.insertionSort}>Insertion Sort</button>
      <button onClick={this.updateUserInputArray}>Input Array</button>

    </div>
    );
  }
}
