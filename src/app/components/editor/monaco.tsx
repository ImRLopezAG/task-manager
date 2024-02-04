import { useEditorsStore } from '@context/editor'
import MonacoEditor from '@monaco-editor/react'
import { memo, type ComponentProps } from 'react'

type MonacoMountHandler = ComponentProps<typeof MonacoEditor>['onMount']

const editorOptions: ComponentProps<typeof MonacoEditor>['options'] = {
  minimap: { enabled: true, showSlider: 'mouseover' },
  renderLineHighlight: 'none',
  fontSize: 15,
  scrollbar: {
    vertical: 'auto',
    horizontal: 'auto'
  },
  fontLigatures: true,
  formatOnType: true,
  wordWrap: 'on',
  autoIndent: 'full',
  cursorBlinking: 'smooth',
  formatOnPaste: true,
  suggest: {
    showKeywords: true,
    showClasses: true,
    showSnippets: true
  }
}

export const Code = memo(() => {
  const { editor, setCurrentEditorSrc } = useEditorsStore()

  const handleMount: MonacoMountHandler = (mountedEditor) => {
    if (!mountedEditor) return
    mountedEditor.getModel()?.updateOptions({ tabSize: 2, indentSize: 2 })
    mountedEditor.focus()
  }

  return (
    <MonacoEditor
      defaultLanguage={editor.language}
      language={editor.language}
      options={editorOptions}
      value={editor.src}
      theme={editor.theme}
      keepCurrentModel
      loading={
        <div className='flex justify-center items-center space-x-2'>
          <span className='animate-bounce size-5 bg-white rounded-full' />
          <span className='animate-bounce size-5 bg-white rounded-full delay-200' />
          <span className='animate-bounce size-5 bg-white rounded-full delay-300' />
        </div>
      }
      onChange={(e) => {
        setCurrentEditorSrc(e ?? '')
      }}
      onMount={handleMount}
      className='h-dvh rounded-sm'
    />
  )
})
