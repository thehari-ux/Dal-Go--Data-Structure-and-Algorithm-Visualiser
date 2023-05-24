import React, { Component } from "react";
// .. COMPONENTS .. //
import Header from "./Components/Header/Header.jsx";
import ButtonsBar from "./Components/ButtonsBar/ButtonsBar.jsx";
import ArrayBar from "./Components/ArrayBar/ArrayBar.jsx";
import RangeSlider from "./Components/RangeSliders/RangeSlider.jsx";
// .. HELPER FUNCTIONS .. //
import { randomIntFromInterval, playAudio } from "./HelperFunctions.js";
// .. ALGORITHMS .. //
import BubbleSort from "./SortingAlgorithms/BubbleSort/BubbleSort.js";
import SelectionSort from "./SortingAlgorithms/SelectionSort/SelectionSort.js";
import InsertionSort from "./SortingAlgorithms/InsertionSort/InsertionSort.js";
// .. STYLE .. //
import "./SortingVisualizer.css";
// .. SOUNDS .. //
import ResetEffect from "./sounds/ResetEffect.mp3";

export default class SortingVisualizer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //  // ##
      //        Initializing in state because:
      //         1. It might be changed later by the user.
      //         2. The change value must be re-rendered.
      // ## //
      array: [],
      animationSpeed: 50,
      numberOfArrayBars: 10,
      userInputArray: []
    };
    this.handleUserInputArray = (event) => {
      const value = event.target.value;
      const array = value.split(",").map(Number); // Convert input string to array of numbers
      this.setState({ userInputArray: array });
    };
    

    this.generateNewArray = this.generateNewArray.bind(this);
    this.bubbleSort = this.bubbleSort.bind(this);
    this.selectionSort = this.selectionSort.bind(this);
    this.insertionSort = this.insertionSort.bind(this);
    this.onChangeArrayBarRangeSlider = this.onChangeArrayBarRangeSlider.bind(
      this
    );
    this.onChangeAnimationSpeedRangeSlider = this.onChangeAnimationSpeedRangeSlider.bind(
      this
    );
  }

  // ## This function generates the array before the page is rendere. ## //
  componentDidMount() {
    this.generateNewArray();
  }

  // ## This function generates new random array of size "numberOfArrayBars". ## //
  generateNewArray() {
    let array = [];
  if (this.state.userInputArray.length > 0) { // If user input array exists
    array = [...this.state.userInputArray];
  } else { // Generate random array
    for (let i = 0; i < this.state.numberOfArrayBars; i++) {
      array.push(randomIntFromInterval(5, 70));
    }
  }
  playAudio(ResetEffect);
  this.setState({ array });
  }

  // ******************************************************************************* //

  // ## Handles if the "Array Size" slider is changed. ## //
  onChangeArrayBarRangeSlider = (event, value) => {
    this.setState({ numberOfArrayBars: value });
    this.generateNewArray();
  };

  // ## Handles if the "Animation Speed" slider is changed. ## //
  onChangeAnimationSpeedRangeSlider = (event, value) => {
    this.setState({ animationSpeed: value });
  };

  // ******************************************************************************* //

  // ## Calls the BubbleSort component/function. ## //
  bubbleSort = () => {
    BubbleSort(this.state.array, this.state.animationSpeed);
  };

  // ## Calls the SelectionSort component/function. ## //
  selectionSort = () => {
    SelectionSort(this.state.array, this.state.animationSpeed);
  };

  // ## Calls the InsertionSort component/function. ## //
  insertionSort = () => {
    InsertionSort(this.state.array, this.state.animationSpeed);
  };

  // ******************************************************************************* //

  render() {
    return (
      <div className="main-container">
        {/* --------------------- HEADER : 8% Height --------------------- */}
        <Header />

        {/* --------------------- BUTTONS : 10% Height --------------------- */}
        <ButtonsBar
          generateNewArray={this.generateNewArray}
          bubbleSort={this.bubbleSort}
          selectionSort={this.selectionSort}
          insertionSort={this.insertionSort}
        />
        {/* --------------------- USER INPUT : 3% Height --------------------- */}
        <div className="input-container">
         <label htmlFor="user-input">Input your own array:</label>
         <input type="text" id="user-input" name="user-input" onChange={this.handleUserInputArray} />
        </div>


        {/* --------------------- BARS : 74% Height --------------------- */}
        <ArrayBar array={this.state.array} />

        {/* --------------------- SLIDERS : 8% Height --------------------- */}
        <RangeSlider
          numberOfArrayBars={this.state.numberOfArrayBars}
          animationSpeed={this.state.animationSpeed}
          onChangeArrayBarRangeSlider={this.onChangeArrayBarRangeSlider}
          onChangeAnimationSpeedRangeSlider={
            this.onChangeAnimationSpeedRangeSlider
          }
        />
      </div>
      
    );
  }
}
