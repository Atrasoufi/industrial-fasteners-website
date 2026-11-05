import React, { useState } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';

interface MessengerWidgetProps {
  phone?: string;
  baleUsername?: string;
  eitaaUsername?: string;
  rubikaUsername?: string;
}

export const MessengerWidget: React.FC<MessengerWidgetProps> = ({
  phone = '02155422186',
  baleUsername = 'arazpich',
  eitaaUsername = 'arazpich',
  rubikaUsername = 'arazpich',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">
      {isOpen && (
        <div className="flex flex-col gap-2.5 rounded-2xl border border-slate-700/60 bg-[#07111E]/95 p-3.5 shadow-2xl backdrop-blur-md transition-all duration-300">
          <span className="text-xs font-semibold text-slate-300 pb-1 border-b border-slate-700/50">
            ارتباط مستقیم و ثبت سفارش
          </span>

          {/* پیام‌رسان بله */}
          <a
            href={`https://ble.ir/${baleUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-white transition hover:bg-[#1A806A]/20 hover:text-[#28C7A0]"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#28C7A0]/20 text-[#28C7A0] font-bold text-xs">
              بله
            </span>
            <span>پیام‌رسان بله</span>
          </a>

          {/* پیام‌رسان ایتا */}
          <a
            href={`https://eitaa.com/${eitaaUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-white transition hover:bg-[#E67E22]/20 hover:text-[#F39C12]"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F39C12]/20 text-[#F39C12] font-bold text-xs">
              ایتا
            </span>
            <span>پیام‌رسان ایتا</span>
          </a>

          {/* روبیکا */}
          <a
            href={`https://rubika.ir/${rubikaUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-white transition hover:bg-[#7D3C98]/20 hover:text-[#AF7AC5]"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#AF7AC5]/20 text-[#AF7AC5] font-bold text-xs">
              روبیکا
            </span>
            <span>پیام‌رسان روبیکا</span>
          </a>

          {/* تماس مستقیم تلفنی */}
          <a
            href={`tel:${phone}`}
            className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-white transition hover:bg-emerald-500/20 hover:text-emerald-400"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
              <Phone className="h-4 w-4" />
            </span>
            <span>تماس با دفتر فروش</span>
          </a>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="پشتیبانی و پیام‌رسان‌ها"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E5B85C] text-[#07111E] shadow-xl shadow-amber-500/20 transition-transform duration-300 hover:scale-105 active:scale-95"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
};