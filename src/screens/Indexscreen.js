import React, {useContext, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context as Blogcontext } from '../context/blogcontext';
import { Feather } from '@expo/vector-icons';


const Indexscreen = ({navigation}) => {
    const {state, deleteBlogpost, getBlogpost } = useContext(Blogcontext);

    useEffect( ()=> {
        getBlogpost();

        //re-rendering
        const listener = navigation.addListener('didFocus', () => {
            getBlogpost();
        });

        //preventing listener leaks
        return () => {
            listener.remove();
        };
    }, []);

    return (
        <View>
        <FlatList
            data={state}
            keyExtractor={(blogPost) => blogPost.title}
            renderItem={ ({ item }) => {
                return <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id} )}>
                    <View style={styles.row}>
                        <Text style={styles.title}>{item.title} - {item.id}</Text>
                    <TouchableOpacity onPress={() => deleteBlogpost(item.id)}>
                        <Feather name="trash" style={styles.icon}/>
                    </TouchableOpacity>
                </View>
                </TouchableOpacity>
            }}
        />
        </View>
    );
    
}

Indexscreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Feather name="plus" size={30} />
          </TouchableOpacity>
        ),
      };
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