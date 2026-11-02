export type PageId =
  | 'home'
  | 'about'
  | 'products'
  | 'product-detail'
  | 'custom'
  | 'gallery'
  | 'articles'
  | 'quote'
  | 'contact';

export type FastenerCategorySlug =
  | 'cylinder-screws'
  | 'electrical-screws'
  | 'self-tapping-screws'
  | 'hexagon-bolts'
  | 'custom-special-screws'
  | 'nuts';

export interface TechnicalDocument {
  id: string;
  title: string;
  fileType: string;
  description: string;
}

export interface ProductItem {
  id: string;
  catalogRow: number;
  catalogRowFa: string;
  slug: string;
  name: string;
  categorySlug: FastenerCategorySlug;
  categoryTitle: string;
  catalogCategoryShort: string;
  dinStandard: string;
  isFormalDinCode: boolean;
  diameterOrSize: string;
  lengthOrHeight: string;
  explicitFeature?: string;
  description: string;
  categoryTechnicalNote: string;
  imageUrl: string;
  secondaryImageUrl: string;
  productionOperations: string[];
  documents: TechnicalDocument[];
}

export interface CategoryInfo {
  slug: FastenerCategorySlug;
  title: string;
  englishTitle: string;
  description: string;
  imageUrl: string;
  productCount: number;
  representativeProductSlug: string;
}

export interface CapabilityItem {
  index: string;
  title: string;
  description: string;
  highlight: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  unitName: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  department:
    | 'خط تولید'
    | 'کنترل کیفیت و آبکاری'
    | 'محصولات کاتالوگ'
    | 'تولید سفارشی طبق نقشه'
    | 'محصولات الکتریکی'
    | 'انواع مهره';
  caption: string;
  imageUrl: string;
  aspect: 'wide' | 'standard';
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  readingTime: string;
  excerpt: string;
  imageUrl: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
}

export interface QuotePrefill {
  productType?: string;
  material?: string;
  dimensions?: string;
  notes?: string;
}
