export interface User {
  username: string;
  password?: string;
}

export type ResponseType<K extends string, V> = Promise<{ [P in K]: V }>;

export type ResponseTypes<T> = Promise<T>;
export type CustomErrors = {
  errors: {
    errorName: string[];
  };
};
