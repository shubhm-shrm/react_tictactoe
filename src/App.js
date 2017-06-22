import React, { Component } from 'react';
import './App.css';

class App extends Component {

 constructor()
 {
  super();
  this.state ={
    turn : 'X',
    gameEnded : false,
    winner : undefined,
    winnerLine : undefined
  };
  this.gameState = {
    board : Array(9).fill(''),
    totalMoves : 0
  }
}

clicked(e)
{
  if(this.state.winnerLine !== undefined)
  {
    return ;
  }
  if(this.gameState.board[e.target.dataset.square] === ''){
    this.gameState.board[e.target.dataset.square] = this.state.turn;  
    e.target.innerText = this.state.turn;
    this.setState ({
      turn : this.state.turn === 'X' ? 'O' : 'X',
    });
    this.gameState.totalMoves++;
  }
  var result = this.checkWinner();
//    console.log(this.state.board +'winner is =>' +result);
  if(result === 'X')
  {
    this.setState({
     gameEnded : true,
     winner : 'X',
     winnerLine : 'Match Won By "X"'
    });
  }
  else if(result === 'O')
  {
 
    this.setState({
     gameEnded : true,
      winner : 'O',
      winnerLine : 'Match Won By "O"'
    });
  } 
  else if(result === 'Draw')
  {
 
    this.setState({
     gameEnded : true,
      winner : 'DRAW',
      winnerLine : 'Match Drawn..!'
    });
  } 
}

checkWinner()
{
  var moves  = [[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],[0,1,2],[3,4,5],[6,7,8]];
  var board = this.gameState.board;
  for(let i =0 ;i<moves.length; i++)
  {
    console.log(i);
    if((board[moves[i][0]] === board[moves[i][1]] ) && ( board[moves[i][1]] === board[moves[i][2]] )  )
    {
      return board[moves[i][0]];
    }
  }
  if(this.gameState.totalMoves === 9){
    return 'Draw';
  }

}

render() {
  return (
    <div id="game">
      <div id="head">
         Welcome
      </div>
      <div id="status"> 
        {this.state.winnerLine}
      </div>
      <div id="board" onClick={(e) => this.clicked(e)}>
        <div className="square" data-square="0"></div>
        <div className="square" data-square="1"></div>
        <div className="square" data-square="2"></div>
        <div className="square" data-square="3"></div>
        <div className="square" data-square="4"></div>
        <div className="square" data-square="5"></div>
        <div className="square" data-square="6"></div>
        <div className="square" data-square="7"></div>
        <div className="square" data-square="8"></div>
      </div>
    </div>
    );
}
}

export default App;
