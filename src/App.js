import React, { useState } from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import MyInput from "./components/UI/input/MyInput"
import MyButton from "./components/UI/button/MyButton";


function App() {
        const [posts, setPosts] = useState([
            {id: 1, title: 'Javascript', body: 'Description'},
            {id: 2, title: 'Javascript 2', body: 'Description'},
            {id: 3, title: 'Javascript 3', body: 'Description'},

        ])
        const [title, setTitle] = useState('')
        const addNewPost = (e) => {
            e.preventDefault()
        }
        

    return (
        <div className="App">
            <form>
                <MyInput 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type='text' 
                    placeholder="Название поста" 
                />
                <MyInput type='text' placeholder="Название поста" />
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>
            <PostList posts={posts} title='Посты про JS'/>
        </div>
    );
}

export default App;
