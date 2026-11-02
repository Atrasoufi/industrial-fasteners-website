import {
  ArticleItem,
  CapabilityItem,
  CategoryInfo,
  GalleryItem,
  ProcessStep,
} from '../types';
import { CATEGORY_DESCRIPTIONS, PRODUCTS_CATALOG } from './catalogProducts';

export { CATEGORY_DESCRIPTIONS, PRODUCTS_CATALOG };

export const IMAGES = {
  factoryHero: '/src/assets/catalog_products/catalog_cover_showcase.png',
  factoryHallHero: '/src/assets/catalog_products/catalog_cover_showcase.png',
  screwsAssortment: '/src/assets/catalog_products/cover_screws_clean.png',
  hexBoltsNuts: '/src/assets/catalog_products/prod_31.png',
  customBlueprint: '/src/assets/catalog_products/prod_23.png',
  qualityPlating: '/src/assets/catalog_products/catalog_cover_showcase.png',
  coverShowcase: '/src/assets/catalog_products/catalog_cover_showcase.png',
} as const;

export const COMPANY_INFO = {
  brandName: 'صنایع پیچ سازان آراز یزد',
  slogan: 'پیشگام در صنعت پیچ استوانه، خودکار، خاص و صنعتی',
  websiteDisplay: 'www.arazpich.com',
  websiteUrl: 'https://www.arazpich.com',
  foundedYear: '۱۳۹۹',
  heritageName: 'پیچ‌ساز یزد',
  factoryArea: '۱۰,۰۰۰ متر مربع',
  sizeRange: '۲/۲۰ تا ۱۰ میلی‌متر (M2.20 تا M10)',
  aboutParagraph1:
    'صنایع پیچ سازان آراز یزد در سال ۱۳۹۹ با بهره‌گیری از تجارب کسب‌شده در کارگاه تولیدی «پیچ‌ساز یزد» در زمینه تولید انواع پیچ و مهره، در فضایی به مساحت ۱۰,۰۰۰ متر مربع احداث گردید. این مجموعه با بهره‌گیری از به‌روزترین و مدرن‌ترین ماشین‌آلات و کادر مهندسی و فنی مجرب، کلیه مراحل تولید شامل پرس‌کاری، رزوه‌کاری، سخت‌کاری، آبکاری، کنترل کیفیت و بسته‌بندی استاندارد را با رعایت بالاترین استانداردهای ملی و صنعتی انجام داده و محصولات را به بازارهای داخلی عرضه می‌نماید.',
  aboutParagraph2:
    'این واحد تولیدی با توانایی تولید از سایز ۲/۲۰ تا ۱۰ میلی‌متر در اشکال و ابعاد سفارشی، در راستای خودکفایی صنایع کشور گام برمی‌دارد.',
  tehranPhone: '۰۲۱۵۵۴۲۲۱۸۶',
  tehranPhoneFormattedLtr: '021 - 55422186',
  tehranPhoneHref: 'tel:02155422186',
  factoryPhone: '۰۳۵۳۵۳۷۱۰۳۶',
  factoryPhoneFormattedLtr: '035 - 35371036',
  factoryPhoneHref: 'tel:03535371036',
  factoryAddress:
    'یزد، شهرک صنعتی ولیعصر، خیابان پویا، کوچه آبتاب شیمی، صنایع پیچ سازان آراز یزد',
  postalCode: '۸۹۴۱۹۹۵۱۳۷',
  postalCodeLtr: '8941995137',
} as const;

export const PRODUCT_CATEGORIES: CategoryInfo[] = [
  {
    slug: 'cylinder-screws',
    title: 'پیچ‌های استوانه',
    englishTitle: 'Cylinder Screws',
    description: CATEGORY_DESCRIPTIONS['cylinder-screws'],
    imageUrl: '/src/assets/catalog_products/prod_01.png',
    productCount: 6,
    representativeProductSlug: 'cylinder-screw-slotted-phillips-din-8001',
  },
  {
    slug: 'electrical-screws',
    title: 'پیچ‌های الکتریکی',
    englishTitle: 'Electrical Screws',
    description: CATEGORY_DESCRIPTIONS['electrical-screws'],
    imageUrl: '/src/assets/catalog_products/prod_07.png',
    productCount: 8,
    representativeProductSlug: 'electrical-screw-3x12-din-8001',
  },
  {
    slug: 'self-tapping-screws',
    title: 'پیچ‌های خودکار',
    englishTitle: 'Self-Tapping Screws',
    description: CATEGORY_DESCRIPTIONS['self-tapping-screws'],
    imageUrl: '/src/assets/catalog_products/prod_17.png',
    productCount: 7,
    representativeProductSlug: 'self-tapping-screw-2-20x6-din-966',
  },
  {
    slug: 'hexagon-bolts',
    title: 'پیچ‌های آچاری و شش‌گوش',
    englishTitle: 'Hexagon Bolts',
    description: CATEGORY_DESCRIPTIONS['hexagon-bolts'],
    imageUrl: '/src/assets/catalog_products/prod_31.png',
    productCount: 4,
    representativeProductSlug: 'hex-bolt-m5-din-933',
  },
  {
    slug: 'custom-special-screws',
    title: 'پیچ‌های خاص و سفارشی',
    englishTitle: 'Custom / Special Screws',
    description: CATEGORY_DESCRIPTIONS['custom-special-screws'],
    imageUrl: '/src/assets/catalog_products/prod_23.png',
    productCount: 8,
    representativeProductSlug: 'special-screw-2-20x13-torx-din-966',
  },
  {
    slug: 'nuts',
    title: 'انواع مهره',
    englishTitle: 'Nuts',
    description: CATEGORY_DESCRIPTIONS.nuts,
    imageUrl: '/src/assets/catalog_products/prod_35.png',
    productCount: 4,
    representativeProductSlug: 'nut-m6-nyloc-din-985',
  },
];

