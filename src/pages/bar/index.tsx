import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";

export async function getServerSideProps() {
  return {
    props: {
      time: new Date().toISOString(),
    },
  };
}

const BarPage: NextPage = (props) => {
  return (
    <>
      <h1>Bar Page</h1>
      <Link href="/">Home</Link>
      <Link href="/foo">Foo</Link>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  );
};

export default BarPage;
