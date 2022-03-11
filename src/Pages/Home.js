import React, {useState} from "react";
import Navbar from "../Components/Navbar/Navbar.component";
import ShowXY from "./ShowXY";
import Footer from "../Components/Footer/Footer.component";

function initialState(){
  console.log("Expensive process" + Date.now());
  return 0;
}

function initialName(){
  return { name: 'Javascript', surname: 'Programming Language' };
}

const Home = ()=>{
  const [i, set_i] = useState( () => initialState());

  const [obj, setObj] = useState( () => initialName() );

  const [flag, setFlag] = useState(true);

  const [showData, changeState]= useState(true);

  let pLName = 'Javascript';

  const handleNameChange = (event) => {
    pLName = event.target.value
  }

  const changeProgrammingLanguageName = () => {
    setObj({name:pLName, surname:obj.surname})
  }

  const changeCounter = (op) => {
    if(op === '+'){
      set_i(i+1)
    }
    else if( op === '-' && i > 0) {
      set_i(i-1);
    }
  }
  const btnStyle = {
    width: "120px",
    height: "100px",
    color: "blueviolet",
    fontSize: "25px",
    borderRadius: "5px",
    boxShadow: "5px 5px #010b3e",
    marginRight: "10px",
    backgroundImage: "linear-gradient(#0aabec, #0fabae)"
  }


  return (
    <>
      <header>
        <Navbar />
        <h1>{i}</h1>
        <button className="CB" onClick={()=>changeCounter('+')}>INCR</button>
        <button style={btnStyle} onClick={()=>changeCounter('-')}>DECR</button>

        { flag ? <h1>{flag.toString()}</h1> : <h1>Hidden</h1> }
        <button onClick={()=>setFlag(!flag)}>Change Flag</button>

        <input type="text" name="Name" onChange={ handleNameChange }/>
        <button onClick={()=> changeProgrammingLanguageName() }>Set Name</button>
        <h2>{obj.name + ' ' + obj.surname}</h2>

        { showData ? <ShowXY /> :<h1>No Data to display</h1> }
        <button onClick={() => changeState(!showData)}>Toggle</button>
      </header>
      <Footer>
        <h1> Tradester | Copyright@2022</h1>
        <h2> All rights reserved </h2>
      </Footer>
    </>
  )
}

export default Home;