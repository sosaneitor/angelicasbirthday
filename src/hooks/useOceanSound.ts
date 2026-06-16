import { useRef, useState, useCallback, useEffect } from 'react';
import { Howl } from 'howler';

export function useOceanSound() {
  const soundRef = useRef<Howl | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    soundRef.current = new Howl({
      src: ['/sounds/ocean.mp3'],
      loop: true,
      volume: 0.3,
      preload: true,
      onload: () => setIsLoaded(true),
    });

    return () => {
      soundRef.current?.unload();
    };
  }, []);

  const toggle = useCallback(() => {
    if (!soundRef.current) return;

    if (isMuted) {
      soundRef.current.play();
      soundRef.current.fade(0, 0.3, 1000);
      setIsMuted(false);
    } else {
      soundRef.current.fade(0.3, 0, 500);
      setTimeout(() => soundRef.current?.pause(), 500);
      setIsMuted(true);
    }
  }, [isMuted]);

  const play = useCallback(() => {
    if (!soundRef.current || !isMuted) return;
    soundRef.current.play();
    soundRef.current.fade(0, 0.3, 1000);
    setIsMuted(false);
  }, [isMuted]);

  return { isMuted, toggle, play, isLoaded };
}
