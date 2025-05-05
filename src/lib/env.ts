import { z } from "zod";

const envSchema = z.object({
    DATABASE_URL: z.string().url(),
    POSTGRES_USER: z.string(),
    POSTGRES_PASSWORD: z.string(),
    POSTGRES_DB: z.string(),
    MINIO_ROOT_USER: z.string(),
    MINIO_ROOT_PASSWORD: z.string(),
    NODE_ENV: z.enum(["development", "test", "production"]),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
    throw new Error(
        "Invalid environment variables: " +
            JSON.stringify(_env.error.format(), null, 4)
    );
}

export const env = _env.data;
