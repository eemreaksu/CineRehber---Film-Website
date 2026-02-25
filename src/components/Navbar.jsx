// src/components/Navbar.jsx
import React from 'react';

// Navbar bileşeni: Sayfanın üst kısmındaki menüyü oluşturur.
// PROPS KULLANIMI:
// Bu bileşen, üst bileşenden (App.jsx) iki adet prop alır:
// 1. onSearch: Kullanıcı arama kutusuna yazı yazdığında çalışacak fonksiyon.
// 2. onCategoryChange: Kullanıcı bir kategori seçtiğinde çalışacak fonksiyon.
// 3. activeCategory: Şu anda hangi kategorinin seçili olduğunu gösteren veri.

const Navbar = ({ onSearch, onCategoryChange, activeCategory }) => {

    const categories = ["Tümü", "Aksiyon", "Bilim Kurgu", "Drama", "Suç"];

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>🎬 CineRehber</h1>
            </div>

            <div className="navbar-search">
                {/*
          onChange olayı: Input içeriği her değiştiğinde tetiklenir.
          e.target.value: Input'un o anki değerini verir.
          Biz de bu değeri onSearch fonksiyonuna gönderiyoruz.
        */}
                <input
                    type="text"
                    placeholder="Film ara..."
                    onChange={(e) => onSearch(e.target.value)}
                />
            </div>

            <div className="navbar-categories">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        // Eğer bu butonun kategorisi, aktif kategoriyle eşleşiyorsa 'active' sınıfını ekle
                        className={activeCategory === cat ? 'active' : ''}
                        onClick={() => onCategoryChange(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
