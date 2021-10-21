import React, { useState } from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import Navbar from "../components/admin/Navbar";
import { SideBar } from "../components/admin/SideBar";
import { Content } from "../components/admin/Content";
import Layout from "../components/Layouts/AdminLayout";
import Products from "../components/admin/Products";
import Landing from "../pages/landing";

const MyButton = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      Click Me
    </a>
  );
});

export default function DashboardPage(props) {
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  const [contentDisplay, setContentDisplay] = useState("dashboard");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>ERROR</div>;

  if (!user) {
    router.push("/api/auth/login");
  } else {
    return (
      <>
        <Layout props={props}>
          {/* <Products />
          <Link href="/dashboard/Products" passHref>
            <MyButton />
          </Link> */}
          {contentDisplay === "dashboard" ? (
            <Content user={user} />
          ) : (
            <Landing />
          )}
          {/* <Content user={user} /> */}
          {/* <h1>test</h1> */}
          {/* <h1>USER IS</h1>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p> */}
        </Layout>
      </>
    );
  }
}
