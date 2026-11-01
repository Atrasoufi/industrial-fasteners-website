import React from 'react';
import { IMAGES } from '../data/factoryData';
import { IndustrialImage } from '../components/IndustrialImage';
import { FastenerSchematic } from '../components/FastenerSchematic';
import { QuoteForm } from '../components/QuoteForm';

export const CustomManufacturingPage: React.FC = () => {
  const customWorkflow = [
    {
      step: '۰۱',
      title: 'دریافت نقشه فنی یا نمونه فیزیکی قطعه',
      detail:
        'بررسی نقشه مهندسی دو‌بعدی/سه‌بعدی یا اندازه‌برداری دقیق از نمونه ارسالی کارفرما توسط واحد مهندسی ساخت.',
    },
    {
      step: '۰۲',
      title: 'امکان‌سنجی تولید و طراحی قالب و ابزار',
      detail:
        'تعیین بهینه‌ترین روش تولید (فرم‌دهی صنعتی، تراش و عملیات تکمیلی) متناسب با تیراژ و تلرانس‌های درخواستی.',
    },
    {
      step: '۰۳',
      title: 'تولید، رزوه‌زنی، سخت‌کاری و آبکاری',
      detail:
        'اجرای کامل مراحل ساخت، رزوه‌زنی اختصاصی، عملیات حرارتی سخت‌کاری و پوشش سطحی مطابق الزامات نقشه.',
    },
    {
      step: '۰۴',
      title: 'کنترل ابعادی نهایی و تحویل محموله',
      detail:
        'بازرسی تطابق ابعاد با نقشه تاییدشده مشتری، بسته‌بندی صنعتی ایمن و ارسال به خط مونتاژ کارفرما.',
    },
  ];

  const drawingChecklist = [
    'قطرهای اسمی، مقاطع پله‌دار و تلرانس‌های عملکردی حساس',
    'طول کل قطعه، طول بخش رزوه‌دار و گام رزوه مورد نیاز',
    'فرم گل‌پیچ و نوع آچارخور یا شیار ابزار مونتاژ',
    'جنس متریال پیشنهادی یا شرایط مکانیکی کارکرد قطعه',
    'نیاز به عملیات سخت‌کاری و نوع آبکاری یا پوشش سطحی',
    'تیراژ مورد نیاز در هر نوبت سفارش و برنامه تامین دوره‌ای',
  ];

  return (
    <div className="bg-slate-50">
      {/* Hero Banner */}
      <section className="bg-[#0B192C] text-white py-14 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
              <div className="text-xs text-[#E5B85C] font-medium">
                <span>مهندسی و ساخت اختصاصی</span>
                <span aria-hidden="true"> · </span>
                <span>بر اساس نقشه و مشخصات فنی مشتری</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                تولید پیچ‌های خاص و اتصالات سفارشی صنعتی
              </h1>
              <p className="text-slate-300 text-base leading-relaxed">
                بسیاری از صنایع خودروسازی، برق، لوازم خانگی صنعتی و ماشین‌سازی نیازمند پیچ‌ها و قطعات
                اتصالی خاصی هستند که در ابعاد استاندارد بازار وجود ندارد. کارخانه ما امکان تولید
                مستقیم این قطعات را طبق نقشه فنی یا نمونه شما فراهم کرده است.
              </p>
              <div className="pt-2">
                <a
                  href="#custom-order-form"
                  className="inline-block px-6 py-3 text-sm font-bold text-white bg-[#B48327] hover:bg-[#9A6E1D] rounded-md transition-colors whitespace-nowrap"
                >
                  ارسال نقشه و ثبت استعلام ساخت سفارشی
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex">
              <div className="w-full rounded-lg overflow-hidden border border-slate-700 min-h-[280px]">
                <IndustrialImage
                  src={IMAGES.customBlueprint}
                  alt="اندازه‌گیری دقیق قطعات اتصالی سفارشی در کنار نقشه مهندسی"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Steps */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-semibold text-[#9A6E1D] mb-2">مراحل سفارش‌سازی</p>
            <h2 className="text-2xl font-extrabold text-[#0B192C]">
              روند تبدیل نقشه فنی مشتری به محصول نهایی
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customWorkflow.map((item) => (
              <div
                key={item.step}
                className="bg-slate-50 border border-slate-200 rounded-lg p-6 space-y-3"
              >
                <span className="font-mono-tech text-base font-bold text-[#9A6E1D]">
                  {item.step}
                </span>
                <h3 className="text-base font-bold text-[#0B192C]">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Drawing Preparation Guide + Schematic */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-lg p-6 sm:p-8 space-y-5">
              <h2 className="text-xl font-extrabold text-[#0B192C]">
                اطلاعات پیشنهادی در هنگام ارسال نقشه فنی
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                درج موارد زیر در فایل نقشه یا توضیحات فرم استعلام باعث می‌شود واحد مهندسی کارخانه در
                کوتاه‌ترین زمان دقیق‌ترین پیشنهاد فنی و قیمتی را ارائه نماید:
              </p>
              <ul className="space-y-3 text-sm text-slate-800">
                {drawingChecklist.map((point, idx) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="font-mono-tech text-xs font-bold text-[#9A6E1D] mt-1">
                      0{idx + 1}.
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 flex">
              <FastenerSchematic
                category="custom-screws"
                className="w-full rounded-lg border border-slate-800 min-h-[280px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Custom Quote Form */}
      <section id="custom-order-form" className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteForm
            prefill={{
              productType: 'پیچ‌های خاص و سفارشی طبق نقشه',
              notes: 'درخواست بررسی امکان‌سنجی تولید بر اساس نقشه فنی پیوست.',
            }}
          />
        </div>
      </section>
    </div>
  );
};
