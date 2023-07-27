import classes from "./style/App.module.css";

import Header from "./components/Header";
import Introduce from "./components/Introduce";
import MyCard from "./components/MyCard";
import Skill from "./components/skill/Main"
import Project from "./components/project/Main";
import Career from "./components/Career";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <div className={classes.main}>
            <Header/>
            <div className={classes.aaa}>
                <Introduce/>
                <MyCard/>

                <hr className={classes.bbb}/>

                <Skill />

                <hr className={classes.bbb}/>

                <Project />

                <hr className={classes.bbb}/>

                <Career />

                <hr className={classes.bbb}/>

                <Contact />
            </div>
            <Footer/>
        </div>
    );
}

export default App;
