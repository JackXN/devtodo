

import Head from 'next/head'
import Image from 'next/image'
import {useState} from 'react';
import { Box, Text, Container } from '@chakra-ui/react';
import Modal from 'react-modal';
import { useRouter } from 'next/router'
//Components
import Nav from '../components/Nav';
import Wave from '../components/Wave';
// import Button from '../components/common/Button';
import {Button, input} from '@chakra-ui/react';

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
  button: {
    fontFamily: 'Space Grotest, sans-serif',
    border: 'none',
    padding: '1rem 2rem',
    margin: '1rem 0',
fontSize: '1rem',
borderRadius: '5px',
outline: '0',
cursor: 'pointer',
// boxShadow: '0px 8px 15px rgba(0,0,0,,0.1)',
transition: 'all 0.3s ease 0s',


'&:hover': {
  boxShadow: '0px 15px 20px rgba(255,255,255,0.4)',
  transform: 'translateY(-3px)',
}
  }
};




  return (
    <>
  <Head>
    <title>uitodo</title>
    <link rel="icon" href="/favicon.ico"/>
  </Head>
    
    <main className={styles.waveContainer}>
<div className={styles.container}>
  <h1 className={styles.title}>Welcome to uitodo </h1>
  <Button type='primary' onClick={openModal} 
sx={customStyles.button}
  >Create To-Do List</Button>
</div>
<Wave color='#fff'/>
    </main>
  <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} style={customStyles} contentLabel='Example Modal'>
<div className={styles.modalContainer}>
  <h2>Enter list details</h2>
  <form className={styles.modalForm}>
    <input/>
    
  </form>
</div>

  </Modal>



    </>
  )
}
