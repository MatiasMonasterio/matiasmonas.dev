import { AppLayout } from "layouts/AppLayout";

function App({ Component, pageProps }) {
  return (
    <>
      <AppLayout {...pageProps}>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}

export default App;
