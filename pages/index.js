import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css';
import { Box, Text, Container } from '@chakra-ui/react';

//Utils

//Components
import Nav from '../components/Nav';

//Styles
import styles from '../styles/index.module.scss'

export default function Home() {
  return (
    <>
  <Head>
    <title>uitodo</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
    
    <main className={styles.waveContainer}>
<div className={styles.container}>
  <h1 className={styles.title}>Welcome to uiTodo </h1>
</div>

    </main>



    </>
  )
}
