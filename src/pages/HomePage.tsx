import React from 'react';
import { ArrowLeft } from 'lucide-react';
import {
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
  onOpenProductById: (productId: string) => void;
  onFilterCatalog: (categorySlug: FastenerCategorySlug | 'all') => void;
  onOpenArticle: (articleId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenProductById,
  onFilterCatalog,
  onOpenArticle,
}) => {
  return (
    <div>
      {/* 1. Hero Section */}
      <section className="relative bg-[#0B192C] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#E5B85C] font-medium">
                <span>کارخانه تولیدی مستقیم</span>
                <span aria-hidden="true">·</span>
                <span>تامین تخصصی صنایع کشور</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.3] tracking-tight text-white">
                تولید صنعتی انواع پیچ، مهره، واشر و اتصالات سفارشی طبق نقشه
              </h1>

              <p className="text-base text-slate-300 leading-relaxed max-w-xl">
                ما یک واحد تولیدکننده صنعتی هستیم؛ از فرم‌دهی اولیه، رزوه‌زنی و سخت‌کاری تا آبکاری،
                کنترل کیفیت دقیق و بسته‌بندی نهایی، سفارش‌های استاندارد و پیچ‌های خاص را مستقیماً در
                خط تولید کارخانه اجرا می‌کنیم.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('quote')}
                  className="px-6 py-3.5 text-sm font-bold text-white bg-[#B48327] hover:bg-[#9A6E1D] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  استعلام قیمت تولید
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('products')}
                  className="px-6 py-3.5 text-sm font-semibold text-slate-100 border border-slate-600 hover:border-slate-400 hover:bg-slate-800/50 rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  مشاهده کاتالوگ محصولات
                </button>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
                <span>ارسال مستقیم از کارخانه</span>
                <span aria-hidden="true">·</span>
                <span>تولید بر اساس نقشه فنی مشتری</span>
                <span aria-hidden="true">·</span>
                <span>واحد کنترل کیفیت و آبکاری یکپارچه</span>
              </div>
            </div>

            <div className="lg:col-span-6 flex">
              <div className="relative w-full min-h-[300px] sm:min-h-[380px] lg:h-full rounded-lg overflow-hidden border border-slate-700/80">
                <IndustrialImage
                  src={IMAGES.factoryHero}
                  alt="سالن تولید صنعتی پیچ و مهره و خطوط فرم‌دهی مفتول فولادی"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111E]/85 via-[#07111E]/20 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs text-slate-300">خطوط تولید و فرم‌دهی صنعتی</p>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      ظرفیت تولید مستمر سفارش‌های سری‌کاری و اختصاصی B2B
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onNavigate('gallery')}
                    className="text-xs font-medium text-[#E5B85C] hover:underline whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    مشاهده گالری کارخانه
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Full-width Industrial Operations Strip below Hero Split */}
          <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { step: '۰۱', label: 'تولید صنعتی' },
              { step: '۰۲', label: 'رزوه‌زنی دقیق' },
              { step: '۰۳', label: 'عملیات سخت‌کاری' },
              { step: '۰۴', label: 'آبکاری صنعتی' },
              { step: '۰۵', label: 'کنترل کیفیت' },
              { step: '۰۶', label: 'بسته‌بندی ایمن' },
            ].map((op) => (
              <div key={op.step} className="space-y-1">
                <span className="text-xs font-mono-tech text-[#E5B85C]">{op.step}</span>
                <p className="text-sm font-semibold text-slate-100">{op.label}</p>
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
              مزیت همکاری مستقیم با کارخانه تولیدکننده
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B192C]">
              تامین پایدار اتصالات صنعتی با نظارت کامل بر زنجیره ساخت
            </h2>
            <p className="text-slate-600 text-base mt-3 leading-relaxed">
              برخلاف واسطه‌های بازرگانی، تمامی مراحل شکل‌دهی، رزوه‌زنی، سخت‌کاری، پوشش‌دهی سطحی و
              کنترل ابعادی تحت مدیریت فنی کارخانه و منطبق با خواسته سفارش‌دهنده انجام می‌گیرد.
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

      {/* 3. Product Categories (All 7 Categories from Brief) */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold text-[#9A6E1D] mb-2">سبد تولیدات کارخانه</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B192C]">
                گروه‌های محصولی و اتصالات قابل تولید
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                هر یک از گروه‌های زیر را برای مشاهده مشخصات فنی یا ثبت استعلام تولید انتخاب نمایید.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onFilterCatalog('all')}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0B192C] hover:text-[#B48327] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>مشاهده کاتالوگ کامل محصولات</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCT_CATEGORIES.map((category, index) => {
              const isCustomCard = category.slug === 'custom-screws';
              return (
                <article
                  key={category.slug}
                  className={`${
                    isCustomCard ? 'md:col-span-2 lg:col-span-3' : ''
                  } bg-white border border-slate-200 rounded-lg overflow-hidden hover:border-slate-400 transition-colors duration-150 flex flex-col ${
                    isCustomCard ? 'lg:flex-row' : ''
                  }`}
                >
                  <div
                    className={`${
                      isCustomCard ? 'lg:w-5/12 aspect-[16/10] lg:aspect-auto' : 'aspect-[4/3]'
                    } bg-[#0B192C] overflow-hidden shrink-0`}
                  >
                    {index % 2 === 1 && !isCustomCard ? (
                      <FastenerSchematic category={category.slug} className="w-full h-full" />
                    ) : (
                      <IndustrialImage
                        src={category.imageUrl}
                        alt={category.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                    <div>
                      <div className="text-xs text-slate-500 mb-2">
                        <span>گروه تولیدی</span>
                        <span aria-hidden="true"> · </span>
                        <span>تولید مستقیم کارخانه</span>
                      </div>
                      <h3 className="text-lg font-bold text-[#0B192C]">{category.title}</h3>
                      <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                        {category.subtitle}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                      <button
                        type="button"
                        onClick={() => onOpenProductById(category.representativeProductId)}
                        className="text-xs sm:text-sm font-semibold text-[#0B192C] hover:text-[#B48327] transition-colors whitespace-nowrap cursor-pointer"
                      >
                        مشاهده مشخصات فنی
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          isCustomCard ? onNavigate('custom') : onFilterCatalog(category.slug)
                        }
                        className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors whitespace-nowrap cursor-pointer"
                      >
                        {isCustomCard ? 'فرآیند ساخت سفارشی' : 'فیلتر در کاتالوگ'}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Factory Introduction */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 flex">
              <div className="w-full rounded-lg overflow-hidden border border-slate-200 min-h-[320px]">
                <IndustrialImage
                  src={IMAGES.hexBoltsNuts}
                  alt="تولیدات پیچ شش‌گوش، مهره و واشر صنعتی در کارخانه صنعت‌بست ایرانیان"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center space-y-5">
              <p className="text-xs font-semibold text-[#9A6E1D]">معرفی کارخانه</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B192C]">
                زیرساخت صنعتی متمرکز بر کیفیت ساخت و تعهد تحویل
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                کارخانه صنعت‌بست ایرانیان با هدف تامین مستقیم و بدون واسطه نیاز صنایع برق،
                قطعه‌سازی، ماشین‌آلات صنعتی و پروژه‌های سازه‌ای فعالیت می‌کند. تمرکز ما بر تولید واقعی
                در خطوط فرم‌دهی و ماشین‌کاری، کنترل دقیق رزوه و اجرای اصولی سخت‌کاری و آبکاری است.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                امکان تولید بر اساس تیراژ درخواستی، حفظ یکنواختی ابعاد در سفارش‌های دوره‌ای و بسته‌بندی
                صنعتی تفکیک‌شده سبب شده واحدهای تدارکات و مهندسی کارخانجات، تامین اتصالات خود را با
                اطمینان به خط تولید ما بسپارند.
              </p>
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="px-5 py-2.5 text-sm font-semibold text-white bg-[#0B192C] hover:bg-[#132843] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  آشنایی کامل با کارخانه
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('gallery')}
                  className="px-5 py-2.5 text-sm font-semibold text-[#0B192C] border border-slate-300 hover:bg-slate-50 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  بازدید تصویری از خطوط تولید
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Manufacturing Process */}
      <section className="py-16 lg:py-24 bg-[#0B192C] text-white blueprint-grid-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-semibold text-[#E5B85C] mb-2">چرخه تولید در کارخانه</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              فرآیند گام‌به‌گام تولید، تکمیل‌کاری و بسته‌بندی اتصالات
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              هر سفارش از لحظه ورود مفتول و مواد اولیه تا خروج پالت‌های بسته‌بندی‌شده، شش ایستگاه
              عملیاتی و کنترلی مشخص را طی می‌کند.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MANUFACTURING_PROCESS_STEPS.map((step) => (
              <div
                key={step.stepNumber}
                className="bg-[#11233B] border border-slate-700/80 rounded-lg p-6 space-y-3"
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

      {/* 6. Quality Control & Certifications */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <div>
                <p className="text-xs font-semibold text-[#9A6E1D] mb-2">
                  تضمین کیفیت و انطباق با استاندارد سفارش
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B192C]">
                  کنترل کیفیت مرحله‌ای بر اساس نقشه و استانداردهای درخواستی کارفرما
                </h2>
                <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                  در تولید اتصالات صنعتی، انطباق دقیق ابعاد و سلامت رزوه ضامن ایمنی مونتاژ است. واحد
                  کنترل کیفیت کارخانه پارامترهای فنی هر سری ساخت را در طول تولید و پیش از بسته‌بندی
                  نهایی بازرسی می‌کند.
                </p>
              </div>

              <div className="divide-y divide-slate-200 border-y border-slate-200">
                {[
                  {
                    title: 'بازرسی ابعادی و هندسی',
                    desc: 'کنترل قطر ساقه، ابعاد گل‌پیچ، ارتفاع مهره و ضخامت واشر مطابق تلرانس نقشه سفارش.',
                  },
                  {
                    title: 'کنترل پروفیل و گام رزوه',
                    desc: 'بررسی روان بودن بسته شدن پیچ و مهره و سلامت دنده‌ها پس از رزوه‌زنی و آبکاری.',
                  },
                  {
                    title: 'پایش عملیات سخت‌کاری و پوشش سطحی',
                    desc: 'اطمینان از یکنواختی سختی حرارتی و کیفیت چسبندگی پوشش آبکاری در کل محموله.',
                  },
                  {
                    title: 'مستندسازی و استانداردهای مرجع',
                    desc: 'امکان تولید بر اساس استاندارد مرجع اعلامی مشتری و ارائه برگه گزارش بازرسی ابعادی کارخانه به همراه بار.',
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
              <div className="w-full rounded-lg overflow-hidden border border-slate-200 min-h-[340px]">
                <IndustrialImage
                  src={IMAGES.qualityPlating}
                  alt="آزمایشگاه کنترل کیفیت ابعادی و خطوط آبکاری و عملیات حرارتی کارخانه"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Custom Manufacturing Section */}
      <section className="py-16 lg:py-24 bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B192C] text-white rounded-lg overflow-hidden border border-slate-800 grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-center space-y-5">
              <div className="text-xs text-[#E5B85C] font-medium">
                <span>واحد مهندسی ساخت اختصاصی</span>
                <span aria-hidden="true"> · </span>
                <span>تولید طبق نقشه یا نمونه</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                سفارش تولید پیچ‌های خاص و قطعات اتصالی غیرمتعارف
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                چنانچه قطعه مورد نیاز خط تولید شما دارای ابعاد غیراستاندارد، ساقه پله‌دار، گل‌پیچ
                اختصاصی یا الزامات ویژه در متریال، سخت‌کاری و آبکاری است، نقشه مهندسی یا نمونه قطعه
                را برای بررسی فنی و ساخت اختصاصی ارسال نمایید.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('custom')}
                  className="px-5 py-3 text-sm font-bold text-white bg-[#B48327] hover:bg-[#9A6E1D] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  جزئیات تولید پیچ سفارشی
                </button>
                <a
                  href="#homepage-rfq"
                  className="px-5 py-3 text-sm font-semibold text-slate-200 border border-slate-600 hover:border-slate-400 rounded-md transition-colors whitespace-nowrap shrink-0"
                >
                  ارسال مستقیم نقشه در فرم پایین
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 min-h-[280px]">
              <IndustrialImage
                src={IMAGES.customBlueprint}
                alt="تولید پیچ‌های خاص و قطعات پله‌دار سفارشی بر اساس نقشه فنی مشتری"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Latest Industrial Articles */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-xs font-semibold text-[#9A6E1D] mb-2">دانشنامه فنی اتصالات</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B192C]">
                مقالات صنعتی و راهنمای مهندسی خرید
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

      {/* 9. Quote Request Form Section on Homepage */}
      <section id="homepage-rfq" className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold text-[#9A6E1D] mb-2">ثبت مستقیم سفارش تولید</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B192C]">
              استعلام قیمت و ارسال مشخصات یا نقشه فنی
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              فرم زیر مستقیماً توسط واحد مهندسی فروش کارخانه بررسی می‌شود.
            </p>
          </div>

          <QuoteForm />
        </div>
      </section>
    </div>
  );
};
