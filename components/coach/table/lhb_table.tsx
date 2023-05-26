import { prisma } from "@/utils/prisma";
import { Customoutput } from "../customoutput";
import Link from "next/link";

export const dynamic = "force-dynamic";

const getTable = async (coachID: string) => {
  const table = await prisma.lhbCoachEquipmentTable.findUnique({
    where: {
      coachesId: coachID,
    },
  });

  return table;
};

export default async function LHBTable({ coachID }: { coachID: string }) {
  const table = await getTable(coachID);
  return (
    <>
      <div>lhb table</div>
      {table ? (
        <div>
          <div className="flex items-center text-lg capitalize space-x-2">
            <span className="text-sm sm:text-base">RMPU package:</span>
            <Customoutput data={table.rmpu_package} />
          </div>
          <div className="flex items-center text-lg capitalize space-x-2">
            <span className="text-sm sm:text-base">RBC:</span>
            <Customoutput data={table.rbc} />
          </div>
          <div className="flex items-center text-lg capitalize space-x-2">
            <span className="text-sm sm:text-base">RBC:</span>
            <Customoutput data={table.ebc} />
          </div>
          <div className="flex items-center text-lg capitalize space-x-2">
            <span className="text-sm sm:text-base">RBC:</span>
            <Customoutput data={table.erbc} />
          </div>
          <div className="flex items-center text-lg capitalize space-x-2">
            <span className="text-sm sm:text-base">Refrigarent:</span>
            <Customoutput data={table.refrigarent} />
          </div>
          <div className="flex items-center text-lg capitalize space-x-2">
            <span className="text-sm sm:text-base">Condenser Motor:</span>
            <Customoutput data={table.condenser_motor} />
          </div>
          <div className="flex items-center text-lg capitalize space-x-2">
            <span className="text-sm sm:text-base">Microprocessor:</span>
            <Customoutput data={table.microprocessor} />
          </div>
          <div className="flex items-center text-lg capitalize space-x-2">
            <span className="text-sm sm:text-base">Cell:</span>
            <Customoutput data={table.cell} />
          </div>
        </div>
      ) : (
        <div>nothing provided</div>
      )}
      <div className="text-center pt-4">
        <Link
          href={`/coach/form/lhb_table/${coachID}`}
          className="border border-slate-400 px-3 py-1 rounded-md text-sky-700 hover:bg-sky-100"
        >
          Edit LHB table
        </Link>
      </div>
    </>
  );
}
