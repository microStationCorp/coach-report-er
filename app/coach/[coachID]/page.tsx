export const dynamic = "force-dynamic";

export default async function Coach({
  params,
}: {
  params: { coachID: string };
}) {
  return <>{params.coachID}</>;
}
