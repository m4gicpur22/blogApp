import React, {useState, useReducer} from 'react';
import { call } from 'react-native-reanimated';
import createDatacontext from '../context/createDatacontext';

const blogReducer = (state, action) => {

    switch(action.type){
        case 'add_blogPost':
            return [...state, {id: Math.floor(Math.random() * 99999), title: action.payload.title, content: action.payload.content }];
        case 'delete_blogPost':
            return state.filter( (blogpost) => blogpost.id !== action.payload);
        case 'edit_blogPost':
            return state.map( (blogPost) => {
                return blogPost.id === action.payload.id ? action.payload : blogPost
            })
        default:
            return state;
    }
}

const addBlogpost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({ type: 'add_blogPost', payload: {title, content}});
        callback();
    };
};

const deleteBlogpost = (dispatch) => {
    return (id) => {
        dispatch({type: 'delete_blogPost', payload: id})
    };
}

const editBlogpost = (dispatch) => {
    return(id, title, content, callback) => {
        dispatch({type: 'edit_blogPost', payload: {id, title, content}});
        callback();
    }
}

export const {Context, Provider} = createDatacontext(
    blogReducer, 
    {addBlogpost, deleteBlogpost, editBlogpost}, 
    [{title: 'Test Post 1', content: 'Test Content 1', id: 1}])
