import { LanguageSchema, ThemeSchema } from '@schemas/editor.schema'
import { z } from 'zod'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const editorSchema = z.object({
  theme: ThemeSchema.default('vs-dark'),
  language: LanguageSchema.default('typescript'),
  src: z.string().default(''),
  isDiagram: z.boolean().default(false)
})

interface State {
  editor: z.infer<typeof editorSchema>
}

interface Actions {
  setCurrentEditorSrc: (src: string) => void
  setTheme: (theme: z.infer<typeof ThemeSchema>) => void
  setLanguage: (language: z.infer<typeof LanguageSchema>) => void
  toggleDiagram: () => void
}

export const useEditorsStore = create(
  persist<State & Actions>(
    (set) => ({
      editor: editorSchema.parse({
        editor: {
          language: 'typescript',
          theme: 'vs-dark',
          src: '',
          isDiagram: false
        }
      }),
      setCurrentEditorSrc (src) {
        set((state) => ({
          editor: {
            ...state.editor,
            src
          }
        }))
      },
      setTheme (theme) {
        set((state) => ({
          editor: {
            ...state.editor,
            theme
          }
        }))
      },
      setLanguage (language) {
        set((state) => ({
          editor: {
            ...state.editor,
            language
          }
        }))
      },
      toggleDiagram () {
        set((state) => ({
          editor: {
            ...state.editor,
            isDiagram: !state.editor.isDiagram
          }
        }))
      }
    }),
    {
      name: 'editors'
    }
  )
)
