import NextAuth from "next-auth";
import SteamProvider from "next-auth-steam";
import type { NextRequest } from "next/server";
import { env } from "~/env";
import { authOptions } from "~/server/auth";

async function handler(
  req: NextRequest,
  ctx: { params: { nextauth: string[] } },
) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return NextAuth(req, ctx, {
    ...authOptions,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    providers: [
      ...authOptions.providers,
      SteamProvider(req, {
        clientSecret: env.STEAM_SECRET,
        callbackUrl: "http://localhost:3000/api/auth/callback",
      }),
    ],
  });
}

export { handler as GET, handler as POST };
