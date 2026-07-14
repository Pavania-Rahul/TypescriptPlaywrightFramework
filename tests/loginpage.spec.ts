import { test } from '../fixtures/baseFixture';
import { BASE_URL, PASSWORD, USERNAME } from '../utils/envConfig';
import { Logger } from '../logger/Logger';


test('Login Test', async ({ loginPage }) => {
   Logger.info("Entering URL");
   await loginPage.navigate(BASE_URL);
   Logger.info("Enter username and password");
   await loginPage.login(USERNAME, PASSWORD);
   Logger.success("Login success");
});