import React, { useEffect, useState } from 'react';
import Post from './Post';
import UpdateModal from './UpdateModal';

const AllPost = () => {

    const [posts, setPosts] = useState([]);
    const [updateId, setUpdateId] = useState();
    const [show, setShow] = useState(false);


    const handleDelete = id => {

        const url = `http://localhost:5000/todo/${id}`
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }


    const handleUpdate = id => {
        setShow(true)
        setUpdateId(id);
    }

    const update = e => {
        e.preventDefault();
        const title = e.target.title.value
        const description = e.target.description.value

        const data = { title, description }
        console.log(updateId);

        fetch(`http://localhost:5000/todo/${updateId}`, {
            method: 'PATCH',
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

    useEffect(() => {
        fetch('http://localhost:5000/todos')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [posts])

    return (
        <div>
            {
                posts.map(post => <Post
                    key={post._id}
                    post={post}
                    handleDelete={handleDelete}
                    handleUpdate={handleUpdate}
                />)
            }

            {show && <UpdateModal show={show} setShow={setShow} update={update} />}
        </div>
    );
};

export default AllPost;