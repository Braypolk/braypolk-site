import * as Y from 'yjs'
import { WebrtcProvider } from 'y-webrtc'

const ydoc = new Y.Doc()
const provider = new WebrtcProvider(`tutorial-tic-tac-toe`, ydoc)

export default function CRDT () {
  return (
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
  )
}
