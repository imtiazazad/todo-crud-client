import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import PostModal from './PostModal';

const CreatePost = () => {
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
  

    const postSubmit = e => {
        e.preventDefault();
        const title = e.target.title.value
        const description = e.target.description.value

        const data = { title, description }

        fetch('http://localhost:5000/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then((data) => {
                
                console.log('Success:', data);
                
            })
     
    }

    return (
        <div>
            <div >
                <Form className='d-flex justify-content-center m-4'onSubmit={postSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                     
                        <Form.Control
                            type="text"
                            name='title'
                            placeholder="write your name "
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    
                        <Form.Control
                            type="text"
                            name='description'
                            placeholder="write your position"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    
                        <Form.Control
                            type="submit" value="Post"
                            className="btn bg-primary text-white"
                        />
                    </Form.Group>
                   
                   
                </Form>
            </div>
            {show && <PostModal show={show} setShow={setShow}/>}
        </div>
    );
};

export default CreatePost;