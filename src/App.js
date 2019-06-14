import React, {Component} from 'react'
import {HashRouter,  Route, Switch} from 'react-router-dom'
import Login from './pages/login/login.jsx'
import Admin from './pages/admin/admin.jsx'

//引用跟组件

export default class App extends Component{
    render(){
        return(
            <HashRouter>
                <Switch>
                    {/*注册路由*/}
                    <Route path="/login" component={Login}></Route>
                    <Route path="/" component={Admin}></Route>
                </Switch>

            </HashRouter>
        )
    }
}