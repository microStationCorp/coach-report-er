import { SingleItem } from "@/components/singleitem";
import { prisma } from "@/utils/prisma";

export const dynamic = "force-dynamic";

const getCoaches = async () => {
  const coaches = await prisma.coaches.findMany({
    orderBy: {
      created_at: "desc",
    },
    select: {
      id: true,
      base: true,
      coach_number: true,
      coach_type: true,
    },
  });
  return coaches;
};

export default async function CoachList() {
  const coaches = await getCoaches();
  return (
    <div className="rounded-md p-2 w-5/6 sm:w-4/5 md:w-3/4 lg:w-2/3 mx-auto border border-slate-400">
      <div className="text-xl text-center capitalize text-slate-700 underline underline-offset-4">
        coach list
      </div>
      {coaches.length == 0 ? (
        <div className="text-center text-red-600 font-semibold">
          Nothing to show
        </div>
      ) : (
        <div>
          {coaches.map((d) => (
            <SingleItem d={d} key={d.id} />
          ))}
        </div>
      )}
    </div>
  );
}
