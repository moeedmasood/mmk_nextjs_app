import { Inter } from 'next/font/google'
import { Header, Footer } from '../../components'
const inter = Inter({ subsets: ['latin'] })
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { count } from 'console'

export default function Counter() {
    const [counter, setCounter] = useState<number>(0) //this is to update UI as well
          //variable, function (perform the operation in this function)
    
    
    
    
    // useEffect(()=> { console.log("Empty UseEffect")
    //   //this function will run always during this component's lifecycle
    // })
    

    // useEffect(()=> { console.log("Empty UseEffect")
    //   //this function will run only when component is mounting
    // }, [])
    
    useEffect(()=> { 
      console.log("Empty UseEffect: ComponentWillMount")
      return () => console.log("unmount")
      
      //the return part will run when component is unmounted

    }, [])

    useEffect(()=> { 
      console.log(" UseEffect with Counter Component update", counter)
      //this function will run when component is updated
    }, [counter])
    
          const incrementCount =():void =>{
            setCounter(counter+1)
            //console.log("Counter: ",counter)
    }

    const decrementCount = ():void =>{
        setCounter(counter=== 0? 0 : counter-1) //using condition in the function
        // setCounter(!counter? 0 : counter-1) //this function is same as above
        //console.log("Counter: ", counter)
    }


  return (
    <>
    <Header />
    <h1>Counter: {counter}</h1>

    <button onClick={incrementCount}>Increment</button>

    <br />
    <br />
    
    <button onClick={decrementCount}>Decrement</button>
    <br/>

    

    <Footer />
          </>
  )
}

// setTimeout(() =>{ console.log("Printing")}, 5000) this will print after 5 seconds, this will run once
// setInterval(() =>{ console.log("Printing")}, 5000) this will print after 5 seconds, this will run every 5 seconds, to clear this use clearInterval()