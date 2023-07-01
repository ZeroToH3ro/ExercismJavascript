//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export class BankAccount {
  constructor() {
    this.accountState = false;
    this.accountBalance = null;
  }

  open() {
    if(this.accountState === false){
      this.accountState = true;
      this.accountBalance = 0;
    } else {
      throw new ValueError();
    }
  }

  close() {
    if(this.accountState === true){
      this.accountState = false;
      this.accountBalance = null;
    } else {
      throw new ValueError();
    }
  }

  deposit(val) {
    if(val > 0){
      if(this.accountState === true && this.accountBalance >= 0){
        this.accountBalance += val;
      } else {
        throw new ValueError();
      }
    } else {
      throw new ValueError();
    }

  }

  withdraw(val) {
    if(val > 0){
      if(this.accountState === true && this.accountBalance >= 0){
        this.accountBalance -= val;
        if(this.accountBalance < 0){
          throw new ValueError();
        }
      } else {
        throw new ValueError();
      }
    } else {
      throw new ValueError();
    }
  }

  get balance() {
    if(this.accountState === true && this.accountBalance !== null){
      return this.accountBalance;
    } else {
      throw new ValueError();
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
