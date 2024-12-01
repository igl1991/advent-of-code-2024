export function calculateSimilarityScore(list1: number[], list2: number[]): number {
    let totalScore = 0
    for (const item1 of list1) {
        const score = item1 * list2.filter((item)=>item === item1).length
        totalScore += score
    }
    return totalScore
}