import React from 'react';
import { ArrowLeft } from 'lucide-react';
import {
  COMPANY_INFO,
  CORE_CAPABILITIES,
  IMAGES,
  INDUSTRIAL_ARTICLES,
  MANUFACTURING_PROCESS_STEPS,
  PRODUCT_CATEGORIES,
} from '../data/factoryData';
import { FastenerCategorySlug, PageId } from '../types';
import { IndustrialImage } from '../components/IndustrialImage';
import { FastenerSchematic } from '../components/FastenerSchematic';
import { QuoteForm } from '../components/QuoteForm';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenProductBySlug: (slug: string) => void;
  onFilterCatalog: (categorySlug: FastenerCategorySlug | 'all') => void;
  onOpenArticle: (articleId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenProductBySlug,
  onFilterCatalog,
  onOpenArticle,
}) => {
  return (
    <div>
      {/* 1. Hero Section - Premium Dark Navy Industrial Blueprint */}
      <section className="relative bg-[#0B192C] text-white border-b border-slate-800 overflow-hidden blueprint-grid-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                <span className="bg-[#132843] border border-amber-500/30 px-2.5 py-0.5 rounded text-[#E5B85C]">
                  {COMPANY_INFO.brandName}
                </span>
                <span className="text-slate-500" aria-hidden="true">·</span>
                <span className="text-slate-300">تاسیس {COMPANY_INFO.foundedYear}</span>
                <span className="text-slate-500" aria-hidden="true">·</span>
                <span className="text-slate-300">مساحت {COMPANY_INFO.factoryArea}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold leading-[1.32] tracking-tight text-white">
                {COMPANY_INFO.slogan}
              </h1>

              <p className="text-base text-slate-300 leading-relaxed max-w-xl">
                احداث‌شده در فضایی به مساحت {COMPANY_INFO.factoryArea} با پشتوانه تجربی کارگاه تولیدی
                «{COMPANY_INFO.heritageName}»؛ توانمند در تولید انواع پیچ و مهره از سایز{' '}
                {COMPANY_INFO.sizeRange} در اشکال و ابعاد سفارشی برای بازارهای داخلی و خودکفایی صنایع
                کشور.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('quote')}
                  className="px-6 py-3.5 text-sm font-bold text-white bg-[#B48327] hover:bg-[#9A6E1D] rounded-md transition-colors shadow-lg whitespace-nowrap shrink-0 cursor-pointer"
                >
                  استعلام قیمت تولید
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('products')}
                  className="px-6 py-3.5 text-sm font-bold text-slate-200 bg-[#07111E]/80 border border-slate-700 hover:border-slate-500 hover:bg-[#07111E] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  مشاهده کاتالوگ محصولات (۳۷ قلم)
                </button>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
                <span>دفتر فروش تهران: <strong className="text-white font-mono-tech">{COMPANY_INFO.tehranPhone}</strong></span>
                <span aria-hidden="true">·</span>
                <span>کارخانه یزد: <strong className="text-white font-mono-tech">{COMPANY_INFO.factoryPhone}</strong></span>
              </div>
            </div>

            {/* Graphic Fastener Showcase (Coexisting Real Product Photo & Dark CAD Blueprint Schematics) */}
            <div className="lg:col-span-6 flex">
              <div className="w-full bg-[#07111E]/95 border border-slate-800 rounded-xl p-4 sm:p-5 shadow-2xl space-y-4">
                {/* Real Fasteners Assortment from Catalog */}
                <div className="relative aspect-[16/10] bg-[#0B192C] border border-slate-800 rounded-lg overflow-hidden flex items-center justify-center p-3">
                  <IndustrialImage
                    src={IMAGES.screwsAssortment}
                    alt="مجموعه اتصالات و پیچ‌های تولیدی صنایع پیچ سازان آراز یزد"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-[#07111E]/90 backdrop-blur-xs border border-amber-500/30 px-2.5 py-1 rounded text-xs font-mono-tech font-bold text-[#E5B85C] shadow-md">
                    M2.20 – M10
                  </div>
                </div>

                {/* Paired Graphic CAD Schematic Strip (Rich Navy CAD Blueprints) */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#0B192C] border border-slate-800 rounded-lg p-2.5 overflow-hidden flex flex-col items-center justify-center">
                    <p className="text-[11px] font-semibold text-slate-400 mb-1 w-full text-right">طراحی پیچ استوانه (DIN 8001)</p>
                    <FastenerSchematic category="cylinder-screws" compact variant="dark" className="w-full h-24 border-0 bg-transparent p-0" />
                  </div>
                  <div className="bg-[#0B192C] border border-slate-800 rounded-lg p-2.5 overflow-hidden flex flex-col items-center justify-center">
                    <p className="text-[11px] font-semibold text-slate-400 mb-1 w-full text-right">طراحی پیچ آچاری (DIN 933)</p>
                    <FastenerSchematic category="hexagon-bolts" compact variant="dark" className="w-full h-24 border-0 bg-transparent p-0" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 pt-1 border-t border-slate-800">
                  <span>کاتالوگ رسمی صنایع پیچ سازان آراز یزد</span>
                  <button
                    type="button"
                    onClick={() => onNavigate('products')}
                    className="font-semibold text-[#E5B85C] hover:underline cursor-pointer"
                  >
                    بررسی ۳۷ محصول کاتالوگ ←
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 6 Official Production Operations Strip */}
          <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { step: '۰۱', label: 'پرس‌کاری' },
              { step: '۰۲', label: 'رزوه‌کاری' },
              { step: '۰۳', label: 'سخت‌کاری' },
              { step: '۰۴', label: 'آبکاری' },
              { step: '۰۵', label: 'کنترل کیفیت' },
              { step: '۰۶', label: 'بسته‌بندی استاندارد' },
            ].map((op) => (
              <div key={op.step} className="bg-[#132843]/60 border border-slate-800/80 rounded-lg p-3 text-center space-y-0.5 hover:border-slate-700 transition-colors">
                <span className="text-xs font-mono-tech font-bold text-[#E5B85C]">{op.step}</span>
                <p className="text-sm font-bold text-white">{op.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Company Capabilities & Advantages */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-semibold text-[#9A6E1D] mb-2">
              توانمندی‌های تولید در صنایع پیچ سازان آراز یزد
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B192C]">
              تولید یکپارچه پیچ و مهره صنعتی با رعایت استانداردهای ملی و صنعتی
            </h2>
            <p className="text-slate-600 text-base mt-3 leading-relaxed">
              این مجموعه با بهره‌گیری از به‌روزترین ماشین‌آلات و کادر مهندسی و فنی مجرب، کلیه مراحل
              تولید را در داخل کارخانه انجام داده و محصولات را به بازارهای داخلی عرضه می‌نماید.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {CORE_CAPABILITIES.map((cap, idx) => {
              const spanClass = idx === 0 || idx === 3 ? 'lg:col-span-7' : 'lg:col-span-5';
              return (
                <div
                  key={cap.index}
                  className={`${spanClass} bg-slate-50 border border-slate-200 rounded-lg p-7 flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 text-xs text-slate-500 mb-4">
                      <span>{cap.highlight}</span>
                      <span className="font-mono-tech text-sm font-bold text-[#0B192C]">
                        {cap.index}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#0B192C] mb-2.5">{cap.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{cap.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Official 6 Product Categories */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold text-[#9A6E1D] mb-2">
                دسته‌بندی‌های رسمی کاتالوگ آراز یزد
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B192C]">
                گروه‌های محصولات تولیدی کارخانه
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                ۶ گروه تخصصی شامل ۳۷ محصول استاندارد و سفارشی از سایز ۲/۲۰ تا ۱۰ میلی‌متر.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onFilterCatalog('all')}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0B192C] hover:text-[#B48327] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>مشاهده تمامی ۳۷ محصول کاتالوگ</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCT_CATEGORIES.map((category, index) => (
              <article
                key={category.slug}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:border-slate-400 transition-colors duration-150 flex flex-col"
              >
                <div
                  onClick={() => onFilterCatalog(category.slug)}
                  className="aspect-[4/3] bg-slate-50 border-b border-slate-100 overflow-hidden shrink-0 cursor-pointer flex items-center justify-center p-3 group"
                >
                  <IndustrialImage
                    src={category.imageUrl}
                    alt={category.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div>
                    <div className="text-xs text-slate-500 mb-2">
                      <span className="font-mono-tech">{category.englishTitle}</span>
                      <span aria-hidden="true"> · </span>
                      <span className="tabular-nums">{category.productCount} محصول در کاتالوگ</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#0B192C]">{category.title}</h3>
                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => onFilterCatalog(category.slug)}
                      className="text-xs sm:text-sm font-semibold text-[#0B192C] hover:text-[#B48327] transition-colors whitespace-nowrap cursor-pointer"
                    >
                      مشاهده محصولات این دسته
                    </button>
                    <button
                      type="button"
                      onClick={() => onOpenProductBySlug(category.representativeProductSlug)}
                      className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors whitespace-nowrap cursor-pointer"
                    >
                      نمونه مشخصات فنی
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Factory Introduction (About Us Official Text) */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 flex">
              <div className="w-full rounded-lg overflow-hidden border border-slate-200 min-h-[320px] bg-slate-50 flex items-center justify-center p-3">
                <IndustrialImage
                  src={IMAGES.screwsAssortment}
                  alt="تولید انواع پیچ و مهره صنعتی در صنایع پیچ سازان آراز یزد"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center space-y-5">
              <p className="text-xs font-semibold text-[#9A6E1D]">
                درباره {COMPANY_INFO.brandName}
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B192C]">
                از تجربه کارگاه «{COMPANY_INFO.heritageName}» تا کارخانه ۱۰,۰۰۰ متر مربعی
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {COMPANY_INFO.aboutParagraph1}
              </p>
              <p className="text-slate-700 font-medium text-sm sm:text-base leading-relaxed">
                {COMPANY_INFO.aboutParagraph2}
              </p>
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="px-5 py-2.5 text-sm font-semibold text-white bg-[#0B192C] hover:bg-[#132843] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  معرفی کامل کارخانه
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="px-5 py-2.5 text-sm font-semibold text-[#0B192C] border border-slate-300 hover:bg-slate-50 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  اطلاعات تماس تهران و یزد
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Manufacturing Process - Deep Navy Industrial Stage */}
      <section className="py-16 lg:py-24 bg-[#0B192C] text-white border-y border-slate-800 blueprint-grid-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-semibold text-[#E5B85C] mb-2">مراحل کامل ساخت در کارخانه</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              فرآیند یکپارچه تولید در {COMPANY_INFO.brandName}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              کلیه مراحل پرس‌کاری، رزوه‌کاری، سخت‌کاری، آبکاری، کنترل کیفیت و بسته‌بندی استاندارد توسط
              کادر مهندسی و فنی مجرب مجموعه انجام می‌گیرد.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MANUFACTURING_PROCESS_STEPS.map((step) => (
              <div
                key={step.stepNumber}
                className="bg-[#07111E] border border-slate-800 rounded-xl p-6 space-y-3 shadow-lg hover:border-slate-700 transition-all"
              >
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>{step.unitName}</span>
                  <span className="font-mono-tech text-base font-bold text-[#E5B85C]">
                    {step.stepNumber}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">{step.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Quality Control & Standards */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <div>
                <p className="text-xs font-semibold text-[#9A6E1D] mb-2">
                  کنترل کیفیت و رعایت استانداردها
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B192C]">
                  تولید منطبق بر استانداردهای ملی، صنعتی و DIN کاتالوگ
                </h2>
                <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                  در صنایع پیچ سازان آراز یزد، دقت ابعادی از پیچ‌های الکتریکی بسیار ظریف (سایز M2.20
                  و M3) تا پیچ‌های آچاری شش‌گوش و مهره‌های صنعتی به صورت مستمر تحت نظارت واحد کنترل
                  کیفیت قرار دارد.
                </p>
              </div>

              <div className="divide-y divide-slate-200 border-y border-slate-200">
                {[
                  {
                    title: 'تطابق با استانداردهای DIN مندرج در کاتالوگ',
                    desc: 'تولید اقلام بر مبنای استانداردهایی نظیر DIN 8001، DIN 965، DIN 7985، DIN 920، DIN 7981، DIN 966، DIN 933، DIN 934 و DIN 985.',
                  },
                  {
                    title: 'دقت فوق‌العاده در سایزهای ظریف الکتریکی و لوازم خانگی',
                    desc: 'کنترل دقیق قطر، طول و فرم گل‌پیچ متناسب با قالب محصول مصرف‌کننده در صنعت الکتریک و لوازم خانگی.',
                  },
                  {
                    title: 'تنوع متریال و پوشش در پیچ‌های آچاری و مهره‌ها',
                    desc: 'عرضه پیچ‌های آچاری در کلاس‌های آهنی (5.6)، خشکه (8.8) و استیل با پوشش‌های گالوانیزه گرم، زینک و داکرومات و مهره‌های خودرنگ و گالوانیزه.',
                  },
                  {
                    title: 'بسته‌بندی استاندارد جهت عرضه به بازارهای داخلی',
                    desc: 'حفظ سلامت رزوه و پوشش سطحی محصولات تا لحظه تحویل به خطوط مونتاژ صنعتی.',
                  },
                ].map((item) => (
                  <div key={item.title} className="py-4">
                    <h3 className="text-sm font-bold text-[#0B192C]">{item.title}</h3>
                    <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 flex">
              <div className="w-full rounded-xl overflow-hidden border border-slate-200 min-h-[340px] bg-slate-50 flex items-center justify-center p-4">
                <IndustrialImage
                  src={IMAGES.coverShowcase}
                  alt="مجموعه اتصالات استاندارد و تاییدشده کاتالوگ آراز یزد"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Custom Manufacturing Section - Rich Navy Blue Engineering */}
      <section className="py-16 lg:py-24 bg-slate-100/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B192C] text-white border border-slate-800 rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch shadow-2xl">
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-center space-y-5">
              <div className="text-xs text-[#E5B85C] font-bold">
                <span>پیچ‌های خاص و سفارشی</span>
                <span aria-hidden="true"> · </span>
                <span className="font-mono-tech">M2.20 – M10 Custom</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                تولید تخصصی انواع پیچ‌های سفارشی مطابق نقشه مشتری
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                تولید تخصصی انواع اتصالات و پیچ‌های صنعتی سفارشی از قطر M2.20 تا M10 در تمامی طول‌ها
                و اشکال خاص مهندسی مطابق نقشه مشتری در خطوط مجهز صنایع پیچ سازان آراز یزد انجام
                می‌پذیرد.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('custom')}
                  className="px-5 py-3 text-sm font-bold text-white bg-[#B48327] hover:bg-[#9A6E1D] rounded-md transition-colors shadow-md whitespace-nowrap shrink-0 cursor-pointer"
                >
                  بخش تولید پیچ خاص و سفارشی
                </button>
                <a
                  href="#homepage-rfq"
                  className="px-5 py-3 text-sm font-bold text-slate-200 bg-[#07111E]/80 border border-slate-700 hover:border-slate-500 rounded-md transition-colors whitespace-nowrap shrink-0"
                >
                  ثبت سفارش و ارسال نقشه
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 flex items-center justify-center bg-[#07111E] border-r border-slate-800">
              <div className="w-full space-y-3">
                <div className="aspect-[16/10] bg-[#0B192C] border border-slate-800 rounded-lg p-3 flex items-center justify-center">
                  <IndustrialImage
                    src={IMAGES.customBlueprint}
                    alt="تولید پیچ‌های خاص و سفارشی از قطر M2.20 تا M10 مطابق نقشه مشتری"
                    className="w-full h-full object-contain"
                  />
                </div>
                <FastenerSchematic
                  category="custom-special-screws"
                  compact
                  variant="dark"
                  className="w-full h-24 border border-slate-800 rounded-lg bg-[#0B192C]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Latest Industrial Articles */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-xs font-semibold text-[#9A6E1D] mb-2">مطالب فنی و تخصصی</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B192C]">
                مقالات صنعتی اتصالات، پیچ و مهره
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('articles')}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0B192C] hover:text-[#B48327] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>مشاهده تمامی مقالات صنعتی</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INDUSTRIAL_ARTICLES.map((article) => (
              <article
                key={article.id}
                className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden flex flex-col justify-between hover:border-slate-400 transition-colors"
              >
                <div>
                  <div className="aspect-[4/3] overflow-hidden bg-[#0B192C]">
                    <IndustrialImage
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span>{article.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.readingTime}</span>
                    </div>
                    <h3 className="text-base font-bold text-[#0B192C] leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{article.excerpt}</p>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <button
                    type="button"
                    onClick={() => onOpenArticle(article.id)}
                    className="text-xs font-bold text-[#0B192C] hover:text-[#B48327] transition-colors cursor-pointer"
                  >
                    مطالعه کامل مقاله ←
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Quote Request Form Section */}
      <section id="homepage-rfq" className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold text-[#9A6E1D] mb-2">ثبت سفارش مستقیم کارخانه</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B192C]">
              استعلام قیمت محصولات کاتالوگ و پیچ‌های سفارشی
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              مشخصات قطعه درخواستی یا فایل نقشه مهندسی خود را ارسال فرمایید.
            </p>
          </div>

          <QuoteForm />
        </div>
      </section>
    </div>
  );
};
