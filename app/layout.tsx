import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'rentarenta.id',
  description: 'RentaRenta - Your One-Stop Rental Solution',
  generator: 'RentaRenta',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
