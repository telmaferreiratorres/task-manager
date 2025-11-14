import { useState, useEffect } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  })
  
  const [editingTask, setEditingTask] = useState(null)
  const [filter, setFilter] = useState('Tout')

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (task) => {
    if (editingTask) {
      updateTask(editingTask.id, task)
      setEditingTask(null)
    } else {
      const newTask = {
        id: Date.now(),
        ...task
      }
      setTasks([...tasks, newTask])
    }
    setFilter('Tout')
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

  const clearAllTasks = () => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer TOUTES les tâches ? Cette action est irréversible.')) {
      setTasks([])
      setFilter('Tout')
    }
  }
  const filteredTasks = filter === 'Tout' 
    ? tasks 
    : tasks.filter(task => task.category === filter)

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-purple-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          📝 To-Do List
        </h1>
        
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <h2 className="text-sm font-semibold text-gray-700 mb-3">Filtrer par catégorie :</h2>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setFilter('Tout')}
              className={`px-4 py-2 rounded-lg font-medium transition duration-200 active:scale-95 ${
                filter === 'Tout' 
                  ? 'bg-gray-800 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Tout
            </button>
            <button
              onClick={() => setFilter('Travail')}
              className={`px-4 py-2 rounded-lg font-medium transition duration-200 ${
                filter === 'Travail' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
              }`}
            >
              Travail
            </button>
            <button
              onClick={() => setFilter('Personnel')}
              className={`px-4 py-2 rounded-lg font-medium transition duration-200 ${
                filter === 'Personnel' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-green-100 text-green-700 hover:bg-green-200'
              }`}
            >
              Personnel
            </button>
            <button
              onClick={() => setFilter('Urgent')}
              className={`px-4 py-2 rounded-lg font-medium transition duration-200 ${
                filter === 'Urgent' 
                  ? 'bg-red-600 text-white' 
                  : 'bg-red-100 text-red-700 hover:bg-red-200'
              }`}
            >
              Urgent
            </button>

            {tasks.length > 0 && (
            <button
              onClick={clearAllTasks}
              className="mt-4 w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition duration-200 active:scale-95"
            >
              🗑️ Tout supprimer ({tasks.length} tâche{tasks.length > 1 ? 's' : ''})
            </button>
          )}
          </div>
        </div>
        
        <TaskForm 
          onAddTask={addTask}
          editingTask={editingTask}
        />
        
        <TaskList 
          tasks={filteredTasks}
          onDeleteTask={deleteTask}
          onUpdateTask={updateTask}
          onEditTask={handleEdit}
        />
      </div>
    </div>
  )
}

export default App