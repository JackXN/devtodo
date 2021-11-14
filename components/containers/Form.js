import React, {useState} from 'react'

function Form() {

    const [title,setTitle] = useState();
    const [description, setDescription] = useState('');
    const [error,setError] = useState('');
    const [message,setMessage] = useState('');

    const handlePost = async (e) => {
        e.preventDefault();
        // when the post submits, reset all the fields
        setTitle('');
        setMessage('');
        // Check field inputs
        if(!title || !description) return setError('All fields are required');

        // Note structure
        let note = {
            title,
            description,
            published: false,
            createdAt: new Date().toISOString(),
        }



    }

    return (
        <div>
            
        </div>
    )
}

export default Form
