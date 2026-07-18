'use client';

import { useEffect, useRef } from 'react';
import katex from 'katex';

interface MathFormulaProps {
  formula: string;
  display?: boolean;
  className?: string;
}

export function MathFormula({ formula, display = false, className = '' }: MathFormulaProps) {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      katex.render(formula, containerRef.current, {
        displayMode: display,
        throwOnError: false,
        trust: true,
      });
    }
  }, [formula, display]);

  return <span ref={containerRef} className={className} />;
}
