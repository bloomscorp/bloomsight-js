import {SessionService} from "./service/session";
import {UserService} from "./service/user";
import {PlatformService} from "./service/platform";

const platform: PlatformService = new PlatformService();
const session: SessionService = new SessionService();
const user: UserService = new UserService();

platform.initPlatform();
session.initSession();
user.initUser();

