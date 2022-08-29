import Head from 'next/head';
import React from 'react';

export default function Seo({
  description = '',
  author = 'Giovana Furlan',
  meta,
  title = 'Portfólio',
}: any) {
  const metaData = [
    { name: `description`, content: description, },
    { property: `og:title`, content: title, },
    { property: `og:description`, content: description, },
    { property: `og:type`, content: `website`, },
    { name: `twitter:card`, content: `summary`, },
    { name: `twitter:creator`, content: author, },
    { name: `twitter:title`, content: title, },
    { name: `twitter:description`, content: description, },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

Seo.defaultProps = {
  lang: `pt-br`,
  meta: [],
  description: ``,
};
