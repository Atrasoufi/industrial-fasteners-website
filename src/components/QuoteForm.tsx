import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2, FileUp, Trash2 } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../data/factoryData';
import { QuotePrefill } from '../types';

interface QuoteFormProps {
  prefill?: QuotePrefill;
  compact?: boolean;
}

interface FormState {
  fullName: string;
  companyName: string;
  phoneNumber: string;
  productType: string;
  material: string;
  dimensions: string;
  requiredQuantity: string;
  technicalNotes: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ prefill, compact = false }) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    companyName: '',
    phoneNumber: '',
    productType: prefill?.productType || PRODUCT_CATEGORIES[0].title,
    material: prefill?.material || '',
    dimensions: prefill?.dimensions || '',
    requiredQuantity: '',
    technicalNotes: prefill?.notes || '',
  });

  const [drawingFile, setDrawingFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (prefill) {
      setFormData((prev) => ({
        ...prev,
        productType: prefill.productType || prev.productType,
        material: prefill.material || prev.material,
        dimensions: prefill.dimensions || prev.dimensions,
        technicalNotes: prefill.notes || prev.technicalNotes,
      }));
    }
  }, [prefill]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;
    if (selected.size > 20 * 1024 * 1024) {
      setErrorMessage('حداکثر حجم مجاز برای فایل نقشه فنی ۲۰ مگابایت است.');
      return;
    }
    setDrawingFile(selected);
    setErrorMessage('');
  };

  const handleRemoveFile = () => {
    setDrawingFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const normalizeDigits = (val: string) =>
    val
      .replace(/[۰-۹]/g, (d) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d)))
      .replace(/[٠-٩]/g, (d) => String('٠١٢٣٤٥٦٧٨٩'.indexOf(d)))
      .replace(/[\s\-()]/g, '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setErrorMessage('لطفاً نام و نام خانوادگی درخواست‌کننده را وارد نمایید.');
      return;
    }
    if (!formData.companyName.trim()) {
      setErrorMessage('لطفاً نام شرکت یا واحد صنعتی سفارش‌دهنده را وارد نمایید.');
      return;
    }
    const cleanPhone = normalizeDigits(formData.phoneNumber);
    if (!/^(\+98|0)?\d{8,11}$/.test(cleanPhone)) {
      setErrorMessage('لطفاً یک شماره تماس معتبر (تلفن همراه یا ثابت با پیش‌شماره) وارد نمایید.');
      return;
    }
    if (!formData.dimensions.trim()) {
      setErrorMessage('لطفاً ابعاد تقریبی یا مشخصات سایز قطعه را درج فرمایید.');
      return;
    }
    if (!formData.requiredQuantity.trim()) {
      setErrorMessage('لطفاً تعداد یا تیراژ درخواستی سفارش را مشخص نمایید.');
      return;
    }

    const randomCode = `RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedCode(randomCode);
  };

  const handleReset = () => {
    setSubmittedCode(null);
    setErrorMessage('');
    setDrawingFile(null);
    setFormData({
      fullName: '',
      companyName: '',
      phoneNumber: '',
      productType: prefill?.productType || PRODUCT_CATEGORIES[0].title,
      material: '',
      dimensions: '',
      requiredQuantity: '',
      technicalNotes: '',
    });
  };

  if (submittedCode) {
    return (
      <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <CheckCircle2 className="w-7 h-7 text-emerald-700 shrink-0 mt-0.5" />
          <div className="space-y-3 flex-1">
            <h3 className="text-lg font-bold text-slate-900">
              درخواست استعلام قیمت با موفقیت ثبت شد
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              اطلاعات فنی سفارش شما برای بررسی امکان‌سنجی تولید، برآورد هزینه ابزار/تولید و زمان تحویل به
              واحد مهندسی فروش کارخانه ارسال گردید. کارشناسان ما پس از بررسی با شماره اعلام‌شده تماس خواهند گرفت.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-md p-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-slate-500">کد پیگیری استعلام: </span>
                <span className="font-mono-tech font-semibold text-[#0B192C]">{submittedCode}</span>
              </div>
              <div>
                <span className="text-slate-500">شرکت سفارش‌دهنده: </span>
                <span className="font-semibold text-slate-800">{formData.companyName}</span>
              </div>
              <div>
                <span className="text-slate-500">نوع محصول: </span>
                <span className="font-semibold text-slate-800">{formData.productType}</span>
              </div>
              <div>
                <span className="text-slate-500">تیراژ درخواستی: </span>
                <span className="font-semibold text-slate-800 tabular-nums">
                  {formData.requiredQuantity}
                </span>
              </div>
              {drawingFile && (
                <div className="sm:col-span-2">
                  <span className="text-slate-500">فایل نقشه پیوست‌شده: </span>
                  <span className="font-mono-tech text-xs text-slate-800">{drawingFile.name}</span>
                </div>
              )}
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2 text-sm font-medium text-[#0B192C] border border-slate-300 rounded-md hover:bg-slate-100 transition-colors cursor-pointer"
              >
                ثبت استعلام جدید دیگر
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      noValidate
      className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 space-y-6"
    >
      {!compact && (
        <div className="border-b border-slate-200 pb-4">
          <h3 className="text-lg font-bold text-[#0B192C]">
            فرم استعلام قیمت تولید و ارسال نقشه فنی
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            مشخصات اتصال مورد نیاز خود را وارد نمایید. برای قطعات خاص و سفارشی، پیوست نقشه فنی سرعت برآورد قیمت را افزایش می‌دهد.
          </p>
        </div>
      )}

      {errorMessage && (
        <div
          role="alert"
          className="bg-red-50 border border-red-200 text-red-800 text-sm rounded-md px-4 py-3"
        >
          {errorMessage}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* 1. Full Name */}
        <div>
          <label htmlFor="rfq-fullName" className="block text-sm font-semibold text-slate-800 mb-1.5">
            نام و نام خانوادگی <span className="text-red-600">*</span>
          </label>
          <input
            id="rfq-fullName"
            name="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="مثال: مهندس علی رضایی"
            className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#0B192C]"
          />
        </div>

        {/* 2. Company Name */}
        <div>
          <label htmlFor="rfq-companyName" className="block text-sm font-semibold text-slate-800 mb-1.5">
            نام شرکت / مجموعه صنعتی <span className="text-red-600">*</span>
          </label>
          <input
            id="rfq-companyName"
            name="companyName"
            type="text"
            required
            value={formData.companyName}
            onChange={handleChange}
            placeholder="نام شرکت یا کارخانه سفارش‌دهنده"
            className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#0B192C]"
          />
        </div>

        {/* 3. Phone Number */}
        <div>
          <label htmlFor="rfq-phoneNumber" className="block text-sm font-semibold text-slate-800 mb-1.5">
            شماره تماس (مستقیم یا همراه) <span className="text-red-600">*</span>
          </label>
          <input
            id="rfq-phoneNumber"
            name="phoneNumber"
            type="tel"
            dir="ltr"
            required
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="09120000000 / 02100000000"
            className="w-full px-3.5 py-2.5 text-sm font-mono-tech text-right bg-slate-50 border border-slate-300 rounded-md text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#0B192C]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* 4. Product Type */}
        <div>
          <label htmlFor="rfq-productType" className="block text-sm font-semibold text-slate-800 mb-1.5">
            نوع محصول
          </label>
          <select
            id="rfq-productType"
            name="productType"
            value={formData.productType}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md text-slate-900 focus:bg-white focus:outline-none focus:border-[#0B192C]"
          >
            {PRODUCT_CATEGORIES.map((cat) => (
              <option key={cat.slug} value={cat.title}>
                {cat.title}
              </option>
            ))}
            <option value="ترکیبی از پیچ، مهره و واشر">ترکیبی از پیچ، مهره و واشر</option>
          </select>
        </div>

        {/* 5. Material */}
        <div>
          <label htmlFor="rfq-material" className="block text-sm font-semibold text-slate-800 mb-1.5">
            جنس (متریال مورد نظر)
          </label>
          <input
            id="rfq-material"
            name="material"
            type="text"
            value={formData.material}
            onChange={handleChange}
            placeholder="مثال: فولاد کربنی، استیل، برنج..."
            className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#0B192C]"
          />
        </div>

        {/* 6. Dimensions */}
        <div>
          <label htmlFor="rfq-dimensions" className="block text-sm font-semibold text-slate-800 mb-1.5">
            ابعاد (قطر، طول، گام رزوه) <span className="text-red-600">*</span>
          </label>
          <input
            id="rfq-dimensions"
            name="dimensions"
            type="text"
            required
            value={formData.dimensions}
            onChange={handleChange}
            placeholder="مثال: قطر و طول بر حسب میلی‌متر یا طبق نقشه"
            className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#0B192C]"
          />
        </div>

        {/* 7. Required Quantity */}
        <div>
          <label htmlFor="rfq-requiredQuantity" className="block text-sm font-semibold text-slate-800 mb-1.5">
            تعداد / تیراژ درخواستی <span className="text-red-600">*</span>
          </label>
          <input
            id="rfq-requiredQuantity"
            name="requiredQuantity"
            type="text"
            required
            value={formData.requiredQuantity}
            onChange={handleChange}
            placeholder="مثال: ۵۰,۰۰۰ عدد / ماهانه"
            className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#0B192C]"
          />
        </div>
      </div>

      {/* 8. Technical Notes */}
      <div>
        <label htmlFor="rfq-technicalNotes" className="block text-sm font-semibold text-slate-800 mb-1.5">
          توضیحات فنی (نوع آبکاری، نیاز به سخت‌کاری، استاندارد مرجع یا شرایط بسته‌بندی)
        </label>
        <textarea
          id="rfq-technicalNotes"
          name="technicalNotes"
          rows={3}
          value={formData.technicalNotes}
          onChange={handleChange}
          placeholder="جزئیات پوشش سطحی، عملیات حرارتی، تلرانس‌های حساس یا نحوه تحویل مورد نظر خود را بنویسید..."
          className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#0B192C]"
        />
      </div>

      {/* 9. Technical Drawing Upload */}
      <div>
        <span className="block text-sm font-semibold text-slate-800 mb-1.5">
          بارگذاری نقشه فنی یا تصویر نمونه قطعه (اختیاری)
        </span>
        {!drawingFile ? (
          <label
            htmlFor="rfq-technicalDrawing"
            className="flex flex-col sm:flex-row items-center justify-between gap-4 px-5 py-4 border border-dashed border-slate-300 rounded-md bg-slate-50 hover:bg-slate-100/80 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3 text-right">
              <FileUp className="w-5 h-5 text-[#0B192C] shrink-0" />
              <div>
                <p className="text-sm font-medium text-slate-800">
                  انتخاب فایل نقشه مهندسی یا مستندات فنی
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  فرمت‌های قابل قبول: PDF, DWG, DXF, STEP, JPG, PNG (حداکثر ۲۰ مگابایت)
                </p>
              </div>
            </div>
            <span className="px-3.5 py-1.5 text-xs font-semibold text-[#0B192C] bg-white border border-slate-300 rounded-md whitespace-nowrap">
              انتخاب فایل
            </span>
            <input
              ref={fileInputRef}
              id="rfq-technicalDrawing"
              name="technical_drawing"
              type="file"
              accept=".pdf,.dwg,.dxf,.step,.stp,.iges,.jpg,.jpeg,.png"
              onChange={handleFileChange}
              className="sr-only"
            />
          </label>
        ) : (
          <div className="flex items-center justify-between gap-4 px-4 py-3 border border-slate-200 rounded-md bg-slate-50">
            <div className="min-w-0">
              <p className="text-sm font-medium text-slate-900 truncate font-mono-tech" dir="ltr">
                {drawingFile.name}
              </p>
              <p className="text-xs text-slate-500 tabular-nums mt-0.5">
                حجم فایل: {(drawingFile.size / 1024).toFixed(1)} کیلوبایت
              </p>
            </div>
            <button
              type="button"
              onClick={handleRemoveFile}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-red-700 hover:bg-red-50 rounded-md transition-colors cursor-pointer shrink-0"
            >
              <Trash2 className="w-4 h-4" />
              <span>حذف فایل</span>
            </button>
          </div>
        )}
      </div>

      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-100">
        <p className="text-xs text-slate-500">
          تمامی نقشه‌ها و مستندات فنی ارسالی نزد واحد مهندسی کارخانه محرمانه تلقی می‌گردد.
        </p>
        <button
          type="submit"
          className="px-6 py-3 text-sm font-bold text-white bg-[#B48327] hover:bg-[#9A6E1D] rounded-md transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0"
        >
          ارسال درخواست استعلام قیمت
        </button>
      </div>
    </form>
  );
};
