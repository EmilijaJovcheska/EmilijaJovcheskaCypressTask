import { BasePage } from "./basePage";

const LOGIN_BUTTON = ".login"
const ACCEPT_COOKIES = "#onetrust-accept-btn-handler"
const NEW_USER_BUTTON = ".newCustomer .dnnPrimaryAction"
const TITLE_BUTTON = '#Registration_Title'
const FIRST_NAME_FIELD = "#Registration_FirstName"
const LAST_NAME_FIELD = "#Registration_LastName"
const EMAIL_FIELD = "Registration_EmailAddress"
const BIRTH_DAY = "#Registration_DateOfBirthDay"
const BIRTH_MONTH = "#Registration_DateOfBirthMonth"
const BIRTH_YEAR = "#Registration_DateOfBirthYear"
const PASSWORD_FIELD = "#txtPassword"
const CONFIRM_PASSWORD_FIELD = "#Registration_ConfirmPassword"
const SUBSCRIBE_BUTTON = "#Registration_IsSubscriber"
const SUBMIT_BUTTON = "#RegistrationSubmit"
const LOGIN_EMAIL_FIELD = "#Login_EmailAddress"
const LOGIN_PASSWORD_FIELD = "#Login_Password"
const SIGN_IN_BUTTON = "#LoginButton"
const ERROR_MESSAGE= ".field-validation-error"
const FORGOT_PASSWORD = ".ForgotPasswordLinkButton"
const ENTER_EMAIL_FIELD = "#EmailRequestSubmit"
const SEND_EMAIL_BUTTON = "#EmailRequestSubmit"
const RESET_PASS_MESSAGE = ".dnnFormMessage.dnnFormSuccess"



export class LoginPage extends BasePage {

    static openRegistration() {
        this.openHomePage
        this.click(LOGIN_BUTTON)
        this.click(ACCEPT_COOKIES)
    }

    static registration(option, first_name, last_name, email, day, month, year, pass, confirmpass, subscribe, submit){
        this.click(NEW_USER_BUTTON)
        this.selectOption(TITLE_BUTTON)
        this.type(FIRST_NAME_FIELD)
        this.type(LAST_NAME_FIELD)
        this.type(EMAIL_FIELD)
        this.selectOption(BIRTH_DAY)
        this.selectOption(BIRTH_MONTH)
        this.selectOption(BIRTH_YEAR)
        this.type(PASSWORD_FIELD)
        this.type(CONFIRM_PASSWORD_FIELD)
        this.click(SUBSCRIBE_BUTTON)
        this.click(SUBMIT_BUTTON)

    }
    static login(login_email, password){
        this.click(LOGIN_BUTTON)
        this.click(ACCEPT_COOKIES)
        this.type(LOGIN_EMAIL_FIELD)
        this.type(LOGIN_PASSWORD_FIELD)
        this.click(SIGN_IN_BUTTON)
    }

    static validationError(text) {
        this.hasText(ERROR_MESSAGE)
    }
    static forgotPassword(){
        this.click(FORGOT_PASSWORD)
        this.type(ENTER_EMAIL_FIELD)
        this.click(SEND_EMAIL_BUTTON)
        this.hasText(RESET_PASS_MESSAGE)
    }
}
