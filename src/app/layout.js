import NextUIContext from "@/contexts/NextUIContext";
import "./globals.css";
import { globalFont } from "@/utils/fonts/globalFont";
import { getServerSession } from "next-auth";
import { SessionContext } from "@/contexts/SessionContext";
import { authOptions } from "@/config/auth";
import AuthContext from "@/contexts/AuthContext";

export const metadata = {
  title: "Dylan",
  description: "Dylan, personalized AI assistant for your coding project",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <html className={`${globalFont.className}`} lang="en">
      <SessionContext session={session}>
        <body
          suppressHydrationWarning={true}
          className="flex flex-col overflow-x-hidden relative "
        >
          {/* page.js */}
          <main className="grow dark bg-background text-foreground">
            <NextUIContext>
              <AuthContext>{children}</AuthContext>
            </NextUIContext>
          </main>

          {/* footer */}
        </body>
      </SessionContext>
    </html>
  );
}
