"use client";

import { SgCoachEquipmentTable } from "@prisma/client";

export default function SGTableForm({ tableData }: { tableData: SgCoachEquipmentTable }) {
  return <pre>{JSON.stringify(tableData, null, 2)}</pre>;
}
