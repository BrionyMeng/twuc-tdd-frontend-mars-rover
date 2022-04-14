import {re} from "@babel/core/lib/vendor/import-meta-resolve";

export class Rover {
    constructor(location, direction) {
        this.location = location;
        this.direction = direction;
    }

    getLocation() {
        return this.location;
    }

    getDirection() {
        return this.direction;
    }

    turnLeft() {

        if (this.direction === "N") {
            this.direction = "W";
        } else if(this.direction==="W"){
            this.direction="S";
        }else if(this.direction==="S"){
            this.direction="E";
        }else{
            this.direction="N";
        }
    }
}
