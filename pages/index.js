

import Head from 'next/head'
import Image from 'next/image'
import {useState} from 'react';
import { Box, Text, Container } from '@chakra-ui/react';
import Modal from 'react-modal';
import { useRouter } from 'next/router'
//Components
import Nav from '../components/Nav';
import Wave from '../components/Wave';
import Button from '../components/common/Button';
//Styles
import styles from '../styles/index.module.scss'

export default function Home() {
  Modal.setAppElement('#__next');
  const router = useRouter();

const [modalIsOpen, setIsOpen] = useState(false);

const openModal = () => {
  setIsOpen(true);
}

const closeModal = () => {
  setIsOpen(false);
}

function afterOpenModal() {

}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const styles = {
  container: {
    display: 'flex',
    alignItems:'center',
    justifyContent:'center',
    padding: '2rem 0',
  
  '&:afterWave': {
    backgroundColor: '#fff',
    color: '#09f',
    pb: '4rem',

  }
  
  },

  title: {
    fontSize: '4rem',
    margin: '7rem 1.25rem 2.5rem',

  },
  
  subTitle: {
    fontSize: '3rem',
    margin: '7rem 1.25rem 2.5rem'
  }

}



  return (
    <>
  <Head>
    <title>uitodo</title>
    <link rel="icon" href="/favicon.ico"/>
  </Head>
    
    <main className={styles.waveContainer}>
<div className={styles.container}>
  <h1 className={styles.title}>Welcome to uitodo </h1>
  <button type='primary' onClick={openModal} 
  style={{
    fontFamily: 'Space Grotest, sans-serif',
    border: 'none',
    padding: '1rem 2rem',
    margin: '1rem 0',
    margin: '1rem'
  }}
  >Create To-Do List</button>
</div>
<Wave color='#fff'/>
    </main>
  <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} style={customStyles} contentLabel='Example Modal'>
<div className={styles.modalContainer}>
  <form className={styles.modalForm}>
    
  </form>
</div>

  </Modal>



    </>
  )
}
