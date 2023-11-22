type ContentPropType = {
    contentBody: string
}
const Content = (props: Readonly<ContentPropType>) => {
    const design = <p>{props.contentBody}</p>
    return design
}
export default Content