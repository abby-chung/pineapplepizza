// src/components/SyntaxHighlighter.tsx
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Check, FileText } from 'lucide-react';

interface SyntaxHighlighterProps {
  code: string;
  language?: string;
  title?: string;
  fileName?: string;
}

const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = ({ 
  code, 
  language = 'text', 
  title,
  fileName 
}) => {
  const [copied, setCopied] = useState(false);
  const [highlighted, setHighlighted] = useState<string>(code);

  // Simple syntax highlighting for common languages
  useEffect(() => {
    const highlightCode = () => {
      let highlightedCode = code;

      if (language === 'javascript' || language === 'typescript') {
        // Highlight keywords
        highlightedCode = highlightedCode
          .replace(/\b(const|let|var|function|return|if|else|for|while|class|extends|import|export|from|default)\b/g, 
            '<span style="color: #0969da;">$1</span>')
          // Highlight strings
          .replace(/(["'`])((?:\\.|(?!\1)[^\\])*?)\1/g, 
            '<span style="color: #032f62;">$1$2$1</span>')
          // Highlight comments
          .replace(/(\/\/.*$)/gm, 
            '<span style="color: #6a737d;">$1</span>')
          // Highlight numbers
          .replace(/\b(\d+)\b/g, 
            '<span style="color: #005cc5;">$1</span>');
      } else if (language === 'css') {
        highlightedCode = highlightedCode
          // Highlight selectors
          .replace(/^([^{]*)\s*{/gm, 
            '<span style="color: #6f42c1;">$1</span> {')
          // Highlight properties
          .replace(/\s+([a-z-]+):/g, 
            '  <span style="color: #005cc5;">$1</span>:')
          // Highlight values
          .replace(/:\s*([^;]+);/g, 
            ': <span style="color: #032f62;">$1</span>;');
      } else if (language === 'html') {
        highlightedCode = highlightedCode
          // Highlight tags
          .replace(/(<\/?)([a-zA-Z][a-zA-Z0-9]*)(.*?)(\/?>)/g, 
            '<span style="color: #22863a;">$1</span><span style="color: #22863a;">$2</span><span style="color: #6f42c1;">$3</span><span style="color: #22863a;">$4</span>')
          // Highlight attributes
          .replace(/(\w+)=("[^"]*"|'[^']*')/g, 
            '<span style="color: #6f42c1;">$1</span>=<span style="color: #032f62;">$2</span>');
      }

      setHighlighted(highlightedCode);
    };

    highlightCode();
  }, [code, language]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const getLanguageIcon = () => {
    switch (language) {
      case 'javascript':
      case 'js':
        return '🟨';
      case 'typescript':
      case 'ts':
        return '🔷';
      case 'css':
        return '🎨';
      case 'html':
        return '🌐';
      case 'json':
        return '📋';
      case 'markdown':
      case 'md':
        return '📝';
      default:
        return '📄';
    }
  };

  return (
    <div className="relative group my-6 rounded-lg border border-border overflow-hidden bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between bg-gray-100 px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{getLanguageIcon()}</span>
          {fileName && (
            <div className="flex items-center gap-1">
              <FileText className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-700">{fileName}</span>
            </div>
          )}
          {title && !fileName && (
            <span className="text-sm text-gray-700">{title}</span>
          )}
          <span className="text-xs text-gray-500 uppercase tracking-wider">
            {language}
          </span>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={copyToClipboard}
          className="h-8 w-8 p-0 text-gray-500 hover:text-gray-700 hover:bg-gray-200 opacity-0 group-hover:opacity-100 transition-all"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-600" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Code content */}
      <div className="relative">
        <pre className="p-4 overflow-x-auto text-sm leading-relaxed bg-gray-50">
          <code 
            className="font-mono text-gray-800"
            dangerouslySetInnerHTML={{ __html: highlighted }}
          />
        </pre>
      </div>
    </div>
  );
};

export default SyntaxHighlighter;