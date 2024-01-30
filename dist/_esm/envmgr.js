export default class Envmgr {
    constructor(envDescriptions) {
        this._envDescriptions = envDescriptions;
    }
    get(varname) {
        var _a, _b;
        const value = process.env[varname];
        if (this._envDescriptions[varname] === undefined) {
            console.warn(`[ENVMGR] {${varname}} non-described env value used`);
        }
        if (((_a = this._envDescriptions[varname]) === null || _a === void 0 ? void 0 : _a.notfound) === 'error') {
            console.error(`[ENVMGR] {${varname}} required value is not set`);
            throw 'required value is not set';
        }
        if (((_b = this._envDescriptions[varname]) === null || _b === void 0 ? void 0 : _b.notfound) === 'warning') {
            console.warn(`[ENVMGR] {${varname}} desired value is not set`);
            return this._envDescriptions[varname].default;
        }
        return value || this._envDescriptions[varname].default;
    }
}
