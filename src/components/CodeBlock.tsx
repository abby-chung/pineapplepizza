// src/components/CodeBlock.tsx
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'text', title }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="relative group my-6">
      {/* Header with title and copy button */}
      <div className="flex items-center justify-between bg-muted px-4 py-2 rounded-t-lg border border-border">
        <div className="flex items-center gap-2">
          {title && <span className="text-sm font-medium text-muted-foreground">{title}</span>}
          <span className="text-xs text-muted-foreground uppercase tracking-wider">
            {language}
          </span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={copyToClipboard}
          className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Code content */}
      <pre className="bg-muted/50 p-4 rounded-b-lg border-l border-r border-b border-border overflow-x-auto">
        <code className={`language-${language} text-sm font-mono leading-relaxed`}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;