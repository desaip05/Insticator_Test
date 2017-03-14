'use strict';

describe('insticator.version module', function() {
  beforeEach(module('insticator.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
