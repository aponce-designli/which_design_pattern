
interface PaymentStrategy {
    pay(): string;
}

class ThirdPartyPayment implements PaymentStrategy {
    pay(): string {
        return "Payment made with ThirdPartyPayment";
    }
}

class AlternativePayment implements PaymentStrategy {
    pay(): string {
        return "Payment made with AlternativePayment";
    }
}

class Payments {
    private paymentStrategy: PaymentStrategy;

    constructor(paymentStrategy: PaymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }

    setPaymentStrategy(paymentStrategy: PaymentStrategy): void {
        this.paymentStrategy = paymentStrategy;
    }

    makePayment(): string {
        return this.paymentStrategy.pay();
    }
}

const thirdPartyPayment = new ThirdPartyPayment();
const alternativePayment = new AlternativePayment();

const paymentProcessor = new Payments(thirdPartyPayment);
console.log(paymentProcessor.makePayment());


paymentProcessor.setPaymentStrategy(alternativePayment);
console.log(paymentProcessor.makePayment());
