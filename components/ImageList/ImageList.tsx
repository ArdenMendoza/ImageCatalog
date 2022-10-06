import ImgData from "../../models/imageDataModel";
import { ImageWithPopOver } from "../imageWithPopOver/ImageWithPopOver";
import styles from "./ImageList.module.css";

export const ImageList = (props: {
  images: ImgData[];
  sortBy: string;
}) => {
  const { sortBy, images } = props;

  const imageList = [...images].sort((a: any, b: any) =>
    a[sortBy] < b[sortBy] ? 1 : -1
  );

  return (
    <div className={styles.imageListContainer}>
      {imageList.map((m) => (
        <ImageWithPopOver imageDetails={m} />
      ))}
    </div>
  );
};
