import { RelatoryForm } from "../Components/RelatoryForm";
import { useParams } from "react-router-dom";

export const Relatory = () => {
  const params = useParams();

  const relatoryData = JSON.parse(localStorage.getItem("quiz") || "");
  let thisRelatory =
    params.id === undefined
      ? relatoryData[relatoryData.length - 1]
      : relatoryData[parseInt(params.id) - 1];

  return (
    <>
      <RelatoryForm data={thisRelatory.data} />
    </>
  );
};
