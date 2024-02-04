import type { z } from 'zod'
import type * as schema from '@/schemas'

export declare global {
  export type Label = z.infer<typeof schema.LabelSchema>
  export type Priority = z.infer<typeof schema.PrioritySchema>
  export type Status = z.infer<typeof schema.StatusSchema>
  export type TaskType = z.infer<typeof schema.TaskTypeSchema>
  export type Preset = z.infer<typeof schema.PresetSchema>
  export type Language = z.infer<typeof schema.LanguageSchema>
  export type EditorType = z.infer<typeof schema.EditorSchema>
  export type EditorsType = z.infer<typeof schema.EditorsSchema>
}
