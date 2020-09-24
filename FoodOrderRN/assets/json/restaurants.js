export default {
  disclaimer:
    'The content here has been ethically sourced. The restaurants are fictional, but all the dishes and their corresponding descriptions are real, and belong to their respective cuisines. The pictures have been chosen from a set with free licenses.',
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
      phone: '+1 (408)-404-6174',
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
      address: "259B King's Row, Justin, CA 98758",
      phone: '+1 (408)-404-6174',
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
          type:'N',
          image:
            'https://cdn.pixabay.com/photo/2019/08/12/09/50/chicken-curry-4400848_960_720.jpg',
          description: 'A rich tomato-based gravy with juicy chicken pieces.',
        },
        {
          id: 2,
          name: 'Mustard Fish Curry',
          price: 17,
          type:'N',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/e/ec/Mustard_Fish_Curry.jpg',
          description:
            "A mustard based variety of one of Bengal's signature dishes.",
        },
        {
          id: 8,
          name: 'Mutton (Goat) Kosha',
          price: 20,
          type:'N',
          image:
            'https://uploads-ssl.webflow.com/5c481361c604e53624138c2f/5c5784dd46836abe97e82a07_kosha-mangsho-website-thumbnail-_p4nuue.png',
          description:
            'Pieces of meat seared and braised on low heat until they are tender enough to fall off the bones.',
        },
        {
          id: 3,
          name: 'Mutton (Goat) Biryani',
          price: 20,
          type:'N',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Kolkata_Biryani.jpg/1024px-Kolkata_Biryani.jpg',
          description:
            'A slow-cooked casserole of meat and rice. This is a special Bengali variety of the dish considered a delicacy all over India.',
        },
        {
          id: 4,
          name: 'Bhetki Paturi',
          price: 22,
          type:'N',
          image:
            'https://i1.wp.com/kitchenofdebjani.com/wp-content/uploads/2018/01/Bhetki-Macher-Paturi-3.jpg',
          description:
            'Tender Bhetki fish fillets marinated with spices and steamed in a banana leaf envelope. Healthy with a dash of indulgence.',
        },
        {
          id: 5,
          name: 'Singara/Samosa',
          price: 10,
          type:'V',
          image:
            'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
          description:
            'A deep fried pastry pocket containing delicious spicy vegetables.',
        },
        {
          id: 6,
          name: 'Fish Kabiraji',
          price: 20,
          type:'N',
          image:
            'http://i0.wp.com/saffronstreaks.com/wp-content/uploads/2010/04/ss_fish_kabiraji.jpg',
          description:
            'The Bengali evolution of the classic British coverage cutlet.',
        },
        {
          id: 7,
          name: 'Alur Dom',
          price: 20,
          type:'V',
          image:
            'https://2.bp.blogspot.com/-3dom_cXpMP0/VvPb0tHfeYI/AAAAAAAAGyw/mlFwW-ZJhQkmRFV_cB_2uX8ldzEKX2V4A/s1600/easy-dum-aloo-with-yogurt4.jpg',
          description:
            'Succulent potato pieces sauteed in a rich tomato gravy.',
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
      phone: '+1 (408)-404-6174',
      image: 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg',
      type: {
        id: 3,
        name: 'Chinese',
        flag: '🇨🇳',
      },
      menu: [
        {
          id: 1,
          name: 'Kung Pao Chicken',
          price: 10,
          image:
            'http://2.bp.blogspot.com/-PhwF7ZMrHO0/Vn6jo5K9sGI/AAAAAAAAEUs/YfUqMgaQIRY/w1200-h630-p-k-no-nu/2015-12-22%2B12.08.12.jpg',
          description:
            'A Chinese favorite of the West. Spicy chicken stir-fried with nuts and vegetables.',
        },
        {
          id: 2,
          name: 'Yeung Chow Fried Rice',
          price: 9,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/3/38/Yeung_Chow_Fried_Rice.jpg',
          description:
            'A fried rice known by its unique taste. Hearty mix of chicken, shrimp, pork, eggs, and vegetables.',
        },
        {
          id: 3,
          name: 'Shrimp in Lobster Sauce',
          price: 10,
          image:
            'http://2.bp.blogspot.com/-s0E19A8nPrI/T2AKqZoqWnI/AAAAAAAAEFg/jQmoJOHVOTw/s1600/tofu%2Bsh.JPG',
          description:
            'The best of crustaceans get together to make this dish happen. An unforgettable delicacy.',
        },
        {
          id: 4,
          name: 'Singapore Chow Mei Fun',
          price: 14,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Singapore_style_noodles.jpg/1200px-Singapore_style_noodles.jpg',
          description:
            'A gorgeous mix of thin vermicelli noodles and your favorite meats and vegetables. Cooked in curry sauce to give it the distinct color and aroma.',
        },
        {
          id: 5,
          name: 'Beef and Broccoli Stir-Fry',
          price: 12,
          image:
            'https://cloud.foodista.com/content/images/84b8bc79b3db590113fa08e8e6677bd2978394fe_607x400.jpg',
          description:
            'Deliciousness freshness of the broccoli mixes with the silky beef gravy to create this wonderful dish.',
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
      phone: '+1 (408)-404-6174',
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
          name: 'Spaghetti Carbonara',
          price: 10,
          image:
            'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/11/4/1/FNM_120109-W-N-Dinners-036_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371589446335.jpeg',
          description:
            'Simplicity is the beauty of this Italian classic pasta dish.',
        },
        {
          id: 2,
          name: 'Panzanella',
          price: 12,
          image:
            'https://static01.nyt.com/images/2015/07/08/dining/08APPE2/08APPE2-superJumbo.jpg',
          description: 'A refreshing Tuscan salad, ideal for summer.',
        },
        {
          id: 3,
          name: 'Bruschetta',
          price: 10,
          image:
            'https://cdn.pixabay.com/photo/2019/06/18/18/01/bruschetta-4282898_960_720.jpg',
          description:
            'The classic Italian starter - grilled bread topped with veggies, rubbed garlic and tomato mix.',
        },
        {
          id: 4,
          name: 'Mushroom Risotto',
          price: 12,
          image:
            'https://www.rhiansrecipes.com/wp-content/uploads/2018/12/IMG_0106-2.jpeg',
          description:
            'One cannot think of Italian cuisine without Risotto. Made with the finest quality rice and mushrooms that are sure to melt in your mouth.',
        },
        {
          id: 5,
          name: 'Lasagna',
          price: 20,
          image: 'https://i.ytimg.com/vi/2qLwkT1F4Lc/maxresdefault.jpg',
          description:
            'Several layers of deliciousness topped upon one another, this dish smells of indulgence.',
        },
        {
          id: 6,
          name: 'Pasta Bolognese',
          price: 15,
          image:
            'https://cdn.pixabay.com/photo/2019/10/13/14/23/spaghetti-bolognese-4546233_960_720.jpg',
          description:
            'Al dente pasta dripping with mouth-watering meat sauce. Another Italian dish famous all over the world.',
        },
        {
          id: 7,
          name: 'Margherita Pizza',
          price: 14,
          image:
            'https://cdn.pixabay.com/photo/2015/10/17/20/22/margherita-pizza-993274_960_720.jpg',
          description:
            'The original classic, that went on to conquer the world in various forms.',
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
      phone: '+1 (408)-404-6174',
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
          name: 'Oyakodon',
          price: 10,
          image:
            'https://asianinspirations.com.au/wp-content/uploads/2019/04/R01996_Oyakodon.jpg',
            description: 'A juicy, brothy mix of tender chicken and runny egg, served over rice.'
        },
        {
          id: 2,
          name: 'Yakitori',
          price: 12,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Typical_yakitori_001.jpg/1200px-Typical_yakitori_001.jpg',
            description: 'Japanese skewered chicken grilled over charcoal.'
        },
        {
          id: 3,
          name: 'Hōtō',
          price: 10,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/a/a0/Houtou.jpg',
            description: 'A popular regional dish originating from Yamanashi, Japan made by stewing flat udon noodles and vegetables in miso soup.'
        },
        {
          id: 4,
          name: 'Teriyaki Salmon',
          price: 22,
          image:
            'https://dinnerdiary.org/wp-content/teriyaki-salmon.JPG',
            description: 'A salmon fillet marinated in teriyaki sauce, then grilled to perfection.'
        },
        {
          id: 5,
          name: 'Omurice',
          price: 14,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/e/e2/Omurice_by_jetalone_in_a_downtown%2C_Tokyo.jpg',
            description: 'A dish that often finds its way onto YouTube for tableside spectacles, this is rice and eggs like you have never seen before.'
        }
      ],
    },
  ],
};
