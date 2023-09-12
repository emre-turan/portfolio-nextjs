import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script type="text/javascript">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "ity88uiyn1");
          `}
        </script>
      </Head>
      <body className="bg-jelly-bean-50 text-jelly-bean-950 dark:bg-jelly-bean-950 dark:text-jelly-bean-50">
        <Main />
        <NextScript />
        <Script src="https://www.google.com/recaptcha/api.js" async defer />
      </body>
    </Html>
  );
}
