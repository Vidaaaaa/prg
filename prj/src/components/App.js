import React from "react"
import { NavLink, Switch, Route } from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import Domain from "./Domain"

import "./../styles.css"

function App() {

    return (
        <div className="wrapper">
            <div className="header">
                
            </div>
            
            <div className="navbar">
                <NavLink activeClassName="active" to="/tel">تماس با ما</NavLink>
                <NavLink activeClassName="active" to="/about">درباه ما</NavLink>
                <NavLink activeClassName="active" to="/domain">ثبت دامنه</NavLink>
                <NavLink activeClassName="active" to="/login">ورود/ثبت نام</NavLink>
                <NavLink exact activeClassName="active" to="/">خانه</NavLink>
            </div>

            <div className="main">
                <Switch>
                    <Route path="/tel" component={Login} />
                    <Route path="/about" component={Login} />
                    <Route path="/domain" component={Domain} />
                    <Route path="/login" component={Login} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </div>


            <div className="footer">
                <h1>Copy right @ 2020</h1>
                <p>All rights reseved...</p>
            </div>
        </div>
    )
}

export default App