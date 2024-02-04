'use client'
import { useState } from 'react'
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons'
import { type PopoverProps } from '@radix-ui/react-popover'

import { cn } from '@/lib/utils'
import { Button } from '@ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem
} from '@ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@ui/popover'

interface SelectorProps<T = any> extends PopoverProps {
  entries: T[]
  handleChange: (entry: T) => void
  selected: T
}

export const Selector: React.FC<SelectorProps> = ({ entries, handleChange, selected, ...props }) => {
  const [open, setOpen] = useState(false)
  return (
    <Popover open={open} onOpenChange={setOpen} {...props}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-label='Load a entry...'
          aria-expanded={open}
          className='flex-1 justify-between md:max-w-[200px] lg:max-w-[300px]'
        >
          {selected}
          <CaretSortIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[300px] p-0'>
        <Command>
          <CommandInput placeholder='Search s...' />
          <CommandEmpty>No s found.</CommandEmpty>
          <CommandGroup heading='Examples' className='max-h-48 overflow-y-auto'>
            {entries.map((entry) => (
              <CommandItem
                key={entry}
                onSelect={() => {
                  handleChange(entry)
                  setOpen(false)
                }}
              >
                {entry}
                <CheckIcon
                  className={cn(
                    'ml-auto h-4 w-4',
                    selected === entry ? 'opacity-100' : 'opacity-0'
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
