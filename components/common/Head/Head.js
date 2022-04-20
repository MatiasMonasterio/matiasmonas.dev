// Test on: https://cards-dev.twitter.com/validator
// Test on: https://developers.facebook.com/tools/debug/
// Test on: https://www.linkedin.com/post-inspector/inspect/

// Use meta seo inspector browser extension
// https://chrome.google.com/webstore/detail/meta-seo-inspector/ibkclpciafdglkjkcibmohobjkcfkaef

import NextHead from "next/head";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const BASE_URL = "https://matiasmonasdev.vercel.app";
const LOCAL_BANNER = `${BASE_URL}/static/images/banner.png`;

export default function Head({ title, description, image, type = "website" }) {
  const router = useRouter();
  const metaImage = image ? image : LOCAL_BANNER;

  return (
    <NextHead>
      <title>{title}</title>

      <link rel="icon" type="image/x-icon" href="favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />

      <meta charSet="utf-8" />
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta name="image" content={metaImage} />
      <link rel="canonical" href={`${BASE_URL}p${router.asPath}`} />

      {/* TWITTER */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@MatiasMonas" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:image:alt" content={title} />

      {/* FACEBOOK */}
      <meta property="og:image:secure_url" content={metaImage} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Matias M. Monasterio" />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={`${BASE_URL}${router.asPath}`} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="720" />

      {/* LINKEDIN */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:description" content={description} />
    </NextHead>
  );
}

Head.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
};
