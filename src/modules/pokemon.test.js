// recentComments
/**
 * @jest-environment jsdom
*/

import { countComments } from './pokemon';

const ul = document.createElement('ul');
ul.id = 'recentComments';
document.body.appendChild(ul);

const commentTest = {
  creation_date: Date(),
  username: 'Test User',
  comment: 'Test comment',
};

describe('CRUD operations', () => {
  test('Add comment', () => {
    const lastLength = countComments;

    const commentLi = document.createElement('li');
    commentLi.textContent = `${commentTest.creation_date} ${commentTest.username}: ${commentTest.comment}`;
    ul.appendChild(commentLi);

    expect(countComments).toBe(lastLength + 1);
  });
});
