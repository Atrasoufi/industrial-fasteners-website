import { FastenerCategorySlug, ProductItem } from '../types';

const IMAGES = {
  factoryHero: '/src/assets/catalog_products/catalog_cover_showcase.png',
  screwsAssortment: '/src/assets/catalog_products/cover_screws_clean.png',
  hexBoltsNuts: '/src/assets/catalog_products/prod_31.png',
  customBlueprint: '/src/assets/catalog_products/prod_23.png',
  qualityPlating: '/src/assets/catalog_products/catalog_cover_showcase.png',
} as const;

export const CATEGORY_DESCRIPTIONS: Record<FastenerCategorySlug, string> = {
  'cylinder-screws':
    'این پیچ‌ها با تنوع بالای گل‌پیچ (سرگرد، سرتخت و گل‌پهن) در قطرها و طول‌های گوناگون بنا به سفارش مشتری تولید می‌شوند. ساقه این نوع پیچ مارپیچ بوده و عموماً اتصال آن به همراه مهره صورت می‌گیرد و کاربرد فراوانی در صنایع مختلف دارد.',
  'electrical-screws':
    'معمولاً شامل پیچ‌های استوانه‌ای ریز با تنوع فرمی بالا هستند که متناسب با قالب محصول مصرف‌کننده از نظر قطر، طول و فرم گل‌پیچ تولید می‌شوند. به علت حساسیت و ابعاد ظریف، نیازمند دقت تولیدی فوق‌العاده‌ای بوده و در تولید لوازم خانگی و قطعات صنعت الکتریک کشور نقش به‌سزایی دارند.',
  'self-tapping-screws':
    'دارای رزوه و نوک تیز هستند که به واسطه طراحی دنده‌ها نیازی به مهره یا مهره توکار ندارند. اتصالی چندمنظوره و پرطرفدار بوده و سایزهای ظریف آن کاربرد وسیعی در صنایع الکتریکی و ساخت لوازم خانگی دارد.',
  'hexagon-bolts':
    'در انواع متریال آهنی (کلاس 5.6)، خشکه (کلاس 8.8) و استیل با پوشش‌های گالوانیزه گرم، زینک و داکرومات تولید می‌شوند. هرچه گرید محصول بالاتر برود درصد کربن و استحکام کششی افزایش می‌یابد. این پیچ‌ها جزو پرمصرف‌ترین اقلام در صنایع مختلف به‌ویژه صنایع سنگین هستند.',
  'custom-special-screws':
    'تولید تخصصی انواع اتصالات و پیچ‌های صنعتی سفارشی از قطر M2.20 تا M10 در تمامی طول‌ها و اشکال خاص مهندسی مطابق نقشه مشتری.',
  nuts:
    'تولید و عرضه انواع مهره‌های شش‌گوش آهنی، واشردار و کاسه‌نمدی به صورت خودرنگ و گالوانیزه. پرکاربرد در صنایع نفت و گاز، لوازم خانگی و مجموعه‌های مونتاژی کوچک و بزرگ صنعتی با استحکام بالا.',
};

interface CompactRow {
  r: number;
  fa: string;
  slug: string;
  shortCat: string;
  cat: FastenerCategorySlug;
  catTitle: string;
  name: string;
  din: string;
  size: string;
  len: string;
  feat?: string;
}

