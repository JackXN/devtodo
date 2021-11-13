import React from 'react'
import styles from '../../styles/button.module.scss';

const Button = () => {

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
<button className={styles.btn}>Create To-Do List</button>
    </>
    )
}

export default Button;
