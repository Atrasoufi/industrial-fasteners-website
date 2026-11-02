import React, { useMemo, useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { COMPANY_INFO, PRODUCTS_CATALOG } from '../data/factoryData';
import { PageId, ProductItem, TechnicalDocument } from '../types';
import { IndustrialImage } from '../components/IndustrialImage';
import { FastenerSchematic } from '../components/FastenerSchematic';

interface ProductDetailPageProps {
  product: ProductItem;
  onSelectProduct: (product: ProductItem) => void;
  onNavigate: (page: PageId) => void;
  onRequestQuote: (product: ProductItem) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  onSelectProduct,
  onNavigate,
  onRequestQuote,
}) => {
  const [inspectionMode, setInspectionMode] = useState<'both' | 'photo' | 'cad'>('both');

  const sameCategoryProducts = useMemo(
    () =>
      PRODUCTS_CATALOG.filter(
        (p) => p.categorySlug === product.categorySlug && p.id !== product.id
      ),
    [product]
  );

  const handleDownloadDocument = (doc: TechnicalDocument) => {
    const lines = [
      '============================================================',
      `${COMPANY_INFO.brandName} — برگه مشخصات کاتالوگ محصول`,
      `${COMPANY_INFO.slogan}`,
      '============================================================',
      `ردیف کاتالوگ: ${product.catalogRowFa}`,
      `نام محصول: ${product.name}`,
      `دسته‌بندی: ${product.categoryTitle}`,
      `${product.isFormalDinCode ? 'استاندارد (DIN)' : 'مشخصه کاتالوگ'}: ${product.dinStandard}`,
      `سایز / قطر: ${product.diameterOrSize}`,
      `طول / ارتفاع / آچارخور: ${product.lengthOrHeight}`,
      ...(product.explicitFeature ? [`ویژگی قیدشده در عنوان: ${product.explicitFeature}`] : []),
      '------------------------------------------------------------',
      'توضیحات تخصصی گروه محصول:',
      product.categoryTechnicalNote,
      '------------------------------------------------------------',
      `مراحل تولید در کارخانه: ${product.productionOperations.join('، ')}`,
      '------------------------------------------------------------',
      `دفتر فروش تهران: ${COMPANY_INFO.tehranPhone}`,
      `تلفن کارخانه: ${COMPANY_INFO.factoryPhone}`,
      `آدرس کارخانه: ${COMPANY_INFO.factoryAddress}`,
      `کد پستی: ${COMPANY_INFO.postalCode}`,
      `وب‌سایت: ${COMPANY_INFO.websiteDisplay}`,
      '============================================================',
    ];

    const blob = new Blob(['\uFEFF' + lines.join('\n')], {
      type: 'text/plain;charset=utf-8',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `arazpich-${product.slug}-${doc.id}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const specificationRows = [
    { label: 'ردیف در کاتالوگ رسمی', value: `ردیف ${product.catalogRowFa} از ۳۷` },
    { label: 'دسته‌بندی', value: product.categoryTitle },
    {
      label: product.isFormalDinCode ? 'استاندارد (DIN)' : 'مشخصه مندرج در کاتالوگ',
      value: product.dinStandard,
    },
    { label: 'سایز / قطر', value: product.diameterOrSize },
    { label: 'طول / ارتفاع / آچارخور', value: product.lengthOrHeight },
    ...(product.explicitFeature
      ? [{ label: 'ویژگی مندرج در عنوان', value: product.explicitFeature }]
      : []),
  ];

  return (
    <div className="bg-slate-50 pb-20">
      {/* Top Breadcrumb & 37-Product Switcher */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-600">
            <button
              type="button"
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-1.5 font-semibold text-[#0B192C] hover:text-[#B48327] transition-colors cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
              <span>بازگشت به کاتالوگ محصولات</span>
            </button>
            <span aria-hidden="true">/</span>
            <span className="text-slate-500">{product.categoryTitle}</span>
            <span aria-hidden="true">/</span>
            <span className="text-slate-800 font-medium">{product.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="pdp-switcher" className="text-xs text-slate-500 whitespace-nowrap">
              انتخاب محصول دیگر:
            </label>
            <select
              id="pdp-switcher"
              value={product.id}
              onChange={(e) => {
                const found = PRODUCTS_CATALOG.find((p) => p.id === e.target.value);
                if (found) {
                  onSelectProduct(found);
                }
              }}
              className="px-3 py-1.5 text-xs font-medium bg-slate-50 border border-slate-300 rounded-md text-slate-800 max-w-[240px] focus:outline-none focus:border-[#B48327]"
            >
              {PRODUCTS_CATALOG.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.catalogRowFa}. {item.name} ({item.dinStandard})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Main Product Detail Module */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Dual Engineering Console: Authentic Photo + CAD Fastener Schematic */}
          <div className="lg:col-span-6 space-y-4 lg:sticky lg:top-24">
            {/* View Mode Switcher */}
            <div className="flex items-center justify-between p-1.5 bg-slate-100 rounded-lg border border-slate-200">
              <span className="text-xs font-bold text-slate-600 px-2">نمای فنی:</span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setInspectionMode('both')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                    inspectionMode === 'both'
                      ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  نمایش همزمان (عکس + نقشه)
                </button>
                <button
                  type="button"
                  onClick={() => setInspectionMode('photo')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                    inspectionMode === 'photo'
                      ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  فقط عکس محصول
                </button>
                <button
                  type="button"
                  onClick={() => setInspectionMode('cad')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                    inspectionMode === 'cad'
                      ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  فقط شماتیک CAD
                </button>
              </div>
            </div>

            {/* Display Area */}
            {inspectionMode === 'both' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Real Catalog Photograph */}
                <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col items-center justify-between shadow-xs">
                  <div className="w-full flex items-center justify-between text-[11px] font-bold text-slate-500 mb-2 border-b border-slate-100 pb-2">
                    <span className="flex items-center gap-1 text-[#B48327]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B48327]" />
                      تصویر واقعی کاتالوگ
                    </span>
                    <span className="font-mono-tech">ردیف {product.catalogRowFa}</span>
                  </div>
                  <div className="w-full aspect-square flex items-center justify-center p-3">
                    <IndustrialImage
                      src={product.imageUrl}
                      alt={`${product.name} - کاتالوگ صنایع پیچ سازان آراز یزد`}
                      className="w-full h-full object-contain filter drop-shadow-md"
                    />
                  </div>
                  <div className="w-full pt-2 text-center text-[11px] text-slate-500 border-t border-slate-100">
                    قطعه واقعی تولیدی آراز یزد
                  </div>
                </div>

                {/* CAD Technical Fastener Schematic - Rich Navy Blueprint */}
                <div className="bg-[#0B192C] border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-between shadow-md blueprint-grid-dark text-white">
                  <div className="w-full flex items-center justify-between text-[11px] font-bold text-slate-400 mb-2 border-b border-slate-800 pb-2">
                    <span className="flex items-center gap-1 text-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E5B85C]" />
                      طراحی و شماتیک مهندسی
                    </span>
                    <span className="font-mono-tech font-bold text-[#E5B85C]">{product.dinStandard}</span>
                  </div>
                  <div className="w-full aspect-square flex items-center justify-center p-2">
                    <FastenerSchematic category={product.categorySlug} variant="dark" className="w-full h-full border-0 bg-transparent p-0" />
                  </div>
                  <div className="w-full pt-2 text-center text-[11px] text-slate-400 font-mono-tech border-t border-slate-800">
                    ابعاد اسمی: {product.diameterOrSize} × {product.lengthOrHeight}
                  </div>
                </div>
              </div>
            ) : inspectionMode === 'photo' ? (
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex flex-col items-center">
                <div className="w-full flex items-center justify-between text-xs font-bold text-slate-500 mb-4 border-b border-slate-100 pb-3">
                  <span className="text-[#B48327] font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#B48327]" />
                    تصویر رسمی قطعه از کاتالوگ صنایع پیچ سازان آراز یزد
                  </span>
                  <span className="font-mono-tech">ردیف کاتالوگ: {product.catalogRowFa}</span>
                </div>
                <div className="w-full aspect-[4/3] flex items-center justify-center p-4">
                  <IndustrialImage
                    src={product.imageUrl}
                    alt={`${product.name} - ${COMPANY_INFO.brandName}`}
                    className="w-full h-full object-contain filter drop-shadow-lg"
                  />
                </div>
                <p className="text-xs text-slate-500 mt-3 text-center">
                  نمای شفاف محصول استاندارد تولیدشده با متریال و رزوه دقیق مهندسی
                </p>
              </div>
            ) : (
              <div className="bg-[#0B192C] border border-slate-800 rounded-xl p-6 shadow-md blueprint-grid-dark flex flex-col items-center text-white">
                <div className="w-full flex items-center justify-between text-xs font-bold text-slate-400 mb-4 border-b border-slate-800 pb-3">
                  <span className="text-white font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#E5B85C]" />
                    نقشه فنی و شماتیک هندسی رده اتصالات
                  </span>
                  <span className="font-mono-tech font-bold text-[#E5B85C]">{product.dinStandard}</span>
                </div>
                <div className="w-full aspect-[4/3] flex items-center justify-center p-4">
                  <FastenerSchematic category={product.categorySlug} variant="dark" className="w-full h-full border-0 bg-transparent" />
                </div>
                <p className="text-xs text-slate-300 mt-3 text-center font-mono-tech">
                  هندسه سرپیچ، طول رزوه، گام و مقطع طراحی‌شده مطابق استاندارد DIN
                </p>
              </div>
            )}

            {/* Quick Spec Highlights Card */}
            <div className="bg-white border border-slate-200 rounded-lg p-4 text-xs text-slate-600 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-700">کنترل کیفی و تست ابعادی:</span>
                <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  ۱۰۰٪ تاییدیه قبل از بسته‌بندی
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-700">محدوده سفارش‌گذاری:</span>
                <span className="text-slate-800 font-medium">تیراژ عمده صنعتی و پروژه‌ای</span>
              </div>
            </div>
          </div>

          {/* Specifications, Category Technical Overview & Quote CTA */}
          <div className="lg:col-span-6 space-y-8">
            <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#9A6E1D] font-semibold mb-2">
                  <span>{product.categoryTitle}</span>
                  <span aria-hidden="true">·</span>
                  <span>{COMPANY_INFO.brandName}</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B192C]">
                  {product.name}
                </h1>
                <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Verified Catalog Specifications */}
              <div>
                <h2 className="text-sm font-bold text-[#0B192C] mb-3">
                  مشخصات رسمی ثبت‌شده در کاتالوگ کارخانه
                </h2>
                <div className="border border-slate-200 rounded-md divide-y divide-slate-200">
                  {specificationRows.map((row) => (
                    <div
                      key={row.label}
                      className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 px-4 py-3 text-sm"
                    >
                      <dt className="sm:col-span-5 font-semibold text-slate-700">{row.label}</dt>
                      <dd className="sm:col-span-7 text-slate-900 font-medium">{row.value}</dd>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-500 mt-2.5">
                  سایر جزئیات سفارشی (نظیر انتخاب جنس یا نوع پوشش سطحی مدنظر خریدار) هنگام ثبت سفارش
                  با واحد فروش هماهنگ می‌گردد.
                </p>
              </div>

              {/* Primary CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={() => onRequestQuote(product)}
                  className="flex-1 py-3.5 px-6 text-sm font-bold text-white bg-[#B48327] hover:bg-[#9A6E1D] rounded-md transition-colors cursor-pointer text-center"
                >
                  استعلام قیمت و سفارش «{product.name}»
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('custom')}
                  className="py-3.5 px-5 text-sm font-semibold text-[#0B192C] border border-slate-300 hover:bg-slate-50 rounded-md transition-colors cursor-pointer text-center whitespace-nowrap"
                >
                  سفارش سایز خاص طبق نقشه
                </button>
              </div>
            </div>

            {/* Category Technical Description & Production Operations */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 space-y-5">
              <h2 className="text-lg font-bold text-[#0B192C]">
                توضیحات تخصصی دسته «{product.categoryTitle}»
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {product.categoryTechnicalNote}
              </p>

              <div className="pt-3 border-t border-slate-100">
                <h3 className="text-xs font-bold text-slate-500 mb-2">
                  فرآیندهای تولید در صنایع پیچ سازان آراز یزد:
                </h3>
                <p className="text-sm text-slate-800 leading-relaxed">
                  {product.productionOperations.join(' · ')}
                </p>
              </div>
            </div>

            {/* Downloadable Spec Sheet */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 space-y-4">
              <div>
                <h2 className="text-lg font-bold text-[#0B192C]">دریافت برگه مشخصات کاتالوگ</h2>
                <p className="text-xs text-slate-500 mt-1">
                  نسخه متنی مشخصات ثبت‌شده این ردیف کاتالوگ به همراه اطلاعات تماس مستقیم کارخانه و دفتر
                  تهران.
                </p>
              </div>

              <div className="divide-y divide-slate-200 border border-slate-200 rounded-md">
                {product.documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-slate-900">{doc.title}</p>
                      <p className="text-xs text-slate-500">{doc.description}</p>
                      <p className="text-[11px] font-mono-tech text-slate-400">{doc.fileType}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleDownloadDocument(doc)}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold text-[#0B192C] bg-slate-100 hover:bg-slate-200 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>دانلود برگه محصول</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products in the Same Category */}
        {sameCategoryProducts.length > 0 && (
          <div className="mt-14 pt-10 border-t border-slate-200">
            <h2 className="text-xl font-extrabold text-[#0B192C] mb-6">
              سایر محصولات دسته «{product.categoryTitle}»
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {sameCategoryProducts.map((rel) => (
                <button
                  key={rel.id}
                  type="button"
                  onClick={() => {
                    onSelectProduct(rel);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-white border border-slate-200 hover:border-slate-400 rounded-lg p-4 text-right transition-colors cursor-pointer space-y-1.5"
                >
                  <p className="text-xs text-slate-500">ردیف {rel.catalogRowFa}</p>
                  <p className="text-sm font-bold text-[#0B192C]">{rel.name}</p>
                  <p className="text-xs font-mono-tech text-slate-600">
                    {rel.dinStandard} · {rel.diameterOrSize}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
