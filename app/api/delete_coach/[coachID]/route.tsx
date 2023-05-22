import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { coachID: string } }
) {
  const coachID = params.coachID;
  const deletedCoach = await prisma.coaches.delete({
    where: {
      id: coachID,
    },
  });
  return NextResponse.json({ success: true });
}
