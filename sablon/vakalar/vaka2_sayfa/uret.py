# Vaka 2 görsel üretim sayfasının verisini üretir (vaka2_gorsel.md'nin tam metinli, sohbet sıralı hâli).
# Kullanım: python3 uret.py  → veri.js  (sayfa.html onu okur)
import json, os
STIL = ("Yarı gerçekçi dijital illüstrasyon, boyalı görsel roman karakter çizimi. Gerçek insan oranları, "
        "ama fotoğraf değil: belirgin, temiz kontur çizgileri, yumuşak boyalı gölgeler, sıcak ve canlı renkler. "
        "Animasyon filmi afişi ile modern çizgi roman arası bir tarz. Anime değil, çocuk çizgi filmi değil, fotoğraf değil.")
YAZI = "Görselde hiçbir yazı, harf, rakam, logo ya da etiket olmasın."
F45 = "Görselin oranı TAM 4:5, dikey (1122×1402). Birinci referansla aynı oran."
F34 = "Görselin oranı TAM 3:4, dikey (1086×1448)."
BAS = "Başın açısı: burnu kadrajın soluna bakıyor, kulağı kadrajın sağında kalıyor; yüzü üç çeyrek. Kameraya bakmıyor."
TARZ = "Referans görsel YALNIZ çizim tarzı, renk, ölçek, kadraj ve arka plan içindir; içindeki kişi bu görselde yok."
KADRAJ = "Kadraj: DİKEY. Referanstakiyle aynı ölçek ve kesim: uyluk ortasından yukarısı, başın tepesi aynı yükseklikte. Tek başına, ayakta. Arka plan: düz, tek renk açık bej; hiçbir nesne yok."
PERI_KIY = ("aynı zümrüt yeşili tayyör (bluzsuz, derin V dekolte), aynı dizin üstünde biten dar kalem etek, "
            "ince ten rengi çorap, kırmızı stiletto, tek inci küpe, ensede sıkı topuz")
PERI_CEK = "Çekicilik: en üst seviyede zarif ve seksi; dekolte, belin inceliği, kalçanın ve bacağın hattı korunur. Çıplaklık yok."
EN = "Kadrajdaki en gösterişli, en çekici kadın Peri'dir: ışık onun üstünde, duruşu en kendinden emin olan o; öbür kadın(lar) çekici ama Peri'yi gölgede bırakmıyor."

def j(*p): return "\n\n".join(x for x in p if x)
G = []
def ekle(no, ad, anahtar, sohbet, refs, metin, bak=""):
    G.append(dict(no=no, ad=ad, anahtar=anahtar, sohbet=sohbet, refs=refs, metin=metin, bak=bak))
def dosya(f, ne): return {"dosya": f, "ne": ne}
def cikti(g, ne): return {"cikti": g, "ne": ne}

# ---------- PERİ ----------
S = "Sohbet 1 · Peri"
ekle(1, "Peri, tayyör, normal (temel)", "peri.tayyor.normal", S,
  [dosya("G1-1_peri_mantosuz.jpg", "yüz, beden, ölçek"), dosya("G1-2_peri_mantolu.jpg", "yalnız kırmızı stiletto")],
  j("Birinci referans görseldeki kadının AYNISI: aynı yüz, aynı kızıl-kahve saç, aynı beden ve aynı çizim tarzı; aynı düz açık bej arka plan, aynı ölçek ve kadraj: uyluk ortasından yukarısı, başın tepesi aynı yükseklikte, dikey. İkinci referans YALNIZ ayakkabı içindir: kırmızı stiletto.",
    "Değişen: kıyafet, saç ve küpe. Saten bluz, siyah etek ve kemer YOK.",
    "Kıyafet: zümrüt yeşili, ince yün bir tayyör. Ceket: derin V yakalı, belden oturan, tek düğmeli, kısa; altında bluz YOK, ceketin yakası dekolteyi açık bırakıyor. Etek: aynı zümrüt yeşili, dar kalem etek, dizin üstünde biter. İnce ten rengi çorap, kırmızı stiletto. Kulaklarda tek inci küpe; başka takı yok. Saç: ensede sıkı, düzgün bir topuz; tek tutam bile düşmüyor.",
    "Poz: TAM İKİ KOL, İKİ EL. Sol eli belinde, sağ eli ceketin yakasının ucunda, hafifçe düzeltiyor. Ağırlığı bir bacağında, kalçası hafif yana kırık.",
    BAS, "İfade: sakin, kendinden emin, hafif bir gülümseme; \"eski günlerin kadını\".",
    "Çekicilik: en üst seviyede zarif ve seksi; derin dekolte, belin inceliği, kalçanın ve bacağın hattı belirgin. Çıplaklık yok.", YAZI, F45),
  "Bluz yok mu · etek dizin üstünde mi · tek inci küpe · topuz sıkı · iki el, beşer parmak")
