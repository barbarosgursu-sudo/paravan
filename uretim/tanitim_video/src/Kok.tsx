import React from 'react';
import {Composition} from 'remotion';
import {Tanitim, TOPLAM, FPS} from './Tanitim';
export const Kok: React.FC = () => (
  <Composition id="Tanitim" component={Tanitim} durationInFrames={TOPLAM} fps={FPS} width={1080} height={1920} />
);
