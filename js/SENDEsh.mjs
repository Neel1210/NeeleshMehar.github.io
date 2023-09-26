class Cred{
    #userName = ${{secrets.USERNAME}};
    #password = "152DF8D9E23A5DDAB7C6911ADF48ACF1C85E";

    #getUserName() {
        return this.#getUserName;
    }

    _getUserName() {
        return this.#getUserName();
    }

    #getPassword() {
        return this.#getPassword;
    }

    _getPassword() {
        return this.#getPassword();
    }
}
export default Cred;

