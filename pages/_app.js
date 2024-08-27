import { WindowSizeProvider } from '@/utils/windowSize/windowSizeContext';
import '../styles/globals.css';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <WindowSizeProvider>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){
              if(${process.env.NODE_ENV !== 'production'}) {
                return;
              }
              dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', '${
              process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID
            }', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Component {...pageProps} />
    </WindowSizeProvider>
  );
}
