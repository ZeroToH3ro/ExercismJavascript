export class DiffieHellman {
  constructor(p, g) {
    if (!this.isPrime(p) || !this.isPrime(g)) {
      throw new Error("");
    }

    this.p = p;

    this.g = g;
  }

  isPrime(n) {
    for (let i = 2, rootn = Math.sqrt(n); i <= rootn; i++) {
      if (n % i === 0) return false;
    }

    return n > 1;
  }

  getPublicKey(pk) {
    if (pk < 2 || pk >= this.p) {
      throw new Error("");
    }

    return Math.pow(this.g, pk) % this.p;
  }

  getSecret(bPub, aPri) {
    return Math.pow(bPub, aPri) % this.p;
  }
}
