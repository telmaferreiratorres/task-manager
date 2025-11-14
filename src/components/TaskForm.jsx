import { useState, useEffect } from 'react'

function TaskForm({ onAddTask, editingTask }) {
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('Travail')

  useEffect(() => {
    if (editingTask) {
      setDescription(editingTask.description)
      setCategory(editingTask.category)
    } else {
      setDescription('')
      setCategory('Travail')
    }
  }, [editingTask])

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (description.trim() === '') {
      return
    }
    
    onAddTask({ description, category })
    
    setDescription('')
    setCategory('Travail')
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="space-y-4">
        
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Description de la tâche
          </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Ex: Finir le TP Tailwind"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
            Catégorie
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="Travail">Travail</option>
            <option value="Personnel">Personnel</option>
            <option value="Urgent">Urgent</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 active:scale-95"        >
          {editingTask ? 'Modifier la tâche' : 'Ajouter la tâche'}
        </button>
        
      </div>
    </form>
  )
}

export default TaskForm