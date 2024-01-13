import { z } from 'zod'

export const LabelSchema = z.enum(['bug', 'documentation', 'feature'])
export const PrioritySchema = z.enum(['high', 'low', 'medium'])

export const StatusSchema = z.enum([
  'backlog',
  'canceled',
  'done',
  'in progress',
  'todo'
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
