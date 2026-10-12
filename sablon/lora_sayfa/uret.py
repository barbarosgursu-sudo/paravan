# Peri LoRA eğitim seti iş sayfası. Kullanım: python3 uret.py → peri_lora.html (vaka2_sayfa/sablon.html'den)
import json, os
YOL = os.path.dirname(os.path.abspath(__file__))
STIL = ("Yarı gerçekçi dijital illüstrasyon, boyalı görsel roman karakter çizimi. Gerçek insan oranları, "
        "ama fotoğraf değil: belirgin, temiz kontur çizgileri, yumuşak boyalı gölgeler, sıcak ve canlı renkler. "
        "Animasyon filmi afişi ile modern çizgi roman arası bir tarz. Anime değil, çocuk çizgi filmi değil, fotoğraf değil.")
KIMLIK = ("Karakter: Perihan \"Peri\" Aksoy, 37 yaşında, bir zamanlar güzellik kraliçesi olmuş, hâlâ çok çekici ve bunun "
          "farkında. Kumral-kızıl (kızıl-kahve) saç. Ela gözler, belirgin kaşlar, kırmızı ruj, gözlerinin kenarında hafif "
          "gülme çizgileri; genç kız değil, olgun ve kendinden emin bir kadın. Vücut: referanstaki AYNI beden — kum saati "
          "hattı, dolgun göğüs, ince bel, belirgin kalça, uzun bacaklar; zayıflatma, kalınlaştırma, gençleştirme yok.")
REF_TEMEL = ("Birinci referans görseldeki kadının AYNISI: aynı yüz (yüz hatları, gözler, kaşlar, burun, dudaklar, çene), "
             "aynı kızıl-kahve saç rengi, aynı yaş, aynı beden ve çizim tarzı. İkinci referans da aynı kadındır; yüzünü ve "
             "vücut hatlarını oradan da al. Referanslardaki kıyafeti, pozu ve arka planı ALMA; onları aşağıda yazıyorum.")
REF = ("Birinci referans görseldeki kadının AYNISI: aynı yüz (yüz hatları, gözler, kaşlar, burun, dudaklar, çene), aynı "
       "kızıl-kahve saç rengi, aynı yaş. İkinci referans aynı kadının vücudu içindir: aynı vücut hatları ve oranlar. "
       "Referanslardaki kıyafeti, pozu ve arka planı ALMA; onları aşağıda yazıyorum.")
CEK = "Çekicilik: zarif ve alımlı, kendinden emin. Çıplaklık yok."
YAZI = "Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın."
KARE = "Görselin oranı TAM kare (1:1, 1024×1024)."
DIK = "Görselin oranı TAM dikey 2:3 (1024×1536)."
BAK_YUZ = "yüz L1 ile aynı kişi mi (göz, burun, dudak, çene); saç rengi; yaş kaymış mı"
BAK_BEDEN = "yüz L1 ile aynı mı; beden hattı referanstaki gibi mi (incelmiş/kalınlaşmış mı); eller ve parmaklar"

def j(*p): return "\n\n".join(x for x in p if x)
G = []
def kart(no, sohbet, ad, govde, oran, bak, temel=False):
    refs = ([{"dosya": "G1-1_peri_mantosuz.jpg", "ne": "Peri'nin asıl görseli (yüz, beden)"},
             {"dosya": "G1_cikti_peri_tayyor.jpg", "ne": "aynı kadın, Vaka 2 (yüz, beden)"}] if temel else
            [{"cikti": 1, "ne": "yüz"}, {"dosya": "G1-1_peri_mantosuz.jpg", "ne": "vücut hatları"}])
    G.append(dict(no=no, kod="L%d" % no, ad=ad, anahtar=sohbet.split(" · ")[1].lower(), sohbet=sohbet, refs=refs,
                  metin=j(REF_TEMEL if temel else REF, STIL, KIMLIK, govde, CEK, YAZI, oran), bak=bak))

