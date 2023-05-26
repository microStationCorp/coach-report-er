import { prisma } from "@/utils/prisma";
import { Customoutput } from "../customoutput";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function SGTable({ coachID }: { coachID: string }) {
  const table = await prisma.sgCoachEquipmentTable.findUnique({
    where: {
      coachesId: coachID,
    },
  });
  return (
    <div>
      sg table
      {table ? (
        <div>
          <div className="flex items-center text-lg capitalize space-x-2">
            <span className="text-sm sm:text-base">AC Plant:</span>
            <Customoutput data={table.ac_plant} />
          </div>
          <div className="flex items-center text-lg capitalize space-x-2">
            <span className="text-sm sm:text-base">Inverter:</span>
            <Customoutput data={table.ac_plant} />
          </div>
          <div className="flex items-center text-lg capitalize space-x-2">
            <span className="text-sm sm:text-base">RRU:</span>
            <Customoutput data={table.rru} />
          </div>
          <div className="flex items-center text-lg capitalize space-x-2">
            <span className="text-sm sm:text-base">Alternator:</span>
            <Customoutput data={table.alternator} />
          </div>
          <div className="flex items-center text-lg capitalize space-x-2">
            <span className="text-sm sm:text-base">cell:</span>
            <Customoutput data={table.cell} />
          </div>
          <div className="flex items-center text-lg capitalize space-x-2">
            <span className="text-sm sm:text-base">Battery Charger:</span>
            <Customoutput data={table.battery_charger} />
          </div>
          <div className="flex items-center text-lg capitalize space-x-2">
            <span className="text-sm sm:text-base">Refrigarent:</span>
            <Customoutput data={table.refrigarent} />
          </div>
          <div className="flex items-center text-lg capitalize space-x-2">
            <span className="text-sm sm:text-base">Condenser motor:</span>
            <Customoutput data={table.condenser_motor} />
          </div>
        </div>
      ) : (
        <div>nothing provided</div>
      )}
      <div className="text-center pt-4">
        <Link
          href={`/coach/form/sg_table/${coachID}`}
          className="border border-slate-400 px-3 py-1 rounded-md text-sky-700 hover:bg-sky-100"
        >
          Edit SG Table
        </Link>
      </div>
    </div>
  );
}
