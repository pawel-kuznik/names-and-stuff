import { NameGenerator } from './NameGenerator';
import { RandomArrayGenerator } from './RandomArrayGenerator';
import { DataArrayProvider } from './DataArrayProvider';
import { Culture } from './Culture';
import { Feature } from './Feature';

/**
 * Generator for random person last names based on culture
 */
export class RandomPersonLastNameGenerator implements NameGenerator {
    private generator: RandomArrayGenerator;
    private dataProvider: DataArrayProvider;
    private culture: Culture;
    private initialized: boolean = false;

    /**
     * Creates a new RandomPersonLastNameGenerator
     * @param culture The culture to generate names for
     */
    constructor(culture: Culture) {
        this.culture = culture;
        this.dataProvider = new DataArrayProvider();
        this.generator = new RandomArrayGenerator(['temp']); // Temporary until initialized
    }

    /**
     * Initializes the generator with data from the data provider
     */
    private async ensureInitialized(): Promise<void> {
        if (!this.initialized) {
            const data = await this.dataProvider.getDataArray(this.culture, Feature.LastName);
            this.generator = new RandomArrayGenerator(data);
            this.initialized = true;
        }
    }

    /**
     * Generates a random last name for the specified culture
     * @returns A randomly selected last name
     */
    async generateName(): Promise<string> {
        await this.ensureInitialized();
        return this.generator.generateName();
    }
}