export class DatabaseConfiguration {
  public static readonly connectionString = process.env.DATABASE_URL!;
}