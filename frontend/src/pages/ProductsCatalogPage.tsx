import React, { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { COMPANY_INFO, PRODUCT_CATEGORIES, PRODUCTS_CATALOG } from '../data/factoryData';
import { FastenerCategorySlug, ProductItem } from '../types';
import { IndustrialImage } from '../components/IndustrialImage';
import { FastenerSchematic } from '../components/FastenerSchematic';

interface ProductsCatalogPageProps {
  selectedCategory: FastenerCategorySlug | 'all';
  onSelectCategory: (category: FastenerCategorySlug | 'all') => void;
  onOpenProduct: (product: ProductItem) => void;
  onRequestQuoteForProduct: (product: ProductItem) => void;
}

export const ProductsCatalogPage: React.FC<ProductsCatalogPageProps> = ({
  selectedCategory,
  onSelectCategory,
  onOpenProduct,
  onRequestQuoteForProduct,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [displayMode, setDisplayMode] = useState<'photo' | 'schematic' | 'table'>('photo');

  const activeCategoryObj = useMemo(
    () => PRODUCT_CATEGORIES.find((c) => c.slug === selectedCategory) || null,
    [selectedCategory]
  );

  const filteredProducts = useMemo(() => {
    return PRODUCTS_CATALOG.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.categorySlug === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.categoryTitle.toLowerCase().includes(q) ||
        item.dinStandard.toLowerCase().includes(q) ||
        item.diameterOrSize.toLowerCase().includes(q) ||
        item.lengthOrHeight.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header - Rich Navy Blue Industrial */}
      <section className="bg-[#0B192C] text-white py-10 lg:py-14 border-b border-slate-800 blueprint-grid-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold">
                <span className="bg-[#132843] border border-amber-500/30 text-[#E5B85C] px-2.5 py-0.5 rounded">
                  {COMPANY_INFO.brandName}
                </span>
                <span className="text-slate-500" aria-hidden="true"> · </span>
                <span className="text-slate-300">۳۷ محصول در ۶ دسته‌بندی استاندارد</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
                کاتالوگ و مشخصات فنی محصولات
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                فهرست کامل پیچ‌های استوانه، الکتریکی، خودکار، آچاری و شش‌گوش، پیچ‌های خاص و سفارشی و
                انواع مهره به همراه استاندارد DIN، سایز و مشخصات ابعادی کاتالوگ.
              </p>
            </div>

            {/* Search Input & Quick DIN Shortcuts */}
            <div className="w-full lg:w-96 space-y-2">
              <label htmlFor="catalog-search" className="sr-only">
                جستجو در ۳۷ محصول کاتالوگ
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="catalog-search"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="جستجوی نام، کد DIN یا سایز (مثلاً M3، 933)..."
                  className="w-full pr-10 pl-4 py-2.5 text-sm bg-[#07111E] border border-slate-700 rounded-md text-white placeholder:text-slate-400 focus:outline-none focus:border-[#E5B85C] shadow-inner transition-colors"
                />
              </div>

              {/* Popular DIN Standard Quick Filters */}
              <div className="flex items-center gap-1.5 flex-wrap text-[11px]">
                <span className="text-slate-400 font-medium">استانداردهای پرکاربرد:</span>
                {[
                  { label: 'DIN 8001', code: '8001' },
                  { label: 'DIN 933', code: '933' },
                  { label: 'DIN 934', code: '934' },
                  { label: 'DIN 7981', code: '7981' },
                  { label: 'DIN 965', code: '965' },
                ].map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => {
                      setSearchQuery(item.code);
                      onSelectCategory('all');
                    }}
                    className="px-2 py-0.5 rounded bg-[#132843] hover:bg-[#1E3A5F] border border-slate-700 text-[#E5B85C] font-mono-tech transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="text-xs text-rose-400 hover:text-rose-300 underline cursor-pointer mr-1"
                  >
                    پاک کردن فیلتر
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Filter Toolbar */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col xl:flex-row xl:items-center justify-between gap-4">
          <div
            role="tablist"
            aria-label="فیلتر دسته‌بندی محصولات"
            className="flex items-center gap-1.5 overflow-x-auto pb-1 xl:pb-0"
          >
            <button
              type="button"
              role="tab"
              aria-selected={selectedCategory === 'all'}
              onClick={() => onSelectCategory('all')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#0B192C] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              همه محصولات (۳۷)
            </button>
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat.slug}
                onClick={() => onSelectCategory(cat.slug)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedCategory === cat.slug
                    ? 'bg-[#0B192C] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.title} ({cat.productCount})
              </button>
            ))}
          </div>

          {/* Display Mode Switcher */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-md self-start xl:self-auto shrink-0">
            <button
              type="button"
              onClick={() => setDisplayMode('photo')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                displayMode === 'photo' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              تصویر صنعتی
            </button>
            <button
              type="button"
              onClick={() => setDisplayMode('schematic')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                displayMode === 'schematic' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              شماتیک مهندسی
            </button>
            <button
              type="button"
              onClick={() => setDisplayMode('table')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                displayMode === 'table' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              نمای جدولی کاتالوگ
            </button>
          </div>
        </div>
      </section>

      {/* Specialized Category Description Banner (When a specific category is selected) */}
      {activeCategoryObj && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h2 className="text-lg font-extrabold text-[#0B192C]">{activeCategoryObj.title}</h2>
              <span className="text-xs font-mono-tech text-slate-500">
                {activeCategoryObj.englishTitle}
              </span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              {activeCategoryObj.description}
            </p>
          </div>
        </section>
      )}

      {/* Product Listing */}
      <section className="py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-lg p-12 text-center space-y-4">
              <p className="text-base font-bold text-slate-800">
                محصولی با عبارت جستجوشده در کاتالوگ یافت نشد.
              </p>
              <p className="text-sm text-slate-600">
                {COMPANY_INFO.brandName} امکان تولید انواع پیچ‌های صنعتی سفارشی از قطر M2.20 تا M10 را
                مطابق نقشه مشتری دارا است.
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    onSelectCategory('all');
                  }}
                  className="px-4 py-2 text-xs font-semibold text-[#0B192C] border border-slate-300 rounded-md hover:bg-slate-50 cursor-pointer"
                >
                  نمایش هر ۳۷ محصول کاتالوگ
                </button>
              </div>
            </div>
          ) : displayMode === 'table' ? (
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-right text-sm border-collapse">
                  <thead className="bg-[#0B192C] text-white text-xs">
                    <tr>
                      <th className="py-3.5 px-4 font-semibold whitespace-nowrap">ردیف</th>
                      <th className="py-3.5 px-4 font-semibold whitespace-nowrap">دسته‌بندی</th>
                      <th className="py-3.5 px-4 font-semibold">نام محصول</th>
                      <th className="py-3.5 px-4 font-semibold whitespace-nowrap">
                        استاندارد (DIN)
                      </th>
                      <th className="py-3.5 px-4 font-semibold whitespace-nowrap">سایز / قطر</th>
                      <th className="py-3.5 px-4 font-semibold whitespace-nowrap">
                        طول / ارتفاع / آچارخور
                      </th>
                      <th className="py-3.5 px-4 font-semibold whitespace-nowrap">عملیات</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {filteredProducts.map((product) => (
                      <tr key={product.id} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3.5 px-4 text-slate-500 tabular-nums">
                          {product.catalogRowFa}
                        </td>
                        <td className="py-3.5 px-4 text-slate-600 whitespace-nowrap">
                          {product.catalogCategoryShort}
                        </td>
                        <td className="py-3.5 px-4 font-bold text-[#0B192C]">
                          <button
                            type="button"
                            onClick={() => onOpenProduct(product)}
                            className="text-right hover:text-[#B48327] transition-colors cursor-pointer"
                          >
                            {product.name}
                          </button>
                        </td>
                        <td className="py-3.5 px-4 font-mono-tech text-xs text-slate-800 whitespace-nowrap">
                          {product.dinStandard}
                        </td>
                        <td className="py-3.5 px-4 font-mono-tech text-xs text-slate-800 whitespace-nowrap">
                          {product.diameterOrSize}
                        </td>
                        <td className="py-3.5 px-4 text-xs text-slate-700 whitespace-nowrap">
                          {product.lengthOrHeight}
                        </td>
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => onOpenProduct(product)}
                              className="px-2.5 py-1 text-xs font-semibold text-[#0B192C] border border-slate-300 rounded hover:bg-slate-100 cursor-pointer"
                            >
                              جزئیات
                            </button>
                            <button
                              type="button"
                              onClick={() => onRequestQuoteForProduct(product)}
                              className="px-2.5 py-1 text-xs font-semibold text-white bg-[#B48327] hover:bg-[#9A6E1D] rounded cursor-pointer"
                            >
                              استعلام
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredProducts.map((product) => (
                <article
                  key={product.id}
                  className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col justify-between hover:border-slate-400 transition-colors duration-150"
                >
                  <div>
                    <div
                      onClick={() => onOpenProduct(product)}
                      className={`relative aspect-[16/10] overflow-hidden cursor-pointer flex items-center justify-center ${
                        displayMode === 'schematic'
                          ? 'bg-slate-50 blueprint-grid p-4'
                          : 'bg-slate-50 border-b border-slate-100 p-3 group'
                      }`}
                    >
                      {displayMode === 'schematic' ? (
                        <FastenerSchematic
                          category={product.categorySlug}
                          variant="dark"
                          className="w-full h-full border-0 bg-transparent"
                        />
                      ) : (
                        <>
                          <IndustrialImage
                            src={product.imageUrl}
                            alt={product.name}
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
                          />
                          {/* Paired Graphic CAD Schematic Badge - Rich Navy Blueprint Inset */}
                          <div
                            title="طراحی شماتیک و نقشه مهندسی CAD پیچ"
                            className="absolute top-2.5 left-2.5 w-18 h-12 bg-[#0B192C]/95 backdrop-blur-xs border border-slate-700/90 rounded p-1 shadow-md overflow-hidden hidden sm:flex items-center justify-center opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200"
                          >
                            <FastenerSchematic
                              category={product.categorySlug}
                              compact
                              variant="dark"
                              className="w-full h-full border-0 bg-transparent p-0"
                            />
                          </div>
                          {/* DIN Code Pill */}
                          <span className="absolute bottom-2.5 right-2.5 bg-[#0B192C]/90 backdrop-blur-xs border border-slate-700 px-2 py-0.5 rounded text-[10px] font-mono-tech font-bold text-[#E5B85C] shadow-sm">
                            {product.dinStandard}
                          </span>
                        </>
                      )}
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between gap-2 text-xs text-slate-500">
                        <span>{product.categoryTitle}</span>
                        <span className="tabular-nums">ردیف {product.catalogRowFa}</span>
                      </div>

                      <h2 className="text-lg font-bold text-[#0B192C]">
                        <button
                          type="button"
                          onClick={() => onOpenProduct(product)}
                          className="text-right hover:text-[#B48327] transition-colors cursor-pointer"
                        >
                          {product.name}
                        </button>
                      </h2>

                      <dl className="pt-3 border-t border-slate-100 space-y-2 text-xs">
                        <div className="flex justify-between gap-3">
                          <dt className="text-slate-500 shrink-0">
                            {product.isFormalDinCode ? 'استاندارد (DIN):' : 'مشخصه کاتالوگ:'}
                          </dt>
                          <dd className="font-mono-tech font-semibold text-slate-900 text-left">
                            {product.dinStandard}
                          </dd>
                        </div>
                        <div className="flex justify-between gap-3">
                          <dt className="text-slate-500 shrink-0">سایز / قطر:</dt>
                          <dd className="font-mono-tech font-semibold text-slate-900 text-left">
                            {product.diameterOrSize}
                          </dd>
                        </div>
                        <div className="flex justify-between gap-3">
                          <dt className="text-slate-500 shrink-0">طول / ارتفاع / آچارخور:</dt>
                          <dd className="text-slate-800 text-left">{product.lengthOrHeight}</dd>
                        </div>
                      </dl>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => onOpenProduct(product)}
                      className="flex-1 py-2.5 px-3 text-xs font-bold text-[#0B192C] border border-slate-300 hover:bg-slate-50 rounded-md transition-colors whitespace-nowrap cursor-pointer"
                    >
                      جزئیات محصول
                    </button>
                    <button
                      type="button"
                      onClick={() => onRequestQuoteForProduct(product)}
                      className="flex-1 py-2.5 px-3 text-xs font-bold text-white bg-[#B48327] hover:bg-[#9A6E1D] rounded-md transition-colors whitespace-nowrap cursor-pointer"
                    >
                      استعلام قیمت
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
