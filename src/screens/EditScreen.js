import React, {useContext} from 'react';
import {Context as Blogcontext} from '../context/blogcontext';
import BlogPostForm from '../Components/BlogPostForm';


const EditScreen = ({navigation}) => {
    const { state, editBlogpost } = useContext(Blogcontext);
    const blogPost = state.find( (blogPost) => blogPost.id === navigation.getParam('id'));

    return <BlogPostForm 
    initialValues={{title: blogPost.title, content: blogPost.content}}
    onSubmit={(title, content) => {
        editBlogpost(blogPost.id, title, content, () => navigation.pop());
    }} />

}

export default EditScreen;