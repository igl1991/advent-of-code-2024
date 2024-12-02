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

export function reportIsSave_leveraged(report: Report, itemWasRemoved = false): boolean {
    let order
    for (let i=0; i<report.length - 1; i++) {
        const currentItem = report[i]
        const nextItem = report[i+1]

        if (order === undefined) order = getOrder(currentItem, nextItem)
        const isNotOk = 
            !isOrderOk(order, currentItem, nextItem) || 
            !isDiffOk(currentItem, nextItem)

        if (isNotOk) {
            if (itemWasRemoved) return false

            itemWasRemoved = true

            let newReport = [...report]
            if (i === 0) {
                
                newReport.splice(i, 1)
                if (reportIsSave_leveraged(newReport, itemWasRemoved)) {
                    order = undefined
                    continue
                }
                newReport = [...report]
            }

            newReport.splice(i + 1, 1)
            if (reportIsSave_leveraged(newReport, itemWasRemoved)) {
                continue
            }

            return false
        }
    }

    return true;
}