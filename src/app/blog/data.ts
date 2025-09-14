export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Türkiye'de Ehliyet Sınıfları ve Hangi Araçları Kullanabilirsiniz?",
    excerpt:
      "A, B, C, D, E sınıfı ehliyetlerin detayları, yaş sınırları ve kullanım alanları hakkında kapsamlı rehber.",
    content: `Ehliyet sınıfları, sürücülerin hangi tür araçları kullanabileceğini belirleyen önemli kategorilerdir. Bu yazıda her sınıfın detaylarını, yaş şartlarını ve pratik kullanım alanlarını inceleyeceğiz.

## A Sınıfı Ehliyet
A sınıfı ehliyet, motosiklet kullanımı için gereklidir. 18 yaşını doldurmuş olmak şarttır. Bu ehliyet ile:
- 125cc'ye kadar motosikletler
- Scooter'lar
- Elektrikli motosikletler kullanılabilir.

## B Sınıfı Ehliyet
En yaygın kullanılan ehliyet sınıfıdır. 18 yaş şartı vardır ve şunları kapsar:
- Otomobiller (3500 kg'a kadar)
- Minibüsler (9 kişiye kadar)
- Kamyonetler (3500 kg'a kadar)

## C Sınıfı Ehliyet
Ağır vasıta kullanımı için gereklidir. 21 yaş şartı vardır:
- Kamyonlar (3500 kg üzeri)
- Çekiciler
- B sınıfı araçları da kapsar

## D Sınıfı Ehliyet
Otobüs kullanımı için gereklidir. 24 yaş şartı vardır:
- Otobüsler (9 kişi üzeri)
- Midibüsler
- Diğer tüm sınıfları da kapsar

## E Sınıfı Ehliyet
Römork çekme için gereklidir. B, C veya D sınıfı ehliyet sahibi olmak şarttır:
- 750 kg üzeri römorklar
- Karavan çekme
- Ticari römorklar

## Geçiş Kuralları
- B sınıfından C'ye geçiş için 2 yıl deneyim gerekir
- C sınıfından D'ye geçiş için 3 yıl deneyim gerekir
- Her sınıf için ayrı sınav gerekir

Bu bilgiler güncel mevzuata göre hazırlanmıştır. Detaylı bilgi için kursumuzla iletişime geçebilirsiniz.`,
    image:
      "https://images.unsplash.com/photo-1719688550640-e27dda479c57?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Ehliyet Sınıfları",
    readTime: "8 dk",
    date: "2024-01-15",
    author: "Yeni Karabağlar Sürücü Kursu",
  },
  {
    id: 2,
    title: "Trafik Kuralları: Türkiye'de Bilmeniz Gereken Temel Kurallar",
    excerpt:
      "Hız sınırları, park kuralları, kavşak geçişleri ve ceza puanları hakkında detaylı bilgiler.",
    content: `Trafik kuralları, güvenli sürüşün temelini oluşturur. Bu yazıda Türkiye'de geçerli olan temel trafik kurallarını detaylıca inceleyeceğiz.

## Hız Sınırları
Türkiye'de geçerli hız sınırları şunlardır:

### Şehir İçi
- Otomobiller: 50 km/h
- Minibüsler: 50 km/h
- Kamyonlar: 50 km/h

### Şehir Dışı
- Otomobiller: 90 km/h
- Minibüsler: 80 km/h
- Kamyonlar: 80 km/h

### Otoyollar
- Otomobiller: 120 km/h
- Minibüsler: 100 km/h
- Kamyonlar: 90 km/h

## Kavşak Kuralları
Kavşaklarda öncelik sırası:
1. Işıklı kavşaklarda trafik ışıkları
2. Sağdan gelen araçlar
3. Ana yoldaki araçlar
4. Dönüş yapan araçlar

## Park Kuralları
- Mavi çizgili alanlar: Ücretli park
- Sarı çizgili alanlar: Yasak park
- Kırmızı çizgili alanlar: Mutlak yasak
- Engelli park yerleri: Sadece engelli plakalı araçlar

## Ceza Puanı Sistemi
- 0-20 puan: Uyarı
- 21-100 puan: Para cezası
- 101-150 puan: Ehliyet 1 ay askıya alınır
- 151+ puan: Ehliyet 2 ay askıya alınır

## Emniyet Kemeri
- Sürücü ve tüm yolcular için zorunlu
- Arka koltukta da takılması gerekir
- Çocuk koltuğu 12 yaşına kadar zorunlu

## Telefon Kullanımı
- Araç kullanırken telefon kullanmak yasak
- Bluetooth veya hands-free sistem kullanılabilir
- Acil durumlar hariç

Bu kurallara uymak hem güvenliğiniz hem de ceza almamanız için kritik önem taşır.`,
    image:
      "https://images.unsplash.com/photo-1642242817106-85002a1de97c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Trafik Kuralları",
    readTime: "10 dk",
    date: "2024-01-12",
    author: "Yeni Karabağlar Sürücü Kursu",
  },
  {
    id: 3,
    title: "İlk Yardım Eğitimi: Sürücüler İçin Hayat Kurtaran Bilgiler",
    excerpt:
      "Trafik kazalarında ilk müdahale, yaralı taşıma teknikleri ve acil durum prosedürleri.",
    content: `Trafik kazalarında ilk müdahale, hayat kurtarıcı önem taşır. Bu yazıda sürücülerin bilmesi gereken temel ilk yardım bilgilerini detaylıca ele alacağız.

## Kaza Anında Yapılması Gerekenler

### 1. Güvenlik Önlemleri
- Aracı güvenli yere çekin
- Dörtlü flaşörleri yakın
- Reflektör yerleştirin
- Kendi güvenliğinizi sağlayın

### 2. 112'yi Arayın
- Sakin ve net konuşun
- Konumu tam olarak belirtin
- Yaralı sayısını söyleyin
- Durum hakkında bilgi verin

## Bilinç Kontrolü
Yaralının bilincini kontrol etmek için:
- Omuzlarından hafifçe sarsın
- "Beni duyuyor musun?" diye sorun
- Gözlerini açıp açmadığına bakın
- Yanıt vermiyorsa acil müdahale gerekir

## Kanama Kontrolü
- Kanayan yeri temiz bezle bastırın
- Yüksekte tutun (kalp seviyesinin üstünde)
- Turnike sadece aşırı kanamalarda uygulayın
- 15 dakikada bir gevşetin

## Solunum Kontrolü
- Ağzı ve burnu temizleyin
- Başı geriye yatırın
- 10 saniye dinleyin
- Solunum yoksa suni solunum başlatın

## Kalp Masajı
- Göğüs kemiğinin ortasına basın
- Dakikada 100-120 kez
- 5 cm derinliğinde
- 30 masaj, 2 solunum döngüsü

## Yaralı Taşıma
- Sadece gerekli durumlarda taşıyın
- Boyun ve omurga korunmalı
- Sert yüzey kullanın
- Mümkünse profesyonel yardım bekleyin

## Yanık Müdahalesi
- Soğuk su ile yıkayın
- 15-20 dakika tutun
- Buz kullanmayın
- Yapışan kumaşları çıkarmayın

## Kırık Müdahalesi
- Kırık bölgeyi hareket ettirmeyin
- Atel uygulayın
- Buz uygulayın
- Acil servise ulaştırın

## Zehirlenme
- Zehirli maddeyi tespit edin
- Ağızdan bir şey vermeyin
- Kusmaya zorlamayın
- Acil servise ulaştırın

Bu bilgiler temel ilk yardım eğitimi yerine geçmez. Mutlaka sertifikalı ilk yardım eğitimi alın.`,
    image:
      "https://images.unsplash.com/photo-1630964046403-8b745c1e3c69?q=80&w=1120&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "İlk Yardım",
    readTime: "12 dk",
    date: "2024-01-10",
    author: "Yeni Karabağlar Sürücü Kursu",
  },
  {
    id: 4,
    title: "Motor ve Araç Bilgisi: Sürücü Adayları İçin Teknik Rehber",
    excerpt:
      "Araç parçaları, bakım işlemleri, yakıt tüketimi ve güvenli sürüş için teknik bilgiler.",
    content: `Aracınızı tanımak, güvenli ve ekonomik sürüşün temelidir. Bu rehberde en kritik sistemleri, periyodik bakımları ve yakıt tasarruf tekniklerini detaylandırıyoruz.

## Temel Sistemler
### Motor
- Yağ seviyesi ve kalitesi
- Soğutma sıvısı kontrolü
- Hava filtresi temizliği

### Fren Sistemi
- Balata kalınlığı kontrolü
- Fren hidroliği değişim periyodu
- ABS uyarı ışıkları

### Lastikler
- Diş derinliği (min 1.6 mm)
- Hava basıncı (araç etiketindeki değer)
- Mevsime uygun lastik kullanımı

## Periyodik Bakım
- 10.000-15.000 km: Yağ ve yağ filtresi
- 20.000-30.000 km: Hava ve polen filtresi
- 60.000 km: Buji ve yakıt filtresi
- 2 yılda bir: Fren hidroliği ve antifriz

## Yakıt Tasarrufu
- Doğru vites aralıkları
- Ani hızlanmalardan kaçınma
- Gereksiz rölantiyi azaltma
- Araç içi gereksiz yükleri çıkarma

## Güvenli Sürüş İpuçları
- Takip mesafesi: en az 2 saniye
- Kör nokta kontrolü
- Doğru oturma ve ayna ayarı
- Far ve sinyalin aktif kullanımı

Bu temel prensipleri uygulayarak hem güvenliğinizi artırır hem de bakım maliyetlerinizi düşürebilirsiniz.`,
    image:
      "https://images.unsplash.com/photo-1429772011165-0c2e054367b8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Araç Bilgisi",
    readTime: "10 dk",
    date: "2024-01-08",
    author: "Yeni Karabağlar Sürücü Kursu",
  },
  {
    id: 5,
    title: "Çevre Bilinci ve Yakıt Tasarrufu: Sürücülük ve Doğa",
    excerpt:
      "Ekolojik sürüş teknikleri, yakıt tasarrufu yöntemleri ve çevre dostu sürücülük.",
    content: `Ekolojik sürüş, hem cebinizi hem de doğayı korur. Küçük alışkanlık değişimleriyle büyük fark yaratabilirsiniz.

## Planlama
- Trafiği yoğun saatlerden kaçının
- Rota ve hava durumunu kontrol edin
- Birleşik işler planlayın (tek seferde çok iş)

## Araç Ayarları
- Doğru lastik basıncı kullanın
- Tavan yükleri ve açık camlardan kaçının
- Gereksiz ağırlıkları çıkarın

## Sürüş Teknikleri
- Yumuşak kalkış ve duruş
- Sabit hızlarda seyir (cruise control uygunsa)
- Yokuş inerken motor freni
- Gereksiz rölantiden kaçınma (30 saniyeyi aşan beklemelerde stop)

## Bakımın Etkisi
- Düzenli yağ ve filtre değişimi
- Buji ve enjektör temizliği
- Doğru tekerlek balans ve rot ayarı

Bu yöntemlerle yakıt tüketimini %10-20 oranında azaltmak mümkündür.`,
    image:
      "https://images.unsplash.com/photo-1472313420546-a46e561861d8?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Çevre Bilinci",
    readTime: "8 dk",
    date: "2024-01-05",
    author: "Yeni Karabağlar Sürücü Kursu",
  },
  {
    id: 6,
    title: "Psikoteknik Değerlendirme: Sürücü Olmaya Uygun Musunuz?",
    excerpt:
      "Psikoteknik test süreci, değerlendirme kriterleri ve sürücü adayları için öneriler.",
    content: `Psikoteknik değerlendirme; dikkat, algı, koordinasyon, muhakeme ve hız gibi bilişsel becerileri ölçer. Özellikle ticari araç sürücüleri için zorunludur.

## Kimler Almalı?
- Ticari araç sürücüleri
- Yük ve yolcu taşımacılığı yapanlar
- Ehliyeti geri alınanlar (bazı durumlarda)

## Test İçeriği
- Tepki süresi ve dikkat testleri
- El-göz koordinasyonu
- Hafıza ve muhakeme
- Stres altında karar verme

## Süreç
- Yetkili merkezden randevu alınır
- 45-60 dakika test uygulanır
- Psikolog değerlendirmesiyle rapor verilir

## Başarı İpuçları
- Uykunuzu alın
- Kafein tüketimini abartmayın
- Test yönergelerini dikkatle dinleyin

Raporunuzun geçerlilik süresi ve yenileme şartları için güncel mevzuatı takip edin.`,
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1200&h=600&fit=crop",
    category: "Psikoteknik",
    readTime: "9 dk",
    date: "2024-01-03",
    author: "Yeni Karabağlar Sürücü Kursu",
  },
  {
    id: 7,
    title: "Direksiyon Sınavında En Çok Yapılan Hatalar",
    excerpt:
      "Kalkış, park, sinyal, omuz kontrolü ve şerit disiplini gibi kritik noktalar.",
    content: `Direksiyon sınavı, doğru alışkanlıkların sergilendiği bir pratik sınavdır. En çok yapılan hataları bilmek, başarı şansınızı artırır.

## Kalkış ve Duruş
- El freni ile kontrollü kalkış
- Sinyal ve ayna kontrolü
- Düzgün şerit yerleşimi

## Park Manevraları
- Paralel park referans noktaları
- L park adımları
- Araç konum düzeltme teknikleri

## Sinyal ve Omuz Kontrolü
- Şerit değişimlerinde baş-dönüş kontrolü
- Dönüşlerde erken sinyal
- Kavşakta şerit içi disiplin

## Trafik Kurallarına Uyum
- Hız sınırı içinde kalma
- Yaya geçidi önceliği
- Sağdan geçiş yasağına dikkat

Sınav öncesi aynı güzergâhta prova yapmanız  oranını ciddi artırır.`,
    image:
      "https://images.unsplash.com/photo-1478442231640-a78bbd3bcd62?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Sınav İpuçları",
    readTime: "9 dk",
    date: "2024-02-02",
    author: "Yeni Karabağlar Sürücü Kursu",
  },
  {
    id: 8,
    title: "Teorik Sınavda Başarı Stratejileri",
    excerpt:
      "Soru dağılımı, tekrar planı ve çıkmış sorularla çalışma yöntemleri.",
    content: `Teorik sınav, doğru planlama ve tekrar stratejisiyle rahatlıkla geçilebilir.

## Soru Dağılımı
- Trafik ve çevre: %70
- İlk yardım: %15
- Araç tekniği: %15

## Çalışma Planı (2 Hafta)
- Gün 1-3: Konu özeti + kısa notlar
- Gün 4-7: Çıkmış sorular ve yanlış analizi
- Gün 8-10: Deneme sınavları (günlük 2 adet)
- Gün 11-14: Zayıf konuların tekrarı

## İpuçları
- Yanlışlarınızdan özel not çıkarın
- Zaman yönetimi çalışın (süreyi verimli kullanın)
- Sınavdan önce iyi uyku

Bu planı düzenli uygularsanız %90+ başarı mümkündür.`,
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=1200&h=600&fit=crop",
    category: "Sınav İpuçları",
    readTime: "8 dk",
    date: "2024-02-05",
    author: "Yeni Karabağlar Sürücü Kursu",
  },
  {
    id: 9,
    title: "Yeni Başlayanlar İçin Trafikte Güvenlik",
    excerpt:
      "Takip mesafesi, kör nokta, gece sürüşü ve yağmurlu havalarda dikkat.",
    content: `Yeni sürücüler için en önemli konu riskleri erken fark etmek ve savunmacı sürüş uygulamaktır.

## Takip Mesafesi
- En az 2 saniye, yağışta 4 saniye
- Hız arttıkça mesafeyi artırın

## Kör Nokta
- Aynalara ek baş-dönüş kontrolü
- Uzun araçlardan uzak konumlanma

## Gece Sürüşü
- Kısa/uzun far geçişini doğru kullanın
- Göz kamaşmasına karşı bakışı sağa kaydırın

## Yağmurlu Hava
- Su yastığı (aquaplaning) riskine dikkat
- Fren mesafesi artar, hızı düşürün

Her yol koşulunda savunmacı sürüş, güvenliğinizi katlar.`,
    image:
      "https://images.unsplash.com/photo-1602562775100-bdff2108c7d6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Güvenli Sürüş",
    readTime: "9 dk",
    date: "2024-02-12",
    author: "Yeni Karabağlar Sürücü Kursu",
  },
  {
    id: 10,
    title: "Kış Koşullarında Sürüş: Zincir, Kış Lastiği ve Teknikler",
    excerpt:
      "Kaygan zeminde fren, yokuş kalkış ve buzlanma için pratik öneriler.",
    content: `Kış koşullarında sürüş, doğru ekipman ve tekniklerle güvenli hale gelir.

## Ekipman
- Kış lastiği (7°C altı)
- Zincir (gerekli güzergâhlarda)
- Antifriz ve cam suyu

## Sürüş Teknikleri
- Kaygan zeminde nazik fren ve gaz
- Yokuşta kalkış için ikinci vites tekniği
- ABS frenlemesinde pedalı bırakıp basmayın

## Görüş
- Buz çözücü ve silecek bakımını ihmal etmeyin
- Cam buğusuna karşı iç sirkülasyonu kapatın

Kış aylarında ekstra dikkat ve hazırlık şarttır.`,
    image:
      "https://images.unsplash.com/photo-1581037558250-d23ff79ca9ea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Güvenli Sürüş",
    readTime: "9 dk",
    date: "2024-02-18",
    author: "Yeni Karabağlar Sürücü Kursu",
  },
  {
    id: 11,
    title: "Şehir İçi Park Teknikleri: Paralel ve L Park",
    excerpt: "Adım adım anlatım ve pratik ipuçlarıyla park etme artık kolay.",
    content: `Park, doğru referans noktaları ve adımlarla kolaylaşır.

## Paralel Park
1. Referans araçla tampon hizası
2. 45° açıyla geri gelme
3. Direksiyonu tam sağ/sol kırma
4. Araç düzlenince karşı yön

## L Park
- Koninin 1-1.5 metre yanından yaklaşın
- Ayna konuma gelince kırın
- Araç düzlenince toparlayın

## İpuçları
- Aynaları biraz aşağı ayarlayın
- Direksiyon hareketlerini yavaş yapın
- Gerekirse düzeltme manevrası yapın

Pratik yaptıkça refleksleriniz gelişir.`,
    image:
      "https://images.unsplash.com/photo-1593280405106-e438ebe93f5b?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Pratik Sürüş",
    readTime: "8 dk",
    date: "2024-02-22",
    author: "Yeni Karabağlar Sürücü Kursu",
  },
  {
    id: 12,
    title: "Uzun Yol Sürüşü İçin Hazırlık Rehberi",
    excerpt: "Araç kontrol listesi, mola planı ve ergonomi önerileri.",
    content: `Uzun yolculuklar keyiflidir ancak hazırlık ister.

## Araç Kontrol Listesi
- Lastik, fren, farlar
- Yağ ve soğutma suyu
- Silecek ve cam suyu

## Planlama
- 2-3 saatte bir 15 dakika mola
- Alternatif rota ve dinlenme noktaları
- Hava ve yol durumunu kontrol edin

## Ergonomi
- Koltuk ve direksiyon mesafesi
- Bel desteği ve ayna ayarı
- Su ve hafif atıştırmalık bulundurun

Doğru planlama ile güvenli ve konforlu bir yolculuk yapabilirsiniz.`,
    image:
      "https://images.unsplash.com/photo-1624573833706-96296ddfa3a5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Yolculuk",
    readTime: "8 dk",
    date: "2024-02-28",
    author: "Yeni Karabağlar Sürücü Kursu",
  },
];

export const categories = Array.from(
  blogPosts
    .reduce((map, post) => {
      map.set(post.category, (map.get(post.category) || 0) + 1);
      return map;
    }, new Map<string, number>())
    .entries()
).map(([name, count]) => ({ name, count }));
