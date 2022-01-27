import { RelatoryForm } from "../Components/RelatoryForm";

export const Relatory = () => {
  const relatoryData = JSON.parse(localStorage.getItem("quiz") || "");
  const thisRelatory = relatoryData[relatoryData.length - 1];

  return (
    <>
      <RelatoryForm data={thisRelatory.data} />
    </>
  );
};
