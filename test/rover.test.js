import {Rover} from "../src/rover";

describe("Mars Rover", () => {
        test("Should return location and direction when rover init", () => {
            //Given
            const location = {x: 0, y: 0};
            const rover = new Rover(location, "N");
            //When
            const currentLocation = rover.getLocation();
            const currentDirection=rover.getDirection();
            //Then
            expect(currentLocation).toEqual(location);
            expect(currentDirection).toEqual('N')
        })

    test.each([{direction:"N",expected:"W"},{direction:"W",expected:"S"},{direction:"S",expected:"E"},{direction:"E",expected:"N"}])
    ("Should facing $expected when turning from $direction",({direction,expected})=>{
            //Given
            const location = {x: 0, y: 0};
            const rover = new Rover(location, direction);
            //When
            rover.turnLeft();
            const currentDirection=rover.getDirection();
            //Then
            expect(currentDirection).toEqual(expected)
    })

    }
)
