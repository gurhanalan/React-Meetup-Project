import { Route, Switch } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";

function App() {
    return (
        <div>
            <MainNavigation />
            <Switch>
                <Route path="/favorites" component={Favorites} />
                <Route path="/new-meetup" component={NewMeetup} />
                <Route path="/" component={AllMeetups} />
            </Switch>
        </div>
    );
}

export default App;
