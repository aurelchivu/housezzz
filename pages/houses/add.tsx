import Head from "next/head";
import { GetServerSideProps, NextApiRequest } from "next";
import { loadIdToken } from "src/auth/firebaseAdmin";
import HouseForm from "src/components/HouseForm";

export default function Add() {
  return (
    <>
      {/* <Head>
        <title>Housezzz | Add House</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <HouseForm />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  try {
    const uid = await loadIdToken(req as NextApiRequest);
    if (!uid) {
      return {
        redirect: {
          permanent: false,
          destination: "/auth",
        },
        props: {},
      };
    }
  } catch (error) {
    console.log(error);
  }
  return { props: {} };
};
