export type Report = number[]
type Order = 0 | 1 | -1

function getOrder(currentItem: number, nextItem: number): Order {
    if (currentItem < nextItem) {
        return 1
    }  else if (currentItem > nextItem) {
        return -1
    }
    return 0;
}

function isOrderOk(order: Order, currentItem: number, nextItem: number): boolean {
    return order !== 0 && order === getOrder(currentItem, nextItem)
}

function isDiffOk(currentItem: number, nextItem: number): boolean {
    const currentLevelDiff = Math.abs(currentItem - nextItem)
    if (currentLevelDiff > 3 || currentLevelDiff < 1) {
        return false
    }
    return true  
}

export function reportIsSave_leveraged(report: Report): boolean {
    let order
    for (let i=0; i<report.length - 1; i++) {
        if (order === undefined) order = getOrder(report[i], report[i+1])
        if (!isOrderOk(order, report[i], report[i+1])) return false

        if (!isDiffOk(report[i], report[i+1])) return false
    }

    return true;
}