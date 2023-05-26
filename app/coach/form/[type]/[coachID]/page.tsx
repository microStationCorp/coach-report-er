export default function CoachForm({
  params,
}: {
  params: { type: string; coachID: string };
}) {
  return <>{JSON.stringify(params)}</>;
}
