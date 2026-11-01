import React from 'react';
import { IMAGES, MANUFACTURING_PROCESS_STEPS } from '../data/factoryData';
import { PageId } from '../types';
import { IndustrialImage } from '../components/IndustrialImage';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const departments = [
    {
      title: 'واحد تولید صنعتی و فرم‌دهی',
      description:
        'تولید مستقیم انواع پیچ استوانه‌ای، پیچ برقی، پیچ خودکار، پیچ شش‌گوش، مهره و واشر از مفتول و مقاطع فلزی با یکنواختی ابعادی در تیراژهای صنعتی.',
    },
    {
      title: 'واحد رزوه‌زنی',
      description:
        'اجرای رزوه‌زنی دقیق خارجی و داخلی با کنترل گام، زاویه و صافی سطح دنده‌ها جهت اطمینان از مونتاژ بی‌نقص در خطوط تولید مشتریان.',
    },
    {
      title: 'واحد سخت‌کاری و عملیات حرارتی',
      description:
        'تنظیم خواص مکانیکی و مقاومت سایشی قطعات اتصالی متناسب با نوع فولاد و کاربری صنعتی تعریف‌شده توسط کارفرما.',
    },
    {
      title: 'واحد آبکاری و پوشش سطحی',
      description:
        'اعمال پوشش‌های محافظ سطحی مطابق سفارش مشتری به منظور ارتقای دوام قطعه در برابر رطوبت و شرایط محیطی صنعتی.',
    },
    {
      title: 'واحد کنترل کیفیت',
      description:
        'بازرسی مستمر ابعاد هندسی، صحت رزوه، سختی و پوشش سطحی از مرحله شروع تولید تا تایید خروج محموله.',
    },
    {
      title: 'واحد بسته‌بندی صنعتی',
      description:
        'شمارش دقیق، بسته‌بندی مقاوم و درج کامل مشخصات فنی سفارش روی کارتن‌ها و پالت‌ها برای جابه‌جایی و انبارش ایمن.',
    },
  ];

  return (
    <div className="bg-slate-50">
      {/* Page Intro Header */}
      <section className="bg-[#0B192C] text-white py-14 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs text-[#E5B85C] font-medium">
              <span>درباره کارخانه</span>
              <span aria-hidden="true"> · </span>
              <span>تولیدکننده مستقیم اتصالات صنعتی</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              کارخانه تولیدی صنعت‌بست ایرانیان؛ تمرکز بر مهندسی ساخت و تولید مستقیم
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              ما صرفاً یک واحد فروش یا بازرگانی نیستیم؛ هویت مجموعه ما بر پایه خطوط تولید صنعتی،
              رزوه‌زنی، سخت‌کاری، آبکاری، کنترل کیفیت و ساخت قطعات اتصالی سفارشی طبق نقشه مشتریان شکل
              گرفته است.
            </p>
          </div>
        </div>
      </section>

      {/* Factory Story & Direct Manufacturer Distinction */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-6 space-y-5 flex flex-col justify-center">
              <h2 className="text-2xl font-extrabold text-[#0B192C]">
                چرا خرید مستقیم از کارخانه برای صنایع اهمیت دارد؟
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                در پروژه‌های صنعتی و خطوط مونتاژ سری‌کاری، نوسان کیفیت یا عدم تطابق رزوه در محموله‌های
                متفرقه بازار باعث توقف خط تولید و خسارت‌های فنی می‌شود. ارتباط مستقیم با کارخانه
                تولیدکننده این اطمینان را ایجاد می‌کند که متریال اولیه، فرآیند رزوه‌زنی، عملیات
                سخت‌کاری و نوع آبکاری دقیقاً بر اساس نیاز فنی شما تنظیم و تکرارپذیر باشد.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                علاوه بر تولید مستمر پیچ‌های استوانه‌ای، برقی، خودکار، شش‌گوش، مهره و واشر، واحد فنی
                کارخانه آماده بررسی نقشه‌های مهندسی و تولید پیچ‌های خاص و سفارشی متناسب با خطوط مونتاژ
                اختصاصی کارفرمایان است.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('quote')}
                  className="px-5 py-2.5 text-sm font-bold text-white bg-[#B48327] hover:bg-[#9A6E1D] rounded-md transition-colors cursor-pointer whitespace-nowrap"
                >
                  استعلام قیمت از کارخانه
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('gallery')}
                  className="px-5 py-2.5 text-sm font-semibold text-[#0B192C] border border-slate-300 hover:bg-slate-50 rounded-md transition-colors cursor-pointer whitespace-nowrap"
                >
                  مشاهده گالری کارخانه
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 flex">
              <div className="w-full rounded-lg overflow-hidden border border-slate-200 min-h-[320px]">
                <IndustrialImage
                  src={IMAGES.factoryHero}
                  alt="نمای داخلی سالن تولید کارخانه صنعت‌بست ایرانیان"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Units Grid */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-semibold text-[#9A6E1D] mb-2">بخش‌های عملیاتی کارخانه</p>
            <h2 className="text-2xl font-extrabold text-[#0B192C]">
              واحدهای تخصصی خط تولید و تکمیل‌کاری
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <div
                key={dept.title}
                className="bg-white border border-slate-200 rounded-lg p-6 space-y-3"
              >
                <span className="text-xs font-mono-tech font-bold text-[#9A6E1D]">
                  ۰{index + 1}
                </span>
                <h3 className="text-base font-bold text-[#0B192C]">{dept.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Process Summary */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-5 flex">
              <div className="w-full rounded-lg overflow-hidden border border-slate-200 min-h-[300px]">
                <IndustrialImage
                  src={IMAGES.qualityPlating}
                  alt="واحد کنترل کیفیت و خط آبکاری صنعتی"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
              <h2 className="text-2xl font-extrabold text-[#0B192C]">
                انضباط مهندسی در کنترل کیفیت و بسته‌بندی
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                تمامی سفارش‌ها بر مبنای مشخصات فنی توافق‌شده با خریدار تولید و کنترل می‌شوند. از
                کنترل قطر و طول تا تست گام رزوه و بررسی پوشش سطحی، هدف ما تحویل محموله‌ای یکدست و
                آماده مصرف در خط مونتاژ مشتری است.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {MANUFACTURING_PROCESS_STEPS.slice(0, 4).map((step) => (
                  <div key={step.stepNumber} className="p-4 bg-slate-50 border border-slate-200 rounded-md">
                    <p className="text-xs text-slate-500">{step.unitName}</p>
                    <p className="text-sm font-bold text-[#0B192C] mt-1">{step.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
