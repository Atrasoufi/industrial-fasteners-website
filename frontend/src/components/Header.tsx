import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/factoryData';
import { PageId } from '../types';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

const PRIMARY_NAV_ITEMS: { id: PageId; label: string }[] = [
  { id: 'home', label: 'صفحه اصلی' },
  { id: 'products', label: 'کاتالوگ محصولات' },
  { id: 'custom', label: 'پیچ خاص و سفارشی' },
  { id: 'about', label: 'درباره کارخانه' },
  { id: 'contact', label: 'تماس با ما' },
];

const MOBILE_ALL_PAGES: { id: PageId; label: string }[] = [
  { id: 'home', label: 'صفحه اصلی' },
  { id: 'products', label: 'کاتالوگ محصولات (۳۷ محصول)' },
  { id: 'product-detail', label: 'مشخصات فنی محصول' },
  { id: 'custom', label: 'تولید پیچ خاص و سفارشی' },
  { id: 'about', label: 'درباره صنایع پیچ سازان آراز یزد' },
  { id: 'gallery', label: 'گالری کارخانه' },
  { id: 'articles', label: 'مقالات صنعتی' },
  { id: 'contact', label: 'تماس با دفتر تهران و کارخانه یزد' },
];

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0B192C] text-white border-b border-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Title */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="flex items-center gap-2 text-base sm:text-lg lg:text-xl font-extrabold tracking-tight text-white whitespace-nowrap shrink-0 hover:text-[#E5B85C] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E5B85C]"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#E5B85C] shadow-[0_0_8px_#E5B85C]" />
          <span>{COMPANY_INFO.brandName}</span>
        </a>

        {/* Zone 2: Primary Navigation Links */}
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
                    ? 'text-[#E5B85C] border-[#E5B85C] font-bold'
                    : 'border-transparent text-slate-300 hover:text-white hover:border-slate-500'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary CTA Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleNavClick('quote')}
            className="px-4 py-2 text-xs sm:text-sm font-bold text-white bg-[#B48327] hover:bg-[#9A6E1D] rounded-md transition-colors duration-150 shadow-md whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E5B85C]"
          >
            استعلام قیمت
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'بستن منو' : 'باز کردن منو'}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#07111E] border-t border-slate-800 px-4 pt-3 pb-5 shadow-2xl">
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
                      ? 'bg-[#0B192C] text-[#E5B85C] font-bold border border-amber-500/30'
                      : 'text-slate-300 hover:bg-[#0B192C] hover:text-white'
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
              className="w-full py-2.5 px-4 text-sm font-bold text-white bg-[#B48327] hover:bg-[#9A6E1D] rounded-md transition-colors cursor-pointer shadow-md"
            >
              ثبت استعلام قیمت و سفارش تولید
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
