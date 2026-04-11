import {useContext} from 'react'
import { counterContextObj } from '../contexts/ContextProvider'
import { useCounterStore } from '../store/CounterStore'

function Home() {
  let newCounter=useCounterStore((state)=>state.newCounter)
  
  let incrementCounter=useCounterStore((state)=>state.incrementCounter)
  let decrementCounter=useCounterStore((state)=>state.decrementCounter)
  let newCounter1=useCounterStore((state)=>state.newCounter1)
let incrementCounter1=useCounterStore((state)=>state.incrementCounter1)

  

   const {counter,changeCounter}=useContext(counterContextObj)
    const {counter1,changeCounter1}=useContext(counterContextObj)
  return (
    <div>
      <h1 className='text-4xl'>COUNTER : {counter}</h1>
      <button onClick={changeCounter} className='bg-pink-700 rounded-2xl w-25'>change</button>
      <div>
      <h1 className='text-4xl'>COUNTER : {counter1}</h1>
      <button onClick={changeCounter1} className='bg-pink-700 rounded-2xl w-25'>change</button>
    </div>
    <h1 className='text-4xl'>NEW COUNTER : {newCounter}</h1>
      <button onClick={incrementCounter} className='bg-pink-700 rounded-2xl w-25'>+</button>
      <button onClick={decrementCounter} className='bg-blue-700 rounded-2xl w-25'>-</button>
      <h1 className='text-4xl'>NEW COUNTER1 : {newCounter1}</h1>
      <button onClick={incrementCounter1} className='bg-pink-700 rounded-2xl w-25'>+</button>
    </div>
  )
}

export default Home