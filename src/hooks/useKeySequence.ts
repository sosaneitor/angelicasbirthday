import { useEffect, useRef, useState } from 'react';

export function useKeySequence(targetSequence: string): boolean {
  const [activated, setActivated] = useState(false);
  const bufferRef = useRef('');

  useEffect(() => {
    if (activated) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      bufferRef.current += e.key.toUpperCase();
      
      // Keep buffer length manageable
      if (bufferRef.current.length > targetSequence.length * 2) {
        bufferRef.current = bufferRef.current.slice(-targetSequence.length);
      }

      if (bufferRef.current.includes(targetSequence.toUpperCase())) {
        setActivated(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activated, targetSequence]);

  return activated;
}
