import { BrandVO } from "src/app/models/BrandVO";

export interface AppStateBrands {
    list : {
        list : BrandVO[],
        count : number
    },
    selectedBrand: BrandVO;
}