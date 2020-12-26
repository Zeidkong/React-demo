import React,{Component} from 'react'
import welcome from './Welcome.module.css'
export default class Welcome extends Component{
    render() {
        return <h1 className={welcome.title}>这是Welcome组件</h1>
    }
}