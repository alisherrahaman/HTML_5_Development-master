interface  Car{
    HasAirBags():boolean;
    specification():string;
    HasCamera():boolean;
}
class BMW implements Car{
 private _color :string;
 private  _engineCapacity:string;
 private  _fuel :string;
 private  _seatingCapacity :number;


    constructor(color: string, enginCapacity: string, fuel: string, seatingCapacity: number) {
        this._color = color;
        this._engineCapacity = enginCapacity;
        this._fuel = fuel;
        this._seatingCapacity = seatingCapacity;
    }


    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    get engineCapacity(): string {
        return this._engineCapacity;
    }

    set engineCapacity(value: string) {
        this._engineCapacity = value;
    }

    get fuel(): string {
        return this._fuel;
    }

    set fuel(value: string) {
        this._fuel = value;
    }

    get seatingCapacity(): number {
        return this._seatingCapacity;
    }

    set seatingCapacity(value: number) {
        this._seatingCapacity = value;
    }

    HasAirBags(): boolean {
        return true;
    }

    specification(): string {
        let specification = `
        Color:${this.color},
        engineCapacity:${this.engineCapacity},
        SeatingCapacity:${this.seatingCapacity},
        Has AirBags:${this.HasAirBags()},
        Has Camera:${this.HasCamera()}
        `;



        return specification;
    }

    HasCamera(): boolean {
        return true;
    }
}


let car1 = new BMW('white', '3000CC' , 'Diesel' ,4);
let carSpec =car1.specification();
console.log(carSpec);