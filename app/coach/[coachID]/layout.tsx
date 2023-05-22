import { prisma } from "@/utils/prisma";
import { Metadata } from "next";

export default async function CoachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}

export async function generateMetadata({
  params,
}: {
  params: { coachID: string };
}) {
  const coach = await prisma.coaches.findUnique({
    where: {
      id: params.coachID,
    },
    select: {
      base: true,
      coach_number: true,
      coach_type: true,
    },
  });
  return {
    title: `${coach?.base.toUpperCase()} ${
      coach?.coach_number
    } ${coach?.coach_type.toUpperCase()}`,
  };
}
