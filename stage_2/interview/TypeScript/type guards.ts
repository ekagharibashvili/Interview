// Type Guards allow you to narrow down the type of a variable within a conditional block.

//typeof
// lets take a look at the following example: 
type alphanumeric = string | number;

function add(a: alphanumeric, b: alphanumeric) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }

    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }

    throw new Error('Invalid arguments. Both arguments must be either numbers or strings.');
}

// instanceof 
// Similar to the typeof operator, TypeScript is also aware of the usage of the instanceof operator.
// For examle: 
class Customer {
    isCreditAllowed(): boolean {
        // ...
        return true;
    }
}

class Supplier {
    isInShortList(): boolean {
        // ...
        return true;
    }
}

type BusinessPartner = Customer | Supplier;

function signContract(partner: BusinessPartner): string {
    let message: string;
    if (partner instanceof Customer) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    }

    if (partner instanceof Supplier) {
        message = partner.isInShortList() ? 'Sign a new contract the supplier' : 'Need to evaluate further';
    }

    return message;
}


// in
// The in operator carries a safe check for the existance of a property on an object.
// You can also use it as a type guard. For example:
function ssignContract(partner: BusinessPartner): string {
    let message: string;
    if ('isCreditAllowed' in partner) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    } else {
        // must be Supplier
        message = partner.isInShortList() ? 'Sign a new contract the supplier ' : 'Need to evaluate further';
    }
    return message;
}

// User-defined Type Guards.
// User-defined type guards allow you to define a type guard or help TypeScript infer a type when you use a function.
// A user-defined type guard function is a function that simply returns arg is aType. For example:

function isCustomer(partner: any): partner is Customer {
    return partner instanceof Customer;
}
// In this example, the isCustomer() is a user-defined type guard function. Now you can use it in as follows:
function slignContract(partner: BusinessPartner): string {
    let message: string;
    if (isCustomer(partner)) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    } else {
        message = partner.isInShortList() ? 'Sign a new contract with the supplier' : 'Need to evaluate further';
    }

    return message;
}
