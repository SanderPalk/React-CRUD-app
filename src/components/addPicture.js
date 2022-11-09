import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import usePlaceholder from "react-bootstrap/usePlaceholder";

function Example(props) {
    const [show, setShow] = useState(false);
    const [state, setState] = React.useState({
        album: 1,
        id: 0,
        title: "",
        url: "",
    })
    function handleChange(evt) {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }

    function savePicture() {
        const api = "https://jsonplaceholder.typicode.com/photos" + props.post.id
        let updatePost = props.post
        updatePost.title = state.title
        updatePost.url = state.url
        axios.put(api, updatePost).then(() => {
            props.setPosts([...props.posts]);
        })
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    if(props.post) {
        return (
            <>
                <button variant={"primary"} onClick={handleShow}>Edit User</button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit picture</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label htmlFor={"title"}>Title:</label>
                        <input type={"text"} className={"form-control"} name={"name"} onChange={handleChange} value={state.title} placeholder={props.post.title} id={"name"}/>
                        <label htmlFor="url">Url:</label>
                        <input type="text" className="form-control" name="url" onChange={handleChange} value={state.url}  placeholder={props.post.url} id="url"></input>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant={"secondary"} onClick={handleClose}>
                            Close
                        </Button>
                        <Button type={"submit"} class={"update"} variant={"primary"} onClick={"updateUser"}>
                            Update
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
    else {
        return (
            <>
                <Button class={"addpicture"} variant={"primary"} onClick={handleShow}>
                    Add new picture
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add picture</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label htmlFor="Title">Title:</label>
                        <input type="text" className="form-control" name="title" onChange={handleChange}
                               value={state.title} id="title" placeholder="title"></input>
                        <label htmlFor="url">Url:</label>
                        <input type="text" className="form-control" name="url" onChange={handleChange} value={state.url}
                               id="title" placeholder="username"></input>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={savePicture}>
                            Add
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default Example