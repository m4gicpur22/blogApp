import React, {useState} from 'react';
import { render } from 'react-dom';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const BlogPostForm = ({onSubmit, initialValues}) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

        return (
            <View>
                <Text 
                    style={styles.labelStyle}>
                    Enter Title
                </Text>
                <TextInput 
                    style={styles.inputStyle}value={title} 
                    onChangeText={(text) => setTitle(text)}
                />
                <Text 
                    style={styles.labelStyle}>
                    Enter Content
                </Text>
                <TextInput 
                    style={styles.inputStyle}value={content} 
                    onChangeText={(text) => setContent(text)}
                />
                <Button 
                    title="Save Blog Post" 
                    onPress={() => {onSubmit(title, content)}}
                />
            </View>
        );

}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}

const styles = StyleSheet.create({ 
    inputStyle: {
        fontSize: 18,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    labelStyle : {
        fontSize: 20,
        marginBottom: 10,
        marginLeft: 5
    }
});

export default BlogPostForm;