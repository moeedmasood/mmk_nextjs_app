import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { Header, Footer } from '../../components' //by default this will import index.tsx this .tsx is not header's index, it is Component's index. In this file we have mentioned to import from Header folder



const inter = Inter({ subsets: ['latin'] })

export default function Blog() {
  return (
    <>
    <Header />
    <h1>Hello from Blog Page</h1>
    <Link href='@/index'>Back to Home</Link>

    <Footer />
          </>
  )
}

