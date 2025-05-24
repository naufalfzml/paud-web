
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ArtikelBerita
 * 
 */
export type ArtikelBerita = $Result.DefaultSelection<Prisma.$ArtikelBeritaPayload>
/**
 * Model KritikSaran
 * 
 */
export type KritikSaran = $Result.DefaultSelection<Prisma.$KritikSaranPayload>
/**
 * Model Laporan
 * 
 */
export type Laporan = $Result.DefaultSelection<Prisma.$LaporanPayload>
/**
 * Model PendaftarPesertaDidik
 * 
 */
export type PendaftarPesertaDidik = $Result.DefaultSelection<Prisma.$PendaftarPesertaDidikPayload>
/**
 * Model PendaftarTenagaPendidik
 * 
 */
export type PendaftarTenagaPendidik = $Result.DefaultSelection<Prisma.$PendaftarTenagaPendidikPayload>
/**
 * Model PesertaDidik
 * 
 */
export type PesertaDidik = $Result.DefaultSelection<Prisma.$PesertaDidikPayload>
/**
 * Model TenagaPendidik
 * 
 */
export type TenagaPendidik = $Result.DefaultSelection<Prisma.$TenagaPendidikPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const StatusPendaftaran: {
  MENUNGGU: 'MENUNGGU',
  DITERIMA: 'DITERIMA',
  DITOLAK: 'DITOLAK'
};

export type StatusPendaftaran = (typeof StatusPendaftaran)[keyof typeof StatusPendaftaran]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type StatusPendaftaran = $Enums.StatusPendaftaran

