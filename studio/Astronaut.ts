import { Payload } from "./Payload";

// Short syntax
export class Astronaut implements Payload {
    constructor(
        public massKg: number, 
        public name: string
    ) {}
}

// export class Astronaut implements Payload {
//     massKg: number;
//     name: string;
// 
//     constructor(massKg: number, name: string) {
//         this.massKg = massKg;
//         this.name = name;
//     }
// }