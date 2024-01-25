import type { z } from 'zod'
import type * as schema from './schema'

export declare global {
  export type Label = z.infer<typeof schema.LabelSchema>
  export type Priority = z.infer<typeof schema.PrioritySchema>
  export type Status = z.infer<typeof schema.StatusSchema>
  export type TaskType = z.infer<typeof schema.TaskTypeSchema>
  export type Preset = z.infer<typeof schema.PresetSchema>
}
