console.log('Solving advent of code day 1');

export function calc(locationList1: number[], locationList2: number[]): number {
    if (locationList1.length !== locationList2.length) {
        throw new Error('there should be equal amount of locations')
    }
    const sortedLocation1 = locationList1.sort()
    const sortedLocation2 = locationList2.sort()

    let sum = 0;
    for (let i=0;i<locationList1.length;i++) {
        sum += Math.abs(sortedLocation1[i]-sortedLocation2[i])
    }

    return sum;
}