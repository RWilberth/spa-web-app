export class Helpers {

    static testPattern(pattern, value: string): boolean{
        return new RegExp(pattern).test(value);
    }
}
