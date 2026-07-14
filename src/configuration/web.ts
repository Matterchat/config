if (!process.env.URLS_API)
  throw new Error("Missing environment variable: URLS_API");

export class WebConfiguration {
  public static readonly addresses = {
    api: process.env.URLS_API,
  } as const;
}

export interface IWebConfiguration {
  addresses: {
    api: string;
  };
}

export class WebSecrets {
  public static readonly keycloak = {
    clientId: process.env.KEYCLOAK_CLIENT_ID!,
    clientSecret: process.env.KEYCLOAK_CLIENT_SECRET!,
    issuer: process.env.KEYCLOAK_ISSUER!,
  } as const;
}
