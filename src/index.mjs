/*Para iniciar hay que darle a F5*/ 

import express from "express";
const app = express();
const PORT = 3000;

const tareas = [

    {
        id: 0,
        description: "Comprar manzanas",
        done: false
    },
    {
        id: 1,
        description: "Comprar peras",
        done: false
    },
    {
        id: 2,
        description: "Comprar kiwis",
        done: false
    }
]

app.use(express.json());

/*Este get es el único que se obtiene a través de la URL: http://localhost:3000/api/tareas/
    El resto va por insomnia
*/
app.get("/api/tareas/",(request, response)=>{
    response.json(tareas);
})

/*
Post para crear tarea. Se hace desde INSOMNIA con POST, aplicando por ejemplo un JSON:
{
	"id": 5,
  "description": "Comprar vino",
  "done": false
}

*/
app.post("/api/tareas/",(request, response)=>{
    tareas.push(request.body);
    response.sendStatus(201);
})

app.put("/api/tareas/",(request, response)=>{
    const updatedTask = request.body;
    const oldTaskIdx = tareas.findIndex(
        item => item.id === updatedTask.id
    )
    tareas[oldTaskIdx] = updatedTask;
    response.sendStatus(200);
})

app.delete("api/tareas/",(request, response)=>{
    const updatedTask = request.body;
    const oldTaskIdx = tareas.findIndex(
        item => item.id === updatedTask.id
    )
    tareas.splice(oldTaskIdx,1);
    response.sendStatus(200)
})

app.listen(PORT,()=>{
    console.log("Express running...");
})