import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PageId } from '../types';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

const PRIMARY_NAV_ITEMS: { id: PageId; label: string }[] = [
  { id: 'home', label: 'صفحه اصلی' },
  { id: 'products', label: 'کاتالوگ محصولات' },
  { id: 'custom', label: 'تولید سفارشی' },
  { id: 'about', label: 'درباره کارخانه' },
  { id: 'contact', label: 'تماس با ما' },
];

const MOBILE_ALL_PAGES: { id: PageId; label: string }[] = [
  { id: 'home', label: 'صفحه اصلی' },
  { id: 'products', label: 'کاتالوگ محصولات' },
  { id: 'product-detail', label: 'نمونه جزئیات محصول' },
  { id: 'custom', label: 'تولید پیچ سفارشی' },
  { id: 'about', label: 'درباره کارخانه' },
  { id: 'gallery', label: 'گالری کارخانه' },
  { id: 'articles', label: 'مقالات صنعتی' },
  { id: 'contact', label: 'تماس با ما' },
];

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0B192C] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="text-lg sm:text-xl font-extrabold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B48327]"
        >
          صنعت‌بست ایرانیان
        </a>

        {/* Zone 2: 5 concise single-line text navigation links */}
        <nav
          aria-label="منوی اصلی"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300"
        >
          {PRIMARY_NAV_ITEMS.map((item) => {
            const isActive =
              currentPage === item.id ||
              (item.id === 'products' && currentPage === 'product-detail') ||
              (item.id === 'about' && (currentPage === 'gallery' || currentPage === 'articles'));

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`py-1 transition-colors duration-150 whitespace-nowrap shrink-0 border-b-2 ${
                  isActive
                    ? 'text-white border-[#B48327]'
                    : 'border-transparent hover:text-white hover:border-slate-500'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary CTA action (+ mobile menu toggle on small screens) */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleNavClick('quote')}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#B48327] hover:bg-[#9A6E1D] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B48327]"
          >
            استعلام قیمت
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'بستن منو' : 'باز کردن منو'}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-slate-200 hover:bg-slate-800 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0F2138] border-t border-slate-800 px-4 pt-3 pb-5">
          <nav aria-label="منوی موبایل" className="grid grid-cols-1 gap-1">
            {MOBILE_ALL_PAGES.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#0B192C] text-[#E5B85C]'
                      : 'text-slate-200 hover:bg-[#0B192C]/60 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
          <div className="mt-4 pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={() => handleNavClick('quote')}
              className="w-full py-2.5 px-4 text-sm font-semibold text-white bg-[#B48327] hover:bg-[#9A6E1D] rounded-md transition-colors cursor-pointer"
            >
              ثبت استعلام قیمت و ارسال نقشه
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
