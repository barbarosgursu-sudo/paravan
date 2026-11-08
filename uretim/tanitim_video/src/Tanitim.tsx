import React from 'react';
import {
  AbsoluteFill, Audio, Img, Sequence, interpolate, random, staticFile,
  useCurrentFrame, Easing, delayRender, continueRender,
} from 'remotion';
import {FONT_CSS} from './fontlar';

const BASLIK = 'Shrikhand';
const METIN = 'Nunito';
const Fontlar: React.FC = () => {
  const [h] = React.useState(() => delayRender('fontlar'));
  React.useEffect(() => {
    Promise.all([`80px ${BASLIK}`, `800 50px ${METIN}`].map((f) => document.fonts.load(f, 'İşğüçöÖ')))
      .then(() => continueRender(h));
  }, [h]);
  return <style>{FONT_CSS.split('__F__/').join(staticFile('').replace(/\/$/, '') + '/')}</style>;
};

// Zaman çizelgesi (30 fps). Konuşma sahnesinin içindeki replik başlangıçları sahneye göredir.
export const FPS = 30;
const S1 = {from: 0, dur: 150};     // Susam, akşam — başlık
const S2 = {from: 135, dur: 200};   // büro — Peri ve Cengo
const S3 = {from: 320, dur: 110};   // dört kişi
const S4 = {from: 415, dur: 115};   // afiş
export const TOPLAM = S4.from + S4.dur;
const PERI_AT = 22, CENGO_AT = 102; // S2 içinde
const PERI_SURE = 63, CENGO_SURE = 73;

const kolay = Easing.bezier(0.33, 0, 0.2, 1);
const sil = (f: number, dur: number, gir = 15, cik = 15) =>
  interpolate(f, [0, gir, dur - cik, dur], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

// Kamera: arka plan katmanını yavaşça yaklaştırıp kaydırır.
const Arka: React.FC<{src: string; dur: number; z0: number; z1: number; x0: number; x1: number; y0?: number; y1?: number}> =
  ({src, dur, z0, z1, x0, x1, y0 = 0, y1 = 0}) => {
    const f = useCurrentFrame();
    const t = interpolate(f, [0, dur], [0, 1], {easing: kolay, extrapolateRight: 'clamp'});
    const z = z0 + (z1 - z0) * t, x = x0 + (x1 - x0) * t, y = y0 + (y1 - y0) * t;
    return <Img src={staticFile(src)} style={{position: 'absolute', width: '100%', height: '100%', objectFit: 'cover',
      transform: `translate(${x}px,${y}px) scale(${z})`}} />;
  };

// Figür: alttan tutturulur, katman hızında kayar, nefes alır (çok hafif dikey ölçek).
const Figur: React.FC<{src: string; h: number; x: number; kay: number; dur: number; faz?: number; ayna?: boolean; gir?: number; giris?: number; alt?: number}> =
  ({src, h, x, kay, dur, faz = 0, ayna = false, gir = 0, giris = 0, alt = -40}) => {
    const f = useCurrentFrame();
    const t = interpolate(f, [0, dur], [0, 1], {easing: kolay, extrapolateRight: 'clamp'});
    const nefes = 1 + 0.007 * Math.sin((f + faz) / 22);
    const g = interpolate(f, [gir, gir + 18], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: kolay});
    return <Img src={staticFile(src)} style={{position: 'absolute', bottom: alt, left: x + kay * t + giris * (1 - g), height: h,
      opacity: g, transformOrigin: '50% 100%', transform: `scaleX(${ayna ? -1 : 1}) scaleY(${nefes})`}} />;
  };

