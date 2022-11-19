import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import { Button } from "./Button";
//import Product from './Product'
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Posts } from "./Posts";
const root = ReactDOM.createRoot(document.getElementById("root"));

/*--Componentes--*/

/*
function Greeting() {
  return (
    <div>
      <h1>Este é um componente</h1>
      <p>lorem 123</p>
    </div>
  );
}*/
/*
root.render(<div>
    {Greeting()}
    {Greeting()}
    {Greeting()}
    {Greeting()}
</div>);*/
/*
root.render(
  <div>
    <Greeting />
    <Greeting />
    <Greeting />
  </div>
);*/
/*Exercício*/
/*
function Componente(){
    const validacao = false
    if(validacao){
        return <div>
            <h1>Cabeçalho 1</h1>
            <p>Lorem ipsum 123</p>
        </div> 
    }else{
        return <div>
            <h1>Cabeçalho 2</h1>
            <p>Lorem ipsum 6543210</p>
        </div>
    }
     
}
function Corpo(){
    return <div>
        <h3>Corpo do Site</h3>
        <p>Olá, sistema web, bem-vindo ao mundo c:</p>
    </div>
}
root.render(
    <div>
        <Componente/>
        <Corpo/>
        <Corpo/>
        {Corpo()}
    </div>
)*/

/*JSX*/

/*root.render(
  <>
    <Greeting />
    <UserCard />
    <Product/>
  </>
);*/

/*---REACT PROPS---*/

/*
root.render(
  <>
    <Greeting title="Olá, mundo" name="Joe"/>
    <Greeting title="Olá, react" name="Ryan"/>
    <Greeting title="Olá, jsx"/>
    <Greeting title="Olá, Javascript"/>
    <Greeting title="Olá, Classe"/>
  </>
)*/

/*root.render(
  <>
    <UserCard
      name="Ryan Ray"
      amount={3000}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{ street: "123 Main Street", city: "New York" }}
      gree={function () {
        alert("Hello");
      }}
    />
    <UserCard
      name="Joe Mcmillan"
      amount={1000}
      married={false}
      points={[100,20]}
      address={{
        street:'av some 123',
        city: 'New York'
      }}
    />
  </>
);*/
/*root.render(
  <>
    <Button text = "Click me"/>
    <Button text = "Pay"/>
    <Button text = "Go out" name="Joe"/>
  </>
)*/
/*----Handlebar Event-----*/
/*
const handleChange = (e) => {
  console.log(e.target.value);
};
root.render(
  <>
    <TaskCard ready={false} />
    <Saludar />
    <Button text="Saludar" />
    <input onChange={handleChange}></input>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(`Enviando dados do formulário`);
      }}
    >
      <h1>Registro</h1>
      <button>Enviar</button>
    </form>
  </>
);
*/

/*-----Fetch API-----*/
/*root.render(
  <>
    <Posts />
  </>
)*/
/*-----Arrays-----*/
/*const users = [
  {
    id: 1,
    name: "Ryan ray",
    image: "https://robohash.org/set=set",
  },
  {
    id: 2,
    name: "Joe",
    image: "https://robohash.org/set=set2",
  },
];*/
/*
root.render(
  <>
    {users.map((user,index)=>{
      return <h1 key={index}>
        {user.name}
      </h1>
    })}
  </>
)*/
/*
root.render(
  <>
    {users.map((user, i) => {
      return (
        <div key={i}>
          <h1>{user.name}</h1>
          <img src={user.image} />
        </div>
      );
    })}
  </>
);
*/

/*-----HOOKS-----*/

/*function Counter() {
  const [counter, setCounter] = useState(10);
  //let counter = 10;
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Sumar
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Restar
      </button>
      <button onClick={()=>{
        setCounter(0)
      }}>
        Reiniciar
      </button>
    </div>
  );
}
root.render(
  <>
    <Counter />
  </>
);
*/

/*

function Counter() {
  const [mensagem, setMensagem] = useState();
  return (
    <div>
      <input onChange={(e) => setMensagem(e.target.value)} />
      <button
        onClick={() => {
          alert(`Mensagem é: ${mensagem}`);
        }}
      >
        Save
      </button>
    </div>
  );
}
root.render(
  <>
    <Counter />
  </>
);

*/
/*-----useEffect-----*/
/*
function Counter() {
  const [mensagem, setMensagem] = useState();
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("render");
  }, [counter]);
  return (
    <div>
      <input onChange={(e) => setMensagem(e.target.value)} />
      <button
        onClick={() => {
          alert(`Mensagem é: ${mensagem}`);
        }}
      >
        Save
      </button>
      <hr></hr>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
    </div>
  );
}
root.render(
  <>
    <Counter />
  </>
);*/
