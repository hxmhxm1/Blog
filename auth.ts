import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
export const { handlers, auth, signIn, signOut } = NextAuth({ providers: [ GitHub ],
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl
      if (pathname.startsWith("/note/edit")){
        console.log('监测到编辑页面了---')
        return !!auth
      }
      return true
    },
  }
})
