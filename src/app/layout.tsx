import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="ja">
        <body>
          <div className="relative">
            <div className="absolute top-4 right-4 z-50 flex gap-2">
              <SignedOut>
                <SignInButton>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300">
                    ログイン
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <div className="flex items-center gap-4">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </SignedIn>
            </div>
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}

export const runtime = 'edge';