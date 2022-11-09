import axios from "axios";
import { useState, useEffect} from "react";
import React from "react";
import Example from "./addPicture";

const Home = () => {
    const [ posts, setPosts] = useState([]);
    const api = 'https://jsonplaceholder.typicode.com'
    useEffect(() => {
        const getPosts = async () => {
            const {data: res} = await axios.get(api)
            setPosts(res)
        };
        getPosts();
    },[]);

    const handleDelete = async (post) =>{
        await axios.delete(api + "/" + post.id + post);
        setPosts(posts.filter((p) => p.id !== post.id))
    }

    return (
        <>
            <div className={"container"}>
                <table className={"table"}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Picture</th>
                    </tr>
                    </thead>
                    <tbody>
                    {posts.map(post =>
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.url}</td>
                            <td><Example post={post} posts={posts} setPosts={setPosts} className="btn-info btn-sm"></Example></td>
                            <td><button className={"remove btn btn-danger btn-sm"} onClick={() => handleDelete(post)}>Remove</button></td>
                        </tr>
                    )}
                    </tbody>
                </table>
                <Example posts={posts} setPosts={setPosts}/>
            </div>
        </>
    )
}
export default Home;