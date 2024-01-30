export default class Envmgr<T extends string> {
    private _envDescriptions: Record<T, EnvDescription>;
    constructor(envDescriptions: Record<T, EnvDescription>) {
        this._envDescriptions = envDescriptions;
    }
    get(varname: T) {
        const value = process.env[varname];
        
        if (this._envDescriptions[varname] === undefined) {
            console.warn(`[ENVMGR] {${varname}} non-described env value used`);
        }
        if (this._envDescriptions[varname]?.notfound === 'error') {
            console.error(`[ENVMGR] {${varname}} required value is not set`);
            throw 'required value is not set'
        }
        if (this._envDescriptions[varname]?.notfound === 'warning') {
            console.warn(`[ENVMGR] {${varname}} desired value is not set`);
            return this._envDescriptions[varname].default;
        }

        return value || this._envDescriptions[varname].default;
    }
}

type EnvDescription = {
    notfound: 'error' | 'warning' | 'default',
    default?: string
}