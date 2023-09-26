class Cred{
    #userName = process.env.USERNAME;
    #password = process.env.PASSWORD;

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

