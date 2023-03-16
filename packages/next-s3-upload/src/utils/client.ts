import { S3Client, S3ClientConfig } from '@aws-sdk/client-s3';
import { getConfig, S3Config } from './config';

export function getClient(s3Config?: S3Config) {
  let config = getConfig(s3Config);

  let client = new S3Client({
    region: config.region,
    ...(config.forcePathStyle ? { forcePathStyle: config.forcePathStyle } : {}),
    ...(config.endpoint ? { endpoint: config.endpoint } : {}),
  } as unknown as S3ClientConfig);

  return client;
}
