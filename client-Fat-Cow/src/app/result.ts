export class Result {
    constructor(
        public name: number,
        public prodId: number,
        public season: number,
        public period: number,
        public quantity: number,
        public initialWeight: number,
        public priceProduct: number,
        public priceWeight: number,
        public DWG: number,
        public dailyPerHeadWeight: number,
        public dailyTotalWeight: number,
        public dailyTotalPack: number,
        public periodTotalWeight: number,
        public periodTotalPack: number,
        public dailyCost: number,
        public monthlyCost: number,
        public periodCost: number,
        public monthlyWeightGain: number,
        public estimatedWeightGain: number,
        public finalWeight: number,
        public dailyRecommendation: number,
        public periodRecommendation: number,
        public estimatedProfitPerHead: number,
        public estimatedProfitTotal: number,
        public createdAt: string,
        public updatedAt: string,

    ) { }
}