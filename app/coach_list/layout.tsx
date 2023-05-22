import { Metadata } from "next";

export const metadata: Metadata = {
  title: "coach list",
};

export default function CoachlistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
