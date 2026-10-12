# Cengo LoRA eğitim seti iş sayfası. Kullanım: python3 uret_cengo.py → cengo_lora.html (vaka2_sayfa/sablon.html'den)
# Peri setinin (uret.py) aynı düzeni: 8 yakın yüz + 9 bel üstü + 8 boydan; C1 setin yüz referansı.
import json, os
YOL = os.path.dirname(os.path.abspath(__file__))
STIL = ("Yarı gerçekçi dijital illüstrasyon, boyalı görsel roman karakter çizimi. Gerçek insan oranları, "
        "ama fotoğraf değil: belirgin, temiz kontur çizgileri, yumuşak boyalı gölgeler, sıcak ve canlı renkler. "
        "Animasyon filmi afişi ile modern çizgi roman arası bir tarz. Anime değil, çocuk çizgi filmi değil, fotoğraf değil.")
KIMLIK = ("Karakter: Cengo, 34 yaşında, İstanbullu bir adam. Uzun boylu, rahat, kendinden memnun bir duruş; omuzları gevşek. "
          "Siyah, dağınık, hafif kıvırcık saç, alnına bir tutam düşüyor. İki üç günlük sakal. Kalın kaşlar, koyu kahve gözler, "
          "hafif esmer ten. Yakışıklı ama bakımsız; kendine yakışmış bir dağınıklık. Vücut: referanstaki AYNI beden — uzun, "
          "geniş omuzlu, ince belli; zayıflatma, kalınlaştırma, gençleştirme yok.")
REF_TEMEL = ("Referans görseldeki adamın AYNISI: aynı yüz (yüz hatları, gözler, kaşlar, burun, dudaklar, çene, sakal), aynı dağınık "
             "siyah saç, aynı yaş, aynı beden ve çizim tarzı. Referanstaki kıyafeti, pozu ve arka planı ALMA; onları aşağıda yazıyorum.")
REF = ("Birinci referans görseldeki adamın AYNISI: aynı yüz (yüz hatları, gözler, kaşlar, burun, dudaklar, çene, sakal), aynı "
       "dağınık siyah saç, aynı yaş. İkinci referans aynı adamın vücudu içindir: aynı boy, omuz ve oranlar. Referanslardaki "
       "kıyafeti, pozu ve arka planı ALMA; onları aşağıda yazıyorum.")
YAZI = "Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın."
KARE = "Görselin oranı TAM kare (1:1, 1024×1024)."
DIK = "Görselin oranı TAM dikey 2:3 (1024×1536)."
BAK_YUZ = "yüz C1 ile aynı adam mı (göz, kaş, burun, çene, sakal); saç; yaş kaymış mı"
BAK_BEDEN = "yüz C1 ile aynı mı; beden referanstaki gibi mi (uzun, geniş omuzlu); eller ve parmaklar"

def j(*p): return "\n\n".join(x for x in p if x)
G = []
def kart(no, sohbet, ad, govde, oran, bak, temel=False):
    refs = ([{"dosya": "G14-1_cengo.jpg", "ne": "Cengo'nun asıl görseli (yüz, beden)"}] if temel else
            [{"cikti": 1, "ne": "yüz"}, {"dosya": "G14-1_cengo.jpg", "ne": "beden"}])
    G.append(dict(no=no, kod="C%d" % no, ad=ad, anahtar=sohbet.split(" · ")[1].lower(), sohbet=sohbet, refs=refs,
                  metin=j(REF_TEMEL if temel else REF, STIL, KIMLIK, govde, YAZI, oran), bak=bak))

S1 = "Sohbet 1 · Yakın yüz"
for no, ad, kiy, aci, ifade, zemin in [
  (1, "Önden, hınzır yarım gülüş (TEMEL — önce bunu gönder)", "beyaz gömlek, üst iki düğmesi açık.", "Yüz TAM önden, kameraya bakıyor.", "hınzır yarım gülümseme; dudaklar kapalı, bir köşesi yukarıda.", "düz açık bej. Işık: yumuşak, önden gün ışığı."),
  (2, "Üç çeyrek sol, kaş kalkık", "beyaz gömlek.", "Başın açısı: burnu kadrajın soluna bakıyor, kulağı kadrajın sağında; üç çeyrek.", "kuşkulu, alaycı; tek kaşı kalkık.", "düz açık bej."),
  (3, "Üç çeyrek sağ, ciddi", "koyu gri tişört.", "Başın açısı: burnu kadrajın sağına bakıyor, kulağı kadrajın solunda; üç çeyrek.", "ciddi, düşünceli.", "düz orta gri. Işık: yumuşak, soldan."),
  (4, "Profil", "koyu lacivert gömlek.", "Baş TAM profil: burnu kadrajın soluna bakıyor, yalnız bir göz görünüyor.", "uzağa bakan, sakin.", "düz koyu lacivert. Işık: yandan, belirgin gölge."),
  (5, "Kahkaha", "beyaz gömlek.", "Üç çeyrek sol, başı hafif geride.", "içten bir kahkaha, dişleri görünüyor, gözleri kısılmış.", "düz açık gri."),
  (6, "Aşağıdan, akşam ışığı", "bordo gömlek.", "Kamera biraz AŞAĞIDA, çenesi hafif yukarıda.", "kendinden emin, kendinden memnun.", "koyu kahverengi, sıcak akşam ışığı, altın tonlar."),
  (7, "Yukarıdan, yumuşak bakış", "beyaz gömlek.", "Kamera biraz YUKARIDA, adam kameraya doğru yukarı bakıyor.", "gülmeyen, sıcak, yumuşak bir bakış.", "düz açık bej."),
  (8, "Şaşkın, yan ışık", "siyah tişört.", "Önden.", "şaşkın; gözler açık, kaşlar kalkık, ağzı hafif açık.", "koyu gri. Işık: yandan, yüzün yarısı gölgede.")]:
    kart(no, S1, ad, j("Kıyafet: " + kiy, "Kadraj: yakın portre, omuzlardan yukarısı. " + aci, "İfade: " + ifade, "Arka plan: " + zemin),
         KARE, "Bu görsel setin yüz referansı olacak: G14-1'e (asıl Cengo) çok benziyor mu? Önce Claude onaylasın" if no == 1 else BAK_YUZ,
         temel=(no == 1))

