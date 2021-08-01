// import React from 'react';


function getAllPosts() {
    fetch('http://127.0.0.1:8000/api/posts/')
        .then(response => response.json())
        .then(result => this.setState({posts: result}));
}

// export default getAllPosts
