import Head from 'next/head';
import React, { FC } from 'react';
import { CMSImage } from '~/types/Models/CMSImage';
import { CMSSeo } from '~/types/Models/CMSSeo';

export interface MetaProps extends Partial<CMSSeo> {
  title?: string;
  description?: string;
  keywords?: string;
  shareImage?: string | CMSImage;
  css?: string[];
  images?: string[];
}

const Meta: FC<MetaProps> = ({ title, description, keywords, css, images }) => {
  const metaTitle = title ? `${title} | Maxilana` : 'Maxilana | Casa de empeño';
  // @ts-ignore
  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={description || 'Maxilana casa de empeño y prestamos'} />
      <meta httpEquiv="Accept-CH" content="DPR,Width,Viewport-Width" />
      <meta
        name="keywords"
        content={keywords || 'empeño, empeno, facil empeño, prestamos, maxilana, joyeria, remates'}
      />
      <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/manifest.json" />
      <meta name="msapplication-TileColor" content="#005198" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#005198" />
      {images?.map?.((src) => {
        // @ts-ignore
        return <link rel="preload" as="image" imageSrcSet={src} imageSizes="100vw" key={src} />;
      })}
      {css?.map?.((href) => (
        <link href={href} as="style" rel="preload" key={href} />
      ))}
      {css?.map?.((href) => (
        <link
          href={href}
          type="text/css"
          rel="stylesheet"
          key={href}
          onLoad={function onLoad() {
            //@ts-ignore
            this.media = 'all';
          }}
        />
      ))}
    </Head>
  );
};

export default Meta;
