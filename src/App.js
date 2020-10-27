import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react' ;
import { within } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

const Form = props =>{
  const [Answer,setAnswer] = useState([]);
  const [Type,setType] =useState(1);
  const[Stop,setStop] = useState(0)
  console.log(Answer.map(a => a.value))
  return (
    <div className = "QuestionContainer">
      <div className="form">
        <input type = "text" placeholder="Form name" style ={{height:"6vh",fontSize:"4vh",width:"80%"}}  />
        <input type = "text" placeholder="Form description" style ={{height:"3vh",fontSize:"2vh",width:"80%"}}  />       
      </div>
      <div className="QA" style={{height:`calc(20vh + ${Answer.length*3}vh)`}}>
        <div className ="Que">
          <input type = "text" placeholder="Question" style ={{height:"3vh",fontSize:"2vh",width:"80%"}}/>
          <select  id="type" style = {{justifySelf: "flex-end"}} onClick ={(event) => {
            setAnswer([])
            setStop(0)
            setType(event.target.value)}}>
            <option value="1" >Short Amswer</option>
            <option value="2" >Multiple Choice</option>
            <option value="3" > checkbox</option>
          </select>
        </div>
        <div className = "Ans">
          {Type == 1?
            <input type = "text" placeholder="Answer" style ={{height:"2.5vh",fontSize:"1.75vh",width : "65%"}}/>
            :<div></div>
          }
          {Type == 2?
            <div>
            {Answer.map(
              an => {
                return <div className ="Aline">
                  <input  type ="radio"  name ="ans" className="ans" style ={{height:"2.5vh",fontSize:"1.75vh"}} />
                  <input  type ="text" placeholder={an.value} name ="text" style ={{height:"2.5vh",fontSize:"1.75vh"}} />
                  </div>
              })}
              {Answer.length <5 && Stop ===0?
              <div className ="Aline">
                  <input type ="radio"  name ="ans" style ={{height:"2.5vh",fontSize:"1.75vh"}}/>
                  <input type ="text" class="inp" placeholder="Add option" style ={{height:"2.5vh",fontSize:"1.75vh"}} 
                  onClick= {() =>{ setAnswer([...document.getElementsByName('text'),' ']) }}
                  />
                  <input type = "text" type ="text"  placeholder="Add others" style ={{height:"2.5vh",fontSize:"1.75vh",border:"none"}} 
                  onClick= {() =>{ setAnswer([...document.getElementsByName('text'),{'value':'others'}])
                  setStop(1) }}
                  />
                  </div>
                :<></>}
            </div>
              :<div></div>
          } 
          {Type == 3?
            <div>
            {Answer.map(
              an => {
                return <div className ="Aline">
                  <input  type ="checkbox"  name ="ans" className="ans" style ={{height:"2.5vh",fontSize:"1.75vh"}} />
                  <input  type ="text" placeholder={an.value} name ="text" style ={{height:"2.5vh",fontSize:"1.75vh"}} />
                  </div>
              })}
              {Answer.length <5 && Stop ===0?
              <div className ="Aline">
                  <input type ="checkbox"  name ="ans" style ={{height:"2.5vh",fontSize:"1.75vh"}}/>
                  <input type ="text" class="inp" placeholder="Add option" style ={{height:"2.5vh",fontSize:"1.75vh"}} 
                  onClick= {() =>{ setAnswer([...document.getElementsByName('text'),' ']) }}
                  />
                  <input type ="text"  placeholder="Add others" style ={{height:"2.5vh",fontSize:"1.75vh",border:"none"}} 
                  onClick= {() =>{ setAnswer([...document.getElementsByName('text'),{'value':'others'}])
                  setStop(1) }}
                  />
                  </div>
                :<></>}
            </div>
              :<div></div>
          } 
        </div>       
      </div>
    </div>
  )
} 


export default App;