// Konuşan figür: ifade değişince iki kare çapraz geçer.
const IkiYuz: React.FC<{a: string; b: string; at: number} & Omit<React.ComponentProps<typeof Figur>, 'src'>> = ({a, b, at, ...p}) => {
  const f = useCurrentFrame();
  const o = interpolate(f, [at, at + 6], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return <AbsoluteFill>
    <AbsoluteFill style={{opacity: 1 - o}}><Figur src={a} {...p} /></AbsoluteFill>
    <AbsoluteFill style={{opacity: o}}><Figur src={b} {...p} gir={0} giris={0} /></AbsoluteFill>
  </AbsoluteFill>;
};

// Havada süzülen toz (lamba ışığında).
const Toz: React.FC<{n: number; tohum: string}> = ({n, tohum}) => {
  const f = useCurrentFrame();
  return <AbsoluteFill style={{pointerEvents: 'none', mixBlendMode: 'screen'}}>
    {Array.from({length: n}).map((_, i) => {
      const r = (k: string) => random(`${tohum}${i}${k}`);
      const x = r('x') * 1080 + Math.sin((f + r('p') * 300) / (40 + r('w') * 40)) * 30;
      const y = ((r('y') * 1920 - f * (0.25 + r('v') * 0.6)) % 1920 + 1920) % 1920;
      const s = 2 + r('s') * 5;
      const o = 0.25 + 0.5 * (0.5 + 0.5 * Math.sin((f + r('t') * 200) / 15));
      return <div key={i} style={{position: 'absolute', left: x, top: y, width: s, height: s, borderRadius: '50%',
        background: 'rgba(255,214,150,1)', opacity: o * 0.7, filter: `blur(${s > 5 ? 2 : 0.6}px)`}} />;
    })}
  </AbsoluteFill>;
};

// Lamba ışığı: düşük frekanslı titreme.
const Lamba: React.FC<{x: number; y: number; r: number}> = ({x, y, r}) => {
  const f = useCurrentFrame();
  const tit = 0.75 + 0.12 * Math.sin(f / 7) + 0.08 * Math.sin(f / 2.3 + 1) + (random(`l${Math.floor(f / 3)}`) - 0.5) * 0.08;
  return <div style={{position: 'absolute', left: x - r, top: y - r, width: 2 * r, height: 2 * r, borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255,190,110,0.55) 0%, rgba(255,160,80,0.18) 40%, rgba(0,0,0,0) 70%)',
    mixBlendMode: 'screen', opacity: tit}} />;
};

// Noir dokusu: kenar kararması + kare kare değişen film greni.
const Doku: React.FC = () => {
  const f = useCurrentFrame();
  return <AbsoluteFill style={{pointerEvents: 'none'}}>
    <AbsoluteFill style={{background: 'radial-gradient(ellipse 75% 60% at 50% 45%, rgba(0,0,0,0) 55%, rgba(10,4,0,0.65) 100%)'}} />
    <svg width="1080" height="1920" style={{position: 'absolute', opacity: 0.09, mixBlendMode: 'overlay'}}>
      <filter id="g"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed={f % 60} /></filter>
      <rect width="100%" height="100%" filter="url(#g)" />
    </svg>
  </AbsoluteFill>;
};

const Altyazi: React.FC<{kim: string; metin: string; dur: number}> = ({kim, metin, dur}) => {
  const f = useCurrentFrame();
  const o = sil(f, dur, 5, 6);
  return <div style={{position: 'absolute', left: 60, right: 60, bottom: 170, opacity: o,
    transform: `translateY(${(1 - o) * 14}px)`, background: 'rgba(18,10,6,0.82)', borderRadius: 26,
    border: '2px solid rgba(232,190,120,0.55)', padding: '26px 34px', boxShadow: '0 10px 40px rgba(0,0,0,.5)'}}>
    <div style={{fontFamily: BASLIK, color: '#e8be78', fontSize: 38, marginBottom: 6}}>{kim}</div>
    <div style={{fontFamily: METIN, fontWeight: 700, color: '#fff3e2', fontSize: 46, lineHeight: 1.25}}>{metin}</div>
  </div>;
};

const Yazi: React.FC<{children: React.ReactNode; dur: number; top: number; boy: number; font?: string; renk?: string; gecik?: number}> =
  ({children, dur, top, boy, font = BASLIK, renk = '#fff3e2', gecik = 0}) => {
    const f = useCurrentFrame() - gecik;
    const o = sil(f, dur - gecik, 18, 14);
    return <div style={{position: 'absolute', top, left: 40, right: 40, textAlign: 'center', fontFamily: font, fontSize: boy,
      color: renk, opacity: o, letterSpacing: font === METIN ? 6 : 1, fontWeight: 800,
      transform: `translateY(${(1 - o) * 20}px)`, textShadow: '0 4px 24px rgba(0,0,0,.85)'}}>{children}</div>;
  };

const Sahne: React.FC<{from: number; dur: number; children: React.ReactNode}> = ({from, dur, children}) => (
  <Sequence from={from} durationInFrames={dur}>
    <Gecis dur={dur}>{children}</Gecis>
  </Sequence>
);
const Gecis: React.FC<{dur: number; children: React.ReactNode}> = ({dur, children}) => {
  const f = useCurrentFrame();
  return <AbsoluteFill style={{opacity: sil(f, dur, 15, 15)}}>{children}</AbsoluteFill>;
};

