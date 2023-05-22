import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { values } = await req.json();
  console.log("values", values);

  const isPresent = await prisma.coaches.findFirst({
    where: {
      AND: [
        {
          coach_number: values.coach_number,
        },
        {
          coach_type: values.coach_type,
        },
        {
          base: values.base,
        },
      ],
    },
  });

  if (isPresent) {
    return NextResponse.json({
      errorStat: true,
      errorMsg: "details already existed",
    });
  } else {
    const coaches = await prisma.coaches.create({
      data: {
        base: values.base,
        coach_number: values.coach_number,
        coach_type: values.coach_type,
        rake_type: values.rake_type,
      },
    });
    return NextResponse.json({ success: true, coaches });
  }
}
