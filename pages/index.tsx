import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import { ImageList } from "../components/ImageList";
import { Radio, Button, Modal, Input } from "antd";
import { FileUploaderComponent as FileUploader } from "../components/FileUploaderComponent";
import images from "../mockData";
import { RcFile } from "antd/lib/upload";

const Home: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const [sortBy, setSortBy] = React.useState<"name" | "date">("name");

  const [imgs, setImgs] = React.useState(images);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: 20,
      }}
    >
      <FileUploader
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        onUploadSuccess={(image) => {
          console.log(image.file?.thumbUrl);
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
          style={{ marginLeft: 10 }}
          onChange={(e) => setSortBy(e.target.value)}
          defaultValue={"name"}
        >
          <Radio.Button value={"name"}>{"Name"}</Radio.Button>
          <Radio.Button value={"date"}>{"Date"}</Radio.Button>
        </Radio.Group>
      </div>
      <ImageList images={imgs} sortBy={sortBy} />
    </div>
  );
};

export default Home;
