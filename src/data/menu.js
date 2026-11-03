export const CATEGORIES = [
  { id: 'tea', name: { en: 'Tea', bn: 'চা' } },
  { id: 'coffee', name: { en: 'Coffee', bn: 'কফি' } },
  { id: 'special-tea', name: { en: 'Special Tea', bn: 'বিশেষ চা' } },
  { id: 'cold-drinks', name: { en: 'Cold Drinks', bn: 'ঠান্ডা পানীয়' } },
]

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
  {
    id: 'masala-chai',
    category: 'tea',
    name: { en: 'Masala Chai', bn: 'মসলা চা' },
    description: {
      en: 'Black tea simmered with cardamom, cinnamon and clove, with milk.',
      bn: 'দুধ, এলাচ, দারুচিনি ও লবঙ্গ দিয়ে তৈরি কড়া লিকার চা।',
    },
    price: 60,
    image: TEA_IMAGES[0],
  },
  {
    id: 'ginger-tea',
    category: 'tea',
    name: { en: 'Ginger Tea', bn: 'আদা চা' },
    description: {
      en: 'Fresh ginger steeped in strong tea, lightly sweetened.',
      bn: 'তাজা আদা দিয়ে তৈরি ঝাঁঝালো লিকার চা।',
    },
    price: 50,
    image: TEA_IMAGES[1],
  },
  {
    id: 'lemon-tea',
    category: 'tea',
    name: { en: 'Lemon Tea', bn: 'লেবু চা' },
    description: {
      en: 'Bright black tea with fresh lemon and a touch of honey.',
      bn: 'তাজা লেবু ও সামান্য মধু মেশানো লিকার চা।',
    },
    price: 50,
    image: TEA_IMAGES[2],
  },
  {
    id: 'milk-tea',
    category: 'tea',
    name: { en: 'Milk Tea', bn: 'দুধ চা' },
    description: {
      en: 'Classic creamy milk tea, brewed slow and sweet.',
      bn: 'ঐতিহ্যবাহী ক্রিমি দুধ চা, ধীরে ফুটিয়ে মিষ্টি করে তৈরি।',
    },
    price: 40,
    image: TEA_IMAGES[0],
  },
  {
    id: 'espresso',
    category: 'coffee',
    name: { en: 'Espresso', bn: 'এসপ্রেসো' },
    description: {
      en: 'A short, bold shot pulled from our house blend.',
      bn: 'আমাদের নিজস্ব ব্লেন্ডের গাঢ় ও কড়া এক শট।',
    },
    price: 120,
    image: COFFEE_IMAGES[0],
  },
  {
    id: 'cappuccino',
    category: 'coffee',
    name: { en: 'Cappuccino', bn: 'ক্যাপুচিনো' },
    description: {
      en: 'Equal parts espresso, steamed milk and velvety foam.',
      bn: 'এসপ্রেসো, ভাপানো দুধ ও মখমলের মতো ফেনা সমান অনুপাতে।',
    },
    price: 180,
    image: COFFEE_IMAGES[1],
  },
  {
    id: 'caffe-latte',
    category: 'coffee',
    name: { en: 'Caffe Latte', bn: 'ক্যাফে ল্যাটে' },
    description: {
      en: 'Smooth espresso with plenty of steamed milk and a light foam top.',
      bn: 'বেশি ভাপানো দুধের সঙ্গে নরম এসপ্রেসো ও হালকা ফেনা।',
    },
    price: 190,
    image: COFFEE_IMAGES[0],
  },
  {
    id: 'flat-white',
    category: 'coffee',
    name: { en: 'Flat White', bn: 'ফ্ল্যাট হোয়াইট' },
    description: {
      en: 'Ristretto with silky microfoam for a rich, velvety cup.',
      bn: 'ঘন এসপ্রেসো ও মসৃণ মাইক্রোফোম দিয়ে তৈরি।',
    },
    price: 200,
    image: COFFEE_IMAGES[2],
  },
  {
    id: 'sencha-green-tea',
    category: 'special-tea',
    name: { en: 'Sencha Green Tea', bn: 'সেনচা গ্রিন টি' },
    description: {
      en: 'Delicate and grassy, steeped at the perfect temperature.',
      bn: 'হালকা সবুজ ঘাসের সুবাস যুক্ত, সঠিক তাপমাত্রায় তৈরি।',
    },
    price: 130,
    image: TEA_IMAGES[1],
  },
  {
    id: 'chamomile-blossom',
    category: 'special-tea',
    name: { en: 'Chamomile Blossom', bn: 'ক্যামোমাইল ব্লসম' },
    description: {
      en: 'Soft floral infusion, calm and caffeine-free.',
      bn: 'নরম ফুলেল সুবাস, ক্যাফেইন-মুক্ত ও প্রশান্তিদায়ক।',
    },
    price: 150,
    image: TEA_IMAGES[2],
  },
  {
    id: 'jasmine-pearl',
    category: 'special-tea',
    name: { en: 'Jasmine Pearl', bn: 'জুঁই ফুলের চা' },
    description: {
      en: 'Hand-rolled green tea scented with fresh jasmine blossoms.',
      bn: 'তাজা জুঁই ফুলের সুবাসে ভরা হাতে গড়া গ্রিন টি।',
    },
    price: 160,
    image: TEA_IMAGES[0],
  },
  {
    id: 'hibiscus-rose',
    category: 'special-tea',
    name: { en: 'Hibiscus Rose', bn: 'হিবিসকাস ও গোলাপ' },
    description: {
      en: 'Tangy hibiscus petals with rose and a hint of honey.',
      bn: 'হিবিসকাস ও গোলাপের টক-মিষ্টি মিশ্রণ, সঙ্গে মধুর ছোঁয়া।',
    },
    price: 170,
    image: TEA_IMAGES[1],
  },
  {
    id: 'iced-latte',
    category: 'cold-drinks',
    name: { en: 'Iced Latte', bn: 'আইসড ল্যাটে' },
    description: {
      en: 'Espresso over ice with cold milk, served tall.',
      bn: 'বরফ, ঠান্ডা দুধ ও এসপ্রেসোর সতেজ মিশ্রণ।',
    },
    price: 210,
    image: COLD_IMAGES[0],
  },
  {
    id: 'cold-brew',
    category: 'cold-drinks',
    name: { en: 'Cold Brew', bn: 'কোল্ড ব্রু' },
    description: {
      en: 'Slow-steeped for 18 hours for a smooth, low-acid coffee.',
      bn: '১৮ ঘণ্টা ধীরে ভিজিয়ে তৈরি মসৃণ কোল্ড কফি।',
    },
    price: 220,
    image: COLD_IMAGES[1],
  },
  {
    id: 'mint-lemonade',
    category: 'cold-drinks',
    name: { en: 'Mint Lemonade', bn: 'মিন্ট লেমনেড' },
    description: {
      en: 'Fresh lemon, crushed mint and sparkling water over ice.',
      bn: 'তাজা লেবু, পুদিনা ও বরফের সঙ্গে সোডা।',
    },
    price: 130,
    image: COLD_IMAGES[2],
  },
  {
    id: 'mango-smoothie',
    category: 'cold-drinks',
    name: { en: 'Mango Smoothie', bn: 'আম স্মুদি' },
    description: {
      en: 'Ripe mango blended with yogurt and a touch of honey.',
      bn: 'পাকা আম, দই ও মধু মিশিয়ে তৈরি ঘন স্মুদি।',
    },
    price: 180,
    image: COLD_IMAGES[2],
  },
]
