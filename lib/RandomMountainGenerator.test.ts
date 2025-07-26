import { RandomMountainGenerator } from './RandomMountainGenerator';
import { Culture } from './Culture';
import celticMountains from './data/celtic_mountain';
import nordicMountains from './data/nordic_mountain';
import saxonMountains from './data/saxon_mountain';
import normanMountains from './data/norman_mountain';

describe('RandomMountainGenerator', () => {
    it('should create generator with valid culture', () => {
        const generator = new RandomMountainGenerator(Culture.Celtic);
        expect(generator).toBeInstanceOf(RandomMountainGenerator);
    });

    it('should generate name from Celtic mountain data', async () => {
        const generator = new RandomMountainGenerator(Culture.Celtic);
        const name = await generator.generateName();
        
        expect(typeof name).toBe('string');
        expect(name.length).toBeGreaterThan(0);
        
        // Import the data file directly to verify the name exists
        expect(celticMountains).toContain(name);
    });

    it('should generate name from Nordic mountain data', async () => {
        const generator = new RandomMountainGenerator(Culture.Nordic);
        const name = await generator.generateName();
        
        expect(typeof name).toBe('string');
        expect(name.length).toBeGreaterThan(0);
        
        // Import the data file directly to verify the name exists
        expect(nordicMountains).toContain(name);
    });

    it('should generate name from Saxon mountain data', async () => {
        const generator = new RandomMountainGenerator(Culture.Saxon);
        const name = await generator.generateName();
        
        expect(typeof name).toBe('string');
        expect(name.length).toBeGreaterThan(0);
        
        // Import the data file directly to verify the name exists
        expect(saxonMountains).toContain(name);
    });

    it('should generate name from Norman mountain data', async () => {
        const generator = new RandomMountainGenerator(Culture.Norman);
        const name = await generator.generateName();
        
        expect(typeof name).toBe('string');
        expect(name.length).toBeGreaterThan(0);
        
        // Import the data file directly to verify the name exists
        expect(normanMountains).toContain(name);
    });

    it('should generate different names on multiple calls', async () => {
        const generator = new RandomMountainGenerator(Culture.Celtic);
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
            const generator = new RandomMountainGenerator(culture);
            const name = await generator.generateName();
            
            expect(typeof name).toBe('string');
            expect(name.length).toBeGreaterThan(0);
        }
    });
});