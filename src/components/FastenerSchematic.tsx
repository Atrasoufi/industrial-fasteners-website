import React from 'react';
import { FastenerCategorySlug } from '../types';

interface FastenerSchematicProps {
  category: FastenerCategorySlug;
  className?: string;
}

export const FastenerSchematic: React.FC<FastenerSchematicProps> = ({
  category,
  className = '',
}) => {
  return (
    <div
      className={`relative bg-[#0B192C] blueprint-grid-dark text-slate-200 flex flex-col items-center justify-center p-6 select-none ${className}`}
    >
      <div className="w-full flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800 pb-2 mb-4">
        <span>نمای شماتیک مهندسی</span>
        <span className="font-mono-tech text-[#B48327]">CAD · ORTHOGRAPHIC</span>
      </div>

      <svg
        viewBox="0 0 360 180"
        className="w-full max-w-[320px] h-auto stroke-slate-200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Center Axis Line */}
        <line
          x1="20"
          y1="90"
          x2="340"
          y2="90"
          stroke="#B48327"
          strokeWidth="1"
          strokeDasharray="10 4 2 4"
          opacity="0.75"
        />

        {category === 'cylindrical-screws' && (
          <g strokeWidth="1.75">
            {/* Socket Cylindrical Head */}
            <rect x="55" y="48" width="54" height="84" rx="3" stroke="#E2E8F0" fill="#132843" />
            <rect x="55" y="68" width="22" height="44" stroke="#94A3B8" strokeDasharray="4 3" />
            {/* Shank */}
            <rect x="109" y="64" width="75" height="52" stroke="#E2E8F0" fill="#0F2138" />
            {/* Threaded Section */}
            <rect x="184" y="64" width="112" height="52" stroke="#E2E8F0" fill="#0F2138" />
            {[194, 206, 218, 230, 242, 254, 266, 278, 290].map((x) => (
              <line key={x} x1={x} y1="64" x2={x - 5} y2="116" stroke="#94A3B8" strokeWidth="1.25" />
            ))}
            {/* Chamfer end */}
            <polygon points="296,64 306,72 306,108 296,116" stroke="#E2E8F0" fill="#132843" />
            {/* Dimension markers */}
            <line x1="55" y1="148" x2="306" y2="148" stroke="#64748B" strokeWidth="1" />
            <line x1="55" y1="138" x2="55" y2="154" stroke="#64748B" strokeWidth="1" />
            <line x1="306" y1="116" x2="306" y2="154" stroke="#64748B" strokeWidth="1" />
          </g>
        )}

        {category === 'electrical-screws' && (
          <g strokeWidth="1.75">
            {/* Pan Head with Slot + Captive Washer */}
            <path
              d="M65 52 C42 56, 42 124, 65 128 L86 128 L86 52 Z"
              stroke="#E2E8F0"
              fill="#132843"
            />
            <rect x="46" y="84" width="16" height="12" stroke="#B48327" fill="#0B192C" />
            {/* Captive terminal square/flat washer */}
            <rect x="86" y="42" width="12" height="96" stroke="#B48327" fill="#1E3A5F" />
            {/* Precision Full Thread */}
            <rect x="98" y="68" width="175" height="44" stroke="#E2E8F0" fill="#0F2138" />
            {[108, 120, 132, 144, 156, 168, 180, 192, 204, 216, 228, 240, 252, 264].map((x) => (
              <line key={x} x1={x} y1="68" x2={x - 4} y2="112" stroke="#94A3B8" strokeWidth="1.25" />
            ))}
          </g>
        )}

        {category === 'self-tapping-screws' && (
          <g strokeWidth="1.75">
            {/* Flange / Pan Head */}
            <path d="M56 54 L82 48 L82 132 L56 126 Z" stroke="#E2E8F0" fill="#132843" />
            <rect x="82" y="44" width="8" height="92" stroke="#E2E8F0" fill="#1E3A5F" />
            {/* Tapered Self-Tapping Body */}
            <polygon
              points="90,68 258,68 310,90 258,112 90,112"
              stroke="#E2E8F0"
              fill="#0F2138"
            />
            {[102, 118, 134, 150, 166, 182, 198, 214, 230, 246, 262, 278].map((x) => (
              <line
                key={x}
                x1={x}
                y1={x > 258 ? 76 : 63}
                x2={x - 6}
                y2={x > 258 ? 104 : 117}
                stroke="#B48327"
                strokeWidth="1.4"
              />
            ))}
          </g>
        )}

        {category === 'hex-bolts' && (
          <g strokeWidth="1.75">
            {/* Hex Head */}
            <rect x="48" y="44" width="44" height="92" stroke="#E2E8F0" fill="#132843" />
            <line x1="48" y1="67" x2="92" y2="67" stroke="#94A3B8" />
            <line x1="48" y1="113" x2="92" y2="113" stroke="#94A3B8" />
            {/* Unthreaded Grip */}
            <rect x="92" y="64" width="90" height="52" stroke="#E2E8F0" fill="#0F2138" />
            {/* Threaded Portion */}
            <rect x="182" y="64" width="118" height="52" stroke="#E2E8F0" fill="#0F2138" />
            {[192, 204, 216, 228, 240, 252, 264, 276, 288].map((x) => (
              <line key={x} x1={x} y1="64" x2={x - 5} y2="116" stroke="#94A3B8" strokeWidth="1.3" />
            ))}
            <polygon points="300,64 310,72 310,108 300,116" stroke="#E2E8F0" fill="#132843" />
          </g>
        )}

        {category === 'nuts' && (
          <g strokeWidth="1.75">
            {/* Front Hex View */}
            <polygon
              points="125,36 168,62 168,118 125,144 82,118 82,62"
              stroke="#E2E8F0"
              fill="#132843"
            />
            <circle cx="125" cy="90" r="34" stroke="#B48327" strokeDasharray="5 3" />
            <circle cx="125" cy="90" r="27" stroke="#E2E8F0" fill="#0B192C" />
            {/* Side Section View */}
            <rect x="220" y="38" width="56" height="104" rx="4" stroke="#E2E8F0" fill="#132843" />
            <line x1="220" y1="63" x2="276" y2="63" stroke="#94A3B8" />
            <line x1="220" y1="117" x2="276" y2="117" stroke="#94A3B8" />
            <line x1="220" y1="68" x2="276" y2="68" stroke="#B48327" strokeDasharray="4 3" />
            <line x1="220" y1="112" x2="276" y2="112" stroke="#B48327" strokeDasharray="4 3" />
          </g>
        )}

        {category === 'washers' && (
          <g strokeWidth="1.75">
            {/* Outer & Inner Ring */}
            <circle cx="130" cy="90" r="54" stroke="#E2E8F0" fill="#132843" />
            <circle cx="130" cy="90" r="26" stroke="#E2E8F0" fill="#0B192C" />
            {/* Cross Section Side View */}
            <rect x="242" y="36" width="18" height="108" stroke="#E2E8F0" fill="#132843" />
            <rect x="242" y="64" width="18" height="52" stroke="#B48327" fill="#0B192C" />
          </g>
        )}

        {category === 'custom-screws' && (
          <g strokeWidth="1.75">
            {/* Stepped Special Shaft / Custom Fastener */}
            <rect x="42" y="46" width="36" height="88" stroke="#E2E8F0" fill="#132843" />
            <rect x="78" y="56" width="58" height="68" stroke="#B48327" fill="#162E4D" />
            <rect x="136" y="66" width="74" height="48" stroke="#E2E8F0" fill="#0F2138" />
            <rect x="152" y="82" width="42" height="16" rx="6" stroke="#94A3B8" />
            <rect x="210" y="72" width="96" height="36" stroke="#E2E8F0" fill="#0F2138" />
            {[220, 232, 244, 256, 268, 280, 292].map((x) => (
              <line key={x} x1={x} y1="72" x2={x - 4} y2="108" stroke="#B48327" strokeWidth="1.25" />
            ))}
            {/* Tolerance Callout Lines */}
            <line x1="78" y1="30" x2="136" y2="30" stroke="#94A3B8" strokeWidth="1" />
            <line x1="78" y1="26" x2="78" y2="54" stroke="#94A3B8" strokeWidth="1" />
            <line x1="136" y1="26" x2="136" y2="64" stroke="#94A3B8" strokeWidth="1" />
          </g>
        )}
      </svg>

      <div className="w-full flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800 pt-2 mt-4">
        <span>تولید بر اساس نقشه و سفارش مشتری</span>
        <span className="font-mono-tech">SCALE · CUSTOM</span>
      </div>
    </div>
  );
};
