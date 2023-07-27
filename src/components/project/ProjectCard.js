import classes from "../../style/project/ProjectCard.module.css";
import {SwiperSlide} from "swiper/react";

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
                        <div className={classes.fff}>
                            <span>#Members :</span>
                            <span>{props.tech}</span>
                        </div>
                        <div className={classes.ggg}>
                            <span>#My Work :</span>
                            <span>
                                {props.works.map(work =>
                                    <div className={classes.hhh} key={work.id}>▶ {work.content}</div>)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default ProjectCard;
