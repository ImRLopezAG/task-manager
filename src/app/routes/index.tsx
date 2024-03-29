import { columns } from '@components/table/columns'
import { DataTable } from '@components/table/data-table'
import { UserNav } from '@components/user-nav'
import { useTaskStore } from '@context/task'
import { createFileRoute } from '@tanstack/react-router'

function Tasks (): JSX.Element {
  const { tasks } = useTaskStore()
  return (
    <div className='flex h-fit flex-1 flex-col '>
      <div className='flex items-center justify-between space-y-2'>
        <div>
          <h2 className='text-2xl font-bold tracking-tight'>Welcome back!</h2>
          <p className='text-muted-foreground'>
            Here&apos;s a list of your tasks for this month!
          </p>
        </div>
        <div className='flex items-center space-x-2'>
          <UserNav />
        </div>
      </div>
      <DataTable data={tasks} columns={columns} />
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: Tasks
})
