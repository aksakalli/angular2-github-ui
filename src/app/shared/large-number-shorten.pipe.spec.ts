/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { LargeNumberShortenPipe } from './large-number-shorten.pipe';

describe('LargeNumberShortenPipe', () => {

  let pipe = new LargeNumberShortenPipe();

  it('transforms "12543" to "12.5k" with default digit parameter', () => {
    expect(pipe.transform(12543)).toBe('12.5k');
  });

  it('transforms "12543" to "12.54k" with digit parameter is 2', () => {
    expect(pipe.transform(12543,2)).toBe('12.54k');
  });

  it('transforms "-12567" to "-13k" with digit parameter is zero', () => {
    expect(pipe.transform(-12567, 0)).toBe('-13k');
  });

  it('does not transform "651" (only to string)', () => {
    expect(pipe.transform(651)).toBe('651');
  });

  it('transforms "0.12345" to "0.12345"', () => {
    expect(pipe.transform(0.12345)).toBe('0.12345');
  });

});

