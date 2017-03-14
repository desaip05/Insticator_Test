'use strict';

angular.module('insticator.version', [
  'insticator.version.interpolate-filter',
  'insticator.version.version-directive'
])

.value('version', '0.1');
