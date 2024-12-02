import React from 'react'
import Square from './Square'
import { useState } from 'react'

const Board = () => {
    const [state, setState] = useState(Array(9).fill(null))
    const [isXTurn,setIsXTurn] = useState(true)

    const checkWinner=()=>{
        const winner = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ]
        for( let i of winner){
            const [a,b,c] = i
            if(state[a]!==null && state[a]===state[b] && state[a]===state[c]){
                return state[a];
            }
        }
        return false;
    }

        const isWinner = checkWinner()
        const handCLick = (index)=>{
            if(state[index]!==null){
                return;
            }
            console.log("Index",index)
            const turn = [...state]
            turn[index] = isXTurn ? "X" : "O"
            setState(turn)
            setIsXTurn(!isXTurn)
        }

  return (
     <div className='flex justify-center items-center'>
        <h4 className='text-center  absolute mb-44 text-3xl font-serif hover:bg-lime-300 px-3 py-1 rounded-full'>Player {isXTurn? "X":"O"} Play your Move</h4>
       { isWinner ? (<>{isWinner} Win the Game<button onClick={()=>setState(Array(9).fill(null))} className='bg-slate-300 ml-2 px-3 py-1 mt-2 rounded-full'>Play Again</button></>) : (
           <div className='mt-52 h-52 w-52 flex justify-center items-center'>
            
      <div>
        <Square onClick={()=>{handCLick(0)}} value={state[0]} />
        <Square onClick={()=>{handCLick(1)}} value={state[1]} />
        <Square onClick={()=>{handCLick(2)}} value={state[2]} />
      </div>
      <div >
        <Square onClick={()=>{handCLick(3)}} value={state[3]} />
        <Square onClick={()=>{handCLick(4)}} value={state[4]} />
        <Square onClick={()=>{handCLick(5)}} value={state[5]} />
      </div>
      <div>
        <Square onClick={()=>{handCLick(6)}} value={state[6]} />
        <Square onClick={()=>{handCLick(7)}} value={state[7]} />
        <Square onClick={()=>{handCLick(8)}} value={state[8]} />
      </div>
      
     </div>)}
    </div>
  )
}

export default Board
