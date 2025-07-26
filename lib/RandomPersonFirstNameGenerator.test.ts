import { RandomPersonFirstNameGenerator } from './RandomPersonFirstNameGenerator';
import { Culture } from './Culture';
import celticFirstNames from './data/celtic_first_name';
import nordicFirstNames from './data/nordic_first_name';
import saxonFirstNames from './data/saxon_first_name';
import normanFirstNames from './data/norman_first_name';

describe('RandomPersonFirstNameGenerator', () => {
    it('should create generator with valid culture', () => {
        const generator = new RandomPersonFirstNameGenerator(Culture.Celtic);
        expect(generator).toBeInstanceOf(RandomPersonFirstNameGenerator);
    });

    it('should generate name from Celtic first names data', async () => {
        const generator = new RandomPersonFirstNameGenerator(Culture.Celtic);
        const name = await generator.generateName();
        
        expect(typeof name).toBe('string');
        expect(name.length).toBeGreaterThan(0);
        
        // Import the data file directly to verify the name exists
        expect(celticFirstNames).toContain(name);
    });

    it('should generate name from Nordic first names data', async () => {
        const generator = new RandomPersonFirstNameGenerator(Culture.Nordic);
        const name = await generator.generateName();
        
        expect(typeof name).toBe('string');
        expect(name.length).toBeGreaterThan(0);
        
        // Import the data file directly to verify the name exists
        expect(nordicFirstNames).toContain(name);
    });

    it('should generate name from Saxon first names data', async () => {
        const generator = new RandomPersonFirstNameGenerator(Culture.Saxon);
        const name = await generator.generateName();
        
        expect(typeof name).toBe('string');
        expect(name.length).toBeGreaterThan(0);
        
        // Import the data file directly to verify the name exists
        expect(saxonFirstNames).toContain(name);
    });

    it('should generate name from Norman first names data', async () => {
        const generator = new RandomPersonFirstNameGenerator(Culture.Norman);
        const name = await generator.generateName();
        
        expect(typeof name).toBe('string');
        expect(name.length).toBeGreaterThan(0);
        
        // Import the data file directly to verify the name exists
        expect(normanFirstNames).toContain(name);
    });

    it('should generate different names on multiple calls', async () => {
        const generator = new RandomPersonFirstNameGenerator(Culture.Celtic);
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
            const generator = new RandomPersonFirstNameGenerator(culture);
            const name = await generator.generateName();
            
            expect(typeof name).toBe('string');
            expect(name.length).toBeGreaterThan(0);
        }
    });
});