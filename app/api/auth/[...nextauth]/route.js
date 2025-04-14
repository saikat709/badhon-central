import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Replace with your user lookup logic (e.g., DB call)
const authenticateUser = async (phone, password) => {
//   if ( phone === "01700000000" && password === "secret" ) {
    return { id: "1", name: "Test User", phone };
//   }
  // return null;
};

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Phone and Password",
      credentials: {
        phone:    { label: "Phone", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log("########");
        const user = await authenticateUser(
          credentials?.phone ?? "",
          credentials?.password ?? ""
        );
        if (user) return user;
        return null;
      },
    }),
  ],
  // session: {
  //   strategy: "jwt",       // or 'database' if using DB sessions
  // },
  pages: {
    signIn: "/auth/signin", // custom signin page
    error: "/auth/error",   // custom error page (optional but important!)
  },
})


// export default handler;
export { handler as GET, handler as POST }