export const StatusPendaftaran: typeof $Enums.StatusPendaftaran

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.artikelBerita`: Exposes CRUD operations for the **ArtikelBerita** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArtikelBeritas
    * const artikelBeritas = await prisma.artikelBerita.findMany()
    * ```
    */
  get artikelBerita(): Prisma.ArtikelBeritaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kritikSaran`: Exposes CRUD operations for the **KritikSaran** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KritikSarans
    * const kritikSarans = await prisma.kritikSaran.findMany()
    * ```
    */
  get kritikSaran(): Prisma.KritikSaranDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.laporan`: Exposes CRUD operations for the **Laporan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Laporans
    * const laporans = await prisma.laporan.findMany()
    * ```
    */
  get laporan(): Prisma.LaporanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pendaftarPesertaDidik`: Exposes CRUD operations for the **PendaftarPesertaDidik** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PendaftarPesertaDidiks
    * const pendaftarPesertaDidiks = await prisma.pendaftarPesertaDidik.findMany()
    * ```
    */
  get pendaftarPesertaDidik(): Prisma.PendaftarPesertaDidikDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pendaftarTenagaPendidik`: Exposes CRUD operations for the **PendaftarTenagaPendidik** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PendaftarTenagaPendidiks
    * const pendaftarTenagaPendidiks = await prisma.pendaftarTenagaPendidik.findMany()
    * ```
    */
  get pendaftarTenagaPendidik(): Prisma.PendaftarTenagaPendidikDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pesertaDidik`: Exposes CRUD operations for the **PesertaDidik** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PesertaDidiks
    * const pesertaDidiks = await prisma.pesertaDidik.findMany()
    * ```
    */
  get pesertaDidik(): Prisma.PesertaDidikDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tenagaPendidik`: Exposes CRUD operations for the **TenagaPendidik** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TenagaPendidiks
    * const tenagaPendidiks = await prisma.tenagaPendidik.findMany()
    * ```
    */
  get tenagaPendidik(): Prisma.TenagaPendidikDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    ArtikelBerita: 'ArtikelBerita',
    KritikSaran: 'KritikSaran',
    Laporan: 'Laporan',
    PendaftarPesertaDidik: 'PendaftarPesertaDidik',
    PendaftarTenagaPendidik: 'PendaftarTenagaPendidik',
    PesertaDidik: 'PesertaDidik',
    TenagaPendidik: 'TenagaPendidik'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "artikelBerita" | "kritikSaran" | "laporan" | "pendaftarPesertaDidik" | "pendaftarTenagaPendidik" | "pesertaDidik" | "tenagaPendidik"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ArtikelBerita: {
        payload: Prisma.$ArtikelBeritaPayload<ExtArgs>
        fields: Prisma.ArtikelBeritaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtikelBeritaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtikelBeritaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtikelBeritaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtikelBeritaPayload>
          }
          findFirst: {
            args: Prisma.ArtikelBeritaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtikelBeritaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtikelBeritaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtikelBeritaPayload>
          }
          findMany: {
            args: Prisma.ArtikelBeritaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtikelBeritaPayload>[]
          }
          create: {
            args: Prisma.ArtikelBeritaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtikelBeritaPayload>
          }
          createMany: {
            args: Prisma.ArtikelBeritaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArtikelBeritaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtikelBeritaPayload>[]
          }
          delete: {
            args: Prisma.ArtikelBeritaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtikelBeritaPayload>
          }
          update: {
            args: Prisma.ArtikelBeritaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtikelBeritaPayload>
          }
          deleteMany: {
            args: Prisma.ArtikelBeritaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtikelBeritaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArtikelBeritaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtikelBeritaPayload>[]
          }
          upsert: {
            args: Prisma.ArtikelBeritaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtikelBeritaPayload>
          }
          aggregate: {
            args: Prisma.ArtikelBeritaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtikelBerita>
          }
          groupBy: {
            args: Prisma.ArtikelBeritaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtikelBeritaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtikelBeritaCountArgs<ExtArgs>
            result: $Utils.Optional<ArtikelBeritaCountAggregateOutputType> | number
          }
        }
      }
      KritikSaran: {
        payload: Prisma.$KritikSaranPayload<ExtArgs>
        fields: Prisma.KritikSaranFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KritikSaranFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KritikSaranPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KritikSaranFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KritikSaranPayload>
          }
          findFirst: {
            args: Prisma.KritikSaranFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KritikSaranPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KritikSaranFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KritikSaranPayload>
          }
          findMany: {
            args: Prisma.KritikSaranFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KritikSaranPayload>[]
          }
          create: {
            args: Prisma.KritikSaranCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KritikSaranPayload>
          }
          createMany: {
            args: Prisma.KritikSaranCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KritikSaranCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KritikSaranPayload>[]
          }
          delete: {
            args: Prisma.KritikSaranDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KritikSaranPayload>
          }
          update: {
            args: Prisma.KritikSaranUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KritikSaranPayload>
          }
          deleteMany: {
            args: Prisma.KritikSaranDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KritikSaranUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KritikSaranUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KritikSaranPayload>[]
          }
          upsert: {
            args: Prisma.KritikSaranUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KritikSaranPayload>
          }
          aggregate: {
            args: Prisma.KritikSaranAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKritikSaran>
          }
          groupBy: {
            args: Prisma.KritikSaranGroupByArgs<ExtArgs>
            result: $Utils.Optional<KritikSaranGroupByOutputType>[]
          }
          count: {
            args: Prisma.KritikSaranCountArgs<ExtArgs>
            result: $Utils.Optional<KritikSaranCountAggregateOutputType> | number
          }
        }
      }
      Laporan: {
        payload: Prisma.$LaporanPayload<ExtArgs>
        fields: Prisma.LaporanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LaporanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LaporanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>
          }
          findFirst: {
            args: Prisma.LaporanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LaporanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>
          }
          findMany: {
            args: Prisma.LaporanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>[]
          }
          create: {
            args: Prisma.LaporanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>
          }
          createMany: {
            args: Prisma.LaporanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LaporanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>[]
          }
          delete: {
            args: Prisma.LaporanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>
          }
          update: {
            args: Prisma.LaporanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>
          }
          deleteMany: {
            args: Prisma.LaporanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LaporanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LaporanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>[]
          }
          upsert: {
            args: Prisma.LaporanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>
          }
          aggregate: {
            args: Prisma.LaporanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLaporan>
          }
          groupBy: {
            args: Prisma.LaporanGroupByArgs<ExtArgs>
            result: $Utils.Optional<LaporanGroupByOutputType>[]
          }
          count: {
            args: Prisma.LaporanCountArgs<ExtArgs>
            result: $Utils.Optional<LaporanCountAggregateOutputType> | number
          }
        }
      }
      PendaftarPesertaDidik: {
        payload: Prisma.$PendaftarPesertaDidikPayload<ExtArgs>
        fields: Prisma.PendaftarPesertaDidikFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PendaftarPesertaDidikFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftarPesertaDidikPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PendaftarPesertaDidikFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftarPesertaDidikPayload>
          }
          findFirst: {
            args: Prisma.PendaftarPesertaDidikFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftarPesertaDidikPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PendaftarPesertaDidikFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftarPesertaDidikPayload>
          }
          findMany: {
            args: Prisma.PendaftarPesertaDidikFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftarPesertaDidikPayload>[]
          }
          create: {
            args: Prisma.PendaftarPesertaDidikCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftarPesertaDidikPayload>
          }
          createMany: {
            args: Prisma.PendaftarPesertaDidikCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PendaftarPesertaDidikCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftarPesertaDidikPayload>[]
          }
          delete: {
            args: Prisma.PendaftarPesertaDidikDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftarPesertaDidikPayload>
          }
          update: {
            args: Prisma.PendaftarPesertaDidikUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftarPesertaDidikPayload>
          }
          deleteMany: {
            args: Prisma.PendaftarPesertaDidikDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PendaftarPesertaDidikUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PendaftarPesertaDidikUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftarPesertaDidikPayload>[]
          }
          upsert: {
            args: Prisma.PendaftarPesertaDidikUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftarPesertaDidikPayload>
          }
          aggregate: {
            args: Prisma.PendaftarPesertaDidikAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePendaftarPesertaDidik>
          }
          groupBy: {
            args: Prisma.PendaftarPesertaDidikGroupByArgs<ExtArgs>
            result: $Utils.Optional<PendaftarPesertaDidikGroupByOutputType>[]
          }
          count: {
            args: Prisma.PendaftarPesertaDidikCountArgs<ExtArgs>
            result: $Utils.Optional<PendaftarPesertaDidikCountAggregateOutputType> | number
          }
        }
      }
      PendaftarTenagaPendidik: {
        payload: Prisma.$PendaftarTenagaPendidikPayload<ExtArgs>
        fields: Prisma.PendaftarTenagaPendidikFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PendaftarTenagaPendidikFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftarTenagaPendidikPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PendaftarTenagaPendidikFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftarTenagaPendidikPayload>
          }
          findFirst: {
            args: Prisma.PendaftarTenagaPendidikFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftarTenagaPendidikPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PendaftarTenagaPendidikFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftarTenagaPendidikPayload>
          }
          findMany: {
            args: Prisma.PendaftarTenagaPendidikFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftarTenagaPendidikPayload>[]
          }
          create: {
            args: Prisma.PendaftarTenagaPendidikCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftarTenagaPendidikPayload>
          }
          createMany: {
            args: Prisma.PendaftarTenagaPendidikCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PendaftarTenagaPendidikCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftarTenagaPendidikPayload>[]
          }
          delete: {
            args: Prisma.PendaftarTenagaPendidikDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftarTenagaPendidikPayload>
          }
          update: {
            args: Prisma.PendaftarTenagaPendidikUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftarTenagaPendidikPayload>
          }
          deleteMany: {
            args: Prisma.PendaftarTenagaPendidikDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PendaftarTenagaPendidikUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PendaftarTenagaPendidikUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftarTenagaPendidikPayload>[]
          }
          upsert: {
            args: Prisma.PendaftarTenagaPendidikUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftarTenagaPendidikPayload>
          }
          aggregate: {
            args: Prisma.PendaftarTenagaPendidikAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePendaftarTenagaPendidik>
          }
          groupBy: {
            args: Prisma.PendaftarTenagaPendidikGroupByArgs<ExtArgs>
            result: $Utils.Optional<PendaftarTenagaPendidikGroupByOutputType>[]
          }
          count: {
            args: Prisma.PendaftarTenagaPendidikCountArgs<ExtArgs>
            result: $Utils.Optional<PendaftarTenagaPendidikCountAggregateOutputType> | number
          }
        }
      }
      PesertaDidik: {
        payload: Prisma.$PesertaDidikPayload<ExtArgs>
        fields: Prisma.PesertaDidikFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PesertaDidikFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesertaDidikPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PesertaDidikFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesertaDidikPayload>
          }
          findFirst: {
            args: Prisma.PesertaDidikFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesertaDidikPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PesertaDidikFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesertaDidikPayload>
          }
          findMany: {
            args: Prisma.PesertaDidikFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesertaDidikPayload>[]
          }
          create: {
            args: Prisma.PesertaDidikCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesertaDidikPayload>
          }
          createMany: {
            args: Prisma.PesertaDidikCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PesertaDidikCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesertaDidikPayload>[]
          }
          delete: {
            args: Prisma.PesertaDidikDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesertaDidikPayload>
          }
          update: {
            args: Prisma.PesertaDidikUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesertaDidikPayload>
          }
          deleteMany: {
            args: Prisma.PesertaDidikDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PesertaDidikUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PesertaDidikUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesertaDidikPayload>[]
          }
          upsert: {
            args: Prisma.PesertaDidikUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesertaDidikPayload>
          }
          aggregate: {
            args: Prisma.PesertaDidikAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePesertaDidik>
          }
          groupBy: {
            args: Prisma.PesertaDidikGroupByArgs<ExtArgs>
            result: $Utils.Optional<PesertaDidikGroupByOutputType>[]
          }
          count: {
            args: Prisma.PesertaDidikCountArgs<ExtArgs>
            result: $Utils.Optional<PesertaDidikCountAggregateOutputType> | number
          }
        }
      }
      TenagaPendidik: {
        payload: Prisma.$TenagaPendidikPayload<ExtArgs>
        fields: Prisma.TenagaPendidikFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenagaPendidikFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenagaPendidikPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenagaPendidikFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenagaPendidikPayload>
          }
          findFirst: {
            args: Prisma.TenagaPendidikFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenagaPendidikPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenagaPendidikFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenagaPendidikPayload>
          }
          findMany: {
            args: Prisma.TenagaPendidikFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenagaPendidikPayload>[]
          }
          create: {
            args: Prisma.TenagaPendidikCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenagaPendidikPayload>
          }
          createMany: {
            args: Prisma.TenagaPendidikCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenagaPendidikCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenagaPendidikPayload>[]
          }
          delete: {
            args: Prisma.TenagaPendidikDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenagaPendidikPayload>
          }
          update: {
            args: Prisma.TenagaPendidikUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenagaPendidikPayload>
          }
          deleteMany: {
            args: Prisma.TenagaPendidikDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenagaPendidikUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TenagaPendidikUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenagaPendidikPayload>[]
          }
          upsert: {
            args: Prisma.TenagaPendidikUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenagaPendidikPayload>
          }
          aggregate: {
            args: Prisma.TenagaPendidikAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenagaPendidik>
          }
          groupBy: {
            args: Prisma.TenagaPendidikGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenagaPendidikGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenagaPendidikCountArgs<ExtArgs>
            result: $Utils.Optional<TenagaPendidikCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    artikelBerita?: ArtikelBeritaOmit
    kritikSaran?: KritikSaranOmit
    laporan?: LaporanOmit
    pendaftarPesertaDidik?: PendaftarPesertaDidikOmit
    pendaftarTenagaPendidik?: PendaftarTenagaPendidikOmit
    pesertaDidik?: PesertaDidikOmit
    tenagaPendidik?: TenagaPendidikOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    KritikSaran: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    KritikSaran?: boolean | UserCountOutputTypeCountKritikSaranArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountKritikSaranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KritikSaranWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    KritikSaran?: boolean | User$KritikSaranArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    KritikSaran?: boolean | User$KritikSaranArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      KritikSaran: Prisma.$KritikSaranPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    KritikSaran<T extends User$KritikSaranArgs<ExtArgs> = {}>(args?: Subset<T, User$KritikSaranArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KritikSaranPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.KritikSaran
   */
  export type User$KritikSaranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KritikSaran
     */
    select?: KritikSaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KritikSaran
     */
    omit?: KritikSaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KritikSaranInclude<ExtArgs> | null
    where?: KritikSaranWhereInput
    orderBy?: KritikSaranOrderByWithRelationInput | KritikSaranOrderByWithRelationInput[]
    cursor?: KritikSaranWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KritikSaranScalarFieldEnum | KritikSaranScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ArtikelBerita
   */

  export type AggregateArtikelBerita = {
    _count: ArtikelBeritaCountAggregateOutputType | null
    _min: ArtikelBeritaMinAggregateOutputType | null
    _max: ArtikelBeritaMaxAggregateOutputType | null
  }

  export type ArtikelBeritaMinAggregateOutputType = {
    id: string | null
    judul: string | null
    content: string | null
    imageUrl: string | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArtikelBeritaMaxAggregateOutputType = {
    id: string | null
    judul: string | null
    content: string | null
    imageUrl: string | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArtikelBeritaCountAggregateOutputType = {
    id: number
    judul: number
    content: number
    imageUrl: number
    isPublished: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArtikelBeritaMinAggregateInputType = {
    id?: true
    judul?: true
    content?: true
    imageUrl?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArtikelBeritaMaxAggregateInputType = {
    id?: true
    judul?: true
    content?: true
    imageUrl?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArtikelBeritaCountAggregateInputType = {
    id?: true
    judul?: true
    content?: true
    imageUrl?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArtikelBeritaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArtikelBerita to aggregate.
     */
    where?: ArtikelBeritaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtikelBeritas to fetch.
     */
    orderBy?: ArtikelBeritaOrderByWithRelationInput | ArtikelBeritaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtikelBeritaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtikelBeritas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtikelBeritas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArtikelBeritas
    **/
    _count?: true | ArtikelBeritaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtikelBeritaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtikelBeritaMaxAggregateInputType
  }

  export type GetArtikelBeritaAggregateType<T extends ArtikelBeritaAggregateArgs> = {
        [P in keyof T & keyof AggregateArtikelBerita]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtikelBerita[P]>
      : GetScalarType<T[P], AggregateArtikelBerita[P]>
  }




  export type ArtikelBeritaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtikelBeritaWhereInput
    orderBy?: ArtikelBeritaOrderByWithAggregationInput | ArtikelBeritaOrderByWithAggregationInput[]
    by: ArtikelBeritaScalarFieldEnum[] | ArtikelBeritaScalarFieldEnum
    having?: ArtikelBeritaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtikelBeritaCountAggregateInputType | true
    _min?: ArtikelBeritaMinAggregateInputType
    _max?: ArtikelBeritaMaxAggregateInputType
  }

  export type ArtikelBeritaGroupByOutputType = {
    id: string
    judul: string
    content: string
    imageUrl: string
    isPublished: boolean
    createdAt: Date
    updatedAt: Date
    _count: ArtikelBeritaCountAggregateOutputType | null
    _min: ArtikelBeritaMinAggregateOutputType | null
    _max: ArtikelBeritaMaxAggregateOutputType | null
  }

  type GetArtikelBeritaGroupByPayload<T extends ArtikelBeritaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtikelBeritaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtikelBeritaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtikelBeritaGroupByOutputType[P]>
            : GetScalarType<T[P], ArtikelBeritaGroupByOutputType[P]>
        }
      >
    >


  export type ArtikelBeritaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul?: boolean
    content?: boolean
    imageUrl?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["artikelBerita"]>

  export type ArtikelBeritaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul?: boolean
    content?: boolean
    imageUrl?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["artikelBerita"]>

  export type ArtikelBeritaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul?: boolean
    content?: boolean
    imageUrl?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["artikelBerita"]>

  export type ArtikelBeritaSelectScalar = {
    id?: boolean
    judul?: boolean
    content?: boolean
    imageUrl?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArtikelBeritaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "judul" | "content" | "imageUrl" | "isPublished" | "createdAt" | "updatedAt", ExtArgs["result"]["artikelBerita"]>

  export type $ArtikelBeritaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArtikelBerita"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      judul: string
      content: string
      imageUrl: string
      isPublished: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["artikelBerita"]>
    composites: {}
  }

  type ArtikelBeritaGetPayload<S extends boolean | null | undefined | ArtikelBeritaDefaultArgs> = $Result.GetResult<Prisma.$ArtikelBeritaPayload, S>

  type ArtikelBeritaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtikelBeritaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtikelBeritaCountAggregateInputType | true
    }

  export interface ArtikelBeritaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArtikelBerita'], meta: { name: 'ArtikelBerita' } }
    /**
     * Find zero or one ArtikelBerita that matches the filter.
     * @param {ArtikelBeritaFindUniqueArgs} args - Arguments to find a ArtikelBerita
     * @example
     * // Get one ArtikelBerita
     * const artikelBerita = await prisma.artikelBerita.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtikelBeritaFindUniqueArgs>(args: SelectSubset<T, ArtikelBeritaFindUniqueArgs<ExtArgs>>): Prisma__ArtikelBeritaClient<$Result.GetResult<Prisma.$ArtikelBeritaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArtikelBerita that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtikelBeritaFindUniqueOrThrowArgs} args - Arguments to find a ArtikelBerita
     * @example
     * // Get one ArtikelBerita
     * const artikelBerita = await prisma.artikelBerita.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtikelBeritaFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtikelBeritaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtikelBeritaClient<$Result.GetResult<Prisma.$ArtikelBeritaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArtikelBerita that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtikelBeritaFindFirstArgs} args - Arguments to find a ArtikelBerita
     * @example
     * // Get one ArtikelBerita
     * const artikelBerita = await prisma.artikelBerita.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtikelBeritaFindFirstArgs>(args?: SelectSubset<T, ArtikelBeritaFindFirstArgs<ExtArgs>>): Prisma__ArtikelBeritaClient<$Result.GetResult<Prisma.$ArtikelBeritaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArtikelBerita that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtikelBeritaFindFirstOrThrowArgs} args - Arguments to find a ArtikelBerita
     * @example
     * // Get one ArtikelBerita
     * const artikelBerita = await prisma.artikelBerita.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtikelBeritaFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtikelBeritaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtikelBeritaClient<$Result.GetResult<Prisma.$ArtikelBeritaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArtikelBeritas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtikelBeritaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArtikelBeritas
     * const artikelBeritas = await prisma.artikelBerita.findMany()
     * 
     * // Get first 10 ArtikelBeritas
     * const artikelBeritas = await prisma.artikelBerita.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artikelBeritaWithIdOnly = await prisma.artikelBerita.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArtikelBeritaFindManyArgs>(args?: SelectSubset<T, ArtikelBeritaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtikelBeritaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArtikelBerita.
     * @param {ArtikelBeritaCreateArgs} args - Arguments to create a ArtikelBerita.
     * @example
     * // Create one ArtikelBerita
     * const ArtikelBerita = await prisma.artikelBerita.create({
     *   data: {
     *     // ... data to create a ArtikelBerita
     *   }
     * })
     * 
     */
    create<T extends ArtikelBeritaCreateArgs>(args: SelectSubset<T, ArtikelBeritaCreateArgs<ExtArgs>>): Prisma__ArtikelBeritaClient<$Result.GetResult<Prisma.$ArtikelBeritaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArtikelBeritas.
     * @param {ArtikelBeritaCreateManyArgs} args - Arguments to create many ArtikelBeritas.
     * @example
     * // Create many ArtikelBeritas
     * const artikelBerita = await prisma.artikelBerita.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtikelBeritaCreateManyArgs>(args?: SelectSubset<T, ArtikelBeritaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArtikelBeritas and returns the data saved in the database.
     * @param {ArtikelBeritaCreateManyAndReturnArgs} args - Arguments to create many ArtikelBeritas.
     * @example
     * // Create many ArtikelBeritas
     * const artikelBerita = await prisma.artikelBerita.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArtikelBeritas and only return the `id`
     * const artikelBeritaWithIdOnly = await prisma.artikelBerita.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArtikelBeritaCreateManyAndReturnArgs>(args?: SelectSubset<T, ArtikelBeritaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtikelBeritaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArtikelBerita.
     * @param {ArtikelBeritaDeleteArgs} args - Arguments to delete one ArtikelBerita.
     * @example
     * // Delete one ArtikelBerita
     * const ArtikelBerita = await prisma.artikelBerita.delete({
     *   where: {
     *     // ... filter to delete one ArtikelBerita
     *   }
     * })
     * 
     */
    delete<T extends ArtikelBeritaDeleteArgs>(args: SelectSubset<T, ArtikelBeritaDeleteArgs<ExtArgs>>): Prisma__ArtikelBeritaClient<$Result.GetResult<Prisma.$ArtikelBeritaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArtikelBerita.
     * @param {ArtikelBeritaUpdateArgs} args - Arguments to update one ArtikelBerita.
     * @example
     * // Update one ArtikelBerita
     * const artikelBerita = await prisma.artikelBerita.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtikelBeritaUpdateArgs>(args: SelectSubset<T, ArtikelBeritaUpdateArgs<ExtArgs>>): Prisma__ArtikelBeritaClient<$Result.GetResult<Prisma.$ArtikelBeritaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArtikelBeritas.
     * @param {ArtikelBeritaDeleteManyArgs} args - Arguments to filter ArtikelBeritas to delete.
     * @example
     * // Delete a few ArtikelBeritas
     * const { count } = await prisma.artikelBerita.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtikelBeritaDeleteManyArgs>(args?: SelectSubset<T, ArtikelBeritaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArtikelBeritas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtikelBeritaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArtikelBeritas
     * const artikelBerita = await prisma.artikelBerita.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtikelBeritaUpdateManyArgs>(args: SelectSubset<T, ArtikelBeritaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArtikelBeritas and returns the data updated in the database.
     * @param {ArtikelBeritaUpdateManyAndReturnArgs} args - Arguments to update many ArtikelBeritas.
     * @example
     * // Update many ArtikelBeritas
     * const artikelBerita = await prisma.artikelBerita.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArtikelBeritas and only return the `id`
     * const artikelBeritaWithIdOnly = await prisma.artikelBerita.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArtikelBeritaUpdateManyAndReturnArgs>(args: SelectSubset<T, ArtikelBeritaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtikelBeritaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArtikelBerita.
     * @param {ArtikelBeritaUpsertArgs} args - Arguments to update or create a ArtikelBerita.
     * @example
     * // Update or create a ArtikelBerita
     * const artikelBerita = await prisma.artikelBerita.upsert({
     *   create: {
     *     // ... data to create a ArtikelBerita
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArtikelBerita we want to update
     *   }
     * })
     */
    upsert<T extends ArtikelBeritaUpsertArgs>(args: SelectSubset<T, ArtikelBeritaUpsertArgs<ExtArgs>>): Prisma__ArtikelBeritaClient<$Result.GetResult<Prisma.$ArtikelBeritaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArtikelBeritas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtikelBeritaCountArgs} args - Arguments to filter ArtikelBeritas to count.
     * @example
     * // Count the number of ArtikelBeritas
     * const count = await prisma.artikelBerita.count({
     *   where: {
     *     // ... the filter for the ArtikelBeritas we want to count
     *   }
     * })
    **/
    count<T extends ArtikelBeritaCountArgs>(
      args?: Subset<T, ArtikelBeritaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtikelBeritaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArtikelBerita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtikelBeritaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArtikelBeritaAggregateArgs>(args: Subset<T, ArtikelBeritaAggregateArgs>): Prisma.PrismaPromise<GetArtikelBeritaAggregateType<T>>

    /**
     * Group by ArtikelBerita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtikelBeritaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArtikelBeritaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtikelBeritaGroupByArgs['orderBy'] }
        : { orderBy?: ArtikelBeritaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArtikelBeritaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtikelBeritaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArtikelBerita model
   */
  readonly fields: ArtikelBeritaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArtikelBerita.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtikelBeritaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ArtikelBerita model
   */
  interface ArtikelBeritaFieldRefs {
    readonly id: FieldRef<"ArtikelBerita", 'String'>
    readonly judul: FieldRef<"ArtikelBerita", 'String'>
    readonly content: FieldRef<"ArtikelBerita", 'String'>
    readonly imageUrl: FieldRef<"ArtikelBerita", 'String'>
    readonly isPublished: FieldRef<"ArtikelBerita", 'Boolean'>
    readonly createdAt: FieldRef<"ArtikelBerita", 'DateTime'>
    readonly updatedAt: FieldRef<"ArtikelBerita", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ArtikelBerita findUnique
   */
  export type ArtikelBeritaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtikelBerita
     */
    select?: ArtikelBeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtikelBerita
     */
    omit?: ArtikelBeritaOmit<ExtArgs> | null
    /**
     * Filter, which ArtikelBerita to fetch.
     */
    where: ArtikelBeritaWhereUniqueInput
  }

  /**
   * ArtikelBerita findUniqueOrThrow
   */
  export type ArtikelBeritaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtikelBerita
     */
    select?: ArtikelBeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtikelBerita
     */
    omit?: ArtikelBeritaOmit<ExtArgs> | null
    /**
     * Filter, which ArtikelBerita to fetch.
     */
    where: ArtikelBeritaWhereUniqueInput
  }

  /**
   * ArtikelBerita findFirst
   */
  export type ArtikelBeritaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtikelBerita
     */
    select?: ArtikelBeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtikelBerita
     */
    omit?: ArtikelBeritaOmit<ExtArgs> | null
    /**
     * Filter, which ArtikelBerita to fetch.
     */
    where?: ArtikelBeritaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtikelBeritas to fetch.
     */
    orderBy?: ArtikelBeritaOrderByWithRelationInput | ArtikelBeritaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtikelBeritas.
     */
    cursor?: ArtikelBeritaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtikelBeritas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtikelBeritas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtikelBeritas.
     */
    distinct?: ArtikelBeritaScalarFieldEnum | ArtikelBeritaScalarFieldEnum[]
  }

  /**
   * ArtikelBerita findFirstOrThrow
   */
  export type ArtikelBeritaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtikelBerita
     */
    select?: ArtikelBeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtikelBerita
     */
    omit?: ArtikelBeritaOmit<ExtArgs> | null
    /**
     * Filter, which ArtikelBerita to fetch.
     */
    where?: ArtikelBeritaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtikelBeritas to fetch.
     */
    orderBy?: ArtikelBeritaOrderByWithRelationInput | ArtikelBeritaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtikelBeritas.
     */
    cursor?: ArtikelBeritaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtikelBeritas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtikelBeritas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtikelBeritas.
     */
    distinct?: ArtikelBeritaScalarFieldEnum | ArtikelBeritaScalarFieldEnum[]
  }

  /**
   * ArtikelBerita findMany
   */
  export type ArtikelBeritaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtikelBerita
     */
    select?: ArtikelBeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtikelBerita
     */
    omit?: ArtikelBeritaOmit<ExtArgs> | null
    /**
     * Filter, which ArtikelBeritas to fetch.
     */
    where?: ArtikelBeritaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtikelBeritas to fetch.
     */
    orderBy?: ArtikelBeritaOrderByWithRelationInput | ArtikelBeritaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArtikelBeritas.
     */
    cursor?: ArtikelBeritaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtikelBeritas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtikelBeritas.
     */
    skip?: number
    distinct?: ArtikelBeritaScalarFieldEnum | ArtikelBeritaScalarFieldEnum[]
  }

  /**
   * ArtikelBerita create
   */
  export type ArtikelBeritaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtikelBerita
     */
    select?: ArtikelBeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtikelBerita
     */
    omit?: ArtikelBeritaOmit<ExtArgs> | null
    /**
     * The data needed to create a ArtikelBerita.
     */
    data: XOR<ArtikelBeritaCreateInput, ArtikelBeritaUncheckedCreateInput>
  }

  /**
   * ArtikelBerita createMany
   */
  export type ArtikelBeritaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArtikelBeritas.
     */
    data: ArtikelBeritaCreateManyInput | ArtikelBeritaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArtikelBerita createManyAndReturn
   */
  export type ArtikelBeritaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtikelBerita
     */
    select?: ArtikelBeritaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArtikelBerita
     */
    omit?: ArtikelBeritaOmit<ExtArgs> | null
    /**
     * The data used to create many ArtikelBeritas.
     */
    data: ArtikelBeritaCreateManyInput | ArtikelBeritaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArtikelBerita update
   */
  export type ArtikelBeritaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtikelBerita
     */
    select?: ArtikelBeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtikelBerita
     */
    omit?: ArtikelBeritaOmit<ExtArgs> | null
    /**
     * The data needed to update a ArtikelBerita.
     */
    data: XOR<ArtikelBeritaUpdateInput, ArtikelBeritaUncheckedUpdateInput>
    /**
     * Choose, which ArtikelBerita to update.
     */
    where: ArtikelBeritaWhereUniqueInput
  }

  /**
   * ArtikelBerita updateMany
   */
  export type ArtikelBeritaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArtikelBeritas.
     */
    data: XOR<ArtikelBeritaUpdateManyMutationInput, ArtikelBeritaUncheckedUpdateManyInput>
    /**
     * Filter which ArtikelBeritas to update
     */
    where?: ArtikelBeritaWhereInput
    /**
     * Limit how many ArtikelBeritas to update.
     */
    limit?: number
  }

  /**
   * ArtikelBerita updateManyAndReturn
   */
  export type ArtikelBeritaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtikelBerita
     */
    select?: ArtikelBeritaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArtikelBerita
     */
    omit?: ArtikelBeritaOmit<ExtArgs> | null
    /**
     * The data used to update ArtikelBeritas.
     */
    data: XOR<ArtikelBeritaUpdateManyMutationInput, ArtikelBeritaUncheckedUpdateManyInput>
    /**
     * Filter which ArtikelBeritas to update
     */
    where?: ArtikelBeritaWhereInput
    /**
     * Limit how many ArtikelBeritas to update.
     */
    limit?: number
  }

  /**
   * ArtikelBerita upsert
   */
  export type ArtikelBeritaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtikelBerita
     */
    select?: ArtikelBeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtikelBerita
     */
    omit?: ArtikelBeritaOmit<ExtArgs> | null
    /**
     * The filter to search for the ArtikelBerita to update in case it exists.
     */
    where: ArtikelBeritaWhereUniqueInput
    /**
     * In case the ArtikelBerita found by the `where` argument doesn't exist, create a new ArtikelBerita with this data.
     */
    create: XOR<ArtikelBeritaCreateInput, ArtikelBeritaUncheckedCreateInput>
    /**
     * In case the ArtikelBerita was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtikelBeritaUpdateInput, ArtikelBeritaUncheckedUpdateInput>
  }

  /**
   * ArtikelBerita delete
   */
  export type ArtikelBeritaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtikelBerita
     */
    select?: ArtikelBeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtikelBerita
     */
    omit?: ArtikelBeritaOmit<ExtArgs> | null
    /**
     * Filter which ArtikelBerita to delete.
     */
    where: ArtikelBeritaWhereUniqueInput
  }

  /**
   * ArtikelBerita deleteMany
   */
  export type ArtikelBeritaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArtikelBeritas to delete
     */
    where?: ArtikelBeritaWhereInput
    /**
     * Limit how many ArtikelBeritas to delete.
     */
    limit?: number
  }

  /**
   * ArtikelBerita without action
   */
  export type ArtikelBeritaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtikelBerita
     */
    select?: ArtikelBeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtikelBerita
     */
    omit?: ArtikelBeritaOmit<ExtArgs> | null
  }


  /**
   * Model KritikSaran
   */

  export type AggregateKritikSaran = {
    _count: KritikSaranCountAggregateOutputType | null
    _min: KritikSaranMinAggregateOutputType | null
    _max: KritikSaranMaxAggregateOutputType | null
  }

  export type KritikSaranMinAggregateOutputType = {
    id: string | null
    userId: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KritikSaranMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KritikSaranCountAggregateOutputType = {
    id: number
    userId: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type KritikSaranMinAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KritikSaranMaxAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KritikSaranCountAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type KritikSaranAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KritikSaran to aggregate.
     */
    where?: KritikSaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KritikSarans to fetch.
     */
    orderBy?: KritikSaranOrderByWithRelationInput | KritikSaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KritikSaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KritikSarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KritikSarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KritikSarans
    **/
    _count?: true | KritikSaranCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KritikSaranMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KritikSaranMaxAggregateInputType
  }

  export type GetKritikSaranAggregateType<T extends KritikSaranAggregateArgs> = {
        [P in keyof T & keyof AggregateKritikSaran]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKritikSaran[P]>
      : GetScalarType<T[P], AggregateKritikSaran[P]>
  }




  export type KritikSaranGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KritikSaranWhereInput
    orderBy?: KritikSaranOrderByWithAggregationInput | KritikSaranOrderByWithAggregationInput[]
    by: KritikSaranScalarFieldEnum[] | KritikSaranScalarFieldEnum
    having?: KritikSaranScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KritikSaranCountAggregateInputType | true
    _min?: KritikSaranMinAggregateInputType
    _max?: KritikSaranMaxAggregateInputType
  }

  export type KritikSaranGroupByOutputType = {
    id: string
    userId: string
    content: string
    createdAt: Date
    updatedAt: Date
    _count: KritikSaranCountAggregateOutputType | null
    _min: KritikSaranMinAggregateOutputType | null
    _max: KritikSaranMaxAggregateOutputType | null
  }

  type GetKritikSaranGroupByPayload<T extends KritikSaranGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KritikSaranGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KritikSaranGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KritikSaranGroupByOutputType[P]>
            : GetScalarType<T[P], KritikSaranGroupByOutputType[P]>
        }
      >
    >


  export type KritikSaranSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kritikSaran"]>

  export type KritikSaranSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kritikSaran"]>

  export type KritikSaranSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kritikSaran"]>

  export type KritikSaranSelectScalar = {
    id?: boolean
    userId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type KritikSaranOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "content" | "createdAt" | "updatedAt", ExtArgs["result"]["kritikSaran"]>
  export type KritikSaranInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type KritikSaranIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type KritikSaranIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $KritikSaranPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KritikSaran"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      content: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["kritikSaran"]>
    composites: {}
  }

  type KritikSaranGetPayload<S extends boolean | null | undefined | KritikSaranDefaultArgs> = $Result.GetResult<Prisma.$KritikSaranPayload, S>

  type KritikSaranCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KritikSaranFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KritikSaranCountAggregateInputType | true
    }

  export interface KritikSaranDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KritikSaran'], meta: { name: 'KritikSaran' } }
    /**
     * Find zero or one KritikSaran that matches the filter.
     * @param {KritikSaranFindUniqueArgs} args - Arguments to find a KritikSaran
     * @example
     * // Get one KritikSaran
     * const kritikSaran = await prisma.kritikSaran.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KritikSaranFindUniqueArgs>(args: SelectSubset<T, KritikSaranFindUniqueArgs<ExtArgs>>): Prisma__KritikSaranClient<$Result.GetResult<Prisma.$KritikSaranPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one KritikSaran that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KritikSaranFindUniqueOrThrowArgs} args - Arguments to find a KritikSaran
     * @example
     * // Get one KritikSaran
     * const kritikSaran = await prisma.kritikSaran.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KritikSaranFindUniqueOrThrowArgs>(args: SelectSubset<T, KritikSaranFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KritikSaranClient<$Result.GetResult<Prisma.$KritikSaranPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KritikSaran that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KritikSaranFindFirstArgs} args - Arguments to find a KritikSaran
     * @example
     * // Get one KritikSaran
     * const kritikSaran = await prisma.kritikSaran.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KritikSaranFindFirstArgs>(args?: SelectSubset<T, KritikSaranFindFirstArgs<ExtArgs>>): Prisma__KritikSaranClient<$Result.GetResult<Prisma.$KritikSaranPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KritikSaran that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KritikSaranFindFirstOrThrowArgs} args - Arguments to find a KritikSaran
     * @example
     * // Get one KritikSaran
     * const kritikSaran = await prisma.kritikSaran.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KritikSaranFindFirstOrThrowArgs>(args?: SelectSubset<T, KritikSaranFindFirstOrThrowArgs<ExtArgs>>): Prisma__KritikSaranClient<$Result.GetResult<Prisma.$KritikSaranPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more KritikSarans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KritikSaranFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KritikSarans
     * const kritikSarans = await prisma.kritikSaran.findMany()
     * 
     * // Get first 10 KritikSarans
     * const kritikSarans = await prisma.kritikSaran.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kritikSaranWithIdOnly = await prisma.kritikSaran.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KritikSaranFindManyArgs>(args?: SelectSubset<T, KritikSaranFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KritikSaranPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a KritikSaran.
     * @param {KritikSaranCreateArgs} args - Arguments to create a KritikSaran.
     * @example
     * // Create one KritikSaran
     * const KritikSaran = await prisma.kritikSaran.create({
     *   data: {
     *     // ... data to create a KritikSaran
     *   }
     * })
     * 
     */
    create<T extends KritikSaranCreateArgs>(args: SelectSubset<T, KritikSaranCreateArgs<ExtArgs>>): Prisma__KritikSaranClient<$Result.GetResult<Prisma.$KritikSaranPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many KritikSarans.
     * @param {KritikSaranCreateManyArgs} args - Arguments to create many KritikSarans.
     * @example
     * // Create many KritikSarans
     * const kritikSaran = await prisma.kritikSaran.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KritikSaranCreateManyArgs>(args?: SelectSubset<T, KritikSaranCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KritikSarans and returns the data saved in the database.
     * @param {KritikSaranCreateManyAndReturnArgs} args - Arguments to create many KritikSarans.
     * @example
     * // Create many KritikSarans
     * const kritikSaran = await prisma.kritikSaran.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KritikSarans and only return the `id`
     * const kritikSaranWithIdOnly = await prisma.kritikSaran.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KritikSaranCreateManyAndReturnArgs>(args?: SelectSubset<T, KritikSaranCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KritikSaranPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a KritikSaran.
     * @param {KritikSaranDeleteArgs} args - Arguments to delete one KritikSaran.
     * @example
     * // Delete one KritikSaran
     * const KritikSaran = await prisma.kritikSaran.delete({
     *   where: {
     *     // ... filter to delete one KritikSaran
     *   }
     * })
     * 
     */
    delete<T extends KritikSaranDeleteArgs>(args: SelectSubset<T, KritikSaranDeleteArgs<ExtArgs>>): Prisma__KritikSaranClient<$Result.GetResult<Prisma.$KritikSaranPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one KritikSaran.
     * @param {KritikSaranUpdateArgs} args - Arguments to update one KritikSaran.
     * @example
     * // Update one KritikSaran
     * const kritikSaran = await prisma.kritikSaran.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KritikSaranUpdateArgs>(args: SelectSubset<T, KritikSaranUpdateArgs<ExtArgs>>): Prisma__KritikSaranClient<$Result.GetResult<Prisma.$KritikSaranPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more KritikSarans.
     * @param {KritikSaranDeleteManyArgs} args - Arguments to filter KritikSarans to delete.
     * @example
     * // Delete a few KritikSarans
     * const { count } = await prisma.kritikSaran.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KritikSaranDeleteManyArgs>(args?: SelectSubset<T, KritikSaranDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KritikSarans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KritikSaranUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KritikSarans
     * const kritikSaran = await prisma.kritikSaran.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KritikSaranUpdateManyArgs>(args: SelectSubset<T, KritikSaranUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KritikSarans and returns the data updated in the database.
     * @param {KritikSaranUpdateManyAndReturnArgs} args - Arguments to update many KritikSarans.
     * @example
     * // Update many KritikSarans
     * const kritikSaran = await prisma.kritikSaran.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more KritikSarans and only return the `id`
     * const kritikSaranWithIdOnly = await prisma.kritikSaran.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KritikSaranUpdateManyAndReturnArgs>(args: SelectSubset<T, KritikSaranUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KritikSaranPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one KritikSaran.
     * @param {KritikSaranUpsertArgs} args - Arguments to update or create a KritikSaran.
     * @example
     * // Update or create a KritikSaran
     * const kritikSaran = await prisma.kritikSaran.upsert({
     *   create: {
     *     // ... data to create a KritikSaran
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KritikSaran we want to update
     *   }
     * })
     */
    upsert<T extends KritikSaranUpsertArgs>(args: SelectSubset<T, KritikSaranUpsertArgs<ExtArgs>>): Prisma__KritikSaranClient<$Result.GetResult<Prisma.$KritikSaranPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of KritikSarans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KritikSaranCountArgs} args - Arguments to filter KritikSarans to count.
     * @example
     * // Count the number of KritikSarans
     * const count = await prisma.kritikSaran.count({
     *   where: {
     *     // ... the filter for the KritikSarans we want to count
     *   }
     * })
    **/
    count<T extends KritikSaranCountArgs>(
      args?: Subset<T, KritikSaranCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KritikSaranCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KritikSaran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KritikSaranAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KritikSaranAggregateArgs>(args: Subset<T, KritikSaranAggregateArgs>): Prisma.PrismaPromise<GetKritikSaranAggregateType<T>>

    /**
     * Group by KritikSaran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KritikSaranGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KritikSaranGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KritikSaranGroupByArgs['orderBy'] }
        : { orderBy?: KritikSaranGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KritikSaranGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKritikSaranGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KritikSaran model
   */
  readonly fields: KritikSaranFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KritikSaran.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KritikSaranClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the KritikSaran model
   */
  interface KritikSaranFieldRefs {
    readonly id: FieldRef<"KritikSaran", 'String'>
    readonly userId: FieldRef<"KritikSaran", 'String'>
    readonly content: FieldRef<"KritikSaran", 'String'>
    readonly createdAt: FieldRef<"KritikSaran", 'DateTime'>
    readonly updatedAt: FieldRef<"KritikSaran", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * KritikSaran findUnique
   */
  export type KritikSaranFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KritikSaran
     */
    select?: KritikSaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KritikSaran
     */
    omit?: KritikSaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KritikSaranInclude<ExtArgs> | null
    /**
     * Filter, which KritikSaran to fetch.
     */
    where: KritikSaranWhereUniqueInput
  }

  /**
   * KritikSaran findUniqueOrThrow
   */
  export type KritikSaranFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KritikSaran
     */
    select?: KritikSaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KritikSaran
     */
    omit?: KritikSaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KritikSaranInclude<ExtArgs> | null
    /**
     * Filter, which KritikSaran to fetch.
     */
    where: KritikSaranWhereUniqueInput
  }

  /**
   * KritikSaran findFirst
   */
  export type KritikSaranFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KritikSaran
     */
    select?: KritikSaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KritikSaran
     */
    omit?: KritikSaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KritikSaranInclude<ExtArgs> | null
    /**
     * Filter, which KritikSaran to fetch.
     */
    where?: KritikSaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KritikSarans to fetch.
     */
    orderBy?: KritikSaranOrderByWithRelationInput | KritikSaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KritikSarans.
     */
    cursor?: KritikSaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KritikSarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KritikSarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KritikSarans.
     */
    distinct?: KritikSaranScalarFieldEnum | KritikSaranScalarFieldEnum[]
  }

  /**
   * KritikSaran findFirstOrThrow
   */
  export type KritikSaranFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KritikSaran
     */
    select?: KritikSaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KritikSaran
     */
    omit?: KritikSaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KritikSaranInclude<ExtArgs> | null
    /**
     * Filter, which KritikSaran to fetch.
     */
    where?: KritikSaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KritikSarans to fetch.
     */
    orderBy?: KritikSaranOrderByWithRelationInput | KritikSaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KritikSarans.
     */
    cursor?: KritikSaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KritikSarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KritikSarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KritikSarans.
     */
    distinct?: KritikSaranScalarFieldEnum | KritikSaranScalarFieldEnum[]
  }

  /**
   * KritikSaran findMany
   */
  export type KritikSaranFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KritikSaran
     */
    select?: KritikSaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KritikSaran
     */
    omit?: KritikSaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KritikSaranInclude<ExtArgs> | null
    /**
     * Filter, which KritikSarans to fetch.
     */
    where?: KritikSaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KritikSarans to fetch.
     */
    orderBy?: KritikSaranOrderByWithRelationInput | KritikSaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KritikSarans.
     */
    cursor?: KritikSaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KritikSarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KritikSarans.
     */
    skip?: number
    distinct?: KritikSaranScalarFieldEnum | KritikSaranScalarFieldEnum[]
  }

  /**
   * KritikSaran create
   */
  export type KritikSaranCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KritikSaran
     */
    select?: KritikSaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KritikSaran
     */
    omit?: KritikSaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KritikSaranInclude<ExtArgs> | null
    /**
     * The data needed to create a KritikSaran.
     */
    data: XOR<KritikSaranCreateInput, KritikSaranUncheckedCreateInput>
  }

  /**
   * KritikSaran createMany
   */
  export type KritikSaranCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KritikSarans.
     */
    data: KritikSaranCreateManyInput | KritikSaranCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KritikSaran createManyAndReturn
   */
  export type KritikSaranCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KritikSaran
     */
    select?: KritikSaranSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KritikSaran
     */
    omit?: KritikSaranOmit<ExtArgs> | null
    /**
     * The data used to create many KritikSarans.
     */
    data: KritikSaranCreateManyInput | KritikSaranCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KritikSaranIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * KritikSaran update
   */
  export type KritikSaranUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KritikSaran
     */
    select?: KritikSaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KritikSaran
     */
    omit?: KritikSaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KritikSaranInclude<ExtArgs> | null
    /**
     * The data needed to update a KritikSaran.
     */
    data: XOR<KritikSaranUpdateInput, KritikSaranUncheckedUpdateInput>
    /**
     * Choose, which KritikSaran to update.
     */
    where: KritikSaranWhereUniqueInput
  }

  /**
   * KritikSaran updateMany
   */
  export type KritikSaranUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KritikSarans.
     */
    data: XOR<KritikSaranUpdateManyMutationInput, KritikSaranUncheckedUpdateManyInput>
    /**
     * Filter which KritikSarans to update
     */
    where?: KritikSaranWhereInput
    /**
     * Limit how many KritikSarans to update.
     */
    limit?: number
  }

  /**
   * KritikSaran updateManyAndReturn
   */
  export type KritikSaranUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KritikSaran
     */
    select?: KritikSaranSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KritikSaran
     */
    omit?: KritikSaranOmit<ExtArgs> | null
    /**
     * The data used to update KritikSarans.
     */
    data: XOR<KritikSaranUpdateManyMutationInput, KritikSaranUncheckedUpdateManyInput>
    /**
     * Filter which KritikSarans to update
     */
    where?: KritikSaranWhereInput
    /**
     * Limit how many KritikSarans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KritikSaranIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * KritikSaran upsert
   */
  export type KritikSaranUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KritikSaran
     */
    select?: KritikSaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KritikSaran
     */
    omit?: KritikSaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KritikSaranInclude<ExtArgs> | null
    /**
     * The filter to search for the KritikSaran to update in case it exists.
     */
    where: KritikSaranWhereUniqueInput
    /**
     * In case the KritikSaran found by the `where` argument doesn't exist, create a new KritikSaran with this data.
     */
    create: XOR<KritikSaranCreateInput, KritikSaranUncheckedCreateInput>
    /**
     * In case the KritikSaran was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KritikSaranUpdateInput, KritikSaranUncheckedUpdateInput>
  }

  /**
   * KritikSaran delete
   */
  export type KritikSaranDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KritikSaran
     */
    select?: KritikSaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KritikSaran
     */
    omit?: KritikSaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KritikSaranInclude<ExtArgs> | null
    /**
     * Filter which KritikSaran to delete.
     */
    where: KritikSaranWhereUniqueInput
  }

  /**
   * KritikSaran deleteMany
   */
  export type KritikSaranDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KritikSarans to delete
     */
    where?: KritikSaranWhereInput
    /**
     * Limit how many KritikSarans to delete.
     */
    limit?: number
  }

  /**
   * KritikSaran without action
   */
  export type KritikSaranDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KritikSaran
     */
    select?: KritikSaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KritikSaran
     */
    omit?: KritikSaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KritikSaranInclude<ExtArgs> | null
  }


  /**
   * Model Laporan
   */

  export type AggregateLaporan = {
    _count: LaporanCountAggregateOutputType | null
    _min: LaporanMinAggregateOutputType | null
    _max: LaporanMaxAggregateOutputType | null
  }

  export type LaporanMinAggregateOutputType = {
    id: string | null
    judul: string | null
    content: string | null
    author: string | null
    createdAt: Date | null
  }

  export type LaporanMaxAggregateOutputType = {
    id: string | null
    judul: string | null
    content: string | null
    author: string | null
    createdAt: Date | null
  }

  export type LaporanCountAggregateOutputType = {
    id: number
    judul: number
    content: number
    author: number
    createdAt: number
    _all: number
  }


  export type LaporanMinAggregateInputType = {
    id?: true
    judul?: true
    content?: true
    author?: true
    createdAt?: true
  }

  export type LaporanMaxAggregateInputType = {
    id?: true
    judul?: true
    content?: true
    author?: true
    createdAt?: true
  }

  export type LaporanCountAggregateInputType = {
    id?: true
    judul?: true
    content?: true
    author?: true
    createdAt?: true
    _all?: true
  }

  export type LaporanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Laporan to aggregate.
     */
    where?: LaporanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Laporans to fetch.
     */
    orderBy?: LaporanOrderByWithRelationInput | LaporanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LaporanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Laporans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Laporans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Laporans
    **/
    _count?: true | LaporanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LaporanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LaporanMaxAggregateInputType
  }

  export type GetLaporanAggregateType<T extends LaporanAggregateArgs> = {
        [P in keyof T & keyof AggregateLaporan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLaporan[P]>
      : GetScalarType<T[P], AggregateLaporan[P]>
  }




  export type LaporanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LaporanWhereInput
    orderBy?: LaporanOrderByWithAggregationInput | LaporanOrderByWithAggregationInput[]
    by: LaporanScalarFieldEnum[] | LaporanScalarFieldEnum
    having?: LaporanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LaporanCountAggregateInputType | true
    _min?: LaporanMinAggregateInputType
    _max?: LaporanMaxAggregateInputType
  }

  export type LaporanGroupByOutputType = {
    id: string
    judul: string
    content: string
    author: string
    createdAt: Date
    _count: LaporanCountAggregateOutputType | null
    _min: LaporanMinAggregateOutputType | null
    _max: LaporanMaxAggregateOutputType | null
  }

  type GetLaporanGroupByPayload<T extends LaporanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LaporanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LaporanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LaporanGroupByOutputType[P]>
            : GetScalarType<T[P], LaporanGroupByOutputType[P]>
        }
      >
    >


  export type LaporanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul?: boolean
    content?: boolean
    author?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["laporan"]>

  export type LaporanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul?: boolean
    content?: boolean
    author?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["laporan"]>

  export type LaporanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul?: boolean
    content?: boolean
    author?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["laporan"]>

  export type LaporanSelectScalar = {
    id?: boolean
    judul?: boolean
    content?: boolean
    author?: boolean
    createdAt?: boolean
  }

  export type LaporanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "judul" | "content" | "author" | "createdAt", ExtArgs["result"]["laporan"]>

  export type $LaporanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Laporan"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      judul: string
      content: string
      author: string
      createdAt: Date
    }, ExtArgs["result"]["laporan"]>
    composites: {}
  }

  type LaporanGetPayload<S extends boolean | null | undefined | LaporanDefaultArgs> = $Result.GetResult<Prisma.$LaporanPayload, S>

  type LaporanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LaporanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LaporanCountAggregateInputType | true
    }

  export interface LaporanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Laporan'], meta: { name: 'Laporan' } }
    /**
     * Find zero or one Laporan that matches the filter.
     * @param {LaporanFindUniqueArgs} args - Arguments to find a Laporan
     * @example
     * // Get one Laporan
     * const laporan = await prisma.laporan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LaporanFindUniqueArgs>(args: SelectSubset<T, LaporanFindUniqueArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Laporan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LaporanFindUniqueOrThrowArgs} args - Arguments to find a Laporan
     * @example
     * // Get one Laporan
     * const laporan = await prisma.laporan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LaporanFindUniqueOrThrowArgs>(args: SelectSubset<T, LaporanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Laporan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanFindFirstArgs} args - Arguments to find a Laporan
     * @example
     * // Get one Laporan
     * const laporan = await prisma.laporan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LaporanFindFirstArgs>(args?: SelectSubset<T, LaporanFindFirstArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Laporan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanFindFirstOrThrowArgs} args - Arguments to find a Laporan
     * @example
     * // Get one Laporan
     * const laporan = await prisma.laporan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LaporanFindFirstOrThrowArgs>(args?: SelectSubset<T, LaporanFindFirstOrThrowArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Laporans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Laporans
     * const laporans = await prisma.laporan.findMany()
     * 
     * // Get first 10 Laporans
     * const laporans = await prisma.laporan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const laporanWithIdOnly = await prisma.laporan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LaporanFindManyArgs>(args?: SelectSubset<T, LaporanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Laporan.
     * @param {LaporanCreateArgs} args - Arguments to create a Laporan.
     * @example
     * // Create one Laporan
     * const Laporan = await prisma.laporan.create({
     *   data: {
     *     // ... data to create a Laporan
     *   }
     * })
     * 
     */
    create<T extends LaporanCreateArgs>(args: SelectSubset<T, LaporanCreateArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Laporans.
     * @param {LaporanCreateManyArgs} args - Arguments to create many Laporans.
     * @example
     * // Create many Laporans
     * const laporan = await prisma.laporan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LaporanCreateManyArgs>(args?: SelectSubset<T, LaporanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Laporans and returns the data saved in the database.
     * @param {LaporanCreateManyAndReturnArgs} args - Arguments to create many Laporans.
     * @example
     * // Create many Laporans
     * const laporan = await prisma.laporan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Laporans and only return the `id`
     * const laporanWithIdOnly = await prisma.laporan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LaporanCreateManyAndReturnArgs>(args?: SelectSubset<T, LaporanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Laporan.
     * @param {LaporanDeleteArgs} args - Arguments to delete one Laporan.
     * @example
     * // Delete one Laporan
     * const Laporan = await prisma.laporan.delete({
     *   where: {
     *     // ... filter to delete one Laporan
     *   }
     * })
     * 
     */
    delete<T extends LaporanDeleteArgs>(args: SelectSubset<T, LaporanDeleteArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Laporan.
     * @param {LaporanUpdateArgs} args - Arguments to update one Laporan.
     * @example
     * // Update one Laporan
     * const laporan = await prisma.laporan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LaporanUpdateArgs>(args: SelectSubset<T, LaporanUpdateArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Laporans.
     * @param {LaporanDeleteManyArgs} args - Arguments to filter Laporans to delete.
     * @example
     * // Delete a few Laporans
     * const { count } = await prisma.laporan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LaporanDeleteManyArgs>(args?: SelectSubset<T, LaporanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Laporans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Laporans
     * const laporan = await prisma.laporan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LaporanUpdateManyArgs>(args: SelectSubset<T, LaporanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Laporans and returns the data updated in the database.
     * @param {LaporanUpdateManyAndReturnArgs} args - Arguments to update many Laporans.
     * @example
     * // Update many Laporans
     * const laporan = await prisma.laporan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Laporans and only return the `id`
     * const laporanWithIdOnly = await prisma.laporan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LaporanUpdateManyAndReturnArgs>(args: SelectSubset<T, LaporanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Laporan.
     * @param {LaporanUpsertArgs} args - Arguments to update or create a Laporan.
     * @example
     * // Update or create a Laporan
     * const laporan = await prisma.laporan.upsert({
     *   create: {
     *     // ... data to create a Laporan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Laporan we want to update
     *   }
     * })
     */
    upsert<T extends LaporanUpsertArgs>(args: SelectSubset<T, LaporanUpsertArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Laporans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanCountArgs} args - Arguments to filter Laporans to count.
     * @example
     * // Count the number of Laporans
     * const count = await prisma.laporan.count({
     *   where: {
     *     // ... the filter for the Laporans we want to count
     *   }
     * })
    **/
    count<T extends LaporanCountArgs>(
      args?: Subset<T, LaporanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LaporanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Laporan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LaporanAggregateArgs>(args: Subset<T, LaporanAggregateArgs>): Prisma.PrismaPromise<GetLaporanAggregateType<T>>

    /**
     * Group by Laporan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LaporanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LaporanGroupByArgs['orderBy'] }
        : { orderBy?: LaporanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LaporanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLaporanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Laporan model
   */
  readonly fields: LaporanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Laporan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LaporanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Laporan model
   */
  interface LaporanFieldRefs {
    readonly id: FieldRef<"Laporan", 'String'>
    readonly judul: FieldRef<"Laporan", 'String'>
    readonly content: FieldRef<"Laporan", 'String'>
    readonly author: FieldRef<"Laporan", 'String'>
    readonly createdAt: FieldRef<"Laporan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Laporan findUnique
   */
  export type LaporanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Filter, which Laporan to fetch.
     */
    where: LaporanWhereUniqueInput
  }

  /**
   * Laporan findUniqueOrThrow
   */
  export type LaporanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Filter, which Laporan to fetch.
     */
    where: LaporanWhereUniqueInput
  }

  /**
   * Laporan findFirst
   */
  export type LaporanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Filter, which Laporan to fetch.
     */
    where?: LaporanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Laporans to fetch.
     */
    orderBy?: LaporanOrderByWithRelationInput | LaporanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Laporans.
     */
    cursor?: LaporanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Laporans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Laporans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Laporans.
     */
    distinct?: LaporanScalarFieldEnum | LaporanScalarFieldEnum[]
  }

  /**
   * Laporan findFirstOrThrow
   */
  export type LaporanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Filter, which Laporan to fetch.
     */
    where?: LaporanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Laporans to fetch.
     */
    orderBy?: LaporanOrderByWithRelationInput | LaporanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Laporans.
     */
    cursor?: LaporanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Laporans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Laporans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Laporans.
     */
    distinct?: LaporanScalarFieldEnum | LaporanScalarFieldEnum[]
  }

  /**
   * Laporan findMany
   */
  export type LaporanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Filter, which Laporans to fetch.
     */
    where?: LaporanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Laporans to fetch.
     */
    orderBy?: LaporanOrderByWithRelationInput | LaporanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Laporans.
     */
    cursor?: LaporanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Laporans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Laporans.
     */
    skip?: number
    distinct?: LaporanScalarFieldEnum | LaporanScalarFieldEnum[]
  }

  /**
   * Laporan create
   */
  export type LaporanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * The data needed to create a Laporan.
     */
    data: XOR<LaporanCreateInput, LaporanUncheckedCreateInput>
  }

  /**
   * Laporan createMany
   */
  export type LaporanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Laporans.
     */
    data: LaporanCreateManyInput | LaporanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Laporan createManyAndReturn
   */
  export type LaporanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * The data used to create many Laporans.
     */
    data: LaporanCreateManyInput | LaporanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Laporan update
   */
  export type LaporanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * The data needed to update a Laporan.
     */
    data: XOR<LaporanUpdateInput, LaporanUncheckedUpdateInput>
    /**
     * Choose, which Laporan to update.
     */
    where: LaporanWhereUniqueInput
  }

  /**
   * Laporan updateMany
   */
  export type LaporanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Laporans.
     */
    data: XOR<LaporanUpdateManyMutationInput, LaporanUncheckedUpdateManyInput>
    /**
     * Filter which Laporans to update
     */
    where?: LaporanWhereInput
    /**
     * Limit how many Laporans to update.
     */
    limit?: number
  }

  /**
   * Laporan updateManyAndReturn
   */
  export type LaporanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * The data used to update Laporans.
     */
    data: XOR<LaporanUpdateManyMutationInput, LaporanUncheckedUpdateManyInput>
    /**
     * Filter which Laporans to update
     */
    where?: LaporanWhereInput
    /**
     * Limit how many Laporans to update.
     */
    limit?: number
  }

  /**
   * Laporan upsert
   */
  export type LaporanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * The filter to search for the Laporan to update in case it exists.
     */
    where: LaporanWhereUniqueInput
    /**
     * In case the Laporan found by the `where` argument doesn't exist, create a new Laporan with this data.
     */
    create: XOR<LaporanCreateInput, LaporanUncheckedCreateInput>
    /**
     * In case the Laporan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LaporanUpdateInput, LaporanUncheckedUpdateInput>
  }

  /**
   * Laporan delete
   */
  export type LaporanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Filter which Laporan to delete.
     */
    where: LaporanWhereUniqueInput
  }

  /**
   * Laporan deleteMany
   */
  export type LaporanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Laporans to delete
     */
    where?: LaporanWhereInput
    /**
     * Limit how many Laporans to delete.
     */
    limit?: number
  }

  /**
   * Laporan without action
   */
  export type LaporanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
  }


  /**
   * Model PendaftarPesertaDidik
   */

  export type AggregatePendaftarPesertaDidik = {
    _count: PendaftarPesertaDidikCountAggregateOutputType | null
    _min: PendaftarPesertaDidikMinAggregateOutputType | null
    _max: PendaftarPesertaDidikMaxAggregateOutputType | null
  }

  export type PendaftarPesertaDidikMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    alamat: string | null
    ttl: Date | null
    namaWali: string | null
    noHpWali: string | null
    createdAt: Date | null
  }

  export type PendaftarPesertaDidikMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    alamat: string | null
    ttl: Date | null
    namaWali: string | null
    noHpWali: string | null
    createdAt: Date | null
  }

  export type PendaftarPesertaDidikCountAggregateOutputType = {
    id: number
    fullName: number
    alamat: number
    ttl: number
    namaWali: number
    noHpWali: number
    createdAt: number
    _all: number
  }


  export type PendaftarPesertaDidikMinAggregateInputType = {
    id?: true
    fullName?: true
    alamat?: true
    ttl?: true
    namaWali?: true
    noHpWali?: true
    createdAt?: true
  }

  export type PendaftarPesertaDidikMaxAggregateInputType = {
    id?: true
    fullName?: true
    alamat?: true
    ttl?: true
    namaWali?: true
    noHpWali?: true
    createdAt?: true
  }

  export type PendaftarPesertaDidikCountAggregateInputType = {
    id?: true
    fullName?: true
    alamat?: true
    ttl?: true
    namaWali?: true
    noHpWali?: true
    createdAt?: true
    _all?: true
  }

  export type PendaftarPesertaDidikAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PendaftarPesertaDidik to aggregate.
     */
    where?: PendaftarPesertaDidikWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendaftarPesertaDidiks to fetch.
     */
    orderBy?: PendaftarPesertaDidikOrderByWithRelationInput | PendaftarPesertaDidikOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PendaftarPesertaDidikWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendaftarPesertaDidiks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendaftarPesertaDidiks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PendaftarPesertaDidiks
    **/
    _count?: true | PendaftarPesertaDidikCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PendaftarPesertaDidikMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PendaftarPesertaDidikMaxAggregateInputType
  }

  export type GetPendaftarPesertaDidikAggregateType<T extends PendaftarPesertaDidikAggregateArgs> = {
        [P in keyof T & keyof AggregatePendaftarPesertaDidik]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePendaftarPesertaDidik[P]>
      : GetScalarType<T[P], AggregatePendaftarPesertaDidik[P]>
  }




  export type PendaftarPesertaDidikGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PendaftarPesertaDidikWhereInput
    orderBy?: PendaftarPesertaDidikOrderByWithAggregationInput | PendaftarPesertaDidikOrderByWithAggregationInput[]
    by: PendaftarPesertaDidikScalarFieldEnum[] | PendaftarPesertaDidikScalarFieldEnum
    having?: PendaftarPesertaDidikScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PendaftarPesertaDidikCountAggregateInputType | true
    _min?: PendaftarPesertaDidikMinAggregateInputType
    _max?: PendaftarPesertaDidikMaxAggregateInputType
  }

  export type PendaftarPesertaDidikGroupByOutputType = {
    id: string
    fullName: string
    alamat: string
    ttl: Date
    namaWali: string
    noHpWali: string
    createdAt: Date
    _count: PendaftarPesertaDidikCountAggregateOutputType | null
    _min: PendaftarPesertaDidikMinAggregateOutputType | null
    _max: PendaftarPesertaDidikMaxAggregateOutputType | null
  }

  type GetPendaftarPesertaDidikGroupByPayload<T extends PendaftarPesertaDidikGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PendaftarPesertaDidikGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PendaftarPesertaDidikGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PendaftarPesertaDidikGroupByOutputType[P]>
            : GetScalarType<T[P], PendaftarPesertaDidikGroupByOutputType[P]>
        }
      >
    >


  export type PendaftarPesertaDidikSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    alamat?: boolean
    ttl?: boolean
    namaWali?: boolean
    noHpWali?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["pendaftarPesertaDidik"]>

  export type PendaftarPesertaDidikSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    alamat?: boolean
    ttl?: boolean
    namaWali?: boolean
    noHpWali?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["pendaftarPesertaDidik"]>

  export type PendaftarPesertaDidikSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    alamat?: boolean
    ttl?: boolean
    namaWali?: boolean
    noHpWali?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["pendaftarPesertaDidik"]>

  export type PendaftarPesertaDidikSelectScalar = {
    id?: boolean
    fullName?: boolean
    alamat?: boolean
    ttl?: boolean
    namaWali?: boolean
    noHpWali?: boolean
    createdAt?: boolean
  }

  export type PendaftarPesertaDidikOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "alamat" | "ttl" | "namaWali" | "noHpWali" | "createdAt", ExtArgs["result"]["pendaftarPesertaDidik"]>

  export type $PendaftarPesertaDidikPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PendaftarPesertaDidik"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      alamat: string
      ttl: Date
      namaWali: string
      noHpWali: string
      createdAt: Date
    }, ExtArgs["result"]["pendaftarPesertaDidik"]>
    composites: {}
  }

  type PendaftarPesertaDidikGetPayload<S extends boolean | null | undefined | PendaftarPesertaDidikDefaultArgs> = $Result.GetResult<Prisma.$PendaftarPesertaDidikPayload, S>

  type PendaftarPesertaDidikCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PendaftarPesertaDidikFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PendaftarPesertaDidikCountAggregateInputType | true
    }

  export interface PendaftarPesertaDidikDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PendaftarPesertaDidik'], meta: { name: 'PendaftarPesertaDidik' } }
    /**
     * Find zero or one PendaftarPesertaDidik that matches the filter.
     * @param {PendaftarPesertaDidikFindUniqueArgs} args - Arguments to find a PendaftarPesertaDidik
     * @example
     * // Get one PendaftarPesertaDidik
     * const pendaftarPesertaDidik = await prisma.pendaftarPesertaDidik.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PendaftarPesertaDidikFindUniqueArgs>(args: SelectSubset<T, PendaftarPesertaDidikFindUniqueArgs<ExtArgs>>): Prisma__PendaftarPesertaDidikClient<$Result.GetResult<Prisma.$PendaftarPesertaDidikPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PendaftarPesertaDidik that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PendaftarPesertaDidikFindUniqueOrThrowArgs} args - Arguments to find a PendaftarPesertaDidik
     * @example
     * // Get one PendaftarPesertaDidik
     * const pendaftarPesertaDidik = await prisma.pendaftarPesertaDidik.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PendaftarPesertaDidikFindUniqueOrThrowArgs>(args: SelectSubset<T, PendaftarPesertaDidikFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PendaftarPesertaDidikClient<$Result.GetResult<Prisma.$PendaftarPesertaDidikPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PendaftarPesertaDidik that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendaftarPesertaDidikFindFirstArgs} args - Arguments to find a PendaftarPesertaDidik
     * @example
     * // Get one PendaftarPesertaDidik
     * const pendaftarPesertaDidik = await prisma.pendaftarPesertaDidik.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PendaftarPesertaDidikFindFirstArgs>(args?: SelectSubset<T, PendaftarPesertaDidikFindFirstArgs<ExtArgs>>): Prisma__PendaftarPesertaDidikClient<$Result.GetResult<Prisma.$PendaftarPesertaDidikPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PendaftarPesertaDidik that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendaftarPesertaDidikFindFirstOrThrowArgs} args - Arguments to find a PendaftarPesertaDidik
     * @example
     * // Get one PendaftarPesertaDidik
     * const pendaftarPesertaDidik = await prisma.pendaftarPesertaDidik.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PendaftarPesertaDidikFindFirstOrThrowArgs>(args?: SelectSubset<T, PendaftarPesertaDidikFindFirstOrThrowArgs<ExtArgs>>): Prisma__PendaftarPesertaDidikClient<$Result.GetResult<Prisma.$PendaftarPesertaDidikPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PendaftarPesertaDidiks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendaftarPesertaDidikFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PendaftarPesertaDidiks
     * const pendaftarPesertaDidiks = await prisma.pendaftarPesertaDidik.findMany()
     * 
     * // Get first 10 PendaftarPesertaDidiks
     * const pendaftarPesertaDidiks = await prisma.pendaftarPesertaDidik.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pendaftarPesertaDidikWithIdOnly = await prisma.pendaftarPesertaDidik.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PendaftarPesertaDidikFindManyArgs>(args?: SelectSubset<T, PendaftarPesertaDidikFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendaftarPesertaDidikPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PendaftarPesertaDidik.
     * @param {PendaftarPesertaDidikCreateArgs} args - Arguments to create a PendaftarPesertaDidik.
     * @example
     * // Create one PendaftarPesertaDidik
     * const PendaftarPesertaDidik = await prisma.pendaftarPesertaDidik.create({
     *   data: {
     *     // ... data to create a PendaftarPesertaDidik
     *   }
     * })
     * 
     */
    create<T extends PendaftarPesertaDidikCreateArgs>(args: SelectSubset<T, PendaftarPesertaDidikCreateArgs<ExtArgs>>): Prisma__PendaftarPesertaDidikClient<$Result.GetResult<Prisma.$PendaftarPesertaDidikPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PendaftarPesertaDidiks.
     * @param {PendaftarPesertaDidikCreateManyArgs} args - Arguments to create many PendaftarPesertaDidiks.
     * @example
     * // Create many PendaftarPesertaDidiks
     * const pendaftarPesertaDidik = await prisma.pendaftarPesertaDidik.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PendaftarPesertaDidikCreateManyArgs>(args?: SelectSubset<T, PendaftarPesertaDidikCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PendaftarPesertaDidiks and returns the data saved in the database.
     * @param {PendaftarPesertaDidikCreateManyAndReturnArgs} args - Arguments to create many PendaftarPesertaDidiks.
     * @example
     * // Create many PendaftarPesertaDidiks
     * const pendaftarPesertaDidik = await prisma.pendaftarPesertaDidik.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PendaftarPesertaDidiks and only return the `id`
     * const pendaftarPesertaDidikWithIdOnly = await prisma.pendaftarPesertaDidik.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PendaftarPesertaDidikCreateManyAndReturnArgs>(args?: SelectSubset<T, PendaftarPesertaDidikCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendaftarPesertaDidikPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PendaftarPesertaDidik.
     * @param {PendaftarPesertaDidikDeleteArgs} args - Arguments to delete one PendaftarPesertaDidik.
     * @example
     * // Delete one PendaftarPesertaDidik
     * const PendaftarPesertaDidik = await prisma.pendaftarPesertaDidik.delete({
     *   where: {
     *     // ... filter to delete one PendaftarPesertaDidik
     *   }
     * })
     * 
     */
    delete<T extends PendaftarPesertaDidikDeleteArgs>(args: SelectSubset<T, PendaftarPesertaDidikDeleteArgs<ExtArgs>>): Prisma__PendaftarPesertaDidikClient<$Result.GetResult<Prisma.$PendaftarPesertaDidikPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PendaftarPesertaDidik.
     * @param {PendaftarPesertaDidikUpdateArgs} args - Arguments to update one PendaftarPesertaDidik.
     * @example
     * // Update one PendaftarPesertaDidik
     * const pendaftarPesertaDidik = await prisma.pendaftarPesertaDidik.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PendaftarPesertaDidikUpdateArgs>(args: SelectSubset<T, PendaftarPesertaDidikUpdateArgs<ExtArgs>>): Prisma__PendaftarPesertaDidikClient<$Result.GetResult<Prisma.$PendaftarPesertaDidikPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PendaftarPesertaDidiks.
     * @param {PendaftarPesertaDidikDeleteManyArgs} args - Arguments to filter PendaftarPesertaDidiks to delete.
     * @example
     * // Delete a few PendaftarPesertaDidiks
     * const { count } = await prisma.pendaftarPesertaDidik.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PendaftarPesertaDidikDeleteManyArgs>(args?: SelectSubset<T, PendaftarPesertaDidikDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PendaftarPesertaDidiks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendaftarPesertaDidikUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PendaftarPesertaDidiks
     * const pendaftarPesertaDidik = await prisma.pendaftarPesertaDidik.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PendaftarPesertaDidikUpdateManyArgs>(args: SelectSubset<T, PendaftarPesertaDidikUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PendaftarPesertaDidiks and returns the data updated in the database.
     * @param {PendaftarPesertaDidikUpdateManyAndReturnArgs} args - Arguments to update many PendaftarPesertaDidiks.
     * @example
     * // Update many PendaftarPesertaDidiks
     * const pendaftarPesertaDidik = await prisma.pendaftarPesertaDidik.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PendaftarPesertaDidiks and only return the `id`
     * const pendaftarPesertaDidikWithIdOnly = await prisma.pendaftarPesertaDidik.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PendaftarPesertaDidikUpdateManyAndReturnArgs>(args: SelectSubset<T, PendaftarPesertaDidikUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendaftarPesertaDidikPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PendaftarPesertaDidik.
     * @param {PendaftarPesertaDidikUpsertArgs} args - Arguments to update or create a PendaftarPesertaDidik.
     * @example
     * // Update or create a PendaftarPesertaDidik
     * const pendaftarPesertaDidik = await prisma.pendaftarPesertaDidik.upsert({
     *   create: {
     *     // ... data to create a PendaftarPesertaDidik
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PendaftarPesertaDidik we want to update
     *   }
     * })
     */
    upsert<T extends PendaftarPesertaDidikUpsertArgs>(args: SelectSubset<T, PendaftarPesertaDidikUpsertArgs<ExtArgs>>): Prisma__PendaftarPesertaDidikClient<$Result.GetResult<Prisma.$PendaftarPesertaDidikPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PendaftarPesertaDidiks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendaftarPesertaDidikCountArgs} args - Arguments to filter PendaftarPesertaDidiks to count.
     * @example
     * // Count the number of PendaftarPesertaDidiks
     * const count = await prisma.pendaftarPesertaDidik.count({
     *   where: {
     *     // ... the filter for the PendaftarPesertaDidiks we want to count
     *   }
     * })
    **/
    count<T extends PendaftarPesertaDidikCountArgs>(
      args?: Subset<T, PendaftarPesertaDidikCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PendaftarPesertaDidikCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PendaftarPesertaDidik.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendaftarPesertaDidikAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PendaftarPesertaDidikAggregateArgs>(args: Subset<T, PendaftarPesertaDidikAggregateArgs>): Prisma.PrismaPromise<GetPendaftarPesertaDidikAggregateType<T>>

    /**
     * Group by PendaftarPesertaDidik.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendaftarPesertaDidikGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PendaftarPesertaDidikGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PendaftarPesertaDidikGroupByArgs['orderBy'] }
        : { orderBy?: PendaftarPesertaDidikGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PendaftarPesertaDidikGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPendaftarPesertaDidikGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PendaftarPesertaDidik model
   */
  readonly fields: PendaftarPesertaDidikFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PendaftarPesertaDidik.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PendaftarPesertaDidikClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PendaftarPesertaDidik model
   */
  interface PendaftarPesertaDidikFieldRefs {
    readonly id: FieldRef<"PendaftarPesertaDidik", 'String'>
    readonly fullName: FieldRef<"PendaftarPesertaDidik", 'String'>
    readonly alamat: FieldRef<"PendaftarPesertaDidik", 'String'>
    readonly ttl: FieldRef<"PendaftarPesertaDidik", 'DateTime'>
    readonly namaWali: FieldRef<"PendaftarPesertaDidik", 'String'>
    readonly noHpWali: FieldRef<"PendaftarPesertaDidik", 'String'>
    readonly createdAt: FieldRef<"PendaftarPesertaDidik", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PendaftarPesertaDidik findUnique
   */
  export type PendaftarPesertaDidikFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftarPesertaDidik
     */
    select?: PendaftarPesertaDidikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftarPesertaDidik
     */
    omit?: PendaftarPesertaDidikOmit<ExtArgs> | null
    /**
     * Filter, which PendaftarPesertaDidik to fetch.
     */
    where: PendaftarPesertaDidikWhereUniqueInput
  }

  /**
   * PendaftarPesertaDidik findUniqueOrThrow
   */
  export type PendaftarPesertaDidikFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftarPesertaDidik
     */
    select?: PendaftarPesertaDidikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftarPesertaDidik
     */
    omit?: PendaftarPesertaDidikOmit<ExtArgs> | null
    /**
     * Filter, which PendaftarPesertaDidik to fetch.
     */
    where: PendaftarPesertaDidikWhereUniqueInput
  }

  /**
   * PendaftarPesertaDidik findFirst
   */
  export type PendaftarPesertaDidikFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftarPesertaDidik
     */
    select?: PendaftarPesertaDidikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftarPesertaDidik
     */
    omit?: PendaftarPesertaDidikOmit<ExtArgs> | null
    /**
     * Filter, which PendaftarPesertaDidik to fetch.
     */
    where?: PendaftarPesertaDidikWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendaftarPesertaDidiks to fetch.
     */
    orderBy?: PendaftarPesertaDidikOrderByWithRelationInput | PendaftarPesertaDidikOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PendaftarPesertaDidiks.
     */
    cursor?: PendaftarPesertaDidikWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendaftarPesertaDidiks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendaftarPesertaDidiks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PendaftarPesertaDidiks.
     */
    distinct?: PendaftarPesertaDidikScalarFieldEnum | PendaftarPesertaDidikScalarFieldEnum[]
  }

  /**
   * PendaftarPesertaDidik findFirstOrThrow
   */
  export type PendaftarPesertaDidikFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftarPesertaDidik
     */
    select?: PendaftarPesertaDidikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftarPesertaDidik
     */
    omit?: PendaftarPesertaDidikOmit<ExtArgs> | null
    /**
     * Filter, which PendaftarPesertaDidik to fetch.
     */
    where?: PendaftarPesertaDidikWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendaftarPesertaDidiks to fetch.
     */
    orderBy?: PendaftarPesertaDidikOrderByWithRelationInput | PendaftarPesertaDidikOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PendaftarPesertaDidiks.
     */
    cursor?: PendaftarPesertaDidikWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendaftarPesertaDidiks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendaftarPesertaDidiks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PendaftarPesertaDidiks.
     */
    distinct?: PendaftarPesertaDidikScalarFieldEnum | PendaftarPesertaDidikScalarFieldEnum[]
  }

  /**
   * PendaftarPesertaDidik findMany
   */
  export type PendaftarPesertaDidikFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftarPesertaDidik
     */
    select?: PendaftarPesertaDidikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftarPesertaDidik
     */
    omit?: PendaftarPesertaDidikOmit<ExtArgs> | null
    /**
     * Filter, which PendaftarPesertaDidiks to fetch.
     */
    where?: PendaftarPesertaDidikWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendaftarPesertaDidiks to fetch.
     */
    orderBy?: PendaftarPesertaDidikOrderByWithRelationInput | PendaftarPesertaDidikOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PendaftarPesertaDidiks.
     */
    cursor?: PendaftarPesertaDidikWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendaftarPesertaDidiks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendaftarPesertaDidiks.
     */
    skip?: number
    distinct?: PendaftarPesertaDidikScalarFieldEnum | PendaftarPesertaDidikScalarFieldEnum[]
  }

  /**
   * PendaftarPesertaDidik create
   */
  export type PendaftarPesertaDidikCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftarPesertaDidik
     */
    select?: PendaftarPesertaDidikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftarPesertaDidik
     */
    omit?: PendaftarPesertaDidikOmit<ExtArgs> | null
    /**
     * The data needed to create a PendaftarPesertaDidik.
     */
    data: XOR<PendaftarPesertaDidikCreateInput, PendaftarPesertaDidikUncheckedCreateInput>
  }

  /**
   * PendaftarPesertaDidik createMany
   */
  export type PendaftarPesertaDidikCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PendaftarPesertaDidiks.
     */
    data: PendaftarPesertaDidikCreateManyInput | PendaftarPesertaDidikCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PendaftarPesertaDidik createManyAndReturn
   */
  export type PendaftarPesertaDidikCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftarPesertaDidik
     */
    select?: PendaftarPesertaDidikSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftarPesertaDidik
     */
    omit?: PendaftarPesertaDidikOmit<ExtArgs> | null
    /**
     * The data used to create many PendaftarPesertaDidiks.
     */
    data: PendaftarPesertaDidikCreateManyInput | PendaftarPesertaDidikCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PendaftarPesertaDidik update
   */
  export type PendaftarPesertaDidikUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftarPesertaDidik
     */
    select?: PendaftarPesertaDidikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftarPesertaDidik
     */
    omit?: PendaftarPesertaDidikOmit<ExtArgs> | null
    /**
     * The data needed to update a PendaftarPesertaDidik.
     */
    data: XOR<PendaftarPesertaDidikUpdateInput, PendaftarPesertaDidikUncheckedUpdateInput>
    /**
     * Choose, which PendaftarPesertaDidik to update.
     */
    where: PendaftarPesertaDidikWhereUniqueInput
  }

  /**
   * PendaftarPesertaDidik updateMany
   */
  export type PendaftarPesertaDidikUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PendaftarPesertaDidiks.
     */
    data: XOR<PendaftarPesertaDidikUpdateManyMutationInput, PendaftarPesertaDidikUncheckedUpdateManyInput>
    /**
     * Filter which PendaftarPesertaDidiks to update
     */
    where?: PendaftarPesertaDidikWhereInput
    /**
     * Limit how many PendaftarPesertaDidiks to update.
     */
    limit?: number
  }

  /**
   * PendaftarPesertaDidik updateManyAndReturn
   */
  export type PendaftarPesertaDidikUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftarPesertaDidik
     */
    select?: PendaftarPesertaDidikSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftarPesertaDidik
     */
    omit?: PendaftarPesertaDidikOmit<ExtArgs> | null
    /**
     * The data used to update PendaftarPesertaDidiks.
     */
    data: XOR<PendaftarPesertaDidikUpdateManyMutationInput, PendaftarPesertaDidikUncheckedUpdateManyInput>
    /**
     * Filter which PendaftarPesertaDidiks to update
     */
    where?: PendaftarPesertaDidikWhereInput
    /**
     * Limit how many PendaftarPesertaDidiks to update.
     */
    limit?: number
  }

  /**
   * PendaftarPesertaDidik upsert
   */
  export type PendaftarPesertaDidikUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftarPesertaDidik
     */
    select?: PendaftarPesertaDidikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftarPesertaDidik
     */
    omit?: PendaftarPesertaDidikOmit<ExtArgs> | null
    /**
     * The filter to search for the PendaftarPesertaDidik to update in case it exists.
     */
    where: PendaftarPesertaDidikWhereUniqueInput
    /**
     * In case the PendaftarPesertaDidik found by the `where` argument doesn't exist, create a new PendaftarPesertaDidik with this data.
     */
    create: XOR<PendaftarPesertaDidikCreateInput, PendaftarPesertaDidikUncheckedCreateInput>
    /**
     * In case the PendaftarPesertaDidik was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PendaftarPesertaDidikUpdateInput, PendaftarPesertaDidikUncheckedUpdateInput>
  }

  /**
   * PendaftarPesertaDidik delete
   */
  export type PendaftarPesertaDidikDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftarPesertaDidik
     */
    select?: PendaftarPesertaDidikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftarPesertaDidik
     */
    omit?: PendaftarPesertaDidikOmit<ExtArgs> | null
    /**
     * Filter which PendaftarPesertaDidik to delete.
     */
    where: PendaftarPesertaDidikWhereUniqueInput
  }

  /**
   * PendaftarPesertaDidik deleteMany
   */
  export type PendaftarPesertaDidikDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PendaftarPesertaDidiks to delete
     */
    where?: PendaftarPesertaDidikWhereInput
    /**
     * Limit how many PendaftarPesertaDidiks to delete.
     */
    limit?: number
  }

  /**
   * PendaftarPesertaDidik without action
   */
  export type PendaftarPesertaDidikDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftarPesertaDidik
     */
    select?: PendaftarPesertaDidikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftarPesertaDidik
     */
    omit?: PendaftarPesertaDidikOmit<ExtArgs> | null
  }


  /**
   * Model PendaftarTenagaPendidik
   */

  export type AggregatePendaftarTenagaPendidik = {
    _count: PendaftarTenagaPendidikCountAggregateOutputType | null
    _min: PendaftarTenagaPendidikMinAggregateOutputType | null
    _max: PendaftarTenagaPendidikMaxAggregateOutputType | null
  }

  export type PendaftarTenagaPendidikMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    alamat: string | null
    noHp: string | null
    email: string | null
    pendidikan: string | null
    pengalaman: string | null
    status: $Enums.StatusPendaftaran | null
    createdAt: Date | null
  }

  export type PendaftarTenagaPendidikMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    alamat: string | null
    noHp: string | null
    email: string | null
    pendidikan: string | null
    pengalaman: string | null
    status: $Enums.StatusPendaftaran | null
    createdAt: Date | null
  }

  export type PendaftarTenagaPendidikCountAggregateOutputType = {
    id: number
    fullName: number
    alamat: number
    noHp: number
    email: number
    pendidikan: number
    pengalaman: number
    status: number
    createdAt: number
    _all: number
  }


  export type PendaftarTenagaPendidikMinAggregateInputType = {
    id?: true
    fullName?: true
    alamat?: true
    noHp?: true
    email?: true
    pendidikan?: true
    pengalaman?: true
    status?: true
    createdAt?: true
  }

  export type PendaftarTenagaPendidikMaxAggregateInputType = {
    id?: true
    fullName?: true
    alamat?: true
    noHp?: true
    email?: true
    pendidikan?: true
    pengalaman?: true
    status?: true
    createdAt?: true
  }

  export type PendaftarTenagaPendidikCountAggregateInputType = {
    id?: true
    fullName?: true
    alamat?: true
    noHp?: true
    email?: true
    pendidikan?: true
    pengalaman?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type PendaftarTenagaPendidikAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PendaftarTenagaPendidik to aggregate.
     */
    where?: PendaftarTenagaPendidikWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendaftarTenagaPendidiks to fetch.
     */
    orderBy?: PendaftarTenagaPendidikOrderByWithRelationInput | PendaftarTenagaPendidikOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PendaftarTenagaPendidikWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendaftarTenagaPendidiks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendaftarTenagaPendidiks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PendaftarTenagaPendidiks
    **/
    _count?: true | PendaftarTenagaPendidikCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PendaftarTenagaPendidikMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PendaftarTenagaPendidikMaxAggregateInputType
  }

  export type GetPendaftarTenagaPendidikAggregateType<T extends PendaftarTenagaPendidikAggregateArgs> = {
        [P in keyof T & keyof AggregatePendaftarTenagaPendidik]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePendaftarTenagaPendidik[P]>
      : GetScalarType<T[P], AggregatePendaftarTenagaPendidik[P]>
  }




  export type PendaftarTenagaPendidikGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PendaftarTenagaPendidikWhereInput
    orderBy?: PendaftarTenagaPendidikOrderByWithAggregationInput | PendaftarTenagaPendidikOrderByWithAggregationInput[]
    by: PendaftarTenagaPendidikScalarFieldEnum[] | PendaftarTenagaPendidikScalarFieldEnum
    having?: PendaftarTenagaPendidikScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PendaftarTenagaPendidikCountAggregateInputType | true
    _min?: PendaftarTenagaPendidikMinAggregateInputType
    _max?: PendaftarTenagaPendidikMaxAggregateInputType
  }

  export type PendaftarTenagaPendidikGroupByOutputType = {
    id: string
    fullName: string
    alamat: string
    noHp: string
    email: string
    pendidikan: string
    pengalaman: string | null
    status: $Enums.StatusPendaftaran
    createdAt: Date
    _count: PendaftarTenagaPendidikCountAggregateOutputType | null
    _min: PendaftarTenagaPendidikMinAggregateOutputType | null
    _max: PendaftarTenagaPendidikMaxAggregateOutputType | null
  }

  type GetPendaftarTenagaPendidikGroupByPayload<T extends PendaftarTenagaPendidikGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PendaftarTenagaPendidikGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PendaftarTenagaPendidikGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PendaftarTenagaPendidikGroupByOutputType[P]>
            : GetScalarType<T[P], PendaftarTenagaPendidikGroupByOutputType[P]>
        }
      >
    >


  export type PendaftarTenagaPendidikSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    alamat?: boolean
    noHp?: boolean
    email?: boolean
    pendidikan?: boolean
    pengalaman?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["pendaftarTenagaPendidik"]>

  export type PendaftarTenagaPendidikSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    alamat?: boolean
    noHp?: boolean
    email?: boolean
    pendidikan?: boolean
    pengalaman?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["pendaftarTenagaPendidik"]>

  export type PendaftarTenagaPendidikSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    alamat?: boolean
    noHp?: boolean
    email?: boolean
    pendidikan?: boolean
    pengalaman?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["pendaftarTenagaPendidik"]>

  export type PendaftarTenagaPendidikSelectScalar = {
    id?: boolean
    fullName?: boolean
    alamat?: boolean
    noHp?: boolean
    email?: boolean
    pendidikan?: boolean
    pengalaman?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type PendaftarTenagaPendidikOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "alamat" | "noHp" | "email" | "pendidikan" | "pengalaman" | "status" | "createdAt", ExtArgs["result"]["pendaftarTenagaPendidik"]>

  export type $PendaftarTenagaPendidikPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PendaftarTenagaPendidik"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      alamat: string
      noHp: string
      email: string
      pendidikan: string
      pengalaman: string | null
      status: $Enums.StatusPendaftaran
      createdAt: Date
    }, ExtArgs["result"]["pendaftarTenagaPendidik"]>
    composites: {}
  }

  type PendaftarTenagaPendidikGetPayload<S extends boolean | null | undefined | PendaftarTenagaPendidikDefaultArgs> = $Result.GetResult<Prisma.$PendaftarTenagaPendidikPayload, S>

  type PendaftarTenagaPendidikCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PendaftarTenagaPendidikFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PendaftarTenagaPendidikCountAggregateInputType | true
    }

  export interface PendaftarTenagaPendidikDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PendaftarTenagaPendidik'], meta: { name: 'PendaftarTenagaPendidik' } }
    /**
     * Find zero or one PendaftarTenagaPendidik that matches the filter.
     * @param {PendaftarTenagaPendidikFindUniqueArgs} args - Arguments to find a PendaftarTenagaPendidik
     * @example
     * // Get one PendaftarTenagaPendidik
     * const pendaftarTenagaPendidik = await prisma.pendaftarTenagaPendidik.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PendaftarTenagaPendidikFindUniqueArgs>(args: SelectSubset<T, PendaftarTenagaPendidikFindUniqueArgs<ExtArgs>>): Prisma__PendaftarTenagaPendidikClient<$Result.GetResult<Prisma.$PendaftarTenagaPendidikPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PendaftarTenagaPendidik that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PendaftarTenagaPendidikFindUniqueOrThrowArgs} args - Arguments to find a PendaftarTenagaPendidik
     * @example
     * // Get one PendaftarTenagaPendidik
     * const pendaftarTenagaPendidik = await prisma.pendaftarTenagaPendidik.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PendaftarTenagaPendidikFindUniqueOrThrowArgs>(args: SelectSubset<T, PendaftarTenagaPendidikFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PendaftarTenagaPendidikClient<$Result.GetResult<Prisma.$PendaftarTenagaPendidikPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PendaftarTenagaPendidik that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendaftarTenagaPendidikFindFirstArgs} args - Arguments to find a PendaftarTenagaPendidik
     * @example
     * // Get one PendaftarTenagaPendidik
     * const pendaftarTenagaPendidik = await prisma.pendaftarTenagaPendidik.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PendaftarTenagaPendidikFindFirstArgs>(args?: SelectSubset<T, PendaftarTenagaPendidikFindFirstArgs<ExtArgs>>): Prisma__PendaftarTenagaPendidikClient<$Result.GetResult<Prisma.$PendaftarTenagaPendidikPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PendaftarTenagaPendidik that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendaftarTenagaPendidikFindFirstOrThrowArgs} args - Arguments to find a PendaftarTenagaPendidik
     * @example
     * // Get one PendaftarTenagaPendidik
     * const pendaftarTenagaPendidik = await prisma.pendaftarTenagaPendidik.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PendaftarTenagaPendidikFindFirstOrThrowArgs>(args?: SelectSubset<T, PendaftarTenagaPendidikFindFirstOrThrowArgs<ExtArgs>>): Prisma__PendaftarTenagaPendidikClient<$Result.GetResult<Prisma.$PendaftarTenagaPendidikPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PendaftarTenagaPendidiks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendaftarTenagaPendidikFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PendaftarTenagaPendidiks
     * const pendaftarTenagaPendidiks = await prisma.pendaftarTenagaPendidik.findMany()
     * 
     * // Get first 10 PendaftarTenagaPendidiks
     * const pendaftarTenagaPendidiks = await prisma.pendaftarTenagaPendidik.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pendaftarTenagaPendidikWithIdOnly = await prisma.pendaftarTenagaPendidik.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PendaftarTenagaPendidikFindManyArgs>(args?: SelectSubset<T, PendaftarTenagaPendidikFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendaftarTenagaPendidikPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PendaftarTenagaPendidik.
     * @param {PendaftarTenagaPendidikCreateArgs} args - Arguments to create a PendaftarTenagaPendidik.
     * @example
     * // Create one PendaftarTenagaPendidik
     * const PendaftarTenagaPendidik = await prisma.pendaftarTenagaPendidik.create({
     *   data: {
     *     // ... data to create a PendaftarTenagaPendidik
     *   }
     * })
     * 
     */
    create<T extends PendaftarTenagaPendidikCreateArgs>(args: SelectSubset<T, PendaftarTenagaPendidikCreateArgs<ExtArgs>>): Prisma__PendaftarTenagaPendidikClient<$Result.GetResult<Prisma.$PendaftarTenagaPendidikPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PendaftarTenagaPendidiks.
     * @param {PendaftarTenagaPendidikCreateManyArgs} args - Arguments to create many PendaftarTenagaPendidiks.
     * @example
     * // Create many PendaftarTenagaPendidiks
     * const pendaftarTenagaPendidik = await prisma.pendaftarTenagaPendidik.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PendaftarTenagaPendidikCreateManyArgs>(args?: SelectSubset<T, PendaftarTenagaPendidikCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PendaftarTenagaPendidiks and returns the data saved in the database.
     * @param {PendaftarTenagaPendidikCreateManyAndReturnArgs} args - Arguments to create many PendaftarTenagaPendidiks.
     * @example
     * // Create many PendaftarTenagaPendidiks
     * const pendaftarTenagaPendidik = await prisma.pendaftarTenagaPendidik.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PendaftarTenagaPendidiks and only return the `id`
     * const pendaftarTenagaPendidikWithIdOnly = await prisma.pendaftarTenagaPendidik.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PendaftarTenagaPendidikCreateManyAndReturnArgs>(args?: SelectSubset<T, PendaftarTenagaPendidikCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendaftarTenagaPendidikPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PendaftarTenagaPendidik.
     * @param {PendaftarTenagaPendidikDeleteArgs} args - Arguments to delete one PendaftarTenagaPendidik.
     * @example
     * // Delete one PendaftarTenagaPendidik
     * const PendaftarTenagaPendidik = await prisma.pendaftarTenagaPendidik.delete({
     *   where: {
     *     // ... filter to delete one PendaftarTenagaPendidik
     *   }
     * })
     * 
     */
    delete<T extends PendaftarTenagaPendidikDeleteArgs>(args: SelectSubset<T, PendaftarTenagaPendidikDeleteArgs<ExtArgs>>): Prisma__PendaftarTenagaPendidikClient<$Result.GetResult<Prisma.$PendaftarTenagaPendidikPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PendaftarTenagaPendidik.
     * @param {PendaftarTenagaPendidikUpdateArgs} args - Arguments to update one PendaftarTenagaPendidik.
     * @example
     * // Update one PendaftarTenagaPendidik
     * const pendaftarTenagaPendidik = await prisma.pendaftarTenagaPendidik.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PendaftarTenagaPendidikUpdateArgs>(args: SelectSubset<T, PendaftarTenagaPendidikUpdateArgs<ExtArgs>>): Prisma__PendaftarTenagaPendidikClient<$Result.GetResult<Prisma.$PendaftarTenagaPendidikPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PendaftarTenagaPendidiks.
     * @param {PendaftarTenagaPendidikDeleteManyArgs} args - Arguments to filter PendaftarTenagaPendidiks to delete.
     * @example
     * // Delete a few PendaftarTenagaPendidiks
     * const { count } = await prisma.pendaftarTenagaPendidik.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PendaftarTenagaPendidikDeleteManyArgs>(args?: SelectSubset<T, PendaftarTenagaPendidikDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PendaftarTenagaPendidiks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendaftarTenagaPendidikUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PendaftarTenagaPendidiks
     * const pendaftarTenagaPendidik = await prisma.pendaftarTenagaPendidik.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PendaftarTenagaPendidikUpdateManyArgs>(args: SelectSubset<T, PendaftarTenagaPendidikUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PendaftarTenagaPendidiks and returns the data updated in the database.
     * @param {PendaftarTenagaPendidikUpdateManyAndReturnArgs} args - Arguments to update many PendaftarTenagaPendidiks.
     * @example
     * // Update many PendaftarTenagaPendidiks
     * const pendaftarTenagaPendidik = await prisma.pendaftarTenagaPendidik.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PendaftarTenagaPendidiks and only return the `id`
     * const pendaftarTenagaPendidikWithIdOnly = await prisma.pendaftarTenagaPendidik.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PendaftarTenagaPendidikUpdateManyAndReturnArgs>(args: SelectSubset<T, PendaftarTenagaPendidikUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendaftarTenagaPendidikPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PendaftarTenagaPendidik.
     * @param {PendaftarTenagaPendidikUpsertArgs} args - Arguments to update or create a PendaftarTenagaPendidik.
     * @example
     * // Update or create a PendaftarTenagaPendidik
     * const pendaftarTenagaPendidik = await prisma.pendaftarTenagaPendidik.upsert({
     *   create: {
     *     // ... data to create a PendaftarTenagaPendidik
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PendaftarTenagaPendidik we want to update
     *   }
     * })
     */
    upsert<T extends PendaftarTenagaPendidikUpsertArgs>(args: SelectSubset<T, PendaftarTenagaPendidikUpsertArgs<ExtArgs>>): Prisma__PendaftarTenagaPendidikClient<$Result.GetResult<Prisma.$PendaftarTenagaPendidikPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PendaftarTenagaPendidiks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendaftarTenagaPendidikCountArgs} args - Arguments to filter PendaftarTenagaPendidiks to count.
     * @example
     * // Count the number of PendaftarTenagaPendidiks
     * const count = await prisma.pendaftarTenagaPendidik.count({
     *   where: {
     *     // ... the filter for the PendaftarTenagaPendidiks we want to count
     *   }
     * })
    **/
    count<T extends PendaftarTenagaPendidikCountArgs>(
      args?: Subset<T, PendaftarTenagaPendidikCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PendaftarTenagaPendidikCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PendaftarTenagaPendidik.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendaftarTenagaPendidikAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PendaftarTenagaPendidikAggregateArgs>(args: Subset<T, PendaftarTenagaPendidikAggregateArgs>): Prisma.PrismaPromise<GetPendaftarTenagaPendidikAggregateType<T>>

    /**
     * Group by PendaftarTenagaPendidik.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendaftarTenagaPendidikGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PendaftarTenagaPendidikGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PendaftarTenagaPendidikGroupByArgs['orderBy'] }
        : { orderBy?: PendaftarTenagaPendidikGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PendaftarTenagaPendidikGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPendaftarTenagaPendidikGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PendaftarTenagaPendidik model
   */
  readonly fields: PendaftarTenagaPendidikFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PendaftarTenagaPendidik.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PendaftarTenagaPendidikClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PendaftarTenagaPendidik model
   */
  interface PendaftarTenagaPendidikFieldRefs {
    readonly id: FieldRef<"PendaftarTenagaPendidik", 'String'>
    readonly fullName: FieldRef<"PendaftarTenagaPendidik", 'String'>
    readonly alamat: FieldRef<"PendaftarTenagaPendidik", 'String'>
    readonly noHp: FieldRef<"PendaftarTenagaPendidik", 'String'>
    readonly email: FieldRef<"PendaftarTenagaPendidik", 'String'>
    readonly pendidikan: FieldRef<"PendaftarTenagaPendidik", 'String'>
    readonly pengalaman: FieldRef<"PendaftarTenagaPendidik", 'String'>
    readonly status: FieldRef<"PendaftarTenagaPendidik", 'StatusPendaftaran'>
    readonly createdAt: FieldRef<"PendaftarTenagaPendidik", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PendaftarTenagaPendidik findUnique
   */
  export type PendaftarTenagaPendidikFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftarTenagaPendidik
     */
    select?: PendaftarTenagaPendidikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftarTenagaPendidik
     */
    omit?: PendaftarTenagaPendidikOmit<ExtArgs> | null
    /**
     * Filter, which PendaftarTenagaPendidik to fetch.
     */
    where: PendaftarTenagaPendidikWhereUniqueInput
  }

  /**
   * PendaftarTenagaPendidik findUniqueOrThrow
   */
  export type PendaftarTenagaPendidikFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftarTenagaPendidik
     */
    select?: PendaftarTenagaPendidikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftarTenagaPendidik
     */
    omit?: PendaftarTenagaPendidikOmit<ExtArgs> | null
    /**
     * Filter, which PendaftarTenagaPendidik to fetch.
     */
    where: PendaftarTenagaPendidikWhereUniqueInput
  }

  /**
   * PendaftarTenagaPendidik findFirst
   */
  export type PendaftarTenagaPendidikFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftarTenagaPendidik
     */
    select?: PendaftarTenagaPendidikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftarTenagaPendidik
     */
    omit?: PendaftarTenagaPendidikOmit<ExtArgs> | null
    /**
     * Filter, which PendaftarTenagaPendidik to fetch.
     */
    where?: PendaftarTenagaPendidikWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendaftarTenagaPendidiks to fetch.
     */
    orderBy?: PendaftarTenagaPendidikOrderByWithRelationInput | PendaftarTenagaPendidikOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PendaftarTenagaPendidiks.
     */
    cursor?: PendaftarTenagaPendidikWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendaftarTenagaPendidiks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendaftarTenagaPendidiks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PendaftarTenagaPendidiks.
     */
    distinct?: PendaftarTenagaPendidikScalarFieldEnum | PendaftarTenagaPendidikScalarFieldEnum[]
  }

  /**
   * PendaftarTenagaPendidik findFirstOrThrow
   */
  export type PendaftarTenagaPendidikFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftarTenagaPendidik
     */
    select?: PendaftarTenagaPendidikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftarTenagaPendidik
     */
    omit?: PendaftarTenagaPendidikOmit<ExtArgs> | null
    /**
     * Filter, which PendaftarTenagaPendidik to fetch.
     */
    where?: PendaftarTenagaPendidikWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendaftarTenagaPendidiks to fetch.
     */
    orderBy?: PendaftarTenagaPendidikOrderByWithRelationInput | PendaftarTenagaPendidikOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PendaftarTenagaPendidiks.
     */
    cursor?: PendaftarTenagaPendidikWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendaftarTenagaPendidiks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendaftarTenagaPendidiks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PendaftarTenagaPendidiks.
     */
    distinct?: PendaftarTenagaPendidikScalarFieldEnum | PendaftarTenagaPendidikScalarFieldEnum[]
  }

  /**
   * PendaftarTenagaPendidik findMany
   */
  export type PendaftarTenagaPendidikFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftarTenagaPendidik
     */
    select?: PendaftarTenagaPendidikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftarTenagaPendidik
     */
    omit?: PendaftarTenagaPendidikOmit<ExtArgs> | null
    /**
     * Filter, which PendaftarTenagaPendidiks to fetch.
     */
    where?: PendaftarTenagaPendidikWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendaftarTenagaPendidiks to fetch.
     */
    orderBy?: PendaftarTenagaPendidikOrderByWithRelationInput | PendaftarTenagaPendidikOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PendaftarTenagaPendidiks.
     */
    cursor?: PendaftarTenagaPendidikWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendaftarTenagaPendidiks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendaftarTenagaPendidiks.
     */
    skip?: number
    distinct?: PendaftarTenagaPendidikScalarFieldEnum | PendaftarTenagaPendidikScalarFieldEnum[]
  }

  /**
   * PendaftarTenagaPendidik create
   */
  export type PendaftarTenagaPendidikCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftarTenagaPendidik
     */
    select?: PendaftarTenagaPendidikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftarTenagaPendidik
     */
    omit?: PendaftarTenagaPendidikOmit<ExtArgs> | null
    /**
     * The data needed to create a PendaftarTenagaPendidik.
     */
    data: XOR<PendaftarTenagaPendidikCreateInput, PendaftarTenagaPendidikUncheckedCreateInput>
  }

  /**
   * PendaftarTenagaPendidik createMany
   */
  export type PendaftarTenagaPendidikCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PendaftarTenagaPendidiks.
     */
    data: PendaftarTenagaPendidikCreateManyInput | PendaftarTenagaPendidikCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PendaftarTenagaPendidik createManyAndReturn
   */
  export type PendaftarTenagaPendidikCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftarTenagaPendidik
     */
    select?: PendaftarTenagaPendidikSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftarTenagaPendidik
     */
    omit?: PendaftarTenagaPendidikOmit<ExtArgs> | null
    /**
     * The data used to create many PendaftarTenagaPendidiks.
     */
    data: PendaftarTenagaPendidikCreateManyInput | PendaftarTenagaPendidikCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PendaftarTenagaPendidik update
   */
  export type PendaftarTenagaPendidikUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftarTenagaPendidik
     */
    select?: PendaftarTenagaPendidikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftarTenagaPendidik
     */
    omit?: PendaftarTenagaPendidikOmit<ExtArgs> | null
    /**
     * The data needed to update a PendaftarTenagaPendidik.
     */
    data: XOR<PendaftarTenagaPendidikUpdateInput, PendaftarTenagaPendidikUncheckedUpdateInput>
    /**
     * Choose, which PendaftarTenagaPendidik to update.
     */
    where: PendaftarTenagaPendidikWhereUniqueInput
  }

  /**
   * PendaftarTenagaPendidik updateMany
   */
  export type PendaftarTenagaPendidikUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PendaftarTenagaPendidiks.
     */
    data: XOR<PendaftarTenagaPendidikUpdateManyMutationInput, PendaftarTenagaPendidikUncheckedUpdateManyInput>
    /**
     * Filter which PendaftarTenagaPendidiks to update
     */
    where?: PendaftarTenagaPendidikWhereInput
    /**
     * Limit how many PendaftarTenagaPendidiks to update.
     */
    limit?: number
  }

  /**
   * PendaftarTenagaPendidik updateManyAndReturn
   */
  export type PendaftarTenagaPendidikUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftarTenagaPendidik
     */
    select?: PendaftarTenagaPendidikSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftarTenagaPendidik
     */
    omit?: PendaftarTenagaPendidikOmit<ExtArgs> | null
    /**
     * The data used to update PendaftarTenagaPendidiks.
     */
    data: XOR<PendaftarTenagaPendidikUpdateManyMutationInput, PendaftarTenagaPendidikUncheckedUpdateManyInput>
    /**
     * Filter which PendaftarTenagaPendidiks to update
     */
    where?: PendaftarTenagaPendidikWhereInput
    /**
     * Limit how many PendaftarTenagaPendidiks to update.
     */
    limit?: number
  }

  /**
   * PendaftarTenagaPendidik upsert
   */
  export type PendaftarTenagaPendidikUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftarTenagaPendidik
     */
    select?: PendaftarTenagaPendidikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftarTenagaPendidik
     */
    omit?: PendaftarTenagaPendidikOmit<ExtArgs> | null
    /**
     * The filter to search for the PendaftarTenagaPendidik to update in case it exists.
     */
    where: PendaftarTenagaPendidikWhereUniqueInput
    /**
     * In case the PendaftarTenagaPendidik found by the `where` argument doesn't exist, create a new PendaftarTenagaPendidik with this data.
     */
    create: XOR<PendaftarTenagaPendidikCreateInput, PendaftarTenagaPendidikUncheckedCreateInput>
    /**
     * In case the PendaftarTenagaPendidik was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PendaftarTenagaPendidikUpdateInput, PendaftarTenagaPendidikUncheckedUpdateInput>
  }

  /**
   * PendaftarTenagaPendidik delete
   */
  export type PendaftarTenagaPendidikDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftarTenagaPendidik
     */
    select?: PendaftarTenagaPendidikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftarTenagaPendidik
     */
    omit?: PendaftarTenagaPendidikOmit<ExtArgs> | null
    /**
     * Filter which PendaftarTenagaPendidik to delete.
     */
    where: PendaftarTenagaPendidikWhereUniqueInput
  }

  /**
   * PendaftarTenagaPendidik deleteMany
   */
  export type PendaftarTenagaPendidikDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PendaftarTenagaPendidiks to delete
     */
    where?: PendaftarTenagaPendidikWhereInput
    /**
     * Limit how many PendaftarTenagaPendidiks to delete.
     */
    limit?: number
  }

  /**
   * PendaftarTenagaPendidik without action
   */
  export type PendaftarTenagaPendidikDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftarTenagaPendidik
     */
    select?: PendaftarTenagaPendidikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftarTenagaPendidik
     */
    omit?: PendaftarTenagaPendidikOmit<ExtArgs> | null
  }


  /**
   * Model PesertaDidik
   */

  export type AggregatePesertaDidik = {
    _count: PesertaDidikCountAggregateOutputType | null
    _min: PesertaDidikMinAggregateOutputType | null
    _max: PesertaDidikMaxAggregateOutputType | null
  }

  export type PesertaDidikMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    alamat: string | null
    ttl: Date | null
    namaWali: string | null
    noHpWali: string | null
    masukDari: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PesertaDidikMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    alamat: string | null
    ttl: Date | null
    namaWali: string | null
    noHpWali: string | null
    masukDari: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PesertaDidikCountAggregateOutputType = {
    id: number
    fullName: number
    alamat: number
    ttl: number
    namaWali: number
    noHpWali: number
    masukDari: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PesertaDidikMinAggregateInputType = {
    id?: true
    fullName?: true
    alamat?: true
    ttl?: true
    namaWali?: true
    noHpWali?: true
    masukDari?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PesertaDidikMaxAggregateInputType = {
    id?: true
    fullName?: true
    alamat?: true
    ttl?: true
    namaWali?: true
    noHpWali?: true
    masukDari?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PesertaDidikCountAggregateInputType = {
    id?: true
    fullName?: true
    alamat?: true
    ttl?: true
    namaWali?: true
    noHpWali?: true
    masukDari?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PesertaDidikAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PesertaDidik to aggregate.
     */
    where?: PesertaDidikWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PesertaDidiks to fetch.
     */
    orderBy?: PesertaDidikOrderByWithRelationInput | PesertaDidikOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PesertaDidikWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PesertaDidiks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PesertaDidiks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PesertaDidiks
    **/
    _count?: true | PesertaDidikCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PesertaDidikMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PesertaDidikMaxAggregateInputType
  }

  export type GetPesertaDidikAggregateType<T extends PesertaDidikAggregateArgs> = {
        [P in keyof T & keyof AggregatePesertaDidik]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePesertaDidik[P]>
      : GetScalarType<T[P], AggregatePesertaDidik[P]>
  }




  export type PesertaDidikGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PesertaDidikWhereInput
    orderBy?: PesertaDidikOrderByWithAggregationInput | PesertaDidikOrderByWithAggregationInput[]
    by: PesertaDidikScalarFieldEnum[] | PesertaDidikScalarFieldEnum
    having?: PesertaDidikScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PesertaDidikCountAggregateInputType | true
    _min?: PesertaDidikMinAggregateInputType
    _max?: PesertaDidikMaxAggregateInputType
  }

  export type PesertaDidikGroupByOutputType = {
    id: string
    fullName: string
    alamat: string
    ttl: Date
    namaWali: string
    noHpWali: string
    masukDari: Date
    createdAt: Date
    updatedAt: Date
    _count: PesertaDidikCountAggregateOutputType | null
    _min: PesertaDidikMinAggregateOutputType | null
    _max: PesertaDidikMaxAggregateOutputType | null
  }

  type GetPesertaDidikGroupByPayload<T extends PesertaDidikGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PesertaDidikGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PesertaDidikGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PesertaDidikGroupByOutputType[P]>
            : GetScalarType<T[P], PesertaDidikGroupByOutputType[P]>
        }
      >
    >


  export type PesertaDidikSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    alamat?: boolean
    ttl?: boolean
    namaWali?: boolean
    noHpWali?: boolean
    masukDari?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pesertaDidik"]>

  export type PesertaDidikSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    alamat?: boolean
    ttl?: boolean
    namaWali?: boolean
    noHpWali?: boolean
    masukDari?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pesertaDidik"]>

  export type PesertaDidikSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    alamat?: boolean
    ttl?: boolean
    namaWali?: boolean
    noHpWali?: boolean
    masukDari?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pesertaDidik"]>

  export type PesertaDidikSelectScalar = {
    id?: boolean
    fullName?: boolean
    alamat?: boolean
    ttl?: boolean
    namaWali?: boolean
    noHpWali?: boolean
    masukDari?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PesertaDidikOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "alamat" | "ttl" | "namaWali" | "noHpWali" | "masukDari" | "createdAt" | "updatedAt", ExtArgs["result"]["pesertaDidik"]>

  export type $PesertaDidikPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PesertaDidik"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      alamat: string
      ttl: Date
      namaWali: string
      noHpWali: string
      masukDari: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pesertaDidik"]>
    composites: {}
  }

  type PesertaDidikGetPayload<S extends boolean | null | undefined | PesertaDidikDefaultArgs> = $Result.GetResult<Prisma.$PesertaDidikPayload, S>

  type PesertaDidikCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PesertaDidikFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PesertaDidikCountAggregateInputType | true
    }

  export interface PesertaDidikDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PesertaDidik'], meta: { name: 'PesertaDidik' } }
    /**
     * Find zero or one PesertaDidik that matches the filter.
     * @param {PesertaDidikFindUniqueArgs} args - Arguments to find a PesertaDidik
     * @example
     * // Get one PesertaDidik
     * const pesertaDidik = await prisma.pesertaDidik.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PesertaDidikFindUniqueArgs>(args: SelectSubset<T, PesertaDidikFindUniqueArgs<ExtArgs>>): Prisma__PesertaDidikClient<$Result.GetResult<Prisma.$PesertaDidikPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PesertaDidik that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PesertaDidikFindUniqueOrThrowArgs} args - Arguments to find a PesertaDidik
     * @example
     * // Get one PesertaDidik
     * const pesertaDidik = await prisma.pesertaDidik.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PesertaDidikFindUniqueOrThrowArgs>(args: SelectSubset<T, PesertaDidikFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PesertaDidikClient<$Result.GetResult<Prisma.$PesertaDidikPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PesertaDidik that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesertaDidikFindFirstArgs} args - Arguments to find a PesertaDidik
     * @example
     * // Get one PesertaDidik
     * const pesertaDidik = await prisma.pesertaDidik.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PesertaDidikFindFirstArgs>(args?: SelectSubset<T, PesertaDidikFindFirstArgs<ExtArgs>>): Prisma__PesertaDidikClient<$Result.GetResult<Prisma.$PesertaDidikPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PesertaDidik that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesertaDidikFindFirstOrThrowArgs} args - Arguments to find a PesertaDidik
     * @example
     * // Get one PesertaDidik
     * const pesertaDidik = await prisma.pesertaDidik.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PesertaDidikFindFirstOrThrowArgs>(args?: SelectSubset<T, PesertaDidikFindFirstOrThrowArgs<ExtArgs>>): Prisma__PesertaDidikClient<$Result.GetResult<Prisma.$PesertaDidikPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PesertaDidiks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesertaDidikFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PesertaDidiks
     * const pesertaDidiks = await prisma.pesertaDidik.findMany()
     * 
     * // Get first 10 PesertaDidiks
     * const pesertaDidiks = await prisma.pesertaDidik.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pesertaDidikWithIdOnly = await prisma.pesertaDidik.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PesertaDidikFindManyArgs>(args?: SelectSubset<T, PesertaDidikFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PesertaDidikPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PesertaDidik.
     * @param {PesertaDidikCreateArgs} args - Arguments to create a PesertaDidik.
     * @example
     * // Create one PesertaDidik
     * const PesertaDidik = await prisma.pesertaDidik.create({
     *   data: {
     *     // ... data to create a PesertaDidik
     *   }
     * })
     * 
     */
    create<T extends PesertaDidikCreateArgs>(args: SelectSubset<T, PesertaDidikCreateArgs<ExtArgs>>): Prisma__PesertaDidikClient<$Result.GetResult<Prisma.$PesertaDidikPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PesertaDidiks.
     * @param {PesertaDidikCreateManyArgs} args - Arguments to create many PesertaDidiks.
     * @example
     * // Create many PesertaDidiks
     * const pesertaDidik = await prisma.pesertaDidik.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PesertaDidikCreateManyArgs>(args?: SelectSubset<T, PesertaDidikCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PesertaDidiks and returns the data saved in the database.
     * @param {PesertaDidikCreateManyAndReturnArgs} args - Arguments to create many PesertaDidiks.
     * @example
     * // Create many PesertaDidiks
     * const pesertaDidik = await prisma.pesertaDidik.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PesertaDidiks and only return the `id`
     * const pesertaDidikWithIdOnly = await prisma.pesertaDidik.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PesertaDidikCreateManyAndReturnArgs>(args?: SelectSubset<T, PesertaDidikCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PesertaDidikPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PesertaDidik.
     * @param {PesertaDidikDeleteArgs} args - Arguments to delete one PesertaDidik.
     * @example
     * // Delete one PesertaDidik
     * const PesertaDidik = await prisma.pesertaDidik.delete({
     *   where: {
     *     // ... filter to delete one PesertaDidik
     *   }
     * })
     * 
     */
    delete<T extends PesertaDidikDeleteArgs>(args: SelectSubset<T, PesertaDidikDeleteArgs<ExtArgs>>): Prisma__PesertaDidikClient<$Result.GetResult<Prisma.$PesertaDidikPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PesertaDidik.
     * @param {PesertaDidikUpdateArgs} args - Arguments to update one PesertaDidik.
     * @example
     * // Update one PesertaDidik
     * const pesertaDidik = await prisma.pesertaDidik.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PesertaDidikUpdateArgs>(args: SelectSubset<T, PesertaDidikUpdateArgs<ExtArgs>>): Prisma__PesertaDidikClient<$Result.GetResult<Prisma.$PesertaDidikPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PesertaDidiks.
     * @param {PesertaDidikDeleteManyArgs} args - Arguments to filter PesertaDidiks to delete.
     * @example
     * // Delete a few PesertaDidiks
     * const { count } = await prisma.pesertaDidik.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PesertaDidikDeleteManyArgs>(args?: SelectSubset<T, PesertaDidikDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PesertaDidiks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesertaDidikUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PesertaDidiks
     * const pesertaDidik = await prisma.pesertaDidik.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PesertaDidikUpdateManyArgs>(args: SelectSubset<T, PesertaDidikUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PesertaDidiks and returns the data updated in the database.
     * @param {PesertaDidikUpdateManyAndReturnArgs} args - Arguments to update many PesertaDidiks.
     * @example
     * // Update many PesertaDidiks
     * const pesertaDidik = await prisma.pesertaDidik.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PesertaDidiks and only return the `id`
     * const pesertaDidikWithIdOnly = await prisma.pesertaDidik.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PesertaDidikUpdateManyAndReturnArgs>(args: SelectSubset<T, PesertaDidikUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PesertaDidikPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PesertaDidik.
     * @param {PesertaDidikUpsertArgs} args - Arguments to update or create a PesertaDidik.
     * @example
     * // Update or create a PesertaDidik
     * const pesertaDidik = await prisma.pesertaDidik.upsert({
     *   create: {
     *     // ... data to create a PesertaDidik
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PesertaDidik we want to update
     *   }
     * })
     */
    upsert<T extends PesertaDidikUpsertArgs>(args: SelectSubset<T, PesertaDidikUpsertArgs<ExtArgs>>): Prisma__PesertaDidikClient<$Result.GetResult<Prisma.$PesertaDidikPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PesertaDidiks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesertaDidikCountArgs} args - Arguments to filter PesertaDidiks to count.
     * @example
     * // Count the number of PesertaDidiks
     * const count = await prisma.pesertaDidik.count({
     *   where: {
     *     // ... the filter for the PesertaDidiks we want to count
     *   }
     * })
    **/
    count<T extends PesertaDidikCountArgs>(
      args?: Subset<T, PesertaDidikCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PesertaDidikCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PesertaDidik.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesertaDidikAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PesertaDidikAggregateArgs>(args: Subset<T, PesertaDidikAggregateArgs>): Prisma.PrismaPromise<GetPesertaDidikAggregateType<T>>

    /**
     * Group by PesertaDidik.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesertaDidikGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PesertaDidikGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PesertaDidikGroupByArgs['orderBy'] }
        : { orderBy?: PesertaDidikGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PesertaDidikGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPesertaDidikGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PesertaDidik model
   */
  readonly fields: PesertaDidikFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PesertaDidik.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PesertaDidikClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PesertaDidik model
   */
  interface PesertaDidikFieldRefs {
    readonly id: FieldRef<"PesertaDidik", 'String'>
    readonly fullName: FieldRef<"PesertaDidik", 'String'>
    readonly alamat: FieldRef<"PesertaDidik", 'String'>
    readonly ttl: FieldRef<"PesertaDidik", 'DateTime'>
    readonly namaWali: FieldRef<"PesertaDidik", 'String'>
    readonly noHpWali: FieldRef<"PesertaDidik", 'String'>
    readonly masukDari: FieldRef<"PesertaDidik", 'DateTime'>
    readonly createdAt: FieldRef<"PesertaDidik", 'DateTime'>
    readonly updatedAt: FieldRef<"PesertaDidik", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PesertaDidik findUnique
   */
  export type PesertaDidikFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesertaDidik
     */
    select?: PesertaDidikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesertaDidik
     */
    omit?: PesertaDidikOmit<ExtArgs> | null
    /**
     * Filter, which PesertaDidik to fetch.
     */
    where: PesertaDidikWhereUniqueInput
  }

  /**
   * PesertaDidik findUniqueOrThrow
   */
  export type PesertaDidikFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesertaDidik
     */
    select?: PesertaDidikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesertaDidik
     */
    omit?: PesertaDidikOmit<ExtArgs> | null
    /**
     * Filter, which PesertaDidik to fetch.
     */
    where: PesertaDidikWhereUniqueInput
  }

  /**
   * PesertaDidik findFirst
   */
  export type PesertaDidikFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesertaDidik
     */
    select?: PesertaDidikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesertaDidik
     */
    omit?: PesertaDidikOmit<ExtArgs> | null
    /**
     * Filter, which PesertaDidik to fetch.
     */
    where?: PesertaDidikWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PesertaDidiks to fetch.
     */
    orderBy?: PesertaDidikOrderByWithRelationInput | PesertaDidikOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PesertaDidiks.
     */
    cursor?: PesertaDidikWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PesertaDidiks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PesertaDidiks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PesertaDidiks.
     */
    distinct?: PesertaDidikScalarFieldEnum | PesertaDidikScalarFieldEnum[]
  }

  /**
   * PesertaDidik findFirstOrThrow
   */
  export type PesertaDidikFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesertaDidik
     */
    select?: PesertaDidikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesertaDidik
     */
    omit?: PesertaDidikOmit<ExtArgs> | null
    /**
     * Filter, which PesertaDidik to fetch.
     */
    where?: PesertaDidikWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PesertaDidiks to fetch.
     */
    orderBy?: PesertaDidikOrderByWithRelationInput | PesertaDidikOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PesertaDidiks.
     */
    cursor?: PesertaDidikWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PesertaDidiks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PesertaDidiks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PesertaDidiks.
     */
    distinct?: PesertaDidikScalarFieldEnum | PesertaDidikScalarFieldEnum[]
  }

  /**
   * PesertaDidik findMany
   */
  export type PesertaDidikFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesertaDidik
     */
    select?: PesertaDidikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesertaDidik
     */
    omit?: PesertaDidikOmit<ExtArgs> | null
    /**
     * Filter, which PesertaDidiks to fetch.
     */
    where?: PesertaDidikWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PesertaDidiks to fetch.
     */
    orderBy?: PesertaDidikOrderByWithRelationInput | PesertaDidikOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PesertaDidiks.
     */
    cursor?: PesertaDidikWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PesertaDidiks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PesertaDidiks.
     */
    skip?: number
    distinct?: PesertaDidikScalarFieldEnum | PesertaDidikScalarFieldEnum[]
  }

  /**
   * PesertaDidik create
   */
  export type PesertaDidikCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesertaDidik
     */
    select?: PesertaDidikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesertaDidik
     */
    omit?: PesertaDidikOmit<ExtArgs> | null
    /**
     * The data needed to create a PesertaDidik.
     */
    data: XOR<PesertaDidikCreateInput, PesertaDidikUncheckedCreateInput>
  }

  /**
   * PesertaDidik createMany
   */
  export type PesertaDidikCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PesertaDidiks.
     */
    data: PesertaDidikCreateManyInput | PesertaDidikCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PesertaDidik createManyAndReturn
   */
  export type PesertaDidikCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesertaDidik
     */
    select?: PesertaDidikSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PesertaDidik
     */
    omit?: PesertaDidikOmit<ExtArgs> | null
    /**
     * The data used to create many PesertaDidiks.
     */
    data: PesertaDidikCreateManyInput | PesertaDidikCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PesertaDidik update
   */
  export type PesertaDidikUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesertaDidik
     */
    select?: PesertaDidikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesertaDidik
     */
    omit?: PesertaDidikOmit<ExtArgs> | null
    /**
     * The data needed to update a PesertaDidik.
     */
    data: XOR<PesertaDidikUpdateInput, PesertaDidikUncheckedUpdateInput>
    /**
     * Choose, which PesertaDidik to update.
     */
    where: PesertaDidikWhereUniqueInput
  }

  /**
   * PesertaDidik updateMany
   */
  export type PesertaDidikUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PesertaDidiks.
     */
    data: XOR<PesertaDidikUpdateManyMutationInput, PesertaDidikUncheckedUpdateManyInput>
    /**
     * Filter which PesertaDidiks to update
     */
    where?: PesertaDidikWhereInput
    /**
     * Limit how many PesertaDidiks to update.
     */
    limit?: number
  }

  /**
   * PesertaDidik updateManyAndReturn
   */
  export type PesertaDidikUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesertaDidik
     */
    select?: PesertaDidikSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PesertaDidik
     */
    omit?: PesertaDidikOmit<ExtArgs> | null
    /**
     * The data used to update PesertaDidiks.
     */
    data: XOR<PesertaDidikUpdateManyMutationInput, PesertaDidikUncheckedUpdateManyInput>
    /**
     * Filter which PesertaDidiks to update
     */
    where?: PesertaDidikWhereInput
    /**
     * Limit how many PesertaDidiks to update.
     */
    limit?: number
  }

  /**
   * PesertaDidik upsert
   */
  export type PesertaDidikUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesertaDidik
     */
    select?: PesertaDidikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesertaDidik
     */
    omit?: PesertaDidikOmit<ExtArgs> | null
    /**
     * The filter to search for the PesertaDidik to update in case it exists.
     */
    where: PesertaDidikWhereUniqueInput
    /**
     * In case the PesertaDidik found by the `where` argument doesn't exist, create a new PesertaDidik with this data.
     */
    create: XOR<PesertaDidikCreateInput, PesertaDidikUncheckedCreateInput>
    /**
     * In case the PesertaDidik was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PesertaDidikUpdateInput, PesertaDidikUncheckedUpdateInput>
  }

  /**
   * PesertaDidik delete
   */
  export type PesertaDidikDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesertaDidik
     */
    select?: PesertaDidikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesertaDidik
     */
    omit?: PesertaDidikOmit<ExtArgs> | null
    /**
     * Filter which PesertaDidik to delete.
     */
    where: PesertaDidikWhereUniqueInput
  }

  /**
   * PesertaDidik deleteMany
   */
  export type PesertaDidikDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PesertaDidiks to delete
     */
    where?: PesertaDidikWhereInput
    /**
     * Limit how many PesertaDidiks to delete.
     */
    limit?: number
  }

  /**
   * PesertaDidik without action
   */
  export type PesertaDidikDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesertaDidik
     */
    select?: PesertaDidikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesertaDidik
     */
    omit?: PesertaDidikOmit<ExtArgs> | null
  }


  /**
   * Model TenagaPendidik
   */

  export type AggregateTenagaPendidik = {
    _count: TenagaPendidikCountAggregateOutputType | null
    _min: TenagaPendidikMinAggregateOutputType | null
    _max: TenagaPendidikMaxAggregateOutputType | null
  }

  export type TenagaPendidikMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    alamat: string | null
    noHp: string | null
    email: string | null
    nip: string | null
    bidang: string | null
    masukDari: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenagaPendidikMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    alamat: string | null
    noHp: string | null
    email: string | null
    nip: string | null
    bidang: string | null
    masukDari: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenagaPendidikCountAggregateOutputType = {
    id: number
    fullName: number
    alamat: number
    noHp: number
    email: number
    nip: number
    bidang: number
    masukDari: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TenagaPendidikMinAggregateInputType = {
    id?: true
    fullName?: true
    alamat?: true
    noHp?: true
    email?: true
    nip?: true
    bidang?: true
    masukDari?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenagaPendidikMaxAggregateInputType = {
    id?: true
    fullName?: true
    alamat?: true
    noHp?: true
    email?: true
    nip?: true
    bidang?: true
    masukDari?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenagaPendidikCountAggregateInputType = {
    id?: true
    fullName?: true
    alamat?: true
    noHp?: true
    email?: true
    nip?: true
    bidang?: true
    masukDari?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TenagaPendidikAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TenagaPendidik to aggregate.
     */
    where?: TenagaPendidikWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenagaPendidiks to fetch.
     */
    orderBy?: TenagaPendidikOrderByWithRelationInput | TenagaPendidikOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenagaPendidikWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenagaPendidiks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenagaPendidiks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TenagaPendidiks
    **/
    _count?: true | TenagaPendidikCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenagaPendidikMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenagaPendidikMaxAggregateInputType
  }

  export type GetTenagaPendidikAggregateType<T extends TenagaPendidikAggregateArgs> = {
        [P in keyof T & keyof AggregateTenagaPendidik]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenagaPendidik[P]>
      : GetScalarType<T[P], AggregateTenagaPendidik[P]>
  }




  export type TenagaPendidikGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenagaPendidikWhereInput
    orderBy?: TenagaPendidikOrderByWithAggregationInput | TenagaPendidikOrderByWithAggregationInput[]
    by: TenagaPendidikScalarFieldEnum[] | TenagaPendidikScalarFieldEnum
    having?: TenagaPendidikScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenagaPendidikCountAggregateInputType | true
    _min?: TenagaPendidikMinAggregateInputType
    _max?: TenagaPendidikMaxAggregateInputType
  }

  export type TenagaPendidikGroupByOutputType = {
    id: string
    fullName: string
    alamat: string
    noHp: string
    email: string
    nip: string | null
    bidang: string | null
    masukDari: Date
    createdAt: Date
    updatedAt: Date
    _count: TenagaPendidikCountAggregateOutputType | null
    _min: TenagaPendidikMinAggregateOutputType | null
    _max: TenagaPendidikMaxAggregateOutputType | null
  }

  type GetTenagaPendidikGroupByPayload<T extends TenagaPendidikGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenagaPendidikGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenagaPendidikGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenagaPendidikGroupByOutputType[P]>
            : GetScalarType<T[P], TenagaPendidikGroupByOutputType[P]>
        }
      >
    >


  export type TenagaPendidikSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    alamat?: boolean
    noHp?: boolean
    email?: boolean
    nip?: boolean
    bidang?: boolean
    masukDari?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tenagaPendidik"]>

  export type TenagaPendidikSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    alamat?: boolean
    noHp?: boolean
    email?: boolean
    nip?: boolean
    bidang?: boolean
    masukDari?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tenagaPendidik"]>

  export type TenagaPendidikSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    alamat?: boolean
    noHp?: boolean
    email?: boolean
    nip?: boolean
    bidang?: boolean
    masukDari?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tenagaPendidik"]>

  export type TenagaPendidikSelectScalar = {
    id?: boolean
    fullName?: boolean
    alamat?: boolean
    noHp?: boolean
    email?: boolean
    nip?: boolean
    bidang?: boolean
    masukDari?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TenagaPendidikOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "alamat" | "noHp" | "email" | "nip" | "bidang" | "masukDari" | "createdAt" | "updatedAt", ExtArgs["result"]["tenagaPendidik"]>

  export type $TenagaPendidikPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TenagaPendidik"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      alamat: string
      noHp: string
      email: string
      nip: string | null
      bidang: string | null
      masukDari: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tenagaPendidik"]>
    composites: {}
  }

  type TenagaPendidikGetPayload<S extends boolean | null | undefined | TenagaPendidikDefaultArgs> = $Result.GetResult<Prisma.$TenagaPendidikPayload, S>

  type TenagaPendidikCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TenagaPendidikFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenagaPendidikCountAggregateInputType | true
    }

  export interface TenagaPendidikDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TenagaPendidik'], meta: { name: 'TenagaPendidik' } }
    /**
     * Find zero or one TenagaPendidik that matches the filter.
     * @param {TenagaPendidikFindUniqueArgs} args - Arguments to find a TenagaPendidik
     * @example
     * // Get one TenagaPendidik
     * const tenagaPendidik = await prisma.tenagaPendidik.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenagaPendidikFindUniqueArgs>(args: SelectSubset<T, TenagaPendidikFindUniqueArgs<ExtArgs>>): Prisma__TenagaPendidikClient<$Result.GetResult<Prisma.$TenagaPendidikPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TenagaPendidik that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TenagaPendidikFindUniqueOrThrowArgs} args - Arguments to find a TenagaPendidik
     * @example
     * // Get one TenagaPendidik
     * const tenagaPendidik = await prisma.tenagaPendidik.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenagaPendidikFindUniqueOrThrowArgs>(args: SelectSubset<T, TenagaPendidikFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenagaPendidikClient<$Result.GetResult<Prisma.$TenagaPendidikPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TenagaPendidik that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenagaPendidikFindFirstArgs} args - Arguments to find a TenagaPendidik
     * @example
     * // Get one TenagaPendidik
     * const tenagaPendidik = await prisma.tenagaPendidik.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenagaPendidikFindFirstArgs>(args?: SelectSubset<T, TenagaPendidikFindFirstArgs<ExtArgs>>): Prisma__TenagaPendidikClient<$Result.GetResult<Prisma.$TenagaPendidikPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TenagaPendidik that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenagaPendidikFindFirstOrThrowArgs} args - Arguments to find a TenagaPendidik
     * @example
     * // Get one TenagaPendidik
     * const tenagaPendidik = await prisma.tenagaPendidik.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenagaPendidikFindFirstOrThrowArgs>(args?: SelectSubset<T, TenagaPendidikFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenagaPendidikClient<$Result.GetResult<Prisma.$TenagaPendidikPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TenagaPendidiks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenagaPendidikFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TenagaPendidiks
     * const tenagaPendidiks = await prisma.tenagaPendidik.findMany()
     * 
     * // Get first 10 TenagaPendidiks
     * const tenagaPendidiks = await prisma.tenagaPendidik.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenagaPendidikWithIdOnly = await prisma.tenagaPendidik.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenagaPendidikFindManyArgs>(args?: SelectSubset<T, TenagaPendidikFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenagaPendidikPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TenagaPendidik.
     * @param {TenagaPendidikCreateArgs} args - Arguments to create a TenagaPendidik.
     * @example
     * // Create one TenagaPendidik
     * const TenagaPendidik = await prisma.tenagaPendidik.create({
     *   data: {
     *     // ... data to create a TenagaPendidik
     *   }
     * })
     * 
     */
    create<T extends TenagaPendidikCreateArgs>(args: SelectSubset<T, TenagaPendidikCreateArgs<ExtArgs>>): Prisma__TenagaPendidikClient<$Result.GetResult<Prisma.$TenagaPendidikPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TenagaPendidiks.
     * @param {TenagaPendidikCreateManyArgs} args - Arguments to create many TenagaPendidiks.
     * @example
     * // Create many TenagaPendidiks
     * const tenagaPendidik = await prisma.tenagaPendidik.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenagaPendidikCreateManyArgs>(args?: SelectSubset<T, TenagaPendidikCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TenagaPendidiks and returns the data saved in the database.
     * @param {TenagaPendidikCreateManyAndReturnArgs} args - Arguments to create many TenagaPendidiks.
     * @example
     * // Create many TenagaPendidiks
     * const tenagaPendidik = await prisma.tenagaPendidik.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TenagaPendidiks and only return the `id`
     * const tenagaPendidikWithIdOnly = await prisma.tenagaPendidik.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenagaPendidikCreateManyAndReturnArgs>(args?: SelectSubset<T, TenagaPendidikCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenagaPendidikPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TenagaPendidik.
     * @param {TenagaPendidikDeleteArgs} args - Arguments to delete one TenagaPendidik.
     * @example
     * // Delete one TenagaPendidik
     * const TenagaPendidik = await prisma.tenagaPendidik.delete({
     *   where: {
     *     // ... filter to delete one TenagaPendidik
     *   }
     * })
     * 
     */
    delete<T extends TenagaPendidikDeleteArgs>(args: SelectSubset<T, TenagaPendidikDeleteArgs<ExtArgs>>): Prisma__TenagaPendidikClient<$Result.GetResult<Prisma.$TenagaPendidikPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TenagaPendidik.
     * @param {TenagaPendidikUpdateArgs} args - Arguments to update one TenagaPendidik.
     * @example
     * // Update one TenagaPendidik
     * const tenagaPendidik = await prisma.tenagaPendidik.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenagaPendidikUpdateArgs>(args: SelectSubset<T, TenagaPendidikUpdateArgs<ExtArgs>>): Prisma__TenagaPendidikClient<$Result.GetResult<Prisma.$TenagaPendidikPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TenagaPendidiks.
     * @param {TenagaPendidikDeleteManyArgs} args - Arguments to filter TenagaPendidiks to delete.
     * @example
     * // Delete a few TenagaPendidiks
     * const { count } = await prisma.tenagaPendidik.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenagaPendidikDeleteManyArgs>(args?: SelectSubset<T, TenagaPendidikDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TenagaPendidiks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenagaPendidikUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TenagaPendidiks
     * const tenagaPendidik = await prisma.tenagaPendidik.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenagaPendidikUpdateManyArgs>(args: SelectSubset<T, TenagaPendidikUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TenagaPendidiks and returns the data updated in the database.
     * @param {TenagaPendidikUpdateManyAndReturnArgs} args - Arguments to update many TenagaPendidiks.
     * @example
     * // Update many TenagaPendidiks
     * const tenagaPendidik = await prisma.tenagaPendidik.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TenagaPendidiks and only return the `id`
     * const tenagaPendidikWithIdOnly = await prisma.tenagaPendidik.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TenagaPendidikUpdateManyAndReturnArgs>(args: SelectSubset<T, TenagaPendidikUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenagaPendidikPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TenagaPendidik.
     * @param {TenagaPendidikUpsertArgs} args - Arguments to update or create a TenagaPendidik.
     * @example
     * // Update or create a TenagaPendidik
     * const tenagaPendidik = await prisma.tenagaPendidik.upsert({
     *   create: {
     *     // ... data to create a TenagaPendidik
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TenagaPendidik we want to update
     *   }
     * })
     */
    upsert<T extends TenagaPendidikUpsertArgs>(args: SelectSubset<T, TenagaPendidikUpsertArgs<ExtArgs>>): Prisma__TenagaPendidikClient<$Result.GetResult<Prisma.$TenagaPendidikPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TenagaPendidiks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenagaPendidikCountArgs} args - Arguments to filter TenagaPendidiks to count.
     * @example
     * // Count the number of TenagaPendidiks
     * const count = await prisma.tenagaPendidik.count({
     *   where: {
     *     // ... the filter for the TenagaPendidiks we want to count
     *   }
     * })
    **/
    count<T extends TenagaPendidikCountArgs>(
      args?: Subset<T, TenagaPendidikCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenagaPendidikCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TenagaPendidik.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenagaPendidikAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TenagaPendidikAggregateArgs>(args: Subset<T, TenagaPendidikAggregateArgs>): Prisma.PrismaPromise<GetTenagaPendidikAggregateType<T>>

    /**
     * Group by TenagaPendidik.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenagaPendidikGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TenagaPendidikGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenagaPendidikGroupByArgs['orderBy'] }
        : { orderBy?: TenagaPendidikGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TenagaPendidikGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenagaPendidikGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TenagaPendidik model
   */
  readonly fields: TenagaPendidikFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TenagaPendidik.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenagaPendidikClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TenagaPendidik model
   */
  interface TenagaPendidikFieldRefs {
    readonly id: FieldRef<"TenagaPendidik", 'String'>
    readonly fullName: FieldRef<"TenagaPendidik", 'String'>
    readonly alamat: FieldRef<"TenagaPendidik", 'String'>
    readonly noHp: FieldRef<"TenagaPendidik", 'String'>
    readonly email: FieldRef<"TenagaPendidik", 'String'>
    readonly nip: FieldRef<"TenagaPendidik", 'String'>
    readonly bidang: FieldRef<"TenagaPendidik", 'String'>
    readonly masukDari: FieldRef<"TenagaPendidik", 'DateTime'>
    readonly createdAt: FieldRef<"TenagaPendidik", 'DateTime'>
    readonly updatedAt: FieldRef<"TenagaPendidik", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TenagaPendidik findUnique
   */
  export type TenagaPendidikFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenagaPendidik
     */
    select?: TenagaPendidikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenagaPendidik
     */
    omit?: TenagaPendidikOmit<ExtArgs> | null
    /**
     * Filter, which TenagaPendidik to fetch.
     */
    where: TenagaPendidikWhereUniqueInput
  }

  /**
   * TenagaPendidik findUniqueOrThrow
   */
  export type TenagaPendidikFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenagaPendidik
     */
    select?: TenagaPendidikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenagaPendidik
     */
    omit?: TenagaPendidikOmit<ExtArgs> | null
    /**
     * Filter, which TenagaPendidik to fetch.
     */
    where: TenagaPendidikWhereUniqueInput
  }

  /**
   * TenagaPendidik findFirst
   */
  export type TenagaPendidikFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenagaPendidik
     */
    select?: TenagaPendidikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenagaPendidik
     */
    omit?: TenagaPendidikOmit<ExtArgs> | null
    /**
     * Filter, which TenagaPendidik to fetch.
     */
    where?: TenagaPendidikWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenagaPendidiks to fetch.
     */
    orderBy?: TenagaPendidikOrderByWithRelationInput | TenagaPendidikOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TenagaPendidiks.
     */
    cursor?: TenagaPendidikWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenagaPendidiks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenagaPendidiks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TenagaPendidiks.
     */
    distinct?: TenagaPendidikScalarFieldEnum | TenagaPendidikScalarFieldEnum[]
  }

  /**
   * TenagaPendidik findFirstOrThrow
   */
  export type TenagaPendidikFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenagaPendidik
     */
    select?: TenagaPendidikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenagaPendidik
     */
    omit?: TenagaPendidikOmit<ExtArgs> | null
    /**
     * Filter, which TenagaPendidik to fetch.
     */
    where?: TenagaPendidikWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenagaPendidiks to fetch.
     */
    orderBy?: TenagaPendidikOrderByWithRelationInput | TenagaPendidikOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TenagaPendidiks.
     */
    cursor?: TenagaPendidikWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenagaPendidiks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenagaPendidiks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TenagaPendidiks.
     */
    distinct?: TenagaPendidikScalarFieldEnum | TenagaPendidikScalarFieldEnum[]
  }

  /**
   * TenagaPendidik findMany
   */
  export type TenagaPendidikFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenagaPendidik
     */
    select?: TenagaPendidikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenagaPendidik
     */
    omit?: TenagaPendidikOmit<ExtArgs> | null
    /**
     * Filter, which TenagaPendidiks to fetch.
     */
    where?: TenagaPendidikWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenagaPendidiks to fetch.
     */
    orderBy?: TenagaPendidikOrderByWithRelationInput | TenagaPendidikOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TenagaPendidiks.
     */
    cursor?: TenagaPendidikWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenagaPendidiks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenagaPendidiks.
     */
    skip?: number
    distinct?: TenagaPendidikScalarFieldEnum | TenagaPendidikScalarFieldEnum[]
  }

  /**
   * TenagaPendidik create
   */
  export type TenagaPendidikCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenagaPendidik
     */
    select?: TenagaPendidikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenagaPendidik
     */
    omit?: TenagaPendidikOmit<ExtArgs> | null
    /**
     * The data needed to create a TenagaPendidik.
     */
    data: XOR<TenagaPendidikCreateInput, TenagaPendidikUncheckedCreateInput>
  }

  /**
   * TenagaPendidik createMany
   */
  export type TenagaPendidikCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TenagaPendidiks.
     */
    data: TenagaPendidikCreateManyInput | TenagaPendidikCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TenagaPendidik createManyAndReturn
   */
  export type TenagaPendidikCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenagaPendidik
     */
    select?: TenagaPendidikSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TenagaPendidik
     */
    omit?: TenagaPendidikOmit<ExtArgs> | null
    /**
     * The data used to create many TenagaPendidiks.
     */
    data: TenagaPendidikCreateManyInput | TenagaPendidikCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TenagaPendidik update
   */
  export type TenagaPendidikUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenagaPendidik
     */
    select?: TenagaPendidikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenagaPendidik
     */
    omit?: TenagaPendidikOmit<ExtArgs> | null
    /**
     * The data needed to update a TenagaPendidik.
     */
    data: XOR<TenagaPendidikUpdateInput, TenagaPendidikUncheckedUpdateInput>
    /**
     * Choose, which TenagaPendidik to update.
     */
    where: TenagaPendidikWhereUniqueInput
  }

  /**
   * TenagaPendidik updateMany
   */
  export type TenagaPendidikUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TenagaPendidiks.
     */
    data: XOR<TenagaPendidikUpdateManyMutationInput, TenagaPendidikUncheckedUpdateManyInput>
    /**
     * Filter which TenagaPendidiks to update
     */
    where?: TenagaPendidikWhereInput
    /**
     * Limit how many TenagaPendidiks to update.
     */
    limit?: number
  }

  /**
   * TenagaPendidik updateManyAndReturn
   */
  export type TenagaPendidikUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenagaPendidik
     */
    select?: TenagaPendidikSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TenagaPendidik
     */
    omit?: TenagaPendidikOmit<ExtArgs> | null
    /**
     * The data used to update TenagaPendidiks.
     */
    data: XOR<TenagaPendidikUpdateManyMutationInput, TenagaPendidikUncheckedUpdateManyInput>
    /**
     * Filter which TenagaPendidiks to update
     */
    where?: TenagaPendidikWhereInput
    /**
     * Limit how many TenagaPendidiks to update.
     */
    limit?: number
  }

  /**
   * TenagaPendidik upsert
   */
  export type TenagaPendidikUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenagaPendidik
     */
    select?: TenagaPendidikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenagaPendidik
     */
    omit?: TenagaPendidikOmit<ExtArgs> | null
    /**
     * The filter to search for the TenagaPendidik to update in case it exists.
     */
    where: TenagaPendidikWhereUniqueInput
    /**
     * In case the TenagaPendidik found by the `where` argument doesn't exist, create a new TenagaPendidik with this data.
     */
    create: XOR<TenagaPendidikCreateInput, TenagaPendidikUncheckedCreateInput>
    /**
     * In case the TenagaPendidik was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenagaPendidikUpdateInput, TenagaPendidikUncheckedUpdateInput>
  }

  /**
   * TenagaPendidik delete
   */
  export type TenagaPendidikDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenagaPendidik
     */
    select?: TenagaPendidikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenagaPendidik
     */
    omit?: TenagaPendidikOmit<ExtArgs> | null
    /**
     * Filter which TenagaPendidik to delete.
     */
    where: TenagaPendidikWhereUniqueInput
  }

  /**
   * TenagaPendidik deleteMany
   */
  export type TenagaPendidikDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TenagaPendidiks to delete
     */
    where?: TenagaPendidikWhereInput
    /**
     * Limit how many TenagaPendidiks to delete.
     */
    limit?: number
  }

  /**
   * TenagaPendidik without action
   */
  export type TenagaPendidikDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenagaPendidik
     */
    select?: TenagaPendidikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenagaPendidik
     */
    omit?: TenagaPendidikOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ArtikelBeritaScalarFieldEnum: {
    id: 'id',
    judul: 'judul',
    content: 'content',
    imageUrl: 'imageUrl',
    isPublished: 'isPublished',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArtikelBeritaScalarFieldEnum = (typeof ArtikelBeritaScalarFieldEnum)[keyof typeof ArtikelBeritaScalarFieldEnum]


  export const KritikSaranScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type KritikSaranScalarFieldEnum = (typeof KritikSaranScalarFieldEnum)[keyof typeof KritikSaranScalarFieldEnum]


  export const LaporanScalarFieldEnum: {
    id: 'id',
    judul: 'judul',
    content: 'content',
    author: 'author',
    createdAt: 'createdAt'
  };

  export type LaporanScalarFieldEnum = (typeof LaporanScalarFieldEnum)[keyof typeof LaporanScalarFieldEnum]


  export const PendaftarPesertaDidikScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    alamat: 'alamat',
    ttl: 'ttl',
    namaWali: 'namaWali',
    noHpWali: 'noHpWali',
    createdAt: 'createdAt'
  };

  export type PendaftarPesertaDidikScalarFieldEnum = (typeof PendaftarPesertaDidikScalarFieldEnum)[keyof typeof PendaftarPesertaDidikScalarFieldEnum]


  export const PendaftarTenagaPendidikScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    alamat: 'alamat',
    noHp: 'noHp',
    email: 'email',
    pendidikan: 'pendidikan',
    pengalaman: 'pengalaman',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type PendaftarTenagaPendidikScalarFieldEnum = (typeof PendaftarTenagaPendidikScalarFieldEnum)[keyof typeof PendaftarTenagaPendidikScalarFieldEnum]


  export const PesertaDidikScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    alamat: 'alamat',
    ttl: 'ttl',
    namaWali: 'namaWali',
    noHpWali: 'noHpWali',
    masukDari: 'masukDari',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PesertaDidikScalarFieldEnum = (typeof PesertaDidikScalarFieldEnum)[keyof typeof PesertaDidikScalarFieldEnum]


  export const TenagaPendidikScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    alamat: 'alamat',
    noHp: 'noHp',
    email: 'email',
    nip: 'nip',
    bidang: 'bidang',
    masukDari: 'masukDari',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TenagaPendidikScalarFieldEnum = (typeof TenagaPendidikScalarFieldEnum)[keyof typeof TenagaPendidikScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'StatusPendaftaran'
   */
  export type EnumStatusPendaftaranFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPendaftaran'>
    


  /**
   * Reference to a field of type 'StatusPendaftaran[]'
   */
  export type ListEnumStatusPendaftaranFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPendaftaran[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    KritikSaran?: KritikSaranListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    KritikSaran?: KritikSaranOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    KritikSaran?: KritikSaranListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ArtikelBeritaWhereInput = {
    AND?: ArtikelBeritaWhereInput | ArtikelBeritaWhereInput[]
    OR?: ArtikelBeritaWhereInput[]
    NOT?: ArtikelBeritaWhereInput | ArtikelBeritaWhereInput[]
    id?: StringFilter<"ArtikelBerita"> | string
    judul?: StringFilter<"ArtikelBerita"> | string
    content?: StringFilter<"ArtikelBerita"> | string
    imageUrl?: StringFilter<"ArtikelBerita"> | string
    isPublished?: BoolFilter<"ArtikelBerita"> | boolean
    createdAt?: DateTimeFilter<"ArtikelBerita"> | Date | string
    updatedAt?: DateTimeFilter<"ArtikelBerita"> | Date | string
  }

  export type ArtikelBeritaOrderByWithRelationInput = {
    id?: SortOrder
    judul?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArtikelBeritaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArtikelBeritaWhereInput | ArtikelBeritaWhereInput[]
    OR?: ArtikelBeritaWhereInput[]
    NOT?: ArtikelBeritaWhereInput | ArtikelBeritaWhereInput[]
    judul?: StringFilter<"ArtikelBerita"> | string
    content?: StringFilter<"ArtikelBerita"> | string
    imageUrl?: StringFilter<"ArtikelBerita"> | string
    isPublished?: BoolFilter<"ArtikelBerita"> | boolean
    createdAt?: DateTimeFilter<"ArtikelBerita"> | Date | string
    updatedAt?: DateTimeFilter<"ArtikelBerita"> | Date | string
  }, "id">

  export type ArtikelBeritaOrderByWithAggregationInput = {
    id?: SortOrder
    judul?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArtikelBeritaCountOrderByAggregateInput
    _max?: ArtikelBeritaMaxOrderByAggregateInput
    _min?: ArtikelBeritaMinOrderByAggregateInput
  }

  export type ArtikelBeritaScalarWhereWithAggregatesInput = {
    AND?: ArtikelBeritaScalarWhereWithAggregatesInput | ArtikelBeritaScalarWhereWithAggregatesInput[]
    OR?: ArtikelBeritaScalarWhereWithAggregatesInput[]
    NOT?: ArtikelBeritaScalarWhereWithAggregatesInput | ArtikelBeritaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ArtikelBerita"> | string
    judul?: StringWithAggregatesFilter<"ArtikelBerita"> | string
    content?: StringWithAggregatesFilter<"ArtikelBerita"> | string
    imageUrl?: StringWithAggregatesFilter<"ArtikelBerita"> | string
    isPublished?: BoolWithAggregatesFilter<"ArtikelBerita"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ArtikelBerita"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ArtikelBerita"> | Date | string
  }

  export type KritikSaranWhereInput = {
    AND?: KritikSaranWhereInput | KritikSaranWhereInput[]
    OR?: KritikSaranWhereInput[]
    NOT?: KritikSaranWhereInput | KritikSaranWhereInput[]
    id?: StringFilter<"KritikSaran"> | string
    userId?: StringFilter<"KritikSaran"> | string
    content?: StringFilter<"KritikSaran"> | string
    createdAt?: DateTimeFilter<"KritikSaran"> | Date | string
    updatedAt?: DateTimeFilter<"KritikSaran"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type KritikSaranOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type KritikSaranWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: KritikSaranWhereInput | KritikSaranWhereInput[]
    OR?: KritikSaranWhereInput[]
    NOT?: KritikSaranWhereInput | KritikSaranWhereInput[]
    userId?: StringFilter<"KritikSaran"> | string
    content?: StringFilter<"KritikSaran"> | string
    createdAt?: DateTimeFilter<"KritikSaran"> | Date | string
    updatedAt?: DateTimeFilter<"KritikSaran"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type KritikSaranOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: KritikSaranCountOrderByAggregateInput
    _max?: KritikSaranMaxOrderByAggregateInput
    _min?: KritikSaranMinOrderByAggregateInput
  }

  export type KritikSaranScalarWhereWithAggregatesInput = {
    AND?: KritikSaranScalarWhereWithAggregatesInput | KritikSaranScalarWhereWithAggregatesInput[]
    OR?: KritikSaranScalarWhereWithAggregatesInput[]
    NOT?: KritikSaranScalarWhereWithAggregatesInput | KritikSaranScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"KritikSaran"> | string
    userId?: StringWithAggregatesFilter<"KritikSaran"> | string
    content?: StringWithAggregatesFilter<"KritikSaran"> | string
    createdAt?: DateTimeWithAggregatesFilter<"KritikSaran"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"KritikSaran"> | Date | string
  }

  export type LaporanWhereInput = {
    AND?: LaporanWhereInput | LaporanWhereInput[]
    OR?: LaporanWhereInput[]
    NOT?: LaporanWhereInput | LaporanWhereInput[]
    id?: StringFilter<"Laporan"> | string
    judul?: StringFilter<"Laporan"> | string
    content?: StringFilter<"Laporan"> | string
    author?: StringFilter<"Laporan"> | string
    createdAt?: DateTimeFilter<"Laporan"> | Date | string
  }

  export type LaporanOrderByWithRelationInput = {
    id?: SortOrder
    judul?: SortOrder
    content?: SortOrder
    author?: SortOrder
    createdAt?: SortOrder
  }

  export type LaporanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LaporanWhereInput | LaporanWhereInput[]
    OR?: LaporanWhereInput[]
    NOT?: LaporanWhereInput | LaporanWhereInput[]
    judul?: StringFilter<"Laporan"> | string
    content?: StringFilter<"Laporan"> | string
    author?: StringFilter<"Laporan"> | string
    createdAt?: DateTimeFilter<"Laporan"> | Date | string
  }, "id">

  export type LaporanOrderByWithAggregationInput = {
    id?: SortOrder
    judul?: SortOrder
    content?: SortOrder
    author?: SortOrder
    createdAt?: SortOrder
    _count?: LaporanCountOrderByAggregateInput
    _max?: LaporanMaxOrderByAggregateInput
    _min?: LaporanMinOrderByAggregateInput
  }

  export type LaporanScalarWhereWithAggregatesInput = {
    AND?: LaporanScalarWhereWithAggregatesInput | LaporanScalarWhereWithAggregatesInput[]
    OR?: LaporanScalarWhereWithAggregatesInput[]
    NOT?: LaporanScalarWhereWithAggregatesInput | LaporanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Laporan"> | string
    judul?: StringWithAggregatesFilter<"Laporan"> | string
    content?: StringWithAggregatesFilter<"Laporan"> | string
    author?: StringWithAggregatesFilter<"Laporan"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Laporan"> | Date | string
  }

  export type PendaftarPesertaDidikWhereInput = {
    AND?: PendaftarPesertaDidikWhereInput | PendaftarPesertaDidikWhereInput[]
    OR?: PendaftarPesertaDidikWhereInput[]
    NOT?: PendaftarPesertaDidikWhereInput | PendaftarPesertaDidikWhereInput[]
    id?: StringFilter<"PendaftarPesertaDidik"> | string
    fullName?: StringFilter<"PendaftarPesertaDidik"> | string
    alamat?: StringFilter<"PendaftarPesertaDidik"> | string
    ttl?: DateTimeFilter<"PendaftarPesertaDidik"> | Date | string
    namaWali?: StringFilter<"PendaftarPesertaDidik"> | string
    noHpWali?: StringFilter<"PendaftarPesertaDidik"> | string
    createdAt?: DateTimeFilter<"PendaftarPesertaDidik"> | Date | string
  }

  export type PendaftarPesertaDidikOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    alamat?: SortOrder
    ttl?: SortOrder
    namaWali?: SortOrder
    noHpWali?: SortOrder
    createdAt?: SortOrder
  }

  export type PendaftarPesertaDidikWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PendaftarPesertaDidikWhereInput | PendaftarPesertaDidikWhereInput[]
    OR?: PendaftarPesertaDidikWhereInput[]
    NOT?: PendaftarPesertaDidikWhereInput | PendaftarPesertaDidikWhereInput[]
    fullName?: StringFilter<"PendaftarPesertaDidik"> | string
    alamat?: StringFilter<"PendaftarPesertaDidik"> | string
    ttl?: DateTimeFilter<"PendaftarPesertaDidik"> | Date | string
    namaWali?: StringFilter<"PendaftarPesertaDidik"> | string
    noHpWali?: StringFilter<"PendaftarPesertaDidik"> | string
    createdAt?: DateTimeFilter<"PendaftarPesertaDidik"> | Date | string
  }, "id">

  export type PendaftarPesertaDidikOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    alamat?: SortOrder
    ttl?: SortOrder
    namaWali?: SortOrder
    noHpWali?: SortOrder
    createdAt?: SortOrder
    _count?: PendaftarPesertaDidikCountOrderByAggregateInput
    _max?: PendaftarPesertaDidikMaxOrderByAggregateInput
    _min?: PendaftarPesertaDidikMinOrderByAggregateInput
  }

  export type PendaftarPesertaDidikScalarWhereWithAggregatesInput = {
    AND?: PendaftarPesertaDidikScalarWhereWithAggregatesInput | PendaftarPesertaDidikScalarWhereWithAggregatesInput[]
    OR?: PendaftarPesertaDidikScalarWhereWithAggregatesInput[]
    NOT?: PendaftarPesertaDidikScalarWhereWithAggregatesInput | PendaftarPesertaDidikScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PendaftarPesertaDidik"> | string
    fullName?: StringWithAggregatesFilter<"PendaftarPesertaDidik"> | string
    alamat?: StringWithAggregatesFilter<"PendaftarPesertaDidik"> | string
    ttl?: DateTimeWithAggregatesFilter<"PendaftarPesertaDidik"> | Date | string
    namaWali?: StringWithAggregatesFilter<"PendaftarPesertaDidik"> | string
    noHpWali?: StringWithAggregatesFilter<"PendaftarPesertaDidik"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PendaftarPesertaDidik"> | Date | string
  }

  export type PendaftarTenagaPendidikWhereInput = {
    AND?: PendaftarTenagaPendidikWhereInput | PendaftarTenagaPendidikWhereInput[]
    OR?: PendaftarTenagaPendidikWhereInput[]
    NOT?: PendaftarTenagaPendidikWhereInput | PendaftarTenagaPendidikWhereInput[]
    id?: StringFilter<"PendaftarTenagaPendidik"> | string
    fullName?: StringFilter<"PendaftarTenagaPendidik"> | string
    alamat?: StringFilter<"PendaftarTenagaPendidik"> | string
    noHp?: StringFilter<"PendaftarTenagaPendidik"> | string
    email?: StringFilter<"PendaftarTenagaPendidik"> | string
    pendidikan?: StringFilter<"PendaftarTenagaPendidik"> | string
    pengalaman?: StringNullableFilter<"PendaftarTenagaPendidik"> | string | null
    status?: EnumStatusPendaftaranFilter<"PendaftarTenagaPendidik"> | $Enums.StatusPendaftaran
    createdAt?: DateTimeFilter<"PendaftarTenagaPendidik"> | Date | string
  }

  export type PendaftarTenagaPendidikOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    alamat?: SortOrder
    noHp?: SortOrder
    email?: SortOrder
    pendidikan?: SortOrder
    pengalaman?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PendaftarTenagaPendidikWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: PendaftarTenagaPendidikWhereInput | PendaftarTenagaPendidikWhereInput[]
    OR?: PendaftarTenagaPendidikWhereInput[]
    NOT?: PendaftarTenagaPendidikWhereInput | PendaftarTenagaPendidikWhereInput[]
    fullName?: StringFilter<"PendaftarTenagaPendidik"> | string
    alamat?: StringFilter<"PendaftarTenagaPendidik"> | string
    noHp?: StringFilter<"PendaftarTenagaPendidik"> | string
    pendidikan?: StringFilter<"PendaftarTenagaPendidik"> | string
    pengalaman?: StringNullableFilter<"PendaftarTenagaPendidik"> | string | null
    status?: EnumStatusPendaftaranFilter<"PendaftarTenagaPendidik"> | $Enums.StatusPendaftaran
    createdAt?: DateTimeFilter<"PendaftarTenagaPendidik"> | Date | string
  }, "id" | "email">

  export type PendaftarTenagaPendidikOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    alamat?: SortOrder
    noHp?: SortOrder
    email?: SortOrder
    pendidikan?: SortOrder
    pengalaman?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: PendaftarTenagaPendidikCountOrderByAggregateInput
    _max?: PendaftarTenagaPendidikMaxOrderByAggregateInput
    _min?: PendaftarTenagaPendidikMinOrderByAggregateInput
  }

  export type PendaftarTenagaPendidikScalarWhereWithAggregatesInput = {
    AND?: PendaftarTenagaPendidikScalarWhereWithAggregatesInput | PendaftarTenagaPendidikScalarWhereWithAggregatesInput[]
    OR?: PendaftarTenagaPendidikScalarWhereWithAggregatesInput[]
    NOT?: PendaftarTenagaPendidikScalarWhereWithAggregatesInput | PendaftarTenagaPendidikScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PendaftarTenagaPendidik"> | string
    fullName?: StringWithAggregatesFilter<"PendaftarTenagaPendidik"> | string
    alamat?: StringWithAggregatesFilter<"PendaftarTenagaPendidik"> | string
    noHp?: StringWithAggregatesFilter<"PendaftarTenagaPendidik"> | string
    email?: StringWithAggregatesFilter<"PendaftarTenagaPendidik"> | string
    pendidikan?: StringWithAggregatesFilter<"PendaftarTenagaPendidik"> | string
    pengalaman?: StringNullableWithAggregatesFilter<"PendaftarTenagaPendidik"> | string | null
    status?: EnumStatusPendaftaranWithAggregatesFilter<"PendaftarTenagaPendidik"> | $Enums.StatusPendaftaran
    createdAt?: DateTimeWithAggregatesFilter<"PendaftarTenagaPendidik"> | Date | string
  }

  export type PesertaDidikWhereInput = {
    AND?: PesertaDidikWhereInput | PesertaDidikWhereInput[]
    OR?: PesertaDidikWhereInput[]
    NOT?: PesertaDidikWhereInput | PesertaDidikWhereInput[]
    id?: StringFilter<"PesertaDidik"> | string
    fullName?: StringFilter<"PesertaDidik"> | string
    alamat?: StringFilter<"PesertaDidik"> | string
    ttl?: DateTimeFilter<"PesertaDidik"> | Date | string
    namaWali?: StringFilter<"PesertaDidik"> | string
    noHpWali?: StringFilter<"PesertaDidik"> | string
    masukDari?: DateTimeFilter<"PesertaDidik"> | Date | string
    createdAt?: DateTimeFilter<"PesertaDidik"> | Date | string
    updatedAt?: DateTimeFilter<"PesertaDidik"> | Date | string
  }

  export type PesertaDidikOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    alamat?: SortOrder
    ttl?: SortOrder
    namaWali?: SortOrder
    noHpWali?: SortOrder
    masukDari?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PesertaDidikWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PesertaDidikWhereInput | PesertaDidikWhereInput[]
    OR?: PesertaDidikWhereInput[]
    NOT?: PesertaDidikWhereInput | PesertaDidikWhereInput[]
    fullName?: StringFilter<"PesertaDidik"> | string
    alamat?: StringFilter<"PesertaDidik"> | string
    ttl?: DateTimeFilter<"PesertaDidik"> | Date | string
    namaWali?: StringFilter<"PesertaDidik"> | string
    noHpWali?: StringFilter<"PesertaDidik"> | string
    masukDari?: DateTimeFilter<"PesertaDidik"> | Date | string
    createdAt?: DateTimeFilter<"PesertaDidik"> | Date | string
    updatedAt?: DateTimeFilter<"PesertaDidik"> | Date | string
  }, "id">

  export type PesertaDidikOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    alamat?: SortOrder
    ttl?: SortOrder
    namaWali?: SortOrder
    noHpWali?: SortOrder
    masukDari?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PesertaDidikCountOrderByAggregateInput
    _max?: PesertaDidikMaxOrderByAggregateInput
    _min?: PesertaDidikMinOrderByAggregateInput
  }

  export type PesertaDidikScalarWhereWithAggregatesInput = {
    AND?: PesertaDidikScalarWhereWithAggregatesInput | PesertaDidikScalarWhereWithAggregatesInput[]
    OR?: PesertaDidikScalarWhereWithAggregatesInput[]
    NOT?: PesertaDidikScalarWhereWithAggregatesInput | PesertaDidikScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PesertaDidik"> | string
    fullName?: StringWithAggregatesFilter<"PesertaDidik"> | string
    alamat?: StringWithAggregatesFilter<"PesertaDidik"> | string
    ttl?: DateTimeWithAggregatesFilter<"PesertaDidik"> | Date | string
    namaWali?: StringWithAggregatesFilter<"PesertaDidik"> | string
    noHpWali?: StringWithAggregatesFilter<"PesertaDidik"> | string
    masukDari?: DateTimeWithAggregatesFilter<"PesertaDidik"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"PesertaDidik"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PesertaDidik"> | Date | string
  }

  export type TenagaPendidikWhereInput = {
    AND?: TenagaPendidikWhereInput | TenagaPendidikWhereInput[]
    OR?: TenagaPendidikWhereInput[]
    NOT?: TenagaPendidikWhereInput | TenagaPendidikWhereInput[]
    id?: StringFilter<"TenagaPendidik"> | string
    fullName?: StringFilter<"TenagaPendidik"> | string
    alamat?: StringFilter<"TenagaPendidik"> | string
    noHp?: StringFilter<"TenagaPendidik"> | string
    email?: StringFilter<"TenagaPendidik"> | string
    nip?: StringNullableFilter<"TenagaPendidik"> | string | null
    bidang?: StringNullableFilter<"TenagaPendidik"> | string | null
    masukDari?: DateTimeFilter<"TenagaPendidik"> | Date | string
    createdAt?: DateTimeFilter<"TenagaPendidik"> | Date | string
    updatedAt?: DateTimeFilter<"TenagaPendidik"> | Date | string
  }

  export type TenagaPendidikOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    alamat?: SortOrder
    noHp?: SortOrder
    email?: SortOrder
    nip?: SortOrderInput | SortOrder
    bidang?: SortOrderInput | SortOrder
    masukDari?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenagaPendidikWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    nip?: string
    AND?: TenagaPendidikWhereInput | TenagaPendidikWhereInput[]
    OR?: TenagaPendidikWhereInput[]
    NOT?: TenagaPendidikWhereInput | TenagaPendidikWhereInput[]
    fullName?: StringFilter<"TenagaPendidik"> | string
    alamat?: StringFilter<"TenagaPendidik"> | string
    noHp?: StringFilter<"TenagaPendidik"> | string
    bidang?: StringNullableFilter<"TenagaPendidik"> | string | null
    masukDari?: DateTimeFilter<"TenagaPendidik"> | Date | string
    createdAt?: DateTimeFilter<"TenagaPendidik"> | Date | string
    updatedAt?: DateTimeFilter<"TenagaPendidik"> | Date | string
  }, "id" | "email" | "nip">

  export type TenagaPendidikOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    alamat?: SortOrder
    noHp?: SortOrder
    email?: SortOrder
    nip?: SortOrderInput | SortOrder
    bidang?: SortOrderInput | SortOrder
    masukDari?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TenagaPendidikCountOrderByAggregateInput
    _max?: TenagaPendidikMaxOrderByAggregateInput
    _min?: TenagaPendidikMinOrderByAggregateInput
  }

  export type TenagaPendidikScalarWhereWithAggregatesInput = {
    AND?: TenagaPendidikScalarWhereWithAggregatesInput | TenagaPendidikScalarWhereWithAggregatesInput[]
    OR?: TenagaPendidikScalarWhereWithAggregatesInput[]
    NOT?: TenagaPendidikScalarWhereWithAggregatesInput | TenagaPendidikScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TenagaPendidik"> | string
    fullName?: StringWithAggregatesFilter<"TenagaPendidik"> | string
    alamat?: StringWithAggregatesFilter<"TenagaPendidik"> | string
    noHp?: StringWithAggregatesFilter<"TenagaPendidik"> | string
    email?: StringWithAggregatesFilter<"TenagaPendidik"> | string
    nip?: StringNullableWithAggregatesFilter<"TenagaPendidik"> | string | null
    bidang?: StringNullableWithAggregatesFilter<"TenagaPendidik"> | string | null
    masukDari?: DateTimeWithAggregatesFilter<"TenagaPendidik"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"TenagaPendidik"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TenagaPendidik"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    KritikSaran?: KritikSaranCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    KritikSaran?: KritikSaranUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    KritikSaran?: KritikSaranUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    KritikSaran?: KritikSaranUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtikelBeritaCreateInput = {
    id?: string
    judul: string
    content: string
    imageUrl: string
    isPublished: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArtikelBeritaUncheckedCreateInput = {
    id?: string
    judul: string
    content: string
    imageUrl: string
    isPublished: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArtikelBeritaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtikelBeritaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtikelBeritaCreateManyInput = {
    id?: string
    judul: string
    content: string
    imageUrl: string
    isPublished: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArtikelBeritaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtikelBeritaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KritikSaranCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutKritikSaranInput
  }

  export type KritikSaranUncheckedCreateInput = {
    id?: string
    userId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KritikSaranUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutKritikSaranNestedInput
  }

  export type KritikSaranUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KritikSaranCreateManyInput = {
    id?: string
    userId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KritikSaranUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KritikSaranUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaporanCreateInput = {
    id?: string
    judul: string
    content: string
    author: string
    createdAt?: Date | string
  }

  export type LaporanUncheckedCreateInput = {
    id?: string
    judul: string
    content: string
    author: string
    createdAt?: Date | string
  }

  export type LaporanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaporanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaporanCreateManyInput = {
    id?: string
    judul: string
    content: string
    author: string
    createdAt?: Date | string
  }

  export type LaporanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaporanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendaftarPesertaDidikCreateInput = {
    id?: string
    fullName: string
    alamat: string
    ttl: Date | string
    namaWali: string
    noHpWali: string
    createdAt?: Date | string
  }

  export type PendaftarPesertaDidikUncheckedCreateInput = {
    id?: string
    fullName: string
    alamat: string
    ttl: Date | string
    namaWali: string
    noHpWali: string
    createdAt?: Date | string
  }

  export type PendaftarPesertaDidikUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    ttl?: DateTimeFieldUpdateOperationsInput | Date | string
    namaWali?: StringFieldUpdateOperationsInput | string
    noHpWali?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendaftarPesertaDidikUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    ttl?: DateTimeFieldUpdateOperationsInput | Date | string
    namaWali?: StringFieldUpdateOperationsInput | string
    noHpWali?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendaftarPesertaDidikCreateManyInput = {
    id?: string
    fullName: string
    alamat: string
    ttl: Date | string
    namaWali: string
    noHpWali: string
    createdAt?: Date | string
  }

  export type PendaftarPesertaDidikUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    ttl?: DateTimeFieldUpdateOperationsInput | Date | string
    namaWali?: StringFieldUpdateOperationsInput | string
    noHpWali?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendaftarPesertaDidikUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    ttl?: DateTimeFieldUpdateOperationsInput | Date | string
    namaWali?: StringFieldUpdateOperationsInput | string
    noHpWali?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendaftarTenagaPendidikCreateInput = {
    id?: string
    fullName: string
    alamat: string
    noHp: string
    email: string
    pendidikan: string
    pengalaman?: string | null
    status?: $Enums.StatusPendaftaran
    createdAt?: Date | string
  }

  export type PendaftarTenagaPendidikUncheckedCreateInput = {
    id?: string
    fullName: string
    alamat: string
    noHp: string
    email: string
    pendidikan: string
    pengalaman?: string | null
    status?: $Enums.StatusPendaftaran
    createdAt?: Date | string
  }

  export type PendaftarTenagaPendidikUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    pendidikan?: StringFieldUpdateOperationsInput | string
    pengalaman?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusPendaftaranFieldUpdateOperationsInput | $Enums.StatusPendaftaran
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendaftarTenagaPendidikUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    pendidikan?: StringFieldUpdateOperationsInput | string
    pengalaman?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusPendaftaranFieldUpdateOperationsInput | $Enums.StatusPendaftaran
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendaftarTenagaPendidikCreateManyInput = {
    id?: string
    fullName: string
    alamat: string
    noHp: string
    email: string
    pendidikan: string
    pengalaman?: string | null
    status?: $Enums.StatusPendaftaran
    createdAt?: Date | string
  }

  export type PendaftarTenagaPendidikUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    pendidikan?: StringFieldUpdateOperationsInput | string
    pengalaman?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusPendaftaranFieldUpdateOperationsInput | $Enums.StatusPendaftaran
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendaftarTenagaPendidikUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    pendidikan?: StringFieldUpdateOperationsInput | string
    pengalaman?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusPendaftaranFieldUpdateOperationsInput | $Enums.StatusPendaftaran
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PesertaDidikCreateInput = {
    id?: string
    fullName: string
    alamat: string
    ttl: Date | string
    namaWali: string
    noHpWali: string
    masukDari: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PesertaDidikUncheckedCreateInput = {
    id?: string
    fullName: string
    alamat: string
    ttl: Date | string
    namaWali: string
    noHpWali: string
    masukDari: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PesertaDidikUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    ttl?: DateTimeFieldUpdateOperationsInput | Date | string
    namaWali?: StringFieldUpdateOperationsInput | string
    noHpWali?: StringFieldUpdateOperationsInput | string
    masukDari?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PesertaDidikUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    ttl?: DateTimeFieldUpdateOperationsInput | Date | string
    namaWali?: StringFieldUpdateOperationsInput | string
    noHpWali?: StringFieldUpdateOperationsInput | string
    masukDari?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PesertaDidikCreateManyInput = {
    id?: string
    fullName: string
    alamat: string
    ttl: Date | string
    namaWali: string
    noHpWali: string
    masukDari: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PesertaDidikUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    ttl?: DateTimeFieldUpdateOperationsInput | Date | string
    namaWali?: StringFieldUpdateOperationsInput | string
    noHpWali?: StringFieldUpdateOperationsInput | string
    masukDari?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PesertaDidikUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    ttl?: DateTimeFieldUpdateOperationsInput | Date | string
    namaWali?: StringFieldUpdateOperationsInput | string
    noHpWali?: StringFieldUpdateOperationsInput | string
    masukDari?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenagaPendidikCreateInput = {
    id?: string
    fullName: string
    alamat: string
    noHp: string
    email: string
    nip?: string | null
    bidang?: string | null
    masukDari: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenagaPendidikUncheckedCreateInput = {
    id?: string
    fullName: string
    alamat: string
    noHp: string
    email: string
    nip?: string | null
    bidang?: string | null
    masukDari: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenagaPendidikUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    bidang?: NullableStringFieldUpdateOperationsInput | string | null
    masukDari?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenagaPendidikUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    bidang?: NullableStringFieldUpdateOperationsInput | string | null
    masukDari?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenagaPendidikCreateManyInput = {
    id?: string
    fullName: string
    alamat: string
    noHp: string
    email: string
    nip?: string | null
    bidang?: string | null
    masukDari: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenagaPendidikUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    bidang?: NullableStringFieldUpdateOperationsInput | string | null
    masukDari?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenagaPendidikUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    bidang?: NullableStringFieldUpdateOperationsInput | string | null
    masukDari?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type KritikSaranListRelationFilter = {
    every?: KritikSaranWhereInput
    some?: KritikSaranWhereInput
    none?: KritikSaranWhereInput
  }

  export type KritikSaranOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ArtikelBeritaCountOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArtikelBeritaMaxOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArtikelBeritaMinOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type KritikSaranCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KritikSaranMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KritikSaranMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LaporanCountOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    content?: SortOrder
    author?: SortOrder
    createdAt?: SortOrder
  }

  export type LaporanMaxOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    content?: SortOrder
    author?: SortOrder
    createdAt?: SortOrder
  }

  export type LaporanMinOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    content?: SortOrder
    author?: SortOrder
    createdAt?: SortOrder
  }

  export type PendaftarPesertaDidikCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    alamat?: SortOrder
    ttl?: SortOrder
    namaWali?: SortOrder
    noHpWali?: SortOrder
    createdAt?: SortOrder
  }

  export type PendaftarPesertaDidikMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    alamat?: SortOrder
    ttl?: SortOrder
    namaWali?: SortOrder
    noHpWali?: SortOrder
    createdAt?: SortOrder
  }

  export type PendaftarPesertaDidikMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    alamat?: SortOrder
    ttl?: SortOrder
    namaWali?: SortOrder
    noHpWali?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumStatusPendaftaranFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPendaftaran | EnumStatusPendaftaranFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPendaftaran[] | ListEnumStatusPendaftaranFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPendaftaran[] | ListEnumStatusPendaftaranFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPendaftaranFilter<$PrismaModel> | $Enums.StatusPendaftaran
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PendaftarTenagaPendidikCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    alamat?: SortOrder
    noHp?: SortOrder
    email?: SortOrder
    pendidikan?: SortOrder
    pengalaman?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PendaftarTenagaPendidikMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    alamat?: SortOrder
    noHp?: SortOrder
    email?: SortOrder
    pendidikan?: SortOrder
    pengalaman?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PendaftarTenagaPendidikMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    alamat?: SortOrder
    noHp?: SortOrder
    email?: SortOrder
    pendidikan?: SortOrder
    pengalaman?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumStatusPendaftaranWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPendaftaran | EnumStatusPendaftaranFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPendaftaran[] | ListEnumStatusPendaftaranFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPendaftaran[] | ListEnumStatusPendaftaranFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPendaftaranWithAggregatesFilter<$PrismaModel> | $Enums.StatusPendaftaran
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPendaftaranFilter<$PrismaModel>
    _max?: NestedEnumStatusPendaftaranFilter<$PrismaModel>
  }

  export type PesertaDidikCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    alamat?: SortOrder
    ttl?: SortOrder
    namaWali?: SortOrder
    noHpWali?: SortOrder
    masukDari?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PesertaDidikMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    alamat?: SortOrder
    ttl?: SortOrder
    namaWali?: SortOrder
    noHpWali?: SortOrder
    masukDari?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PesertaDidikMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    alamat?: SortOrder
    ttl?: SortOrder
    namaWali?: SortOrder
    noHpWali?: SortOrder
    masukDari?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenagaPendidikCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    alamat?: SortOrder
    noHp?: SortOrder
    email?: SortOrder
    nip?: SortOrder
    bidang?: SortOrder
    masukDari?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenagaPendidikMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    alamat?: SortOrder
    noHp?: SortOrder
    email?: SortOrder
    nip?: SortOrder
    bidang?: SortOrder
    masukDari?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenagaPendidikMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    alamat?: SortOrder
    noHp?: SortOrder
    email?: SortOrder
    nip?: SortOrder
    bidang?: SortOrder
    masukDari?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KritikSaranCreateNestedManyWithoutUserInput = {
    create?: XOR<KritikSaranCreateWithoutUserInput, KritikSaranUncheckedCreateWithoutUserInput> | KritikSaranCreateWithoutUserInput[] | KritikSaranUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KritikSaranCreateOrConnectWithoutUserInput | KritikSaranCreateOrConnectWithoutUserInput[]
    createMany?: KritikSaranCreateManyUserInputEnvelope
    connect?: KritikSaranWhereUniqueInput | KritikSaranWhereUniqueInput[]
  }

  export type KritikSaranUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<KritikSaranCreateWithoutUserInput, KritikSaranUncheckedCreateWithoutUserInput> | KritikSaranCreateWithoutUserInput[] | KritikSaranUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KritikSaranCreateOrConnectWithoutUserInput | KritikSaranCreateOrConnectWithoutUserInput[]
    createMany?: KritikSaranCreateManyUserInputEnvelope
    connect?: KritikSaranWhereUniqueInput | KritikSaranWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type KritikSaranUpdateManyWithoutUserNestedInput = {
    create?: XOR<KritikSaranCreateWithoutUserInput, KritikSaranUncheckedCreateWithoutUserInput> | KritikSaranCreateWithoutUserInput[] | KritikSaranUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KritikSaranCreateOrConnectWithoutUserInput | KritikSaranCreateOrConnectWithoutUserInput[]
    upsert?: KritikSaranUpsertWithWhereUniqueWithoutUserInput | KritikSaranUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: KritikSaranCreateManyUserInputEnvelope
    set?: KritikSaranWhereUniqueInput | KritikSaranWhereUniqueInput[]
    disconnect?: KritikSaranWhereUniqueInput | KritikSaranWhereUniqueInput[]
    delete?: KritikSaranWhereUniqueInput | KritikSaranWhereUniqueInput[]
    connect?: KritikSaranWhereUniqueInput | KritikSaranWhereUniqueInput[]
    update?: KritikSaranUpdateWithWhereUniqueWithoutUserInput | KritikSaranUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: KritikSaranUpdateManyWithWhereWithoutUserInput | KritikSaranUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: KritikSaranScalarWhereInput | KritikSaranScalarWhereInput[]
  }

  export type KritikSaranUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<KritikSaranCreateWithoutUserInput, KritikSaranUncheckedCreateWithoutUserInput> | KritikSaranCreateWithoutUserInput[] | KritikSaranUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KritikSaranCreateOrConnectWithoutUserInput | KritikSaranCreateOrConnectWithoutUserInput[]
    upsert?: KritikSaranUpsertWithWhereUniqueWithoutUserInput | KritikSaranUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: KritikSaranCreateManyUserInputEnvelope
    set?: KritikSaranWhereUniqueInput | KritikSaranWhereUniqueInput[]
    disconnect?: KritikSaranWhereUniqueInput | KritikSaranWhereUniqueInput[]
    delete?: KritikSaranWhereUniqueInput | KritikSaranWhereUniqueInput[]
    connect?: KritikSaranWhereUniqueInput | KritikSaranWhereUniqueInput[]
    update?: KritikSaranUpdateWithWhereUniqueWithoutUserInput | KritikSaranUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: KritikSaranUpdateManyWithWhereWithoutUserInput | KritikSaranUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: KritikSaranScalarWhereInput | KritikSaranScalarWhereInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserCreateNestedOneWithoutKritikSaranInput = {
    create?: XOR<UserCreateWithoutKritikSaranInput, UserUncheckedCreateWithoutKritikSaranInput>
    connectOrCreate?: UserCreateOrConnectWithoutKritikSaranInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutKritikSaranNestedInput = {
    create?: XOR<UserCreateWithoutKritikSaranInput, UserUncheckedCreateWithoutKritikSaranInput>
    connectOrCreate?: UserCreateOrConnectWithoutKritikSaranInput
    upsert?: UserUpsertWithoutKritikSaranInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutKritikSaranInput, UserUpdateWithoutKritikSaranInput>, UserUncheckedUpdateWithoutKritikSaranInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumStatusPendaftaranFieldUpdateOperationsInput = {
    set?: $Enums.StatusPendaftaran
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumStatusPendaftaranFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPendaftaran | EnumStatusPendaftaranFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPendaftaran[] | ListEnumStatusPendaftaranFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPendaftaran[] | ListEnumStatusPendaftaranFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPendaftaranFilter<$PrismaModel> | $Enums.StatusPendaftaran
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumStatusPendaftaranWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPendaftaran | EnumStatusPendaftaranFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPendaftaran[] | ListEnumStatusPendaftaranFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPendaftaran[] | ListEnumStatusPendaftaranFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPendaftaranWithAggregatesFilter<$PrismaModel> | $Enums.StatusPendaftaran
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPendaftaranFilter<$PrismaModel>
    _max?: NestedEnumStatusPendaftaranFilter<$PrismaModel>
  }

  export type KritikSaranCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KritikSaranUncheckedCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KritikSaranCreateOrConnectWithoutUserInput = {
    where: KritikSaranWhereUniqueInput
    create: XOR<KritikSaranCreateWithoutUserInput, KritikSaranUncheckedCreateWithoutUserInput>
  }

  export type KritikSaranCreateManyUserInputEnvelope = {
    data: KritikSaranCreateManyUserInput | KritikSaranCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type KritikSaranUpsertWithWhereUniqueWithoutUserInput = {
    where: KritikSaranWhereUniqueInput
    update: XOR<KritikSaranUpdateWithoutUserInput, KritikSaranUncheckedUpdateWithoutUserInput>
    create: XOR<KritikSaranCreateWithoutUserInput, KritikSaranUncheckedCreateWithoutUserInput>
  }

  export type KritikSaranUpdateWithWhereUniqueWithoutUserInput = {
    where: KritikSaranWhereUniqueInput
    data: XOR<KritikSaranUpdateWithoutUserInput, KritikSaranUncheckedUpdateWithoutUserInput>
  }

  export type KritikSaranUpdateManyWithWhereWithoutUserInput = {
    where: KritikSaranScalarWhereInput
    data: XOR<KritikSaranUpdateManyMutationInput, KritikSaranUncheckedUpdateManyWithoutUserInput>
  }

  export type KritikSaranScalarWhereInput = {
    AND?: KritikSaranScalarWhereInput | KritikSaranScalarWhereInput[]
    OR?: KritikSaranScalarWhereInput[]
    NOT?: KritikSaranScalarWhereInput | KritikSaranScalarWhereInput[]
    id?: StringFilter<"KritikSaran"> | string
    userId?: StringFilter<"KritikSaran"> | string
    content?: StringFilter<"KritikSaran"> | string
    createdAt?: DateTimeFilter<"KritikSaran"> | Date | string
    updatedAt?: DateTimeFilter<"KritikSaran"> | Date | string
  }

  export type UserCreateWithoutKritikSaranInput = {
    id?: string
    email: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutKritikSaranInput = {
    id?: string
    email: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutKritikSaranInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutKritikSaranInput, UserUncheckedCreateWithoutKritikSaranInput>
  }

  export type UserUpsertWithoutKritikSaranInput = {
    update: XOR<UserUpdateWithoutKritikSaranInput, UserUncheckedUpdateWithoutKritikSaranInput>
    create: XOR<UserCreateWithoutKritikSaranInput, UserUncheckedCreateWithoutKritikSaranInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutKritikSaranInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutKritikSaranInput, UserUncheckedUpdateWithoutKritikSaranInput>
  }

  export type UserUpdateWithoutKritikSaranInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutKritikSaranInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KritikSaranCreateManyUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KritikSaranUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KritikSaranUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KritikSaranUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}