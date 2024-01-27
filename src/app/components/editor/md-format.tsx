'use client'
import React, { useMemo } from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface MessageProps {
  text: string
  selectedLanguage: Language
}

type RenderCodeBlockProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const MarkdownFormat: React.FC<MessageProps> = ({ text, selectedLanguage }) => {
  const renderCodeBlock = ({
    className,
    children,
    ...props
  }: RenderCodeBlockProps): JSX.Element => {
    const language = useMemo(() => /language-(\w+)/.exec(className ?? 'plaintext'), [className])
    if (language !== null) {
      const codeLanguage = selectedLanguage === 'demonstration' ? language[1] : selectedLanguage
      return (
        <SyntaxHighlighter
          language={codeLanguage}
          style={{ ...vscDarkPlus }}
          customStyle={{
            borderRadius: '0.5rem',
            padding: '1rem',
            overflow: 'auto',
            paddingRight: '0.1rem',
            paddingTop: '0.2rem',
            marginTop: 0
          }}
          children={String(children).replace(/\n$/, '')}
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
    <div className='flex flex-col gap-2'>
      <ReactMarkdown
        components={{
          code: renderCodeBlock
        }}
      >
        {text}
      </ReactMarkdown>
    </div>
  )
}
