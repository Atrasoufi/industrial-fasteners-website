import React, { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { PRODUCT_CATEGORIES, PRODUCTS_CATALOG } from '../data/factoryData';
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
  const [viewSchematic, setViewSchematic] = useState(false);

  const filteredProducts = useMemo(() => {
    return PRODUCTS_CATALOG.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.categorySlug === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.categoryTitle.toLowerCase().includes(q) ||
        item.shortSummary.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-[#0B192C] text-white py-12 lg:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <div className="text-xs text-[#E5B85C] font-medium">
                <span>کاتالوگ محصولات کارخانه</span>
                <span aria-hidden="true"> · </span>
                <span>تولید استاندارد و سفارشی</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
                محصولات و اتصالات تولیدی
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                انواع پیچ، مهره، واشر و قطعات سفارشی قابل تولید در خطوط کارخانه بر اساس ابعاد،
                متریال، استاندارد و پوشش سطحی مورد نظر سفارش‌دهنده.
              </p>
            </div>

            {/* Search Input */}
            <div className="w-full lg:w-80">
              <label htmlFor="catalog-search" className="sr-only">
                جستجو در محصولات
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="catalog-search"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="جستجوی نام محصول یا کاربرد..."
                  className="w-full pr-10 pl-4 py-2.5 text-sm bg-[#132843] border border-slate-700 rounded-md text-white placeholder:text-slate-400 focus:outline-none focus:border-[#B48327]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Filter Toolbar */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div
            role="tablist"
            aria-label="فیلتر دسته‌بندی محصولات"
            className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0"
          >
            <button
              type="button"
              role="tab"
              aria-selected={selectedCategory === 'all'}
              onClick={() => onSelectCategory('all')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#0B192C] text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              همه گروه‌ها ({PRODUCTS_CATALOG.length})
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
                    ? 'bg-[#0B192C] text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Toggle Photo vs Orthographic CAD Schematic */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-md self-start md:self-auto shrink-0">
            <button
              type="button"
              onClick={() => setViewSchematic(false)}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                !viewSchematic ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              تصویر صنعتی
            </button>
            <button
              type="button"
              onClick={() => setViewSchematic(true)}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                viewSchematic ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              شماتیک مهندسی
            </button>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-lg p-12 text-center space-y-4">
              <p className="text-base font-bold text-slate-800">
                محصولی با عبارت جستجوشده در فهرست فعلی یافت نشد.
              </p>
              <p className="text-sm text-slate-600">
                کارخانه صنعت‌بست ایرانیان امکان تولید انواع پیچ‌های خاص بر اساس نقشه فنی شما را دارد.
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
                  نمایش همه محصولات
                </button>
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
                      className="aspect-[4/3] bg-[#0B192C] overflow-hidden cursor-pointer"
                    >
                      {viewSchematic ? (
                        <FastenerSchematic
                          category={product.categorySlug}
                          className="w-full h-full"
                        />
                      ) : (
                        <IndustrialImage
                          src={product.imageUrl}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span>{product.categoryTitle}</span>
                        <span aria-hidden="true">·</span>
                        <span>تولید سفارشی و سری‌کاری</span>
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

                      <p className="text-sm text-slate-600 leading-relaxed">
                        {product.shortSummary}
                      </p>

                      <dl className="pt-3 border-t border-slate-100 space-y-1.5 text-xs">
                        <div className="flex justify-between gap-3">
                          <dt className="text-slate-500 shrink-0">متریال:</dt>
                          <dd className="text-slate-800 text-left truncate">طبق سفارش مشتری</dd>
                        </div>
                        <div className="flex justify-between gap-3">
                          <dt className="text-slate-500 shrink-0">پوشش سطحی:</dt>
                          <dd className="text-slate-800 text-left truncate">
                            آبکاری سفارشی / بدون پوشش
                          </dd>
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
                      جزئیات و مشخصات فنی
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
