'use strict';

var LoginPage = require('../pages/LoginPageObject');
var LoginWindow = new LoginPage();

describe('Udmey Login Page', function() {
    it('should launch the login page', function() {
        LoginWindow.LaunchLoginWindow();
        expect((LoginWindow.loginWindow).isDisplayed()).toBeTruthy();
    });
});