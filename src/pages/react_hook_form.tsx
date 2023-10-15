import { useForm } from 'react-hook-form'

function App() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    return (
        <form onSubmit={handleSubmit((data) => console.log(data))}>
            <input
                className="border-2 border-solid border-black"
                type="text"
                {...register('USERNAME')}
            />
            {errors.USERNAME && <p>USERNAME IS NOT CORRECT.</p>}
            <input
                className="border-2 border-solid border-black"
                type="password"
                {...register('PASSWORD', { required: true })}
            />
            {errors.PASSWORD && <p>PASSWORD IS NOT CORRECT.</p>}
            <button className="h-28 w-28 bg-slate-400" type="submit">
                SUBMIT
            </button>
        </form>
    )
}

export default App
