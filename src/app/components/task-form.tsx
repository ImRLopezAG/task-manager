import { useTaskStore } from '@app/context'
import { Pencil2Icon, PlusCircledIcon } from '@radix-ui/react-icons'
import {
  LabelSchema,
  PrioritySchema,
  StatusSchema,
  TaskTypeSchema
} from '@type/schema'
import { Button } from '@ui/button'
import * as DL from '@ui/dialog'
import { Input } from '@ui/input'
import { Label } from '@ui/label'
import * as SL from '@ui/select'
import { Textarea } from '@ui/textarea'
import { useEffect, useState } from 'react'
import type { z } from 'zod'

interface TaskFormProps {
  id?: string
}

interface ErrorType {
  message: string
  hasError: boolean
  field?: z.infer<typeof TaskTypeSchema> | string
}

const initialValues: TaskType = {
  id: '',
  title: '',
  label: 'documentation',
  status: 'todo',
  priority: 'low',
  description: '',
  case: '',
  company: ''
}

export const TaskForm: React.FC<TaskFormProps> = ({ id }) => {
  const { getTask, addTask, updateTask } = useTaskStore()
  const loadTask = (): TaskType => {
    if (!id || id === '') return initialValues
    const storedTask = getTask({ id })
    if (!storedTask) return initialValues
    return storedTask
  }
  const [task, setTask] = useState<TaskType>(initialValues)
  const [open, setOpen] = useState(false)
  const [error, setError] = useState<ErrorType>({
    message: '',
    hasError: false
  })

  useEffect(() => {
    setTask(loadTask)
    return () => {
      setTask(initialValues)
    }
  }, [id])

  return (
    <DL.Dialog onOpenChange={setOpen} open={open}>
      <DL.DialogTrigger asChild>
        {id
          ? (
          <Button
            size='icon'
            variant='ghost'
            className='flex size-fit text-start p-0 data-[state=open]:bg-muted'
          >
            <Pencil2Icon className='size-6 hover:text-primary' />
            <span className='sr-only'>Edit</span>
          </Button>
            )
          : (
          <Button>
            <PlusCircledIcon className='size-4 mr-2' />
            Create task
          </Button>
            )}
      </DL.DialogTrigger>
      <DL.DialogContent className='sm:max-w-[425px] grid gap-6'>
        <DL.DialogHeader>
          <DL.DialogTitle>Create task</DL.DialogTitle>
          <DL.DialogDescription>
            Make changes to your task here. Click save when you're done.
          </DL.DialogDescription>
        </DL.DialogHeader>
        <section className='flex flex-col gap-3'>
          {error.hasError && (
            <span className='text-red-500'>
              There was an error with {error.field?.toString() ?? 'the form'}:
              <br />
              {error.message}
            </span>
          )}
          <div className='grid grid-cols-2 gap-4'>
            <div className='grid gap-2'>
              <Label htmlFor='title'>Title</Label>
              <Input
                id='title'
                placeholder='I need help with...'
                value={task?.title}
                onChange={({ target }) => {
                  setTask({ ...task, title: target.value })
                }}
              />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='jira-id'>Jira ID</Label>
              <Input
                id='jira-id'
                placeholder='Task ID'
                value={task?.case}
                onChange={({ target }) => {
                  setTask({ ...task, case: target.value })
                }}
              />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='company'>Company</Label>
              <Input
                id='company'
                placeholder='Work for...'
                value={task?.company}
                onChange={({ target }) => {
                  setTask({ ...task, company: target.value })
                }}
              />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='label'>Label</Label>
              <SL.Select
                defaultValue='todo'
                value={task?.label}
                onValueChange={(value: Label) => {
                  setTask({ ...task, label: value })
                }}
              >
                <SL.SelectTrigger id='label'>
                  <SL.SelectValue placeholder='Select' />
                </SL.SelectTrigger>
                <SL.SelectContent>
                  {LabelSchema.options.map((option) => (
                    <SL.SelectItem key={option} value={option}>
                      {option}
                    </SL.SelectItem>
                  ))}
                </SL.SelectContent>
              </SL.Select>
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='status'>Status</Label>
              <SL.Select
                defaultValue='todo'
                value={task?.status}
                onValueChange={(value: Status) => {
                  setTask({ ...task, status: value })
                }}
              >
                <SL.SelectTrigger id='status'>
                  <SL.SelectValue placeholder='Select' />
                </SL.SelectTrigger>
                <SL.SelectContent>
                  {StatusSchema.options.map((option) => (
                    <SL.SelectItem key={option} value={option}>
                      {option}
                    </SL.SelectItem>
                  ))}
                </SL.SelectContent>
              </SL.Select>
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='priority'>Priority</Label>
              <SL.Select
                defaultValue='medium'
                value={task.priority}
                onValueChange={(value: Priority) => {
                  setTask({ ...task, priority: value })
                }}
              >
                <SL.SelectTrigger id='priority'>
                  <SL.SelectValue placeholder='Select level' />
                </SL.SelectTrigger>
                <SL.SelectContent>
                  {PrioritySchema.options.map((option) => (
                    <SL.SelectItem key={option} value={option}>
                      {option}
                    </SL.SelectItem>
                  ))}
                </SL.SelectContent>
              </SL.Select>
            </div>
          </div>
          <div className='flex flex-col w-full gap-2'>
            <Label htmlFor='description'>Description</Label>
            <Textarea
              id='description'
              value={task?.description}
              placeholder='Please include all information relevant to your issue.'
              className='h-24'
              rows={4}
              onChange={({ target }) => {
                setTask({ ...task, description: target.value })
              }}
            />
          </div>
        </section>
        <DL.DialogFooter className='flex flex-row justify-between space-x-2'>
          <Button
            variant='ghost'
            onClick={() => {
              setTask(initialValues)
              setOpen(false)
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              id
                ? updateTask({ id, task })
                : TaskTypeSchema.parse(task)
                  ? addTask({ task })
                  : setError({
                    message: 'Please fill in all required fields.',
                    hasError: true
                  })
              setTask(initialValues)
              setOpen(false)
            }}
          >
            Save
          </Button>
        </DL.DialogFooter>
      </DL.DialogContent>
    </DL.Dialog>
  )
}
