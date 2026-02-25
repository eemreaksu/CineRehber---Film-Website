import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import MovieCard from './components/MovieCard'
import { movies as movieData } from './data/movies'
import './index.css'

// App Bileşeni: Uygulamanın ana "beyni".
// Bütün önemli veriler (state) burada tutulur ve alt bileşenlere dağıtılır.

function App() {
  // --- STATE TANIMLAMALARI (useState) ---

  // 1. movies: Ekranda gösterilecek filmlerin listesi.
  // Başlangıç değeri boş dizi [] çünkü veriler daha gelmedi (simüle ediyoruz).
  const [movies, setMovies] = useState([])

  // 2. loading: Veriler yükleniyor mu? (Başlangıçta true)
  const [loading, setLoading] = useState(true)

  // 3. searchTerm: Arama kutusuna yazılan metin.
  const [searchTerm, setSearchTerm] = useState('')

  // 4. activeCategory: Seçili olan kategori. (varsayılan: "Tümü")
  const [activeCategory, setActiveCategory] = useState("Tümü")

  // 5. favorites: Favori filmlerin ID listesi.
  const [favorites, setFavorites] = useState([])

  // --- EFFECT KANCAALARI (useEffect) ---

  // useEffect #1: Uygulama ilk açıldığında çalışır.
  // Gerçek hayatta burada API'den veri çekeriz.
  useEffect(() => {
    // 1 saniyelik bir gecikme simüle ediyoruz (sanki internetten yükleniyor gibi)
    const timer = setTimeout(() => {
      setMovies(movieData) // Verileri state'e kaydet
      setLoading(false)    // Yüklenme bitti
    }, 1000)

    // Temizlik fonksiyonu (gerekirse timer'ı iptal et)
    return () => clearTimeout(timer)
  }, []) // [] boş dizi -> Sadece ilk render'da çalışır.

  // --- YARDIMCI FONKSİYONLAR ---

  // Favori ekleme/çıkarma fonksiyonu
  const handleToggleFavorite = (movie) => {
    if (favorites.includes(movie.id)) {
      // Zaten favoriyse listeden çıkar (filter ile)
      setFavorites(favorites.filter(id => id !== movie.id))
    } else {
      // Favori değilse listeye ekle (mevcut dizi + yeni id)
      setFavorites([...favorites, movie.id])
    }
  }

  // --- FİLTRELEME MANTIĞI ---

  // Hem arama metnine hem de kategoriye göre filmleri filtreleyelim.
  const filteredMovies = movies.filter(movie => {
    // 1. Kategori kontrolü
    const categoryMatch = activeCategory === "Tümü" || movie.category === activeCategory

    // 2. Arama kontrolü (Büyük/küçük harf duyarsız)
    const searchMatch = movie.title.toLowerCase().includes(searchTerm.toLowerCase())

    return categoryMatch && searchMatch
  })

  // --- RENDER (GÖRÜNTÜLEME) ---

  return (
    <div className="app-container">
      {/* 
        Navbar bileşeni 
        Props: Arama yapıldığında ve kategori değiştiğinde çalışacak fonksiyonları gönderiyoruz.
      */}
      <Navbar
        onSearch={setSearchTerm}
        onCategoryChange={setActiveCategory}
        activeCategory={activeCategory}
      />

      <div className="container">
        <h2 className="section-title">
          {activeCategory === "Tümü" ? "Popüler Filmler" : `${activeCategory} Filmleri`}
        </h2>

        {/* Yükleniyor durumu kontrolü */}
        {loading ? (
          <div className="loading">Filmler Yükleniyor...</div>
        ) : (
          <div className="movie-grid">
            {filteredMovies.length > 0 ? (
              // Filtrelenmiş listeyi dön ve her biri için MovieCard bas
              filteredMovies.map(movie => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  isFavorite={favorites.includes(movie.id)}
                  onToggleFavorite={handleToggleFavorite}
                />
              ))
            ) : (
              <div className="no-results">Aradığınız kriterlere uygun film bulunamadı.</div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
