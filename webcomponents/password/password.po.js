const InputPageObject = require('../input/input.po.js')

module.exports = class PasswordPageObject extends InputPageObject {
  constructor(component) {
    super(component)
    return this
  }

  clickInButtonToShowPassword() {
    this.component.button.click()
  }

  clickInButtonToHidePassword() {
    this.component.button.click()
  }
}
