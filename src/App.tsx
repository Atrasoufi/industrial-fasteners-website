/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import {
  COMPANY_INFO,
  INDUSTRIAL_ARTICLES,
  PRODUCT_CATEGORIES,
  PRODUCTS_CATALOG,
} from './data/factoryData';
import { FastenerCategorySlug, PageId, ProductItem, QuotePrefill } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsCatalogPage } from './pages/ProductsCatalogPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CustomManufacturingPage } from './pages/CustomManufacturingPage';
import { FactoryGalleryPage } from './pages/FactoryGalleryPage';
import { ArticlesPage } from './pages/ArticlesPage';
import { RequestQuotePage } from './pages/RequestQuotePage';
import { ContactPage } from './pages/ContactPage';

const VALID_PAGES: PageId[] = [
  'home',
  'about',
  'products',
  'product-detail',
  'custom',
  'gallery',
  'articles',
  'quote',
  'contact',
];

const updateDocumentMeta = (title: string, description: string) => {
  document.title = title;
  const setMeta = (selector: string, content: string) => {
    const el = document.querySelector(selector);
    if (el) el.setAttribute('content', content);
  };
  setMeta('meta[name="description"]', description);
  setMeta('meta[property="og:title"]', title);
  setMeta('meta[property="og:description"]', description);
  setMeta('meta[name="twitter:title"]', title);
  setMeta('meta[name="twitter:description"]', description);
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedCategory, setSelectedCategory] = useState<FastenerCategorySlug | 'all'>('all');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem>(PRODUCTS_CATALOG[0]);
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [quotePrefill, setQuotePrefill] = useState<QuotePrefill | undefined>(undefined);

  useEffect(() => {
    const syncFromHash = () => {
      const rawHash = decodeURIComponent(window.location.hash.replace(/^#\/?/, ''));
      if (!rawHash) return;

      if (rawHash.startsWith('product/')) {
        const slug = rawHash.slice('product/'.length);
        const found = PRODUCTS_CATALOG.find((p) => p.slug === slug);
        if (found) {
          setSelectedProduct(found);
          setCurrentPage('product-detail');
          return;
        }
      }

      if (rawHash.startsWith('products/')) {
        const catSlug = rawHash.slice('products/'.length) as FastenerCategorySlug;
        if (PRODUCT_CATEGORIES.some((c) => c.slug === catSlug)) {
          setSelectedCategory(catSlug);
          setCurrentPage('products');
          return;
        }
      }

      if (rawHash.startsWith('articles/')) {
        const artSlug = rawHash.slice('articles/'.length);
        const art = INDUSTRIAL_ARTICLES.find((a) => a.slug === artSlug || a.id === artSlug);
        if (art) {
          setSelectedArticleId(art.id);
          setCurrentPage('articles');
          return;
        }
      }

      if (VALID_PAGES.includes(rawHash as PageId)) {
        setCurrentPage(rawHash as PageId);
      }
    };

    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, []);

  // Dynamic per-page and per-product SEO title & meta description
  useEffect(() => {
    const brand = COMPANY_INFO.brandName;
    if (currentPage === 'home') {
      updateDocumentMeta(
        `${brand} | ${COMPANY_INFO.slogan}`,
        `${brand}؛ تولیدکننده انواع پیچ استوانه، الکتریکی، خودکار، آچاری شش‌گوش، مهره و پیچ‌های خاص و سفارشی از سایز ۲/۲۰ تا ۱۰ میلی‌متر در یزد.`
      );
    } else if (currentPage === 'about') {
      updateDocumentMeta(
        `درباره ${brand} | کارخانه تولید پیچ و مهره یزد`,
        `آشنایی با ${brand}، احداث‌شده در سال ۱۳۹۹ در فضایی به مساحت ۱۰,۰۰۰ متر مربع با مراحل کامل پرس‌کاری، رزوه‌کاری، سخت‌کاری، آبکاری و کنترل کیفیت.`
      );
    } else if (currentPage === 'products') {
      const catObj = PRODUCT_CATEGORIES.find((c) => c.slug === selectedCategory);
      if (catObj) {
        updateDocumentMeta(
          `${catObj.title} | کاتالوگ محصولات ${brand}`,
          `${catObj.description.slice(0, 155)}`
        );
      } else {
        updateDocumentMeta(
          `کاتالوگ محصولات (۳۷ محصول) | ${brand}`,
          `مشخصات فنی ۳۷ محصول شامل پیچ‌های استوانه، الکتریکی، خودکار، آچاری شش‌گوش، مهره و پیچ‌های خاص بر اساس استاندارد DIN در ${brand}.`
        );
      }
    } else if (currentPage === 'product-detail') {
      updateDocumentMeta(
        `${selectedProduct.name} (${selectedProduct.dinStandard}) | ${brand}`,
        `مشخصات فنی ${selectedProduct.name} در دسته ${selectedProduct.categoryTitle} با مشخصه ${selectedProduct.dinStandard}، سایز ${selectedProduct.diameterOrSize} و ${selectedProduct.lengthOrHeight} تولید ${brand}.`
      );
    } else if (currentPage === 'custom') {
      updateDocumentMeta(
        `تولید پیچ‌های خاص و سفارشی (M2.20 تا M10) | ${brand}`,
        `تولید تخصصی انواع اتصالات و پیچ‌های صنعتی سفارشی از قطر M2.20 تا M10 در تمامی طول‌ها و اشکال خاص مهندسی مطابق نقشه مشتری در ${brand}.`
      );
    } else if (currentPage === 'gallery') {
      updateDocumentMeta(
        `گالری کارخانه و خطوط تولید | ${brand}`,
        `تصاویر خطوط پرس‌کاری، رزوه‌کاری، سخت‌کاری، آبکاری، کنترل کیفیت و محصولات تولیدی در مجموعه ۱۰,۰۰۰ متر مربعی ${brand}.`
      );
    } else if (currentPage === 'articles') {
      const art = INDUSTRIAL_ARTICLES.find((a) => a.id === selectedArticleId);
      if (art) {
        updateDocumentMeta(`${art.title} | ${brand}`, art.excerpt);
      } else {
        updateDocumentMeta(
          `مقالات صنعتی پیچ و مهره | ${brand}`,
          `مقالات تخصصی درباره کاربرد پیچ‌های الکتریکی، خودکار، استوانه، پیچ‌های آچاری شش‌گوش، انواع مهره و تولید پیچ سفارشی.`
        );
      }
    } else if (currentPage === 'quote') {
      updateDocumentMeta(
        `استعلام قیمت و ثبت سفارش تولید | ${brand}`,
        `فرم آنلاین استعلام قیمت پیچ و مهره و ارسال نقشه فنی پیچ‌های سفارشی در ${brand}. دفتر تهران: ${COMPANY_INFO.tehranPhone} - کارخانه یزد: ${COMPANY_INFO.factoryPhone}.`
      );
    } else if (currentPage === 'contact') {
      updateDocumentMeta(
        `تماس با ما | دفتر فروش تهران و کارخانه ${brand}`,
        `اطلاعات تماس ${brand}؛ دفتر فروش تهران: ${COMPANY_INFO.tehranPhone}، کارخانه یزد (شهرک صنعتی ولیعصر): ${COMPANY_INFO.factoryPhone}.`
      );
    }
  }, [currentPage, selectedCategory, selectedProduct, selectedArticleId]);

  const navigateTo = (page: PageId, customHash?: string) => {
    setCurrentPage(page);
    if (page !== 'articles') {
      setSelectedArticleId(null);
    }
    if (page === 'product-detail' && !customHash) {
      window.history.replaceState(null, '', `#product/${selectedProduct.slug}`);
    } else {
      window.history.replaceState(null, '', customHash || `#${page}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProduct = (product: ProductItem) => {
    setSelectedProduct(product);
    navigateTo('product-detail', `#product/${product.slug}`);
  };

  const handleOpenProductBySlug = (slug: string) => {
    const found = PRODUCTS_CATALOG.find((p) => p.slug === slug);
    if (found) {
      handleOpenProduct(found);
    } else {
      navigateTo('products');
    }
  };

  const handleFilterCatalog = (categorySlug: FastenerCategorySlug | 'all') => {
    setSelectedCategory(categorySlug);
    const targetHash =
      categorySlug === 'all' ? '#products' : `#products/${categorySlug}`;
    navigateTo('products', targetHash);
  };

  const handleRequestQuoteForProduct = (product: ProductItem) => {
    setQuotePrefill({
      productType: `${product.name} (${product.dinStandard})`,
      dimensions: `${product.diameterOrSize} — ${product.lengthOrHeight}`,
      notes: `استعلام تولید برای ردیف ${product.catalogRowFa} کاتالوگ: «${product.name}» (${product.dinStandard}).`,
    });
    navigateTo('quote');
  };

  const handleOpenArticle = (articleId: string) => {
    const art = INDUSTRIAL_ARTICLES.find((a) => a.id === articleId);
    setSelectedArticleId(articleId);
    navigateTo('articles', art ? `#articles/${art.slug}` : '#articles');
  };

  return (
    <div dir="rtl" className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Header currentPage={currentPage} onNavigate={(page) => navigateTo(page)} />

      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={(page) => navigateTo(page)}
            onOpenProductBySlug={handleOpenProductBySlug}
            onFilterCatalog={handleFilterCatalog}
            onOpenArticle={handleOpenArticle}
          />
        )}

        {currentPage === 'about' && <AboutPage onNavigate={(page) => navigateTo(page)} />}

        {currentPage === 'products' && (
          <ProductsCatalogPage
            selectedCategory={selectedCategory}
            onSelectCategory={(cat) => {
              setSelectedCategory(cat);
              window.history.replaceState(
                null,
                '',
                cat === 'all' ? '#products' : `#products/${cat}`
              );
            }}
            onOpenProduct={handleOpenProduct}
            onRequestQuoteForProduct={handleRequestQuoteForProduct}
          />
        )}

        {currentPage === 'product-detail' && (
          <ProductDetailPage
            product={selectedProduct}
            onSelectProduct={(prod) => {
              setSelectedProduct(prod);
              window.history.replaceState(null, '', `#product/${prod.slug}`);
            }}
            onNavigate={(page) => navigateTo(page)}
            onRequestQuote={handleRequestQuoteForProduct}
          />
        )}

        {currentPage === 'custom' && (
          <CustomManufacturingPage onOpenProduct={handleOpenProduct} />
        )}

        {currentPage === 'gallery' && (
          <FactoryGalleryPage onNavigate={(page) => navigateTo(page)} />
        )}

        {currentPage === 'articles' && (
          <ArticlesPage
            selectedArticleId={selectedArticleId}
            onSelectArticle={(id) => {
              setSelectedArticleId(id);
              const art = id ? INDUSTRIAL_ARTICLES.find((a) => a.id === id) : null;
              window.history.replaceState(
                null,
                '',
                art ? `#articles/${art.slug}` : '#articles'
              );
            }}
            onNavigate={(page) => navigateTo(page)}
          />
        )}

        {currentPage === 'quote' && <RequestQuotePage prefill={quotePrefill} />}

        {currentPage === 'contact' && <ContactPage onNavigate={(page) => navigateTo(page)} />}
      </main>

      <Footer
        onNavigate={(page) => navigateTo(page)}
        onSelectCategory={(slug) => handleFilterCatalog(slug as FastenerCategorySlug)}
      />
    </div>
  );
}
