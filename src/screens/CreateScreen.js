import React, {useContext} from 'react';
import {Context as Blogcontext} from '../context/blogcontext';
import BlogPostForm from '../Components/BlogPostForm';


const CreateScreen = ({navigation}) => {
    const {addBlogpost} = useContext(Blogcontext);

    return <BlogPostForm onSubmit={(title, content) => {
        addBlogpost(title, content, () => navigation.navigate('Index'));
    }}/>
}

export default CreateScreen;