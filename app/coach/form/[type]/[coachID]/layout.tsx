import { Metadata } from "next";

export default function FormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}

export const metadata: Metadata = {
  title: "coach form",
};
