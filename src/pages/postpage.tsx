import React from 'react'
import { useForm } from 'react-hook-form'

function PostForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        // 제출된 데이터를 처리하는 로직을 작성
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="title">제목</label>
                <input
                    type="text"
                    id="title"
                    {...register('title', { required: true })}
                />
                {errors.title && <span>제목을 입력해주세요.</span>}
            </div>
            <div>
                <label htmlFor="content">내용</label>
                <textarea
                    id="content"
                    {...register('content', { required: true })}
                />
                {errors.content && <span>내용을 입력해주세요.</span>}
            </div>
            <div>
                <button type="submit">게시</button>
            </div>
        </form>
    )
}

export default PostForm
