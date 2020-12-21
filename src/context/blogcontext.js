import React from 'react';
import createDatacontext from '../context/createDatacontext';
import jsonServer from '../Api/jsonServer';

const blogReducer = (state, action) => {

    switch(action.type){
        case 'get_blogpost':
            return action.payload;
        //case 'add_blogPost':
          //  return [...state, {id: Math.floor(Math.random() * 99999), title: action.payload.title, content: action.payload.content }];
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

const getBlogpost = (dispatch) => {
    return async () => {
        const res = await jsonServer.get('/blogposts');
        dispatch({type: 'get_blogpost', payload: res.data});
    }
}

const addBlogpost = (dispatch) => {
    return async (title, content, callback) => {
        
        await jsonServer.post('/blogposts', {title, content});

        //dispatch({ type: 'add_blogPost', payload: {title, content}});
        callback();
    };
};

const deleteBlogpost = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`);

        dispatch({type: 'delete_blogPost', payload: id})
    };
}

const editBlogpost = (dispatch) => {
    return async (id, title, content, callback) => {

        await jsonServer.put(`/blogposts/${id}`, {title, content});

        dispatch({type: 'edit_blogPost', payload: {id, title, content}});
        callback();
    }
}

export const {Context, Provider} = createDatacontext(
    blogReducer, 
    {addBlogpost, deleteBlogpost, editBlogpost, getBlogpost}, 
    []);