export const Tanitim: React.FC = () => (
  <AbsoluteFill style={{background: '#000'}}>
    <Fontlar />
    {/* 1 — Susam, salı akşamı: boş dükkân, lamba ışığı, toz */}
    <Sahne {...S1}>
      <Arka src="arka_a23.webp" dur={S1.dur} z0={1.04} z1={1.16} x0={30} x1={-50} y0={10} y1={-20} />
      <Lamba x={655} y={330} r={260} /><Lamba x={905} y={300} r={220} />
      <Toz n={55} tohum="s1" />
      <Yazi dur={S1.dur} top={1260} boy={46} font={METIN} renk="#e8be78" gecik={20}>VAKA 3</Yazi>
      <Yazi dur={S1.dur} top={1330} boy={120} gecik={28}>Simit Soygunu</Yazi>
    </Sahne>

    {/* 2 — büro, akşam: Peri ile Cengo konuşuyor */}
    <Sahne {...S2}>
      <Arka src="arka_a8_buro_aksam.webp" dur={S2.dur} z0={1.1} z1={1.17} x0={20} x1={-20} />
      <Toz n={30} tohum="s2" />
      <IkiYuz a="cengo_haki_normal.webp" b="cengo_haki_gulen.webp" at={CENGO_AT} h={1300} x={-190} kay={25} dur={S2.dur}
        ayna faz={10} gir={4} giris={-60} />
      <IkiYuz a="peri_trenckot_normal.webp" b="peri_trenckot_kas.webp" at={PERI_AT - 4} h={1360} x={470} kay={-35} dur={S2.dur}
        faz={40} gir={10} giris={80} />
      <Sequence from={PERI_AT} durationInFrames={PERI_SURE + 10}>
        <Audio src={staticFile('peri.mp3')} />
        <Altyazi kim="PERİ" metin="Bu şehirde size borçlu olmayan var mı?" dur={PERI_SURE + 10} />
      </Sequence>
      <Sequence from={CENGO_AT} durationInFrames={CENGO_SURE + 18}>
        <Audio src={staticFile('cengo.mp3')} />
        <Altyazi kim="CENGO" metin="Ben de herkese borçluyum. Ödeşiyoruz." dur={CENGO_SURE + 18} />
      </Sequence>
    </Sahne>

    {/* 3 — dükkânın dört kişisi; katmanlar farklı hızla kayar (derinlik) */}
    <Sahne {...S3}>
      <Arka src="arka_a23.webp" dur={S3.dur} z0={1.22} z1={1.3} x0={-60} x1={-110} />
      <Lamba x={600} y={250} r={260} />
      <AbsoluteFill style={{filter: 'brightness(0.85) blur(1.5px)', WebkitMaskImage: 'linear-gradient(to bottom, #000 74%, transparent 86%)'}}>
        <Figur src="figur_nadide_normal.webp" h={820} alt={250} x={-150} kay={-20} dur={S3.dur} faz={0} gir={2} />
        <Figur src="figur_gizem_normal.webp" h={760} alt={250} x={570} kay={20} dur={S3.dur} faz={30} gir={14} />
      </AbsoluteFill>
      <Figur src="figur_ferruh_normal.webp" h={1040} x={-30} kay={-40} dur={S3.dur} faz={15} gir={6} />
      <Figur src="figur_kenan_normal.webp" h={1040} x={290} kay={40} dur={S3.dur} faz={50} gir={10} />
      <Toz n={25} tohum="s3" />
      <Yazi dur={S3.dur} top={210} boy={64} gecik={8}>Arka cam kırık. Kasa boş.</Yazi>
    </Sahne>

    {/* 4 — afiş ve davet */}
    <Sahne {...S4}>
      <Arka src="kart_v3.webp" dur={S4.dur} z0={1.0} z1={1.08} x0={0} x1={0} y0={0} y1={-30} />
      <Toz n={20} tohum="s4" />
      <AbsoluteFill style={{background: 'linear-gradient(to top, rgba(10,5,2,.92) 0%, rgba(10,5,2,.6) 22%, rgba(0,0,0,0) 40%)'}} />
      <Yazi dur={S4.dur} top={1420} boy={70} gecik={6}>Paravan Dedektiflik</Yazi>
      <Yazi dur={S4.dur} top={1540} boy={46} font={METIN} renk="#e8be78" gecik={22}>Sen olsan ne yapardın?</Yazi>
    </Sahne>

    <Doku />
    <Audio src={staticFile('ortam.wav')} volume={0.9} />
    <Sequence from={S4.from}><Audio src={staticFile('vurus.wav')} volume={0.7} /></Sequence>
    <Sequence from={0}><Audio src={staticFile('vurus.wav')} volume={0.4} /></Sequence>
  </AbsoluteFill>
);
