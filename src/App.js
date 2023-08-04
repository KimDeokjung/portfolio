import Header from "./components/Header";
import Introduce from "./components/Introduce";
import MyCard from "./components/MyCard";
import Skill from "./components/skill/Main"
import Project from "./components/project/Main";
import Career from "./components/Career";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import classes from "./style/App.module.css";

function App() {
    return (
        <div>
            <Header/>
            <div className={classes.content}>
                <Introduce/>
                <MyCard/>
                <hr className={classes.line}/>
                <Skill />
                <hr className={classes.line}/>
                <Project />
                <hr className={classes.line}/>
                <Career />
                <hr className={classes.line}/>
                <Contact />
            </div>
            <Footer/>
        </div>
    );
}

export default App;
