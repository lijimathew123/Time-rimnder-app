import { useState } from "react";
  

function App() {
  const [tasks,setTasks] = useState([]);
  const [task,setTask] = useState("");
 const currentDate =  new Date();
 const month = currentDate.getMonth() + 1;
 const date = currentDate.getDate();
 const year = currentDate.getFullYear();
  
  
  const addTask = () =>{
    if(task!== ""){
      setTasks([...tasks,task])
      // console.log(tasks);
    }
  }

  const deleteTask = (index)=> {
    const updatedList = [...tasks];

    // delete updatedList[index];
    updatedList.splice(index,1);
    setTasks(updatedList)
  }
  return (
    <div className=" flex flex-col items-center">
      <div>
       <h1 className="text-4xl m-16 font-bold" >Simple TODO App</h1>
       <h2 className="text-2xl pl-20 ">Today is {`${date}-${month}-${year}`}</h2>
       </div>
       <div className="p-6">
        <input className="bg-slate-100 rounded-md p-4 m-4"
        type="text" 
        value={task}
        onChange={(e) =>{
          setTask(e.target.value);
        }}
         placeholder="Create new todo"/>
        <button onClick={addTask}
         className="bg-green-500 text-white p-3 m-3 rounded-md font-bold hover:bg-green-600">Add Task</button>
       </div>
       <div>
        { tasks?.length > 0 ?(
              <ul>
                {
                  tasks.map((task,index)=>(
                   <div className="flex bg-slate-200 m-4 py-4 pl-10 pr-4 rounded-md" key={index}>
                    <li className="self-center font-semibold pr-10 mr-6 grow">{task}</li>
                    <button onClick={ ()=> {deleteTask(index)}}
                     className="bg-red-500 text-white p-2 mx-1 rounded-md font-bold hover:bg-red-600">Delete</button>
                   </div>
                  ))
                }
              </ul>
        ):(
          <div>
            <p>No Task Found</p>
          </div>
        )}
       </div>
    </div>
  );
}

export default App;
