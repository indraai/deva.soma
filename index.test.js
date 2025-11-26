"use strict";
// Copyright ©2025 Quinn A Michaels; All rights reserved. 
// Legal Signature Required For Lawful Use.
// Distributed under VLA:53302689355641757463 LICENSE.md
// Wednesday, November 26, 2025 - 10:01:29 AM

// Soma Deva

const {expect} = require('chai')
const SomaDeva = require('./index.js');

describe(SomaDeva.me.name, () => {
  beforeEach(() => {
    return SomaDeva.init()
  });
  it('Check the DEVA Object', () => {
    expect(SomaDeva).to.be.an('object');
    expect(SomaDeva).to.have.property('agent');
    expect(SomaDeva).to.have.property('vars');
    expect(SomaDeva).to.have.property('listeners');
    expect(SomaDeva).to.have.property('methods');
    expect(SomaDeva).to.have.property('modules');
  });
})
