import React from 'react';
import { COMPANY_INFO, PRODUCT_CATEGORIES } from '../data/factoryData';
import { PageId } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onSelectCategory: (categorySlug: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectCategory }) => {
  const allSitePages: { id: PageId; label: string }[] = [
    { id: 'home', label: 'صفحه اصلی' },
    { id: 'about', label: 'درباره صنایع پیچ سازان آراز یزد' },
    { id: 'products', label: 'کاتالوگ محصولات (۳۷ محصول)' },
    { id: 'product-detail', label: 'مشخصات فنی محصول' },
    { id: 'custom', label: 'تولید پیچ‌های خاص و سفارشی' },
    { id: 'gallery', label: 'گالری کارخانه و مراحل تولید' },
    { id: 'articles', label: 'مقالات صنعتی' },
    { id: 'quote', label: 'فرم استعلام قیمت تولید' },
    { id: 'contact', label: 'تماس با دفتر تهران و کارخانه یزد' },
  ];

  return (
    <footer className="bg-[#07111E] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Official Brand & Slogan */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="text-xl font-extrabold text-white tracking-tight">
              {COMPANY_INFO.brandName}
            </h2>
            <p className="text-xs font-semibold text-[#E5B85C]">{COMPANY_INFO.slogan}</p>
            <p className="text-sm text-slate-400 leading-relaxed">
              احداث‌شده در سال {COMPANY_INFO.foundedYear} با پشتوانه تجربی کارگاه «
              {COMPANY_INFO.heritageName}» در زمینی به مساحت {COMPANY_INFO.factoryArea}؛ توانمند در
              تولید انواع پیچ و مهره از سایز {COMPANY_INFO.sizeRange} در اشکال و ابعاد سفارشی.
            </p>
            <div className="pt-1 text-xs text-slate-400">
              <p>
                مراحل تولید: پرس‌کاری · رزوه‌کاری · سخت‌کاری · آبکاری · کنترل کیفیت · بسته‌بندی استاندارد
              </p>
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

          {/* Column 2: Site Pages */}
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

          {/* Column 3: Official 6 Product Categories */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold text-white">دسته‌بندی محصولات</h3>
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

          {/* Column 4: Official Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold text-white">اطلاعات تماس رسمی</h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div>
                <p className="text-xs text-slate-500 mb-0.5">دفتر فروش تهران</p>
                <a
                  href={COMPANY_INFO.tehranPhoneHref}
                  className="text-slate-200 font-semibold hover:text-[#E5B85C] transition-colors tabular-nums"
                >
                  {COMPANY_INFO.tehranPhone}
                </a>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-0.5">تلفن کارخانه (یزد)</p>
                <a
                  href={COMPANY_INFO.factoryPhoneHref}
                  className="text-slate-200 font-semibold hover:text-[#E5B85C] transition-colors tabular-nums"
                >
                  {COMPANY_INFO.factoryPhone}
                </a>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-0.5">آدرس کارخانه</p>
                <p className="text-slate-300 leading-relaxed text-xs">
                  {COMPANY_INFO.factoryAddress}
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-0.5">کد پستی</p>
                <p className="text-slate-200 tabular-nums text-xs">{COMPANY_INFO.postalCode}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-0.5">وب‌سایت رسمی</p>
                <a
                  href={COMPANY_INFO.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E5B85C] font-mono-tech text-xs hover:underline"
                  dir="ltr"
                >
                  {COMPANY_INFO.websiteDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>تمامی حقوق این وب‌سایت متعلق به «{COMPANY_INFO.brandName}» است.</p>
          <p className="font-mono-tech" dir="ltr">
            {COMPANY_INFO.websiteDisplay}
          </p>
        </div>
      </div>
    </footer>
  );
};
