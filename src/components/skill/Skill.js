import {useState, useEffect} from "react";

import styled from 'styled-components';
import classes from "../../style/skill/Skill.module.css";

function Skill(props) {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        if (props.nowIndex === props.mappingIndex) {
            setProgress(props.content.level)
        }else {
            setProgress(0)
        }
    }, [props.nowIndex])

    return (
        <div className={classes.aaa}>
            <div className={classes.bbb}>
                {props.content.name}
            </div>

            <Container>
                <Progress width={progress + "%"}/>
                <Dot> {props.content.level} </Dot>
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
  background: linear-gradient(80deg,#fee8b1,#ffc988);
  width: ${props => props.width};
  height: 100%;
  transition: cubic-bezier(0.14, 0.52, 0.49, 0.95) 2.5s;
  border-radius: 20px;
`;

//프로그레스 바에 원 달아서 프로그레스 바가 차오를 때 같이 차오름
const Dot = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  justify-content: center;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  border: 5px solid #ffc988;
  border-radius: 35px;
  background: white;
  margin-left: -35px;
`
