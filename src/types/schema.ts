import { z } from 'zod'

export const LabelSchema = z.enum([
  'bug',
  'documentation',
  'feature',
  'development',
  'lifting',
  'internal',
  'personal'
])
export const PrioritySchema = z.enum(['high', 'low', 'medium'])

export const StatusSchema = z.enum([
  'backlog',
  'canceled',
  'done',
  'in progress',
  'task',
  'archived',
  'personal'
])

export const TaskTypeSchema = z.object({
  id: z.string().readonly(),
  title: z.string(),
  status: StatusSchema,
  label: LabelSchema,
  description: z.string(),
  createdAt: z.string().optional(),
  estimatedTime: z.number().optional(),
  case: z.string().optional(),
  company: z.string().optional(),
  priority: PrioritySchema
})

export const ModelTypesSchema = z.enum(['GPT-3', 'Codex'])

export const ModelSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  type: ModelTypesSchema,
  description: z.string(),
  strengths: z.string().optional()
})

export const PresetSchema = z.object({
  id: z.string().uuid(),
  name: z.string()
})
