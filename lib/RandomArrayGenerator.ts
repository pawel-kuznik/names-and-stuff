import { NameGenerator } from './NameGenerator';

/**
 * A generator that randomly selects names from a provided array
 * This class is not exposed outside the repository
 */
export class RandomArrayGenerator implements NameGenerator {
    private data: string[];

    /**
     * Creates a new RandomArrayGenerator
     * @param data The array of names to generate from
     */
    constructor(data: string[]) {
        if (!Array.isArray(data) || data.length === 0) {
            throw new Error('Data array cannot be empty');
        }
        this.data = [...data]; // Create a copy to avoid external mutations
    }

    /**
     * Generates a random name from the provided data array
     * @returns A randomly selected name from the data array
     */
    generateName(): string {
        const randomIndex = Math.floor(Math.random() * this.data.length);
        return this.data[randomIndex];
    }
}