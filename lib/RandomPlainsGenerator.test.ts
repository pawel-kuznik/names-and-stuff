import { RandomPlainsGenerator } from './RandomPlainsGenerator';
import { Culture } from './Culture';
import celticPlains from './data/celtic_plains';
import nordicPlains from './data/nordic_plains';
import saxonPlains from './data/saxon_plains';
import normanPlains from './data/norman_plains';

describe('RandomPlainsGenerator', () => {
    it('should create generator with valid culture', () => {
        const generator = new RandomPlainsGenerator(Culture.Celtic);
        expect(generator).toBeInstanceOf(RandomPlainsGenerator);
    });

    it('should generate name from Celtic plains data', async () => {
        const generator = new RandomPlainsGenerator(Culture.Celtic);
        const name = await generator.generateName();
        
        expect(typeof name).toBe('string');
        expect(name.length).toBeGreaterThan(0);
        
        // Import the data file directly to verify the name exists
        expect(celticPlains).toContain(name);
    });

    it('should generate name from Nordic plains data', async () => {
        const generator = new RandomPlainsGenerator(Culture.Nordic);
        const name = await generator.generateName();
        
        expect(typeof name).toBe('string');
        expect(name.length).toBeGreaterThan(0);
        
        // Import the data file directly to verify the name exists
        expect(nordicPlains).toContain(name);
    });

    it('should generate name from Saxon plains data', async () => {
        const generator = new RandomPlainsGenerator(Culture.Saxon);
        const name = await generator.generateName();
        
        expect(typeof name).toBe('string');
        expect(name.length).toBeGreaterThan(0);
        
        // Import the data file directly to verify the name exists
        expect(saxonPlains).toContain(name);
    });

    it('should generate name from Norman plains data', async () => {
        const generator = new RandomPlainsGenerator(Culture.Norman);
        const name = await generator.generateName();
        
        expect(typeof name).toBe('string');
        expect(name.length).toBeGreaterThan(0);
        
        // Import the data file directly to verify the name exists
        expect(normanPlains).toContain(name);
    });

    it('should generate different names on multiple calls', async () => {
        const generator = new RandomPlainsGenerator(Culture.Celtic);
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
            const generator = new RandomPlainsGenerator(culture);
            const name = await generator.generateName();
            
            expect(typeof name).toBe('string');
            expect(name.length).toBeGreaterThan(0);
        }
    });
});