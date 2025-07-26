import { DataArrayProvider, DataArrayNotFoundError } from './DataArrayProvider';
import { Culture } from './Culture';
import { Feature } from './Feature';

describe('DataArrayProvider', () => {
    let provider: DataArrayProvider;

    beforeEach(() => {
        provider = new DataArrayProvider();
    });

    afterEach(() => {
        provider.clearCache();
    });

    it('should provide data array for valid culture and feature combination', async () => {
        // Test with Celtic first names
        const data = await provider.getDataArray(Culture.Celtic, Feature.FirstName);
        
        expect(Array.isArray(data)).toBe(true);
        expect(data.length).toBeGreaterThan(0);
        expect(typeof data[0]).toBe('string');
    });

    it('should provide data array for all culture and feature combinations', async () => {
        const cultures = Object.values(Culture);
        const features = Object.values(Feature);

        for (const culture of cultures) {
            for (const feature of features) {
                const data = await provider.getDataArray(culture, feature);
                
                expect(Array.isArray(data)).toBe(true);
                expect(data.length).toBeGreaterThan(0);
                expect(data.every(item => typeof item === 'string')).toBe(true);
            }
        }
    });

    it('should cache data arrays', async () => {
        // First call
        const data1 = await provider.getDataArray(Culture.Celtic, Feature.FirstName);
        
        // Second call should return the same reference (cached)
        const data2 = await provider.getDataArray(Culture.Celtic, Feature.FirstName);
        
        expect(data1).toBe(data2);
    });

    it('should clear cache when clearCache is called', async () => {
        // Load data into cache
        await provider.getDataArray(Culture.Celtic, Feature.FirstName);
        
        // Clear cache
        provider.clearCache();
        
        // This should work without issues even after clearing cache
        const data = await provider.getDataArray(Culture.Celtic, Feature.FirstName);
        expect(Array.isArray(data)).toBe(true);
    });

    it('should throw DataArrayNotFoundError for invalid combinations', async () => {
        // Mock a scenario where import fails by using an invalid culture/feature combination
        // We'll test this by modifying the culture enum value temporarily
        const invalidCulture = 'invalid' as Culture;
        
        await expect(provider.getDataArray(invalidCulture, Feature.FirstName))
            .rejects
            .toThrow(DataArrayNotFoundError);
    });
});