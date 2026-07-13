import {loginLocators} from "../locators/LoginLocators";
import { BasePage } from "./BasePage";
import { Logger } from "../logger/Logger";

export class LoginPage extends BasePage{


    async login(username:string,password:string){
        Logger.info("Entering Username");
        await this.fill(loginLocators.username, username);
        Logger.info("Entering Password");
        await this.fill(loginLocators.userPassword, password);
        Logger.info("Clicking Login Button");
        await this.click(loginLocators.submitBtn);
         Logger.success("Login Successful");
    }
}