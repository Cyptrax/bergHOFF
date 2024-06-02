class punten {
  punten = 0;
  minPuntenCount = 0;
  plusPuntenCount = 0;
  Constructor() {
    this.punten = 0;
    this.minPuntenCount = 0;
    this.plusPuntenCount = 0;
  }

  plusPunten(punt) {
    // console.log(punt);
    this.punten += punt;
    this.plusPuntenCount += punt;
  }

  minPunten(punt) {
    // console.log(punt);
    this.punten -= punt;
    this.minPuntenCount += punt;
  }

  resetPunten() {
    this.punten = 0;
  }

  showPunten() {
    return this.punten;
  }

  showPlusPunten() {
    return this.plusPuntenCount;
  }
  showMinPunten() {
    return this.minPuntenCount;
  }
}

const puntenInstance = new punten();
export { puntenInstance as Punten };
