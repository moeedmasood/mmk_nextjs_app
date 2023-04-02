import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Header, Footer } from '../../components'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <h1>Index Page</h1>
      <Link href='/blog'>Blog</Link>

      <Footer />
    </>
  )
}
