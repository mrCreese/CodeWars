function validatePIN(pin) {
    if (pin) {
        let pinLength = pin.match(/[0-9]/g).length;
        return pin.length === pinLength && (pinLength === 4 || pinLength === 6);
    } else return false;
}

module.exports = validatePIN;
