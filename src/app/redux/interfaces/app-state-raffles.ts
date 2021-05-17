import { RaffleVO } from "src/app/models/RaffleVO";

export interface AppStateRaffles {
    list : {
        list : RaffleVO[],
        count : number
    },
    selectedRaffle: RaffleVO;
}