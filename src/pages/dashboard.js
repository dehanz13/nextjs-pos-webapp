import React from "react";
import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import Navbar from "../components/admin/Navbar";
import { SideBar } from "../components/admin/SideBar";
import { Content } from "../components/admin/Content";
import Layout from "../components/Layouts/AdminLayout";

export default function DashboardPage() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>ERROR</div>;

  if (!user) {
    router.push("/api/auth/login");
  } else {
    return (
      <>
        <Layout>
          {/* <section className="grid grid-cols-6"> */}
          {/* <SideBar userInfo={user} /> */}
          <Content user={user} />
          {/* <h1>test</h1> */}
          {/* <h1>USER IS</h1>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p> */}
          {/* </section> */}
        </Layout>
      </>
    );
  }
}
