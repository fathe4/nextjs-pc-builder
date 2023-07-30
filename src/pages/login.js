import React from "react";
import { signIn } from "next-auth/react";
import Head from "next/head";
import { GithubOutlined } from "@ant-design/icons";
import RootLayout from "@/components/Layouts/RootLayout";

const Login = () => {
  return (
    <div>
      <Head>
        <title>PC Builder Login</title>
      </Head>
      <div>
        <h3>LOGIN</h3>
        <div c>
          <GithubOutlined
            onClick={() =>
              signIn("github", {
                callbackUrl: "http://localhost:3000/",
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Login;

Login.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
