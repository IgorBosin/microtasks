import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

type todolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

function App() {
    let todolistID1 = v1();
    let todolistID2 = v1();
    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])
    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });

    function removeTask(todolistId: string,id: string) {
        setTasks({...tasks, [todolistId]:tasks[todolistId].filter(el=> el.id !== id)});
    }
    function addTask(todolistId: string,title: string) {
        let task = {id: v1(), title: title, isDone: false};
        setTasks({...tasks, [todolistId]:[task, ...tasks[todolistId]]});
    }
    function changeStatus(todolistId: string,taskId: string, isDone: boolean) {
        setTasks({...tasks, [todolistId]:tasks[todolistId].map(el=> el.id === taskId? {...el, isDone: isDone} :el)});
    }

    // let tasksForTodolist = tasks;
    // if (filter === "active") {
    //     tasksForTodolist = tasks.filter(t => t.isDone === false);
    // }
    // if (filter === "completed") {
    //     tasksForTodolist = tasks.filter(t => t.isDone === true);
    // }

    function changeFilter(todolistId: string, value: FilterValuesType) {
        setTodolists(todolists.map(el => el.id === todolistId ? {...el, filter: value} : el))
    }

    return (
        <div className="App">
            {todolists.map(el => {
                let tasksForTodolist = tasks[el.id];
                if (el.filter === "active") {
                    tasksForTodolist = tasks[el.id].filter(t => t.isDone === false);
                }
                if (el.filter === "completed") {
                    tasksForTodolist = tasks[el.id].filter(t => t.isDone === true);
                }
                return (
                    <Todolist
                        key={el.id}
                        title={el.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={el.filter}
                        todoListId={el.id}
                    />
                )
            })}

        </div>
    );
}

export default App;

// import React, {useState} from 'react';
// import './App.css';
// import {TaskType, Todolist} from './Todolist';
// import {v1} from 'uuid';
//
// export type FilterValuesType = "all" | "active" | "completed";
//
// type todolistsType = {
//     id: string
//     title: string
//     filter: FilterValuesType
// }
//
// function App() {
//
//     // let [tasks, setTasks] = useState([
//     //     {id: v1(), title: "HTML&CSS", isDone: true},
//     //     {id: v1(), title: "JS", isDone: true},
//     //     {id: v1(), title: "ReactJS", isDone: false},
//     //     {id: v1(), title: "Rest API", isDone: false},
//     //     {id: v1(), title: "GraphQL", isDone: false},
//     // ]);
//     // let [filter, setFilter] = useState<FilterValuesType>("all");
//
//     let todolistID1 = v1();
//     let todolistID2 = v1();
//
//     let [todolists, setTodolists] = useState<Array<todolistsType>>([
//         {id: todolistID1, title: 'What to learn', filter: 'all'},
//         {id: todolistID2, title: 'What to buy', filter: 'all'},
//     ])
//
//     let [tasks, setTasks] = useState({
//         [todolistID1]: [
//             {id: v1(), title: "HTML&CSS", isDone: true},
//             {id: v1(), title: "JS", isDone: true},
//             {id: v1(), title: "ReactJS", isDone: false},
//             {id: v1(), title: "Rest API", isDone: false},
//             {id: v1(), title: "GraphQL", isDone: false},
//         ],
//         [todolistID2]: [
//             {id: v1(), title: "HTML&CSS2", isDone: true},
//             {id: v1(), title: "JS2", isDone: true},
//             {id: v1(), title: "ReactJS2", isDone: false},
//             {id: v1(), title: "Rest API2", isDone: false},
//             {id: v1(), title: "GraphQL2", isDone: false},
//         ]
//     });
//
//
//     function removeTask(todoListId: string, id: string) {
//         setTasks({...tasks, [todoListId]: tasks[todoListId].filter(el => el.id !== id)})
//     }
//
//     function addTask(todoListId: string, title: string) {
//         let task = {id: v1(), title: title, isDone: false};
//         setTasks({...tasks, [todoListId]: [task, ...tasks[todoListId]]});
//     }
//
//     function changeStatus(todoListId: string, taskId: string, isDone: boolean) {
//         setTasks({
//             ...tasks,
//             [todoListId]: tasks[todoListId].map(el => el.id === taskId ? {...el, isDone: isDone} : el)
//         });
//     }
//
//     function changeFilter(todoListId: string, value: FilterValuesType) {
//         setTodolists(todolists.map(el => el.id === todoListId ? {...el, filter: value} : el));
//     }
//
//     const filtredTasksForTodolist = (todoListId: string, filter: FilterValuesType) => {
//         let tasksForTodolist = tasks[todoListId];
//         if (filter === "active") {
//             return tasksForTodolist = tasks[todoListId].filter(t => !t.isDone);
//         }
//         if (filter === "completed") {
//             return tasksForTodolist = tasks[todoListId].filter(t => t.isDone);
//         } else return tasksForTodolist
//     }
//
//
//     const todoListState = todolists.map(el => {
//         const filtredTasks = filtredTasksForTodolist(el.id, el.filter)
//         return (
//             <Todolist
//                 key={el.id}
//                 title={el.title}
//                 todoListId={el.id}
//                 tasks={filtredTasks}
//                 removeTask={removeTask}
//                 changeFilter={changeFilter}
//                 addTask={addTask}
//                 changeTaskStatus={changeStatus}
//                 filter={el.filter}
//             />
//         )
//     })
//
//     return (
//         <div className="App">
//             {todoListState}
//         </div>
//     );
// }
//
// export default App;