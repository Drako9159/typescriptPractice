class MyDate {
  // optimize constructor
  constructor(
    private year: number = 1996,
    private month: number = 6,
    private _day: number = 6
  ) {}

  private addPadding(value: number) {
    if (value < 10) return `0${value}`;
    return `${value}`;
  }

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  add(amount: number, type: "days" | "months" | "years") {
    if (type === "days") this._day += amount;
    if (type === "months") this.month += amount;
    if (type === "years") this.year += amount;
  }

  get day() {
    return this._day;
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }
}

const myDate = new MyDate(1996, 3, 13);

myDate.add(3, "days");

console.log(myDate.printFormat());

console.log(myDate.isLeapYear);
