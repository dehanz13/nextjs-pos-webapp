import React from "react";
import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import { AdminNavbar } from "../components/admin/navbar";
import { SideBar } from "../components/admin/SideBar";

export default function DashboardPage() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>ERROR</div>;

  if (!user) {
    router.push("/api/auth/login");
  } else {
    return (
      <div className="antialiased h-screen grid grid-cols-6 gap-4">
        <SideBar userInfo={user} />
        <AdminNavbar user={user} />
        {/* <MainContent /> */}

        {/* <h1>USER IS</h1>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p> */}
      </div>
    );
  }
}
