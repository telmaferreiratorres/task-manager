import { useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState([])
  const [editingTask, setEditingTask] = useState(null)

  const addTask = (task) => {
    if (editingTask) {
      // Mode modification
      updateTask(editingTask.id, task)
      setEditingTask(null)
    } else {
      // Mode ajout
      const newTask = {
        id: Date.now(),
        ...task
      }
      setTasks([...tasks, newTask])
    }
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, ...updatedTask } : task
    ))
  }

  const handleEdit = (task) => {
    setEditingTask(task)
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-purple-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          📝 To-Do List
        </h1>
        
        <TaskForm 
          onAddTask={addTask}
          editingTask={editingTask}
        />
        
        <TaskList 
          tasks={tasks}
          onDeleteTask={deleteTask}
          onUpdateTask={updateTask}
          onEditTask={handleEdit}
        />
      </div>
    </div>
  )
}

export default App