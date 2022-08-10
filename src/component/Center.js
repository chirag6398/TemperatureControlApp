import "../styles/center.css"
import { useState } from "react";
const Center=()=>{
    const [temp,setTemp]=useState(10);
    const [color,setColor]=useState("cornflowerblue");
    const controlHandler=(ch)=>{
            if(ch==='-'){
                setTemp(temp-1);
                if(color!=="cornflowerblue" && temp<16){
                    setColor("cornflowerblue")
                }
            }else{
                setTemp(temp+1);
                if(color!=="#f57051" && temp>=14){
                    setColor("#f57051");
                }
            }

            
    }
    return<>
    <div className="center">
        <div className="circle" style={{backgroundColor:`${color}`}}>
            <h1 style={{height:"fit-content",fontSize:"xxx-large",color:"black"}}>{temp}'C</h1>
        </div>
        <div className="controller">
            <div className="handler">
                <span onClick={()=>{controlHandler('-')}} >-</span>
            </div>
            <div className="handler"><span onClick={()=>{controlHandler('+')}}>+</span></div>
        </div>
    </div>
    </>
}

export default Center;