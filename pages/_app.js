import { WindowSizeProvider } from '@/utils/windowSize/windowSizeContext';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <WindowSizeProvider>
      <Component {...pageProps} />
    </WindowSizeProvider>
  );
}
