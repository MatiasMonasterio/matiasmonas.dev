import Script from "next/script";

import AppLayout from "layouts";
import { useGtagRouterEvents } from "hooks";

function App({ Component, pageProps }) {
  const { GA_TRACKING_ID } = useGtagRouterEvents();

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />

      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <AppLayout {...pageProps}>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}

export default App;
