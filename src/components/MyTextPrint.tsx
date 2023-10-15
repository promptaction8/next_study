import { myTextAtom } from '@/atoms/jotai_1'
import { useAtom } from 'jotai'

const MyTextPrint = () => {
    const [text] = useAtom(myTextAtom)

    return (
        <div className="w-96 border-2 border-solid border-slate-700">
            data : {text}
        </div>
    )
}

export default MyTextPrint
