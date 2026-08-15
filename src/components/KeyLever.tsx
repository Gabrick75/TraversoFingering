import { memo, type ReactNode } from 'react';

export type KeyKind = 'b-thumb' | 'bb-thumb' | 'foot' | 'eb' | 'gsharp' | 'trill';

const SHAPES: Record<KeyKind, ReactNode> = {
  'b-thumb': (
    <g>
      <rect x="3" y="0" width="16" height="10" rx="3" className="kp-touch" />
      <rect x="8" y="10" width="6" height="18" rx="1" className="kp-rod" />
      <path d="M6 28h10l-2 6H8z" className="kp-bracket" />
      <circle cx="11" cy="38" r="7" className="kp-pad" />
    </g>
  ),
  'bb-thumb': (
    <g>
      <path d="M1 0h13l6 6v4H1z" className="kp-touch" />
      <rect x="8" y="10" width="6" height="18" rx="1" className="kp-rod" />
      <path d="M6 28h10l-2 6H8z" className="kp-bracket" />
      <circle cx="11" cy="38" r="7" className="kp-pad" />
    </g>
  ),
  foot: (
    <g>
      <rect x="15" y="1" width="8" height="6" rx="2" className="kp-touch" />
      <path d="M15 7c-5 1-11 3-12 9h5c2-2 4-3 7-3z" className="kp-arm" />
      <circle cx="7" cy="30" r="7" className="kp-pad" />
    </g>
  ),
  eb: (
    <g>
      <rect x="1" y="2" width="10" height="5" rx="2" className="kp-touch" />
      <rect x="4" y="7" width="5" height="22" rx="1.5" className="kp-rod" />
      <circle cx="6.5" cy="34" r="4" className="kp-pad" />
    </g>
  ),
  gsharp: (
    <g>
      <rect x="1" y="0" width="13" height="7" rx="3" className="kp-touch" />
      <rect x="5" y="7" width="5" height="14" rx="1" className="kp-rod" />
      <circle cx="7.5" cy="27" r="5.5" className="kp-pad" />
    </g>
  ),
  trill: (
    <g>
      <circle cx="8" cy="8" r="5.5" className="kp-pad" />
    </g>
  ),
};

const VIEWBOX: Record<KeyKind, string> = {
  'b-thumb': '0 0 22 46',
  'bb-thumb': '0 0 22 46',
  foot: '0 0 24 40',
  eb: '0 0 12 40',
  gsharp: '0 0 15 34',
  trill: '0 0 16 16',
};

export interface KeyLeverProps {
  kind: KeyKind;
  label?: string;
  pressed: boolean;
  className?: string;
}

function KeyLever({ kind, label, pressed, className = '' }: KeyLeverProps) {
  const stateLabel = `${label ?? 'key'} ${pressed ? 'pressed' : 'not pressed'}`;
  return (
    <span
      className={`key-lever ${className}${pressed ? ' is-pressed' : ''}`}
      title={stateLabel}
      aria-label={stateLabel}
    >
      <svg
        viewBox={VIEWBOX[kind]}
        className={`key-lever-svg key-${kind}`}
        focusable="false"
        aria-hidden="true"
      >
        {SHAPES[kind]}
      </svg>
      {label ? <span className="key-lever-label">{label}</span> : null}
    </span>
  );
}

KeyLever.displayName = 'KeyLever';

export default memo(KeyLever);
