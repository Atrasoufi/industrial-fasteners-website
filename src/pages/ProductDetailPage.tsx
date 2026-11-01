import React, { useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { PRODUCTS_CATALOG } from '../data/factoryData';
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
  const [activeMediaTab, setActiveMediaTab] = useState<'primary' | 'schematic' | 'secondary'>(
    'primary'
  );

  const handleDownloadDocument = (doc: TechnicalDocument) => {
    const content = [
      '============================================================',
      'کارخانه تولیدی صنعت‌بست ایرانیان — کاربرگ فنی و استعلام محصول',
      '============================================================',
      `عنوان مدرک: ${doc.title}`,
      `گروه محصول: ${product.categoryTitle}`,
      `نام محصول: ${product.name}`,
      '------------------------------------------------------------',
      'مشخصات پایه قابل تعریف توسط سفارش‌دهنده:',
      `- دسته‌بندی محصول: ${product.categoryTitle}`,
      `- جنس متریال: ${product.material}`,
      `- قطر مورد نیاز: ${product.diameter}`,
      `- طول مورد نیاز: ${product.length}`,
      `- استاندارد مرجع: ${product.standard}`,
      `- پوشش سطحی (آبکاری): ${product.surfaceCoating}`,
      '------------------------------------------------------------',
      'فرآیندهای قابل اجرا در خط کارخانه:',
      product.productionOperations.map((op, i) => `${i + 1}. ${op}`).join('\n'),
      '------------------------------------------------------------',
      'راهنمای تکمیل توسط واحد مهندسی / بازرگانی خریدار:',
      '۱. قطر اسمی و گام رزوه دقیق را درج فرمایید.',
      '۲. طول کل و طول قسمت رزوه‌شده را مشخص نمایید.',
      '۳. در صورت نیاز به سخت‌کاری یا آبکاری خاص، شرایط کاری قطعه قید شود.',
      '۴. نقشه فنی (PDF / DWG / DXF) به همراه تیراژ مورد نیاز ارسال گردد.',
      '============================================================',
    ].join('\n');

    const blob = new Blob(['\uFEFF' + content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${product.slug}-${doc.id}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const specificationRows = [
    { label: 'دسته‌بندی محصول', value: product.categoryTitle },
    { label: 'جنس (متریال)', value: product.material },
    { label: 'قطر', value: product.diameter },
    { label: 'طول', value: product.length },
    { label: 'استاندارد', value: product.standard },
    { label: 'پوشش سطحی', value: product.surfaceCoating },
  ];

  return (
    <div className="bg-slate-50 pb-20">
      {/* Top Breadcrumb & Quick Product Switcher */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
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
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="pdp-switcher" className="text-xs text-slate-500 whitespace-nowrap">
              مشاهده گروه دیگر:
            </label>
            <select
              id="pdp-switcher"
              value={product.id}
              onChange={(e) => {
                const found = PRODUCTS_CATALOG.find((p) => p.id === e.target.value);
                if (found) {
                  onSelectProduct(found);
                  setActiveMediaTab('primary');
                }
              }}
              className="px-3 py-1.5 text-xs font-medium bg-slate-50 border border-slate-300 rounded-md text-slate-800 focus:outline-none focus:border-[#0B192C]"
            >
              {PRODUCTS_CATALOG.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Contiguous PDP Split Module */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Right Column (in RTL): Product Gallery & Orthographic Blueprint */}
          <div className="lg:col-span-6 space-y-4 lg:sticky lg:top-24">
            <div className="aspect-[4/3] bg-[#0B192C] border border-slate-200 rounded-lg overflow-hidden">
              {activeMediaTab === 'primary' && (
                <IndustrialImage
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              )}
              {activeMediaTab === 'schematic' && (
                <FastenerSchematic category={product.categorySlug} className="w-full h-full" />
              )}
              {activeMediaTab === 'secondary' && (
                <IndustrialImage
                  src={product.secondaryImageUrl}
                  alt={`خط تولید و کنترل کیفیت ${product.name}`}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Thumbnail / View Selector */}
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setActiveMediaTab('primary')}
                className={`p-2.5 text-xs font-semibold rounded-md border text-center transition-colors cursor-pointer ${
                  activeMediaTab === 'primary'
                    ? 'bg-[#0B192C] text-white border-[#0B192C]'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                }`}
              >
                تصویر صنعتی محصول
              </button>
              <button
                type="button"
                onClick={() => setActiveMediaTab('schematic')}
                className={`p-2.5 text-xs font-semibold rounded-md border text-center transition-colors cursor-pointer ${
                  activeMediaTab === 'schematic'
                    ? 'bg-[#0B192C] text-white border-[#0B192C]'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                }`}
              >
                نمای شماتیک مهندسی
              </button>
              <button
                type="button"
                onClick={() => setActiveMediaTab('secondary')}
                className={`p-2.5 text-xs font-semibold rounded-md border text-center transition-colors cursor-pointer ${
                  activeMediaTab === 'secondary'
                    ? 'bg-[#0B192C] text-white border-[#0B192C]'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                }`}
              >
                واحد تولید و تکمیل‌کاری
              </button>
            </div>
          </div>

          {/* Left Column (in RTL): Specifications, Description, Documents & Quote CTA */}
          <div className="lg:col-span-6 space-y-8">
            <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#9A6E1D] font-semibold mb-2">
                  <span>{product.categoryTitle}</span>
                  <span aria-hidden="true">·</span>
                  <span>تولید مستقیم کارخانه</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B192C]">
                  {product.name}
                </h1>
                <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                  {product.shortSummary}
                </p>
              </div>

              {/* Technical Specifications Table */}
              <div>
                <h2 className="text-sm font-bold text-[#0B192C] mb-3">جدول مشخصات فنی قابل سفارش</h2>
                <div className="border border-slate-200 rounded-md divide-y divide-slate-200">
                  {specificationRows.map((row) => (
                    <div
                      key={row.label}
                      className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 px-4 py-3 text-sm"
                    >
                      <dt className="sm:col-span-4 font-semibold text-slate-700">{row.label}</dt>
                      <dd className="sm:col-span-8 text-slate-900">{row.value}</dd>
                    </div>
                  ))}
                </div>
              </div>

              {/* Primary Quote CTA Block */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={() => onRequestQuote(product)}
                  className="flex-1 py-3.5 px-6 text-sm font-bold text-white bg-[#B48327] hover:bg-[#9A6E1D] rounded-md transition-colors cursor-pointer text-center"
                >
                  ثبت استعلام قیمت و سفارش این محصول
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('custom')}
                  className="py-3.5 px-5 text-sm font-semibold text-[#0B192C] border border-slate-300 hover:bg-slate-50 rounded-md transition-colors cursor-pointer text-center whitespace-nowrap"
                >
                  سفارش بر اساس نقشه خاص
                </button>
              </div>
            </div>

            {/* Technical Description & Factory Operations */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 space-y-5">
              <h2 className="text-lg font-bold text-[#0B192C]">توضیحات فنی و فرآیند ساخت</h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {product.technicalDescription}
              </p>

              <div className="pt-3 border-t border-slate-100">
                <h3 className="text-xs font-bold text-slate-500 mb-2.5">
                  مراحل اجرایی در کارخانه برای این گروه محصول:
                </h3>
                <p className="text-sm text-slate-800 leading-relaxed">
                  {product.productionOperations.join(' · ')}
                </p>
              </div>
            </div>

            {/* Downloadable Technical Documents */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 space-y-4">
              <div>
                <h2 className="text-lg font-bold text-[#0B192C]">اسناد و کاربرگ‌های فنی قابل دانلود</h2>
                <p className="text-xs text-slate-500 mt-1">
                  جهت تسهیل هماهنگی میان واحد مهندسی شما و کارخانه، کاربرگ مشخصات را دریافت نمایید.
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
                      <span>دانلود مدرک فنی</span>
                    </button>
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
