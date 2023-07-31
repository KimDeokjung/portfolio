import classes from "../../style/project/ProjectCard.module.css";

function ProjectCard(props) {
    return (
        <div>
            <div className={classes.aaa}>

                <div className={classes.qqq}>
                    <img className={props.name === "IMS" ? classes.zzz : classes.bbb} src={props.img}/>
                </div>
                <hr />

                <div className={classes.ccc}>
                    <span className={classes.ddd}>{props.name}</span>
                    <div className={classes.eee}>
                        <div className={classes.fff}>
                            <span>Period : </span>
                            <span>{props.period}</span>
                        </div>
                        <div className={classes.fff}>
                            <span>Tech :</span>
                            <span>{props.tech}</span>
                        </div>
                        <div className={classes.fff}>
                            <span>Members :</span>
                            <span>{props.member}</span>
                        </div>
                        <div className={classes.ggg}>
                            <span>My Work :</span>
                            <span>
                                {props.works.map(work =>
                                    <div className={classes.hhh} key={work.id}>- {work.content}</div>)}
                            </span>
                            <div className={classes.ppp} onClick={props.modalHandler.bind(this, props.index)}>
                                <span>View More</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
