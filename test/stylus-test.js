/* global describe, it */

'use strict';

var fs = require('fs'),
    path = require('path'),
    stylus = require('stylus'),
    assert = require('assert');

var fixturePath = 'test/fixtures/';
var expectedPath = 'test/expected';

function fixture(type, name) {
    return fs.readFileSync(path.join(fixturePath, type, name + '.styl'), 'utf8');
}

function expected(type, name) {
    return fs.readFileSync(path.join(expectedPath, type, name + '.css'), 'utf8');
}

function run(type, name) {
    stylus(fixture(type, name))
        .import(path.join('lib', type))
        .render(function(err, css) {
            if (err) {
                throw err;
            }
            assert.equal(css, expected(type, name));
        });
}

describe('Stylus functions', function() {
    it('should compile headings function', function() {
        run('functions', 'headings');
    });
});

describe('Stylus mixins', function() {
    it('should compile arrow mixin', function() {
        run('mixins', 'arrow');
    });

    it('should compile clr mixins', function() {
        run('mixins', 'clr');
    });

    it('should compile font-face mixin', function() {
        run('mixins', 'font-face');
    });

    it('should compile gradient-fallback mixin', function() {
        run('mixins', 'gradient-fallback');
    });

    it('should compile IR mixin', function() {
        run('mixins', 'ir');
    });

    it('should compile link-colors mixin', function() {
        run('mixins', 'link-colors');
    });

    it('should compile opacity mixin', function() {
        run('mixins', 'opacity');
    });

    it('should compile user-content mixin', function() {
        run('mixins', 'user-content');
    });
});
