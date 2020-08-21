import React, { Component } from "react";
import Board from "./components/Board.js";

import "./style/app.css";

class App extends Component {
  state = {
    positions: [],
  };

  componentDidMount() {
    const setup = this.state.positions;
    for (let i = 0; i < 64; i++) {
      setup.push({ [i]: "" });
    }
    setup[0][0]="Black Rook"
    setup[1][1]="Black Knight"
    setup[2][2]="Black Bishop"
    setup[3][3]="Black Queen"
    setup[4][4]="Black King"
    setup[5][5]="Black Bishop"
    setup[6][6]="Black Knight"
    setup[7][7]="Black Rook"
    for (let i=8;i<16;i++){
      setup[i][i]="Black Pawn"
    }
    setup[56][56]="White Rook"
    setup[57][57]="White Knight"
    setup[58][58]="White Bishop"
    setup[59][59]="White Queen"
    setup[60][60]="White King"
    setup[61][61]="White Bishop"
    setup[62][62]="White Knight"
    setup[63][63]="White Rook"
    for (let i=48;i<56;i++){
      setup[i][i]="White Pawn"
    }
    this.setState({
      positions: setup
    });
    console.log(this.state)

  }

  clicked=(event)=> {
    let square = parseInt(event.target.className.slice(-2))
    if (this.state.positions[square][square]!==""){
      console.log(`${this.state.positions[square][square]} selected`)
    }
  }

  
  render() {
    return (
      <div className="App">
        <Board positions={this.state.positions} clicked={this.clicked}/>
      </div>
    );
  }
}

export default App;
