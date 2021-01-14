import { likePosts, commentPosts } from './data.js';

describe('Verificar se likePosts é uma função', () => {
  it('likePosts é uma função', () => {
    expect(typeof likePosts).toBe('function');
  });
});

describe('Verificar se commentPosts é uma função', () => {
  it('commentPosts é uma função', () => {
    expect(typeof commentPosts).toBe('function');
  });
});
