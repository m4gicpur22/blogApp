import React, {useContext} from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import Blogcontext from '../context/blogcontext';


const Indexscreen = () => {
    const {data, addBlogpost} = useContext(Blogcontext);

    return (
        <View>
            <Text>Index Screen!</Text>
            <Button title="Add Post" onPress={addBlogpost} />
        <FlatList
            data={data}
            keyExtractor={(blogPost) => blogPost.title}
            renderItem={ ({ item }) => {
                return <Text>{item.title}</Text>
            }}
        />
        </View>
    );
    
}

const styles = StyleSheet.create({

});

export default Indexscreen;