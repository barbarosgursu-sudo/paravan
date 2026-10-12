# Paravan gece üretimi: Forge API'sine iş listesindeki promptları sırayla gönderir, görselleri kaydeder.
# Forge "--api" ile açık olmalı. Yalnız Python standart kütüphanesi; kurulum gerekmez.
# Kullanım:  python gece.py is_listesi.json            (hemen başlar)
#            python gece.py is_listesi.json --saat 17:15  (o saate kadar bekler)
import base64, datetime, json, os, sys, time, urllib.request

FORGE = "http://127.0.0.1:7860"
CIKTI = r"C:\lora\gece"

SABIT = {  # lora_plani.md → "Sabit Peri ayarı"
    "steps": 6, "cfg_scale": 2, "sampler_name": "DPM++ SDE", "scheduler": "Karras",
    "width": 832, "height": 1216, "batch_size": 1,
    "override_settings": {"sd_model_checkpoint": "dreamshaperXL_lightningDPMSDE"},
}
STIL = "painted illustration, semi-realistic graphic novel style"
KARAKTER = {
    "peri": {"bas": "<lora:prvperi_e10:1.0> prvperi, " + STIL + ", beautiful woman, high cheekbones, slim face, sharp jawline, bright eyes",
             "son": "nude nail polish",
             "negatif": "wide face, round face, double chin, heavy eyelids, tired eyes, old, wrinkles"},
}
EL_NEGATIF = "deformed hands, fused fingers, extra fingers, missing fingers, red nails"

def adetailer(el):
    sekmeler = [{"ad_model": "face_yolov8n.pt"}]
    if el:
        sekmeler.append({"ad_model": "hand_yolov8n.pt",
                         "ad_prompt": "beautiful hands, five fingers, natural nails, nude nail polish",
                         "ad_negative_prompt": "fused fingers, extra fingers, deformed hands, blob"})
    return {"ADetailer": {"args": [True, False] + sekmeler}}

def istek(yol, veri=None):
    r = urllib.request.Request(FORGE + yol, data=json.dumps(veri).encode() if veri else None,
                               headers={"Content-Type": "application/json"})
    with urllib.request.urlopen(r, timeout=3600) as y:
        return json.load(y)

def uret(is_, klasor):
    k = KARAKTER[is_["karakter"]]
    portre = is_.get("portre", False)
    el = is_.get("el", not portre)
    veri = dict(SABIT, n_iter=is_.get("adet", 1),
                prompt=", ".join([k["bas"], is_["prompt"], k["son"]]),
                negative_prompt=", ".join([k["negatif"]] + ([EL_NEGATIF] if el else [])),
                alwayson_scripts=adetailer(el))
    if portre:
        veri.update(width=1024, height=1024)
    t = time.time()
    sonuc = istek("/sdapi/v1/txt2img", veri)
    for i, b64 in enumerate(sonuc["images"][:veri["n_iter"]]):
        yol = os.path.join(klasor, "%s_%d.png" % (is_["ad"], i + 1))
        with open(yol, "wb") as f:
            f.write(base64.b64decode(b64))
    print("  %s: %d görsel, %.1f dk" % (is_["ad"], veri["n_iter"], (time.time() - t) / 60), flush=True)

def main():
    liste = json.load(open(sys.argv[1], encoding="utf-8"))
    if "--saat" in sys.argv:
        hedef = datetime.datetime.combine(datetime.date.today(),
                                          datetime.time.fromisoformat(sys.argv[sys.argv.index("--saat") + 1]))
        print("Bekleniyor:", hedef.strftime("%H:%M"), flush=True)
        while datetime.datetime.now() < hedef:
            time.sleep(20)
    try:
        istek("/sdapi/v1/options")
    except Exception as e:
        sys.exit("Forge'a ulaşılamadı (açık mı, --api ile mi başladı?): %s" % e)
    klasor = os.path.join(CIKTI, datetime.datetime.now().strftime("%Y%m%d_%H%M"))
    os.makedirs(klasor, exist_ok=True)
    print("Başladı:", datetime.datetime.now().strftime("%H:%M"), "→", klasor, flush=True)
    for is_ in liste:
        try:
            uret(is_, klasor)
        except Exception as e:
            print("  %s: HATA %s" % (is_["ad"], e), flush=True)
    print("Bitti:", datetime.datetime.now().strftime("%H:%M"), flush=True)

main()
