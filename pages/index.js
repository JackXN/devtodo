import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Box, Text, Container } from "@chakra-ui/react";
import Modal from "react-modal";
import { useRouter } from "next/router";
import { Formik } from "formik";
//Components

import Wave from "../components/Wave";
// import LatestTodos from "../components/index/LatestTodos";
import PostCard from "../components/common/PostCard";
// import Button from '../components/common/Button';
import {
  Button,
  Input,
  FormControl,
  Stack,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/react";

//Styles
import styles from "../styles/index.module.scss";

export default function Home({ posts }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [contentTwo, setContentTwo] = useState("");
  const [contentThree, setContentThree] = useState("");
  const [contentFour, setContentFour] = useState("");

  const handlePost = async (e) => {
    e.preventDefault();

    // reset error and message
    setError("");
    setMessage("");

    // fields check
    if (!title || !content) return setError("All fields are required");

    // post structure
    let post = {
      title,
      content,
      contentTwo,
      contentThree,
      contentFour,
      published: false,
      createdAt: new Date().toISOString(),
    };
    // save the post
    let response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify(post),
    });

    // get the data
    let data = await response.json();

    if (data.success) {
      // reset the fields
      setTitle("");
      setContent("");

      // set the message, close modal and refresh the page
      return setMessage(data.message), closeModal(), router.reload();
    } else {
      // set the error
      console.log(error);
      return setError(data.message);
    }
  };


  // MODAL SETUP
  Modal.setAppElement("#__next");
  const router = useRouter();

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const afterOpenModal = () => {

  }



const formValidate = () => {
  const validateTitle = (value) => {
    let error;
    if(!value) {
      error = 'title is requred'
    }else if(value.toLowerCase() !== 'gym'){
      error = 'jeez nerd'
    }
    return error
  }
}



  return (
    <>
      <Head>
        <title>uitodo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.waveContainer}>
        <div className={styles.container}>
          <h1 className={styles.title}>Welcome to uitodo </h1>

          <Button type="primary" onClick={openModal} sx={customStyles.button}>
            Create To-Do List
          </Button>
        </div>
        <Wave color="#fff" />
      </main>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className={styles.modal}
        contentLabel="Example Modal"
      >
        {/* CREATE TODO FORM */}
        <Box sx={customStyles.modalContainer}>
          <h2>Enter list details</h2>
          <form sx={customStyles.modalForm} onSubmit={handlePost}>
            <Stack spacing={10}>
              <FormControl isRequired={true}>
                <FormLabel>Todo Title</FormLabel>
                <Input
                  placeholder="Groceries..."
                  size="lg"
                  sx={customStyles.input}
                  type="text"
                  name="title"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
              </FormControl>
          
                <Input
                  placeholder="Todo #1..."
                  size="lg"
                  sx={customStyles.input}
                  name="content"
                  onChange={(e) => setContent(e.target.value)}
                  value={content}
                />
      
              {/* TEST INPUT */}
              <Input
                placeholder="Todo #2..."
                size="lg"
                sx={customStyles.input}
                name="contentTwo"
                onChange={(e) => setContentTwo(e.target.value)}
                value={contentTwo}
              />
              <Input
                placeholder="Todo #3..."
                size="lg"
                sx={customStyles.input}
                name="contentThree"
                onChange={(e) => setContentThree(e.target.value)}
                value={contentThree}
              />
              <Input
                placeholder="Todo #4..."
                size="lg"
                sx={customStyles.input}
                name="contentFour"
                onChange={(e) => setContentFour(e.target.value)}
                value={contentFour}
              />
            </Stack>
            <Button sx={customStyles.button} pt="20px" type="submit">
              Create To-Do
            </Button>
          </form>
        </Box>
      </Modal>

      {/* END CREATE TO DO FORM */}

      {/* DISPLAY TODOS HERE */}
      <div className={styles.container}>
        <h1
          style={{
            fontFamily: "Space Grotest, sans-serif",
            color: "#009AFE",
            fontSize: "48px",
            fontWeight: "lighter",
          }}
        >
          Your latest todo items
        </h1>
        {posts.length === 0 ? (
          <Stack spacing={5}>
            <p
              style={{
                fontFamily: "Space Grotest, sans-serif",
                color: "#009AFE",
              }}
            >
              Nothing here... Create One?
            </p>
          </Stack>
        ) : (
          <ul>
            {posts.map((post, index) => (
              <PostCard post={post} key={index} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

// Server side rendering. Fetch data on each request
export async function getServerSideProps(context) {
  // get the current environment
  let dev = process.env.NODE_ENV !== "production";
  let { DEV_URL, PROD_URL } = process.env;

  // request posts from api
  let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/posts`);
  // extract the data
  let data = await response.json();

  return {
    props: {
      posts: data["message"],
    },
  };
}

//! MOVE TO ANOTHER FILE

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  button: {
    fontFamily: "Space Grotest, sans-serif",
    border: "none",
    padding: "1rem 2rem",
    margin: "1rem 0",
    fontSize: "1rem",
    borderRadius: "5px",
    outline: "0",
    cursor: "pointer",
    transition: "all 0.3s ease 0s",

    "&:hover": {
      boxShadow: "0px 15px 20px rgba(255,255,255,0.4)",
      transform: "translateY(-3px)",
    },
  },

  modal: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#09f",
    color: "#fff",
    overflow: "auto",
    borderRadius: "5px",
    outline: "none",
    padding: "2rem",
    boxShadow: "0px 8px 15px rgba(0,0,0,0.1)",
  },
  modalContainer: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  modalForm: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    fontFamily: "Space Grotesk, sans-serif",
    border: "none",
    padding: "1rem 2rem",
    margin: "1rem 0",
    boxSizing: "border-box",
    fontSize: "1rem",
    borderRadius: "5px",
    outline: "0",
    boxShadow: "0px 8px 15px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease 0s",

    "&:hover": {
      boxShadow: "0px 15px 20px rgba(255, 255,255, 0.4)",
      transform: "translateY(-3px)",
    },
  },
};
