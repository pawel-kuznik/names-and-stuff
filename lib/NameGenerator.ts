/**
 *  An interface to generate a name.
 */
export interface NameGenerator<TName = string> {
    generateName(): TName | Promise<TName>;
}
