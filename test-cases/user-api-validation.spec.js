const { test, expect } = require('@playwright/test');

test.describe('REST API Validation Suite', () => {

  test('GET /users/1 returns 200 OK and valid user payload', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users/1');
    
    expect(response.status()).toBe(200);
    const body = await response.json();

    expect(body).toHaveProperty('id', 1);
    expect(body).toHaveProperty('email');
    expect(body.email).toContain('@');
  });

  test('POST /posts creates resource and returns 201 Created', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
      data: {
        title: 'QA Automated API Check',
        body: 'Validating POST payload integrity',
        userId: 1
      }
    });

    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body.title).toBe('QA Automated API Check');
  });

  test('GET non-existent endpoint returns 404 Not Found', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users/99999');
    expect(response.status()).toBe(404);
  });
});
