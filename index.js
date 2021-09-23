const hq = 42;
const feet = 264;
let fare = .02 * feet;


function distanceFromHqInBlocks(pickupLocation){
    if (hq > pickupLocation){
        return hq - pickupLocation;
    } else if (hq < pickupLocation){
        return pickupLocation - hq;
        }
    }

function distanceFromHqInFeet(pickupLocation){
    return distanceFromHqInBlocks(pickupLocation) * feet

    }

function distanceTravelledInFeet(pickupLocation, dropOffLocation){
    if (pickupLocation > dropOffLocation){
        return (pickupLocation - dropOffLocation) * feet;
    } else if (pickupLocation < dropOffLocation){
        return (dropOffLocation - pickupLocation) * feet;
    }
}

function calculatesFarePrice(pickupLocation, dropOffLocation){
    let blocks = Math.abs(pickupLocation - dropOffLocation);
    let distance = blocks * feet;
    if (distance < 400){
        return 0;
    } else if (distance >= 400 && distance < 2000){
        return (0.02 * (distance - 400));
    } else if (distance >= 2000 && distance < 2500){
        return (25);
    } else if (distance >= 2500){
        return "cannot travel that far"
    }

}