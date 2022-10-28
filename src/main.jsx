import React, {useState} from "react";
import './index.css';
import Functional from './Function';
import Class from './Class';

const Main = () =>{
    const [funcState, setfuncState] = useState(true)
    const Box1 = () => {setfuncState((state)=> !state)};

    const [classState, setclassState] = useState(true)
    const Box2 = () => {setclassState((state)=> !state)};

    return(
        <>
        <div className="A1">
            <button className="b1" onClick={() => { Box1(); } }>To see styling in Functional component</button>
            <button className="b2" onClick={() => { Box2(); } }>To see styling in class component</button>
        </div>
        <div className="flex">
           {!funcState ? <Functional/> : null}
           {!classState ? <Class/> : null}
        </div>
        </>
    )

}
export default Main;