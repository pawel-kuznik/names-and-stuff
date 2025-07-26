import { RandomSettlementGenerator } from './RandomSettlementGenerator';
import { Culture } from './Culture';
import celticSettlements from './data/celtic_settlement';
import nordicSettlements from './data/nordic_settlement';
import saxonSettlements from './data/saxon_settlement';
import normanSettlements from './data/norman_settlement';

describe('RandomSettlementGenerator', () => {
    it('should create generator with valid culture', () => {
        const generator = new RandomSettlementGenerator(Culture.Celtic);
        expect(generator).toBeInstanceOf(RandomSettlementGenerator);
    });

    it('should generate name from Celtic settlement data', async () => {
        const generator = new RandomSettlementGenerator(Culture.Celtic);
        const name = await generator.generateName();
        
        expect(typeof name).toBe('string');
        expect(name.length).toBeGreaterThan(0);
        
        // Import the data file directly to verify the name exists
        expect(celticSettlements).toContain(name);
    });

    it('should generate name from Nordic settlement data', async () => {
        const generator = new RandomSettlementGenerator(Culture.Nordic);
        const name = await generator.generateName();
        
        expect(typeof name).toBe('string');
        expect(name.length).toBeGreaterThan(0);
        
        // Import the data file directly to verify the name exists
        expect(nordicSettlements).toContain(name);
    });

    it('should generate name from Saxon settlement data', async () => {
        const generator = new RandomSettlementGenerator(Culture.Saxon);
        const name = await generator.generateName();
        
        expect(typeof name).toBe('string');
        expect(name.length).toBeGreaterThan(0);
        
        // Import the data file directly to verify the name exists
        expect(saxonSettlements).toContain(name);
    });

    it('should generate name from Norman settlement data', async () => {
        const generator = new RandomSettlementGenerator(Culture.Norman);
        const name = await generator.generateName();
        
        expect(typeof name).toBe('string');
        expect(name.length).toBeGreaterThan(0);
        
        // Import the data file directly to verify the name exists
        expect(normanSettlements).toContain(name);
    });

    it('should generate different names on multiple calls', async () => {
        const generator = new RandomSettlementGenerator(Culture.Celtic);
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
            const generator = new RandomSettlementGenerator(culture);
            const name = await generator.generateName();
            
            expect(typeof name).toBe('string');
            expect(name.length).toBeGreaterThan(0);
        }
    });
});