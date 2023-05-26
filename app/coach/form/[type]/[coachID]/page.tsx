import CoachDetailForm from "@/components/coach/form/coach_detail";
import LHBTableForm from "@/components/coach/form/lhb_table_form";
import SGTableForm from "@/components/coach/form/sg_table_form";
import { prisma } from "@/utils/prisma";

const getTableData = async (params: { type: string; coachID: string }) => {
  if (params.type == "coach_detail") {
    const table = await prisma.coaches.findUnique({
      where: {
        id: params.coachID,
      },
      select: {
        id: true,
        base: true,
        coach_number: true,
        coach_type: true,
        p_date: true,
        r_date: true,
        rake_type: true,
      },
    });
    return table;
  } else if (params.type == "sg_table") {
    const table = await prisma.sgCoachEquipmentTable.findUnique({
      where: {
        coachesId: params.coachID,
      },
    });
    return table;
  } else {
    const table = await prisma.lhbCoachEquipmentTable.findUnique({
      where: {
        coachesId: params.coachID,
      },
    });
    return table;
  }
};

export default async function CoachForm({
  params,
}: {
  params: { type: string; coachID: string };
}) {
  const tableData = await getTableData(params);
  return (
    <>
      <div>
        {params.type === "coach_detail" ? (
          // @ts-ignore
          <CoachDetailForm tableData={tableData!} />
        ) : params.type === "sg_table" ? (
          // @ts-ignore
          <SGTableForm tableData={tableData!} />
        ) : (
          // @ts-ignore
          <LHBTableForm tableData={tableData!} />
        )}
      </div>
    </>
  );
}
