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
}