export const CORE_CAPABILITIES: CapabilityItem[] = [
  {
    index: '۰۱',
    title: 'احداث‌شده در فضای صنعتی ۱۰,۰۰۰ متر مربعی با پشتوانه تجربی',
    description:
      'تاسیس در سال ۱۳۹۹ بر پایه تجارب ارزشمند کارگاه تولیدی «پیچ‌ساز یزد» و تجهیز به ماشین‌آلات مدرن و کادر مهندسی و فنی مجرب.',
    highlight: 'مساحت کارخانه: ۱۰,۰۰۰ متر مربع',
  },
  {
    index: '۰۲',
    title: 'توانایی تولید تخصصی از سایز ۲/۲۰ تا ۱۰ میلی‌متر',
    description:
      'پوشش کامل رنج ظریف الکتریکی و خودکار تا پیچ‌های صنعتی و آچاری (M2.20 تا M10) در اشکال و ابعاد سفارشی جهت خودکفایی صنایع کشور.',
    highlight: 'دامنه قطر: M2.20 تا M10',
  },
  {
    index: '۰۳',
    title: 'اجرای کلیه مراحل ساخت و تکمیل‌کاری در مجموعه',
    description:
      'انجام یکپارچه فرآیندهای پرس‌کاری، رزوه‌کاری، سخت‌کاری، آبکاری، کنترل کیفیت و بسته‌بندی استاندارد با رعایت استانداردهای ملی و صنعتی.',
    highlight: 'زنجیره کامل تولید',
  },
  {
    index: '۰۴',
    title: 'ارتباط مستقیم با کارخانه یزد و دفتر فروش تهران',
    description:
      'سهولت ثبت سفارش، استعلام فنی و هماهنگی ارسال محموله‌ها برای صنایع لوازم خانگی، الکتریک، نفت و گاز و مجموعه‌های مونتاژی کشور.',
    highlight: 'پاسخگویی مستقیم در تهران و یزد',
  },
];