for no, ad, an, f, poz, ifade in [
  (2, "kaşı kalkık", "kas", "G2-2_peri_kas.jpg", "Kolları göğsünün altında gevşekçe kavuşmuş.", "kuşkulu, alaycı; tek kaş yukarıda, dudağın bir köşesi kıvrık."),
  (3, "sinirli", "sinirli", "G3-2_peri_sinirli.jpg", "Sağ eli belinde, sol işaret parmağı kadrajın soluna uzanmış.", "öfkeli; kaşlar çatık, ağzı açık, karşısındakine çıkışıyor."),
  (4, "acı", "aci", "G4-2_peri_aci.jpg", "Kolları dekoltenin altında kavuşturulmuş, omuzlar gergin.", "içe dönük öfke, kırgınlık; bakışı aşağı ve yana kaçmış, çenesi gergin. Kimseye bağırmıyor; kendine kızgın."),
  (5, "utanmış", "utanmis", "G5-2_peri_utanmis.jpg", "Bir eli alnında, öbürü belinde.", "mahcup; yanakları kızarmış, gözleri yarı kapalı, dudaklarını ısırıyor."),
  (6, "şaşırmış", "sasirmis", "G6-2_peri_sasirmis.jpg", "Bir eli açık avuçla göğsünün üstünde, öbürü yanda.", "irkilmiş; gözler açık, kaşlar kalkık, ağzı hafif açık."),
  (7, "meraklı", "merakli", "G7-2_peri_merakli.jpg", "Hafifçe öne eğilmiş, bir eli çenesinde.", "şaşkın merak, \"bir daha söyle?\"; gözler kısılmış, başı hafif yana eğik.")]:
  ekle(no, "Peri, tayyör, " + ad, "peri.tayyor." + an, S, [cikti(1, "bu sohbetteki temel"), dosya(f, "yalnız poz")],
    j("Bu sohbette ürettiğin ilk görseldeki (tayyörlü) kadının AYNISI: aynı yüz, " + PERI_KIY + ". Aynı çizim tarzı, aynı düz açık bej arka plan, aynı ölçek ve kadraj: uyluk ortasından yukarısı, başın tepesi aynı yükseklikte, dikey. Eklediğim referans görsel YALNIZ poz içindir; oradaki kıyafeti alma.",
      "Değişen tek şey poz ve ifade.", "Poz: TAM İKİ KOL, İKİ EL. " + poz, BAS, "İfade: " + ifade, PERI_CEK, YAZI, F45))
ekle(8, "Peri, kremalı, sinirli", "peri.kremali.sinirli", S, [cikti(3, "bu sohbetteki sinirli Peri")],
  j("Bu sohbette ürettiğin sinirli Peri görselindeki kadının AYNISI: aynı yüz, aynı zümrüt yeşili tayyör ve dar kalem etek, aynı kırmızı stiletto, tek inci küpe. Aynı çizim tarzı, aynı düz açık bej arka plan, aynı ölçek ve kadraj.",
    "Değişen: kadın az önce bir düğün pastasının içine oturdu. Ceketinde, eteğinde, kalçasında ve bacaklarında kalın beyaz krema lekeleri; dekoltesinde küçük bir krema damlası; kirpiğinde pasta kırıntısı; saçının üstünde bir topak krema ve küçük yeşil fıstık parçaları. Topuz dağılmış, birkaç kızıl tutam yüzüne düşmüş. Çorap bir yerinden kaçmış.",
    "Poz: TAM İKİ KOL, İKİ EL. İki kolu yanlarda, avuçlar açık, parmakları kremalı; kremayı silkeler gibi. Dimdik duruyor; gururunu korumaya çalışıyor.",
    BAS, "İfade: öfkeli ve gururlu; kaşlar çatık, dudaklar sıkılmış.",
    "Çekicilik: en üst seviyede seksi ve komik, ikisi aynı anda. Acı ya da aşağılanma yok. Çıplaklık yok.", YAZI, F45))
ekle(9, "Peri, kremalı, utanmış", "peri.kremali.utanmis", S, [cikti(8, "bu sohbetteki kremalı Peri")],
  j("Bu sohbette ürettiğin kremalı Peri görselindeki kadının AYNISI: aynı yüz, aynı kremalı zümrüt yeşili tayyör, aynı krema lekeleri ve dağılmış topuz, aynı kırmızı stiletto. Aynı çizim tarzı, arka plan, ölçek ve kadraj.",
    "Değişen tek şey poz ve ifade.", "Poz: TAM İKİ KOL, İKİ EL. Bir eli alnında, öbürü kremalı eteğini tutuyor.", BAS,
    "İfade: mahcup; yanakları kızarmış, gözleri yarı kapalı, dudaklarını ısırıyor.", "Çekicilik: en üst seviyede seksi ve komik. Çıplaklık yok.", YAZI, F45))
