import React from 'react';
import AllPost from './AllPost';
import CreatePost from './CreatePost';

const Home = () => {
    return (
        <div>
            <CreatePost/>
            <AllPost/>
        </div>
    );
};

export default Home;