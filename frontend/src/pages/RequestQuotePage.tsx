import React from 'react';
import { COMPANY_INFO } from '../data/factoryData';
import { QuoteForm } from '../components/QuoteForm';
import { QuotePrefill } from '../types';

interface RequestQuotePageProps {
  prefill?: QuotePrefill;
}

export const RequestQuotePage: React.FC<RequestQuotePageProps> = ({ prefill }) => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <section className="bg-[#0B192C] text-white border-b border-slate-800 blueprint-grid-dark py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs text-[#E5B85C] font-bold bg-[#132843] border border-amber-500/30 px-3 py-1 rounded-full">
              <span>{COMPANY_INFO.brandName}</span>
              <span aria-hidden="true"> · </span>
              <span>ثبت سفارش و استعلام قیمت تولید</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              فرم استعلام قیمت پیچ، مهره و اتصالات سفارشی
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              جهت استعلام قیمت ۳۷ محصول کاتالوگ (استوانه، الکتریکی، خودکار، آچاری، مهره و خاص) و یا
              سفارش تولید پیچ‌های سفارشی از سایز ۲/۲۰ تا ۱۰ میلی‌متر طبق نقشه مشتری، فرم زیر را تکمیل
              نمایید.
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
              <h2 className="text-base font-bold text-[#0B192C]">راهنمای ثبت سفارش سریع‌تر</h2>
              <ul className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <li>
                  ۱. برای محصولات موجود در کاتالوگ، انتخاب نام محصول و کد استاندارد DIN مربوطه دقت
                  بررسی را افزایش می‌دهد.
                </li>
                <li>
                  ۲. برای پیچ‌های خاص و سفارشی (در بازه M2.20 تا M10)، بارگذاری فایل نقشه مهندسی مشتری
                  توصیه می‌شود.
                </li>
                <li>
                  ۳. در صورت نیاز به کلاس مقاومتی، متریال یا پوشش آبکاری خاص، جزئیات را در بخش
                  توضیحات فنی درج فرمایید.
                </li>
              </ul>
            </div>

            <div className="bg-[#0B192C] text-white rounded-lg p-6 space-y-3">
              <p className="text-xs text-[#E5B85C] font-semibold">تماس تلفنی مستقیم</p>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-slate-400 text-xs block">دفتر فروش تهران:</span>
                  <a
                    href={COMPANY_INFO.tehranPhoneHref}
                    className="font-bold text-white hover:text-[#E5B85C] tabular-nums"
                  >
                    {COMPANY_INFO.tehranPhone}
                  </a>
                </div>
                <div>
                  <span className="text-slate-400 text-xs block">تلفن کارخانه (یزد):</span>
                  <a
                    href={COMPANY_INFO.factoryPhoneHref}
                    className="font-bold text-white hover:text-[#E5B85C] tabular-nums"
                  >
                    {COMPANY_INFO.factoryPhone}
                  </a>
                </div>
                <div className="pt-1 border-t border-slate-800 text-xs text-slate-300 leading-relaxed">
                  {COMPANY_INFO.factoryAddress}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};
