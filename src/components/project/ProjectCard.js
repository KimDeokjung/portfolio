import classes from "../../style/project/ProjectCard.module.css";

function ProjectCard(props) {
    const openModal = () => {
        alert("???")
    }

    return (
            <div className={classes.aaa} onClick={openModal.bind(this)}>

                <img className={classes.bbb} src={props.img}/>
                <hr />

                <div className={classes.ccc}>
                    <span className={classes.ddd}>{props.name}</span>
                    <div className={classes.eee}>
                        <div className={classes.fff}>
                            <span>#Period : </span>
                            <span>{props.period}</span>
                        </div>
                        <div className={classes.fff}>
                            <span>#Tech :</span>
                            <span>{props.tech}</span>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default ProjectCard;
