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

const FooPage: NextPage = (props) => {
  return (
    <>
      <h1>Foo Page</h1>
      <Link href="/">Home</Link>
      <Link href="/bar">Bar</Link>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  );
};

export default FooPage;
