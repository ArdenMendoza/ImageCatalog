import ImgData from "../models/imageDataModel";
import { ImageWithPopOver } from "./imageWithPopOver/ImageWithPopOver";

export const ImageList = (props: {
  images: ImgData[];
  sortBy: "name" | "date";
}) => {
  const { sortBy, images } = props;

  const imageList = [...images].sort((a: any, b: any) =>
    a[sortBy] < b[sortBy] ? 1 : -1
  );

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        columnGap: 20,
        rowGap: 20,
      }}
    >
      {imageList.map((m) => (
        <ImageWithPopOver imageDetails={m} />
      ))}
    </div>
  );
};
