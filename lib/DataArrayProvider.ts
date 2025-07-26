import { Culture } from './Culture';
import { Feature } from './Feature';

/**
 * Exception thrown when a data array cannot be provided for a given culture and feature combination
 */
export class DataArrayNotFoundError extends Error {
    constructor(culture: Culture, feature: Feature) {
        super(`Data array not found for culture: ${culture}, feature: ${feature}`);
        this.name = 'DataArrayNotFoundError';
    }
}

/**
 * Provider class for accessing data arrays based on culture and feature combinations
 * This class is not exposed outside the repository
 */
export class DataArrayProvider {
    private dataCache: Map<string, string[]> = new Map();

    /**
     * Provides a data array for the given culture and feature combination
     * @param culture The culture to get data for
     * @param feature The feature to get data for
     * @returns An array of strings containing the data
     * @throws DataArrayNotFoundError if the data array cannot be provided
     */
    async getDataArray(culture: Culture, feature: Feature): Promise<string[]> {
        const key = `${culture}_${feature}`;
        
        // Check cache first
        if (this.dataCache.has(key)) {
            return this.dataCache.get(key)!;
        }

        try {
            // Dynamically import the data file (try both .js and .ts extensions)
            let dataModule;
            try {
                dataModule = await import(`./data/${key}.js`);
            } catch {
                dataModule = await import(`./data/${key}`);
            }
            
            const data = dataModule.default;
            
            if (!Array.isArray(data)) {
                throw new DataArrayNotFoundError(culture, feature);
            }
            
            // Cache the data
            this.dataCache.set(key, data);
            return data;
        } catch (error) {
            throw new DataArrayNotFoundError(culture, feature);
        }
    }

    /**
     * Clears the internal cache
     */
    clearCache(): void {
        this.dataCache.clear();
    }
}