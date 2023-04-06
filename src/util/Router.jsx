import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/core/Home'
import Shop from '../components/core/Shop'


function Router() {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path="/shop" component={Shop} />
        </Switch>
    );
}

export default Router;
