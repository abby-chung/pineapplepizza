// src/components/MarkdownContent.tsx
import React from 'react';
import SyntaxHighlighter from './SyntaxHighlighter';

interface MarkdownContentProps {
  content: string;
}

const MarkdownContent: React.FC<MarkdownContentProps> = ({ content }) => {
  // Function to process markdown content and extract code blocks
  const processContent = (text: string) => {
    const elements: React.ReactNode[] = [];
    let lastIndex = 0;
    
    // Regular expression to match fenced code blocks
    const codeBlockRegex = /```(\w+)?\s*\n?([\s\S]*?)```/g;
    let match;

    while ((match = codeBlockRegex.exec(text)) !== null) {
      // Add text before the code block
      if (match.index > lastIndex) {
        const beforeText = text.slice(lastIndex, match.index);
        elements.push(
          <div 
            key={`text-${lastIndex}`}
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: processSimpleMarkdown(beforeText) }}
          />
        );
      }

      // Add the code block
      const language = match[1] || 'text';
      const code = match[2].trim();
      elements.push(
        <SyntaxHighlighter
          key={`code-${match.index}`}
          code={code}
          language={language}
        />
      );

      lastIndex = match.index + match[0].length;
    }

    // Add any remaining text after the last code block
    if (lastIndex < text.length) {
      const remainingText = text.slice(lastIndex);
      elements.push(
        <div 
          key={`text-${lastIndex}`}
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: processSimpleMarkdown(remainingText) }}
        />
      );
    }

    return elements;
  };

  // Simple markdown processor for basic formatting
  const processSimpleMarkdown = (text: string) => {
    return text
      // Headers
      .replace(/^### (.*$)/gm, '<h3>$1</h3>')
      .replace(/^## (.*$)/gm, '<h2>$1</h2>')
      .replace(/^# (.*$)/gm, '<h1>$1</h1>')
      // Bold
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      // Italic
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      // Lists
      .replace(/^- (.*$)/gm, '<li>$1</li>')
      // Wrap consecutive list items
      .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
      // Line breaks
      .replace(/\n\n/g, '</p><p>')
      .replace(/^\s*/, '<p>')
      .replace(/\s*$/, '</p>');
  };

  return (
    <div className="space-y-4">
      {processContent(content)}
    </div>
  );
};

export default MarkdownContent;