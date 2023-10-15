import React from 'react'
import { Provider } from 'jotai'
import Post from '@/components/post'
import PostInput from '@/components/postInput'

const App = () => {
    return (
        <Provider>
            <Post />
            <PostInput />
        </Provider>
    )
}

export default App
