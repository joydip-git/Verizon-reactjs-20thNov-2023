import axios from 'axios'
import React, { Component } from 'react'
import { Post } from './post'

type PostListStateType = {
    fetchComplete: boolean,
    errorInfo: string,
    posts: Post[] | undefined
}
export default class PostList extends Component<{}, PostListStateType> {
    constructor(props: {}) {
        super(props)
        this.state = {
            fetchComplete: false,
            errorInfo: '',
            posts: undefined
        }
        console.log('PL created')
    }
    render() {
        console.log('PL rendered')
        const { errorInfo, posts, fetchComplete } = this.state
        let design: any;
        if (!fetchComplete)
            design = <span>Loading...</span>
        else if (errorInfo !== '')
            design = <span>{errorInfo}</span>
        else if (!posts) {
            design = <span>no records</span>
        } else
            design = (
                <div>
                    {
                        posts.map(
                            (p: Post) => {
                                return (
                                    <div key={p.id}>
                                        <h2>{p.title}</h2>
                                        <br />
                                        <p>{p.body}</p>
                                    </div>
                                )
                            }
                        )
                    }
                </div>
            )

        return design
    }
    //thie method is auto-wired with 'mount' event of the component
    //whenever 'mounting' happens, immediately after that, the 'mount' event gets fired and this method gets called
    componentDidMount(): void {
        console.log('PL mounted')
        axios
            .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
            .then(
                (resp) => {
                    this.setState({
                        fetchComplete: true,
                        errorInfo: '',
                        posts: resp.data.slice(0, 5)
                    })
                },
                (err: Error) => {
                    this.setState({
                        fetchComplete: true,
                        errorInfo: err.message,
                        posts: undefined
                    })
                }
            )
    }
    componentWillUnmount(): void {
        //clean up resources
        console.log('PL unmounted')
    }
    //this method is invoked every time except the very first time (component created and mounted)
    //this is method is executed is component is updated
    //either the state of the component has been updated
    //or the component has received new props from the parent component
    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<PostListStateType>, snapshot?: any): void {
        console.log('PL updated')
    }
}
