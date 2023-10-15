import React from 'react'
import { myTextAtom } from '../atoms/jotai_1'
import { Provider } from 'jotai'
import MyTextInput from '@/components/MyTextInput'
import MyTextPrint from '@/components/MyTextPrint'

const App = () => {
    return (
        <Provider>
            <MyTextInput />
            <MyTextPrint />
        </Provider>
    )
}

export default App
