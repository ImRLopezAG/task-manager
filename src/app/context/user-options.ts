import { z } from 'zod'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { LanguageSchema } from '@schemas/editor.schema'

const themes = z.enum(['vsLight', 'vsDark', 'solarizedLight', 'solarizedDark'])
const userOptionsSchema = z.object({
  general: z.object({
    sidebarOpen: z.boolean().default(true)
  }),
  panels: z.object({
    splitDirection: z.enum(['horizontal', 'vertical']).default('horizontal')
  }),
  editor: z.object({
    theme: themes.default('vsDark'),
    language: LanguageSchema.default('typescript')
  })
})
export type UserOptions = z.infer<typeof userOptionsSchema>

interface State {
  userOptions: UserOptions
}
interface Actions {
  toggleSidebar: () => void
  toggleSplitDirection: () => void
}

export const useUserOptionsStore = create(
  persist<State & Actions>(
    (set) => ({
      userOptions: userOptionsSchema.parse({
        general: {
          sidebarOpen: true
        },
        panels: {
          splitDirection: 'horizontal'
        },
        editor: {
          theme: 'vsDark'
        }
      }),
      toggleSidebar () {
        set((state) => ({
          userOptions: {
            ...state.userOptions,
            general: {
              ...state.userOptions.general,
              sidebarOpen: !state.userOptions.general.sidebarOpen
            }
          }
        }))
      },
      toggleSplitDirection () {
        set((state) => ({
          userOptions: {
            ...state.userOptions,
            panels: {
              ...state.userOptions.panels,
              splitDirection: state.userOptions.panels.splitDirection === 'horizontal' ? 'vertical' : 'horizontal'
            }
          }
        }))
      }
    }),
    {
      name: 'userOptions'
    }
  )
)
