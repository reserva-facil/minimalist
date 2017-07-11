module.exports = class CheckboxPageObject {
  constructor(component) {
    this.component = component
  }

  setProperty(property, value) {
    this.component[property] = value
  }

  setAttribute(attribute, value = '') {
    this.setAttribute(attribute, value)
  }

  removeAttribute(attribute) {
    this.removeAttribute(attribute)
  }
}
