type HeaderPropType = {
    headerTitle: string,
    value: number,
    hoverHandler: (arg: string) => void
}
const Header = (arg: Readonly<HeaderPropType>) => {

    //the property object is readonly and can't be mutated
    //arg.headerTitle = "Welcome to React JS version 18"
    // const copy = { ...arg }
    // copy.headerTitle = "Welcome to React JS version 18"

    // const onHover = () => {
    //     arg.hoverHandler('Hovering over h1....')
    // }

    const design = (
        // <h1 onMouseOver={arg.hoverHandler}>
        // <h1 onMouseOver={onHover}>
        <h1 onMouseOver={() => arg.hoverHandler('Hovering over h1...')}>
            {arg.headerTitle}
            <br />
            Value: &nbsp;
            {arg.value}
        </h1>
    )

    console.log(design)
    return design
}
export default Header