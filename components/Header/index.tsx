import Link from 'next/link'
import { useState } from 'react'

const Header = () =>{
    
    return (<>
    <Link href="./index">Home </Link> | &nbsp;
    <Link href="./blog">Blog </Link> | &nbsp;
    <Link href="./counter">Counter</Link> | &nbsp;
    <Link href="./todos">To Dos</Link>
    

    <br />
    <br />
    <br />

    
    </>)
}

export default Header