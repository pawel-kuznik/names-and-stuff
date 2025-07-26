import { RandomCompanyGenerator } from './RandomCompanyGenerator';
import { Culture } from './Culture';
import celticCompanies from './data/celtic_company';
import nordicCompanies from './data/nordic_company';
import saxonCompanies from './data/saxon_company';
import normanCompanies from './data/norman_company';

describe('RandomCompanyGenerator', () => {
    it('should create generator with valid culture', () => {
        const generator = new RandomCompanyGenerator(Culture.Celtic);
        expect(generator).toBeInstanceOf(RandomCompanyGenerator);
    });

    it('should generate name from Celtic company data', async () => {
        const generator = new RandomCompanyGenerator(Culture.Celtic);
        const name = await generator.generateName();
        
        expect(typeof name).toBe('string');
        expect(name.length).toBeGreaterThan(0);
        
        // Import the data file directly to verify the name exists
        expect(celticCompanies).toContain(name);
    });

    it('should generate name from Nordic company data', async () => {
        const generator = new RandomCompanyGenerator(Culture.Nordic);
        const name = await generator.generateName();
        
        expect(typeof name).toBe('string');
        expect(name.length).toBeGreaterThan(0);
        
        // Import the data file directly to verify the name exists
        expect(nordicCompanies).toContain(name);
    });

    it('should generate name from Saxon company data', async () => {
        const generator = new RandomCompanyGenerator(Culture.Saxon);
        const name = await generator.generateName();
        
        expect(typeof name).toBe('string');
        expect(name.length).toBeGreaterThan(0);
        
        // Import the data file directly to verify the name exists
        expect(saxonCompanies).toContain(name);
    });

    it('should generate name from Norman company data', async () => {
        const generator = new RandomCompanyGenerator(Culture.Norman);
        const name = await generator.generateName();
        
        expect(typeof name).toBe('string');
        expect(name.length).toBeGreaterThan(0);
        
        // Import the data file directly to verify the name exists
        expect(normanCompanies).toContain(name);
    });

    it('should generate different names on multiple calls', async () => {
        const generator = new RandomCompanyGenerator(Culture.Celtic);
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
            const generator = new RandomCompanyGenerator(culture);
            const name = await generator.generateName();
            
            expect(typeof name).toBe('string');
            expect(name.length).toBeGreaterThan(0);
        }
    });
});