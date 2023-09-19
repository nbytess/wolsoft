import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Wolsoft - Usługi informatyczne',
  description: 'Witamy na stronie firmy Wolsoft. Zajmujemy się obsługą informatyczną firm na terenie Wolsztyna i okolic. Prosimy zapoznać się z naszą ofertą.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