S1 = "Sohbet 1 · Yakın yüz"
kart(1, S1, "Önden, nötr (TEMEL — önce bunu gönder)", j(
  "Kıyafet: krem rengi ipek bluz, yakası açık. Saç: ensede düzgün bir topuz, iki yanda birer ince tutam. Küçük inci küpeler.",
  "Kadraj: yakın portre, omuzlardan yukarısı. Yüz TAM önden, kameraya bakıyor.",
  "İfade: sakin, dudaklar kapalı, belli belirsiz bir gülümseme.",
  "Arka plan: düz açık bej. Işık: yumuşak, önden gün ışığı."), KARE,
  "Bu görsel setin yüz referansı olacak: G1-1'e (asıl Peri) çok benziyor mu? Önce Claude onaylasın", temel=True)
kart(2, S1, "Üç çeyrek sol, hafif gülümseme", j(
  "Kıyafet: krem ipek bluz. Saç: topuz.", "Kadraj: yakın portre, omuzlardan yukarısı. Başın açısı: burnu kadrajın soluna bakıyor, kulağı kadrajın sağında; üç çeyrek.",
  "İfade: hafif, sıcak bir gülümseme.", "Arka plan: düz açık bej. Işık: yumuşak gün ışığı."), KARE, BAK_YUZ)
kart(3, S1, "Üç çeyrek sağ, ciddi", j(
  "Kıyafet: siyah dar yakalı bluz. Saç: topuz.", "Kadraj: yakın portre. Başın açısı: burnu kadrajın sağına bakıyor, kulağı kadrajın solunda; üç çeyrek.",
  "İfade: ciddi, düşünceli.", "Arka plan: düz orta gri. Işık: yumuşak, soldan."), KARE, BAK_YUZ)
kart(4, S1, "Profil", j(
  "Kıyafet: koyu lacivert bluz. Saç: topuz.", "Kadraj: yakın portre. Baş TAM profil: burnu kadrajın soluna bakıyor, yalnız bir göz görünüyor.",
  "İfade: uzağa bakan, sakin.", "Arka plan: düz koyu lacivert. Işık: yandan, belirgin gölge."), KARE, BAK_YUZ + "; profilde burun ve çene hattı")
kart(5, S1, "Yukarıdan, kaş kalkık", j(
  "Kıyafet: krem ipek bluz. Saç: topuz.", "Kadraj: yakın portre; kamera biraz YUKARIDA, kadın kameraya doğru yukarı bakıyor.",
  "İfade: tek kaşı kalkık, alaycı, dudağının bir köşesi kıvrık.", "Arka plan: düz açık bej."), KARE, BAK_YUZ)
kart(6, S1, "Aşağıdan, akşam ışığı", j(
  "Kıyafet: bordo saten bluz. Saç: topuz.", "Kadraj: yakın portre; kamera biraz AŞAĞIDA, çenesi hafif yukarıda, gururlu.",
  "İfade: kendinden emin gülümseme.", "Arka plan: koyu kahverengi, sıcak akşam ışığı, altın tonlar."), KARE, BAK_YUZ + "; akşam ışığında ten rengi")
kart(7, S1, "Saçı açık, kahkaha", j(
  "Kıyafet: krem ipek bluz. Saç: AÇIK, omuzlarına dökülen dalgalı kızıl-kahve saç.", "Kadraj: yakın portre, üç çeyrek sol.",
  "İfade: içten bir kahkaha, gözleri kısılmış.", "Arka plan: düz açık gri."), KARE, BAK_YUZ + "; saç açıkken de aynı renk")
kart(8, S1, "Şaşkın, yan ışık", j(
  "Kıyafet: siyah bluz. Saç: topuz.", "Kadraj: yakın portre, önden.",
  "İfade: şaşkın; gözler açık, kaşlar kalkık, ağzı hafif açık.", "Arka plan: koyu gri. Işık: yandan, yüzün yarısı gölgede."), KARE, BAK_YUZ)

