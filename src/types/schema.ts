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

export const TaskTypeSchema = z
  .object({
    id: z.string(),
    title: z.string().min(3).max(50),
    description: z.string(),
    status: StatusSchema,
    label: LabelSchema,
    priority: PrioritySchema,
    case: z.coerce
      .string()
      .trim()
      .toUpperCase()
      .transform((val) => {
        if (val === '') return 'NONE'
        else return val
      }),
    company: z.coerce
      .string()
      .trim()
      .toUpperCase()
      .transform((val) => {
        if (val === '') return 'NONE'
        else return val
      }),
    createdAt: z.coerce.date().transform((val) => val.toUTCString()).optional(),
    updatedAt: z.coerce.date().transform((val) => val.toUTCString()).optional()
  })
  .strict()

export const PresetSchema = z.object({
  id: z.string().uuid(),
  name: z.string()
})

export const LanguageSchema = z.enum([
  'demonstration',
  'arduino',
  'bash',
  'c',
  'cmake',
  'cpp',
  'csharp',
  'csp',
  'css',
  'd',
  'dart',
  'django',
  'dns',
  'dockerfile',
  'elixir',
  'fsharp',
  'go',
  'http',
  'htmlbars',
  'java',
  'javascript',
  'json',
  'juliaRepl',
  'julia',
  'kotlin',
  'lasso',
  'less',
  'lua',
  'makefile',
  'markdown',
  'pgsql',
  'php',
  'plaintext',
  'powershell',
  'python',
  'r',
  'rust',
  'sas',
  'scala',
  'scss',
  'shell',
  'sqlMore',
  'swift',
  'typescript',
  'xml',
  'yaml'
])
