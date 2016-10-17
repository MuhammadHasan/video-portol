'use strict';

describe('Filter: videoEmbedUrl', function () {

  // load the filter's module
  beforeEach(module('clientApp'));

  // initialize a new instance of the filter before each test
  var videoEmbedUrl;
  beforeEach(inject(function ($filter) {
    videoEmbedUrl = $filter('videoEmbedUrl');
  }));

  it('should return the input prefixed with "videoEmbedUrl filter:"', function () {
    var text = 'angularjs';
    expect(videoEmbedUrl(text)).toBe('videoEmbedUrl filter: ' + text);
  });

});
