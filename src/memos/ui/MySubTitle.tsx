import React from "react";

interface Props {
  subtitle: string;
  callMyApi: () => void;
}
export const MySubTitle = React.memo(({ subtitle, callMyApi }: Props) => {
  console.log("🚀 ~ MySubTitle ~ subtitle:", subtitle);

  return (
    <>
      <h6 className="text-2xl font-bold">{subtitle}</h6>

      <button
        className="bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer"
        onClick={callMyApi}
      >
        Llamar a función
      </button>
    </>
  );
});
