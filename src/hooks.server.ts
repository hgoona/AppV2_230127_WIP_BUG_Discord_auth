import { redirect, type Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";

import { SvelteKitAuth } from "@auth/sveltekit"
import Discord from "@auth/core/providers/discord"
import { Email } from "@auth/core/providers/email";
import GitHub from "@auth/core/providers/github"
// import Apple from "@auth/core/providers/apple"
// import Google from "@auth/core/providers/google"

// import Twitter from "@auth/core/providers/twitter" // OAuth1.0

import { SurrealDBAdapter } from "$lib/adapters/surrealdb"
import { clientPromise } from "$lib/surrealdbConfig";

import {
  VITE_AUTH_SECRET,

  VITE_EMAIL_SERVER,
  VITE_EMAIL_FROM,

  VITE_DISCORD_CLIENT_ID,
  VITE_DISCORD_CLIENT_SECRET,

  VITE_GITHUB_ID,
  VITE_GITHUB_SECRET,

  // VITE_APPLE_ID
  // VITE_APPLE_SECRET

  // VITE_GOOGLE_ID
  // VITE_GOOGLE_SECRET

} from "$env/static/private"


// async function authorization({ event, resolve }) {
const authorization: Handle = async ({ event, resolve }) => {
  // Protect any routes under /protected
  // ROUTES
  // PROTECTED
  if (event.url.pathname.startsWith('/protected')) {
    const session = await event.locals.getSession();
    if (!session) {
      throw redirect(303, '/auth2');
    }
  }
  // ADMIN
  // if (event.url.pathname.startsWith('/protected/admin')) {
  //   const session = await event.locals.getSession();
  //   if (!session?.user.) { // TODO check Role: Admin
  //     throw redirect(303, '/auth');
  //   }
  // }

  // If the request is still here, just proceed as normally
  const result = await resolve(event, {
    transformPageChunk: ({ html }) => html
  });
  return result;
}

// First handle authentication, then authorization
// Each function acts as a middleware, receiving the request handle
// And returning a handle which gets passed to the next function
export const handle: Handle = sequence(


  SvelteKitAuth({
    adapter: SurrealDBAdapter(clientPromise),

    providers: [
      // // @ts-expect-error issue https://github.com/nextauthjs/next-auth/issues/6174
      // Apple({
      //   clientId: VITE_APPLE_ID,
      //   clientSecret: VITE_APPLE_SECRET
      // }),

      // @ts-expect-error issue https://github.com/nextauthjs/next-auth/issues/6174
      // GitHub({
      //   clientId: VITE_GITHUB_ID,
      //   clientSecret: VITE_GITHUB_SECRET
      // }),

      // @ts-expect-error issue https://github.com/nextauthjs/next-auth/issues/6174
      Discord({
        clientId: VITE_DISCORD_CLIENT_ID,
        clientSecret: VITE_DISCORD_CLIENT_SECRET
      }),

      // @ts-expect-error issue https://github.com/nextauthjs/next-auth/issues/6174
      Email({
        server: VITE_EMAIL_SERVER,
        from: VITE_EMAIL_FROM
      }),

       // @ts-expect-error issue https://github.com/nextauthjs/next-auth/issues/6174
       GitHub({
        clientId: VITE_GITHUB_ID,
        clientSecret: VITE_GITHUB_SECRET
      }),
    ],

    secret: VITE_AUTH_SECRET
    // pages: {
    //   signIn: '/auth2/signin',
    //   signOut: '/auth2/signout',
    // //   error: '/auth/error', // Error code passed in query string as ?error=
    // //   verifyRequest: '/auth/verify-request', // (used for check email message)
    // //   newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    // },

  }),

  authorization
)