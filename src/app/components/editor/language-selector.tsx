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

interface LanguageSelectorProps extends PopoverProps {
  languages: Language[]
  handleLanguageChange: (language: Language) => void
  selectedLanguage: Language
}

export function LanguageSelector ({ languages, selectedLanguage, handleLanguageChange, ...props }: LanguageSelectorProps): JSX.Element {
  const [open, setOpen] = useState(false)
  return (
    <Popover open={open} onOpenChange={setOpen} {...props}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-label='Load a language...'
          aria-expanded={open}
          className='flex-1 justify-between md:max-w-[200px] lg:max-w-[300px]'
        >
          {selectedLanguage}
          <CaretSortIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[300px] p-0'>
        <Command>
          <CommandInput placeholder='Search Languages...' />
          <CommandEmpty>No Languages found.</CommandEmpty>
          <CommandGroup heading='Examples'>
            {languages.map((language) => (
              <CommandItem
                key={language}
                onSelect={() => {
                  handleLanguageChange(language)
                  setOpen(false)
                }}
              >
                {language}
                <CheckIcon
                  className={cn(
                    'ml-auto h-4 w-4',
                    selectedLanguage === language
                      ? 'opacity-100'
                      : 'opacity-0'
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup className='pt-0'>
            <CommandItem>
              More examples
            </CommandItem>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
