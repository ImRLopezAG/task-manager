import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface TaskMNG {
  id: string
  task: TaskType
}

interface State {
  tasks: TaskType[]
}

interface Actions {
  addTask: ({ task }: Omit<TaskMNG, 'id'>) => void
  updateTask: ({ id, task }: TaskMNG) => void
  getTask: ({ id }: Omit<TaskMNG, 'task'>) => TaskType | undefined
  deleteTask: ({ id }: Omit<TaskMNG, 'task'>) => void
}

export const useTaskStore = create(
  persist<State & Actions>(
    (set, get) => ({
      tasks: [],
      addTask ({ task }) {
        task.id = crypto.randomUUID()
        task.createdAt = new Date().toISOString()
        set(state => ({
          ...state,
          tasks: [...state.tasks, task].filter(tsk => tsk.title.length >= 4)
        }))
      },
      updateTask ({ id, task }) {
        console.log(id, task)
        set(state => ({
          ...state,
          tasks: [...state.tasks].map(tsk => {
            if (tsk.id === id) {
              tsk = task
            }
            return tsk
          })
        }))
      },
      getTask ({ id }) {
        return get().tasks.find(tsk => tsk.id === id)
      },
      deleteTask ({ id }) {
        set(state => ({
          ...state,
          tasks: [...state.tasks].filter(tsk => tsk.id !== id)
        }))
      }
    }),
    {
      name: 'tasks'
    }
  )
)
