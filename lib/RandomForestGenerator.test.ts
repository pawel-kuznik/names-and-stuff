import { RandomForestGenerator } from './RandomForestGenerator';
import { Culture } from './Culture';
import celticForests from './data/celtic_forest';
import nordicForests from './data/nordic_forest';
import saxonForests from './data/saxon_forest';
import normanForests from './data/norman_forest';

describe('RandomForestGenerator', () => {
    it('should create generator with valid culture', () => {
        const generator = new RandomForestGenerator(Culture.Celtic);
        expect(generator).toBeInstanceOf(RandomForestGenerator);
    });

    it('should generate name from Celtic forest data', async () => {
        const generator = new RandomForestGenerator(Culture.Celtic);
        const name = await generator.generateName();
        
        expect(typeof name).toBe('string');
        expect(name.length).toBeGreaterThan(0);
        
        // Import the data file directly to verify the name exists
        expect(celticForests).toContain(name);
    });

    it('should generate name from Nordic forest data', async () => {
        const generator = new RandomForestGenerator(Culture.Nordic);
        const name = await generator.generateName();
        
        expect(typeof name).toBe('string');
        expect(name.length).toBeGreaterThan(0);
        
        // Import the data file directly to verify the name exists
        expect(nordicForests).toContain(name);
    });

    it('should generate name from Saxon forest data', async () => {
        const generator = new RandomForestGenerator(Culture.Saxon);
        const name = await generator.generateName();
        
        expect(typeof name).toBe('string');
        expect(name.length).toBeGreaterThan(0);
        
        // Import the data file directly to verify the name exists
        expect(saxonForests).toContain(name);
    });

    it('should generate name from Norman forest data', async () => {
        const generator = new RandomForestGenerator(Culture.Norman);
        const name = await generator.generateName();
        
        expect(typeof name).toBe('string');
        expect(name.length).toBeGreaterThan(0);
        
        // Import the data file directly to verify the name exists
        expect(normanForests).toContain(name);
    });

    it('should generate different names on multiple calls', async () => {
        const generator = new RandomForestGenerator(Culture.Celtic);
        const names = new Set<string>();
        
        // Generate multiple names
        for (let i = 0; i < 10; i++) {
            const name = await generator.generateName();
            names.add(name);
        }
        
        // With 10 generations from 500 names, we should likely get multiple different names
        expect(names.size).toBeGreaterThan(1);
    });

    it('should work with all cultures', async () => {
        const cultures = Object.values(Culture);
        
        for (const culture of cultures) {
            const generator = new RandomForestGenerator(culture);
            const name = await generator.generateName();
            
            expect(typeof name).toBe('string');
            expect(name.length).toBeGreaterThan(0);
        }
    });
});