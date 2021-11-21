import { useState } from "react";
import { useRouter } from "next/router";

//Icons
import {
  BsFillTrash2Fill as Trash,
  BsFillCheckCircleFill as Check,
} from "react-icons/bs";
import { FaTruckLoading as Loading } from "react-icons/fa";

// Chakra Components

// Components
import Wave from "../Wave";

// Styles
import styles from "../../styles/postCard.module.scss";

export default function PostCard({ post }) {
  // STATE
  const [publishing, setPublishing] = useState(false);
  const [deleting, setDeleting] = useState(false);


  const router = useRouter();

  // onClick functions


  const publishPost = async (postId) => {
    setPublishing(true);
    try {
      await fetch("/api/posts", {
        method: "PUT",
        body: postId,
      });

      // reset the publishing state
      setPublishing(false);

      // reload the page
      return router.push(router.asPath);
    } catch (error) {
      return setPublishing(false);
    }
  };

  //Delete post
  const deletePost = async (postId) => {
    setDeleting(true);

    try {
      await fetch("/api/posts", {
        method: "DELETE",
        body: postId,
      });

      // reset deleting state
      setDeleting(false);

      return router.push(router.asPath);
    } catch (error) {
      return setDeleting(false);
    }
  };

  //   console.log(post)

  return (
    <>
      <div className={styles.container}>
        <h1>{post.title}</h1>

        <div className={styles.listContainer}>
          <ul>
            <li>{post.content}</li>

            {post.contentTwo ? <li>{post.contentTwo}</li> : null}



            {post.contentThree ? <li>{post.contentThree}</li> : null}
            {post.contentFour ? <li>{post.contentFour}</li> : null}
          </ul>
        </div>

        <div className={styles.buttonContainer}>
          <button
            className={styles.button}
            type="button"
            onClick={() => publishPost(post._id)}
          >
            {publishing ? "Publishing" : "Publish"}
          </button>
          <button
            className={styles.button}
            type="button"
            onClick={() => deletePost(post._id)}
          >
            {deleting ? "Deleting" : "Delete"}
          </button>
        </div>
      </div>
    </>
  );
}

//  {post.contentTwo ? <li>{post.contentTow}</li> : null}
//  {post.contentThree ? <li>{post.contentThree}</li> : null}
//  {post.contentFour ? <li>{post.contentFour}</li> : null}

{
  /* <div className={styles.container}>
<h3>{post.title}</h3>
<li className={styles.list}>
    <p>{post.content}</p>
    <small>{new Date(post.createdAt).toLocaleDateString()}</small>
<br/>
<div className={styles.buttonContainer}>
{!post.published ? (
    <button className={styles.button} style={{marginRight: '20px'}}type='button' onClick={() => publishPost(post._id)}>
        {publishing ? 'Publishing' : 'Publish'}
    </button>
): null}
<button className={styles.button} type='button' onClick={() => deletePost(post._id)}>
{deleting ? 'Deleting' : 'Delete'}
</button>
</div>
</li>
</div> */
}
