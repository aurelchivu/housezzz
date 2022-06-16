import React, { useEffect } from "react";
import Head from "next/head";
import Maps from "src/components/Map";

export default function Home() {
  return (
    <>
      {/* <Head>
        <title>Housezzz | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <div className="flex">
        <div className="w-1/2 pb-2" style={{ overflowX: "scroll" }}>
          Homeee
        </div>
        <div className="w-1/2">
          <Maps />
        </div>
      </div>
    </>
  );
}
