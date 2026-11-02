import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/factoryData';
import { PageId } from '../types';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [department, setDepartment] = useState('دفتر فروش تهران');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) {
      setError('لطفاً نام، شماره تماس و متن پیام خود را تکمیل فرمایید.');
      return;
    }
    setError('');
    setSent(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <section className="bg-[#0B192C] text-white border-b border-slate-800 blueprint-grid-dark py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs text-[#E5B85C] font-bold bg-[#132843] border border-amber-500/30 px-3 py-1 rounded-full">
              <span>{COMPANY_INFO.brandName}</span>
              <span aria-hidden="true"> · </span>
              <span>راه‌های ارتباطی رسمی</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              تماس با دفتر فروش تهران و کارخانه یزد
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              جهت ثبت سفارش تولید، استعلام قیمت محصولات کاتالوگ و هماهنگی ساخت پیچ‌های سفارشی با
              دفتر فروش تهران یا کارخانه در شهرک صنعتی ولیعصر یزد در ارتباط باشید.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Official Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-5">
              <h2 className="text-lg font-bold text-[#0B192C]">
                اطلاعات تماس رسمی {COMPANY_INFO.brandName}
              </h2>

              <div className="divide-y divide-slate-200 text-sm">
                <div className="pb-4 space-y-1">
                  <p className="text-xs text-slate-500">دفتر فروش تهران</p>
                  <a
                    href={COMPANY_INFO.tehranPhoneHref}
                    className="inline-block text-base font-bold text-[#0B192C] hover:text-[#B48327] transition-colors tabular-nums"
                  >
                    {COMPANY_INFO.tehranPhone}
                  </a>
                </div>

                <div className="py-4 space-y-1">
                  <p className="text-xs text-slate-500">تلفن کارخانه</p>
                  <a
                    href={COMPANY_INFO.factoryPhoneHref}
                    className="inline-block text-base font-bold text-[#0B192C] hover:text-[#B48327] transition-colors tabular-nums"
                  >
                    {COMPANY_INFO.factoryPhone}
                  </a>
                </div>

                <div className="py-4 space-y-1">
                  <p className="text-xs text-slate-500">آدرس کارخانه</p>
                  <p className="font-semibold text-slate-900 leading-relaxed">
                    {COMPANY_INFO.factoryAddress}
                  </p>
                </div>

                <div className="py-4 space-y-1">
                  <p className="text-xs text-slate-500">کد پستی</p>
                  <p className="font-semibold text-slate-900 tabular-nums">
                    {COMPANY_INFO.postalCode}
                  </p>
                </div>

                <div className="pt-4 space-y-1">
                  <p className="text-xs text-slate-500">وب‌سایت رسمی</p>
                  <a
                    href={COMPANY_INFO.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block font-mono-tech font-semibold text-[#0B192C] hover:text-[#B48327] transition-colors"
                    dir="ltr"
                  >
                    {COMPANY_INFO.websiteDisplay}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#0B192C] text-white rounded-lg p-6 space-y-3">
              <h3 className="text-base font-bold">ارسال نقشه فنی و ثبت استعلام</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                برای استعلام قیمت ۳۷ محصول کاتالوگ یا ارسال نقشه پیچ‌های خاص و سفارشی (از سایز M2.20
                تا M10) از فرم تخصصی استعلام قیمت استفاده فرمایید.
              </p>
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => onNavigate('quote')}
                  className="px-4 py-2.5 text-xs font-bold text-white bg-[#B48327] hover:bg-[#9A6E1D] rounded-md transition-colors cursor-pointer"
                >
                  ورود به فرم استعلام قیمت و ارسال نقشه
                </button>
              </div>
            </div>
          </div>

          {/* Direct Message Form */}
          <div className="lg:col-span-7">
            {sent ? (
              <div className="bg-white border border-slate-200 rounded-lg p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-700" />
                  <h2 className="text-lg font-bold text-slate-900">پیام شما ثبت گردید</h2>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  درخواست شما جهت بررسی به «{department}» در {COMPANY_INFO.brandName} ثبت شد. کارشناسان
                  ما با شماره اعلام‌شده تماس خواهند گرفت.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setName('');
                    setCompany('');
                    setPhone('');
                    setMessage('');
                  }}
                  className="px-4 py-2 text-xs font-semibold text-[#0B192C] border border-slate-300 rounded-md hover:bg-slate-50 cursor-pointer"
                >
                  ارسال پیام جدید
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 space-y-5"
              >
                <div className="border-b border-slate-200 pb-4">
                  <h2 className="text-lg font-bold text-[#0B192C]">
                    ارسال پیام به {COMPANY_INFO.brandName}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    پیام یا درخواست هماهنگی خود را با دفتر فروش تهران یا کارخانه یزد ثبت نمایید.
                  </p>
                </div>

                {error && (
                  <div
                    role="alert"
                    className="bg-red-50 border border-red-200 text-red-800 text-sm rounded-md px-4 py-3"
                  >
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-semibold text-slate-800 mb-1.5"
                    >
                      نام و نام خانوادگی <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:bg-white focus:outline-none focus:border-[#0B192C]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-company"
                      className="block text-sm font-semibold text-slate-800 mb-1.5"
                    >
                      نام شرکت / مجموعه
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:bg-white focus:outline-none focus:border-[#0B192C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-sm font-semibold text-slate-800 mb-1.5"
                    >
                      شماره تماس <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      dir="ltr"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0912... / 021..."
                      className="w-full px-3.5 py-2.5 text-sm font-mono-tech text-right bg-slate-50 border border-slate-300 rounded-md focus:bg-white focus:outline-none focus:border-[#0B192C]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-dept"
                      className="block text-sm font-semibold text-slate-800 mb-1.5"
                    >
                      بخش مورد نظر
                    </label>
                    <select
                      id="contact-dept"
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:bg-white focus:outline-none focus:border-[#0B192C]"
                    >
                      <option value="دفتر فروش تهران">دفتر فروش تهران</option>
                      <option value="کارخانه یزد (شهرک صنعتی ولیعصر)">
                        کارخانه یزد (شهرک صنعتی ولیعصر)
                      </option>
                      <option value="واحد مهندسی و پیچ‌های سفارشی">
                        واحد مهندسی و پیچ‌های سفارشی
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-msg"
                    className="block text-sm font-semibold text-slate-800 mb-1.5"
                  >
                    متن پیام <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="contact-msg"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="شرح درخواست یا استعلام..."
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:bg-white focus:outline-none focus:border-[#0B192C]"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-3 text-sm font-bold text-white bg-[#0B192C] hover:bg-[#132843] rounded-md transition-colors cursor-pointer"
                  >
                    ارسال پیام
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
