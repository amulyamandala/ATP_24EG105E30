import { useContext } from 'react'
import { counterContextObj } from '../contexts/ContextProvider'
function EditCounter1() {
   const {counter,incrementCounter,decrementCounter}=useContext(counterContextObj)
    return (
        <div className='gap-40 px-10 py-10 grid grid-cols-2  '>
      <div className='bg-amber-200 mx-auto text-center border-2'>
        <h1>Counter</h1>
        <p className='text-4xl'>counter {counter}</p>
        <button onClick={incrementCounter} className='bg-green-600 w-30 h-10'>+</button>
        <button onClick={decrementCounter} className='bg-red-600 w-30 h-10'>-</button>
      </div>
      <div className='bg-amber-200 mx-auto text-center border-2'>
        <h1>Counter</h1>
        <p className='text-4xl'>counter {counter}</p>
        <button onClick={incrementCounter} className='bg-green-600 w-30 h-10'>+</button>
        <button onClick={decrementCounter} className='bg-red-600 w-30 h-10'>-</button>
      </div>
      <div className='bg-amber-200 mx-auto text-center border-2'>
        <h1>Counter</h1>
        <p className='text-4xl'>counter {counter}</p>
        <button onClick={incrementCounter} className='bg-green-600 w-30 h-10'>+</button>
        <button onClick={decrementCounter} className='bg-red-600 w-30 h-10'>-</button>
      </div>
      <div className='bg-amber-200 mx-auto text-center border-2'>
        <h1>Counter</h1>
        <p className='text-4xl'>counter {counter}</p>
        <button onClick={incrementCounter} className='bg-green-600 w-30 h-10'>+</button>
        <button onClick={decrementCounter} className='bg-red-600 w-30 h-10'>-</button>
      </div>
      </div>
    )
  }

export default EditCounter1