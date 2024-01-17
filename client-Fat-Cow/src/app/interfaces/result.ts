export interface Result {
    id: number,
    clientId: number,
    name: number,
    prodId: number,
    season: number,
    period: number,
    quantity: number,
    initialWeight: number,
    priceProduct: number,
    priceWeight: number,
    DWG: number,
    dailyPerHeadWeight: number,
    dailyTotalWeight: number,
    dailyTotalPack: number,
    periodTotalWeight: number,
    periodTotalPack: number,
    dailyCost: number,
    monthlyCost: number,
    periodCost: number,
    monthlyWeightGain: number,
    estimatedWeightGain: number,
    finalWeight: number,
    dailyRecommendation: number,
    periodRecommendation: number,
    estimatedProfitPerHead: number,
    estimatedProfitTotal: number,
    createdAt: string,
    updatedAt: string,
    notifyClient: boolean | undefined,
    expired: boolean | undefined,
}