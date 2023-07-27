import React from "react";
import Layout from "~/components/Layout";
import { Outlet } from "@remix-run/react";

function _Layout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default _Layout;