S2 = "Sohbet 2 · Bel üstü"
for no, ad, kiy, poz, ifade, zemin in [
  (9, "Siyah kalem elbise, kollar kavuşuk", "siyah, vücudu saran, V yakalı kalem elbise; inci küpe.", "kolları göğsünün altında kavuşmuş; üç çeyrek sol.", "kuşkulu, kaşı hafif kalkık.", "düz açık bej."),
  (10, "Beyaz gömlek, eli saçında", "beyaz ipek gömlek, üst düğmeleri açık, yüksek belli siyah pantolon.", "bir eli saçında, öbürü belinde; önden.", "rahat, gülümseyen.", "düz orta gri."),
  (11, "Kırmızı manto (Vaka 1)", "diz boyu, beli kemerli, domates kırmızısı yün manto; altında krem ipek bluz; küçük altın küpeler.", "bir eli mantonun yakasında, öbürü belinde; üç çeyrek sol.", "kendinden emin, belli belirsiz gülümseme.", "düz açık bej."),
  (12, "Zümrüt tayyör (Vaka 2)", "zümrüt yeşili tayyör, derin V yakalı ceket, altında bluz yok; dar kalem etek; tek inci küpe.", "bir eli belinde, öbürü ceketin yakasında; üç çeyrek sol.", "sakin, kendinden emin.", "düz açık bej."),
  (13, "Lacivert saten gece elbisesi", "koyu lacivert saten, V yakalı, askılı gece elbisesi; ince altın kolye.", "omzunun üstünden kameraya bakıyor; üç çeyrek sağ.", "gizemli, hafif gülümseme.", "koyu, akşam ışığı, altın tonlar."),
  (14, "Bej trençkot", "bej, kemerli trençkot, yakası kalkık.", "elleri ceplerinde; önden.", "temkinli, gözleri kısılmış.", "düz gri-mavi, bulutlu gün ışığı."),
  (15, "Kırmızı kazak, ev ışığı", "kırmızı ince triko kazak, V yaka.", "bir elinde porselen çay fincanı; üç çeyrek sol.", "yumuşak, dalgın.", "sade bir oturma odası, arkası bulanık, sıcak lamba ışığı."),
  (16, "Krem bluz, sinirli", "krem saten bluz, siyah kalem etek.", "sağ eli belinde, sol işaret parmağı kadrajın soluna uzanmış; üç çeyrek sol.", "öfkeli; kaşlar çatık, ağzı açık.", "düz açık bej."),
  (17, "Gri elbise, kırgın", "kömür grisi, sade, dar elbise.", "kolları kendine sarılı; bakışı aşağı ve yana.", "kırgın, içine kapanık.", "düz koyu gri, loş ışık.")]:
    kart(no, S2, ad, j("Kıyafet: " + kiy + " Saç: topuz.", "Kadraj: DİKEY, belden yukarısı. Poz: TAM İKİ KOL, İKİ EL; " + poz,
         "İfade: " + ifade, "Arka plan: " + zemin), DIK, BAK_BEDEN)

