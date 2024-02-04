'use client'
import React, { useMemo } from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useEditorsStore } from '@context/editor'

type RenderCodeBlockProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const MarkdownFormat: React.FC = () => {
  const { editor } = useEditorsStore()
  const renderCodeBlock = ({
    className,
    children,
    ...props
  }: RenderCodeBlockProps): JSX.Element => {
    const language = useMemo(() => /language-(\w+)/.exec(className ?? 'plaintext'), [className])
    if (language !== null) {
      return (
        <SyntaxHighlighter
          language={editor.language}
          style={{ ...vscDarkPlus }}
          customStyle={{
            borderRadius: '0.5rem',
            padding: '1rem',
            overflow: 'auto',
            paddingRight: '0.1rem',
            paddingTop: '0.2rem',
            marginTop: 0
          }}
          children={String(children)}
          {...props}
        />
      )
    } else {
      return (
        <code
          style={{
            backgroundColor: '#1a1a1a75',
            padding: '0.1rem 0.5rem',
            borderRadius: '0.5rem'
          }}
          className={className}
          {...props}
        >
          {children}
        </code>
      )
    }
  }
  return (
      <ReactMarkdown
        components={{
          code: renderCodeBlock
        }}
      >
        {`\`\`\`${editor.language}\n${editor.src.replace(/\n$/, '')}\n\`\`\``}
      </ReactMarkdown>
  )
}
