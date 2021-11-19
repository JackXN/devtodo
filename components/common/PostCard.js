import {useState} from 'react';
import {useRouter} from 'next/router';

export default function PostCard({posts}) {
    return (
        <>
        <li>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <small>{new Date(post.createdAt).toLocaleDateString()}</small>
        <br/>
        <button type='button'>
            {'Publish'}
        </button>
        <button type='button'>
            {'Delete'}
        </button>
        </li>
        </>

    )
}