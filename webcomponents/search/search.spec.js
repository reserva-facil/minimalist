/* global describe, it, beforeEach */
const {expect} = require('chai')
  .use(require('chai-dom'))
  .use(require('chai-style'))
  // .use(require('chai-spies'))

let search // page object defined in method setPageObject
console.log(search)
let component

describe('mn-search (webcomponent)', () => {
  beforeEach(cleanView)
  beforeEach(createComponent)
  beforeEach(setPageObject)

  describe('instance', () => {
    it('should work with a constructor', () => {
      const MnSearch = window.customElements.get('mn-search')
      component = new MnSearch()
      expect(component).to.be.instanceof(MnSearch)
    })

    it('should work with document.createElement()', () => {
      const MnSearch = window.customElements.get('mn-search')
      component = document.createElement('mn-search')
      expect(component).to.be.instanceof(MnSearch)
    })
  })

  describe('component', () => {
    it('should have the .mn-search class', () => {
      expect(component).to.have.class('mn-search')
    })

    it('should contain a input property', () => {
      expect(component).to.have.property('input')
    })

    it('should contain a input child', () => {
      expect(component.querySelectorAll('input')).to.have.length(1)
    })

    it('should contain a menu property', () => {
      expect(component).to.have.property('menu')
    })

    it('should contain a menu child', () => {
      expect(component.querySelectorAll('menu')).to.have.length(1)
    })
  })

  describe('input', () => {
    it('should have autocomplete off by default', () => {
      expect(component.input).to.have.attribute('autocomplete', 'off')
    })

    it('should have spellcheck off by default', () => {
      expect(component.input).to.have.attribute('spellcheck', 'off')
    })
  })

  describe('method fetch', () => {
    it('should be a function', () => {
      expect(component.fetch).to.be.a('function')
    })
  })
})

function cleanView() {
  const form = document.querySelector('form')

  if (form) {
    form.parentNode.removeChild(form)
  }
}

function createComponent() {
  const form = document.createElement('form')
  form.setAttribute('name', 'formName')
  form.setAttribute('id', 'formID')

  component = document.createElement('mn-search')

  form.appendChild(component)
  document.body.appendChild(form)
}

function setPageObject() {
  const PageObject = require('./search.po.js')
  search = new PageObject(component)
}
