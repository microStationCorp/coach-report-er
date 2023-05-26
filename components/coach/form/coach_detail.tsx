"use client";

import { Coaches } from "@prisma/client";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";

export default function CoachDetailForm({ tableData }: { tableData: Coaches }) {
  const router = useRouter();

  return (
    <div>
      <div className="w-5/6 sm:w-4/5 md:w-3/4 lg:w-2/3 mx-auto p-2 rounded-md border border-slate-400">
        <div className="text-xl capitalize text-center">
          update coach detail
        </div>
        <Formik
          initialValues={{
            base: tableData.base || "",
            coach_number: tableData.coach_number || "",
            coach_type: tableData.coach_type || "",
            rake_type: tableData.rake_type || "",
            p_date: tableData.p_date || "",
            r_date: tableData.r_date || "",
            id: tableData.id,
          }}
          onSubmit={async (values) => {
            const body_object = Object.fromEntries(
              Object.entries(values).filter(([k, v]) => v !== "")
            );
            const res = await fetch("/api/form/coach_details", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(body_object),
            });
            const data = await res.json();
            if (data.success) {
              router.push(`/coach/${body_object.id}`);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col items-center mt-2">
              <div className="flex w-full sm:w-2/3 lg:w-1/2 flex-col mb-4 px-4">
                <Field
                  type="text"
                  name="base"
                  className="mb-2 p-1 rounded border border-slate-400"
                />
                <Field
                  type="text"
                  name="coach_number"
                  placeholder="coach number"
                  className="mb-2 p-1 rounded border border-slate-400"
                />
                <Field
                  type="text"
                  name="coach_type"
                  placeholder="coach type"
                  className="mb-2 p-1 rounded border border-slate-400"
                />
                <Field
                  as="select"
                  name="rake_type"
                  className="mb-2 p-1 rounded border border-slate-400"
                >
                  <option value="LHB">LHB</option>
                  <option value="SG">SG</option>
                </Field>
                <Field
                  type="text"
                  name="p_date"
                  placeholder="P date"
                  className="mb-2 p-1 rounded border border-slate-400"
                />
                <Field
                  type="text"
                  name="r_date"
                  placeholder="R date"
                  className="mb-2 p-1 rounded border border-slate-400"
                />
                <div className="flex justify-around mt-1">
                  <button
                    className={`border w-1/2 capitalize border-slate-700 px-2 rounded shadow ${
                      isSubmitting
                        ? "bg-slate-700 text-slate-500"
                        : " text-green-600"
                    } `}
                    disabled={isSubmitting}
                  >
                    submit
                  </button>
                  <button
                    type="button"
                    className="border w-1/3 shadow border-slate-700 rounded px-2 text-red-600"
                    onClick={() => router.back()}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
