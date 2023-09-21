import { useState } from 'react'

export default function Test() {
    const [fruit, setFruit] = useState('apple')
    const handleSubmit = (e: SubmitEvent) => {
        e.preventDefault()
        setFruit(e.target.temp.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name='temp'
                    type='test'
                    style={{
                        boxShadow: '0 0 4px #000',
                    }}
                />
                <button>누르면 글자 추가!</button>
            </form>
            {fruit}
        </div>
    )
}