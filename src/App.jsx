import React from "react";
import ReactDOM from "react-dom";

const tasks = [
    {
        id: "xjh",
        message: "Успешно пройти React-интенсив компании Lectrum",
        important: true
    },
    {
        id: "xjr",
        message: "Взять автограф у Джареда Лето",
        important: true
    },
    {
        id: "xrh",
        message: "Зарегестрировать бабушку в Твиче",
        important: false
    },
    {
        id: "rjh",
        message: "Записать собаку на груминг",
        important: false
    },
    {
        id: "xph",
        message: "Научиться играть на барабанах",
        important: true
    }
];

const TaskList = {
    render () {
        const importantTasks = tasks.filter(task => task.important);
        
        const listOfTasks = importantTasks.map(
            task => <li key = { task.id }>{ task.message }</li>
        );
            
        return <ul>{ listOfTasks }</ul>;
    }
};


ReactDOM.render(<TaskList />, document.getElementById('app'));