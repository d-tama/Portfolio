import Script from "next/script";

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="noindex" />
        <title>Portfolio</title>
        <link rel="stylesheet" href="/common/css/reset.css" />
        <link rel="stylesheet" href="/common/css/common.css" />
        <link rel="stylesheet" href="/common/css/style.css" />
        <link rel="stylesheet" href="/common/css/tablet_top.css" />
        <link rel="stylesheet" href="/common/css/sp_top.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&family=Noto+Sans+JP:wght@400;700&family=Roboto:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/common/image/favicon.ico" />
        <link rel="apple-touch-icon" href="/common/image/favicon.ico" sizes="180x180" />
        <Script src="/common/js/howler.min.js" strategy="beforeInteractive" />
      </head>
      <body id="content" className="loading-scroll">
        {children}
      </body>
    </html>
  );
}
