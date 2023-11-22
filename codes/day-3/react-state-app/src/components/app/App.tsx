import { Component } from 'react';
import Counter from '../counter/Counter';
import './App.css';

type AppPropType = {
  x: number,
  y: string
}
type AppStateType = {
  data: number,
  text: string
}
// type AppStateType2 = {
//   city: string,
//   state: string
// }
// class App extends Component<AppPropType, AppStateType1 | AppStateType2> {
class App extends Component<AppPropType, AppStateType> {

  constructor(props: AppPropType) {
    super(props)
    this.state = {
      data: 0,
      text: ''
    }
    console.log('App created')
  }

  incresaeHandler = () => {
    //++this.state.data;
    // this.setState({
    //   data: 1
    // })
    this.setState(
      (copyOfCurrentState) => {
        return {
          data: copyOfCurrentState.data + 1
        }
      },
      () => console.log(this.state.data)
    )
  }

  render() {
    console.log('App rendered')
    return (
      <div className="App">
        <Counter value={this.state.data} increaseValue={this.incresaeHandler} />
      </div>
    );
  }
}

/*
function App() {

  let data = 0
  const incresaeHandler = () => {
    ++data
    console.log(data)
  }

  return (
    <div className="App">
      <Counter value={data} increaseValue={incresaeHandler} />
    </div>
  );
}
*/


export default App;
