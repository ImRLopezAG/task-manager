import { CounterClockwiseClockIcon } from '@radix-ui/react-icons'

import { Button } from '@ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@ui/tabs'

import { Selector } from '@components/editor/selector'
import { LanguageSchema, ThemeSchema } from '@schemas/editor.schema'

import { EditLayoutIcon, LayoutShitIcon } from '@components/icons'
import { createFileRoute } from '@tanstack/react-router'
import { Code } from '@components/editor/monaco'
import { MarkdownFormat } from '@components/editor/md-format'
import { useEditorsStore } from '@context/editor'

function Editor (): JSX.Element {
  const { editor, setLanguage, setTheme } = useEditorsStore()
  return (
    <Tabs defaultValue='complete' className='flex-1'>
      <div className='hidden h-full flex-col md:flex'>
        <div className='container flex flex-col items-start justify-between space-y-2 py-4 gap-3 sm:flex-row sm:items-center sm:space-y-0 md:h-16'>
          <h2 className='text-lg font-semibold'>Editor</h2>
          <div className='hidden flex-col space-y-4 sm:flex size-fit '>
            <TabsList className='grid grid-cols-2 h-9 w-28'>
              <TabsTrigger value='complete'>
                <span className='sr-only'>Complete</span>
                <EditLayoutIcon />
              </TabsTrigger>
              <TabsTrigger value='split'>
                <span className='sr-only'>Split</span>
                <LayoutShitIcon />
              </TabsTrigger>
            </TabsList>
          </div>
          <div className='ml-auto flex w-full space-x-2 sm:justify-end'>
            <Selector
              entries={ThemeSchema.options}
              handleChange={setTheme}
              selected={editor.theme}
              />

            <Selector
              entries={LanguageSchema.options}
              handleChange={setLanguage}
              selected={editor.language}
            />
          </div>
        </div>
        <div className='container h-full py-6'>
          <div className='grid h-full items-stretch gap-6 md:grid-cols-auto'>
            <div className='md:order-1'>
              <TabsContent value='complete' className='mt-0 border-0 p-0'>
                <div className='flex h-full flex-col space-y-4'>
                  <Code />
                  <div className='flex items-center space-x-2'>
                    <Button>Submit</Button>
                    <Button variant='secondary'>
                      <span className='sr-only'>Show history</span>
                      <CounterClockwiseClockIcon className='h-4 w-4' />
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value='split' className='mt-0 border-0 p-0'>
                <div className='flex flex-col space-y-4'>
                  <div className='grid h-full grid-rows-2 gap-6 lg:grid-cols-2 lg:grid-rows-1'>
                    <Code />
                    <div className='rounded-md border bg-muted p-4'>
                      <MarkdownFormat />
                    </div>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <Button>Submit</Button>
                    <Button variant='secondary'>
                      <span className='sr-only'>Show history</span>
                      <CounterClockwiseClockIcon className='h-4 w-4' />
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </div>
          </div>
        </div>
      </div>
    </Tabs>
  )
}

export const Route = createFileRoute('/editor')({
  component: Editor
})