ekle(10, "Peri, masa örtüsüne sarılı, normal", "peri.ortulu.normal", S, [cikti(8, "bu sohbetteki kremalı Peri")],
  j("Bu sohbette ürettiğin kremalı Peri görselindeki kadının AYNISI: aynı yüz, aynı dağılmış topuz ve saçındaki krema, aynı kırmızı stiletto, tek inci küpe. Aynı çizim tarzı, arka plan, ölçek ve kadraj.",
    "Değişen: kadın büyük, beyaz, keten bir masa örtüsüne sarınmış; örtüyü iki eliyle göğsünün üstünde kavuşturmuş, bir şal gibi. Örtü omuzlarını ve gövdesini örtüyor, dizin üstünde bitiyor; altından kremalı zümrüt yeşili eteğin ucu, bacakları ve kırmızı stilettolar görünüyor. Bir omzu örtüden kaymış, çıplak omuz görünüyor. Örtüde hiçbir desen, nakış, yazı yok.",
    "Poz: TAM İKİ KOL, İKİ EL. İki eli göğsünün üstünde örtüyü tutuyor. Dimdik.", BAS,
    "İfade: sakin ve onurlu, sanki gece elbisesi giymiş; hafif bir gülümseme.", "Çekicilik: en üst seviyede seksi; kayan omuz, bacaklar. Çıplaklık yok.", YAZI, F45))
for no, ad, an, poz, ifade in [
  (11, "kaşı kalkık", "kas", "Örtüyü tek eliyle tutuyor, öbür eli belinde.", "bir kaşı kalkık, alaycı."),
  (12, "şaşırmış", "sasirmis", "İki eliyle örtüyü boğazına kadar çekmiş.", "irkilmiş; gözler açık, kaşlar kalkık (kapı çalındı)."),
  (13, "utanmış", "utanmis", "Örtünün ucunu yüzünün yarısına kaldırmış.", "mahcup; yanaklar kızarmış.")]:
  ekle(no, "Peri, örtülü, " + ad, "peri.ortulu." + an, S, [cikti(10, "bu sohbetteki örtülü Peri")],
    j("Bu sohbette ürettiğin örtüye sarılı Peri görselindeki kadının AYNISI: aynı yüz, aynı beyaz masa örtüsüne sarılı hâl (kayan omuz dahil), aynı dağılmış topuz ve saçındaki krema, aynı kremalı etek ucu, kırmızı stiletto, tek inci küpe. Aynı çizim tarzı, arka plan, ölçek ve kadraj.",
      "Değişen tek şey poz ve ifade.", "Poz: TAM İKİ KOL, İKİ EL. " + poz, BAS, "İfade: " + ifade, "Çekicilik: en üst seviyede seksi. Çıplaklık yok.", YAZI, F45))

# ---------- CENGO ----------
S = "Sohbet 2 · Cengo"
ekle(14, "Cengo, lacivert takım, normal (temel)", "cengo.takim.normal", S, [dosya("G14-1_cengo.jpg", "yüz, ölçek, bileklik")],
  j("Referans görseldeki adamın AYNISI: aynı yüz, aynı dağınık koyu saç, iki üç günlük sakal, kalın kaşlar, aynı hınzır yarım gülümseme; bileğinde aynı renkli boncuklu bileklik. Aynı çizim tarzı, aynı düz açık bej arka plan, aynı ölçek ve kadraj: uyluk ortasından yukarısı, başın tepesi aynı yükseklikte, dikey.",
    "Değişen: kıyafet. Kahverengi ceket ve kot YOK.",
    "Kıyafet: ödünç alınmış, ona bir beden küçük gelen koyu lacivert bir takım elbise. Ceketin kolları bileklerinden kısa kalıyor (boncuklu bileklik açıkça görünüyor), pantolonun paçaları da kısa. Beyaz gömlek, düğmeleri boynuna kadar ilikli. Boynunda koyu bordo bir kravat, düzgün bağlı. Göğüs cebinden ince bir telin ucu görünüyor.",
    "Poz: TAM İKİ KOL, İKİ EL. Bir eli pantolonunun cebinde, öbür eli kravatının düğümünü gevşetmeye çalışıyor.",
    BAS, "İfade: hınzır yarım gülümseme.", YAZI, F45), "Kollar ve paçalar kısa mı · bileklik görünüyor mu · kravat bordo")
for no, ad, an, f, poz, ifade in [
  (15, "kaşı kalkık", "kas", "G15-2_cengo_kas.jpg", "Bir eli çenesinde, öbürü cebinde.", "kuşkulu, alaycı; tek kaş kalkık."),
  (16, "gülen", "gulen", "G16-2_cengo_gulen.jpg", "Başı hafif geride, bir eli kravatında.", "açık, içten bir gülüş."),
  (17, "yumuşak", "yumusak", "G17-2_cengo_yumusak.jpg", "Kravatı gevşemiş, iki eli cebinde.", "gülmeyen, sıcak bir bakış.")]:
  ekle(no, "Cengo, takım, " + ad, "cengo.takim." + an, S, [cikti(14, "bu sohbetteki temel"), dosya(f, "yalnız poz")],
    j("Bu sohbette ürettiğin ilk görseldeki (lacivert takımlı) adamın AYNISI: aynı yüz, aynı kısa kollu lacivert takım, beyaz gömlek, bordo kravat, göğüs cebinde tel ucu, bileğinde boncuklu bileklik. Aynı çizim tarzı, arka plan, ölçek ve kadraj. Eklediğim referans görsel YALNIZ poz içindir; oradaki kıyafeti alma.",
      "Değişen tek şey poz ve ifade.", "Poz: TAM İKİ KOL, İKİ EL. " + poz, BAS, "İfade: " + ifade, YAZI, F45))
