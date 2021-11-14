import React, {useState} from 'react'
import styles from '../../styles/button.module.scss';
import Modal from 'react-modal';
const Button = () => {

  Modal.setAppElement('#__next');
  const [modalIsOpen, setIsOpen] = useState(false);
const openModal = () => {
  setIsOpen(true);
}

const closeModal = () => {
  setIsOpen(false);
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
<button className={styles.btn} onClick={openModal}>Create To-Do List</button>
    </>
    )
}

export default Button;
