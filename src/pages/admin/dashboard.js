import React, { useState } from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";

import { Overview } from "../../components/admin/Overview";
import AdminSiteLayout from "../../components/admin/layouts/AdminSiteLayout";

export default function DashboardPage({}) {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>ERROR</div>;
  if (!user) {
    router.push("/api/auth/login");
  } else {
    return (
      <AdminSiteLayout>
        <Overview user={user} />
        {/* <h1>test</h1> */}
        {/* <h1>USER IS</h1>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p> */}
      </AdminSiteLayout>
    );
  }
}
