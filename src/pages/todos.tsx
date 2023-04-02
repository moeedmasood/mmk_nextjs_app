import { Header, Footer } from '../../components'
import { useEffect, useState } from 'react'
import Displaytodo from '../../components/Todo/Displaytodo'
import useSWR from 'swr'
import { json } from 'stream/consumers'

const fetcher = (url:string): any => fetch(url).then(r=>r.json())
 const Todos = () => {

    const [todos,setTodos] = useState<any[]>([]) //can also give any instead of string
    const [todo, setTodo] = useState<string>('')

    const {data, isLoading, error } = useSWR('https://jsonplaceholder.typicode.com/todos', fetcher) //this function is used to handle the fetch, such as it will automatically use async, isLoading, error, etc.
    
    // console.log("is Loading: ", isLoading)
    // console.log("Error:", error)
    // console.log("data:", data)

    useEffect(() => {
        // console.log('todos')
        // callApi()
        if(!isLoading && data?.length){
            setTodos([...data])
        }
        else {
            setTodos([])
        }
    }, [data,isLoading]) // component lifecycle management

    // const callApi = () =>{
    //     fetch ('https://jsonplaceholder.typicode.com/todos')
    //         .then(response => response.json())
    //         .then(json => setTodos([...json]))
    // }

     const addTodo=()=> {
        //  console.log('todo: ',todo)

         let obj: object = {
            completed: false,
            title: todo,
            userId: 1,
            id: todos?.length+1
         }
    todos.push(obj)
    setTodos([...todos]) //adding ... will create new reference of array in memory in this way react will know that array has changed and it has to render it on to the page
    setTodo('')
     }

    

    return (
        <>
        <Header />
            <h1>Todos </h1>
            <input placeholder="Input Task"
             onChange={(e)=> setTodo(e?.target?.value)}
             value={todo}
             
             />
            &nbsp;
            <button onClick={addTodo}>Add To Do</button>

            <br/>
            <br/>
            <br/>
            <ol>
                {todos?.map((v,i) => { //v is value and i is index of todos array
                    return(
                    <Displaytodo todo={v} key={i} />
                                
                    )
                })}

            </ol>

            <Footer />
        </>
    )

}

export default Todos