ekle(18, "Cengo, takım, gelin buketiyle", "cengo.takim.buket", S, [cikti(14, "bu sohbetteki temel")],
  j("Bu sohbette ürettiğin ilk görseldeki adamın AYNISI: aynı yüz, aynı kısa kollu lacivert takım, beyaz gömlek, bordo kravat (biraz kaymış), göğüs cebinde tel ucu, boncuklu bileklik. Aynı çizim tarzı, arka plan, ölçek ve kadraj.",
    "Değişen: poz, ifade ve elindeki buket.",
    "Poz: TAM İKİ KOL, İKİ EL. Sağ elinde beyaz güllerden ve kır çiçeklerinden küçük bir gelin buketi, sapı beyaz kurdeleyle sarılı; buketi göğüs hizasında, şaşkınca tutuyor. Sol eli havada, \"ben almadım\" der gibi açık. Saçında iki pembe balon kurdelesi.",
    BAS, "İfade: şaşkın, nefes nefese ama kendinden memnun.", YAZI, F45))

# ---------- KONUKLAR ----------
def konuk(no, ad, anahtar, sohbet, ref, karakter, kiyafet, poz, ifade, cekim, bak=""):
    ekle(no, ad, anahtar, sohbet, [dosya(ref, "yalnız tarz, ölçek, kadraj")],
      j(STIL, TARZ, "Karakter: " + karakter, "Kıyafet: " + kiyafet, "Poz: TAM İKİ KOL, İKİ EL. " + poz, BAS, "İfade: " + ifade, cekim, KADRAJ, YAZI, F45), bak)
def surum(no, ad, anahtar, sohbet, temel, kim, poz, ifade, ek=""):
    ekle(no, ad, anahtar, sohbet, [cikti(temel, "bu sohbetteki temel")],
      j("Bu sohbette ürettiğin ilk görseldeki " + kim + " AYNISI: aynı yüz, saç, kıyafet ve takılar. Aynı çizim tarzı, aynı düz açık bej arka plan, aynı ölçek ve kadraj.",
        "Değişen tek şey poz ve ifade." + (" " + ek if ek else ""), "Poz: TAM İKİ KOL, İKİ EL. " + poz, BAS, "İfade: " + ifade, YAZI, F45))
CK = "Çekicilik: en üst seviyede seksi ve çekici (ama bu vakada en gösterişli kadın Peri'dir; onu geçmez). Çıplaklık yok."
S = "Sohbet 3 · Müjgan"
konuk(19, "Müjgan Ersoy, normal (temel)", "mujgan.normal", S, "G19-1_tuba_tarz.jpg",
  "Müjgan Ersoy, 58, Nişantaşı'nın zengin, bakımlı, alımlı hanımefendisi. Uzun boylu, ince. Platin sarı, fönlü, omuz boyu saç; başının üstünde güneş gözlüğü. Belirgin elmacık kemikleri, kalıcı bir küçümseme.",
  "krem rengi, derin dekolteli, vücudu saran ipek bir elbise, belden ince altın kemerli, dizin üstünde biter; ince altın topuklu ayakkabı. Elinde tek, iri bir pırlanta yüzük. Çanta yok.",
  "Bir eli belinde, öbür eliyle güneş gözlüğünü başının üstünde düzeltiyor.", "kibirli, yukarıdan bakan, ama kızının düğünü için gerçekten endişeli.", CK)
surum(20, "Müjgan, kaşı kalkık", "mujgan.kas", S, 19, "kadının", "Kolları kavuşmuş.", "bir kaşı kalkık; karşısındakini baştan aşağı süzüyor.")
surum(21, "Müjgan, öfkeli", "mujgan.ofkeli", S, 19, "kadının", "Bir eli göğsünde, öbürü kadrajın soluna doğru açık.", "öfkeli; kaşlar çatık, ağzı açık (\"Kızım?!\").")
S = "Sohbet 4 · Defne"
konuk(22, "Defne, sakin (temel)", "defne.normal", S, "G22-1_tuba_tarz.jpg",
  "Defne Ersoy, 29, mimar, gelin. Uzun, dalgalı, koyu kestane saç omuzlarında; dolgun dudaklar, iri koyu gözler; makyajı hafif. Sakin, kendini tutan bir güzellik.",
  "ince beyaz ipek gömlek, üst düğmeleri açık, belde düğümlenmiş (derin dekolte, karnı biraz görünüyor); vücuduna oturan bej, yüksek belli pantolon; ince topuklu bej sandalet. Parmağında ince gümüş bir nişan yüzüğü. Başka takı yok.",
  "Elinde bir su bardağı, göğüs hizasında; öbür eli bardağın altında.", "sakin, nazik, fazla sakin; hafif bir gülümseme.", CK)
surum(23, "Defne, gergin", "defne.gergin", S, 22, "kadının", "Bardağı iki eliyle sıkıyor, parmak boğumları beyaz.", "dudakları gergin bir çizgi, gözleri kaçıyor.")
surum(24, "Defne, panik, yalınayak", "defne.panik", S, 22, "kadının", "Bir elinde sandaletleri sallanıyor, öbür eli öne uzanmış; koşmaya hazır.", "panik; gözler fal taşı, ağzı açık.",
  "Sandaletler ayağında değil, ayakları çıplak; gömlek bir omzundan kaymış, saçı savrulmuş.")
