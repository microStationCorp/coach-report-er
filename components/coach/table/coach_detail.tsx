import { prisma } from "@/utils/prisma";
import { Customoutput } from "../customoutput";
import Link from "next/link";

export const dynamic = "force-dynamic";

const getCoachDetail = async (coachID: string) => {
  const coach = await prisma.coaches.findUnique({
    where: {
      id: coachID,
    },
    select: {
      base: true,
      coach_number: true,
      coach_type: true,
      rake_type: true,
      p_date: true,
      r_date: true,
    },
  });
  return coach;
};

export default async function CoachDetail({ coachID }: { coachID: string }) {
  const details = await getCoachDetail(coachID);
  return (
    <>
      <div className="pl-2 space-y-1">
        <div className="flex items-center text-lg capitalize space-x-2">
          <span className="text-sm sm:text-base">Base :</span>
          <Customoutput data={details?.base} />
        </div>
        <div className="flex items-center text-lg capitalize space-x-2">
          <span className="text-sm sm:text-base">Coach Number :</span>
          <Customoutput data={details?.coach_number} />
        </div>
        <div className="flex items-center text-lg capitalize space-x-2">
          <span className="text-sm sm:text-base">Coach Type :</span>
          <Customoutput data={details?.coach_type} />
        </div>
        <div className="flex items-center text-lg capitalize space-x-2">
          <span className="text-sm sm:text-base">Rake Type :</span>
          <Customoutput data={details?.rake_type} />
        </div>
        <div className="flex items-center text-lg capitalize space-x-2">
          <span className="text-sm sm:text-base">POH Date :</span>
          <Customoutput data={details?.p_date} />
        </div>
        <div className="flex items-center text-lg capitalize space-x-2">
          <span className="text-sm sm:text-base">Return Date :</span>
          <Customoutput data={details?.r_date} />
        </div>
      </div>
      <div className="text-center pt-4">
        <Link
          href={`/coach/form/coach_detail/${coachID}`}
          className="border border-slate-400 px-3 py-1 rounded-md text-sky-700 hover:bg-sky-100"
        >
          Edit coach details
        </Link>
      </div>
    </>
  );
}
