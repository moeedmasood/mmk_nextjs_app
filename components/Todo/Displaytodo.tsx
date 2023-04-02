import { useEffect } from 'react'

const Displaytodo = (props: any) => {
    const { todo }: any = props

    // useEffect(() => {
    //     console.log('useEffect todo', todo)
    // }, [])

    return (
        <li style={{ color: todo?.completed ? 'green' : 'blue' }}>{todo?.title}</li>
    )
}

export default Displaytodo