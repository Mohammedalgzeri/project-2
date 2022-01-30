import React, { Component } from 'react';
import TodoItems from './components/TodoItems/TodoItems'
import AddItem from './components/AddItem/AddItem'
import './index.css'
import { useState, useEffect } from "react";

const App = () => {
  
  let [state, setState] = useState({items:[],inputValue:""});
//use useEffect to call fetch
    //use fetch function to call api
    //console the result of the api
  useEffect(() => {
    let response = fetch(
      "https://61eeb257d593d20017dbb06c.mockapi.io/abi/students",
      {
          method: "GET",
      }
    );
    response
    .then((res) => {
        return res.json();
})
    .then((students) => {
        console.log(students);
        setState((prevState) => {
          return{
            ...prevState,
            items: students
          }
        })

    })
    .catch((err) => {
        console.log(err, "err");
    });
  }, []);
  
  const addItem = (newStudent) => {
    const result = fetch(
        "https://61eeb257d593d20017dbb06c.mockapi.io/abi/students",
        {
            method: "POST",
            headers: {
                Accept: "application/json",
                "concent-type": "application/json",
            },
            body: JSON.stringify({
                name: 'newStudent.name',
                age: 'newStudent.age',
                id: 5776554445
            }),
        }
    ).then((res) =>{
      return res.json();
  })
  .then((students) => {
      console.log(students, 'jjlkjlk');
      setState((prevState) => {
          return {
            
              items: [...prevState.items,students]
          };
      });
  })
  .catch((err) =>{
      console.log(err);
  });
};

  const deleteItem = (id) => {
    let items = state.items.filter(item => {
      return item.id !== id
    })
    setState((prevState) => {
     return{
      ...prevState,
      items
     }           
    })
  }

  
  

  return(
    <div className="App container">
       <h1 className="text-center">Class</h1>
       <TodoItems items={state.items} deleteItem={deleteItem} />
       <AddItem addItem={addItem} />
    </div>
  );
}
export default App;
