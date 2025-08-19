import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PornPump.xyz - Next-Gen Adult Entertainment Platform',
  description: 'Revolutionary Web3 platform combining adult content creators autonomy with innovative token economics. Creators own their content, fans own their support.',
  keywords: 'Web3, adult content, creators, tokenization, decentralized, blockchain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
