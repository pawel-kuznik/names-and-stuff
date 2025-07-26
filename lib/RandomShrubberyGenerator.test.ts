import { RandomShrubberyGenerator } from './RandomShrubberyGenerator';
import { Culture } from './Culture';
import celticShrubbery from './data/celtic_shrubbery';
import nordicShrubbery from './data/nordic_shrubbery';
import saxonShrubbery from './data/saxon_shrubbery';
import normanShrubbery from './data/norman_shrubbery';


describe('RandomShrubberyGenerator', () => {
    it('should create generator with valid culture', () => {
        const generator = new RandomShrubberyGenerator(Culture.Celtic);
        expect(generator).toBeInstanceOf(RandomShrubberyGenerator);
    });

    it('should generate name from Celtic shrubbery data', async () => {
        const generator = new RandomShrubberyGenerator(Culture.Celtic);
        const name = await generator.generateName();
        
        expect(typeof name).toBe('string');
        expect(name.length).toBeGreaterThan(0);
        
        // Import the data file directly to verify the name exists
        expect(celticShrubbery).toContain(name);
    });

    it('should generate name from Nordic shrubbery data', async () => {
        const generator = new RandomShrubberyGenerator(Culture.Nordic);
        const name = await generator.generateName();
        
        expect(typeof name).toBe('string');
        expect(name.length).toBeGreaterThan(0);
        
        // Import the data file directly to verify the name exists
        expect(nordicShrubbery).toContain(name);
    });

    it('should generate name from Saxon shrubbery data', async () => {
        const generator = new RandomShrubberyGenerator(Culture.Saxon);
        const name = await generator.generateName();
        
        expect(typeof name).toBe('string');
        expect(name.length).toBeGreaterThan(0);
        
        // Import the data file directly to verify the name exists
        expect(saxonShrubbery).toContain(name);
    });

    it('should generate name from Norman shrubbery data', async () => {
        const generator = new RandomShrubberyGenerator(Culture.Norman);
        const name = await generator.generateName();
        
        expect(typeof name).toBe('string');
        expect(name.length).toBeGreaterThan(0);
        
        // Import the data file directly to verify the name exists
        expect(normanShrubbery).toContain(name);
    });

    it('should generate different names on multiple calls', async () => {
        const generator = new RandomShrubberyGenerator(Culture.Celtic);
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
            const generator = new RandomShrubberyGenerator(culture);
            const name = await generator.generateName();
            
            expect(typeof name).toBe('string');
            expect(name.length).toBeGreaterThan(0);
        }
    });
});