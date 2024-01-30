export default class Envmgr<T extends string> {
    private _envDescriptions;
    constructor(envDescriptions: Record<T, EnvDescription>);
    get(varname: T): string | undefined;
}
type EnvDescription = {
    notfound: 'error' | 'warning' | 'default';
    default?: string;
};
export {};
