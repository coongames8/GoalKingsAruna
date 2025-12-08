// AppHelmet.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AppHelmet({ title, location }) {
  const canonicalUrl = `${location.origin}${location.pathname}`;

  return (
    <Helmet>
      <meta charSet="utf-8" />

      <title>
        {title} | Goal Kings - Football Insights, Analysis and News
      </title>

      <link rel="canonical" href={canonicalUrl} />

      <meta
        name="description"
        content="Get the latest football insights, match analysis, live scores, results and fixtures for all major leagues and competitions worldwide, including the Premier League, Championship and more."
      />

      {/* Open Graph tags for social media */}
      <meta property="og:title" content={`${title} | Goal Kings`} />

      <meta
        property="og:description"
        content="Access up-to-date football insights, match analysis, live scores, results and fixtures for leagues and competitions across the world."
      />

      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/logo512.png" />
    </Helmet>
  );
}
