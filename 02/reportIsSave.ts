export type Report = number[]

export function reportIsSave(report: Report): boolean {
    let order = 0
    let lastLevelDiff = 0
    for (let i=0; i<report.length - 1; i++) {
        if (order === 0 && report[i] < report[i+1]) {
            order = 1
        } else if (order === 0 && report[i] > report[i+1]) {
            order = -1
        } else if (order === 1 && report[i] > report[i+1]) {
            return false
        } else if (order === -1 && report[i] < report[i+1]) {
            return false
        }

        const currentLevelDiff = Math.abs(report[i]-report[i+1])
        if (currentLevelDiff > 3 || currentLevelDiff < 1) {
            return false
        }

        lastLevelDiff = currentLevelDiff
    }

    return true;
}