import './styles/global.css';
import './styles/animations.css';
import './styles/app.css';
import DancingCat from './components/DancingCat';
import AnimationControls from './components/AnimationControls';
import { useAnimation } from './hooks/useAnimation';

const SPACE_OBJECTS = [
  { char: '✦', count: 30 },
  { char: '·', count: 20 },
  { char: '★', count: 8 },
  { char: '✧', count: 10 },
];

const BG_ITEMS = SPACE_OBJECTS.flatMap(({ char, count }) =>
  Array.from({ length: count }, (_, i) => char + i).map((key, i) => ({
    key,
    char: key[0],
    left: ((i * 41 + 7) % 100),
    top: ((i * 67 + 11) % 100),
    delay: ((i * 0.17) % 4).toFixed(2),
    duration: (1.5 + (i % 5) * 0.8).toFixed(1),
    size: 6 + (i % 4) * 6,
  }))
);

const PLANETS = [
  { emoji: '🪐', left: 8,  top: 12, size: 42 },
  { emoji: '🌕', left: 88, top: 8,  size: 32 },
  { emoji: '☄️', left: 75, top: 75, size: 28 },
  { emoji: '🌌', left: 5,  top: 78, size: 36 },
];

export default function App() {
  const { isPlaying, danceStyle, speed, toggle, changeDanceStyle, changeSpeed } = useAnimation();

  return (
    <main className="app">
      {/* Stars */}
      <div className="stars" aria-hidden="true">
        {BG_ITEMS.map(({ key, char, left, top, delay, duration, size }) => (
          <span
            key={key}
            className="star"
            style={{ left: `${left}%`, top: `${top}%`, animationDelay: `${delay}s`, animationDuration: `${duration}s`, fontSize: `${size}px` }}
          >
            {char}
          </span>
        ))}
      </div>

      {/* Planets */}
      <div className="planets" aria-hidden="true">
        {PLANETS.map(({ emoji, left, top, size }) => (
          <span key={emoji} className="planet" style={{ left: `${left}%`, top: `${top}%`, fontSize: `${size}px` }}>
            {emoji}
          </span>
        ))}
      </div>

      {/* Shooting star */}
      <div className="shooting-star" aria-hidden="true" />
      <div className="shooting-star shooting-star--2" aria-hidden="true" />

      <h1 className="title">
        <span className="title-emoji">🚀</span>
        우주 고양이 댄스
        <span className="title-emoji">🌌</span>
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
        {isPlaying ? '우주 고양이가 은하수에서 춤을 추고 있어요! 🌟' : '시작 버튼을 눌러 우주 고양이를 춤추게 하세요!'}
      </p>
    </main>
  );
}