export const MANUFACTURING_PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '۰۱',
    unitName: 'مرحله اول تولید',
    title: 'پرس‌کاری',
    description:
      'فرم‌دهی اولیه مفتول و شکل‌دهی دقیق گل‌پیچ (سرگرد، سرتخت، گل‌پهن، شش‌گوش و فرم‌های خاص) با ماشین‌آلات مدرن پرس صنعتی.',
  },
  {
    stepNumber: '۰۲',
    unitName: 'مرحله دوم تولید',
    title: 'رزوه‌کاری',
    description:
      'ایجاد دنده‌ها و ساقه مارپیچ در انواع پیچ‌های استوانه، الکتریکی ظریف، خودکار نوک‌تیز، آچاری و رزوه داخلی انواع مهره.',
  },
  {
    stepNumber: '۰۳',
    unitName: 'مرحله سوم تولید',
    title: 'سخت‌کاری',
    description:
      'عملیات حرارتی و سخت‌کاری کنترل‌شده متناسب با گرید و کاربرد مکانیکی پیچ‌های خودکار، آچاری و صنعتی.',
  },
  {
    stepNumber: '۰۴',
    unitName: 'مرحله چهارم تولید',
    title: 'آبکاری',
    description:
      'اعمال پوشش‌های سطحی منطبق با سفارش و نیاز صنعتی محصول به منظور حفاظت در برابر خوردگی و ارتقای کیفیت سطح.',
  },
  {
    stepNumber: '۰۵',
    unitName: 'مرحله پنجم تولید',
    title: 'کنترل کیفیت',
    description:
      'نظارت دقیق کادر فنی بر ابعاد، قطر، طول، آچارخور و سلامت رزوه بر اساس استانداردهای ملی و صنعتی پیش از ترخیص.',
  },
  {
    stepNumber: '۰۶',
    unitName: 'مرحله ششم تولید',
    title: 'بسته‌بندی استاندارد',
    description:
      'بسته‌بندی استاندارد و منظم محصولات تولیدشده جهت عرضه ایمن به بازارهای داخلی و خطوط مونتاژ مصرف‌کنندگان صنعتی.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'کاتالوگ رسمی و معرفی ظرفیت‌های تولیدی صنایع پیچ سازان آراز یزد',
    department: 'محصولات کاتالوگ',
    caption:
      'مستند کاتالوگ رسمی کارخانه شامل معرفی توانمندی تولید انواع پیچ و مهره استاندارد و سفارشی از سایز ۲/۲۰ تا ۱۰ میلی‌متر.',
    imageUrl: IMAGES.coverShowcase,
    aspect: 'wide',
  },
  {
    id: 'gal-2',
    title: 'مجموعه پیچ‌های صنعتی و سرتخت تولیدی آراز یزد',
    department: 'کنترل کیفیت و آبکاری',
    caption:
      'آرایش صنعتی پیچ‌های دقیق استوانه‌ای، سرتخت و خودکار با پرداخت سطحی و رزوه‌کاری ثبت‌شده در کاتالوگ رسمی.',
    imageUrl: IMAGES.screwsAssortment,
    aspect: 'wide',
  },
  {
    id: 'gal-3',
    title: 'پیچ‌های آچاری شش‌گوش (DIN 933) و انواع مهره (DIN 934 / DIN 985)',
    department: 'محصولات کاتالوگ',
    caption: 'تولید پیچ‌های آچاری M5 تا M8 و مهره‌های شش‌گوش، کاسه‌نمدی و واشردار فلنجی.',
    imageUrl: '/src/assets/catalog_products/prod_31.png',
    aspect: 'standard',
  },
  {
    id: 'gal-4',
    title: 'پیچ‌های الکتریکی ظریف و خودکار (DIN 8001 / DIN 7981)',
    department: 'محصولات الکتریکی',
    caption: 'تنوع بالای گل‌پیچ و دقت ابعادی ظریف ویژه صنایع الکتریک، لوازم خانگی و تابلوهای برق.',
    imageUrl: '/src/assets/catalog_products/prod_07.png',
    aspect: 'standard',
  },
  {
    id: 'gal-5',
    title: 'تولید پیچ‌های خاص، فیکس و سفارشی از M2.20 تا M10 مطابق نقشه',
    department: 'تولید سفارشی طبق نقشه',
    caption: 'ساخت اتصالات صنعتی در اشکال، شیارهای ستاره‌ای، گل‌شیری و طول‌های خاص مهندسی.',
    imageUrl: '/src/assets/catalog_products/prod_23.png',
    aspect: 'standard',
  },
  {
    id: 'gal-6',
    title: 'مهره‌های کاسه‌نمدی و فلنجی واشردار (DIN 985 / DIN 6923)',
    department: 'انواع مهره',
    caption: 'مهره‌های قفل‌کننده کاسه‌نمدی و واشردار خودرنگ و گالوانیزه مقاوم در برابر ارتعاش.',
    imageUrl: '/src/assets/catalog_products/prod_34.png',
    aspect: 'standard',
  },
];

