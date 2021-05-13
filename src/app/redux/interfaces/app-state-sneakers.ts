import { SneakerVO } from "src/app/models/SneakerVO";

export interface AppStateSneakers {
    list : {
        list : SneakerVO[],
        count : number
    },
    selectedSneaker: SneakerVO;
}