S2 = "Sohbet 2 · Bel üstü"
for no, ad, kiy, poz, ifade, zemin in [
  (9, "Kahverengi ceket (Vaka 1)", "bir beden büyük, buruşuk açık kahverengi takım ceketi, kolları dirseğe kadar sıvalı; beyaz gömlek, üst iki düğmesi açık; koyu bordo kravat ceketin yan cebinden sarkıyor; bileğinde renkli boncuklu bileklik.", "bir eli cebinde; üç çeyrek sol.", "hınzır yarım gülümseme.", "düz açık bej."),
  (10, "Lacivert takım (Vaka 2)", "ona bir beden küçük koyu lacivert takım elbise, kolları bileğinden kısa; beyaz gömlek boynuna kadar ilikli; bordo kravat düzgün bağlı; bileğinde renkli boncuklu bileklik.", "bir eli kravatının düğümünü gevşetiyor, öbürü cebinde; üç çeyrek sol.", "sıkışmış ama keyifli.", "düz açık bej."),
  (11, "Deri ceket", "siyah deri ceket, altında beyaz tişört.", "kolları göğsünde kavuşmuş; önden.", "kendinden emin, hafif gülümseme.", "düz orta gri."),
  (12, "Gri kazak, kahve", "koyu gri balıkçı yaka kazak.", "bir elinde beyaz porselen kahve fincanı; üç çeyrek sağ.", "dalgın, yumuşak.", "sade bir mutfak, arkası bulanık, sabah ışığı."),
  (13, "Kot gömlek, kollar sıvalı", "açık mavi kot gömlek, kolları dirseğe kadar sıvalı.", "bir eli ensesinde; üç çeyrek sol.", "mahcup, yarım gülümseme.", "düz açık bej."),
  (14, "Siyah smokin", "siyah smokin, papyon.", "bir eli ceketin yakasında; önden.", "ciddi, karizmatik.", "koyu, akşam ışığı, altın tonlar."),
  (15, "Yağmurluk, yağmurda", "koyu yeşil yağmurluk, yakası kalkık; saçı ıslak.", "elleri ceplerinde; üç çeyrek sol.", "temkinli, gözleri kısılmış.", "gece sokak, yağmur, arkası bulanık sokak lambası ışığı."),
  (16, "Beyaz gömlek, sinirli", "beyaz gömlek, kolları sıvalı.", "bir eliyle kadrajın soluna işaret ediyor, öbürü belinde; üç çeyrek sol.", "öfkeli; kaşlar çatık, ağzı açık.", "düz açık bej."),
  (17, "Lacivert kazak, düşünceli", "lacivert yuvarlak yaka kazak.", "bir eli çenesinde; bakışı aşağı ve yana.", "düşünceli, hüzünlü.", "düz koyu gri, loş ışık.")]:
    kart(no, S2, ad, j("Kıyafet: " + kiy, "Kadraj: DİKEY, belden yukarısı. Poz: TAM İKİ KOL, İKİ EL; " + poz,
         "İfade: " + ifade, "Arka plan: " + zemin), DIK, BAK_BEDEN)

