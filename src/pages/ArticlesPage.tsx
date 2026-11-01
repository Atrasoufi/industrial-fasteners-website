import React from 'react';
import { ArrowRight } from 'lucide-react';
import { INDUSTRIAL_ARTICLES } from '../data/factoryData';
import { PageId } from '../types';
import { IndustrialImage } from '../components/IndustrialImage';

interface ArticlesPageProps {
  selectedArticleId: string | null;
  onSelectArticle: (id: string | null) => void;
  onNavigate: (page: PageId) => void;
}

export const ArticlesPage: React.FC<ArticlesPageProps> = ({
  selectedArticleId,
  onSelectArticle,
  onNavigate,
}) => {
  const activeArticle = selectedArticleId
    ? INDUSTRIAL_ARTICLES.find((a) => a.id === selectedArticleId) || null
    : null;

  if (activeArticle) {
    return (
      <div className="bg-slate-50 min-h-screen pb-20">
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <button
              type="button"
              onClick={() => onSelectArticle(null)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B192C] hover:text-[#B48327] transition-colors cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
              <span>بازگشت به فهرست مقالات صنعتی</span>
            </button>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
            <div className="aspect-[16/9] bg-[#0B192C]">
              <IndustrialImage
                src={activeArticle.imageUrl}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-10 space-y-6">
              <div className="flex items-center gap-2 text-xs text-[#9A6E1D] font-semibold">
                <span>{activeArticle.category}</span>
                <span aria-hidden="true">·</span>
                <span>{activeArticle.readingTime}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B192C] leading-snug">
                {activeArticle.title}
              </h1>

              <p className="text-base text-slate-700 font-medium leading-relaxed border-b border-slate-200 pb-6">
                {activeArticle.excerpt}
              </p>

              <div className="space-y-8">
                {activeArticle.sections.map((sec) => (
                  <section key={sec.heading} className="space-y-3">
                    <h2 className="text-lg font-bold text-[#0B192C]">{sec.heading}</h2>
                    {sec.paragraphs.map((p, idx) => (
                      <p key={idx} className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </section>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50 p-5 rounded-md">
                <div>
                  <p className="text-sm font-bold text-[#0B192C]">
                    نیاز به مشاوره فنی یا تولید سفارشی اتصالات دارید؟
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    نقشه یا مشخصات فنی خود را برای بررسی مستقیم کارشناسان تولید ارسال نمایید.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('quote')}
                  className="px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#B48327] hover:bg-[#9A6E1D] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  ثبت استعلام قیمت
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <section className="bg-[#0B192C] text-white py-12 lg:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs text-[#E5B85C] font-medium">
              <span>دانشنامه و مقالات صنعتی</span>
              <span aria-hidden="true"> · </span>
              <span>مهندسی تولید و تامین اتصالات</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              مقالات تخصصی پیچ، مهره و فرآیندهای ساخت
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              مطالب کاربردی ویژه مدیران تدارکات صنعتی، مهندسان طراح و واحدهای کنترل کیفیت درباره
              سفارش‌گذاری، رزوه‌زنی، سخت‌کاری و آبکاری اتصالات.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {INDUSTRIAL_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col justify-between hover:border-slate-400 transition-colors"
            >
              <div>
                <div
                  onClick={() => onSelectArticle(article.id)}
                  className="aspect-[4/3] bg-[#0B192C] overflow-hidden cursor-pointer"
                >
                  <IndustrialImage
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span>{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readingTime}</span>
                  </div>
                  <h2 className="text-lg font-bold text-[#0B192C] leading-snug">
                    <button
                      type="button"
                      onClick={() => onSelectArticle(article.id)}
                      className="text-right hover:text-[#B48327] transition-colors cursor-pointer"
                    >
                      {article.title}
                    </button>
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">{article.excerpt}</p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <button
                  type="button"
                  onClick={() => onSelectArticle(article.id)}
                  className="text-xs font-bold text-[#0B192C] hover:text-[#B48327] transition-colors cursor-pointer"
                >
                  مطالعه کامل مقاله ←
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
