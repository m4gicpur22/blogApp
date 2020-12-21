import React, {useContext} from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context as Blogcontext } from '../context/blogcontext';
import { Feather } from '@expo/vector-icons';


const Indexscreen = () => {
    const {state, addBlogpost, deleteBlogpost} = useContext(Blogcontext);

    return (
        <View>
            <Button title="Add Post" onPress={addBlogpost} />
        <FlatList
            data={state}
            keyExtractor={(blogPost) => blogPost.title}
            renderItem={ ({ item }) => {
                return <View style={styles.row}>
                    <Text style={styles.title}>{item.title} - {item.id}</Text>
                    <TouchableOpacity onPress={() => deleteBlogpost(item.id)}>
                        <Feather name="trash" style={styles.icon}/>
                    </TouchableOpacity>
                </View>
            }}
        />
        </View>
    );
    
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});

export default Indexscreen;