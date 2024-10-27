const plantas = [
  {
    id: 1,
    nombre: "Aloe Vera",
    imagen: "https://i.pinimg.com/564x/7c/17/1a/7c171acc162c33d9cdb84edad06f52c8.jpg",
    descripcion: "Planta suculenta conocida por sus propiedades medicinales.",
    precio: 10.99,
    stock: 10
  },
  {
    id: 2,
    nombre: "Monstera Deliciosa",
    imagen: "https://i.pinimg.com/564x/2b/a5/44/2ba5448091ae3d061a541d025ac6e2bb.jpg",
    descripcion: "Planta tropical con hojas grandes y divididas, ideal para interiores.",
    precio: 25.99,
    stock: 8
  },
  {
    id: 3,
    nombre: "Cactus",
    imagen: "https://i.pinimg.com/564x/e0/d4/b4/e0d4b4ba91f211fad183d34733d7ae7c.jpg",
    descripcion: "Planta suculenta resistente, perfecta para principiantes.",
    precio: 5.99,
    stock: 15
  },
  {
    id: 4,
    nombre: "Lavanda",
    imagen: "https://i.pinimg.com/736x/f2/78/0b/f2780bad6101b8233dc024491eaacf97.jpg",
    descripcion: "Planta aromática que produce flores lilas y huele maravilloso.",
    precio: 12.99,
    stock: 7
  },
  {
    id: 5,
    nombre: "Palmera Kentia",
    imagen: "https://i.pinimg.com/1200x/22/19/52/221952846e32fcea1676f335c081683d.jpg",
    descripcion: "Palmera elegante que da un toque tropical a cualquier espacio.",
    precio: 30.99,
    stock: 5
  },
  {
    id: 6,
    nombre: "Ficus Lyrata",
    imagen: "https://i.pinimg.com/736x/5f/34/15/5f34153409a9ca474b3717bbc5f7b02c.jpg",
    descripcion: "Conocido como 'Fiddle Leaf Fig', es una planta de interior popular.",
    precio: 22.99,
    stock: 12
  },
  {
    id: 7,
    nombre: "Potos",
    imagen: "https://i.pinimg.com/736x/6e/30/27/6e302720a3cf63ba7302acee730ed039.jpg",
    descripcion: "Planta de interior fácil de cuidar y excelente para purificar el aire.",
    precio: 9.99,
    stock: 11
  },
  {
    id: 8,
    nombre: "Sansevieria",
    imagen: "https://i.pinimg.com/736x/57/aa/cb/57aacb9af8bc0cdf7822ef5c44287efd.jpg",
    descripcion: "Conocida como 'Lengua de Suegra', es ideal para principiantes.",
    precio: 15.99,
    stock: 9
  },
  {
    id: 9,
    nombre: "Helecho de Boston",
    imagen: "https://i.pinimg.com/564x/51/ca/29/51ca29b06ed07e934e8b47910cd2340f.jpg",
    descripcion: "Helecho frondoso, excelente para purificar el aire en interiores.",
    precio: 13.99,
    stock: 14
  },
  {
    id: 10,
    nombre: "Bonsai Ficus",
    imagen: "https://i.pinimg.com/564x/bb/42/37/bb4237d62e083633e9cc6ac60bb7ab67.jpg",
    descripcion: "Un bonsái clásico, símbolo de paz y calma.",
    precio: 45.99,
    stock: 3
  },
  {
    id: 11,
    nombre: "Suculenta Echeveria",
    imagen: "https://i.pinimg.com/736x/d0/76/a0/d076a00b7823ee1dd6985730c6f4868c.jpg",
    descripcion: "Planta pequeña y decorativa, ideal para interiores.",
    precio: 4.99,
    stock: 15
  },
  {
    id: 12,
    nombre: "Orquídea Phalaenopsis",
    imagen: "https://i.pinimg.com/736x/c8/e1/7c/c8e17c7a41ea3944e1c77aeb0eda808d.jpg",
    descripcion: "Orquídea elegante con flores duraderas.",
    precio: 19.99,
    stock: 6
  },
  {
    id: 13,
    nombre: "Hiedra Inglesa",
    imagen: "https://i.pinimg.com/736x/08/8f/6b/088f6b9dc633604c75cc9a94496d8b0a.jpg",
    descripcion: "Planta trepadora, perfecta para decorar interiores y exteriores.",
    precio: 7.99,
    stock: 10
  },
  {
    id: 14,
    nombre: "Hierbabuena",
    imagen: "https://i.pinimg.com/564x/c4/46/17/c44617623b4264f4faad1c826b1ee2cf.jpg",
    descripcion: "Hierba aromática ideal para cocinar y bebidas.",
    precio: 3.99,
    stock: 14
  },
  {
    id: 15,
    nombre: "Calathea Orbifolia",
    imagen: "https://i.pinimg.com/564x/2e/9d/cb/2e9dcbde99375f96e026cdb87f804fb3.jpg",
    descripcion: "Planta de hojas grandes y decorativas, ideal para interiores.",
    precio: 18.99,
    stock: 8
  },
  {
    id: 16,
    nombre: "Jade",
    imagen: "https://i.pinimg.com/564x/26/b8/4f/26b84fd5ae08229e806dd5d6e9a3c6b9.jpg",
    descripcion: "Planta de buena suerte, fácil de cuidar.",
    precio: 9.99,
    stock: 12
  },
  {
    id: 17,
    nombre: "Dracaena Marginata",
    imagen: "https://i.pinimg.com/736x/35/62/ef/3562ef0d1323fced372652dd1fbef0b3.jpg",
    descripcion: "Planta de interior con hojas largas y delgadas.",
    precio: 16.99,
    stock: 5
  },
  {
    id: 18,
    nombre: "Palmera Areca",
    imagen: "https://i.pinimg.com/564x/fa/2b/1f/fa2b1f71b8b97b760d892f80aabb3555.jpg",
    descripcion: "Palmera de interior que da un toque tropical.",
    precio: 21.99,
    stock: 6
  },
  {
    id: 19,
    nombre: "Crotón",
    imagen: "https://i.pinimg.com/736x/29/1b/6c/291b6caaeb72693b1c67770efdaee3fd.jpg",
    descripcion: "Planta colorida con hojas brillantes.",
    precio: 11.99,
    stock: 9
  },
  {
    id: 20,
    nombre: "Espatifilo",
    imagen: "https://i.pinimg.com/564x/92/57/0a/92570ac583f408c973e429799b490fb2.jpg",
    descripcion: "Planta de interior conocida como Lirio de la Paz.",
    precio: 14.99,
    stock: 7
  },
  {
    id: 21,
    nombre: "Palma Bambú",
    imagen: "https://i.pinimg.com/564x/3c/67/9e/3c679e0a38581c7ed30ef1fa092aeb1c.jpg",
    descripcion: "Palma pequeña ideal para interiores, con hojas delgadas y elegantes.",
    precio: 17.99,
    stock: 9
  },
  {
    id: 22,
    nombre: "Aglaonema",
    imagen: "https://i.pinimg.com/564x/09/1f/d5/091fd5eaf9693d35da0eff4c07cfb6a7.jpg",
    descripcion: "Planta con hojas coloridas y fáciles de cuidar, ideal para interiores.",
    precio: 15.99,
    stock: 10
  },
  {
    id: 23,
    nombre: "Begonia Rex",
    imagen: "https://i.pinimg.com/564x/2e/d5/68/2ed56893fd878c55eb34029ae71f9545.jpg",
    descripcion: "Planta con hojas coloridas y textura única.",
    precio: 12.99,
    stock: 8
  },
  {
    id: 24,
    nombre: "Haworthia",
    imagen: "https://i.pinimg.com/736x/9a/95/2b/9a952bf223af7a7e820ceaf1fc169c18.jpg",
    descripcion: "Pequeña suculenta con un patrón único en sus hojas.",
    precio: 6.99,
    stock: 15
  },
  {
    id: 25,
    nombre: "Fresia",
    imagen: "https://i.pinimg.com/736x/f8/7b/d4/f87bd4d5e77c0d196a37c2891ff700ba.jpg",
    descripcion: "Flor colorida y fragante, ideal para decoración.",
    precio: 13.99,
    stock: 5
  },
  {
    id: 26,
    nombre: "Planta Serpiente",
    imagen: "https://i.pinimg.com/736x/c1/86/6c/c1866cc349aba11450e5f37037b0d0ca.jpg",
    descripcion: "Planta fácil de cuidar, ideal para principiantes.",
    precio: 11.99,
    stock: 10
  },
  {
    id: 27,
    nombre: "Caléndula",
    imagen: "https://i.pinimg.com/564x/39/30/c5/3930c5d36983cdf249a725997c482f69.jpg",
    descripcion: "Flor de color naranja vibrante, ideal para jardines.",
    precio: 7.99,
    stock: 12
  },
  {
    id: 28,
    nombre: "Philodendron Birkin",
    imagen: "https://i.pinimg.com/564x/c6/ce/90/c6ce90c6a3d03476b2a25d385ff503a8.jpg",
    descripcion: "Planta de interior con hojas rayadas en blanco y verde.",
    precio: 19.99,
    stock: 6
  },
  {
    id: 29,
    nombre: "Zamioculca",
    imagen: "https://i.pinimg.com/564x/66/ac/d1/66acd1b22a1d0ceb15b00b7d5c1040b5.jpg",
    descripcion: "Planta resistente y fácil de cuidar, ideal para interiores.",
    precio: 14.99,
    stock: 7
  },
  {
    id: 30,
    nombre: "Alocasia Polly",
    imagen: "https://i.pinimg.com/564x/46/ae/ef/46aeef371debdca67628f6b5cdf016d0.jpg",
    descripcion: "Planta de hojas grandes y decorativas, excelente para interiores.",
    precio: 18.99,
    stock: 9
  },
  {
    id: 31,
    nombre: "Poinsettia",
    imagen: "https://i.pinimg.com/564x/d7/30/1a/d7301a8e791d5df853e1d0940599d47e.jpg",
    descripcion: "Planta de flores rojas, ideal para decorar en Navidad.",
    precio: 15.99,
    stock: 10
  },
  {
    id: 32,
    nombre: "Canna Lily",
    imagen: "https://i.pinimg.com/564x/12/29/a0/1229a0df5a993bc61e65ac9202d22aa4.jpg",
    descripcion: "Planta perenne con flores vibrantes, ideal para jardines.",
    precio: 11.50,
    stock: 5
  }
];
