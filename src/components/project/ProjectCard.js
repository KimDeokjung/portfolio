import classes from "../../style/project/ProjectCard.module.css";

function ProjectCard(props) {
    return (
        <div>
            <div className={classes.content}>

                <div className={classes.img_box_area}>
                    <img className={props.name === "IMS" ? classes.mobile_img_area : classes.img_area} src={props.img}/>
                </div>
                <hr/>

                <div className={classes.detail_area}>
                    <span className={classes.title}>{props.name}</span>
                    <div className={classes.detail}>
                        <div className={classes.detail_text}>
                            <span>Period : </span>
                            <span>{props.period}</span>
                        </div>
                        <div className={classes.detail_text}>
                            <span>Tech :</span>
                            <span>{props.tech}</span>
                        </div>
                        <div className={classes.detail_text}>
                            <span>Members :</span>
                            <span>{props.member}</span>
                        </div>
                        <div className={classes.my_work}>
                            <span>My Work :</span>
                            <span>
                                {props.works.map(work =>
                                    <div className={classes.margin_top_8} key={work.id}>- {work.content}</div>)}
                            </span>
                            <div className={classes.btn_area} onClick={props.modalHandler.bind(this, props.index)}>
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
