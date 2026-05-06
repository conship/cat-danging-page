import { useState, useCallback } from 'react';

export function useAnimation() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [danceStyle, setDanceStyle] = useState('dance');
  const [speed, setSpeed] = useState(1);

  const toggle = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  const changeDanceStyle = useCallback((style) => {
    setDanceStyle(style);
  }, []);

  const changeSpeed = useCallback((newSpeed) => {
    setSpeed(newSpeed);
  }, []);

  return { isPlaying, danceStyle, speed, toggle, changeDanceStyle, changeSpeed };
}
