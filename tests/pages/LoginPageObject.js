/**
 * Created by dnmunde on 04-03-2016.
 */
'use strict';
var LoginPage = function () {
    browser.ignoreSynchronization = true;
    browser.get(UdemyOptions.URL);
};

LoginPage.prototype  = Object.create({}, {
    loginLink:                          { get:function()  {return element(by.linkText('Login'));                                                   }},
    loginWindow:                        { get:function()  {return element(by.className('loginbox-v4 js-signin-box ud-angular-loaded'));            }},
    username:                           { get:function()  {return element(by.model('credentials.email'));                                          }},
    password:                           { get:function()  {return element(by.model('credentials.password'));                                       }},

    LaunchLoginWindow:  { value:function () {
        this.loginLink.click();
        browser.sleep(2000);
        expect((this.loginWindow).isDisplayed()).toBeTruthy();
    }},

    EnterCredentials:  { value:function (username, password) {
        this.username.sendKeys(username);
        this.password.clear();
        this.password.sendKeys(password);
    }},

});

module.exports = LoginPage;