import styles from "./styles.module.scss";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  CloudUpload,
  InsertDriveFile,
  Image,
  Close,
} from "@mui/icons-material";
import { Typography, Box, IconButton } from "@mui/material";

export const FileUploader = () => {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, []);

  const removeFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: [".csv", ".txt"],
    maxSize: 10 * 1024 * 1024, // 10MB
  });

  return (
    <Box>
      <Box
        {...getRootProps()}
        className={`${styles.dropzone} ${isDragActive ? styles.active : ""}`}
      >
        <input {...getInputProps()} />
        <CloudUpload className={styles.icon} />
        <Typography variant="h5" className={styles.title}>
          {isDragActive ? "Отпустите файлы здесь" : "Перетащите файлы сюда"}
        </Typography>
        <Typography variant="body1" className={styles.subtitle}>
          или кликните для выбора файлов
        </Typography>
        <Typography variant="caption" className={styles.subtitle}>
          Поддерживаются TXT, CSV до 10MB
        </Typography>
      </Box>

      {files.length > 0 && (
        <Box className={styles.previewContainer}>
          {files.map((file, index) => (
            <Box key={index} className={styles.previewItem}>
              <Box className={styles.fileInfo}>
                {file.type.startsWith("image/") ? (
                  <Image className={styles.fileIcon} />
                ) : (
                  <InsertDriveFile className={styles.fileIcon} />
                )}
                <Typography variant="body2">
                  {file.name} ({Math.round(file.size / 1024)} KB)
                </Typography>
              </Box>
              <IconButton
                size="small"
                onClick={() => removeFile(index)}
                className={styles.deleteButton}
              >
                <Close fontSize="small" />
              </IconButton>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};
