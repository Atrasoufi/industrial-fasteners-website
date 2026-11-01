import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { PageId } from '../types';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [department, setDepartment] = useState('واحد فروش صنعتی و سفارشات');
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
      <section className="bg-[#0B192C] text-white py-12 lg:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs text-[#E5B85C] font-medium">
              <span>ارتباط با کارخانه و دفتر مرکزی</span>
              <span aria-hidden="true"> · </span>
              <span>پاسخگویی مستقیم B2B</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">تماس با ما</h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              جهت هماهنگی بازدید صنعتی از خط تولید، پیگیری سفارشات در حال ساخت و ارتباط مستقیم با
              واحد فروش و مهندسی کارخانه از راه‌های ارتباطی زیر استفاده فرمایید.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-5">
              <h2 className="text-lg font-bold text-[#0B192C]">اطلاعات تماس واحدها</h2>

              <div className="divide-y divide-slate-200 text-sm">
                <div className="pb-4 space-y-1">
                  <p className="text-xs text-slate-500">نشانی کارخانه و خط تولید</p>
                  <p className="font-semibold text-slate-900">
                    شهرک صنعتی، بلوار صنعتگران، واحد تولیدی صنعت‌بست ایرانیان (محل درج نشانی دقیق کارخانه در قالب جنگو)
                  </p>
                </div>

                <div className="py-4 space-y-1">
                  <p className="text-xs text-slate-500">تلفن دفتر فروش و کارخانه</p>
                  <p className="font-mono-tech font-semibold text-slate-900 text-right" dir="ltr">
                    021 - 0000 0000
                  </p>
                </div>

                <div className="py-4 space-y-1">
                  <p className="text-xs text-slate-500">پست الکترونیک واحد فنی و استعلام</p>
                  <p className="font-mono-tech font-semibold text-slate-900 text-right" dir="ltr">
                    rfq@sanatbast-factory.ir
                  </p>
                </div>

                <div className="pt-4 space-y-1">
                  <p className="text-xs text-slate-500">ساعات کاری کارخانه و پذیرش بار</p>
                  <p className="font-semibold text-slate-900">
                    شنبه تا چهارشنبه ۸:۰۰ الی ۱۷:۰۰ · پنجشنبه‌ها ۸:۰۰ الی ۱۳:۰۰
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#0B192C] text-white rounded-lg p-6 space-y-3">
              <h3 className="text-base font-bold">ارسال نقشه فنی و استعلام تولید</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                اگر قصد ارسال فایل نقشه مهندسی و دریافت پیش‌فاکتور تولید دارید، استفاده از فرم تخصصی
                استعلام قیمت سریع‌ترین مسیر بررسی است.
              </p>
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => onNavigate('quote')}
                  className="px-4 py-2.5 text-xs font-bold text-white bg-[#B48327] hover:bg-[#9A6E1D] rounded-md transition-colors cursor-pointer"
                >
                  ورود به فرم استعلام قیمت و آپلود نقشه
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
                  درخواست شما به «{department}» ارجاع داده شد. همکاران ما در ساعات کاری با شما تماس
                  خواهند گرفت.
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
                  <h2 className="text-lg font-bold text-[#0B192C]">فرم ارتباط مستقیم با واحدهای کارخانه</h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    پیام یا درخواست هماهنگی جلسه حضوری و بازدید از کارخانه را ثبت فرمایید.
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
                    <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-800 mb-1.5">
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
                    <label htmlFor="contact-company" className="block text-sm font-semibold text-slate-800 mb-1.5">
                      نام شرکت / سازمان
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
                    <label htmlFor="contact-phone" className="block text-sm font-semibold text-slate-800 mb-1.5">
                      شماره تماس <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      dir="ltr"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="09120000000"
                      className="w-full px-3.5 py-2.5 text-sm font-mono-tech text-right bg-slate-50 border border-slate-300 rounded-md focus:bg-white focus:outline-none focus:border-[#0B192C]"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-dept" className="block text-sm font-semibold text-slate-800 mb-1.5">
                      واحد مقصد
                    </label>
                    <select
                      id="contact-dept"
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:bg-white focus:outline-none focus:border-[#0B192C]"
                    >
                      <option value="واحد فروش صنعتی و سفارشات">واحد فروش صنعتی و سفارشات</option>
                      <option value="واحد مهندسی و ساخت سفارشی">واحد مهندسی و ساخت سفارشی</option>
                      <option value="واحد کنترل کیفیت">واحد کنترل کیفیت</option>
                      <option value="هماهنگی بازدید از کارخانه">هماهنگی بازدید از کارخانه</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-msg" className="block text-sm font-semibold text-slate-800 mb-1.5">
                    متن پیام <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="contact-msg"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="شرح درخواست یا موضوع هماهنگی..."
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:bg-white focus:outline-none focus:border-[#0B192C]"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-3 text-sm font-bold text-white bg-[#0B192C] hover:bg-[#132843] rounded-md transition-colors cursor-pointer"
                  >
                    ارسال پیام به کارخانه
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
