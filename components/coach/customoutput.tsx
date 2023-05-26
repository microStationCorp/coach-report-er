export const Customoutput = ({ data }: { data: string | undefined | null }) => {
  return (
    <>
      {data ? (
        <span className="font-semibold uppercase text-sm sm:text-base">
          {data}
        </span>
      ) : (
        <span className="text-red-500 font-semibold text-sm sm:text-base">
          Not provided
        </span>
      )}
    </>
  );
};
