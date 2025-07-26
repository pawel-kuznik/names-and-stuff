import { RandomHamletGenerator } from './RandomHamletGenerator';
import { Culture } from './Culture';
import celticHamlets from './data/celtic_hamlet';
import nordicHamlets from './data/nordic_hamlet';
import saxonHamlets from './data/saxon_hamlet';
import normanHamlets from './data/norman_hamlet';

describe('RandomHamletGenerator', () => {
    it('should create generator with valid culture', () => {
        const generator = new RandomHamletGenerator(Culture.Celtic);
        expect(generator).toBeInstanceOf(RandomHamletGenerator);
    });

    it('should generate name from Celtic hamlet data', async () => {
        const generator = new RandomHamletGenerator(Culture.Celtic);
        const name = await generator.generateName();
        
        expect(typeof name).toBe('string');
        expect(name.length).toBeGreaterThan(0);
        
        // Import the data file directly to verify the name exists
        expect(celticHamlets).toContain(name);
    });

    it('should generate name from Nordic hamlet data', async () => {
        const generator = new RandomHamletGenerator(Culture.Nordic);
        const name = await generator.generateName();
        
        expect(typeof name).toBe('string');
        expect(name.length).toBeGreaterThan(0);
        
        // Import the data file directly to verify the name exists
        expect(nordicHamlets).toContain(name);
    });

    it('should generate name from Saxon hamlet data', async () => {
        const generator = new RandomHamletGenerator(Culture.Saxon);
        const name = await generator.generateName();
        
        expect(typeof name).toBe('string');
        expect(name.length).toBeGreaterThan(0);
        
        // Import the data file directly to verify the name exists
        expect(saxonHamlets).toContain(name);
    });

    it('should generate name from Norman hamlet data', async () => {
        const generator = new RandomHamletGenerator(Culture.Norman);
        const name = await generator.generateName();
        
        expect(typeof name).toBe('string');
        expect(name.length).toBeGreaterThan(0);
        
        // Import the data file directly to verify the name exists
        expect(normanHamlets).toContain(name);
    });

    it('should generate different names on multiple calls', async () => {
        const generator = new RandomHamletGenerator(Culture.Celtic);
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
            const generator = new RandomHamletGenerator(culture);
            const name = await generator.generateName();
            
            expect(typeof name).toBe('string');
            expect(name.length).toBeGreaterThan(0);
        }
    });
});