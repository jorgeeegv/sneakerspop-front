import { ShopVO } from "src/app/models/ShopVO";

export interface AppStateShops {
    list : {
        list : ShopVO[],
        count : number
    },
    selectedShop: ShopVO;
}