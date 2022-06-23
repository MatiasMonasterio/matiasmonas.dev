import { useEffect } from "react";
import { useRouter } from "next/router";

import { GA_TRACKING_ID } from "src/constants/env";
import { pageview } from "src/utils/gtag";

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
