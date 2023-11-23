import { memo } from "react"

const Counter = (props: Readonly<{ count: number, countHandler: () => void }>) => {
    console.log('Counter rendered')
    return (
        <div>
            Counter:&nbsp;{props.count}
            <br />
            <button type='button' onClick={props.countHandler}>
                Increase
            </button>
        </div>
    )
}
//memo => HOC (Higher Order Component)
export default memo(Counter)