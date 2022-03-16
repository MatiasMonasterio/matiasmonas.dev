// Test on: https://cards-dev.twitter.com/validator
// Test on: https://developers.facebook.com/tools/debug/
// Test on: https://www.linkedin.com/post-inspector/inspect/

// Use meta seo inspector browser extension
// https://chrome.google.com/webstore/detail/meta-seo-inspector/ibkclpciafdglkjkcibmohobjkcfkaef

import NextHead from "next/head";
import PropTypes from "prop-types";

export const Head = ({ title, description, image }) => {
  const metaImage = image ? image : "static/images/banner.png";

  return (
    <NextHead>
      <title>{title}</title>
      <link rel="icon" type="image/x-icon" href="favicon.ico" />

      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />

      <meta name="description" content={description} />
      <meta name="image" content={metaImage} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:card" content="twitterCard" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:image:alt" content={title} />

      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={metaImage} />
      <meta name="og:image:secure_url" content={metaImage} />
      <meta name="og:image:alt" content={title} />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="720" />
    </NextHead>
  );
};

Head.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
};
