import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";

import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/favorites" component={Favorites} />
                <Route path="/new-meetup" component={NewMeetup} />
                <Route path="/" component={AllMeetups} />
            </Switch>
        </Layout>
    );
}

export default App;
