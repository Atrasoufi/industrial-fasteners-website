import React from 'react';
import { FastenerCategorySlug } from '../types';

interface FastenerSchematicProps {
  category: FastenerCategorySlug;
  className?: string;
  variant?: 'light' | 'dark';
  compact?: boolean;
}

export const FastenerSchematic: React.FC<FastenerSchematicProps> = ({
  category,
  className = '',
  variant = 'dark',
  compact = false,
}) => {
  const isLight = variant === 'light';

  const containerClasses = isLight
    ? 'bg-slate-50 blueprint-grid border border-slate-200 text-slate-700'
    : 'bg-[#0B192C] blueprint-grid-dark text-slate-200 border border-slate-800';

  const strokeMain = isLight ? '#1E293B' : '#E2E8F0';
  const strokeSec = isLight ? '#475569' : '#94A3B8';
  const fillPrimary = isLight ? '#E2E8F0' : '#132843';
  const fillSecondary = isLight ? '#F1F5F9' : '#0F2138';
  const fillAccent = isLight ? '#CBD5E1' : '#1E3A5F';
  const accentGold = '#B48327';

  return (
    <div
      className={`relative flex flex-col items-center justify-center select-none ${
        compact ? 'p-3' : 'p-5'
      } ${containerClasses} ${className}`}
    >
      {!compact && (
        <div
          className={`w-full flex items-center justify-between text-[11px] pb-2 mb-3 border-b ${
            isLight ? 'border-slate-200 text-slate-500' : 'border-slate-800 text-slate-400'
          }`}
        >
          <span className="font-medium">نقشه مهندسی CAD</span>
          <span className="font-mono-tech text-[#B48327] font-semibold">ARAZ PICH · SPEC</span>
        </div>
      )}

      <svg
        viewBox="0 0 360 180"
        className="w-full max-w-[320px] h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Centerline */}
        <line
          x1="20"
          y1="90"
          x2="340"
          y2="90"
          stroke={accentGold}
          strokeWidth="1"
          strokeDasharray="10 4 2 4"
          opacity="0.8"
        />

        {category === 'cylinder-screws' && (
          <g strokeWidth="1.75">
            <rect x="55" y="48" width="54" height="84" rx="3" stroke={strokeMain} fill={fillPrimary} />
            <rect x="55" y="68" width="22" height="44" stroke={strokeSec} strokeDasharray="4 3" />
            <rect x="109" y="64" width="75" height="52" stroke={strokeMain} fill={fillSecondary} />
            <rect x="184" y="64" width="112" height="52" stroke={strokeMain} fill={fillSecondary} />
            {[194, 206, 218, 230, 242, 254, 266, 278, 290].map((x) => (
              <line key={x} x1={x} y1="64" x2={x - 5} y2="116" stroke={strokeSec} strokeWidth="1.25" />
            ))}
            <polygon points="296,64 306,72 306,108 296,116" stroke={strokeMain} fill={fillPrimary} />
            <line x1="55" y1="148" x2="306" y2="148" stroke={strokeSec} strokeWidth="1" />
            <line x1="55" y1="138" x2="55" y2="154" stroke={strokeSec} strokeWidth="1" />
            <line x1="306" y1="116" x2="306" y2="154" stroke={strokeSec} strokeWidth="1" />
          </g>
        )}

        {category === 'electrical-screws' && (
          <g strokeWidth="1.75">
            <path
              d="M65 52 C42 56, 42 124, 65 128 L86 128 L86 52 Z"
              stroke={strokeMain}
              fill={fillPrimary}
            />
            <rect x="46" y="84" width="16" height="12" stroke={accentGold} fill={fillSecondary} />
            <rect x="86" y="42" width="12" height="96" stroke={accentGold} fill={fillAccent} />
            <rect x="98" y="68" width="175" height="44" stroke={strokeMain} fill={fillSecondary} />
            {[108, 120, 132, 144, 156, 168, 180, 192, 204, 216, 228, 240, 252, 264].map((x) => (
              <line key={x} x1={x} y1="68" x2={x - 4} y2="112" stroke={strokeSec} strokeWidth="1.25" />
            ))}
          </g>
        )}

        {category === 'self-tapping-screws' && (
          <g strokeWidth="1.75">
            <path d="M56 54 L82 48 L82 132 L56 126 Z" stroke={strokeMain} fill={fillPrimary} />
            <rect x="82" y="44" width="8" height="92" stroke={strokeMain} fill={fillAccent} />
            <polygon
              points="90,68 258,68 310,90 258,112 90,112"
              stroke={strokeMain}
              fill={fillSecondary}
            />
            {[102, 118, 134, 150, 166, 182, 198, 214, 230, 246, 262, 278].map((x) => (
              <line
                key={x}
                x1={x}
                y1={x > 258 ? 76 : 63}
                x2={x - 6}
                y2={x > 258 ? 104 : 117}
                stroke={accentGold}
                strokeWidth="1.4"
              />
            ))}
          </g>
        )}

        {category === 'hexagon-bolts' && (
          <g strokeWidth="1.75">
            <rect x="48" y="44" width="44" height="92" stroke={strokeMain} fill={fillPrimary} />
            <line x1="48" y1="67" x2="92" y2="67" stroke={strokeSec} />
            <line x1="48" y1="113" x2="92" y2="113" stroke={strokeSec} />
            <rect x="92" y="64" width="90" height="52" stroke={strokeMain} fill={fillSecondary} />
            <rect x="182" y="64" width="118" height="52" stroke={strokeMain} fill={fillSecondary} />
            {[192, 204, 216, 228, 240, 252, 264, 276, 288].map((x) => (
              <line key={x} x1={x} y1="64" x2={x - 5} y2="116" stroke={strokeSec} strokeWidth="1.3" />
            ))}
            <polygon points="300,64 310,72 310,108 300,116" stroke={strokeMain} fill={fillPrimary} />
          </g>
        )}

        {category === 'nuts' && (
          <g strokeWidth="1.75">
            <polygon
              points="125,36 168,62 168,118 125,144 82,118 82,62"
              stroke={strokeMain}
              fill={fillPrimary}
            />
            <circle cx="125" cy="90" r="34" stroke={accentGold} strokeDasharray="5 3" />
            <circle cx="125" cy="90" r="27" stroke={strokeMain} fill={fillSecondary} />
            <rect x="220" y="38" width="56" height="104" rx="4" stroke={strokeMain} fill={fillPrimary} />
            <line x1="220" y1="63" x2="276" y2="63" stroke={strokeSec} />
            <line x1="220" y1="117" x2="276" y2="117" stroke={strokeSec} />
            <line x1="220" y1="68" x2="276" y2="68" stroke={accentGold} strokeDasharray="4 3" />
            <line x1="220" y1="112" x2="276" y2="112" stroke={accentGold} strokeDasharray="4 3" />
          </g>
        )}

        {category === 'custom-special-screws' && (
          <g strokeWidth="1.75">
            <rect x="42" y="46" width="36" height="88" stroke={strokeMain} fill={fillPrimary} />
            <rect x="78" y="56" width="58" height="68" stroke={accentGold} fill={fillAccent} />
            <rect x="136" y="66" width="74" height="48" stroke={strokeMain} fill={fillSecondary} />
            <rect x="152" y="82" width="42" height="16" rx="6" stroke={strokeSec} />
            <rect x="210" y="72" width="96" height="36" stroke={strokeMain} fill={fillSecondary} />
            {[220, 232, 244, 256, 268, 280, 292].map((x) => (
              <line key={x} x1={x} y1="72" x2={x - 4} y2="108" stroke={accentGold} strokeWidth="1.25" />
            ))}
            <line x1="78" y1="30" x2="136" y2="30" stroke={strokeSec} strokeWidth="1" />
            <line x1="78" y1="26" x2="78" y2="54" stroke={strokeSec} strokeWidth="1" />
            <line x1="136" y1="26" x2="136" y2="64" stroke={strokeSec} strokeWidth="1" />
          </g>
        )}
      </svg>

      {!compact && (
        <div
          className={`w-full flex items-center justify-between text-[11px] pt-2 mt-3 border-t ${
            isLight ? 'border-slate-200 text-slate-500' : 'border-slate-800 text-slate-400'
          }`}
        >
          <span>صنایع پیچ سازان آراز یزد</span>
          <span className="font-mono-tech">M2.20 – M10</span>
        </div>
      )}
    </div>
  );
};
