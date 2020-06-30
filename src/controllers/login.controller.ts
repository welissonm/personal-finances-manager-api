import User from '@models/users';

export class LoginController {
    private user?: User;

    constructor() {
      this.user = undefined;
    }
}
