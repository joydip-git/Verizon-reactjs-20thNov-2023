import { useEffect } from "react"

const PostList = (props: Readonly<{ val: number }>) => {

    console.log('Post List rendered')
    useEffect(
        //this code will be execeuted every time after the component returns the react element
        () => {
            //fetch data
            console.log('this code will be executed always')

            //callback function with clean up resource code
            return () => {
                console.log('this clean up callback will be executed always but in the next cycle and at the begining')
            }
        }
    )

    useEffect(
        //this code will be execeuted after the component returns the react element, but only when the component receives a fresh value for 'val' from its parent component
        () => {
            console.log('this code will be executed only value of val changes')
            //callback function with clean up resource code
            return () => {
                console.log('this clean up callback will be executed only when val changes but in the next cycle and at the begining')
            }
        },
        [props.val]
    )
    useEffect(
        //this code will be execeuted after the component returns the react element, but ONLY one time, the very first time the component finishes rendering, as there is no value in the dependency list
        () => {
            console.log('this code will be executed only ONCE')
            //callback function with clean up resource code
            return () => {
                console.log('this clean up callback will be executed ONLY one time, when the component is unmounted, but in the next cycle and at the begining')
            }
        },
        []
    )

    return (
        <div>
            Count:&nbsp;{props.val}
        </div>
    )
}

export default PostList