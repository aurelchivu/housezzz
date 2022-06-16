import FirebaseAuth from "src/components/FirebaseAuth";
import { GetServerSideProps, NextApiRequest } from "next";
import { loadIdToken } from "src/auth/firebaseAdmin";
import { redirect } from "next/dist/server/api-utils";

export default function Auth() {
  return <FirebaseAuth />;
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  try {
    const uid = await loadIdToken(req as NextApiRequest);
    if (uid) {
      return {
        redirect: {
          permanent: false,
          destination: "/",
        },
        props: {},
      };
    }
  } catch (error) {
    console.log(error);
  }
  return { props: {} };
};
