
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  link: string;
}

export const products = [
  {
    id: 1,
    name: 'Стиральная машина DEXP WM-F610NTMA/WW белый',
    price: 109990,
    description: 'Крутая стиралка',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h57/hba/62413802373150/dexp-wm-f610ntma-ww-belyj-106424211-1.jpg',
    rating: 5.0,
    link: 'https://kaspi.kz/shop/p/dexp-wm-f610ntma-ww-belyi-106424211/?c=750000000&ysclid=lefsryoxxn852802509#!/item'
  },
  {
    id: 2,
    name: 'Холодильник Artel HD 345RN Steel серый',
    price: 166135,
    description: 'Холодильник Artel HD 345RN оснащен морозилкой с нижним расположением. Скорость заморозки продуктов не менее 3.5 кг в сутки.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h72/h7f/51533397917726/artel-hd-345rn-steel-seryi-100531318-1.jpg',
    rating: 4.7,
    link: 'https://kaspi.kz/shop/p/artel-hd-345-rn-serebristyi-2702217/?ysclid=lefst0bzxj166382457&c=750000000'
  },
  {
    id: 3,
    name: 'Вытяжка Hansa OMP6553BGH черный',
    price: 58173,
    description: 'Вытяжка полновстраиваемая Hansa OMP6553BGH отличается привлекательным дизайном, высокой продуктивностью и интуитивным сенсорным управлением.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3d/hf9/49728215875614/hansa-omp6553bgh-cernyj-100571188-1-Container.jpg',
    rating: 4.3,
    link: 'https://kaspi.kz/shop/p/hansa-omp6553bgh-chernyi-100571188/?c=750000000&ysclid=lefsubnhhn555035203#!/item'
  },
  {
    id: 4,
    name: 'Телевизор Samsung UE43T5300AUXCE 109 см черный',
    price: 198790,
    description: 'Смотрите HDR контент с улучшенной четкостью и точнейшей цветопередачей.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdf/h18/49319748468766/samsung-ue43t5300au-chernyi-100182013-1.jpg',
    rating: 3.9,
    link: 'https://kaspi.kz/shop/p/samsung-ue43t5300auxce-109-sm-chernyi-100182013/?c=750000000&ysclid=lefsv8jzqu34874794#!/item'
  },
  {
    id: 5,
    name: 'Внешний аккумулятор Xiaomi Mi Power Bank 3 Ultra Compact 10000 мАч черный',
    price: 11941,
    description: 'Миниатюрный корпус. При весе всего в 200 грамм внешний аккумулятор Xiaomi почти на треть меньше зарядного устройства для Mi Notebook, благодаря чему ему без труда можно найти место в кармане или сумочке.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h88/h9f/33637752832030/xiaomi-mi-power-bank-3-ultra-compact-10000mah-pb1022zm-cernyj-101800648-1-Container.jpg',
    rating: 4.6,
    link: 'https://kaspi.kz/shop/p/xiaomi-mi-power-bank-3-ultra-compact-10000-mach-chernyi-101800648/?c=750000000&ysclid=lefsvwy8gz813907559#!/item'
  },
  {
    id: 6,
    name: 'Робот-пылесос Dreame F9 белый',
    price: 120423,
    description: 'Робот-пылесос Dreame F9 – ваш незаменимый помощник, благодаря которому ваш дом всегда будет в чистоте.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h38/hdc/62855138705438/xiaomi-dreame-f9-belyj-100549614-1-Container.jpg',
    rating: 4.8,
    link: 'https://kaspi.kz/shop/p/dreame-f9-belyi-100549614/?ysclid=lefswsn773594926558&c=750000000#!/item'
  },
  {
    id: 7,
    name: 'Смарт-часы Apple Watch Series 8 45 мм Aluminum черный',
    price: 231500,
    description: 'поддержка платформ: iOS, материал корпуса: алюминий, цвет корпуса: черный, технология экрана: OLED.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0b/h04/63158967959582/apple-watch-series-8-41-mm-cernyj-106362847-1.jpg',
    rating: 4.3,
    link: 'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/?c=750000000&ysclid=lefsxjt21f635376497#!/item'
  },
  {
    id: 8,
    name: 'Стул N-12, 81x50x25 см, белый',
    price: 7778,
    description: 'Благодаря сочетанию пластика с металлом и деревом изделие органично вписывается практически в любую среду, делая обстановку более естественной и «живой». ',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h07/hdc/32360448491550/stul-klassicheskii-barneo-woodmold-n-12-81x50x25-belyi-100189414-1.jpg',
    rating: 4.9,
    link: 'https://kaspi.kz/shop/p/stul-n-12-81x50x25-sm-belyi-100189414/?c=750000000&ysclid=lefsxz571k554308063#!/item'
  },
  {
    id: 9,
    name: 'The Ordinary Niacinamide 10%+Zinc 1% сыворотка 30 мл',
    price: 4563,
    description: 'Действие: матирование, противовоспалительное, выравнивание,',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h63/h05/33287281410078/the-ordinary-niacinamide-10-zinc-1-syvorotka-30-ml-100703687-1.jpg',
    rating: 3.8,
    link: 'https://kaspi.kz/shop/p/the-ordinary-niacinamide-10-zinc-1-syvorotka-30-ml-100703687/?ysclid=lefsym1h7d596629290&c=750000000#!/item'
  },
  {
    id: 10,
    name: 'Видеоигра FIFA 23 PS4',
    price: 31495,
    description: 'Жанр: спортвиный эмулятор.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf5/h7f/62657956839454/fifa-23-ps4-106552813-1.jpg',
    rating: 3.7,
    link: 'https://kaspi.kz/shop/p/fifa-23-ps4-108916356/?ysclid=lefsz8nxxd182628257&c=750000000#!/item'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/