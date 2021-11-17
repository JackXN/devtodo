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
}
