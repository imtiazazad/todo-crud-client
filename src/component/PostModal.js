import React from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const PostModal = ({show, setShow}) => {

    const postSubmit = e => {
        e.preventDefault();
        const title = e.target.title.value
        const description = e.target.description.value

        const data = {title, description}

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
        <Modal show={show} onHide={() => setShow(false)} centered>
            <Modal.Header closeButton>
                <Modal.Title>Write a post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={postSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            name='title'
                            placeholder="title"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" name='description' rows={3} />
                    </Form.Group>
                    <input className='btn btn-info text-white' type="submit" value="Post" />
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default PostModal;