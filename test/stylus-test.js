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
        .import('vars')
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

    it('should compile clr mixin', function() {
        run('mixins', 'clr');
    });

    it('should compile display mixin', function() {
        run('mixins', 'display');
    });

    it('should compile fallback mixin', function() {
        run('mixins', 'fallback');
    });

    it('should compile font-face mixin', function() {
        run('mixins', 'font-face');
    });

    it('should compile IR mixin', function() {
        run('mixins', 'ir');
    });

    it('should compile link-colors mixin', function() {
        run('mixins', 'link-colors');
    });

    it('should compile mq mixin', function() {
        run('mixins', 'mq');
    });

    it('should compile opacity mixin', function() {
        run('mixins', 'opacity');
    });

    it('should compile positions mixin', function() {
        run('mixins', 'positions');
    });

    it('should compile rem mixin', function() {
        run('mixins', 'rem');
    });

    it('should compile underline mixin', function() {
        run('mixins', 'underline');
    });
});
