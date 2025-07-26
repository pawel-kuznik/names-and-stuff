import { RandomPersonLastNameGenerator } from './RandomPersonLastNameGenerator';
import { Culture } from './Culture';
import celticLastNames from './data/celtic_last_name';
import nordicLastNames from './data/nordic_last_name';
import saxonLastNames from './data/saxon_last_name';
import normanLastNames from './data/norman_last_name';

describe('RandomPersonLastNameGenerator', () => {
    it('should create generator with valid culture', () => {
        const generator = new RandomPersonLastNameGenerator(Culture.Celtic);
        expect(generator).toBeInstanceOf(RandomPersonLastNameGenerator);
    });

    it('should generate name from Celtic last names data', async () => {
        const generator = new RandomPersonLastNameGenerator(Culture.Celtic);
        const name = await generator.generateName();
        
        expect(typeof name).toBe('string');
        expect(name.length).toBeGreaterThan(0);
        
        // Import the data file directly to verify the name exists
        expect(celticLastNames).toContain(name);
    });

    it('should generate name from Nordic last names data', async () => {
        const generator = new RandomPersonLastNameGenerator(Culture.Nordic);
        const name = await generator.generateName();
        
        expect(typeof name).toBe('string');
        expect(name.length).toBeGreaterThan(0);
        
        // Import the data file directly to verify the name exists
        expect(nordicLastNames).toContain(name);
    });

    it('should generate name from Saxon last names data', async () => {
        const generator = new RandomPersonLastNameGenerator(Culture.Saxon);
        const name = await generator.generateName();
        
        expect(typeof name).toBe('string');
        expect(name.length).toBeGreaterThan(0);
        
        // Import the data file directly to verify the name exists
        expect(saxonLastNames).toContain(name);
    });

    it('should generate name from Norman last names data', async () => {
        const generator = new RandomPersonLastNameGenerator(Culture.Norman);
        const name = await generator.generateName();
        
        expect(typeof name).toBe('string');
        expect(name.length).toBeGreaterThan(0);
        
        // Import the data file directly to verify the name exists
        expect(normanLastNames).toContain(name);
    });

    it('should generate different names on multiple calls', async () => {
        const generator = new RandomPersonLastNameGenerator(Culture.Celtic);
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
            const generator = new RandomPersonLastNameGenerator(culture);
            const name = await generator.generateName();
            
            expect(typeof name).toBe('string');
            expect(name.length).toBeGreaterThan(0);
        }
    });
});