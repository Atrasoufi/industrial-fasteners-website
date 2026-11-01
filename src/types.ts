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
  | 'cylindrical-screws'
  | 'electrical-screws'
  | 'self-tapping-screws'
  | 'hex-bolts'
  | 'nuts'
  | 'washers'
  | 'custom-screws';

export interface TechnicalDocument {
  id: string;
  title: string;
  fileType: string;
  description: string;
}

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  categorySlug: FastenerCategorySlug;
  categoryTitle: string;
  shortSummary: string;
  imageUrl: string;
  secondaryImageUrl: string;
  material: string;
  diameter: string;
  length: string;
  standard: string;
  surfaceCoating: string;
  technicalDescription: string;
  productionOperations: string[];
  documents: TechnicalDocument[];
}

export interface CategoryInfo {
  slug: FastenerCategorySlug;
  title: string;
  subtitle: string;
  imageUrl: string;
  representativeProductId: string;
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
  department: 'خط تولید' | 'کنترل کیفیت و آبکاری' | 'محصولات صنعتی' | 'تولید سفارشی طبق نقشه';
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
