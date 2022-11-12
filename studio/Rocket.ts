import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[]): number {
        let sum = 0;

        for (let item of items) {
            sum += Number(item.massKg);
        }

        return sum;
    }

    currentMassKg(): number {
        const astronautsMassKg = this.sumMass(this.astronauts);
        const cargoMassKg = this.sumMass(this.cargoItems);
        const currMass = astronautsMassKg + cargoMassKg;

        return currMass;
    }

    canAdd(item: Payload): boolean {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    }

    addCargo(cargo: Cargo): boolean {
        let canAddFlag = this.canAdd(cargo);

        if (canAddFlag) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        let canAddFlag = this.canAdd(astronaut);

        if (canAddFlag) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
}