import { AvisExpert } from "./avisExpert";

export interface AutoDetection {
    id : number ;
    maladieDroite :string ; 
    maladieGauche : string ; 
    graviteDroite : number ;
    graviteGauche : number ; 
   avisExpert : AvisExpert ; 
}
