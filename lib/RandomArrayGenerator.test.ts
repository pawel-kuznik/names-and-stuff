import { RandomArrayGenerator } from './RandomArrayGenerator';

describe('RandomArrayGenerator', () => {
    const testData = ['Name1', 'Name2', 'Name3', 'Name4', 'Name5'];

    it('should create generator with valid data array', () => {
        const generator = new RandomArrayGenerator(testData);
        expect(generator).toBeInstanceOf(RandomArrayGenerator);
    });

    it('should throw error when created with empty array', () => {
        expect(() => new RandomArrayGenerator([])).toThrow('Data array cannot be empty');
    });

    it('should throw error when created with non-array', () => {
        expect(() => new RandomArrayGenerator(null as any)).toThrow('Data array cannot be empty');
    });

    it('should generate name that exists in the provided array', () => {
        const generator = new RandomArrayGenerator(testData);
        const generatedName = generator.generateName();
        
        expect(testData).toContain(generatedName);
    });

    it('should generate names from the array over multiple calls', () => {
        const generator = new RandomArrayGenerator(testData);
        const generatedNames = new Set<string>();
        
        // Generate many names to increase likelihood of getting different ones
        for (let i = 0; i < 100; i++) {
            const name = generator.generateName();
            expect(testData).toContain(name);
            generatedNames.add(name);
        }
        
        // With 100 generations from 5 items, we should see multiple different names
        expect(generatedNames.size).toBeGreaterThan(1);
    });

    it('should not be affected by external mutations to original array', () => {
        const originalData = ['Name1', 'Name2', 'Name3'];
        const generator = new RandomArrayGenerator(originalData);
        
        // Mutate the original array
        originalData.push('Name4');
        originalData[0] = 'ModifiedName';
        
        // Generator should still work with original data
        const generatedName = generator.generateName();
        expect(['Name1', 'Name2', 'Name3']).toContain(generatedName);
        expect(generatedName).not.toBe('Name4');
        expect(generatedName).not.toBe('ModifiedName');
    });

    it('should work with single-element array', () => {
        const singleElementData = ['OnlyName'];
        const generator = new RandomArrayGenerator(singleElementData);
        
        expect(generator.generateName()).toBe('OnlyName');
        expect(generator.generateName()).toBe('OnlyName');
    });
});