S3 = "Sohbet 3 · Boydan"
for no, ad, kiy, poz, ifade, zemin in [
  (18, "Zümrüt tayyör, ayakta", "zümrüt yeşili tayyör, derin V yakalı ceket, dar kalem etek dizin üstünde; ince ten rengi KÜLOTLU çorap (üst bandı hiçbir yerde görünmüyor); kırmızı stiletto.", "ayakta, ağırlığı bir bacağında, bir eli belinde; üç çeyrek sol.", "kendinden emin.", "düz açık bej."),
  (19, "Siyah kokteyl elbisesi, yürüyor", "siyah, diz üstü, vücudu saran kokteyl elbisesi; siyah stiletto.", "kameraya doğru yürüyor, bir adım önde; önden.", "kararlı, hafif gülümseme.", "düz orta gri."),
  (20, "Kırmızı manto, ayakta", "diz boyu, beli kemerli domates kırmızısı manto; ten rengi çorap; kırmızı stiletto.", "ayakta, bir eli yakada; üç çeyrek sol.", "gururlu.", "düz açık bej."),
  (21, "Beyaz yazlık elbise, rüzgâr", "beyaz, ince askılı, diz altı yazlık elbise; açık renk sandalet. Saç: AÇIK, rüzgârda savruluyor.", "ayakta, bir eli saçını tutuyor; üç çeyrek sağ.", "rahat, gülen.", "açık mavi gökyüzü, parlak gün ışığı."),
  (22, "Kot ve bluz, sandalyede", "dar koyu kot pantolon, krem bluz, kahverengi diz boyu çizme.", "ahşap bir sandalyede oturuyor, bir bacağı öbürünün üstünde; üç çeyrek sol.", "dalgın, düşünceli.", "sade bir oda, arkası bulanık, gün ışığı."),
  (23, "Koyu yeşil gece elbisesi, profil", "koyu yeşil, yere kadar uzun, vücudu saran saten gece elbisesi.", "ayakta, yan profil; başı kadrajın soluna dönük.", "sakin, gururlu.", "koyu, akşam ışığı."),
  (24, "Bordo etek, omzunun üstünden", "bordo kalem etek, siyah ipek bluz, ten rengi KÜLOTLU çorap, siyah stiletto.", "kameraya arkası üç çeyrek dönük, omzunun üstünden geriye bakıyor.", "alaycı, gülümseyen.", "düz açık bej."),
  (25, "Siyah etek, bacak bacak üstüne", "siyah kalem etek, krem ipek bluz, ten rengi KÜLOTLU çorap, kırmızı stiletto.", "bir koltukta oturuyor, bacak bacak üstüne atmış, elleri dizinde; üç çeyrek sol.", "kendinden emin, hafif gülümseme.", "düz orta gri.")]:
    kart(no, S3, ad, j("Kıyafet: " + kiy, "Kadraj: DİKEY, BOYDAN (başın tepesinden ayaklara kadar, ayaklar kadrajda). Poz: TAM İKİ KOL, İKİ EL; " + poz,
         "İfade: " + ifade, "Arka plan: " + zemin), DIK, BAK_BEDEN + "; boydan oranlar (uzun bacak, ince bel)")

sira = [S1, S2, S3]
gruplar = [{"ad": s, "gorseller": [g for g in G if g["sohbet"] == s]} for s in sira]
N = len(G)
h = open(os.path.join(YOL, "..", "vakalar", "vaka2_sayfa", "sablon.html")).read()
deg = [
  ("<title>Vaka 2 Görselleri</title>", "<title>Peri LoRA Seti</title>"),
  ("<h1>Vaka 2 Görselleri</h1>", "<h1>Peri LoRA Seti</h1>"),
  ("Gelinlik · 59 görsel · ChatGPT ile sırayla", "Eğitim için · %d görsel · ChatGPT ile sırayla · yüz ve beden aynı" % N),
  ('<span class="sayi" id="sayi">0 / 59</span>', '<span class="sayi" id="sayi">0 / %d</span>' % N),
  ('" / 59"', '" / %d"' % N), ("(n / 59 * 100)", "(n / %d * 100)" % N),
  ('"vaka2_gorsel_yapildi"', '"peri_lora_yapildi"'),
  ('el("span", null, "G" + v.no)', 'el("span", null, v.kod)'),
  ('el("div", "yer", "G" + r.cikti)', 'el("div", "yer", "L" + r.cikti)'),
  ('"Bu sohbette ürettiğin G" + r.cikti', '"Bu sohbette ürettiğin L" + r.cikti'),
  ('"Senin ürettiğin G" + r.cikti', '"Senin ürettiğin L" + r.cikti'),
  ("<li>Çıkan resmi Claude'a gönder, kartta <b>Yapıldı</b>'yı işaretle.</li>",
   "<li>Çıkan resmi Claude'a gönder, kartta <b>Yapıldı</b>'yı işaretle.</li>\n      <li><b>Önce yalnız L1</b>: Claude onaylamadan devam etme. L1 bütün setin yüz referansı.</li>"),
]
for a, b in deg:
    assert a in h, a
    h = h.replace(a, b)
h = h.replace("/*VERI*/", "const GRUPLAR=" + json.dumps(gruplar, ensure_ascii=False) + ";")
open(os.path.join(YOL, "peri_lora.html"), "w").write(h)
print(N, "görsel")
