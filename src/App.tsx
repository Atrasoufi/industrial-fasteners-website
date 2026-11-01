/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { PRODUCTS_CATALOG } from './data/factoryData';
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

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedCategory, setSelectedCategory] = useState<FastenerCategorySlug | 'all'>('all');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem>(PRODUCTS_CATALOG[3]); // Hex bolt default PDP preview
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [quotePrefill, setQuotePrefill] = useState<QuotePrefill | undefined>(undefined);

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (VALID_PAGES.includes(hash)) {
        setCurrentPage(hash);
      }
    };
    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    if (page !== 'articles') {
      setSelectedArticleId(null);
    }
    window.history.replaceState(null, '', `#${page}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProduct = (product: ProductItem) => {
    setSelectedProduct(product);
    navigateTo('product-detail');
  };

  const handleOpenProductById = (productId: string) => {
    const found = PRODUCTS_CATALOG.find((p) => p.id === productId);
    if (found) {
      handleOpenProduct(found);
    } else {
      navigateTo('products');
    }
  };

  const handleFilterCatalog = (categorySlug: FastenerCategorySlug | 'all') => {
    setSelectedCategory(categorySlug);
    navigateTo('products');
  };

  const handleRequestQuoteForProduct = (product: ProductItem) => {
    setQuotePrefill({
      productType: product.categoryTitle,
      notes: `استعلام تولید برای «${product.name}» بر اساس مشخصات مورد نیاز.`,
    });
    navigateTo('quote');
  };

  const handleOpenArticle = (articleId: string) => {
    setSelectedArticleId(articleId);
    navigateTo('articles');
  };

  return (
    <div dir="rtl" className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Header currentPage={currentPage} onNavigate={navigateTo} />

      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenProductById={handleOpenProductById}
            onFilterCatalog={handleFilterCatalog}
            onOpenArticle={handleOpenArticle}
          />
        )}

        {currentPage === 'about' && <AboutPage onNavigate={navigateTo} />}

        {currentPage === 'products' && (
          <ProductsCatalogPage
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onOpenProduct={handleOpenProduct}
            onRequestQuoteForProduct={handleRequestQuoteForProduct}
          />
        )}

        {currentPage === 'product-detail' && (
          <ProductDetailPage
            product={selectedProduct}
            onSelectProduct={setSelectedProduct}
            onNavigate={navigateTo}
            onRequestQuote={handleRequestQuoteForProduct}
          />
        )}

        {currentPage === 'custom' && <CustomManufacturingPage />}

        {currentPage === 'gallery' && <FactoryGalleryPage onNavigate={navigateTo} />}

        {currentPage === 'articles' && (
          <ArticlesPage
            selectedArticleId={selectedArticleId}
            onSelectArticle={setSelectedArticleId}
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'quote' && <RequestQuotePage prefill={quotePrefill} />}

        {currentPage === 'contact' && <ContactPage onNavigate={navigateTo} />}
      </main>

      <Footer
        onNavigate={navigateTo}
        onSelectCategory={(slug) => handleFilterCatalog(slug as FastenerCategorySlug)}
      />
    </div>
  );
}
