export class Logger {
  selfPrefix: string;
  logPrefix: string;
  logArray: any[];

  constructor(name: string) {
    this.selfPrefix = "[Logger]: ";
    this.logPrefix = `[${name}]: `;
    this.logArray = [];
  }

  get loggedErrors() {
    const result = this.logArray;
    this.logArray = [];

    return result;
  }

  addError(
    description: object | string | number,
    logInBuffer: boolean = true,
    logInConsole: boolean = true
  ) {
    if (!description) {
      return new Error(
        this.selfPrefix + "can't add error in logger without description"
      );
    }

    if (logInBuffer) {
      this.logArray.push({
        date: Date.now(),
        data: description,
        type: this.logPrefix,
      });
    }

    if (logInConsole) {
      console.error(this.logPrefix + description);
    }

    return true;
  }
}
