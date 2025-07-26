import { NameGenerator } from './NameGenerator';
import { RandomArrayGenerator } from './RandomArrayGenerator';
import { DataArrayProvider } from './DataArrayProvider';
import { Culture } from './Culture';
import { Feature } from './Feature';

/**
 * Generator for random company names based on culture
 */
export class RandomCompanyGenerator implements NameGenerator {
    private generator: RandomArrayGenerator;
    private dataProvider: DataArrayProvider;
    private culture: Culture;
    private initialized: boolean = false;

    /**
     * Creates a new RandomCompanyGenerator
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
            const data = await this.dataProvider.getDataArray(this.culture, Feature.Company);
            this.generator = new RandomArrayGenerator(data);
            this.initialized = true;
        }
    }

    /**
     * Generates a random company name for the specified culture
     * @returns A randomly selected company name
     */
    async generateName(): Promise<string> {
        await this.ensureInitialized();
        return this.generator.generateName();
    }
}