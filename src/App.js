import React from 'react'
import Hello from './components/Hello/Hello'
import Welcome from './components/Welcome/Welcome'
const {Component}  = React
export default class App extends Component {
    render() {
        return <div>
            <div>欢迎来到React</div>
            <Hello/>
            <Welcome/>
        </div>
    }
}