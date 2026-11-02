import React from 'react';
import {
  COMPANY_INFO,
  IMAGES,
  MANUFACTURING_PROCESS_STEPS,
  PRODUCT_CATEGORIES,
} from '../data/factoryData';
import { PageId } from '../types';
import { IndustrialImage } from '../components/IndustrialImage';
import { FastenerSchematic } from '../components/FastenerSchematic';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-slate-50">
      {/* Page Intro Header - Rich Navy Blue Industrial */}
      <section className="bg-[#0B192C] text-white border-b border-slate-800 blueprint-grid-dark py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs text-[#E5B85C] font-bold bg-[#132843] border border-amber-500/30 px-3 py-1 rounded-full">
              <span>شناسنامه رسمی کارخانه</span>
              <span aria-hidden="true"> · </span>
              <span>احداث در سال {COMPANY_INFO.foundedYear}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              درباره {COMPANY_INFO.brandName}
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">{COMPANY_INFO.slogan}</p>
          </div>
        </div>
      </section>

      {/* Official Company History & Overview */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-6 space-y-5 flex flex-col justify-center">
              <h2 className="text-2xl font-extrabold text-[#0B192C]">
                تاریخچه شکل‌گیری و توانمندی خطوط تولید
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {COMPANY_INFO.aboutParagraph1}
              </p>
              <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed">
                {COMPANY_INFO.aboutParagraph2}
              </p>

              {/* Key Official Facts */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                  <p className="text-xs text-slate-500">سال احداث کارخانه</p>
                  <p className="text-base font-extrabold text-[#0B192C] mt-1 tabular-nums">
                    {COMPANY_INFO.foundedYear}
                  </p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                  <p className="text-xs text-slate-500">مساحت مجموعه</p>
                  <p className="text-base font-extrabold text-[#0B192C] mt-1 tabular-nums">
                    {COMPANY_INFO.factoryArea}
                  </p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg col-span-2 sm:col-span-1">
                  <p className="text-xs text-slate-500">دامنه سایز تولیدی</p>
                  <p className="text-sm font-extrabold text-[#0B192C] mt-1 tabular-nums">
                    ۲/۲۰ تا ۱۰ میلی‌متر
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('products')}
                  className="px-5 py-2.5 text-sm font-bold text-white bg-[#B48327] hover:bg-[#9A6E1D] rounded-md transition-colors cursor-pointer whitespace-nowrap shadow-xs"
                >
                  مشاهده ۳۷ محصول کاتالوگ
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('custom')}
                  className="px-5 py-2.5 text-sm font-semibold text-[#0B192C] border border-slate-300 hover:bg-slate-50 rounded-md transition-colors cursor-pointer whitespace-nowrap"
                >
                  سفارش قطعه خاص
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="w-full rounded-xl overflow-hidden border border-slate-200 bg-white p-4 shadow-xs">
                <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2 border-b border-slate-100 pb-2">
                  <span className="text-[#B48327]">محصولات متنوع صنعتی</span>
                  <span>برگرفته از کاتالوگ کارخانه</span>
                </div>
                <div className="aspect-[16/10] overflow-hidden rounded-lg">
                  <IndustrialImage
                    src={IMAGES.screwsAssortment}
                    alt="مجموعه اتصالات صنعتی صنایع پیچ سازان آراز یزد"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="bg-[#0B192C] border border-slate-800 rounded-xl p-4 blueprint-grid-dark flex items-center justify-between text-white">
                <div className="space-y-1">
                  <p className="text-xs font-bold text-white">طراحی مهندسی و انطباق DIN</p>
                  <p className="text-[11px] text-slate-400">نقشه‌کشی تخصصی انواع گل پیچ و رزوه</p>
                </div>
                <div className="w-20 h-16">
                  <FastenerSchematic category="hexagon-bolts" variant="dark" compact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Integrated Production Stages */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-semibold text-[#9A6E1D] mb-2">فرآیندهای اجرایی کارخانه</p>
            <h2 className="text-2xl font-extrabold text-[#0B192C]">
              کلیه مراحل تولید با رعایت استانداردهای ملی و صنعتی
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MANUFACTURING_PROCESS_STEPS.map((step) => (
              <div
                key={step.stepNumber}
                className="bg-white border border-slate-200 rounded-lg p-6 space-y-3"
              >
                <span className="text-xs font-mono-tech font-bold text-[#9A6E1D]">
                  {step.stepNumber}
                </span>
                <h3 className="text-base font-bold text-[#0B192C]">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview of Product Groups & Locations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="w-full rounded-xl overflow-hidden border border-slate-200 bg-white p-4 shadow-xs">
                <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2 border-b border-slate-100 pb-2">
                  <span className="text-[#B48327] font-semibold">کاتالوگ رسمی کارخانه</span>
                  <span className="font-mono-tech text-[11px] text-slate-400">Official Catalog</span>
                </div>
                <div className="aspect-[16/10] bg-slate-50 border border-slate-100 rounded-lg overflow-hidden flex items-center justify-center p-2">
                  <IndustrialImage
                    src={IMAGES.coverShowcase}
                    alt="کاتالوگ رسمی و معرفی ظرفیت‌های تولیدی صنایع پیچ سازان آراز یزد"
                    className="w-full h-full object-contain filter drop-shadow-sm"
                  />
                </div>
              </div>
              <div className="bg-[#0B192C] border border-slate-800 rounded-xl p-3.5 blueprint-grid-dark flex items-center justify-between text-white">
                <div className="space-y-0.5">
                  <span className="text-xs font-bold text-white">تامین مستقیم صنایع سراسر کشور</span>
                  <p className="text-[11px] text-slate-400 font-mono-tech">M2.20 to M10 Standard & Custom</p>
                </div>
                <div className="w-20 h-14">
                  <FastenerSchematic category="electrical-screws" variant="dark" compact />
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
              <h2 className="text-2xl font-extrabold text-[#0B192C]">
                پوشش نیاز صنایع الکتریک، لوازم خانگی، نفت و گاز و صنایع سنگین
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                سبد محصولات {COMPANY_INFO.brandName} شامل {PRODUCT_CATEGORIES.map((c) => c.title).join('، ')}{' '}
                بوده و از طریق دفتر فروش تهران و کارخانه مرکزی در شهرک صنعتی ولیعصر یزد به سراسر کشور
                عرضه می‌گردد.
              </p>
              <div className="p-5 bg-slate-50 border border-slate-200 rounded-md space-y-2 text-sm">
                <p className="font-bold text-[#0B192C]">نشانی کارخانه:</p>
                <p className="text-slate-700">{COMPANY_INFO.factoryAddress}</p>
                <p className="text-xs text-slate-500 pt-1">
                  کد پستی: {COMPANY_INFO.postalCode} · تلفن کارخانه: {COMPANY_INFO.factoryPhone} ·
                  دفتر فروش تهران: {COMPANY_INFO.tehranPhone}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