surum(25, "Defne, itiraf", "defne.itiraf", S, 22, "kadının", "İki eli kucağında birleşmiş.", "gözleri dolu ama dik bakıyor; utangaç, kararlı bir gülümseme.",
  "Yalınayak, gömlek bir omzundan kaymış, saçında pirinç taneleri.")
S = "Sohbet 5 · Lâl Hanım"
konuk(26, "Lâl Hanım, normal (temel)", "lal.normal", S, "G26-1_tuba_tarz.jpg",
  "Lâl Hanım, 60'larında, İstanbul moda dünyasının eski büyüklerinden bir modacı. İnce, dik, iddialı ve hâlâ çok çekici. Kısa, gümüş beyazı alagarson saç; kırmızı ruj; kalın siyah çerçeveli gözlük, boynundan ince bir zincirle sarkıyor; boynunda küçük gümüş bir makas kolye.",
  "baştan aşağı siyah; derin V yakalı, vücudu saran siyah kalem elbise, bir yanında yüksek yırtmaç; siyah file çorap, siyah stiletto. Bileğinde bir iğne yastığı.",
  "Bir eli belinde, öbür eli gözlüğünü burnunun ucuna indiriyor; karşısındakini gözlüğün üstünden süzüyor.", "alaycı, bilmiş; seni tanıyor mu tanımıyor mu belli değil.", CK)
surum(27, "Lâl, kaşı kalkık", "lal.kas", S, 26, "kadının", "Kolları kavuşuk.", "tek kaşı kalkık, gözlüğün üstünden bakıyor, yarım gülümseme.")
surum(28, "Lâl, sinirli", "lal.sinirli", S, 26, "kadının", "Gözlüğünü takmış, bir eli kadrajın soluna uzanmış (\"ona sorsana!\").", "kaşlar çatık, öfkeli.")
S = "Sohbet 6 · Tolga"
konuk(29, "Tolga, normal (temel)", "tolga.normal", S, "G29-1_serkan_tarz.jpg",
  "Tolga, 40'larında, düğün organizatörü. İnce, bakımlı; yanları kısa, üstü jöleli koyu saç; özenle düzeltilmiş sakal çizgisi. Sürekli acelesi var.",
  "dar kesim lacivert yelek ve açık mavi gömlek, kollar dirseğe kadar kıvrılmış; dar koyu gri pantolon. Tek kulağında ince, siyah bir kulaklık-mikrofon. Elinde ekranı ona dönük, yüzü görünmeyen bir tablet. Takı yok.",
  "Bir eli tableti tutuyor, öbür elinin işaret parmağı kulaklığa basıyor.", "profesyonel, yapay bir sıcaklık; \"canım\" diyen bir gülümseme.", "")
surum(30, "Tolga, sinirli", "tolga.sinirli", S, 29, "adamın", "Tableti göğsüne bastırmış, öbür eli açık avuçla havada (\"Ben mi canım?\").", "kaşlar kalkık, gücenmiş.")
konuk(31, "Gülsüm (usta)", "gulsum.normal", "Yeni sohbet · Gülsüm", "G31-1_tuba_tarz.jpg",
  "Gülsüm, 50'lerinde usta terzi; dolgun ve kıvrımlı; gür siyah saçı arkadan topuz; gözlüğü burnunun ucunda.",
  "dar siyah tişört; üstünde göğsünü saran koyu gri iş önlüğü, önlükte toplu iğneler; boynunda mezura.",
  "Elinde ince belli bir çay bardağı, öbür eli belinde.", "rahat, cilveli, her şeyi bilen bir bakış.", CK)
konuk(32, "Bülent (vale)", "bulent.normal", "Yeni sohbet · Bülent", "G32-1_serkan_tarz.jpg",
  "Bülent, 20'lerinde, uzun ince bir vale; kısa saç, bıyıksız, genç yüz.",
  "beyaz gömlek üstünde kırmızı vale yeleği (YAZISIZ, logosuz), siyah pantolon.",
  "Bir elinde yazısız anahtarlarla dolu bir halka, öbür eli ensesinde.", "mahcup, minnettar bir gülümseme.", "")
konuk(33, "Sarkis Usta (terzi)", "sarkis.normal", "Yeni sohbet · Sarkis", "G33-1_kemal_tarz.jpg",
  "Sarkis Usta, 70'lerinde, kısa boylu, kel, BIYIKSIZ bir terzi; kalın camlı gözlük; boynunda mezura; ağzının köşesinde iki toplu iğne. KASKET YOK, YELEK YOK.",
  "beyaz gömlek, kolları kollukla toplanmış; gri kumaş pantolon.",
  "Bir elinde bir makas, ucu aşağıda; öbür eli gözlüğünü düzeltiyor.", "ağır başlı, bilge, hafif alaycı.", "")
