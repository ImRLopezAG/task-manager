import { z } from 'zod'

export const EditorSchema = z
  .object({
    id: z
      .string()
      .uuid()
      .default(() => crypto.randomUUID()),
    title: z.string(),
    src: z.string().optional()
  })
  .strict()

export const PresetSchema = z.object({
  id: z.string().uuid(),
  name: z.string()
})

export const LanguageSchema = z.enum([
  'cpp',
  'csharp',
  'css',
  'dart',
  'dockerfile',
  'elixir',
  'fsharp',
  'go',
  'graphql',
  'handlebars',
  'html',
  'java',
  'javascript',
  'julia',
  'kotlin',
  'less',
  'markdown',
  'mdx',
  'mips',
  'mysql',
  'objective-c',
  'pgsql',
  'php',
  'powershell',
  'python',
  'r',
  'razor',
  'redis',
  'redshift',
  'restructuredtext',
  'ruby',
  'rust',
  'scala',
  'scheme',
  'scss',
  'shell',
  'solidity',
  'sql',
  'st',
  'swift',
  'typescript',
  'vb',
  'xml',
  'yaml'
])

export const ThemeSchema = z.enum([
  'vs-dark',
  'light'
])
