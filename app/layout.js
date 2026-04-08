import './globals.css'

import Providers from '@/components/providers'

export const metadata = {
  title: 'ChatBotKit Analytics Dashboard',
  description: 'Analytics and reporting for your ChatBotKit account',
}

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
