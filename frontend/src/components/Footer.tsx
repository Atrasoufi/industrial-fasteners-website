import React from 'react';
import { PageId } from '../types';
import { PRODUCT_CATEGORIES } from '../data/factoryData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onSelectCategory: (categorySlug: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectCategory }) => {
  const allSitePages: { id: PageId; label: string }[] = [
    { id: 'home', label: 'صفحه اصلی' },
    { id: 'about', label: 'درباره کارخانه' },
    { id: 'products', label: 'کاتالوگ محصولات' },
    { id: 'product-detail', label: 'جزئیات فنی محصول' },
    { id: 'custom', label: 'تولید پیچ سفارشی طبق نقشه' },
    { id: 'gallery', label: 'گالری کارخانه و خطوط تولید' },
    { id: 'articles', label: 'مقالات صنعتی' },
    { id: 'quote', label: 'فرم استعلام قیمت تولید' },
    { id: 'contact', label: 'تماس با کارخانه و دفتر فروش' },
  ];

  return (
    <footer className="bg-[#07111E] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Manufacturer Identity */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="text-xl font-extrabold text-white tracking-tight">
              صنعت‌بست ایرانیان
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              تولیدکننده مستقیم صنعتی انواع پیچ استوانه‌ای، پیچ برقی، پیچ خودکار، پیچ شش‌گوش، مهره،
              واشر و قطعات اتصالی سفارشی بر اساس نقشه و مشخصات فنی کارفرمایان صنعتی در سراسر کشور.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p>واحدهای فعال: تولید صنعتی · رزوه‌زنی · سخت‌کاری · آبکاری · کنترل کیفیت · بسته‌بندی</p>
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onNavigate('quote')}
                className="px-5 py-2.5 text-sm font-semibold text-white bg-[#B48327] hover:bg-[#9A6E1D] rounded-md transition-colors cursor-pointer whitespace-nowrap"
              >
                ثبت درخواست استعلام قیمت
              </button>
            </div>
          </div>

          {/* Column 2: All 9 Site Pages */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold text-white">دسترسی به بخش‌های سایت</h3>
            <ul className="space-y-2 text-sm">
              {allSitePages.map((page) => (
                <li key={page.id}>
                  <a
                    href={`#${page.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(page.id);
                    }}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {page.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Product Categories */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold text-white">گروه‌های تولیدی کارخانه</h3>
            <ul className="space-y-2 text-sm">
              {PRODUCT_CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <button
                    type="button"
                    onClick={() => onSelectCategory(cat.slug)}
                    className="text-right text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {cat.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Factory Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold text-white">ارتباط مستقیم با واحد فروش</h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div>
                <p className="text-xs text-slate-500 mb-0.5">پاسخگویی فنی و فروش صنعتی</p>
                <p className="text-slate-200 font-medium">شنبه تا چهارشنبه · ساعت اداری</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-0.5">تلفن دفتر مرکزی و کارخانه</p>
                <p className="text-slate-200 font-mono-tech" dir="ltr">
                  021 - 0000 0000
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-0.5">پست الکترونیک ارسال نقشه</p>
                <p className="text-slate-200 font-mono-tech text-xs" dir="ltr">
                  rfq@sanatbast-factory.ir
                </p>
              </div>
              <div className="pt-1">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('contact');
                  }}
                  className="text-xs font-medium text-[#E5B85C] hover:underline"
                >
                  مشاهده نشانی کارخانه و فرم تماس
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>تمامی حقوق این وب‌سایت متعلق به کارخانه تولیدی صنعت‌بست ایرانیان است.</p>
          <p>طراحی ساختاریافته B2B و آماده پیاده‌سازی در قالب‌های صنعتی (Django Templates)</p>
        </div>
      </div>
    </footer>
  );
};
