"use client";

import { LhbCoachEquipmentTable } from "@prisma/client";

export default function LHBTableForm({
  tableData,
}: {
  tableData: LhbCoachEquipmentTable;
}) {
  return <pre>{JSON.stringify(tableData, null, 2)}</pre>;
}
