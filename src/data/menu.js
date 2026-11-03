export const CATEGORIES = [
  { id: 'all', name: { en: 'All Items', bn: 'সব আইটেম' } },
  { id: 'tea', name: { en: 'Tea', bn: 'চা' } },
  { id: 'special-tea', name: { en: 'Special Tea', bn: 'বিশেষ চা' } },
  { id: 'coffee', name: { en: 'Coffee', bn: 'কফি' } },
  { id: 'milk', name: { en: 'Milk & Drinks', bn: 'দুধ ও পানীয়' } },
  { id: 'cold-drinks', name: { en: 'Cold Drinks', bn: 'ঠান্ডা পানীয়' } },
  { id: 'shakes', name: { en: 'Milkshakes', bn: 'মিল্কশেক' } },
];

const TEA_IMAGES = [
  'https://images.pexels.com/photos/29039075/pexels-photo-29039075.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/34318763/pexels-photo-34318763.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/19880782/pexels-photo-19880782.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
]
const COFFEE_IMAGES = [
  'https://images.pexels.com/photos/15801079/pexels-photo-15801079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/15801008/pexels-photo-15801008.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/36851643/pexels-photo-36851643.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
]
const COLD_IMAGES = [
  'https://images.pexels.com/photos/38028987/pexels-photo-38028987.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/38028984/pexels-photo-38028984.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/16716138/pexels-photo-16716138.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
]