S3 = "Sohbet 3 · Boydan"
for no, ad, kiy, poz, ifade, zemin in [
  (18, "Kahverengi ceket ve kot, ayakta", "bir beden büyük açık kahverengi takım ceketi, kolları sıvalı; beyaz gömlek; koyu mavi kot; kahverengi deri bot; bordo kravat ceketin cebinden sarkıyor; renkli boncuklu bileklik.", "ayakta, ağırlığı bir bacağında, bir eli kotunun cebinde; üç çeyrek sol.", "hınzır yarım gülümseme.", "düz açık bej."),
  (19, "Lacivert takım, yürüyor", "kısa gelen koyu lacivert takım elbise, beyaz gömlek, bordo kravat; siyah ayakkabı; renkli boncuklu bileklik.", "kameraya doğru yürüyor, bir adım önde; önden.", "kararlı, hafif gülümseme.", "düz orta gri."),
  (20, "Deri ceket, duvara yaslanmış", "siyah deri ceket, beyaz tişört, siyah kot, siyah bot.", "bir omzuyla duvara yaslanmış, bir ayağı öbürünün önünde çapraz; üç çeyrek sağ.", "rahat, kendinden memnun.", "eski taş bir duvar, gün ışığı."),
  (21, "Yazlık gömlek, sahil", "açık bej keten gömlek, kolları sıvalı; açık renk keten pantolon; kahverengi espadril.", "ayakta, elleri ceplerinde; üç çeyrek sol.", "rahat, gülen.", "açık mavi gökyüzü, deniz kenarı, parlak gün ışığı."),
  (22, "Kot ve kazak, sandalyede", "koyu mavi kot, gri kazak, kahverengi bot.", "ahşap bir sandalyeye ters oturmuş, kolları sandalyenin arkasında; önden.", "dalgın, düşünceli.", "sade bir oda, arkası bulanık, gün ışığı."),
  (23, "Smokin, profil", "siyah smokin, papyon, siyah rugan ayakkabı.", "ayakta, yan profil; başı kadrajın soluna dönük.", "sakin, gururlu.", "koyu, akşam ışığı."),
  (24, "Trençkot, omzunun üstünden", "bej trençkot, koyu pantolon, siyah ayakkabı.", "kameraya arkası üç çeyrek dönük, omzunun üstünden geriye bakıyor.", "alaycı, gülümseyen.", "düz açık bej."),
  (25, "Gömlek ve pantolon, koltukta", "beyaz gömlek, üst düğmeleri açık; koyu gri kumaş pantolon; kahverengi ayakkabı.", "bir koltukta yayılmış oturuyor, bir ayak bileği öbür dizinin üstünde; üç çeyrek sol.", "kendinden emin, hafif gülümseme.", "düz orta gri.")]:
    kart(no, S3, ad, j("Kıyafet: " + kiy, "Kadraj: DİKEY, BOYDAN (başın tepesinden ayaklara kadar, ayaklar kadrajda). Poz: TAM İKİ KOL, İKİ EL; " + poz,
         "İfade: " + ifade, "Arka plan: " + zemin), DIK, BAK_BEDEN + "; boydan oranlar (uzun boy)")

sira = [S1, S2, S3]
gruplar = [{"ad": s, "gorseller": [g for g in G if g["sohbet"] == s]} for s in sira]
N = len(G)
h = open(os.path.join(YOL, "..", "vakalar", "vaka2_sayfa", "sablon.html")).read()
deg = [
  ("<title>Vaka 2 Görselleri</title>", "<title>Cengo LoRA Seti</title>"),
  ("<h1>Vaka 2 Görselleri</h1>", "<h1>Cengo LoRA Seti</h1>"),
  ("Gelinlik · 59 görsel · ChatGPT ile sırayla", "Eğitim için · %d görsel · ChatGPT ile sırayla · yüz ve beden aynı" % N),
  ('<span class="sayi" id="sayi">0 / 59</span>', '<span class="sayi" id="sayi">0 / %d</span>' % N),
  ('" / 59"', '" / %d"' % N), ("(n / 59 * 100)", "(n / %d * 100)" % N),
  ('"vaka2_gorsel_yapildi"', '"cengo_lora_yapildi"'),
  ('el("span", null, "G" + v.no)', 'el("span", null, v.kod)'),
  ('el("div", "yer", "G" + r.cikti)', 'el("div", "yer", "C" + r.cikti)'),
  ('"Bu sohbette ürettiğin G" + r.cikti', '"Bu sohbette ürettiğin C" + r.cikti'),
  ('"Senin ürettiğin G" + r.cikti', '"Senin ürettiğin C" + r.cikti'),
  ("<li>Çıkan resmi Claude'a gönder, kartta <b>Yapıldı</b>'yı işaretle.</li>",
   "<li>Çıkan resmi Claude'a gönder, kartta <b>Yapıldı</b>'yı işaretle.</li>\n      <li><b>Önce yalnız C1</b>: Claude onaylamadan devam etme. C1 bütün setin yüz referansı.</li>\n      <li>Her yeni sohbette C1'i birinci, G14-1'i ikinci referans olarak ekle.</li>"),
]
for a, b in deg:
    assert a in h, a
    h = h.replace(a, b)
h = h.replace("/*VERI*/", "const GRUPLAR=" + json.dumps(gruplar, ensure_ascii=False) + ";")
open(os.path.join(YOL, "cengo_lora.html"), "w").write(h)
print(N, "görsel")