export const INDUSTRIAL_ARTICLES: ArticleItem[] = [
  {
    id: 'art-1',
    slug: 'electrical-and-self-tapping-screws-in-home-appliances',
    title: 'کاربرد پیچ‌های الکتریکی و خودکار ظریف در صنایع الکتریک و لوازم خانگی',
    category: 'شناخت محصولات کاتالوگ',
    readingTime: '۴ دقیقه مطالعه',
    excerpt:
      'بررسی نقش دقت ابعادی در پیچ‌های الکتریکی (ترمینالی، راهنمادار و واشردار) و پیچ‌های خودکار سایز ظریف در خطوط مونتاژ لوازم خانگی.',
    imageUrl: IMAGES.screwsAssortment,
    sections: [
      {
        heading: 'اهمیت دقت تولید در پیچ‌های الکتریکی ریز',
        paragraphs: [
          'پیچ‌های الکتریکی عموماً شامل پیچ‌های استوانه‌ای ریز با تنوع فرمی بالا هستند که متناسب با قالب محصول مصرف‌کننده از نظر قطر، طول و فرم گل‌پیچ تولید می‌شوند.',
          'به دلیل ظرافت ابعادی (نظیر سایزهای M3 و M3.5 در مدل‌های ترمینالی، راهنمادار، سرتخت و استوانه واشردار مطابق استانداردهایی همچون DIN 8001، DIN 920، DIN 965 و DIN 7958)، دقت پرس‌کاری و رزوه‌کاری تاثیر مستقیمی بر سلامت مونتاژ قطعات الکتریکی و لوازم خانگی دارد.',
        ],
      },
      {
        heading: 'مزیت پیچ‌های خودکار در اتصال بدون مهره',
        paragraphs: [
          'پیچ‌های خودکار دارای رزوه و نوک تیز هستند و به واسطه طراحی دنده‌ها نیازی به مهره یا مهره توکار ندارند. سایزهای ظریف این گروه (از M2.20 تا M4.2 در استانداردهایی نظیر DIN 7981، DIN 966 و DIN 8000) اتصالی سریع و چندمنظوره برای صنایع الکتریکی و لوازم خانگی فراهم می‌سازند.',
        ],
      },
    ],
  },
  {
    id: 'art-2',
    slug: 'hexagon-bolts-grades-and-coatings-guide',
    title: 'آشنایی با متریال، کلاس مقاومتی و پوشش‌های پیچ آچاری شش‌گوش و مهره‌ها',
    category: 'مهندسی اتصالات صنعتی',
    readingTime: '۴ دقیقه مطالعه',
    excerpt:
      'مقایسه متریال آهنی (کلاس 5.6)، خشکه (کلاس 8.8) و استیل به همراه پوشش‌های گالوانیزه گرم، زینک و داکرومات در پیچ‌های آچاری و انواع مهره.',
    imageUrl: IMAGES.hexBoltsNuts,
    sections: [
      {
        heading: 'ارتباط گرید پیچ آچاری با درصد کربن و استحکام کششی',
        paragraphs: [
          'پیچ‌های آچاری و شش‌گوش در انواع متریال آهنی (کلاس 5.6)، خشکه (کلاس 8.8) و استیل تولید می‌شوند. هرچه گرید محصول بالاتر برود، درصد کربن و استحکام کششی آن افزایش می‌یابد و به همین جهت این گروه جزو پرمصرف‌ترین اقلام در صنایع مختلف به‌ویژه صنایع سنگین محسوب می‌شوند.',
          'پوشش‌های گالوانیزه گرم، زینک و داکرومات نیز بسته به شرایط محیطی کارکرد، مقاومت قطعه را در برابر عوامل خورنده ارتقا می‌دهند.',
        ],
      },
      {
        heading: 'انتخاب مهره متناسب با اتصال صنعتی',
        paragraphs: [
          'در کنار پیچ‌های استوانه و آچاری، انواع مهره‌های شش‌گوش آهنی (DIN 934)، مهره‌های کاسه‌نمدی (DIN 985) و مهره‌های فلنجی/واشردار به صورت خودرنگ و گالوانیزه در صنایع نفت و گاز، لوازم خانگی و مجموعه‌های مونتاژی کوچک و بزرگ کاربرد گسترده‌ای دارند.',
        ],
      },
    ],
  },
  {
    id: 'art-3',
    slug: 'custom-screws-manufacturing-m2-20-to-m10',
    title: 'سفارش تولید پیچ‌های خاص و سفارشی از قطر M2.20 تا M10 مطابق نقشه',
    category: 'تولید سفارشی',
    readingTime: '۳ دقیقه مطالعه',
    excerpt:
      'چگونه صنایع پیچ سازان آراز یزد اتصالات غیرمتعارف و پیچ‌های خاص مهندسی را در طول‌ها و اشکال سفارشی طبق نقشه مشتری تولید می‌کند؟',
    imageUrl: IMAGES.customBlueprint,
    sections: [
      {
        heading: 'دامنه توانمندی تولید سفارشی در آراز یزد',
        paragraphs: [
          'بسیاری از تولیدکنندگان صنعتی نیازمند اتصالاتی با گل‌پیچ خاص (مانند ستاره‌ای، گل‌شیری، سرتخت یا واشردار)، نوک‌تیز یا طول‌های ویژه هستند که دقیقاً منطبق بر نقشه مهندسی محصول آن‌ها طراحی شده است.',
          'صنایع پیچ سازان آراز یزد با توانایی تولید از قطر M2.20 تا M10 در تمامی طول‌ها و اشکال خاص مهندسی و انجام کامل مراحل پرس‌کاری، رزوه‌کاری، سخت‌کاری، آبکاری، کنترل کیفیت و بسته‌بندی استاندارد، امکان تامین مستقیم این قطعات را در داخل کشور فراهم نموده است.',
        ],
      },
    ],
  },
];
