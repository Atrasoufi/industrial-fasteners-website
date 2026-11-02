import React from 'react';
import {
  CATEGORY_DESCRIPTIONS,
  COMPANY_INFO,
  IMAGES,
  PRODUCTS_CATALOG,
} from '../data/factoryData';
import { ProductItem } from '../types';
import { IndustrialImage } from '../components/IndustrialImage';
import { FastenerSchematic } from '../components/FastenerSchematic';
import { QuoteForm } from '../components/QuoteForm';

interface CustomManufacturingPageProps {
  onOpenProduct?: (product: ProductItem) => void;
}

export const CustomManufacturingPage: React.FC<CustomManufacturingPageProps> = ({
  onOpenProduct,
}) => {
  const specialCatalogItems = PRODUCTS_CATALOG.filter(
    (p) => p.categorySlug === 'custom-special-screws'
  );

  const customWorkflow = [
    {
      step: '۰۱',
      title: 'بررسی نقشه مهندسی مشتری (M2.20 تا M10)',
      detail:
        'دریافت نقشه و مشخصات ابعادی پیچ یا اتصال صنعتی در محدوده قطر ۲/۲۰ تا ۱۰ میلی‌متر توسط کادر فنی و مهندسی مجموعه.',
    },
    {
      step: '۰۲',
      title: 'پرس‌کاری و رزوه‌کاری دقیق',
      detail:
        'تولید انواع اشکال خاص گل‌پیچ و ساقه با ماشین‌آلات مدرن پرس‌کاری و رزوه‌کاری در فضای تولیدی ۱۰,۰۰۰ متر مربعی کارخانه.',
    },
    {
      step: '۰۳',
      title: 'سخت‌کاری و آبکاری استاندارد',
      detail:
        'اجرای فرآیندهای تکمیلی سخت‌کاری و آبکاری با رعایت استانداردهای ملی و صنعتی متناسب با سفارش مشتری.',
    },
    {
      step: '۰۴',
      title: 'کنترل کیفیت و بسته‌بندی استاندارد',
      detail:
        'بازرسی نهایی ابعاد و سلامت رزوه و عرضه مستقیم محصول با بسته‌بندی استاندارد به صنایع مصرف‌کننده.',
    },
  ];

  return (
    <div className="bg-slate-50">
      {/* Hero Banner - Rich Navy Blue Industrial Engineering */}
      <section className="bg-[#0B192C] text-white border-b border-slate-800 blueprint-grid-dark py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
              <div className="inline-flex items-center gap-2 text-xs text-[#E5B85C] font-bold bg-[#132843] border border-amber-500/30 px-3 py-1 rounded-full w-fit">
                <span>{COMPANY_INFO.brandName}</span>
                <span aria-hidden="true"> · </span>
                <span className="font-mono-tech">M2.20 – M10 Custom Engineering</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                تولید تخصصی پیچ‌های خاص و سفارشی مطابق نقشه مشتری
              </h1>
              <p className="text-slate-300 text-base leading-relaxed">
                {CATEGORY_DESCRIPTIONS['custom-special-screws']} این واحد تولیدی با توانایی تولید از
                سایز ۲/۲۰ تا ۱۰ میلی‌متر در اشکال و ابعاد سفارشی، در راستای خودکفایی صنایع کشور گام
                برمی‌دارد.
              </p>
              <div className="pt-2">
                <a
                  href="#custom-order-form"
                  className="inline-block px-6 py-3 text-sm font-bold text-white bg-[#B48327] hover:bg-[#9A6E1D] rounded-md transition-colors whitespace-nowrap shadow-lg"
                >
                  ارسال نقشه و استعلام تولید پیچ خاص
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="bg-[#07111E] border border-slate-800 rounded-xl p-4 shadow-xl">
                <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-2 border-b border-slate-800 pb-2">
                  <span className="text-[#E5B85C]">نقشه ساخت و قطعه نمونه</span>
                  <span className="font-mono-tech text-[11px] text-slate-400">CAD Drafting</span>
                </div>
                <div className="aspect-[16/10] overflow-hidden rounded-lg bg-[#0B192C] border border-slate-800 flex items-center justify-center p-3">
                  <IndustrialImage
                    src={IMAGES.customBlueprint}
                    alt="تولید پیچ‌های خاص و سفارشی از M2.20 تا M10 در صنایع پیچ سازان آراز یزد"
                    className="w-full h-full object-contain filter drop-shadow-md"
                  />
                </div>
              </div>

              <div className="bg-[#0B192C] border border-slate-800 rounded-xl p-3 blueprint-grid-dark flex items-center justify-between text-white">
                <div className="space-y-0.5">
                  <span className="text-xs font-bold text-white">طراحی CAD قطعات خاص</span>
                  <p className="text-[11px] text-slate-400 font-mono-tech">M2.20 to M10 Standard & Non-standard</p>
                </div>
                <div className="w-24 h-16">
                  <FastenerSchematic category="custom-special-screws" variant="dark" compact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Steps */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-semibold text-[#9A6E1D] mb-2">فرآیند تولید سفارشی</p>
            <h2 className="text-2xl font-extrabold text-[#0B192C]">
              مراحل ساخت اتصالات سفارشی در آراز یزد
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

      {/* Official Special Screws Listed in Catalog (Rows 22-29) */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-lg p-6 sm:p-8 space-y-5">
              <div>
                <h2 className="text-xl font-extrabold text-[#0B192C]">
                  نمونه پیچ‌های خاص موجود در کاتالوگ کارخانه
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  علاوه بر امکان ساخت هرگونه پیچ سفارشی از M2.20 تا M10 طبق نقشه، اقلام خاص زیر نیز در
                  کاتالوگ رسمی کارخانه تولید می‌شوند:
                </p>
              </div>

              <div className="divide-y divide-slate-200 border border-slate-200 rounded-md">
                {specialCatalogItems.map((item) => (
                  <div
                    key={item.id}
                    className="px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm"
                  >
                    <div>
                      <span className="text-xs text-slate-400 ml-2">ردیف {item.catalogRowFa}:</span>
                      {onOpenProduct ? (
                        <button
                          type="button"
                          onClick={() => onOpenProduct(item)}
                          className="font-bold text-[#0B192C] hover:text-[#B48327] transition-colors cursor-pointer"
                        >
                          {item.name}
                        </button>
                      ) : (
                        <span className="font-bold text-[#0B192C]">{item.name}</span>
                      )}
                    </div>
                    <div className="text-xs font-mono-tech text-slate-600">
                      {item.dinStandard} · {item.diameterOrSize} · {item.lengthOrHeight}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex">
              <FastenerSchematic
                category="custom-special-screws"
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
              productType: 'پیچ‌های خاص و سفارشی',
              notes: 'درخواست تولید پیچ سفارشی (محدوده M2.20 تا M10) مطابق نقشه مشتری.',
            }}
          />
        </div>
      </section>
    </div>
  );
};
