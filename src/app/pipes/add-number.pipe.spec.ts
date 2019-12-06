import { AddNumberPipe } from './add-number.pipe';

describe('AddNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new AddNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
