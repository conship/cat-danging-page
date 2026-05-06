import catSvg from '../assets/images/cat.svg';

const DANCE_STYLES = {
  dance:      { animation: 'dance',      duration: '0.8s'  },
  sway:       { animation: 'sway',       duration: '0.6s'  },
  jump:       { animation: 'jump',       duration: '0.7s'  },
  'spin-dance': { animation: 'spin-dance', duration: '1.2s' },
};

const NOTES = ['♪', '♫', '♬', '🎵', '🎶'];

export default function DancingCat({ isPlaying, danceStyle, speed }) {
  const style = DANCE_STYLES[danceStyle] || DANCE_STYLES.dance;
  const duration = `${parseFloat(style.duration) / speed}s`;

  const catStyle = {
    animation: isPlaying
      ? `${style.animation} ${duration} ease-in-out infinite`
      : 'none',
    willChange: 'transform',
    display: 'block',
    filter: isPlaying
      ? 'drop-shadow(0 0 20px rgba(255, 200, 50, 0.6))'
      : 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
    transition: 'filter 0.3s ease',
  };

  return (
    <div className="cat-stage">
      {/* Floating music notes */}
      {isPlaying && NOTES.map((note, i) => (
        <span
          key={i}
          className="music-note"
          style={{
            left: `${10 + i * 18}%`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${1.5 / speed}s`,
          }}
        >
          {note}
        </span>
      ))}

      {/* Spotlight */}
      <div
        className="spotlight"
        style={{ animation: isPlaying ? `spotlight ${1 / speed}s ease-in-out infinite` : 'none' }}
      />

      {/* Cat */}
      <img
        src={catSvg}
        alt="춤추는 고양이"
        style={catStyle}
        className="cat-image"
        width={200}
        height={220}
      />

      {/* Stage floor */}
      <div className="stage-floor" />
    </div>
  );
}
