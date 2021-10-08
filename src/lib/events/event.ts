export interface Event {
  on: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  invoke(...args: any[]): Promise<any> | void;
}
