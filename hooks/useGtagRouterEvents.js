import { useEffect } from "react";
import { useRouter } from "next/router";

import { pageview, GA_TRACKING_ID } from "utils/gtag";

export const useGtagRouterEvents = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => pageview(url);
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  return {
    GA_TRACKING_ID,
  };
};