konuk(34, "Saadet Hanım (ev sahibi)", "saadet.normal", "Yeni sohbet · Saadet", "G34-1_tuba_tarz.jpg",
  "Saadet Hanım, 70, minyon, \"eski dilber\"; koyu kızıl, mizanpli saç; kırmızı ruj; inci kolye.",
  "dar bordo kadife elbise.",
  "İki eliyle üstü beyaz bir bezle örtülü, yuvarlak, metal bir börek tepsisi tutuyor.", "tatlı, ama \"seni utandıracağım\" diyen bir gülümseme.",
  "Çekicilik: yaşına göre şık ve çekici. Çıplaklık yok.")

# ---------- MEKÂNLAR ----------
def mekan(no, ad, an, sohbet, refs, govde):
    ekle(no, ad, an, sohbet, refs, j(STIL, "Arka plan görseli: insansız; hiçbir kişi yok. Kamera göz hizasında. Işık: gündüz, sıcak gün ışığı. Ortadaki zemin boş (sonra figürler orada duracak).",
      govde, "Kadrajda yalnız sayılan nesneler var; başka nesne yok. Tabela, etiket, kâğıt yüzü yok.", YAZI, F34))
S = "Sohbet 7 · Atölye"
mekan(35, "Lâl'in atölyesi, salon", "A15", S, [dosya("G35-1_buro_tarz.jpg", "yalnız çizim tarzı ve ışık")],
  "Teşvikiye'de eski bir apartman katında bir modacı atölyesi. Yüksek tavan, krem duvarlar, alçı tavan süsü. Solda yaldız çerçeveli bir boy aynası; sağda iki terzi mankeni, ikisi de üstü boş, kumaşsız; arka duvarda renkli kumaş topları dizili raflar (yazısız); pencereden yumuşak gün ışığı. Yerde parke ve küçük bir halı.")
mekan(36, "Atölye, prova odası", "A16", S, [cikti(35, "bu sohbetteki atölye")],
  "Bu sohbette ürettiğin atölyenin küçük arka odası, aynı tarz ve renkler. Ortada tek bir terzi mankeni, ÇIPLAK (üstünde hiçbir giysi yok); yanında bir sandalye, sandalyenin üstünde katlanmış büyük beyaz bir örtü. Duvarda üç kanatlı boy aynası. Arka duvarda kapalı, ahşap bir arka kapı.")
mekan(37, "Atölyenin arka avlusu", "A17", S, [cikti(35, "bu sohbetteki atölye")],
  "Bu sohbette ürettiğin atölyenin taş döşeli küçük arka avlusu, aynı tarz. Sarmaşıklı eski taş duvar; bir köşede küçük bir tabure ve üstünde çaydanlık; ahşap arka kapı açık; avludan sokağa açılan demir bahçe kapısı; saksıda kırmızı sardunyalar.")
ekle(44, "Detay: örtü kalkıyor, manken boş", "D6", S, [cikti(36, "bu sohbetteki prova odası")],
  j(STIL, "Yakın çekim, bu sohbette ürettiğin prova odasında. Yaşlıca bir kadın eli (toplu iğneli bir önlüğün kolu görünüyor) büyük beyaz örtüyü bir terzi mankeninin üstünden kaldırıyor; örtünün altında manken ÇIPLAK, boş. Sabah ışığı. Başka nesne yok.", YAZI, F34))
S = "Sohbet 8 · Otel"
mekan(40, "Otel balo salonu, balon kemeri", "A20", S, [dosya("G40-1_set_tarz.jpg", "yalnız çizim tarzı ve ışık")],
  "Boğaz kıyısında büyük bir otelin balo salonu. Kristal avizeler, cilalı ahşap dans pisti, beyaz örtülü yuvarlak masalar, henüz boş; pistin ortasında pembe ve beyaz balonlardan büyük bir kemer; büyük pencerelerden Boğaz. Bir köşede bir arabanın üstünde beş katlı beyaz bir düğün pastası.")
mekan(41, "Balo salonu, 2. açı", "A20b", S, [cikti(40, "bu sohbetteki balo salonu")],
  "Bu sohbette ürettiğin balo salonu, ters açıdan, aynı tarz: pistin kenarı, istiflenmiş sandalyeler ve üstlerinde katlanmış beyaz sandalye örtüleri yığını; balon kemerinin bir ucu; yerde dökülmüş birkaç pirinç tanesi.")
mekan(42, "Otelin pasta mutfağı", "A21", S, [cikti(40, "bu sohbetteki balo salonu")],
  "Aynı otelin çelik tezgâhlı, beyaz fayanslı pasta mutfağı, aynı tarz. Tezgâhta tadım için hazır beş katlı beyaz bir düğün pastası (fıstık yeşili ara katlar); yerde ıslak, parlak zemin; askıda beyaz önlükler.")
mekan(38, "Teşvikiye, atölyenin sokağı", "A18", "Yeni sohbet · Sokak", [dosya("G38-1_arasokak_tarz.jpg", "yalnız çizim tarzı ve ışık")],
  "Şık, ağaçlı bir Nişantaşı-Teşvikiye sokağı; eski taş apartmanlar; zemin katta camı perdeli bir atölye kapısı (TABELASIZ); kaldırımın kenarında YAZISIZ küçük bir vale kürsüsü ve duvara asılı bir anahtar panosu (anahtarlar yazısız). Yana dönük park etmiş iki araba (plakaları görünmüyor).")
