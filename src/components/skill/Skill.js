import {useState, useEffect} from "react";

import styled from 'styled-components';

import classes from "../../style/skill/Skill.module.css";

function Skill(props) {
    const [progress, setProgress] = useState(0)
    const [progressColor, setProgressColor] = useState("linear-gradient(80deg,#cacaff,#5d5dff);")
    const [dotColor, setDotColor] = useState("#ffc988")

    useEffect(() => {
        if (props.nowIndex === props.mappingIndex) {
            if (props.content.level === 3) {
                setProgress(100)
                setProgressColor("linear-gradient(80deg,#cacaff,#7878ff);")
                setDotColor("#7878ff")
            }else if(props.content.level === 2) {
                setProgress(60)
                setProgressColor("linear-gradient(80deg,#fee8b1,#ffc988);")
                setDotColor("#ffc988")
            }else {
                setProgress(40)
                setProgressColor("linear-gradient(80deg,#fab2b2,#ff5d5d);")
                setDotColor("#ff5d5d")
            }
        }else {
            setProgress(0)
        }
    }, [props.nowIndex])

    return (
        <div className={classes.content}>
            <div className={classes.title}>
                {props.content.name === "Spring" ? <div>Spring/<br/>SpringBoot</div> : props.content.name}
            </div>

            <Container>
                <Progress color={progressColor} width={progress + "%"}/>
                <Dot color={dotColor}>Lv.{props.content.level} </Dot>
            </Container>
        </div>
    );
}

export default Skill;

const Container = styled.div`
  margin: 26px auto;
  background-color: #eee;
  width: 80%;
  height: 20px;
  display: flex;
  align-items: center;
  border-radius: 20px;
`;

const Progress = styled.div`
  background-color: #faac8f;
  background: -webkit-linear-gradient(to right, #93F9B9, #1D976C);
  background: ${props => props.color};
  width: ${props => props.width};
  height: 100%;
  transition: cubic-bezier(0.14, 0.52, 0.49, 0.95) 2.5s;
  border-radius: 20px;
`;

const Dot = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  justify-content: center;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  border: 5px solid ${props => props.color};;
  border-radius: 35px;
  background: white;
  margin-left: -35px;
`
