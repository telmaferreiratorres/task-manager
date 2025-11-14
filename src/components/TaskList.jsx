function TaskList({ tasks, onDeleteTask, onUpdateTask, onEditTask }) {
  
    if (tasks.length === 0) {
      return (
        <div className="text-center text-gray-500 py-8">
          Aucune tâche à afficher
        </div>
      )
    }
  
    return (
      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-start justify-between">
              
              <div className="flex-1">
                <p className="text-gray-800 font-medium">{task.description}</p>
                <span className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-semibold
                  ${task.category === 'Travail' ? 'bg-blue-100 text-blue-800' : ''}
                  ${task.category === 'Personnel' ? 'bg-green-100 text-green-800' : ''}
                  ${task.category === 'Urgent' ? 'bg-red-100 text-red-800' : ''}
                `}>
                  {task.category}
                </span>
              </div>
  
              <div className="flex gap-2 ml-4">
                <button
                  onClick={() => onEditTask(task)}
                  className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-sm transition duration-200"
                >
                  Modifier
                </button>
                <button
                  onClick={() => onDeleteTask(task.id)}
                  className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm transition duration-200"
                >
                  Supprimer
                </button>
              </div>
  
            </div>
          </div>
        ))}
      </div>
    )
  }
  
  export default TaskList