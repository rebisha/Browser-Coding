import React from "react";
import { Route, Switch } from "react-router-dom"
import Clock from "./Components/Clock/Clock";
import PageTree from "./Components/PageTree/PageTree";

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={Clock} />
            <Route path="/pagetree" component={PageTree} />
        </Switch>
    )
}

export default App;