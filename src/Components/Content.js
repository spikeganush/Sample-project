import { Home } from './Home'
import { About } from './About'
import { Third } from './Third'
import { Switch, Route } from "react-router-dom";

export function Content(props) {
    return (
        <div className="container">
            
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/third">
                        <Third />
                    </Route>
                </Switch>
            
        </div>

    )
}