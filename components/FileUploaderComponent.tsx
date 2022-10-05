import { Button, Input, Modal, UploadFile } from "antd";
import { RcFile } from "antd/lib/upload";
import React from "react";
import FileUploader from "./FileUploader";
import styles from "./FileUploaderModal.module.css";

export const FileUploaderComponent = (props: {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  onUploadSuccess: (image: {
    name: string;
    description: string;
    file?: UploadFile;
  }) => void;
}) => {
  const { isModalOpen, setIsModalOpen, onUploadSuccess } = props;
  const [imgDetails, setImgDetails] = React.useState<{
    name: string;
    description: string;
    file?: UploadFile;
  }>({
    name: "",
    description: "",
  });
  return (
    <>
      <Button
        type={"primary"}
        style={{
          display: "flex",
          alignSelf: "center",
        }}
        onClick={() => setIsModalOpen(true)}
      >
        {"Add Image"}
      </Button>
      <Modal
        title="Upload New Image"
        open={isModalOpen}
        onOk={() => {
          setIsModalOpen(false);
          onUploadSuccess(imgDetails);
        }}
        onCancel={() => setIsModalOpen(false)}
      >
        <div className={styles.uploaderForm}>
          <FileUploader
            onUploadSuccess={(file: UploadFile) =>
              setImgDetails({ ...imgDetails, file })
            }
          />
          <div>
            <Input
              className={styles.inputFields}
              placeholder={"Image Name"}
              onChange={(e) =>
                setImgDetails({ ...imgDetails, name: e.currentTarget.value })
              }
            />
            <Input
              className={styles.inputFields}
              placeholder={"Image Description"}
              onChange={(e) =>
                setImgDetails({
                  ...imgDetails,
                  description: e.currentTarget.value,
                })
              }
            />
          </div>
        </div>
      </Modal>
    </>
  );
};
