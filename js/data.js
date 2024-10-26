const plantas = [
    {
      id: 1,
      nombre: "Aloe Vera",
      imagen: "https://picsum.photos/150/200",
      descripcion: "Planta suculenta conocida por sus propiedades medicinales.",
      precio: 10.99,
      stock: 10
    },
    {
      id: 2,
      nombre: "Monstera Deliciosa",
      imagen: "https://picsum.photos/150/200",
      descripcion: "Planta tropical con hojas grandes y divididas, ideal para interiores.",
      precio: 25.99,
      stock: 8
    },
    {
      id: 3,
      nombre: "Cactus",
      imagen: "https://picsum.photos/150/200",
      descripcion: "Planta suculenta resistente, perfecta para principiantes.",
      precio: 5.99,
      stock: 15
    },
    {
      id: 4,
      nombre: "Lavanda",
      imagen: "https://picsum.photos/150/200",
      descripcion: "Planta aromática que produce flores lilas y huele maravilloso.",
      precio: 12.99,
      stock: 7
    },
    {
      id: 5,
      nombre: "Palmera Kentia",
      imagen: "https://picsum.photos/150/200",
      descripcion: "Palmera elegante que da un toque tropical a cualquier espacio.",
      precio: 30.99,
      stock: 5
    },
    {
      id: 6,
      nombre: "Ficus Lyrata",
      imagen: "https://picsum.photos/150/200",
      descripcion: "Conocido como 'Fiddle Leaf Fig', es una planta de interior popular.",
      precio: 22.99,
      stock: 12
    },
    {
      id: 7,
      nombre: "Potos",
      imagen: "https://picsum.photos/150/200",
      descripcion: "Planta de interior fácil de cuidar y excelente para purificar el aire.",
      precio: 9.99,
      stock: 11
    },
    {
      id: 8,
      nombre: "Sansevieria",
      imagen: "https://picsum.photos/150/200",
      descripcion: "Conocida como 'Lengua de Suegra', es ideal para principiantes.",
      precio: 15.99,
      stock: 9
    },
    {
      id: 9,
      nombre: "Helecho de Boston",
      imagen: "https://picsum.photos/150/200",
      descripcion: "Helecho frondoso, excelente para purificar el aire en interiores.",
      precio: 13.99,
      stock: 14
    },
    {
      id: 10,
      nombre: "Bonsai Ficus",
      imagen: "https://picsum.photos/150/200",
      descripcion: "Un bonsái clásico, símbolo de paz y calma.",
      precio: 45.99,
      stock: 3
    },
    {
      id: 11,
      nombre: "Suculenta Echeveria",
      imagen: "https://picsum.photos/150/200",
      descripcion: "Planta pequeña y decorativa, ideal para interiores.",
      precio: 4.99,
      stock: 15
    },
    {
      id: 12,
      nombre: "Orquídea Phalaenopsis",
      imagen: "https://picsum.photos/150/200",
      descripcion: "Orquídea elegante con flores duraderas.",
      precio: 19.99,
      stock: 6
    },
    {
      id: 13,
      nombre: "Hiedra Inglesa",
      imagen: "https://picsum.photos/150/200",
      descripcion: "Planta trepadora, perfecta para decorar interiores y exteriores.",
      precio: 7.99,
      stock: 10
    },
    {
      id: 14,
      nombre: "Hierbabuena",
      imagen: "https://picsum.photos/150/200",
      descripcion: "Hierba aromática ideal para cocinar y bebidas.",
      precio: 3.99,
      stock: 14
    },
    {
      id: 15,
      nombre: "Calathea Orbifolia",
      imagen: "https://picsum.photos/150/200",
      descripcion: "Planta de hojas grandes y decorativas, ideal para interiores.",
      precio: 18.99,
      stock: 8
    },
    {
      id: 16,
      nombre: "Jade",
      imagen: "https://picsum.photos/150/200",
      descripcion: "Planta de buena suerte, fácil de cuidar.",
      precio: 9.99,
      stock: 12
    },
    {
      id: 17,
      nombre: "Dracaena Marginata",
      imagen: "https://picsum.photos/150/200",
      descripcion: "Planta de interior con hojas largas y delgadas.",
      precio: 16.99,
      stock: 5
    },
    {
      id: 18,
      nombre: "Palmera Areca",
      imagen: "https://picsum.photos/150/200",
      descripcion: "Palmera de interior que da un toque tropical.",
      precio: 21.99,
      stock: 6
    },
    {
      id: 19,
      nombre: "Crotón",
      imagen: "https://picsum.photos/150/200",
      descripcion: "Planta colorida con hojas brillantes.",
      precio: 11.99,
      stock: 9
    },
    {
      id: 20,
      nombre: "Espatifilo",
      imagen: "https://picsum.photos/150/200",
      descripcion: "Planta de interior conocida como Lirio de la Paz.",
      precio: 14.99,
      stock: 7
    },
    {
      id: 21,
      nombre: "Palma Bambú",
      imagen: "https://picsum.photos/150/200",
      descripcion: "Palma pequeña ideal para interiores, con hojas delgadas y elegantes.",
      precio: 17.99,
      stock: 9
    },
    {
      id: 22,
      nombre: "Aglaonema",
      imagen: "https://picsum.photos/150/200",
      descripcion: "Planta con hojas coloridas y fáciles de cuidar, ideal para interiores.",
      precio: 15.99,
      stock: 10
    },
    {
      id: 23,
      nombre: "Begonia Rex",
      imagen: "https://picsum.photos/150/200",
      descripcion: "Planta con hojas coloridas y textura única.",
      precio: 12.99,
      stock: 8
    },
    {
      id: 24,
      nombre: "Haworthia",
      imagen: "https://picsum.photos/150/200",
      descripcion: "Pequeña suculenta con un patrón único en sus hojas.",
      precio: 6.99,
      stock: 15
    },
    {
      id: 25,
      nombre: "Fresia",
      imagen: "https://picsum.photos/150/200",
      descripcion: "Flor colorida y fragante, ideal para decoración.",
      precio: 13.99,
      stock: 5
    },
    {
      id: 26,
      nombre: "Planta Serpiente",
      imagen: "https://picsum.photos/150/200",
      descripcion: "Planta fácil de cuidar, ideal para principiantes.",
      precio: 11.99,
      stock: 10
    },
    {
      id: 27,
      nombre: "Caléndula",
      imagen: "https://picsum.photos/150/200",
      descripcion: "Flor de color naranja vibrante, ideal para jardines.",
      precio: 7.99,
      stock: 12
    },
    {
      id: 28,
      nombre: "Philodendron Birkin",
      imagen: "https://picsum.photos/150/200",
      descripcion: "Planta de interior con hojas rayadas en blanco y verde.",
      precio: 19.99,
      stock: 6
    },
    {
      id: 29,
      nombre: "Zamioculca",
      imagen: "https://picsum.photos/150/200",
      descripcion: "Planta resistente y fácil de cuidar, ideal para interiores.",
      precio: 14.99,
      stock: 7
    },
    {
      id: 30,
      nombre: "Alocasia Polly",
      imagen: "https://picsum.photos/150/200",
      descripcion: "Planta de hojas grandes y decorativas, excelente para interiores.",
      precio: 18.99,
      stock: 9
    }
  ];