import "@/styles/globals.css";
import clsx from "clsx";
import type { AppProps } from "next/app";
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {

  return <div className={clsx(inter.className, 'text-slate-900') }>
            <Component {...pageProps} />
          </div>
}
