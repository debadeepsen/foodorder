export default {
  restaurants: [
    {
      id: 1,
      name: 'Comida Favorita',
      price_range: 2,
      rating: 3,
      distance: {
        value: 1,
        unit: 'km',
      },
      address: '17 Alphonso Avenue, Los Carros, CA 98758',
      phone: '(408)-404-6174',
      image:
        'https://spanishsabores.com/wp-content/uploads/2015/04/IMG_6028.jpg',
      type: {
        id: 1,
        name: 'Spanish',
        flag: '🇪🇸',
      },
      menu: [
        {
          id: 1,
          name: 'Tostada con tomate',
          price: 10,
          image:
            'https://spanishsabores.com/wp-content/uploads/2017/09/Tostada.jpg',
          description:
            'Toasts with tomato. A reminder that a good breakfast can be simple.',
        },
        {
          id: 2,
          name: 'Paella con Marisco',
          price: 12,
          image:
            'https://images.pexels.com/photos/4305836/pexels-photo-4305836.jpeg',
          description: 'Succulent rice cooked with saffron and seafoods.',
        },
        {
          id: 3,
          name: 'Pimientos de Padron',
          price: 10,
          image:
            'https://i2.wp.com/www.wildjunket.com/wp-content/uploads/2020/04/panfriedpadronpeppers-600x900.jpg',
          description: 'Just peppers. Nothing else.',
        },
        {
          id: 4,
          name: 'Pinchos Morunos',
          price: 22,
          image:
            'https://i2.wp.com/www.wildjunket.com/wp-content/uploads/2020/04/spanish-pork-kebabs-for-facebook-600x314.jpg',
          description: 'Delicious grilled pork, the Spanish variety.',
        },
        {
          id: 5,
          name: 'Salmorejo',
          price: 20,
          image:
            'https://spanishsabores.com/wp-content/uploads/2015/04/IMG_6028.jpg',
          description: 'A rich, creamy Spanish tomato soup.',
        },
        {
          id: 6,
          name: 'Huevos Rotos',
          price: 20,
          image:
            'https://spanishsabores.com/wp-content/uploads/2014/04/IMG_4364.jpg',
          description: 'A delectable concoction of eggs and meat.',
        },
        {
          id: 7,
          name: 'Empanadas de Tuna',
          price: 20,
          image:
            'https://spanishsabores.com/wp-content/uploads/2015/06/Tuna-Empanada-Recipe-Feature.jpg',
          description: 'Empanadas with a twist.',
        },
      ],
    },
    {
      id: 2,
      name: 'Bengal Banquets',
      price_range: 4,
      rating: 5,
      distance: {
        value: 6,
        unit: 'km',
      },
      address: '259B King\'s Row, Justin, CA 98758',
      phone: '(408)-404-6174',
      image:
        'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
      type: {
        id: 1,
        name: 'Bengali/Indian',
        flag: '🇮🇳',
      },
      menu: [
        {
          id: 1,
          name: 'Murgir Jhol',
          price: 15,
          image:
            'https://cdn.pixabay.com/photo/2019/08/12/09/50/chicken-curry-4400848_960_720.jpg',
            description: 'A rich tomato-based gravy with juicy chicken pieces.'
        },
        {
          id: 2,
          name: 'Mustard Fish Curry',
          price: 17,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/e/ec/Mustard_Fish_Curry.jpg',
            description:'A mustard based variety of one of Bengal\'s signature dishes'
        },
        {
          id: 8,
          name: 'Mutton (Goat) Kosha',
          price: 20,
          image:
            'https://uploads-ssl.webflow.com/5c481361c604e53624138c2f/5c5784dd46836abe97e82a07_kosha-mangsho-website-thumbnail-_p4nuue.png',
            description: 'Pieces of meat seared and braised on low heat until they are tender enough to fall off the bones.'
        },
        {
          id: 3,
          name: 'Mutton (Goat) Biryani',
          price: 20,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Kolkata_Biryani.jpg/1024px-Kolkata_Biryani.jpg',
            description: 'A slow-cooked casserole of meat and rice. This is a special Bengali variety of the dish considered a delicacy all over India.'
        },
        {
          id: 4,
          name: 'Bhetki Paturi',
          price: 22,
          image:
            'https://i1.wp.com/kitchenofdebjani.com/wp-content/uploads/2018/01/Bhetki-Macher-Paturi-3.jpg',
            description: 'Tender Bhetki fish fillets marinated with spices and steamed in a banana leaf envelope. Healthy with a dash of indulgence.'
        },
        {
          id: 5,
          name: 'Singara/Samosa',
          price: 10,
          image:
            'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
            description: 'A deep fried pastry pocket containing delicious spicy vegetables.'
        },
        {
          id: 6,
          name: 'Fish Kabiraji',
          price: 20,
          image:
            'http://i0.wp.com/saffronstreaks.com/wp-content/uploads/2010/04/ss_fish_kabiraji.jpg',
            description: 'The Bengali evolution of the classic British coverage cutlet.'
        },
        {
          id: 7,
          name: 'Alur Dom',
          price: 20,
          image:
            'https://2.bp.blogspot.com/-3dom_cXpMP0/VvPb0tHfeYI/AAAAAAAAGyw/mlFwW-ZJhQkmRFV_cB_2uX8ldzEKX2V4A/s1600/easy-dum-aloo-with-yogurt4.jpg',
            description: 'Succulent potato pieces sauteed in a rich tomato gravy.'
        },
      ],
    },
    {
      id: 3,
      name: 'Beijing',
      price_range: 1,
      rating: 4,
      distance: {
        value: 14,
        unit: 'km',
      },
      address: '25 Street Number Ten, Calvin, CA 98758',
      phone: '(408)-404-6174',
      image: 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg',
      type: {
        id: 3,
        name: 'Chinese',
        flag: '🇨🇳',
      },
      menu: [
        {
          id: 1,
          name: 'Tostada con tomate',
          price: 10,
          image:
            'https://spanishsabores.com/wp-content/uploads/2017/09/Tostada.jpg',
        },
        {
          id: 2,
          name: 'Paella con Marisco',
          price: 12,
          image:
            'https://images.pexels.com/photos/4305836/pexels-photo-4305836.jpeg',
        },
        {
          id: 3,
          name: 'Pimientos de Padron',
          price: 10,
          image:
            'https://i2.wp.com/www.wildjunket.com/wp-content/uploads/2020/04/panfriedpadronpeppers-600x900.jpg',
        },
        {
          id: 4,
          name: 'Pinchos Morunos',
          price: 22,
          image:
            'https://i2.wp.com/www.wildjunket.com/wp-content/uploads/2020/04/spanish-pork-kebabs-for-facebook-600x314.jpg',
        },
        {
          id: 5,
          name: 'Salmorejo',
          price: 20,
          image:
            'https://spanishsabores.com/wp-content/uploads/2015/04/IMG_6028.jpg',
        },
        {
          id: 6,
          name: 'Huevos Rotos',
          price: 20,
          image:
            'https://spanishsabores.com/wp-content/uploads/2014/04/IMG_4364.jpg',
        },
        {
          id: 1,
          name: 'Empanadas de Tuna',
          price: 20,
          image:
            'https://spanishsabores.com/wp-content/uploads/2015/06/Tuna-Empanada-Recipe-Feature.jpg',
        },
      ],
    },
    {
      id: 4,
      name: 'Ottimo Cibo',
      price_range: 2,
      rating: 3,
      distance: {
        value: 2,
        unit: 'km',
      },
      address: '11 Downing Street, London, CA 98758',
      phone: '(408)-404-6174',
      image:
        'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      type: {
        id: 4,
        name: 'Italian',
        flag: '🇮🇹',
      },
      menu: [
        {
          id: 1,
          name: 'Tostada con tomate',
          price: 10,
          image:
            'https://spanishsabores.com/wp-content/uploads/2017/09/Tostada.jpg',
        },
        {
          id: 2,
          name: 'Paella con Marisco',
          price: 12,
          image:
            'https://images.pexels.com/photos/4305836/pexels-photo-4305836.jpeg',
        },
        {
          id: 3,
          name: 'Pimientos de Padron',
          price: 10,
          image:
            'https://i2.wp.com/www.wildjunket.com/wp-content/uploads/2020/04/panfriedpadronpeppers-600x900.jpg',
        },
        {
          id: 4,
          name: 'Pinchos Morunos',
          price: 22,
          image:
            'https://i2.wp.com/www.wildjunket.com/wp-content/uploads/2020/04/spanish-pork-kebabs-for-facebook-600x314.jpg',
        },
        {
          id: 5,
          name: 'Salmorejo',
          price: 20,
          image:
            'https://spanishsabores.com/wp-content/uploads/2015/04/IMG_6028.jpg',
        },
        {
          id: 6,
          name: 'Huevos Rotos',
          price: 20,
          image:
            'https://spanishsabores.com/wp-content/uploads/2014/04/IMG_4364.jpg',
        },
        {
          id: 1,
          name: 'Empanadas de Tuna',
          price: 20,
          image:
            'https://spanishsabores.com/wp-content/uploads/2015/06/Tuna-Empanada-Recipe-Feature.jpg',
        },
      ],
    },
    {
      id: 5,
      name: 'Shokumotsu',
      price_range: 2,
      rating: 5,
      distance: {
        value: 5,
        unit: 'km',
      },
      address: '117 Hanamura Road, Himari, CA 98758',
      phone: '(408)-404-6174',
      image:
        'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      type: {
        id: 5,
        name: 'Sushi/japanese',
        flag: '🇯🇵',
      },
      menu: [
        {
          id: 1,
          name: 'Tostada con tomate',
          price: 10,
          image:
            'https://spanishsabores.com/wp-content/uploads/2017/09/Tostada.jpg',
        },
        {
          id: 2,
          name: 'Paella con Marisco',
          price: 12,
          image:
            'https://images.pexels.com/photos/4305836/pexels-photo-4305836.jpeg',
        },
        {
          id: 3,
          name: 'Pimientos de Padron',
          price: 10,
          image:
            'https://i2.wp.com/www.wildjunket.com/wp-content/uploads/2020/04/panfriedpadronpeppers-600x900.jpg',
        },
        {
          id: 4,
          name: 'Pinchos Morunos',
          price: 22,
          image:
            'https://i2.wp.com/www.wildjunket.com/wp-content/uploads/2020/04/spanish-pork-kebabs-for-facebook-600x314.jpg',
        },
        {
          id: 5,
          name: 'Salmorejo',
          price: 20,
          image:
            'https://spanishsabores.com/wp-content/uploads/2015/04/IMG_6028.jpg',
        },
        {
          id: 6,
          name: 'Huevos Rotos',
          price: 20,
          image:
            'https://spanishsabores.com/wp-content/uploads/2014/04/IMG_4364.jpg',
        },
        {
          id: 1,
          name: 'Empanadas de Tuna',
          price: 20,
          image:
            'https://spanishsabores.com/wp-content/uploads/2015/06/Tuna-Empanada-Recipe-Feature.jpg',
        },
      ],
    },
  ],
};
