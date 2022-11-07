import '@fontsource/noto-sans';
import '@fontsource/noto-sans-jp';
import '@fontsource/noto-serif';
import '@fontsource/noto-serif-jp';
import '@fontsource/noto-sans-mono';

import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
