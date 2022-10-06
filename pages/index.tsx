import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import React from "react";
import { ImageList } from "../components/ImageList/ImageList";
import { Radio, Button, Modal, Input } from "antd";
import { FileUploaderComponent as FileUploader } from "../components/FileUploaderButton/FileUploaderButton";
import images from "../mockData";
import Head from "next/head";

const Home: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const [sortBy, setSortBy] = React.useState<"name" | "date">("name");

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
        <div>
          {"Sort by"}
          <Radio.Group
            className={styles.sortGroup}
            onChange={(e) => setSortBy(e.target.value)}
            defaultValue={"name"}
          >
            <Radio.Button value={"name"}>{"Name"}</Radio.Button>
            <Radio.Button value={"date"}>{"Date"}</Radio.Button>
          </Radio.Group>
        </div>
        <ImageList images={imgs} sortBy={sortBy} />
      </div>
    </>
  );
};

export default Home;
