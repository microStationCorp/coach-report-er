import { Metadata } from "next";

export default async function ({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export const metadata: Metadata = {
  title: "damages",
};
