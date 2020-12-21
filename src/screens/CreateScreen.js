import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Context as Blogcontext} from '../context/blogcontext';
import BlogPostForm from '../Components/BlogPostForm';


const CreateScreen = ({navigation}) => {
    const {addBlogpost} = useContext(Blogcontext);

    return <BlogPostForm onSubmit={(title, content) => {
        addBlogpost(title, content, () => navigation.navigate('Index'));
    }}/>

}

const styles = StyleSheet.create({
});

export default CreateScreen;