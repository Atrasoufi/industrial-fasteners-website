import React from 'react';
import { QuoteForm } from '../components/QuoteForm';
import { QuotePrefill } from '../types';

interface RequestQuotePageProps {
  prefill?: QuotePrefill;
}

export const RequestQuotePage: React.FC<RequestQuotePageProps> = ({ prefill }) => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <section className="bg-[#0B192C] text-white py-12 lg:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs text-[#E5B85C] font-medium">
              <span>واحد مهندسی فروش کارخانه</span>
              <span aria-hidden="true"> · </span>
              <span>برآورد قیمت تولید مستقیم</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              فرم جامع استعلام قیمت و سفارش تولید
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              جهت دریافت پیش‌فاکتور رسمی تولید انواع پیچ استوانه‌ای، برقی، خودکار، شش‌گوش، مهره، واشر و
              یا قطعات سفارشی طبق نقشه، فرم زیر را تکمیل فرمایید.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <QuoteForm prefill={prefill} />
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-4">
              <h2 className="text-base font-bold text-[#0B192C]">
                راهنمای تسریع در پاسخگویی استعلام
              </h2>
              <ul className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <li>
                  ۱. ذکر دقیق قطر، طول و گام رزوه به کارشناسان تولید کمک می‌کند ظرفیت ماشین‌آلات را
                  سریع‌تر بررسی نمایند.
                </li>
                <li>
                  ۲. در سفارش‌های پیچ خاص و غیرمتعارف، بارگذاری نقشه فنی خوانا یا تصویر نمونه به
                  همراه ابعاد اصلی اولویت دارد.
                </li>
                <li>
                  ۳. در صورتی که قطعه نیازمند سخت‌کاری حرارتی یا آبکاری خاصی است، در بخش توضیحات فنی
                  مرقوم فرمایید.
                </li>
              </ul>
            </div>

            <div className="bg-[#0B192C] text-white rounded-lg p-6 space-y-3">
              <p className="text-xs text-[#E5B85C] font-semibold">تماس مستقیم با واحد فروش صنعتی</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                در صورت نیاز به هماهنگی تلفنی پیش از ارسال نقشه‌های حجیم یا سفارش‌های مستمر سالانه:
              </p>
              <p className="text-base font-mono-tech font-semibold text-white pt-1" dir="ltr">
                021 - 0000 0000
              </p>
              <p className="text-xs font-mono-tech text-slate-300" dir="ltr">
                rfq@sanatbast-factory.ir
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};
