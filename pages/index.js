

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




  return (
    <>
  <Head>
    <title>uitodo</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
    
    <main className={styles.waveContainer}>
<div className={styles.container}>
  <h1 className={styles.title}>Welcome to uitodo </h1>
  <button type='primary' onClick={openModal}>Create To-Do List</button>
</div>
<Wave color='#fff'/>
    </main>
  <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} style={customStyles} contentLabel='Example Modal'>
<div>
  <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
    </div>


  </Modal>



    </>
  )
}
