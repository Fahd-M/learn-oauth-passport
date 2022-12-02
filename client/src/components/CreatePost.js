import { useEffect, useState } from "react";
import axios from 'axios';
import LoginButton from "./LoginButton";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

// The posts page should render all the posts in the database.

// If you are not logged in, the login button will be rendered.
// If you are logged in, the "Create New Post" form will be rendered as well as a label for all posts created by the currently logged in user.

const CreatePost = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        //check if user is currently logged in so we cna display a form or login button condition
        axios.get(`${SERVER_URL}/auth/profile`, { withCredentials: true })
        .then((res) => {
            if (res.data) {
                setIsLoggedIn(true);
            }
        });
    }, []);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const { postTitle, postContent } = e.target;

        //post to api (with use of withCredentials too)
        axios.post(`${SERVER_URL}/posts`, { title:postTitle.value, content: postContent.value, }, { withCredentials: true })
        .then(() => {
            //re-fetch the posts 
            props.onPostCreate();
            e.target.reset();
        })
        .catch((err) => {
            console.log('Error creating a new post:' , err);
        });
    };

    return (
        <section className="create-post">
            {isLoggedIn ? 
                (
            //if user logged in render the form to create post
                    <form className="post-form" onSubmit={handleFormSubmit}>
                        <h3> Create new post </h3>
                        <div className="post-form__fields">
                            <div className="post-form__field">
                                <label htmlFor="postTitle" className="post-form__label">
                                    Post Title
                                </label>
                                <input 
                                    type="text"
                                    name="postTitle"
                                    id="postTitle"
                                    maxLength="75"
                                    required
                                />
                            </div>  
                            <div className="post-form__field">
                                <label htmlFor="postContent" className="post-form__label">
                                    Post Content
                                </label>
                                <input 
                                    type="text"
                                    name="postContent"
                                    id="postContent"
                                    required
                                />
                            </div>
                        </div>
                        <button type="submit" className="post-form__submit">
                            /&nbsp;&nbsp;Submit
                        </button>
                    </form>
                ) : (
                    // if the user not logged in - render login button
                    <>
                        <p>
                            <strong>Login to create your own post </strong>
                        </p>
                        <LoginButton />
                    </>
                )}
        </section>
    );
};

export default CreatePost;