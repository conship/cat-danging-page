const DANCE_OPTIONS = [
  { value: 'dance',      label: '🕺 댄스' },
  { value: 'sway',       label: '🌊 스웨이' },
  { value: 'jump',       label: '⬆️ 점프' },
  { value: 'spin-dance', label: '🌀 스핀' },
];

const SPEED_OPTIONS = [
  { value: 0.5, label: '🐢 느리게' },
  { value: 1,   label: '😺 보통' },
  { value: 1.5, label: '🐇 빠르게' },
  { value: 2,   label: '⚡ 초고속' },
];

export default function AnimationControls({ isPlaying, danceStyle, speed, onToggle, onStyleChange, onSpeedChange }) {
  return (
    <div className="controls" role="region" aria-label="애니메이션 컨트롤">
      {/* Play / Pause */}
      <button
        className={`btn btn-primary ${isPlaying ? 'playing' : 'paused'}`}
        onClick={onToggle}
        aria-label={isPlaying ? '애니메이션 정지' : '애니메이션 시작'}
      >
        {isPlaying ? '⏸ 정지' : '▶ 시작'}
      </button>

      {/* Dance style */}
      <div className="control-group">
        <label className="control-label">춤 스타일</label>
        <div className="btn-group" role="group" aria-label="춤 스타일 선택">
          {DANCE_OPTIONS.map(opt => (
            <button
              key={opt.value}
              className={`btn btn-style ${danceStyle === opt.value ? 'active' : ''}`}
              onClick={() => onStyleChange(opt.value)}
              aria-pressed={danceStyle === opt.value}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Speed */}
      <div className="control-group">
        <label className="control-label">속도</label>
        <div className="btn-group" role="group" aria-label="속도 선택">
          {SPEED_OPTIONS.map(opt => (
            <button
              key={opt.value}
              className={`btn btn-speed ${speed === opt.value ? 'active' : ''}`}
              onClick={() => onSpeedChange(opt.value)}
              aria-pressed={speed === opt.value}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
