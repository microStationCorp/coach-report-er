import CoachDetail from "@/components/coach/table/coach_detail";
import CoachEquipment from "@/components/coach/coach_equipment";
import { Suspense } from "react";
import LoadingUI from "@/components/loading";

export default async function Coach({
  params,
}: {
  params: { coachID: string };
}) {
  return (
    <>
      <div className="border border-slate-400 rounded-md p-2">
        <div className="sm:pl-4 pb-4">
          <div className="text-2xl underline">Coach Details :</div>
          <Suspense fallback={<LoadingUI />}>
            {/* @ts-ignore */}
            <CoachDetail coachID={params.coachID} />
          </Suspense>
        </div>
        {/* coach equipment */}
        <div className="sm:pl-4 pb-4">
          <div className="text-2xl underline">Coach Equipments :</div>
          <Suspense fallback={<LoadingUI/>}>
            {/* @ts-ignore */}
            <CoachEquipment coachID={params.coachID} />
          </Suspense>
        </div>
      </div>
    </>
  );
}
