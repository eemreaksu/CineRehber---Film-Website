// src/data/movies.js

// Bu dosya, uygulamamızda kullanacağımız "sahte" (mock) verileri içerir.
// Normalde bu veriler bir API'den (sunucudan) gelir, ancak şu an öğrenme aşamasında olduğumuz için
// sabit bir liste kullanıyoruz.

export const movies = [
  {
    id: 1,
    title: "Inception",
    description: "Rüyalar içinde rüya görme sanatını icra eden bir hırsızın hikayesi.",
    poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    category: "Bilim Kurgu",
    rating: 8.8
  },
  {
    id: 2,
    title: "The Dark Knight",
    description: "Batman, Gotham sokaklarını kaosa sürükleyen Joker ile yüzleşiyor.",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    category: "Aksiyon",
    rating: 9.0
  },
  {
    id: 3,
    title: "Interstellar",
    description: "İnsanlığın kurtuluşu için solucan deliğinden geçen bir grup astronot.",
    poster: "https://image.tmdb.org/t/p/w500/xbiycuc84TrieEWwkkuH2hoEa9S.jpg",
    category: "Bilim Kurgu",
    rating: 8.6
  },
  {
    id: 4,
    title: "The Godfather",
    description: "Amerikan suç ailesi Corleone'nin çalkantılı öyküsü.",
    poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    category: "Suç",
    rating: 9.2
  },
  {
    id: 5,
    title: "Avengers: Endgame",
    description: "Yenilmezler, evreni eski haline getirmek için Thanos'a karşı birleşiyor.",
    poster: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
    category: "Aksiyon",
    rating: 8.4
  },
  {
    id: 6,
    title: "Parasite",
    description: "Fakir bir ailenin zengin bir ailenin hayatına sızma çabası.",
    poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    category: "Drama",
    rating: 8.5
  }
];

// Kategorileri de ayrı bir liste olarak dışarı aktarabiliriz
export const categories = ["Tümü", "Aksiyon", "Bilim Kurgu", "Drama", "Suç"];
