import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const values = await req.json();

  const updated = await prisma.coaches.update({
    where: {
      id: values.id,
    },
    data: {
      base: values.base,
      coach_number: values.coach_number,
      coach_type: values.coach_type,
      rake_type: values.rake_type,
      p_date: values.p_date,
      r_date: values.r_date,
    },
  });

  return NextResponse.json({ success: true, updated });
}