const ROWS: CompactRow[] = [
  { r: 1, fa: '۱', slug: 'cylinder-screw-slotted-phillips-din-8001', shortCat: 'استوانه', cat: 'cylinder-screws', catTitle: 'پیچ‌های استوانه', name: 'پیچ استوانه دوسو چهارسو', din: 'DIN 8001', size: 'M4 تا M8', len: 'طول: 4mm تا 100mm' },
  { r: 2, fa: '۲', slug: 'cylinder-flat-head-screw-din-965', shortCat: 'استوانه', cat: 'cylinder-screws', catTitle: 'پیچ‌های استوانه', name: 'پیچ استوانه سرتخت', din: 'DIN 965', size: 'M4 تا M8', len: 'طول: 5mm تا 100mm' },
  { r: 3, fa: '۳', slug: 'cylinder-screw-5x50-din-8001', shortCat: 'استوانه', cat: 'cylinder-screws', catTitle: 'پیچ‌های استوانه', name: 'پیچ استوانه ۵۰×۵ دوسو چهارسو', din: 'DIN 8001', size: 'M5', len: 'طول: 50mm' },
  { r: 4, fa: '۴', slug: 'cylinder-pan-head-screw-din-7985', shortCat: 'استوانه', cat: 'cylinder-screws', catTitle: 'پیچ‌های استوانه', name: 'پیچ استوانه گل‌پهن', din: 'DIN 7985', size: 'M4 تا M6', len: 'طول: 5mm تا 8mm' },
  { r: 5, fa: '۵', slug: 'aluminum-screw-1-4-inch-din-174', shortCat: 'استوانه', cat: 'cylinder-screws', catTitle: 'پیچ‌های استوانه', name: 'پیچ آلومینیومی', din: 'DIN 174', size: '1/4 اینچ', len: 'سایز اینچی سفارشی', feat: 'جنس قیدشده در عنوان: آلومینیومی' },
  { r: 6, fa: '۶', slug: 'nickel-silver-screw-3-16-inch', shortCat: 'استوانه', cat: 'cylinder-screws', catTitle: 'پیچ‌های استوانه', name: 'پیچ ورشویی', din: 'DIN 3/16', size: '3/16 اینچ', len: 'سایز اینچی سفارشی', feat: 'جنس قیدشده در عنوان: ورشویی' },

  { r: 7, fa: '۷', slug: 'electrical-screw-3x12-din-8001', shortCat: 'الکتریکی', cat: 'electrical-screws', catTitle: 'پیچ‌های الکتریکی', name: 'پیچ ۳×۱۲ دوسو چهارسو', din: 'DIN 8001', size: 'M3', len: 'طول: 12mm' },
  { r: 8, fa: '۸', slug: 'electrical-screw-3-5x8-sulfated-din-8001', shortCat: 'الکتریکی', cat: 'electrical-screws', catTitle: 'پیچ‌های الکتریکی', name: 'پیچ ۳٫۵×۸ دوسو چهارسو (سولفاته)', din: 'DIN 8001', size: 'M3.5', len: 'طول: 8mm', feat: 'پوشش قیدشده در عنوان: سولفاته' },
  { r: 9, fa: '۹', slug: 'electrical-pilot-screw-3x6-din-8001', shortCat: 'الکتریکی', cat: 'electrical-screws', catTitle: 'پیچ‌های الکتریکی', name: 'پیچ ۳×۶ راهنمادار', din: 'DIN 8001', size: 'M3', len: 'طول: 6mm', feat: 'مشخصه عنوان: راهنمادار' },
  { r: 10, fa: '۱۰', slug: 'electrical-terminal-screw-3x5-din-8001', shortCat: 'الکتریکی', cat: 'electrical-screws', catTitle: 'پیچ‌های الکتریکی', name: 'پیچ ۳×۵ دوسو ترمینالی', din: 'DIN 8001', size: 'M3', len: 'طول: 5mm', feat: 'کاربری عنوان: دوسو ترمینالی' },
  { r: 11, fa: '۱۱', slug: 'electrical-flat-head-screw-3x5-din-965', shortCat: 'الکتریکی', cat: 'electrical-screws', catTitle: 'پیچ‌های الکتریکی', name: 'پیچ ۳×۵ سرتخت', din: 'DIN 965', size: 'M3', len: 'طول: 5mm' },
  { r: 12, fa: '۱۲', slug: 'electrical-washer-head-screw-3-5x6-din-920', shortCat: 'الکتریکی', cat: 'electrical-screws', catTitle: 'پیچ‌های الکتریکی', name: 'پیچ ۳٫۵×۶ استوانه واشردار', din: 'DIN 920', size: 'M3.5', len: 'طول: 6mm', feat: 'فرم عنوان: استوانه واشردار' },
  { r: 13, fa: '۱۳', slug: 'electrical-terminal-screw-3-5x7-din-920', shortCat: 'الکتریکی', cat: 'electrical-screws', catTitle: 'پیچ‌های الکتریکی', name: 'پیچ ۳٫۵×۷ دوسو چهارسو ترمینالی', din: 'DIN 920', size: 'M3.5', len: 'طول: 7mm', feat: 'کاربری عنوان: دوسو چهارسو ترمینالی' },
  { r: 14, fa: '۱۴', slug: 'electrical-pilot-screw-3x5-8-din-7958', shortCat: 'الکتریکی', cat: 'electrical-screws', catTitle: 'پیچ‌های الکتریکی', name: 'پیچ ۳×۵٫۸ استوانه چهارسو راهنمادار', din: 'DIN 7958', size: 'M3', len: 'طول: 5.8mm (8.5mm)', feat: 'فرم عنوان: استوانه چهارسو راهنمادار' },

  { r: 15, fa: '۱۵', slug: 'self-tapping-screw-2-20x6-din-966', shortCat: 'خودکار', cat: 'self-tapping-screws', catTitle: 'پیچ‌های خودکار', name: 'پیچ ۲٫۲۰×۶ خودکاری چهارسو', din: 'DIN 966', size: 'M2.20', len: 'طول: 6mm' },
  { r: 16, fa: '۱۶', slug: 'self-tapping-screw-2-20x13-din-7981', shortCat: 'خودکار', cat: 'self-tapping-screws', catTitle: 'پیچ‌های خودکار', name: 'پیچ ۲٫۲۰×۱۳ خودکاری چهارسو', din: 'DIN 7981', size: 'M2.20', len: 'طول: 13mm' },
  { r: 17, fa: '۱۷', slug: 'self-tapping-screw-4-2x13-din-7981', shortCat: 'خودکار', cat: 'self-tapping-screws', catTitle: 'پیچ‌های خودکار', name: 'پیچ ۴٫۲×۱۳ خودکاری چهارسو', din: 'DIN 7981', size: 'M4.2', len: 'طول: 13mm' },
  { r: 18, fa: '۱۸', slug: 'self-tapping-screw-3-5x13-din-7981', shortCat: 'خودکار', cat: 'self-tapping-screws', catTitle: 'پیچ‌های خودکار', name: 'پیچ ۳٫۵×۱۳ خودکاری چهارسو', din: 'DIN 7981', size: 'M3.5', len: 'طول: 13mm' },
  { r: 19, fa: '۱۹', slug: 'self-tapping-screw-2-6x8-din-8000', shortCat: 'خودکار', cat: 'self-tapping-screws', catTitle: 'پیچ‌های خودکار', name: 'پیچ ۲٫۶×۸ خودکاری چهارسو', din: 'DIN 8000', size: 'M2.6', len: 'طول: 8mm' },
  { r: 20, fa: '۲۰', slug: 'self-tapping-screw-2-9x9-5-din-7981', shortCat: 'خودکار', cat: 'self-tapping-screws', catTitle: 'پیچ‌های خودکار', name: 'پیچ ۲٫۹×۹٫۵ خودکاری چهارسو', din: 'DIN 7981', size: 'M2.9', len: 'طول: 9.5mm' },
  { r: 21, fa: '۲۱', slug: 'self-tapping-screw-2-9x10-bz-din-8001', shortCat: 'خودکار', cat: 'self-tapping-screws', catTitle: 'پیچ‌های خودکار', name: 'پیچ ۲٫۹×۱۰ خودکاری دوسو چهارسو BZ', din: 'DIN 8001', size: 'M2.9', len: 'طول: 10mm', feat: 'مشخصه عنوان: BZ' },

  { r: 22, fa: '۲۲', slug: 'special-screw-2-20x13-torx-din-966', shortCat: 'خاص', cat: 'custom-special-screws', catTitle: 'پیچ‌های خاص و سفارشی', name: 'پیچ ۲٫۲۰×۱۳ خودکاری ستاره‌ای', din: 'DIN 966', size: 'M2.20', len: 'طول: 13mm', feat: 'فرم شیار: ستاره‌ای' },
  { r: 23, fa: '۲۳', slug: 'special-fix-screw-4x60-din-966', shortCat: 'خاص', cat: 'custom-special-screws', catTitle: 'پیچ‌های خاص و سفارشی', name: 'پیچ ۴×۶۰ فیکس', din: 'DIN 966', size: 'M4', len: 'طول: 60mm', feat: 'مدل عنوان: فیکس' },
  { r: 24, fa: '۲۴', slug: 'special-flat-head-screw-2-9x8-bz-din-965', shortCat: 'خاص', cat: 'custom-special-screws', catTitle: 'پیچ‌های خاص و سفارشی', name: 'پیچ ۲٫۹×۸ سرتخت BZ', din: 'DIN 965', size: 'M2.9', len: 'طول: 8mm', feat: 'مشخصه عنوان: سرتخت BZ' },
  { r: 25, fa: '۲۵', slug: 'special-washer-self-tapping-screw-2-9x13', shortCat: 'خاص', cat: 'custom-special-screws', catTitle: 'پیچ‌های خاص و سفارشی', name: 'پیچ ۲٫۹×۱۳ خودکاری واشردار', din: 'واشردار', size: 'M2.9', len: 'طول: 13mm', feat: 'فرم گل‌پیچ: واشردار' },
  { r: 26, fa: '۲۶', slug: 'special-torx-self-tapping-screw-2-9x6-5', shortCat: 'خاص', cat: 'custom-special-screws', catTitle: 'پیچ‌های خاص و سفارشی', name: 'پیچ ۲٫۹×۶٫۵ خودکاری ستاره‌ای', din: 'ستاره‌ای', size: 'M2.9', len: 'طول: 6.5mm', feat: 'فرم شیار: ستاره‌ای' },
  { r: 27, fa: '۲۷', slug: 'special-screw-3x4-din-8001', shortCat: 'خاص', cat: 'custom-special-screws', catTitle: 'پیچ‌های خاص و سفارشی', name: 'پیچ ۳×۴ دوسو چهارسو', din: 'DIN 8001', size: 'M3', len: 'طول: 4mm' },
  { r: 28, fa: '۲۸', slug: 'special-oval-head-screw-4x6-din-7983', shortCat: 'خاص', cat: 'custom-special-screws', catTitle: 'پیچ‌های خاص و سفارشی', name: 'پیچ ۴×۶ استوانه گل‌شیری', din: 'DIN 7983', size: 'M4', len: 'طول: 6mm', feat: 'فرم گل‌پیچ: گل‌شیری' },
  { r: 29, fa: '۲۹', slug: 'special-pointed-cylinder-screw-5x12-din-7958', shortCat: 'خاص', cat: 'custom-special-screws', catTitle: 'پیچ‌های خاص و سفارشی', name: 'پیچ ۵×۱۲ استوانه نوک‌تیز', din: 'DIN 7958', size: 'M5', len: 'طول: 12mm', feat: 'فرم انتهایی: نوک‌تیز' },

  { r: 30, fa: '۳۰', slug: 'hex-bolt-m5-din-933', shortCat: 'آچاری', cat: 'hexagon-bolts', catTitle: 'پیچ‌های آچاری و شش‌گوش', name: 'پیچ M5 آچاری', din: 'DIN 933', size: 'M5', len: 'طول: 10mm تا 55mm' },
  { r: 31, fa: '۳۱', slug: 'hex-bolt-m6-din-933', shortCat: 'آچاری', cat: 'hexagon-bolts', catTitle: 'پیچ‌های آچاری و شش‌گوش', name: 'پیچ M6 آچاری', din: 'DIN 933', size: 'M6', len: 'طول: 15mm تا 50mm' },
  { r: 32, fa: '۳۲', slug: 'hex-flange-bolt-m8-din-933', shortCat: 'آچاری', cat: 'hexagon-bolts', catTitle: 'پیچ‌های آچاری و شش‌گوش', name: 'پیچ M8 آچاری واشردار', din: 'DIN 933', size: 'M8', len: 'طول: 10mm تا 100mm', feat: 'مدل عنوان: آچاری واشردار' },
  { r: 33, fa: '۳۳', slug: 'hex-bolt-m8x15-din-933', shortCat: 'آچاری', cat: 'hexagon-bolts', catTitle: 'پیچ‌های آچاری و شش‌گوش', name: 'پیچ M8×15 آچاری', din: 'DIN 933', size: 'M8', len: 'طول: 15mm' },

  { r: 34, fa: '۳۴', slug: 'nut-m6-nyloc-din-985', shortCat: 'مهره', cat: 'nuts', catTitle: 'انواع مهره', name: 'مهره M6 کاسه‌نمدی', din: 'DIN 985', size: 'M6', len: 'آچارخور: 10mm', feat: 'مدل عنوان: کاسه‌نمدی' },
  { r: 35, fa: '۳۵', slug: 'hex-nut-m8-din-934', shortCat: 'مهره', cat: 'nuts', catTitle: 'انواع مهره', name: 'مهره M8 شش‌گوش', din: 'DIN 934', size: 'M8', len: 'آچارخور: 13mm / ارتفاع: 8mm' },
  { r: 36, fa: '۳۶', slug: 'hex-nut-m3-din-934', shortCat: 'مهره', cat: 'nuts', catTitle: 'انواع مهره', name: 'مهره M3 شش‌گوش', din: 'DIN 934', size: 'M3', len: 'آچارخور: 5.5mm / ارتفاع: 2.4mm' },
  { r: 37, fa: '۳۷', slug: 'flange-washer-nut-m6', shortCat: 'مهره', cat: 'nuts', catTitle: 'انواع مهره', name: 'مهره M6 واشردار', din: 'فلنجی / واشردار', size: 'M6', len: 'آچارخور: 10mm', feat: 'مدل عنوان: فلنجی / واشردار' },
];

