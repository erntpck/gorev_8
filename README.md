# React Ödeme Formu (Tailwind CSS + TypeScript)

Bu proje, verilen görsel tasarıma birebir uygun olarak oluşturulmuş bir ödeme formu uygulamasıdır.  
Form, React ve Tailwind CSS kullanılarak geliştirilmiştir. Form verileri `useState` hook'u ile yönetilmektedir.

---

## Özellikler

- Kart üzerindeki isim, kart numarası, ay, yıl ve güvenlik kodu alanları
- Kart numarası sadece rakam alır ve 16 hane ile sınırlıdır
- Güvenlik kodu (CVV) sadece rakam alır ve 3 hane ile sınırlıdır
- Ay ve yıl alanları `select` ile oluşturulmuştur (Ay: 01-12, Yıl: mevcut yıl + 4 yıl)
- "Şimdi Öde" butonuna tıklandığında tüm form verileri `alert()` ile gösterilir
- Sayfa yenilenmesi form gönderiminde engellenmiştir
- Tüm input değerleri `useState` ile kontrol edilir
- Bileşenler modüler şekilde ayrılmıştır (`KartInput`, `CvvInput`, `MonthYearSelect`)
- Tailwind CSS ile görseldeki tasarıma birebir uyumludur

---

## Kullanılan Teknolojiler

- React
- TypeScript
- Tailwind CSS
- Vite (isteğe bağlı geliştirme sunucusu)

---

## Proje Yapısı

src/
├── App.tsx
└── components/
    ├── PaymentForm.tsx
    ├── KartInput.tsx
    ├── CvvInput.tsx
    └── MonthYearSelect.tsx

---    
## Çıktı Önizleme
<img width="669" height="735" alt="image" src="https://github.com/user-attachments/assets/f27a746c-7ae8-4ed8-859c-3471a9bbb352" />
---

## Kurulum ve Çalıştırma

Proje dizinine geldikten sonra aşağıdaki komutları sırasıyla çalıştırın:

```bash
# 1. Bağımlılıkları yükle
npm install

# 2. Uygulamayı başlat
npm run dev

