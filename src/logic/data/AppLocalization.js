import LocalizedStrings from 'react-localization';

/**
 * Simple app localization
 */
const localization = new LocalizedStrings({
  en:{
    copyrates:{
      title: '© 2006-2018 Logo Pizza.',
      rules: 'All rights reserved.'
    },

    buttons:{
      toCart: 'Add to Cart'
    },

    links:{
      pizza: 'Pizza',
      pasta: 'Pasta',
      salad: 'Salads',
      drinks: 'Drinks',

      about: 'About Us',
      feedback: 'Feedback',
      qna: "Questions/Answers",
      delivery: 'Delivery Terms',
      payment: 'Payment',
      promotions: 'Promotions',
      productInfo: 'Product Info',
      contacts: 'Contacts'
    },

    landingPage:{
      title: 'we make pizza for more than 12 years, constantly monitor its quality and invent new original recipes. There are 27 types of pizza in our menu and we are not going to stop!',

      hints: [
        'Special recipes from the chef!',
        'Promotions and holiday discounts!',
        'Quality control and excellent service!'
      ],

      info:{
        title: 'Pizza delivery in the city of Moscow.',
        posts: [
          'We make pizza for more than 12 years, constantly monitor its quality and invent new original recipes. There are 27 types of pizza in our menu and we are not going to stop!',
          'We use only the freshest products from trusted suppliers. In our pizza and other dishes there is no defrosted semi-finished products.'
        ]
      }
    },

    productsPage:{
      title:{
        pizza: 'Pizza',
        pasta: 'Pasta',
        salad: 'Salads',
        drinks: 'Drinks',
      },

      info:{
        pizza: 'We prepare delicious dough for the base and do not save on ingredients and toppings! That is why our pizzas are heavier and have a very rich taste!',
        pasta: 'We offer a varied menu: in addition to pizza, you can always order pasta, grill, sushi, salads, side dishes and desserts, which are prepared by our skilled chefs.',
        salad: 'We use only the freshest products from trusted suppliers. In our pizza and other dishes there is no defrosted semi-finished products.',
        drinks: 'We care about the environment: all packaging is made of biodegradable materials - cardboard and paper. In addition, we help with the disposal of used alkaline batteries - just give them to our couriers.'
      }
    },

    cartPage:{
      title: 'Cart',
      empty: 'Your cart is empty.',
      orderCost: 'Order Cost:',
      totalCost: 'Total Cost',
      discount: 'Discount',
      total: 'Total:',
      checkout: 'Checkout'
    },

    aboutPage: {
      title: 'About Us',
      posts: [
        'We make pizza for more than 12 years, constantly monitor its quality and invent new original recipes. There are 27 types of pizza in our menu and we are not going to stop!',

        'We use only the freshest products from trusted suppliers. In our pizza and other dishes there is no defrosted semi-finished products.',

        'We prepare delicious dough for the base and do not save on ingredients and toppings! That is why our pizzas are heavier and have a very rich taste!',

        'We offer a varied menu: in addition to pizza, you can always order pasta, grill, sushi, salads, side dishes and desserts, which are prepared by our skilled chefs.',

        'We accept customer calls at our professional call center, whose operators can easily navigate the terrain - this greatly simplifies ordering.',

        'We deliver pizza in 40-50 minutes - this is really the fastest pizza delivery time, which is made from fresh products, not semi-finished products. Cooking your pizza starts immediately after receiving the order.',

        'We care about the environment: all packaging is made of biodegradable materials - cardboard and paper. In addition, we help with the disposal of used alkaline batteries - just give them to our couriers.'
      ]
    }
  },

  ru:{
    copyrates:{
      title: '© 2006-2018 Logo Pizza.',
      rules: 'Все права защищены.'
    },

    links:{
      pizza: 'Пицца',
      pasta: 'Паста',
      salad: 'Салаты',
      drinks: 'Напитки',

      about: 'О нас',
      feedback: 'Оставить отзыв',
      qna: 'Вопросы/Ответы',
      delivery: 'Условия доставки',
      payment: 'Оплата',
      promotions: 'Акции',
      productInfo: 'O продукции',
      contacts: 'Контакты'
    },

    buttons:{
      toCart: 'В корзину'
    },

    productsPage:{
      title:{
        pizza: 'Пицца',
        pasta: 'Паста',
        salad: 'Салаты',
        drinks: 'Напитки',
      },
      info:{
        pizza: 'Готовим восхитительное тесто для основы и не экономим на     ингредиентах и топингах! Именно поэтому наши пиццы тяжелее и   отличаются очень насыщенным вкусом!',
        pasta: 'Предлагаем разнообразное меню: помимо пиццы, у нас всегда можно заказать пасту, гриль, суши, салаты, гарниры и десерты, которые готовят наши квалифицированные повара.',
        salad: 'Используем только самые свежие продукты от поставщиков, которым доверяем. В нашей пицце и других блюдах нет размороженных полуфабрикатов.',
        drinks: 'Заботимся об окружающей среде: вся упаковка сделана из       биоразлагаемых материалов – картона и бумаги. Кроме того мы      помогаем с утилизацией использованных алкалиновых батареек – просто отдайте их нашим курьерам.'
      }
    },

    cartPage:{
      title: 'Корзина',
      empty: 'Ваша корзина пуста.',
      orderCost: 'Стоимость заказа:',
      totalCost: 'Общая стоимость',
      discount: 'Скидка',
      total: 'Итого к оплате:',
      checkout: 'Оформить заказ'
    },

    landingPage:{
      title: 'делаем пиццу более 12 лет, постоянно следим за её качеством и     придумываем новые оригинальные рецепты. В нашем меню 27 видов пиццы, и мы не собираемся останавливаться!',

      hints: [
        'Специальные рецепты от шеф-повара!',
        'Акции и праздничные скидки!',
        'Контроль качества и отличный сервис!'
      ],

      info:{
        title: 'Доставка пиццы по городу Москве.',
        posts: [
          'Делаем пиццу более 12 лет, постоянно следим за её качеством и придумываем новые оригинальные рецепты. В нашем меню 27 видов пиццы, и мы не собираемся останавливаться!',
          'Используем только самые свежие продукты от поставщиков, которым доверяем. В нашей пицце и других блюдах нет размороженных полуфабрикатов.'
        ]
      },
    },

    aboutPage: {
      title: 'О нас',
      posts: [
        'Делаем пиццу более 12 лет, постоянно следим за её качеством и придумываем новые оригинальные рецепты. В нашем меню 27 видов пиццы, и мы несобираемся останавливаться!',

        'Используем только самые свежие продукты от поставщиков, которым доверяем. В нашей пицце и других блюдах нет размороженных полуфабрикатов.',

        'Готовим восхитительное тесто для основы и не экономим на     ингредиентах и топингах! Именно поэтому наши пиццы тяжелее и   отличаются очень насыщенным вкусом!',

        'Предлагаем разнообразное меню: помимо пиццы, у нас всегда можно заказать пасту, гриль, суши, салаты, гарниры и десерты, которые готовят наши квалифицированные повара.',

        'Принимаем звонки клиентов в нашем профессиональном call-центре, операторы которого легко ориентируютсяна местности – это       значительно упрощает оформление заказов.',

        'Доставляем пиццу за 40-50 минут – это действительно самое быстрое время доставки пиццы, которая готовится изсвежих продуктов, а не полуфабрикатов. Приготовлениевашей пиццы начинается сразу же после получения заказа.',

        'Заботимся об окружающей среде: вся упаковка сделана из       биоразлагаемых материалов – картона и бумаги. Кроме того мы      помогаем с утилизацией использованных алкалиновых батареек – просто отдайте их нашим курьерам.'
      ]
    }
  }
});

export default localization;