mekan(39, "Ersoy'ların salonu", "A19", "Yeni sohbet · Salon", [dosya("G39-1_buro_tarz.jpg", "yalnız çizim tarzı ve ışık")],
  "Nişantaşı'nda zengin, yeni ve soğuk renkli bir salon: yüksek tavan, kristal avize, krem koltuklar, büyük pencere önünde uzun tül perde, sehpada beyaz orkideler, duvarlarda çerçevesiz soyut tablolar (yazısız).")
S = "Sohbet 9 · Terzi"
mekan(43, "Sarkis Usta'nın dükkânı", "A22", S, [dosya("G43-1_dukkan_tarz.jpg", "yalnız çizim tarzı ve ışık")],
  "Kurtuluş'ta dar, eski bir terzi dükkânı; ahşap tezgâh, eski bir dikiş makinesi, duvarda askıda kılıflı giysiler (kılıflar yazısız); bir köşede terzi mankeni, üstünde fildişi dantel bir gelinlik: kuyruğu yarıya kadar sökülmüş; vitrin camı sokağa bakıyor (camda yazı yok).")
ekle(45, "Detay: kuyruğu sökülmüş gelinlik", "D7", S, [cikti(43, "bu sohbetteki dükkân")],
  j(STIL, "Yakın çekim, bu sohbette ürettiğin dükkândaki gelinlik: fildişi İtalyan dantel, dar korse, uzun kuyruk; kuyruğun dikişi yarıya kadar sökülmüş, kopan iplikler ve toplu iğneler görünüyor; yanında bir makas. Etiket yok. Başka nesne yok.", YAZI, F34))

# ---------- KARELER ----------
def kare(no, ad, an, refs, govde, peri_kadin=False):
    ekle(no, ad, an, "Yeni sohbet · " + an, refs,
      j(STIL, "Ara kare. Kişiler eklediğim referanslardakilerin AYNISI (yüz, saç, kıyafet); mekân referanstakinin AYNISI. Kadrajda yalnız sayılan kişiler ve nesneler var.",
        govde, EN if peri_kadin else "", "Peri ve kadınlar en üst seviyede seksi. Çıplaklık yok.", YAZI, F34))
U = lambda g, ne: cikti(g, ne)
kare(46, "Peri masanın kenarında; Müjgan süzüyor", "K19", [dosya("G46-1_buro.jpg", "büro"), U(1, "Peri (tayyör)"), U(19, "Müjgan")],
  "Büro, gündüz. Peri (tayyör) masanın kenarına oturmuş, bacak bacak üstüne atmış; kalem etek yukarı kaymış, bacakları ve kırmızı stilettolar önde. Müjgan kapı tarafında ayakta, güneş gözlüğü başında, Peri'yi baştan aşağı süzüyor.", True)
kare(47, "Kapıda Saadet ve Cengo; masanın altında Peri", "K20", [dosya("G47-1_buro.jpg", "büro"), U(1, "Peri"), U(14, "Cengo"), U(34, "Saadet")],
  "Büro, gündüz. Solda açık kapıda Saadet Hanım örtülü börek tepsisiyle; Cengo kapıda onu karşılıyor. Sağda masanın altında Peri çömelmiş, saklanıyor: tayyör, kırmızı stilettolar, eli ağzında, gözleri kocaman. Saadet onu görmüyor.", True)
kare(48, "Cengo kolunda nedimeyle; Peri kapıda", "K21", [U(40, "balo salonu"), U(14, "Cengo"), U(1, "Peri")],
  "Balo salonu. Cengo, kolunda pembe saten nedime elbisesi giymiş genç bir kadın (dar, kısa, askılı, yüksek topuk), balon kemerinin altından ciddi ciddi yürüyor; arkada üç nedime daha aynı elbiselerle. Ön planda kapı kenarında Peri, kollarını kavuşturmuş, kaşı kalkık.", True)
kare(49, "Kovalamaca 1: Defne fırlıyor", "K22", [U(41, "balo salonu 2. açı"), U(24, "Defne panik"), U(14, "Cengo")],
  "Balo salonu, ikinci açı. Defne yalınayak, elinde sandaletleri, nedimelerin arasından kameraya doğru fırlıyor; nedimeler çığlık atıyor. Arkada Cengo balon kemerine dolanmış, kolunda hâlâ nedimesi, balonlar patlıyor.")
kare(50, "Kovalamaca 2: Peri pastanın içinde", "K23", [U(42, "pasta mutfağı"), U(8, "kremalı Peri")],
  "Pasta mutfağı. Peri beş katlı düğün pastasının içine oturmuş: kalçası en alt katta, bacakları havada, kırmızı stilettolar havada; kremalı; topuz dağılmış; ellerini iki yana açmış, şaşkın ve gururlu. Komik ve seksi; acı ya da aşağılanma yok.")
kare(51, "Kovalamaca 3: Peri pistte kayıyor", "K24", [U(40, "balo salonu"), U(8, "kremalı Peri")],
  "Balo salonu. Kremalı Peri cilalı dans pistinde buz pateni yapar gibi kayıyor: bir bacağı öne havaya kalkmış, kolları iki yana açık, saçları savrulmuş; arkada bir garson tepsisiyle donmuş bakıyor.")
