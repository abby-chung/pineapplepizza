// src/components/MarkdownContent.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import SyntaxHighlighter from './SyntaxHighlighter'
import LazyImage from './LazyImage'

interface MarkdownContentProps {
  /** HTML content to process for code blocks and markdown formatting */
  content: string
}

/**
 * Renders markdown and HTML content with syntax-highlighted code blocks.
 * Processes code blocks separately for proper syntax highlighting and applies
 * simple markdown formatting to regular text.
 */
const MarkdownContent: React.FC<MarkdownContentProps> = ({ content }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Replace img elements with LazyImage components
    if (containerRef.current) {
      const imgElements = containerRef.current.querySelectorAll('img.lazy-image');
      
      imgElements.forEach((img) => {
        const alt = img.getAttribute('data-lazy-image-alt') || 'Image';
        const src = img.getAttribute('data-lazy-image-src') || '';
        
        // Create a wrapper div for the LazyImage component
        const wrapper = document.createElement('div');
        wrapper.className = 'my-4 rounded-lg overflow-hidden';
        
        img.replaceWith(wrapper);
        
        // Render LazyImage component into the wrapper
        const root = ReactDOM.createRoot(wrapper);
        root.render(
          <LazyImage 
            src={src} 
            alt={alt} 
            className="w-full h-auto rounded-lg"
          />
        );
      });
    }
  }, [content]);
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
    let processed = text
      // Headers
      .replace(/^### (.*$)/gm, '<h3>$1</h3>')
      .replace(/^## (.*$)/gm, '<h2>$1</h2>')
      .replace(/^# (.*$)/gm, '<h1>$1</h1>')
      // Blockquotes
      .replace(/^> (.*$)/gm, '<blockquote>$1</blockquote>')
      // Bold
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      // Italic
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      // Lists - convert individual items first
      .replace(/^- (.*$)/gm, '<li>$1</li>')
      // Images: ![alt](src) -> data-lazy-image-alt and data-lazy-image-src
      .replace(/!\[(.*?)\]\((.*?)\)/g, '<img data-lazy-image-alt="$1" data-lazy-image-src="$2" src="" alt="$1" class="lazy-image" />');

    // Wrap consecutive list items in <ul> tags
    // This handles multiple separate lists correctly
    processed = processed.replace(/(<li>.*?<\/li>(?:\s*<li>.*?<\/li>)*)/gm, (match) => {
      // Only wrap if not already wrapped
      if (!match.includes('<ul>')) {
        return `<ul>${match}</ul>`;
      }
      return match;
    });

    // Wrap consecutive blockquotes in a blockquote container
    processed = processed.replace(/(<blockquote>.*?<\/blockquote>(?:\s*<blockquote>.*?<\/blockquote>)*)/gm, (match) => {
      // Flatten multiple blockquote tags into one
      return match.replace(/<\/blockquote>\s*<blockquote>/g, '<br>');
    });

    // Handle paragraphs and line breaks
    processed = processed
      .replace(/\n\n/g, '</p><p>')
      .replace(/^\s*/, '<p>')
      .replace(/\s*$/, '</p>')
      // Clean up empty paragraphs
      .replace(/<p><\/p>/g, '')
      // Fix paragraphs around headers and lists
      .replace(/<p>(<h[1-6]>)/g, '$1')
      .replace(/(<\/h[1-6]>)<\/p>/g, '$1')
      .replace(/<p>(<ul>)/g, '$1')
      .replace(/(<\/ul>)<\/p>/g, '$1');

    return processed;
  };

  return (
    <div ref={containerRef} className="space-y-4">
      {processContent(content)}
    </div>
  );
};

export default MarkdownContent;