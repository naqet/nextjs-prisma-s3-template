import { S3Client } from "@aws-sdk/client-s3";
import { env } from "./env";

const globalForMinio = global as unknown as {
    s3: S3Client;
};

const minio =
    globalForMinio.s3 ||
    new S3Client({
        region: "ue-east-1",
        endpoint: "http://localhost:9000",
        credentials: {
            accessKeyId: env.MINIO_ACCESS_KEY,
            secretAccessKey: env.MINIO_SECRET_KEY,
        },
        forcePathStyle: true,
    });

if (process.env.NODE_ENV !== "production") globalForMinio.s3 = minio;

export default minio;
