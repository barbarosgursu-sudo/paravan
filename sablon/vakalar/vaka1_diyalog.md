# VAKA 1 — KAYIP TEKNE · DİYALOG

Üretim adımı 3 (`7_uretim_sureci.md`). Kaynak: `vaka1_form.md` (Onay 1, 8 Ekim 2026).
**Bu dosya sahnelerin ve karar metinlerinin TEK kaynağıdır.** Veriye elle yazılmaz:
`cd kaynak && node arac_diyalog.js ../sablon/vakalar/vaka1_diyalog.md` bu dosyayı okuyup
`yeni/game_data.json` ve `yeni/kisiler.json`'a yazar.

**Yazım:**
- `**PERİ [kas]:** metin` → konuşan, ifade (verilmezse öncekisi kalır), metin
- `*metin*` → anlatı satırı (sahne notu)
- Satır sonunda `{…}` → sahne değişiklikleri: `arka: A9`, `kare: K8`, `set: mantosuz`,
  `gir: serkan`, `cik`, `kime: peri` (konuk varken Cengo Peri'ye konuşuyor: sağa geçer; yoksa sola, konuğun karşısına; konuk satırında: solda Peri/Cengo), `peri: sasirmis` (dinleyen Peri), `bag: yuksek|dusuk`, `mekan`
- `## sahne <ad>` vaka sahnesi · `## ipucu <id>` ipucu sahnesi · `## karar <id>` karar metinleri · `## ucret` kesinti açıklaması
  (ÖNİZLEME = karar ekranındaki kısa sonuç, SONUÇ = seçimden sonraki metin, CENGO, DEFTER)
- `⚙` ile başlayan satır: sahnenin ayarı (`arka`, `figurler`) ya da açıklama (veriye girmez)

**Görselsiz test için yer tutucu:** görseli olmayan ifadeler (Kemal Reis'in ikisi, Serkan panik,
Peri mantolu acı, Cengo sinirli) ekranda gri "görsel yok" kutusuyla görünür
(`gorseller.json` → `yer_tutucu`). Görsel gelince kutu kendiliğinden kalkar.

---

## sahne giris
⚙ arka: A6 · figurler: peri, cengo, riza
⚙ K17: büro, 15–25 replik, şüpheli (Kemal) anılıyor, ücret konuşuluyor, ipucu bilgisi yok.

*Kapıda yetmişlerinde bir adam. Kasket, lacivert yelek, ellerinde ağ izleri. Bugün çarşamba.*
**PERİ [normal]:** Ev sahibi değilsiniz.
**RIZA [normal]:** Değilim. Dedektif burası mı? Camda öyle yazıyor.
**CENGO [kas]:** Camda yazıyor muymuş? Üç aydır geliyorum, hiç bakmadım.
*Peri mantosunu çıkarıp askıya asıyor. Rıza Reis gözünü kaçırıyor.* {set: mantosuz, kare: K15, arka: A6b}
**RIZA [normal]:** Kızım, sen o yarışmadaki değil misin? {kime: peri}
**CENGO [gulen]:** Yarışmayı hatırlayan son seyirci de bulundu. {kime: peri}
**PERİ [kas]:** Buyurun, oturun. Ne oldu? {gir: riza}
**RIZA [dertli]:** Teknemi aldılar. Kırk yıllık teknemi. Nazlı'yı.
**CENGO [kas]:** Nazlı kim?
**RIZA:** Tekne. Rahmetli hanımın adı.
**PERİ [normal]:** Ne zaman?
**RIZA:** Dün gece. Sabah iskeleye indim, yok. Karakola gittim, tutanak tuttular, "bakarız" dediler.
**RIZA [ofkeli]:** Kemal'dir. Yanımda bağlar. Yirmi yıldır yerime göz diker; geçen hafta yakama yapıştı.
**CENGO [kas]:** Kemal'in teknesi yerinde mi?
**RIZA:** Yerinde. Akıllı adam.
**RIZA [normal]:** Zinciri her akşam kendim kilitlerim. Anahtarı boynumda. Yedekleri evde dururdu; yıllar önce kayboldu.
**RIZA [dertli]:** Bir hafta denize çıkmazsam batarım.
**PERİ [normal]:** Otuz beş bin.
**RIZA [dertli]:** *(yutkunarak)* …Tekne dönünce.
**CENGO [gulen]:** *(Rıza Reis'e, alçak sesle)* Merak etme reis, ben bedavaya çalışıyorum.
**PERİ [kas]:** Anlaştık. Önce iskele.
*Rıza Reis kapıdan çıkarken duruyor.*
**RIZA [normal]:** Bir de… oğlum Serkan'a söylemeyin. Üzülür. {cik}

## sahne konusma
⚙ arka: A6b · figurler: peri, cengo

**CENGO [gulen]:** İlk müşteri.
**PERİ [kas]:** Parası tekne dönünce.
**CENGO:** Tekne dönerse para döner. Basit iş.
**PERİ [normal]:** Plan şu. İskeleye gideriz, kayıt tutarız, liman başkanlığına yazılı başvuru yaparız. {arka: A7}
**CENGO [normal]:** Başvurunun cevabı gelene kadar Reis batar. İskeledeki çaycıya sorarız. Çaycı gece de oradadır.
**PERİ [kas]:** Çaycıyı tanıyor musunuz?
**CENGO:** Bana üç bardak borcu var.
**PERİ:** Siz herkese mi borçlusunuz, herkes size mi?
**CENGO [gulen]:** Bana borçlu olanlar konuşur. Benim borçlu olduklarımdan ben saklanırım.
**PERİ [normal]:** İskele. Çaycınız. Bir de şu Kemal.
**CENGO [kas]:** Benim değil o çaycı. Bana borçlu, o kadar.

---

## ipucu cayci
⚙ arka: A10 · figurler: peri, cengo

*İskelenin çay ocağı. Çaycı, Cengo'yu görünce cebini yokluyor.* {mekan}
**ÇAYCI [normal]:** Üç bardak. Al, ödedim. Bitti mi? {gir: cayci}
**CENGO [gulen]:** Bitti. Şimdi bir de konuş.
**ÇAYCI:** Salı gece yarısı Nazlı'nın motoru çalıştı. Boğaz'a doğru, kuzeye gitti.
**ÇAYCI:** Dümendeki bana el salladı. Karanlıktı, yüzünü seçemedim.
**CENGO [kas]:** El sallayan hırsız görmedim ben. Kemal o gece neredeydi?
**ÇAYCI:** Burada, okey oynuyordu. Gece yarısına doğru "tekneye bakıp geleyim" dedi; yarım saat yoktu.
**PERİ [kas]:** Tam gece yarısı.
**ÇAYCI:** Bir de sabah Bebek'teki balıkçı arkadaşım aradı. "Sizin Nazlı'ya benzer bir tekne var burada," dedi. "Ama beyaz."
**PERİ [merakli]:** Beyaz mı?
**ÇAYCI:** Öyle dedi. Ben görmedim. {cik}

## ipucu iskele
⚙ arka: A9 · figurler: peri, cengo

*Karaköy iskelesi. Nazlı'nın yeri boş; zincir yerinde.* {mekan}
*Kilidi kırılmamış, zorlanmamış. Cengo kilide eğiliyor.* {kare: D2}
**CENGO [kas]:** Bu anahtarla açılmış, sonra yeniden kilitlenmiş. Ya da benden iyi biri varmış; ona inanmam.
**PERİ [kas]:** Rıza Reis "yedekler evde dururdu" demişti.
**CENGO [kas]:** Evde kim var?
**PERİ [normal]:** Bir oğlu var. Serkan.
*Yan bağlamada iri bir adam teknesinin başında. Elleri bileklerine kadar beyaz boya; küpeşte taze boyalı.* {gir: kemal}
**PERİ [normal]:** Kemal Reis?
**KEMAL [normal]:** Ne olacak?
**PERİ [kas]:** Salı gece neredeydiniz?
**KEMAL:** Teknemdeydim. Ne olacak?
**CENGO [kas]:** Nazlı giderken?
**KEMAL:** Nazlı'yı ben ne yapayım?
*Fırçayı kovaya atıyor.*
**KEMAL [ofkeli]:** Hırsız arıyorsanız uzağa bakmayın.
**CENGO [kas]:** Bu bir itiraf mıydı, tavsiye mi? {kime: peri}
**PERİ [kas]:** Belki ikisi.

## ipucu bebek
⚙ arka: A11 · figurler: peri, cengo

*Bebek. Sahil yolunda bir dizi seti: bariyerler, kablolar, jeneratör sesi.* {mekan}
**PERİ [normal]:** Dur, ben hallederim. Beni tanırlar.
**CENGO [kas]:** Kim tanır?
**PERİ [kas]:** Herkes. Ben güzellik kraliçesiydim.
**ASİSTAN:** *(Peri'yi baştan aşağı süzüp)* Figüranlar arkadan.
**PERİ [sinirli]:** …Figüran mı?
**CENGO [gulen]:** Kraliçeler arkadan giriyormuş. {kime: peri}
**PERİ [sinirli]:** Bir kelime daha edersen maaşını keserim.
**CENGO [gulen]:** Önce bir verin, sonra kesin. {kime: peri}
**ASİSTAN:** *(telefonunu figüranlara gösteriyor)* Bu sezonun yıldızı: gerçek bir lüks yat.
*Setin ortasında "lüks yat": beyaza boyanmış, ahşap gövdeli, yaşlı bir balıkçı teknesi. Pruvadaki taze boyanın altından eski bir ad seçiliyor: Nazlı.* {kare: D3}
**BOYACI:** Dokunmayın, daha kurumadı. Dün gece geldi, sabah biz boyadık. {kare: D3}
**PERİ [sinirli]:** Hırsızı bulduk.
**CENGO [kas]:** Hırsız kamera kurmaz. {kime: peri}
*Elinde üç telefonla bir kadın koşarak geliyor; herkes ona "Tuba Hanım" diyor.* {gir: tuba}
**TUBA [normal]:** Tekne bizim, belgesi tamam. Çekimdeyiz, gidin.
**PERİ [kas]:** Belgeyi görebilir miyim?
**TUBA:** Çekimdeyiz dedim. {cik}
**CENGO [kas]:** Belgesi o kadar tamam ki göstermeye kıyamıyor.

## ipucu set_sorumlusu
⚙ arka: A12 · figurler: peri, cengo
⚙ Kural 21c: Tuba kiralayanın adını VERMEZ. "Karaköy'den bir balıkçı" Kemal'e de Serkan'a da uyar.

*Set arkası, yemek masası. Cengo bir tabak pilav alıp Tuba'nın yanına oturuyor.* {mekan, kare: K16}
**CENGO [gulen]:** Pilavınız güzel. {gir: tuba}
**TUBA [normal]:** Sen kimsin?
**CENGO [normal]:** Teknenin sahibinin adamıyım.
**TUBA:** Sahibi değil mi o? Karaköy'den bir balıkçı geldi, "sahibiyim" dedi. Kiraladık, nakit. Üç günlüğüne, günü otuz beş bin.
**PERİ [kas]:** Adı neydi?
**TUBA:** Sormadım. Nakit veren adama ad sorulmaz.
**PERİ [kas]:** Ruhsatını gördünüz mü?
**TUBA:** Göstermedi, ben de sormadım. Çekim cumaya yetişmezse ben yetişemem. {cik}
**CENGO [gulen]:** Pilavı da güzeldi.

## ipucu serkan
⚙ arka: A13 · figurler: peri, cengo
⚙ Kural 21c: Serkan sakin; tek başına ele vermez. Borç notu sebebi gösterir, suçu değil.

**PERİ [utanmis]:** Rıza Reis "oğluma söylemeyin" dedi.
**CENGO [gulen]:** Söylemiyoruz. Soruyoruz.
*Karaköy'de kapalı bir balık-ekmek dükkânı. Kepengin önünde otuzlarında bir adam.* {gir: serkan}
**PERİ [normal]:** Serkan Bey? Babanızın teknesi…
**SERKAN [normal]:** Duydum. Kemal'le kavgalılar, biliyorsunuz.
**CENGO [kas]:** Teknenin yedek anahtarı kimde?
**SERKAN:** Yedek mi? Yıllar önce babamda kaldı. Evde bir yerdedir.
*Kepengin üstüne bantlanmış, el yazısı bir not: "Cuma günü ya para ya anahtar. — Ev sahibi."* {kare: D4}
**PERİ [normal]:** Cumaya ne kadar borcunuz var?
**SERKAN:** Yüz bine yakın. Ne alakası var?
**PERİ [kas]:** Bilmiyorum. Henüz.
**CENGO [kas]:** Dükkân kapalı, borç açık. {kime: peri}

---

## sahne yuzlesme_dogru
⚙ arka: A13 · figurler: peri, cengo, serkan
⚙ Oyuncu hangi doğru çifti seçtiyse seçsin aynı sahne; bu yüzden kanıtı adıyla anmaz.

*Serkan'ın dükkânının önü. Serkan kepengin önünde.* {gir: serkan}
**PERİ [normal]:** Nazlı'yı siz aldınız, Serkan Bey. Nasıl aldığınızı da biliyorum.
**SERKAN [normal]:** Ne diyorsunuz siz?
**PERİ [kas]:** İki şey diyorum. İkisini de biliyorsunuz.
**CENGO [kas]:** Baban da bilecek.
**SERKAN [panik]:** Babam mı?
*Serkan bir babasının iskelesine bakıyor, bir yola. Sonra koşuyor.* {cik}

## sahne yuzlesme_zayif
⚙ arka: A13 · figurler: peri, cengo, serkan

*Serkan'ın dükkânının önü. Serkan kepengin önünde.* {gir: serkan}
**PERİ [normal]:** Tekneyi siz aldınız.
**SERKAN [normal]:** Ne kanıtınız var?
**PERİ [utanmis]:** …Bir his.
**SERKAN [normal]:** His mi? Gidin işinize. {peri: aci}
**SERKAN [panik]:** *(Cengo bir adım yaklaşınca)* Yaklaşmayın!
*Serkan paniğe kapılıp koşuyor.* {cik}

## sahne yuzlesme_kemal
⚙ arka: A13 · figurler: peri, cengo, serkan
⚙ Kemal, Serkan'dan alacağını istemeye gelmiş (form §10, onaylı).

*Serkan'ın dükkânının önü. Kemal Reis, Serkan'dan alacağını istemeye gelmiş.* {gir: kemal}
**PERİ [kas]:** Kemal Reis. Nazlı'yı siz aldınız.
**KEMAL [ofkeli]:** Ben mi? Ben buraya alacağımı almaya geldim!
**KEMAL:** Dümende Rıza'nın oğlu vardı. Gözümle gördüm!
**CENGO [kas]:** Gördün de sustun mu?
**KEMAL:** Rıza'ya mı söyleyecektim? Yakama yapışan adama?
*Herkes kepengin önündeki Serkan'a dönüyor.* {gir: serkan}
**SERKAN [panik]:** Ben… bir şey yapmadım!
*Serkan koşuyor.* {cik}

## sahne yuzlesme_tuba
⚙ arka: A13 · figurler: peri, cengo, serkan
⚙ Tuba sette; yüzleşme telefonla, hoparlörden (form §10).

*Serkan'ın dükkânının önü. Peri telefonda, hoparlör açık. Serkan kepengin önünde.* {gir: serkan}
**PERİ [kas]:** Tuba Hanım, tekneyi siz çaldınız.
**TUBA_TEL:** Çaldık mı? Kiraladık! Karaköylü bir balıkçı geldi, "sahibiyim" dedi!
**CENGO [kas]:** Karaköylü bir balıkçı.
*Herkes Serkan'a dönüyor. Serkan koşuyor.* {cik}

## sahne kovalamaca
⚙ arka: A13 · figurler: peri, cengo
⚙ Her sonuçta aynı. Peri erotik + gülünç, felaketi balık kasası; Serkan'ı şans yakalar.

*Serkan dükkânın önünden fırlıyor, yan dükkânın simitçisinin tablasına çarpıyor. Simitler havada uçuşuyor.* {kare: K10}
**CENGO [gulen]:** *(havadaki bir simidi yakalayıp ısırarak)* Ben kestirmeden! {kare: K10}
**PERİ [sinirli]:** Kestirme nereye çıkıyor? {kare: K10}
**CENGO:** *(uzaktan)* Bilmiyorum! {kare: K10}
*Cengo kestirmeye sapıyor. Peri, Serkan'ın peşinden ara sokakta topuklularıyla koşarken bir çamaşır ipine dalıyor; beyaz bir çarşafa sarılıp hayalet gibi koşmaya devam ediyor. Pencereden bir teyze bağırıyor.* {kare: K11}
**TEYZE:** O çarşaf yeni yıkandı!
**PERİ [sinirli]:** *(çarşafın içinden)* Getireceğim!
*Peri çarşafı üstünden atıyor, koşmaya devam ediyor.*
*Serkan iskeleye doğru kaçıyor. Peri topuklularıyla ana yoldan koşuyor; ıslak rıhtımda kayıyor ve balıkçıların sabah avıyla dolu kasaların içine oturuyor. Kasa devriliyor, levrekler rıhtıma saçılıyor. Önde koşan Serkan levreklere basıyor, kayıyor, sırt üstü düşüyor.* {kare: K8, arka: A9}
*Cengo nefes nefese kestirmeden çıkıyor ve yerdeki Serkan'ın yakasına yapışıyor.* {kare: K12}
**CENGO [gulen]:** Siz düştünüz, o kaydı. Ekip işi. {set: balikli}
**PERİ [sinirli]:** *(saçından pul ayıklayarak)* Planlamıştım.
**SERKAN [normal]:** Tamam! Ben aldım. Yedek anahtar bendeydi; babam yıllar önce vermişti, unuttu. Cuma borcum var. Sete kiraladım; cumartesi geri getirecektim. {gir: serkan}
**CENGO [sinirli]:** Babana söyleyecek miydin?
**SERKAN:** Cumartesi. Tekneyle birlikte. {cik}
*Peri ayağa kalkıyor. Bir şey kıpırdıyor. Göğsünün arasına küçük bir istavrit sıkışmış. Peri kıpkırmızı, iki parmağıyla kuyruğundan çekip çıkarıyor.*
**PERİ [utanmis]:** *(istavriti havada tutarak)* Bunu kime veriyorum?
**CENGO [gulen]:** Akşam yemeği çıktı.
*Çaycı hortumu uzatıyor. Peri gözlerini kapatıp bekliyor; su saçındaki son pulları da götürüyor.* {kare: K9}
*Peri mantosunu sıkıyor. Akşama kadar üstünden hafif bir balık kokusu çıkmıyor değil.* {set: manto}

---

## ucret
⚙ Karar ekranının üstünde, ücret kesildiyse çıkan açıklama. `{anlasilan}` ve `{kesinti}` tutarla dolar.

**ZAYIF:** Anlaşılan ücret {anlasilan}. Kanıtın zayıf kaldı; Rıza Reis {kesinti} kesti.
**YANLIS:** Anlaşılan ücret {anlasilan}. Masum birini suçladın; Rıza Reis {kesinti} kesti.

## cozum
⚙ "Dosya çözüldü" ekranı (kovalamacadan sonra, karardan önce). YOL: suçluyu kanıtlayan her doğru çift, sade dille. MASUM <id>: yanlış şüphelinin neden masum olduğu.

**YOL:** Zincir anahtarla açılmış + Kiralayan Karaköy'den bir balıkçı.
**YOL:** Kiralayan Karaköy'den bir balıkçı + Serkan'ın cuma borcu.
**YOL:** Zincir anahtarla açılmış + Serkan'ın cuma borcu.
**MASUM kemal:** Kemal masumdu: o gece teknesine branda örtüyordu. Beyaz boyayı öğleden sonra sürmüştü; Nazlı'yı set ekibi boyamıştı.
**MASUM tuba:** Tuba masumdu: tekneyi "sahibiyim" diyen birinden kiralamıştı. Hırsız değil, kandırılmıştı.

## karar sete_gotur
⚙ etiket: Rıza Reis'i sete götür

**ÖNİZLEME:** Tekne bugün döner. Rıza, oğlunun yaptığını herkesin önünde öğrenir.
**SONUÇ:** Rıza Reis'i Bebek'e, sete götürdün. Çekimin ortasında tekneye çıktı, boyaya tırnağını geçirdi. Çekim durdu. Set sorumlusu kiralayanı herkesin önünde tarif etti; Rıza Reis oğlunun yaptığını kırk kişinin içinde öğrendi. Yapım, Serkan'dan kira parasını geri istedi. Tekne o akşam iskeleye döndü, beyaz.
**CENGO:** Cengo bütün çekimi bir figüranın yanında ayakta izledi. Dönüşte "Bu dizinin en iyi bölümüydü" dedi.
**DEFTER:** Rıza Reis teknesine sette kavuştu; oğlunun yaptığını herkesin önünde öğrendi.

## karar her_seyi_anlat
⚙ etiket: Rıza Reis'e her şeyi anlat

**ÖNİZLEME:** Tekne yarın döner. Baba oğul küser.
**SONUÇ:** Rıza Reis'e her şeyi anlattın: tekneyi, seti, oğlunu, cuma günkü borcu. Rıza Reis kasketini çıkardı, taktı, yine çıkardı. Ertesi sabah Nazlı iskeledeydi. Baba oğul bir hafta konuşmadı; sonra Rıza Reis borcun yarısını ödedi. Büroya bir kasa levrek geldi.
**CENGO:** Cengo levrek kasasını büronun tek buzdolabına sığdırmaya çalıştı. Sığmadı. "Bir hafta balık yiyoruz" dedi. "Maaşımdan düşmeyin."
**DEFTER:** Rıza Reis her şeyi benden duydu. Büro bir hafta balık koktu.

## karar serkanla_anlas
⚙ etiket: Serkan'la anlaş, tekneyi sessizce geri getir

**ÖNİZLEME:** Rıza'ya yalan söylersin. Tekne üç gün sonra döner; Rıza ücretten 3.000 ₺ kırar.
**SONUÇ:** Serkan'la anlaştın: çekim cuma bitecek, tekne cumartesi sabahı iskelede olacak, boyasını yapım sökecek. Rıza Reis'e "gençler almış, Bebek'te bırakmışlar, cumartesi getiriyorlar" dedin. İnanmadı, sormadı. Üç gün daha denize çıkamadı; teknesi kendiliğinden bulunduğu için ücretten üç bin lira kırdırdı.
**CENGO:** Cengo, Serkan'ın omzuna vurdu: "Cumartesi sabah. Bir dakika geç kalırsan baban da duyar, ben de."
**DEFTER:** Rıza Reis'e yalan söyledim. Tekne cumartesi döndü.

## karar susmayi_sat
⚙ etiket: Yapımcıya susmayı sat

**ÖNİZLEME:** Yapımcı sana 10.000 ₺ öder. Tekne üç gün sette kalır.
**SONUÇ:** Yapımcıyla bir "danışmanlık sözleşmesi" imzaladın. Konusu: dizinin "lüks yatının" boyanmış bir balıkçı teknesi olduğunu kimseye söylememek. Yapımcı on bin ödedi, hem de hızlı. Nazlı çekim bitene kadar sette kaldı; Rıza Reis üç gün daha denize çıkamadı. Cumartesi teknesini iskelede, beyaz buldu.
**CENGO:** Cengo yapımcının yüzünü taklit ederek on dakika güldü. Sonra pencereden boş iskeleye baktı ve gülmeyi bıraktı.
**DEFTER:** Yapımcı on bin ödedi. Rıza Reis üç gün iskelede bekledi.

---

## sahne kapanis
⚙ arka: A8 · figurler: peri, cengo
⚙ Bağın iki hâli (kural 12a, eşik +1): `bag: dusuk` / `bag: yuksek` satırları.

*Aynı akşam. Büro. İskelenin ışıkları yanmış. Cengo kapıya yürüyor.*
*Koridor. Peri anahtarı kilide sokuyor. Olmuyor. Bir daha deniyor. Olmuyor.* {arka: A5b, kare: K17}
**PERİ [sinirli]:** Bu kapı beni hiç sevmedi.
**CENGO [gulen]:** Kapı kimseyi sevmez. Kilit sever.
*Cengo geri dönüyor. Teli kilide sokuyor; bir çıt, kapı kilitleniyor.* {kare: D1}
*Teli kilitte bırakıyor. Peri'ye uzatmıyor.* {bag: dusuk}
**CENGO [normal]:** Lazım olursa. {bag: dusuk}
*Peri teli almıyor. Cengo dönünce kilitten çekip mantosunun cebine koyuyor.* {bag: dusuk}
*Teli Peri'nin avucuna koyuyor. Eli bir an orada kalıyor.* {bag: yuksek, kare: K18}
**PERİ [kas]:** Ben kilit açmam. {bag: yuksek}
**CENGO [yumusak]:** Biliyorum. Cebinizde dursun. {bag: yuksek}
*Peri teli bir süre tutuyor. Sonra mantosunun cebine koyuyor.* {bag: yuksek}
**PERİ [normal]:** Yarın kaçta geliyorsunuz?
**CENGO [kas]:** Ben pazartesileri geliyordum.
**PERİ:** Yarın gelin.
**CENGO:** Maaş?
**PERİ [kas]:** Alacağınıza yazılır.
**CENGO [gulen]:** Yazılsın.
*Cengo merdivenden iniyor. Peri bir an kapının önünde duruyor, elini cebine sokuyor; tel orada.* {kare: K7}
