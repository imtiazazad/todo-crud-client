import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const Post = ({ post, handleDelete, handleUpdate }) => {

    const { _id, title, description , comment} = post

    const [showComment, setComment] = useState(false);
    const [like, setLike] = useState(false);

    const handleComment = e => {
        e.preventDefault();
        const comment = e.target.comment.value;
        

        fetch(`http://localhost:5000/todo/${_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({comment}),
        })
            .then(res => res.json())
            .then((data) => {
                console.log('Success:', data);
            })
    }

    return (
        <Card className='mx-auto mb-4' style={{ width: '40rem' }}>
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <Card.Title className='text-start'>{title}</Card.Title>
                    <div>
                        <button onClick={() => handleDelete(_id)} className='btn btn-danger me-3'>Delete</button>
                        <button onClick={() => handleUpdate(_id)} className='btn btn-success'>Update</button>
                    </div>
                </div>
                <Card.Text className='text-start'>
                    {description}
                </Card.Text>
              
               

            </Card.Body>
        </Card>
    );
};

export default Post;