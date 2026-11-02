import React, { useState } from 'react';
import { X } from 'lucide-react';
import { COMPANY_INFO, GALLERY_ITEMS } from '../data/factoryData';
import { GalleryItem, PageId } from '../types';
import { IndustrialImage } from '../components/IndustrialImage';

interface FactoryGalleryPageProps {
  onNavigate: (page: PageId) => void;
}

const DEPARTMENTS = [
  'همه بخش‌ها',
  'محصولات کاتالوگ',
  'کنترل کیفیت و آبکاری',
  'محصولات الکتریکی',
  'تولید سفارشی طبق نقشه',
  'انواع مهره',
] as const;

export const FactoryGalleryPage: React.FC<FactoryGalleryPageProps> = ({ onNavigate }) => {
  const [activeDept, setActiveDept] = useState<string>('همه بخش‌ها');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const visibleItems =
    activeDept === 'همه بخش‌ها'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.department === activeDept);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header - Rich Navy Blue Industrial */}
      <section className="bg-[#0B192C] text-white border-b border-slate-800 blueprint-grid-dark py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs text-[#E5B85C] font-bold bg-[#132843] border border-amber-500/30 px-3 py-1 rounded-full">
              <span>گالری مستند {COMPANY_INFO.brandName}</span>
              <span aria-hidden="true"> · </span>
              <span>مساحت {COMPANY_INFO.factoryArea}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              گالری خطوط تولید، کنترل کیفیت و محصولات
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              نمایی از فرآیندهای پرس‌کاری، رزوه‌کاری، سخت‌کاری، آبکاری، کنترل کیفیت و نمونه محصولات
              تولیدی از سایز ۲/۲۰ تا ۱۰ میلی‌متر.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('quote')}
            className="px-5 py-3 text-sm font-bold text-white bg-[#B48327] hover:bg-[#9A6E1D] rounded-md transition-colors whitespace-nowrap self-start md:self-auto cursor-pointer shadow-lg"
          >
            ثبت استعلام قیمت تولید
          </button>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-2 overflow-x-auto">
          {DEPARTMENTS.map((dept) => (
            <button
              key={dept}
              type="button"
              onClick={() => setActiveDept(dept)}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeDept === dept
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {visibleItems.map((item) => {
            const colSpan = item.aspect === 'wide' ? 'md:col-span-6' : 'md:col-span-4';
            return (
              <figure
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`${colSpan} bg-white border border-slate-200 rounded-lg overflow-hidden cursor-pointer hover:border-slate-400 transition-colors flex flex-col group`}
              >
                <div className="aspect-[16/10] bg-slate-50 border-b border-slate-100 overflow-hidden flex items-center justify-center p-3">
                  <IndustrialImage
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-200"
                  />
                </div>
                <figcaption className="p-5 space-y-1.5 flex-1">
                  <p className="text-xs text-[#9A6E1D] font-medium">{item.department}</p>
                  <h2 className="text-base font-bold text-[#0B192C]">{item.title}</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.caption}
                  </p>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 bg-slate-950/80 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg max-w-4xl w-full overflow-hidden border border-slate-700"
          >
            <div className="flex items-center justify-between px-5 py-3.5 bg-[#0B192C] text-white">
              <div>
                <p className="text-xs text-[#E5B85C]">{selectedItem.department}</p>
                <h3 className="text-sm sm:text-base font-bold">{selectedItem.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                aria-label="بستن تصویر"
                className="p-1.5 rounded-md text-slate-300 hover:bg-slate-800 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-[16/9] bg-[#07111E]">
              <IndustrialImage
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-5 bg-white text-sm text-slate-700">{selectedItem.caption}</div>
          </div>
        </div>
      )}
    </div>
  );
};
