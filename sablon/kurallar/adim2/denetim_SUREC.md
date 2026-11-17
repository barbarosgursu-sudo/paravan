# Denetim — SUREC

Kapsam: 42 kural, 133 kaynak satır (konu.tsv'deki SUREC satırlarının hepsi haritada; YOK/ESKIDI eşlenmiş satır yok). 3 çelişki kaydı.
**Sorun sayısı: 4** (1 anlam, 1 çelişki, 1 işaret eksiği, 1 kapsam notu).

### SUREC-16 — anlam
Ne sorun: Kaynak 763'te "Elle bakılanlar: espri, çekicilik seviyesi, **görsel kalitesi**" genel bir listedir; "(Onay 2'de sahibi bakar)" yalnız
arkasındaki "Girişte: …" maddelerine bağlıdır. Yeni metin bu listenin tamamını Onay 2'ye (görselsiz test) koymuş; görselsiz testte "görsel
kalitesi"ne bakılamaz, kural kendi içinde tutarsız oldu. Kaynak no: 763 (681 ile birlikte).
Önerilen düzeltme: "Elle (makinenin yapamadığı) bakılanlar: espri, çekicilik seviyesi, görsel kalitesi (görsel kalitesi Onay 3'te)." ayrı cümle;
Onay 2'ye yalnız giriş maddeleri ("suçlu dolaylı yoldan ele veriliyor mu, çekicilik anı ve espri, giriş ilk gidilecek yer belli olarak bitiyor mu")
bağlansın.

### SUREC-4 — çelişki
Ne sorun: Kuralda yan yana "Barbaros vaka üretmez" + "Oğuz Bey … resim onayında son karar onundur" (2795, 1265) ile "döngü/Codex Oğuz Bey'in ya da
Barbaros'un bilgisayarında" + "'Sahibi' = o oturumda üretimi yürüten kişi (Oğuz Bey ya da Barbaros)" (1035, 1036) duruyor. 1035'teki "öncekinin
yerine" yalnız üretimin YERİNİ (hangi bilgisayar, Barbaros'un Codex kullanması) açıkça değiştiriyor; Barbaros'un resim üretimini yürütüp
yürütemeyeceği ve resim onayında son sözün kimde olduğu (Oğuz Bey mi, oturumu yürüten mi) açıkça çözülmemiş, ama kural bunu çelişki
kaydı açmadan birleştirmiş. Kaynak no: 2795, 1265, 1035, 1036, 2797.
Önerilen düzeltme: CELISKI-SUREC-4 aç — "Barbaros vaka üretmez (14 Kas) ile 'üretimi Barbaros da yürütebilir, o zaman sahibi odur' (14 Kas gece)
birlikte mi geçerli; resim onayında son söz Oğuz Bey'de mi, oturumu yürütende mi?" Kuralda iki cümleye bu çelişkiye atıf ekle.

### SUREC-22 — çelişki (işaret eksik)
Ne sorun: Haritada 712 "SUREC-22,CELISKI-3" diye işaretli ve kural "her sohbette sahibi temel görseli tek gönderir… sohbete doğrudan yapıştırır,
'Sohbet N'e başlıyorum'" diyor (web sohbeti düzeni), ama SUREC-20/21/32'nin aksine metinde CELISKI-SUREC-3'e atıf yok; okuyan bunu Codex
düzeninde de geçerli sanır. Kaynak no: 712.
Önerilen düzeltme: SUREC-22'nin sonuna "(Codex düzeniyle ilişkisi: CELISKI-SUREC-3.)" ekle.

### SUREC-41 — kapsam (YOK/ESKIDI adayı)
Ne sorun: Kaynak 2772 tek seferlik bir iş emri (Vaka 6'nın 13 repliği); haritanın kendi notu ve kök CLAUDE.md ("Vaka 6 yeni düzende TAMAM")
işin bittiğini söylüyor. Kural olarak saklanması, genel olmayan bir görevi kural kitabına sokuyor. Kalıcı olan tek parça zaten başka yerde:
"Cengo kanıt satırı yalnız o kanıtı anar (kural 22c)" ve "kasa sözü geçmez". Kaynak no: 2772.
Önerilen düzeltme: 2772'yi ESKIDI (tamamlandı) say, SUREC-41'i kaldır; "kasa sözü geçmez / Cengo satırı kendi ağzından" kalıcı kuralsa ilgili
konunun (KAR/TON) kuralında olduğu denetlensin.

## Bakılıp sorun bulunmayanlar (kısa)
- SUREC-1–3, 5–15, 17–21, 23–40, 42: kaynaklarla anlam, sayı, eşik, komut ve tarih düzeyinde örtüşüyor; uydurma yok. Küçük genellemeler
  (SUREC-8 "bütün vakaların verisi aynı dosyada", SUREC-30 "Vaka 4'ten beri saat sonuna kadar", SUREC-22 "Vaka 2 numaraları") kaynakların
  doğal okumasıyla uyumlu, sorun sayılmadı.
- CELISKI-SUREC-1/2/3: kurallarda iki taraf da korunmuş ve atıfla işaretli, çözülüp birleştirilmemiş (SUREC-7 "yalnız main" yazıyor ama
  2555'i çelişki olarak anıyor — kök CLAUDE.md'nin "asla" sözü açık iptal sayılmadığı için bu doğru).
