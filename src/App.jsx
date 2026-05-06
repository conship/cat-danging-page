import './styles/global.css';
import './styles/animations.css';
import './styles/app.css';
import DancingCat from './components/DancingCat';
import AnimationControls from './components/AnimationControls';
import { useAnimation } from './hooks/useAnimation';

export default function App() {
  const { isPlaying, danceStyle, speed, toggle, changeDanceStyle, changeSpeed } = useAnimation();

  return (
    <main className="app">
      <div className="stars" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="star"
            style={{
              left: `${(i * 37 + 13) % 100}%`,
              top: `${(i * 53 + 7) % 100}%`,
              animationDelay: `${(i * 0.3) % 3}s`,
              animationDuration: `${2 + (i % 3)}s`,
              fontSize: `${8 + (i % 3) * 8}px`,
            }}
          >
            ✦
          </span>
        ))}
      </div>

      <h1 className="title">
        <span className="title-emoji">🐱</span>
        고양이 댄스
        <span className="title-emoji">🎵</span>
      </h1>

      <DancingCat isPlaying={isPlaying} danceStyle={danceStyle} speed={speed} />

      <AnimationControls
        isPlaying={isPlaying}
        danceStyle={danceStyle}
        speed={speed}
        onToggle={toggle}
        onStyleChange={changeDanceStyle}
        onSpeedChange={changeSpeed}
      />

      <p className="hint">
        {isPlaying ? '고양이가 신나게 춤을 추고 있어요! 🎉' : '시작 버튼을 눌러 고양이를 춤추게 하세요!'}
      </p>
    </main>
  );
}
