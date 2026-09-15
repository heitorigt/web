// Base de Dados
let tasks = [
 { id: 1, title: 'Estudar WEB', completed: 0},
 { id: 2, title: 'Revisar PBC', completed: 1},
 { id: 3, title: 'Estudar BD', completed: 0},
 { id: 4, title: "ver o jogo do corinthianms vs flamengo", completed: 1},
];

 // Funções para manipular as tarefas

 const getAllTasks = () => tasks;

 const getTaskId = (id) => tasks.find(task => task.id === id);

 const getCompleted = () => {
    return tasks.filter(item => item.completed === 1)
 };

 const createTask = (taskData) => {
    const newTask = {
    id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
    title: taskData.title,
    completed: parseInt(taskData.completed) || 0
    };
    tasks.push(newTask);
    return newTask;
 };

 module.exports = {
    getAllTasks ,
    getTaskId ,
    getCompleted ,
    createTask
 }