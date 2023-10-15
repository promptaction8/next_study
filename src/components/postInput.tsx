import { useAtom } from 'jotai'
import React from 'react'
import { editingPostIndexAtom } from '@/atoms/post'
import { myPostAtom } from '@/atoms/post'
import { useForm } from 'react-hook-form'

const PostInput = () => {
    const [posts, setPosts] = useAtom(myPostAtom)
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
    } = useForm()
    const [editingIndex, setEditingIndex] = useAtom(editingPostIndexAtom)

    React.useEffect(() => {
        if (editingIndex !== -1) {
            setValue('title', posts[editingIndex].title)
            setValue('content', posts[editingIndex].content)
        }
    }, [editingIndex, setValue, posts])

    const onSubmit = (data) => {
        if (editingIndex !== -1) {
            const updatedPosts = [...posts]
            updatedPosts[editingIndex] = data
            setPosts(updatedPosts)
            setEditingIndex(-1)
        } else {
            setPosts([...posts, data])
        }
        reset()
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative mt-2 flex w-3/4 flex-col justify-center rounded-md border-2 border-solid border-indigo-600 p-6 shadow-sm"
        >
            <input
                className="mb-4 block w-2/3 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="text"
                {...register('TITLE')}
                required
                placeholder="TITLE"
            />
            {errors.TITLE && <p>제목을 작성해주세요</p>}
            <input
                className="mb-4 block h-60 w-2/3 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="text"
                {...register('CONTENTS')}
                required
                placeholder="CONTENTS"
            />
            {errors.CONTENTS && <p>내용을 작성해주세요</p>}
            <button
                className="h-14 w-28 rounded-md bg-indigo-200 "
                type="submit"
            >
                {editingIndex !== -1 ? 'Save' : '등록'}
            </button>
        </form>
    )
}

export default PostInput
