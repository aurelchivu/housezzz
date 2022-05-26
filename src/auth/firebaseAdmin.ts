// import * as admin from "firebase-admin";
import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { NextApiRequest } from "next";

const verifyIdToken = (token: string) => {
  const firebasePrivateKey: string = process.env.FIREBASE_PRIVATE_KEY ?? "";

  if (!getApps().length) {
    initializeApp({
      credential: cert({
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: firebasePrivateKey.replace(/\\n/g, "\n"),
      }),
    });
  }

  return getAuth()
    .verifyIdToken(token)
    .catch(() => null);
};

export const loadIdToken = async (
  req: NextApiRequest
): Promise<string | null> => {
  if (!req.cookies.token) return null;
  const decoded = await verifyIdToken(req.cookies.token);
  if (!decoded) return null;
  return decoded.uid;
};