const OFFICIAL_OPERATIONS = [
  'پرس‌کاری',
  'رزوه‌کاری',
  'سخت‌کاری',
  'آبکاری',
  'کنترل کیفیت',
  'بسته‌بندی استاندارد',
];

export const PRODUCTS_CATALOG: ProductItem[] = ROWS.map((item) => {
  const isFormalDinCode = item.din.startsWith('DIN ');
  const pad = item.r.toString().padStart(2, '0');
  const catalogImage = `/src/assets/catalog_products/prod_${pad}.png`;
  const secondaryImg =
    item.cat === 'hexagon-bolts' || item.cat === 'nuts'
      ? '/src/assets/catalog_products/catalog_cover_showcase.png'
      : '/src/assets/catalog_products/cover_screws_clean.png';

  return {
    id: `araz-prod-${item.r}`,
    catalogRow: item.r,
    catalogRowFa: item.fa,
    slug: item.slug,
    name: item.name,
    categorySlug: item.cat,
    categoryTitle: item.catTitle,
    catalogCategoryShort: item.shortCat,
    dinStandard: item.din,
    isFormalDinCode,
    diameterOrSize: item.size,
    lengthOrHeight: item.len,
    explicitFeature: item.feat,
    description: `ردیف ${item.fa} کاتالوگ رسمی صنایع پیچ سازان آراز یزد در گروه «${item.catTitle}» با مشخصه/استاندارد ${item.din}، سایز/قطر ${item.size} و مشخصه ابعادی (${item.len}).`,
    categoryTechnicalNote: CATEGORY_DESCRIPTIONS[item.cat],
    imageUrl: catalogImage,
    secondaryImageUrl: secondaryImg,
    productionOperations: OFFICIAL_OPERATIONS,
    documents: [
      {
        id: `spec-row-${item.r}`,
        title: `برگه مشخصات کاتالوگ — ${item.name}`,
        fileType: 'TXT / برگه اطلاعات کاتالوگ آراز یزد',
        description:
          'حاوی اطلاعات رسمی ردیف کاتالوگ، استاندارد/مشخصه، سایز و ابعاد ثبت‌شده و تلفن‌های دفتر فروش تهران و کارخانه یزد.',
      },
    ],
  };
});
