import { useAtom } from 'jotai'
import { myPostAtom } from '@/atoms/post'
import { editingPostIndexAtom } from '@/atoms/post'

const Post = () => {
    const [posts, setPosts] = useAtom(myPostAtom)
    const [, setEditingIndex] = useAtom(editingPostIndexAtom)
    const deletePost = (index) => {
        const updatedPosts = [...posts]
        updatedPosts.splice(index, 1)
        setPosts(updatedPosts)
    }
    const startEditing = (index) => {
        setEditingIndex(index)
    }

    return (
        <div className="relative mt-2 w-3/4 rounded-md border-2 border-solid border-indigo-600 p-6 shadow-sm">
            {posts.length === 0 ? (
                <p className="text-center text-xl text-gray-400">
                    게시물이 없습니다
                </p>
            ) : (
                posts.map((post, index) => (
                    <div key={index}>
                        <div className="relative mt-2 w-3/4 rounded-md border-2 border-solid border-indigo-600 p-6 shadow-sm">
                            <h2 className="mb-4 block w-2/3 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                {post.TITLE}
                            </h2>
                            <p className="mb-4 block w-2/3 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                {post.CONTENTS}
                            </p>
                            <button
                                className="h-14 w-28 rounded-md bg-indigo-200"
                                onClick={() => deletePost(index)}
                            >
                                Delete
                            </button>
                            <button
                                className="ml-4 h-14 w-28 rounded-md bg-indigo-200"
                                onClick={() => startEditing(index)}
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}

export default Post
