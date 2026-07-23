export class ApiConfiguration {
  public static readonly http = {
    port: 5001,
  } as const;

  public static readonly keycloak = {
    clientId: process.env.KEYCLOAK_CLIENT_ID!,
    clientSecret: process.env.KEYCLOAK_CLIENT_SECRET!,
    issuer: process.env.KEYCLOAK_ISSUER!,
  } as const;

  public static readonly redis = {
    url: process.env.URLS_REDIS!,
  } as const;

  public static readonly livekit = {
    url: process.env.LIVEKIT_URL || "",
    apiKey: process.env.LIVEKIT_API_KEY || "",
    apiSecret: process.env.LIVEKIT_API_SECRET || "",
  } as const;

  public static readonly s3 = {
    endpoint: process.env.S3_ENDPOINT || "",
    accessKeyId: process.env.S3_ACCESS_KEY || "",
    secretAccessKey: process.env.S3_SECRET_KEY || "",
    publicUrl: process.env.S3_PUBLIC_URL || "",
  } as const;
}
