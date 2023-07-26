import classes from "./style/App.module.css";

import Header from "./components/Header";
import Introduce from "./components/Introduce";
import MyCard from "./components/MyCard";

function App() {
    return (
        <div className={classes.main}>
            <Header/>
            <div className={classes.aaa}>
                <Introduce/>
                <MyCard/>

                <hr className={classes.bbb}/>
            </div>
        </div>
    );
}

export default App;
