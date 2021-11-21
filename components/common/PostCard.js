import {useState} from 'react';
import {useRouter} from 'next/router';

//Icons
import {BsFillTrash2Fill as Trash, BsFillCheckCircleFill as Check} from 'react-icons/bs'


// Components
import Wave from '../Wave';

// Styles
import styles from '../../styles/postCard.module.scss';

export default function PostCard({post}) {
const [publishing, setPublishing] = useState(false);
const [deleting, setDeleting] = useState(false);
const router = useRouter();



const publishPost = async (postId) => {
    setPublishing(true);
    try{
        await fetch('/api/posts', {
            method: 'PUT',
            body: postId,
        });

        // reset the publishing state
        setPublishing(false);

        // reload the page
        return router.push(router.asPath);
    } catch(error) {
        return setPublishing(false);
    }
};

//Delete post
const deletePost = async(postId) => {
    setDeleting(true);

    try{
await fetch('/api/posts', {
    method: 'DELETE',
    body: postId,
})

// reset deleting state
setDeleting(false);

return router.push(router.asPath);
    } catch(error) {
return setDeleting(false);
    }
}





    return (
        <>
        
    <div className={styles.container}>
<div className={styles.cardContent}>
    <div className={styles.cardDetails}>
        <h1 style={{fontSize: '25px'}}>{post.title}</h1>
        <h2 style={{fontSize: '15px'}}>{post.content}</h2>
    </div>

    <div className={styles.buttonContainer}>
    <button className={styles.primaryBtn} style={{marginRight: '20px'}}type='button' onClick={() => publishPost(post._id)}>
        <Check/>
    </button>
       <button className={styles.secondaryBtn} type='button' onClick={() => deletePost(post._id)}>
       <Trash/>
       </button>
    </div>
</div>



    </div>
        </>

    )
}



// <div className={styles.container}>
// <h3>{post.title}</h3>
// <li className={styles.list}>
//     <p>{post.content}</p>
//     <small>{new Date(post.createdAt).toLocaleDateString()}</small>
// <br/>
// <div className={styles.buttonContainer}>
// {!post.published ? (
//     <button className={styles.button} style={{marginRight: '20px'}}type='button' onClick={() => publishPost(post._id)}>
//         {publishing ? 'Publishing' : 'Publish'}
//     </button>
// ): null}
// <button className={styles.button} type='button' onClick={() => deletePost(post._id)}>
// {deleting ? 'Deleting' : 'Delete'}
// </button>
// </div>
// </li>
// </div>