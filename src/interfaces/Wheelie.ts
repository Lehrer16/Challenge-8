import Truck from "../classes/Truck.js";
import Motorbike from "../classes/Motorbike.js";
import Car from "../classes/Car.js";

interface Wheelie {
    wheelie(vehicle: Truck | Motorbike | Car): void;
}
export default Wheelie;