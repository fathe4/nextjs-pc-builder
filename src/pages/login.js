import React from "react";
import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import { GithubOutlined } from "@ant-design/icons";
import RootLayout from "@/components/Layouts/RootLayout";

const Login = () => {
  const { data: session } = useSession();
  console.log(session, "session");
  return (
    <div>
      <Head>
        <title>PC Builder Login</title>
      </Head>
      <div className="flex justify-center flex-col align-middle">
        {!session?.user?.email ? (
          <div className="text-center py-10">
            <h3>LOGIN WITH GITHUB</h3>
            <GithubOutlined
              className="text-4xl my-6"
              onClick={() =>
                signIn("github", {
                  callbackUrl: process.env.NEXTAUTH_URL,
                })
              }
            />
          </div>
        ) : (
          <h2 style={{ textAlign: "center" }}>
            Logged in user email: {session?.user?.name}
          </h2>
        )}
      </div>
    </div>
  );
};

export default Login;

Login.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
