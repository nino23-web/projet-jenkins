const request = require('supertest');
const app = require('./app') ; 

// Mock the pool for database interaction
const pool = require('./db');
jest.mock('./db'); // Automatically mock all methods

describe('Users EndPoints', () => {
    beforeAll(() => {
        pool.query.mockImplementation((query, values) => {
            if (query.includes('SELECT * FROM users')) {
                return { rows: [{ id: 1, name: 'FakeName', email: 'fakeName@fakegmail.com' }] };
            } 
        });
    });

    
    afterEach(() => {
        jest.clearAllMocks(); // Clear mocks after each test
    });

    test('GET /users - should retrieve all users', async () => {
        const res = await request(app).get('/users');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ id: 1, name: 'FakeName', email: 'fakeName@fakegmail.com' }]);
    });

});