import React from "react";
import { Outlet } from "@remix-run/react";
import Layout from "~/components/Layout";

function ContactLayout() {
  return (
    <Layout footer={false}>
      <Outlet />
    </Layout>
  );
}

export default ContactLayout;
