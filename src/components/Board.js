import React from "react";
import WhitePawn from "../images/WhitePawn.png";
import WhiteKing from "../images/WhiteKing.png";
import WhiteQueen from "../images/WhiteQueen.png";
import WhiteBishop from "../images/WhiteBishop.png";
import WhiteKnight from "../images/WhiteKnight.png";
import WhiteRook from "../images/WhiteRook.png";
import BlackPawn from "../images/BlackPawn.png";
import BlackKing from "../images/BlackKing.png";
import BlackQueen from "../images/BlackQueen.png";
import BlackBishop from "../images/BlackBishop.png";
import BlackKnight from "../images/BlackKnight.png";
import BlackRook from "../images/BlackRook.png";
import "../style/board.css";

const Board = (props) => {
  if (props.positions.length === 64) {
    const gridRef = [];
    const collumns = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const rows = [1, 2, 3, 4, 5, 6, 7, 8];
    for (let number of rows) {
      collumns.map((value) => {
        return gridRef.push(value.concat(9 - number).toString());
      });
    }
    const squares = [];
    for (let i = 0; i < gridRef.length; i++) {
      if (Math.floor(i / 8) % 2 === 0) {
        i % 2 === 0 ? squares.push("w") : squares.push("b");
      } else {
        i % 2 === 0 ? squares.push("b") : squares.push("w");
      }
    }
    return (
      <div className="Board">
        {squares.map((item, i) => {
          let dynamic 
          if (props.positions[i][i].replace(/\s/g, "") === "WhitePawn") {
            dynamic = WhitePawn
          }else if (props.positions[i][i].replace(/\s/g, "") === "BlackPawn") {
            dynamic = BlackPawn
          }else if (props.positions[i][i].replace(/\s/g, "") === "WhiteQueen") {
            dynamic = WhiteQueen
          }else if (props.positions[i][i].replace(/\s/g, "") === "BlackQueen") {
            dynamic = BlackQueen
          }else if (props.positions[i][i].replace(/\s/g, "") === "WhiteKing") {
            dynamic = WhiteKing
          }else if (props.positions[i][i].replace(/\s/g, "") === "BlackKing") {
            dynamic = BlackKing
          }else if (props.positions[i][i].replace(/\s/g, "") === "WhiteRook") {
            dynamic = WhiteRook
          }else if (props.positions[i][i].replace(/\s/g, "") === "BlackRook") {
            dynamic = BlackRook
          }else if (props.positions[i][i].replace(/\s/g, "") === "WhiteBishop") {
            dynamic = WhiteBishop
          }else if (props.positions[i][i].replace(/\s/g, "") === "BlackBishop") {
            dynamic = BlackBishop
          }else if (props.positions[i][i].replace(/\s/g, "") === "WhiteKnight") {
            dynamic = WhiteKnight
          }else if (props.positions[i][i].replace(/\s/g, "") === "BlackKnight") {
            dynamic = BlackKnight
          }else{
            dynamic = false
          }
          return (
            <div key={i} className={item.concat(" square").concat(` ${i}`)} id={gridRef[i]} onClick={props.clicked}>
              {dynamic ? (
                <img src={dynamic} alt="Piece" style={{pointerEvents:"none"}}/>
              ):(
                null
              )
              }
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default Board;
