---
title: Next.js font optimization
author: Trent1900
date: 2023-7-18 12:02:00 +1000
categories: [font, next.js]
tags: [font]
---

### Next Font optimization

- `next/font` includes built-in automatic self-hosting for any font file. This means you can optimally load web fonts with zero layout shift, thanks to the underlying CSS `size-adjust` property used.

> how `size-adjust` works <!-- prettier-ignore -->
{:.prompt-info}

- The size-adjust CSS property is used to control the rendering of glyphs that are replaced by alternative glyphs with specific aspect ratios. It is primarily used for optimizing the layout and preventing layout shifting caused by text content loading. When the browser encounters text content that uses custom fonts or has a fallback font with different aspect ratios, it may cause layout shifting as the text is rendered differently after the font is loaded.

- By using the size-adjust property, you can specify the aspect ratio of the fallback font to match that of the custom font. This helps the browser reserve the appropriate amount of space for the text content even before the custom font is loaded, reducing the chances of layout shifting when the custom font is applied.

```css
body {
  font-family: "CustomFont", "FallbackFont", sans-serif;
  size-adjust: 0.5; /* Adjust this value to match the aspect ratio of the "CustomFont" */
}
```

- In the above example, the size-adjust property is set to 0.5, which indicates that the fallback font has half the aspect ratio of the custom font. This helps maintain the layout consistency and reduce layout shifting when the custom font is eventually loaded.

- It's important to note that not all browsers support the size-adjust property, so it should be used with caution and tested across different browsers to ensure compatibility. Additionally, using font-display: swap; for the custom font can further mitigate layout shifting by swapping the custom font with the fallback font immediately until the custom font is fully loaded.

- Next.js's font system also allows us to conveniently use all Google Fonts with performance and privacy in mind. CSS and font files are downloaded at build time and self-hosted with the rest of our static assets. No requests are sent to Google by the browser.

- **two ways to use next font**

> the first one <!-- prettier-ignore -->
{:.prompt-tip}

```ts
// in src/utils/font
import { Syne, Roboto_Mono } from "@next/font/google";
export const fontSyne = Syne({ subsets: ["latin"] });
export const mono = Roboto_Mono({ subsets: ["latin"] });
```

> when subset property is used, the font will automatically be preloaded according to next.js's mechanism, subset means smaller size, thus less likely to cause a layout shifting. <!-- prettier-ignore -->
{:.prompt-tip}

- then people can import `fontSyne` and use it straight away.

```ts
import { fontSyne } from "@/pages/_app";
<h1 className={`${fontSyne.className} otherCSSLike:text-red-500`}>
  hello world
</h1>;
```

> the second one (with tailwind)<!-- prettier-ignore -->
{:.prompt-tip}

- idea: we can register this custom font as our custom font with tailwind config through a `css variable`.

```ts
import { Allura } from "next/font/google";

const allura = Allura({
  subsets: ["latin"],
  variable: "--font-allura",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${Allura.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
```

<p style="color:red">please note that the custom font variable has to be passed to a html tag, preferably the one in the very high level near the root tag, in the example we pass the class name `inter.variable` to `main` element.</p>

- later, we need to add the CSS variable to our Tailwind CSS config:

```ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        allura: ["var(--font-allura)"],
      },
    },
  },
  plugins: [],
};
```

- finally, in other part of the project, we can use the custom font that we registered in our tailwind css.

```ts
<button className="font-allura" {...otherProps} onClick={onClick}>
  button
</button>
```

- font-allura is registered to our tailwind css config and can be used like other tailwind css.
