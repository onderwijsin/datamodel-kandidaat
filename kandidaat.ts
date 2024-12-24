export type Fase = "nieuw" | "matchen" | "oriënteren" | "voorbereiden" | "in opleiding" | "werkzaam" | "uitgestroomd"

export type Sector = "Primair onderwijs" | "Voortgezet onderwijs" | "Speciaal onderwijs" | 
                    "Middelbaar beroepsonderwijs" | "Hoger onderwijs" | "Praktijk onderwijs"

export type Functie = "Docent / leraar" | "Instructeur (mbo)" | "OOP" | "Ondersteuning" | 
                     "Leerlingenzorg" | "Midden management" | "Schoolleiding" | "Anders"

export type Kwalificatie = "Primair onderwijs" | "Beperkt tweedegraads" | "Tweedegraads" | 
                          "Eerstegraads" | "PDG" | "BKO/BDB" | 
                          "Kwalificatie onderwijs ondersteunend personeel" | 
                          "Kwalificatie Instructeur (MBO)" | "Geen: gastdocentschap" | 
                          "Pabo" | "Onbekend" | "Nog geen idee" | "Niet van toepassing"

export type Vooropleiding = "geen" | "praktijkonderwijs" | "vmbo-bl" | "vmbo-kl" | "vmbo-gl" | 
                           "vmbo-tl" | "vmbo" | "havo" | "vwo" | "mbo entree" | "mbo 2" | 
                           "mbo 3" | "mbo 4" | "mbo" | "associate degree" | "hbo propedeuse" | 
                           "hbo bachelor" | "hbo master" | "hbo" | "wo bachelor" | "wo master" | 
                           "wo" | "PhD"

export type InteractieSoort = "Telefonisch" | "E-mail" | "Persoonlijk" | "Anders" | 
                             "Doorverwijzing" | "Adviesgesprek" | "Kennismakingsgesprek" | 
                             "Inschrijving activiteit" | "Niet van toepassing"


export interface CustomField {
    field_name:         string;
    field_value:        string | number | boolean | string[];
}


export interface Interactie {
    naam:               string;
    aangemaakt_door:    string;
    aangemaakt_op:      Date;
    bijlage:            Attachment[];
    duur:               string;
    kandidaatSourceId:  string;
    kandidaten:         string[];
    notities:           string;
    samenvatting:       string;
    soort:              InteractieSoort[];
    uitgevoerd_door:    string;
    uitgevoerd_op:      Date;
}


interface Attachment {
    url:                string;
    filename:           string;
    size?:              number;
    type?:              string;
}

export interface Kandidaat {
    naam:                 string;
    email:                string;
    privacy_consent:      boolean;
    telefoon?:            string;
    fase?:                Fase;
    sector?:              Sector[];
    functie?:             Functie[];
    kwalificatie?:        Kwalificatie[];
    vooropleiding?:       Vooropleiding;
    linkedin?:            string;
    geboortedatum?:       string;
    motivatie?:           string;
    adres?:               string;
    plaats?:              string;
    postcode?:            string;
    interacties?:         Interactie[];
    custom_fields?:       CustomField[];
    notities?:            string;
    aangemaakt_op?:       string;
    reden_van_uitstroom?: string;
}
