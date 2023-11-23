import React, { Component } from 'react'

type NamePropType = { name: string, nameHandler: (arg: string) => void }

//export default class Name extends PureComponent<NamePropType, {}, {}> {
export default class Name extends Component<NamePropType, {}, {}> {
    constructor(props: NamePropType) {
        super(props)
        console.log('Name created')
    }
    // shouldComponentUpdate(nextProps: Readonly<NamePropType>, nextState: Readonly<{}>, nextContext: any): boolean {
    //     console.log('Name SHC...')
    //     if (this.props.name !== nextProps.name)
    //         return true
    //     else
    //         return false
    // }
    render() {
        console.log('Name rendered')
        return (
            <div>
                Name: &nbsp;
                <input
                    type="text"
                    value={this.props.name}
                    onChange={
                        (e) => this.props.nameHandler(e.target.value)
                    } />
            </div>
        )
    }
}
