import React from 'react';
import { container, title, slogan } from './styles.css';

export default function Home() {
  return (
    <div className={container}>
      <p className={title}>Duckr</p>
      <p className={slogan}>The real time, cloud based bullshit subtitle</p>
    </div>
  );
}
