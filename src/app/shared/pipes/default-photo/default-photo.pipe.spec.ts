import { DefaultPhotoPipe } from "./default-photo.pipe";

describe('DefaultPhotoPipe', () => {
  it('create an instance', () => {
    const pipe = new DefaultPhotoPipe();
    expect(pipe).toBeTruthy();
  });
});
