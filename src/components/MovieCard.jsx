// src/components/MovieCard.jsx
import React from 'react';

// MovieCard Bileşeni: Tek bir filmi ekranda göstermekten sorumludur.
// PROPS:
// - movie: Gösterilecek filmin tüm verisi (başlık, resim, puan vb.)
// - isFavorite: Bu filmin favorilerde olup olmadığını belirten true/false değeri.
// - onToggleFavorite: Favori butonuna basıldığında çalışacak fonksiyon.

const MovieCard = ({ movie, isFavorite, onToggleFavorite }) => {

    // Puan rengini belirleyen küçük bir yardımcı fonksiyon
    const getRatingColor = (rating) => {
        if (rating >= 9) return '#4caf50'; // Yeşil
        if (rating >= 8) return '#ff9800'; // Turuncu
        return '#f44336'; // Kırmızı
    };

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.poster} alt={movie.title} />
                <span className="movie-rating" style={{ backgroundColor: getRatingColor(movie.rating) }}>
                    {movie.rating}
                </span>
            </div>

            <div className="movie-info">
                <h3>{movie.title}</h3>
                <span className="movie-category">{movie.category}</span>
                <p className="movie-desc">{movie.description}</p>

                {/* Favori Butonu */}
                <button
                    className={`fav-btn ${isFavorite ? 'active' : ''}`}
                    onClick={() => onToggleFavorite(movie)}
                >
                    {isFavorite ? '❤️ Favorilerden Çıkar' : '🤍 Favorilere Ekle'}
                </button>
            </div>
        </div>
    );
};

export default MovieCard;
