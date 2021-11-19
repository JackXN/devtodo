import { getPreEmitDiagnostics, sortAndDeduplicateDiagnostics } from 'typescript';

const connectToDatabase = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req,res) {
switch(req.method) {
    case 'GET': {
        return getPosts(req,res);
    }
    case 'POST': {
        return addPost(req,res)
    }


   case 'PUT': {
return updatePost(req,res)
}

case 'DELETE)': {
return deletePost(req,res) 
}
}


// Fetch all posts
async function getPosts(req,res) {
    try{
let {db} = await connectToDatabase();
let posts = await db
.collection('todo_notes')
.find({})
.sort({ published: -1})
.toArray();
// return the posts
return res.json({
    message: JSON.parse(JSON.stringify(posts)),
    success: true
})
    } catch(error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        })
    }
}

async function addPost(req,res) {
    try {
        //connect to database
        let {db} = await connectToDatabase();
        //add the post
        await db.collection('todo_notes').insertOne(JSON.parse(req.body));
        //return a message
        return res.json({
            message: 'Post added successfully',
            success: true
        })
    }catch(error) {
return res.json({
    message: new Error(error).message,
success: false,
})
    }
}

}