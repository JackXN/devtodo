import React, {useState,useEffect}from 'react'
import Link from 'next/link';


//Components
import Button from '../common/Button';

// Styles
// import styles from '../../styles/index.module.css';

function LatestTodos({posts}) {

// initialize state
const [todos,setTodos] = useState([]);



    return (
    <>
    <div>
        <h1>Your latest todos</h1>
{posts.length === 0 ? (
    <h2>No added posts</h2>
): (
    <ul>
        {posts.map((post, index) => (
            <div key={index}>
                <h2>{post.title}</h2>
            </div>
        ))}
    </ul>
)}
    </div>
    
    </>
    )
}

export async function getServerSideProps(context) {
    // get the current environment
    let dev = process.env.NODE_ENV !== 'production';
    let {DEV_URL, PROD_URL} = process.env;

    //request posts from api
    let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/posts`)
// extract the data
let data = await response.json();

return {
    props: {
        posts: data['message'],
    }
}
}

export default LatestTodos
