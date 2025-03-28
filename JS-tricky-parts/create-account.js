function createAccount(pin, amount) {
    let currentPin = pin;
    let balance = amount || 0;
    
    //return obj with 4 methods 
    const account = {
        checkBalance : function checkBalance(p){
            //if p === pin
            if (p === currentPin){
                return `$${balance}`
            }else{
                return 'Invalid PIN.'
            }
        },
        deposit : function deposit(p, num){
            if (p !== currentPin){
                return 'Invalid PIN.';
            } else {
                balance = (balance + num);
                return `Succesfully deposited $${num}. Current balance: $${balance}.`
            }
        },
        withdraw : function withdraw(p, num){
                if (p !== currentPin){
                    return 'Invalid PIN.';
                } else if (balance < num) {
                        return "Withdrawal amount exceeds account balance. Transaction cancelled."
                } else {
                    balance = (balance - num);
                    return `Succesfully withdrew $${num}. Current balance: $${balance}.`
                }
        },
        changePin : function changePin(p,newPin){
            if (p !== currentPin){
                return 'Invalid PIN.';
            } else {
                currentPin = newPin;
                return "PIN successfully changed!"
            }
        },
    }
    return account;
}

module.exports = { createAccount };