export const MENU_ITEMS = [
  // ==============================
  // CLASSIC TEA
  // ==============================
  {
    id: 'regular-tea',
    category: 'tea',
    name: { en: 'Regular Tea', bn: 'রেগুলার চা' },
    description: {
      en: 'Freshly brewed traditional Indian milk tea.',
      bn: 'তাজা দুধ দিয়ে তৈরি ঐতিহ্যবাহী ভারতীয় চা।',
    },
    price: 10,
    image: TEA_IMAGES[0],
  },
  {
    id: 'sugar-free-tea',
    category: 'tea',
    name: { en: 'Sugar-Free Tea', bn: 'চিনি ছাড়া চা' },
    description: {
      en: 'A refreshing cup of tea without added sugar.',
      bn: 'অতিরিক্ত চিনি ছাড়া এক কাপ সতেজ চা।',
    },
    price: 15,
    image: TEA_IMAGES[1],
  },
  {
    id: 'lemon-tea',
    category: 'tea',
    name: { en: 'Lemon Tea', bn: 'লেবু চা' },
    description: {
      en: 'Refreshing tea infused with fresh lemon flavour.',
      bn: 'তাজা লেবুর স্বাদে তৈরি সতেজ চা।',
    },
    price: 15,
    image: TEA_IMAGES[2] ,
  },
  {
    id: 'kulhad-tea',
    category: 'tea',
    name: { en: 'Kulhad Tea', bn: 'কুলহড় চা' },
    description: {
      en: 'Traditional Indian tea served in a clay cup.',
      bn: 'মাটির ভাঁড়ে পরিবেশিত ঐতিহ্যবাহী ভারতীয় চা।',
    },
    price: 15,
    image: TEA_IMAGES[0],
  },
  {
    id: 'jaggery-tea',
    category: 'tea',
    name: { en: 'Jaggery Tea', bn: 'গুড় চা' },
    description: {
      en: 'Traditional tea prepared with the rich flavour of jaggery.',
      bn: 'গুড়ের মিষ্টি স্বাদে তৈরি ঐতিহ্যবাহী চা।',
    },
    price: 20,
    image: TEA_IMAGES[1],
  },
  {
    id: 'tulsi-tea',
    category: 'tea',
    name: { en: 'Tulsi Tea', bn: 'তুলসী চা' },
    description: {
      en: 'Aromatic tea infused with traditional tulsi flavour.',
      bn: 'তুলসীর সুগন্ধে তৈরি চা।',
    },
    price: 20,
    image: TEA_IMAGES[2],
  },
  {
    id: 'black-tea',
    category: 'tea',
    name: { en: 'Black Tea', bn: 'ব্ল্যাক টি' },
    description: {
      en: 'Classic black tea with a rich and refreshing taste.',
      bn: 'গাঢ় স্বাদ ও সতেজতায় ভরা লিকার চা।',
    },
    price: 20,
    image: TEA_IMAGES[0],
  },
  {
    id: 'chocolate-tea',
    category: 'tea',
    name: { en: 'Chocolate Tea', bn: 'চকোলেট টি' },
    description: {
      en: 'A unique tea with a delightful chocolate flavour.',
      bn: 'চকোলেটের মজাদার স্বাদে তৈরি বিশেষ চা।',
    },
    price: 20,
    image: TEA_IMAGES[1],
  },
  {
    id: 'lemongrass-tea',
    category: 'tea',
    name: { en: 'Lemongrass Tea', bn: 'লেমন গ্রাস চা' },
    description: {
      en: 'Refreshing aromatic tea with lemongrass flavour.',
      bn: 'লেমন গ্রাসের সুগন্ধে তৈরি সতেজ চা।',
    },
    price: 20,
    image: TEA_IMAGES[2],
  },
  {
    id: 'elaichi-tea',
    category: 'tea',
    name: { en: 'Elaichi Tea', bn: 'এলাচি টি' },
    description: {
      en: 'Traditional tea with aromatic cardamom flavour.',
      bn: 'এলাচের সুগন্ধে তৈরি ঐতিহ্যবাহী চা।',
    },
    price: 20,
    image: TEA_IMAGES[0],
  },
  {
    id: 'green-tea',
    category: 'tea',
    name: { en: 'Green Tea', bn: 'গ্রিন টি' },
    description: {
      en: 'A light and refreshing cup of green tea.',
      bn: 'হালকা ও সতেজ স্বাদের এক কাপ গ্রিন টি।',
    },
    price: 20,
    image: TEA_IMAGES[1],
  },

  // ==============================
  // SPECIAL TEA
  // ==============================
  {
    id: 'gur-tulsi-masala-tea',
    category: 'special-tea',
    name: { en: 'Gur Tulsi Masala Tea', bn: 'গুড় তুলসী মসলা চা' },
    description: {
      en: 'Special tea combining jaggery, tulsi and masala flavours.',
      bn: 'গুড়, তুলসী ও মসলার স্বাদের বিশেষ চা।',
    },
    price: 20,
    image: TEA_IMAGES[2],
  },
  {
    id: 'masala-tea',
    category: 'special-tea',
    name: { en: 'Masala Tea', bn: 'মসলা চা' },
    description: {
      en: 'Traditional Indian tea with a rich aromatic masala flavour.',
      bn: 'সুগন্ধি মসলার স্বাদে তৈরি ঐতিহ্যবাহী ভারতীয় চা।',
    },
    price: 20,
    image: TEA_IMAGES[0] ,
  },
  {
    id: 'ginger-tea',
    category: 'special-tea',
    name: { en: 'Ginger Tea', bn: 'আদা চা' },
    description: {
      en: 'Freshly prepared tea with a warm ginger flavour.',
      bn: 'আদার ঝাঁঝালো স্বাদে তৈরি গরম চা।',
    },
    price: 20,
    image: TEA_IMAGES[1] ,
  },
  {
    id: 'ginger-jaggery-tea',
    category: 'special-tea',
    name: { en: 'Ginger Jaggery Tea', bn: 'আদা গুড় চা' },
    description: {
      en: 'A delicious combination of ginger and jaggery in tea.',
      bn: 'আদা ও গুড়ের মিশ্র স্বাদে তৈরি বিশেষ চা।',
    },
    price: 25,
    image: TEA_IMAGES[2],
  },
  {
    id: 'rose-tea',
    category: 'special-tea',
    name: { en: 'Rose Tea', bn: 'গোলাপ চা' },
    description: {
      en: 'Aromatic tea with a delicate rose flavour.',
      bn: 'গোলাপের মনোরম সুগন্ধে তৈরি চা।',
    },
    price: 25,
    image: TEA_IMAGES[0],
  },
  {
    id: 'masala-lemon-tea',
    category: 'special-tea',
    name: { en: 'Masala Lemon Tea', bn: 'মসলা লেমন টি' },
    description: {
      en: 'Refreshing lemon tea with a special masala touch.',
      bn: 'লেবু ও বিশেষ মসলার স্বাদে তৈরি সতেজ চা।',
    },
    price: 20,
    image: TEA_IMAGES[1] ,
  },
  {
    id: 'special-lemon-tea',
    category: 'special-tea',
    name: { en: 'Special Lemon Tea', bn: 'স্পেশাল লেমন টি' },
    description: {
      en: 'A special refreshing lemon tea with a distinctive taste.',
      bn: 'বিশেষ স্বাদের সতেজ লেবু চা।',
    },
    price: 35,
    image: TEA_IMAGES[2] ,
  },

  // ==============================
  // COFFEE
  // ==============================
  {
    id: 'jaggery-coffee',
    category: 'coffee',
    name: { en: 'Jaggery Coffee', bn: 'গুড় কফি' },
    description: {
      en: 'Coffee with the distinctive sweetness of jaggery.',
      bn: 'গুড়ের বিশেষ মিষ্টি স্বাদে তৈরি কফি।',
    },
    price: 25,
    image: COFFEE_IMAGES[0],
  },
  {
    id: 'hot-coffee',
    category: 'coffee',
    name: { en: 'Hot Coffee', bn: 'হট কফি' },
    description: {
      en: 'A freshly prepared cup of warm and aromatic coffee.',
      bn: 'তাজা তৈরি গরম ও সুগন্ধি কফি।',
    },
    price: 25,
    image: COFFEE_IMAGES[1],
  },
  {
    id: 'cold-coffee',
    category: 'coffee',
    name: { en: 'Cold Coffee', bn: 'কোল্ড কফি' },
    description: {
      en: 'A chilled and refreshing coffee drink.',
      bn: 'ঠান্ডা ও সতেজ স্বাদের কফি।',
    },
    price: 60,
    image: COFFEE_IMAGES[2] ,
  },

  // ==============================
  // MILK & DRINKS
  // ==============================
  {
    id: 'kesar-pista-badam-milk',
    category: 'milk',
    name: {
      en: 'Kesar Pista Badam Milk',
      bn: 'কেশর পিস্তা বাদাম দুধ',
    },
    description: {
      en: 'A rich milk drink flavoured with saffron, pistachios and almonds.',
      bn: 'জাফরান, পেস্তা ও বাদামের স্বাদে তৈরি সমৃদ্ধ দুধের পানীয়।',
    },
    price: 30,
    image: COLD_IMAGES[0],
  },
   {
    id: 'orange-juice',
    category: 'cold-drinks',
    name: { en: 'Orange Juice', bn: 'কমলা শরবত' },
    description: {
      en: 'Refreshing orange-flavoured drink.',
      bn: 'কমলার স্বাদে তৈরি সতেজ পানীয়।',
    },
    price: 20,
    image: COLD_IMAGES[0],
  },
  {
    id: 'lychee-water',
    category: 'cold-drinks',
    name: { en: 'Lychee Water', bn: 'লিচু পানি' },
    description: {
      en: 'Refreshing lychee drink.',
      bn: 'লিচুর স্বাদের সতেজ পানীয়।',
    },
    price: 20,
    image: COLD_IMAGES[1],
  },
  {
    id: 'pineapple-drink',
    category: 'cold-drinks',
    name: { en: 'Pineapple Drink', bn: 'আনারসের পানীয়' },
    description: {
      en: 'Refreshing pineapple-flavoured drink.',
      bn: 'আনারসের স্বাদের সতেজ পানীয়।',
    },
    price: 40,
    image: COLD_IMAGES[2],
  },
  {
    id: 'chocolate-coffee',
    category: 'coffee',
    name: { en: 'Chocolate Coffee', bn: 'চকোলেট কফি' },
    description: {
      en: 'Chocolate-flavoured coffee drink.',
      bn: 'চকোলেটের স্বাদে তৈরি কফি।',
    },
    price: 50,
    image: COFFEE_IMAGES[0],
  },
   {
    id: 'chocolate-milkshake',
    category: 'shakes',
    name: {
      en: 'Chocolate Milkshake',
      bn: 'চকোলেট মিল্কশেক',
    },
    description: {
      en: 'A chilled chocolate-flavoured milkshake.',
      bn: 'চকোলেটের স্বাদে তৈরি ঠান্ডা মিল্কশেক।',
    },
    price: 60,
    image: COLD_IMAGES[0],
  },
  {
    id: 'strawberry-milkshake',
    category: 'shakes',
    name: {
      en: 'Strawberry Milkshake',
      bn: 'স্ট্রবেরি মিল্কশেক',
    },
    description: {
      en: 'A refreshing strawberry-flavoured milkshake.',
      bn: 'স্ট্রবেরির স্বাদে তৈরি সতেজ মিল্কশেক।',
    },
    price: 60,
    image: COLD_IMAGES[2],
  },
  {
    id: 'mango-milkshake',
    category: 'shakes',
    name: {
      en: 'Mango Milkshake',
      bn: 'ম্যাঙ্গো মিল্কশেক',
    },
    description: {
      en: 'A chilled and creamy mango drink.',
      bn: 'আমের স্বাদে তৈরি ঠান্ডা ও ক্রিমি পানীয়।',
    },
    price: 60,
    image: COLD_IMAGES[1],
  },
];

