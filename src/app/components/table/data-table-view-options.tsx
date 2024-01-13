import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { MixerHorizontalIcon } from '@radix-ui/react-icons'
import type { Table } from '@tanstack/react-table'

import { Button } from '@ui/button'
import * as DM from '@ui/dropdown-menu'

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>
}

export function DataTableViewOptions<TData> ({ table }: DataTableViewOptionsProps<TData>): JSX.Element {
  return (
    <DM.DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          size='sm'
          className='ml-auto hidden h-8 lg:flex'
        >
          <MixerHorizontalIcon className='mr-2 h-4 w-4' />
          View
        </Button>
      </DropdownMenuTrigger>
      <DM.DropdownMenuContent align='end' className='w-[150px]'>
        <DM.DropdownMenuLabel>Toggle columns</DM.DropdownMenuLabel>
        <DM.DropdownMenuSeparator />
        {table
          .getAllColumns()
          .filter(
            (column) =>
              typeof column.accessorFn !== 'undefined' && column.getCanHide()
          )
          .map((column) => {
            return (
              <DM.DropdownMenuCheckboxItem
                key={column.id}
                className='capitalize'
                checked={column.getIsVisible()}
                onCheckedChange={(value) => { column.toggleVisibility(!!value) }}
              >
                {column.id}
              </DM.DropdownMenuCheckboxItem>
            )
          })}
      </DM.DropdownMenuContent>
    </DM.DropdownMenu>
  )
}
