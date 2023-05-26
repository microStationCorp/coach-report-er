import { prisma } from "@/utils/prisma";
import LHBTable from "./table/lhb_table";
import SGTable from "./table/sg_table";

export const dynamic = "force-dynamic";

const getCoachDetail = async (coachID: string) => {
  const coach = await prisma.coaches.findUnique({
    where: {
      id: coachID,
    },
    select: {
      id: true,
      rake_type: true,
    },
  });
  return coach;
};

export default async function CoachEquipment({ coachID }: { coachID: string }) {
  const coach = await getCoachDetail(coachID);
  return (
    <div className="pl-2 space-y-1">
      {coach?.rake_type == "SG" ? (
        // @ts-ignore
        <SGTable coachID={coachID} />
      ) : (
        // @ts-ignore
        <LHBTable coachID={coachID} />
      )}
    </div>
  );
}
