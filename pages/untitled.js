import * as Y from 'yjs'
import { WebrtcProvider } from 'y-webrtc'
import { useEffect } from 'react'

const SSR = typeof window === 'undefined'
const ydoc = new Y.Doc()
// const provider = new WebrtcProvider(`tutorial-tic-tac-toe`, ydoc)
const provider = new WebrtcProvider('your-room-name', ydoc)

// function calculateWinner(squares) {
//     const lines = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ];
//     for (let i = 0; i < lines.length; i++) {
//       const [a, b, c] = lines[i];
//       if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//         return squares[a];
//       }
//     }
//     return null;
//   }

// function Square (props) {
//   return (
//     <button className='square' onClick={props.onClick}>
//       {props.value}
//     </button>
//   )
// }

// function Board (props) {
//   renderSquare(i => {
//     return (
//       <Square
//         value={this.props.squares[i]}
//         onClick={() => this.props.onClick(i)}
//       />
//     )
//   })

//   return (
//     <div>
//       <div className='board-row'>
//         {this.renderSquare(0)}
//         {this.renderSquare(1)}
//         {this.renderSquare(2)}
//       </div>
//       <div className='board-row'>
//         {this.renderSquare(3)}
//         {this.renderSquare(4)}
//         {this.renderSquare(5)}
//       </div>
//       <div className='board-row'>
//         {this.renderSquare(6)}
//         {this.renderSquare(7)}
//         {this.renderSquare(8)}
//       </div>
//     </div>
//   )
// }

function Untitled ({ Component, pageProps }) {
  //   useEffect(() => {
  //     const ymap = ydoc.getMap('state')
  //     ymap.observe(() => {
  //       this.setState({
  //         ...ymap.get('state')
  //       })
  //       console.log('helo', ymap.get('state'))
  //     })

  //     return () => {
  //       // the same as coponentwillunmount
  //       provider.disconnect()
  //     }
  //   })
  //   handleClick((i) => {
  //     const history = this.state.history.slice(0, this.state.stepNumber + 1)
  //     const current = history[history.length - 1]
  //     const squares = current.squares.slice()
  //     if (calculateWinner(squares) || squares[i]) {
  //       return
  //     }
  //     squares[i] = this.state.xIsNext ? 'X' : 'O'
  //     this.setState(
  //       {
  //         history: history.concat([
  //           {
  //             squares: squares
  //           }
  //         ]),
  //         stepNumber: history.length,
  //         xIsNext: !this.state.xIsNext
  //       },
  //       () => {
  //         const ymap = ydoc.getMap('state')
  //         ymap.set('state', this.state)
  //       }
  //     )
  //   })

  //   jumpTo(step => {
  //     this.setState({
  //       stepNumber: step,
  //       xIsNext: step % 2 === 0
  //     })
  //   })

  //   renderSquare(i => {
  //     return (
  //       <Square
  //         value={this.props.squares[i]}
  //         onClick={() => this.props.onClick(i)}
  //       />
  //     )
  //   })

  //   const history = this.state.history
  //   const current = history[this.state.stepNumber]
  //   const winner = calculateWinner(current.squares)

  //   const moves = history.map((step, move) => {
  //     const desc = move ? 'Move #' + move : 'Game start'
  //     return (
  //       <li key={move}>
  //         <a href='#' onClick={() => this.jumpTo(move)}>
  //           {desc}
  //         </a>
  //       </li>
  //     )
  //   })

  //   let status
  //   if (winner) {
  //     status = 'Winner: ' + winner
  //   } else {
  //     status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
  //   }

  return (
    <>
      {!SSR ? (
        <div className='game'>
          test
          <div className='game-board'>
            {/* <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
        /> */}
          </div>
          <div className='game-info'>
            {/* <div>{status}</div> */}
            {/* <ol>{moves}</ol> */}
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Untitled