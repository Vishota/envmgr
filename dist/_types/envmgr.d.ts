export default class Envmgr<T extends string> {
    private _envDescriptions;
    constructor(envDescriptions: Record<T, EnvDescription<any>>);
    get(varname: T): any;
}
type EnvDescription<T extends string | undefined> = {
    notfound?: 'error' | 'warning' | 'default';
    default: T;
};
export {};
