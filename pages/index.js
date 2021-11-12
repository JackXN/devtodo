import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css';
import { Box, Text, Container } from '@chakra-ui/react';

//Utils

//Components
import Nav from '../components/Nav';
import Wave from '../components/Wave';
import Button from '../components/common/Button';
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
  <h1 className={styles.title}>Welcome to uitodo </h1>
  <Button type='primary'>Create To-Do List</Button>
</div>
<Wave color='#fff'/>


    </main>



    </>
  )
}
