import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { DataSorter } from "../components/DataSorter/DataSorter";
import { FileUploaderComponent as FileUploader } from "../components/FileUploaderButton/FileUploaderButton";
import { ImageList } from "../components/ImageList/ImageList";
import images from "../mockData";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const [sortBy, setSortBy] = React.useState<string>("name");

  const [imgs, setImgs] = React.useState(images);

  return (
    <>
      <Head>
        <title>{"Image Catalog"}</title>
      </Head>
      <div className={styles.indexPageContainer}>
        <FileUploader
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          onUploadSuccess={(image) => {
            return setImgs([
              ...imgs,
              {
                name: image.name,
                description: image.description,
                date: new Date().toString(),
                imgLoc: image.file?.thumbUrl ?? "",
              },
            ]);
          }}
        />
        <DataSorter
          items={[
            { id: "name", label: "Name" },
            { id: "date", label: "Date" },
          ]}
          onChange={(id) => setSortBy(id)}
        />
        <ImageList images={imgs} sortBy={sortBy} />
      </div>
    </>
  );
};

export default Home;
