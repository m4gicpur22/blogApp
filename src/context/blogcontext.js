import React, {useState, useReducer} from 'react';
import createDatacontext from '../context/createDatacontext';

const blogReducer = (state, action) => {

    switch(action.type){
        case 'add_blogPost':
            return [...state, {id: Math.floor(Math.random() * 99999), title: `Blog Post #${state.length + 1}`}];
        case 'delete_blogPost':
            return state.filter( (blogpost) => blogpost.id !== action.payload)
        default:
            return state;
    }
}

const addBlogpost = (dispatch) => {
    return () => {
        dispatch({ type: 'add_blogPost'});
    };
};

const deleteBlogpost = (dispatch) => {
    return (id) => {
        dispatch({type: 'delete_blogPost', payload: id})
    };
}

export const {Context, Provider} = createDatacontext(blogReducer, {addBlogpost, deleteBlogpost}, [])
