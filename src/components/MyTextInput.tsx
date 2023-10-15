import { myTextAtom } from '@/atoms/jotai_1'
import { useAtom } from 'jotai'

const MyTextInput = () => {
    const [text, setText] = useAtom(myTextAtom)
    const handleChange = (e) => setText(e.target.value)

    return (
        <input
            className="border-2 border-solid border-gray-700"
            value={text}
            onChange={handleChange}
        />
    )
}

export default MyTextInput
