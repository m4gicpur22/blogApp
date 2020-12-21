import React, {useState} from 'react';

const Blogcontext = React.createContext();

export const Blogprovider = ({children}) => {
    const [blogPosts, setblogPosts] = useState([]);

    const addBlogpost = () => {
        setblogPosts([...blogPosts, {title: `Blog Post #${blogPosts.length + 1}`} ]);
    };

    return (
        <Blogcontext.Provider 
        value={{data: blogPosts, addBlogpost}}>
            {children}
        </Blogcontext.Provider>
    );
}

export default Blogcontext;