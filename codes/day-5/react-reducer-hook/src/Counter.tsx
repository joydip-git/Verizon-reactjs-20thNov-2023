import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState<number>(0)
    const incrementHandler = () => {
        setCount(
            (oldCount) => oldCount + 1
        )
    }
    const decrementHandler = () => {
        setCount(
            (oldCount) => oldCount - 1
        )
    }
    return (
        <div>Counter</div>
    )
}

export default Counter