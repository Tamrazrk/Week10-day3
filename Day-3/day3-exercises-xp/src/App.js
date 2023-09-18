import { Component } from "react";
import Car from './Components/Car';
import Events from "./Components/Events";
import Phone from "./Components/Phone";
import Color from "./Components/Color";

const carinfo = {name: "Ford", model: "Mustang"};

class App extends Component {

  constructor(props) {
    super(props);

      this.state = {

      }
  }

  render() {
    return (
      <>
        <Car carinfo={carinfo}/>
        <Events />
        <Phone />
        <Color />
      </>
    )
  }
}

export default App;
