type CounterPropType = {
    value: number;
    increaseValue: () => void
}
const Counter = (props: Readonly<CounterPropType>) => {
    const { value, increaseValue } = props

    return (
        <div>
            Value: &nbsp;<span>{value}</span>
            <br />
            <button type='button' onClick={increaseValue}>
                Increase
            </button>
        </div>
    )
}

export default Counter