kare(52, "Kovalamaca 4: Defne örtü yığınında", "K25", [U(41, "balo salonu 2. açı"), U(25, "Defne itiraf"), U(18, "Cengo buketli")],
  "Balo salonu, ikinci açı. Yerde dökülmüş pirinç; Defne sandalye örtüsü yığınının içine düşmüş, yalınayak, saçında pirinç; Cengo elinde gelin buketiyle yanında dikilmiş, nefes nefese; arkada nedimeler.")
kare(53, "Peri örtüye sarılı; Cengo kremayı tadıyor", "K26", [U(41, "balo salonu 2. açı"), U(10, "örtülü Peri"), U(16, "Cengo gülen")],
  "Balo salonunun kenarı. Peri beyaz masa örtüsüne sarılmış, onurlu duruyor; Cengo parmağındaki kremayı tadıyor, gülüyor.")
kare(54, "Karar: cumartesi düğünü", "K27", [U(40, "balo salonu"), U(22, "Defne"), U(19, "Müjgan"), U(45, "gelinlik")],
  "Cumartesi akşamı balo salonunda düğün: kalabalık, alkışlayan misafirler (yüzleri seçilmiyor). Ortada Defne, gelinliğin uzun kuyruklu hâliyle; gülümsüyor ama gözü uzakta. Yanında Müjgan, gururlu.")
kare(55, "Karar: cuma nikâhı, kısa gelinlik", "K28", [U(22, "Defne"), U(16, "Cengo"), U(45, "gelinlik")],
  "Cuma sabahı, sade bir nikâh salonu (yazısız, tabelasız, bayraksız; yalnız çiçekler ve sandalyeler). Defne kısaltılmış gelinlikte (aynı dantel, kuyruksuz, diz altında biter), mutlu. Yanında arkası dönük, sade takım elbiseli genç bir adam (yüzü görünmüyor). Cengo şahit olarak bir kenarda, gülümsüyor.")
kare(56, "Karar: ana kız aynı masada", "K29", [U(41, "balo salonu 2. açı"), U(19, "Müjgan"), U(22, "Defne")],
  "Boş balo salonu, gün ışığı. Balon kemerinin altında tek bir yuvarlak masa; karşılıklı oturmuş Müjgan ve Defne; ikisi de sessiz, eller masada, birbirine bakmaya çalışıyor. Başka kimse yok.")
kare(57, "Karar: Lâl atölyenin kapısında", "K30", [U(35, "atölye"), U(26, "Lâl")],
  "Lâl'in atölyesinin kapısı, akşamüstü. Lâl Hanım kapı eşiğinde, yalnız, gözlüğü elinde, yorgun; kapının önünde elinde kapalı bir dosya (yüzü kapalı) tutan sabırsız bir adam bekliyor. Vitrindeki mankenler boş.")
kare(58, "Kapanış sıcak: Cengo merdivende", "K31", [dosya("G58-1_koridor_aksam.jpg", "koridor, akşam"), U(17, "Cengo yumuşak")],
  "Han koridoru, akşam. Cengo merdivenin başında, kravatı gevşek, dönüp kameraya (büroya doğru) gülümseyerek bakıyor.")
kare(59, "Kapanış soğuk: Peri yalnız", "K32", [dosya("G59-1_buro_aksam.jpg", "büro, akşam"), U(10, "örtülü Peri")],
  "Büro, akşam. Masada çözülmüş bordo bir kravat ve üstü bezle örtülü bir börek tepsisi. Peri beyaz masa örtüsüne sarılı, saçında krema, masanın yanında ayakta, kapıya bakıyor; kapı aralık, koridor boş. Yalnız.")

# Sohbet sırası: önce temel sohbetler, en son kareler
sira = ["Sohbet 1 · Peri", "Sohbet 2 · Cengo", "Sohbet 3 · Müjgan", "Sohbet 4 · Defne", "Sohbet 5 · Lâl Hanım", "Sohbet 6 · Tolga",
        "Yeni sohbet · Gülsüm", "Yeni sohbet · Bülent", "Yeni sohbet · Sarkis", "Yeni sohbet · Saadet",
        "Sohbet 7 · Atölye", "Sohbet 8 · Otel", "Sohbet 9 · Terzi", "Yeni sohbet · Sokak", "Yeni sohbet · Salon"]
gruplar = []
for s in sira + sorted({g["sohbet"] for g in G} - set(sira), key=lambda x: int(next(g["no"] for g in G if g["sohbet"] == x))):
    gruplar.append({"ad": s, "gorseller": sorted([g for g in G if g["sohbet"] == s], key=lambda g: g["no"])})
assert sum(len(x["gorseller"]) for x in gruplar) == 59 == len({g["no"] for g in G})
yol = os.path.dirname(os.path.abspath(__file__))
open(os.path.join(yol, "veri.js"), "w").write("const GRUPLAR=" + json.dumps(gruplar, ensure_ascii=False) + ";\n")
print("59 görsel,", len(gruplar), "sohbet")
