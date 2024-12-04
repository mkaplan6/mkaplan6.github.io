// START OF PRIMATE GAME DATA -------------------------------------------------------------------------
export enum Group {
    Hominin,
    Ape,
    Cercopith,
    Platyrrhine,
    Tarsier,
    Lemur_loris,
}

export enum Places {
    Europe,
    Asia,
    Africa,
    Americas,
}

export enum Times {
    Miocene,
    Pliocene,
    Pleistocene,
    Present
}

export enum Diets {
    Fruit,
    Leaves,
    Nuts,
    Meat,
    Fruit_and_leaves,
    Hard_dry_foods,
    Omnivorous,
}

export enum DentalFormula {
    D2133,
    D2123,
}

export enum Pelvis {
    Wide, //hominin
    Tall, //ape
    Narrow, //monkey
}

export enum Locomotion {
    FacultativeBiped,
    ObligateBiped,
    Quadrupedal,
    KnuckleWalker,
}

export enum Tails {
    None,
    Prehensile,
    Normal,
}

export interface Primate {
    name: string,
    group: Group,
    place: Places,
    time: Times,
    diet: Diets,
    dentalFormula: DentalFormula,
    //teeth: TeethType,
    //skull: string,
    //body: string,
    pelvis: Pelvis,
    locomotion: Locomotion,
    tail: Tails,
}

export const human: Primate = {
    name: "human",
    group: Group.Hominin,
    place: Places.Africa,
    time: Times.Present,
    diet: Diets.Omnivorous,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Wide,
    locomotion: Locomotion.ObligateBiped,
    tail: Tails.None,
};


export const gorilla: Primate = {
    name: "gorilla",
    group: Group.Ape,
    place: Places.Africa,
    time: Times.Present,
    diet: Diets.Leaves,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Tall,
    locomotion: Locomotion.KnuckleWalker,
    tail: Tails.None,
};

export const chimp: Primate = {
    name: "chimpanzee",
    group: Group.Ape,
    place: Places.Africa,
    time: Times.Present,
    diet: Diets.Omnivorous,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Tall,
    locomotion: Locomotion.KnuckleWalker,
    tail: Tails.None,
};

export const bonobo: Primate = {
    name: "bonobo",
    group: Group.Ape,
    place: Places.Africa,
    time: Times.Present,
    diet: Diets.Fruit_and_leaves,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Tall,
    locomotion: Locomotion.KnuckleWalker,
    tail: Tails.None,
};

export const orangutan: Primate = {
    name: "orangutan",
    group: Group.Ape,
    place: Places.Asia,
    time: Times.Present,
    diet: Diets.Fruit,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Tall,
    locomotion: Locomotion.Quadrupedal,
    tail: Tails.None,
};

export const gibbon: Primate = {
    name: "gibbon",
    group: Group.Ape,
    place: Places.Asia,
    time: Times.Present,
    diet: Diets.Fruit,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Tall,
    locomotion: Locomotion.Quadrupedal,
    tail: Tails.None,
};

export const siamang: Primate = {
    name: "siamang",
    group: Group.Ape,
    place: Places.Asia,
    time: Times.Present,
    diet: Diets.Fruit_and_leaves,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Tall,
    locomotion: Locomotion.Quadrupedal,
    tail: Tails.None,
};

export const baboon: Primate = {
    name: "baboon",
    group: Group.Cercopith,
    place: Places.Africa,
    time: Times.Present,
    diet: Diets.Omnivorous,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Narrow,
    locomotion: Locomotion.Quadrupedal,
    tail: Tails.Normal,
};

export const mandrill: Primate = {
    name: "mandrill",
    group: Group.Cercopith,
    place: Places.Africa,
    time: Times.Present,
    diet: Diets.Fruit,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Narrow,
    locomotion: Locomotion.Quadrupedal,
    tail: Tails.Normal,
};

export const macaque: Primate = {
    name: "macaque",
    group: Group.Cercopith,
    place: Places.Asia,
    time: Times.Present,
    diet: Diets.Omnivorous,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Narrow,
    locomotion: Locomotion.Quadrupedal,
    tail: Tails.Normal,
};

export const colobus: Primate = {
    name: "colobus",
    group: Group.Cercopith,
    place: Places.Africa,
    time: Times.Present,
    diet: Diets.Leaves,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Narrow,
    locomotion: Locomotion.Quadrupedal,
    tail: Tails.Normal,
};

export const spider: Primate = {
    name: "spider",
    group: Group.Platyrrhine,
    place: Places.Americas,
    time: Times.Present,
    diet: Diets.Fruit_and_leaves,
    dentalFormula: DentalFormula.D2133,
    pelvis: Pelvis.Narrow,
    locomotion: Locomotion.Quadrupedal,
    tail: Tails.Prehensile,
};

export const capuchin: Primate = {
    name: "capuchin",
    group: Group.Platyrrhine,
    place: Places.Americas,
    time: Times.Present,
    diet: Diets.Omnivorous,
    dentalFormula: DentalFormula.D2133,
    pelvis: Pelvis.Narrow,
    locomotion: Locomotion.Quadrupedal,
    tail: Tails.Prehensile,
};

export const howler: Primate = {
    name: "howler",
    group: Group.Platyrrhine,
    place: Places.Americas,
    time: Times.Present,
    diet: Diets.Leaves,
    dentalFormula: DentalFormula.D2133,
    pelvis: Pelvis.Narrow,
    locomotion: Locomotion.Quadrupedal,
    tail: Tails.Prehensile,
};

export const tamarin: Primate = {
    name: "tamarin",
    group: Group.Platyrrhine,
    place: Places.Americas,
    time: Times.Present,
    diet: Diets.Fruit,
    dentalFormula: DentalFormula.D2133,
    pelvis: Pelvis.Narrow,
    locomotion: Locomotion.Quadrupedal,
    tail: Tails.Normal,
};

export const squirrel: Primate = {
    name: "squirrel",
    group: Group.Platyrrhine,
    place: Places.Americas,
    time: Times.Present,
    diet: Diets.Fruit,
    dentalFormula: DentalFormula.D2133,
    pelvis: Pelvis.Narrow,
    locomotion: Locomotion.Quadrupedal,
    tail: Tails.Normal,
};

export const tarsier: Primate = {
    name: "tarsier",
    group: Group.Tarsier,
    place: Places.Asia,
    time: Times.Present,
    diet: Diets.Meat,
    dentalFormula: DentalFormula.D2133,
    pelvis: Pelvis.Narrow,
    locomotion: Locomotion.Quadrupedal,
    tail: Tails.Normal,
};

export const lemur: Primate = {
    name: "lemur",
    group: Group.Lemur_loris,
    place: Places.Africa,
    time: Times.Present,
    diet: Diets.Fruit_and_leaves,
    dentalFormula: DentalFormula.D2133,
    pelvis: Pelvis.Narrow,
    locomotion: Locomotion.Quadrupedal,
    tail: Tails.Normal,
};

export const loris: Primate = {
    name: "loris",
    group: Group.Lemur_loris,
    place: Places.Asia,
    time: Times.Present,
    diet: Diets.Fruit_and_leaves,
    dentalFormula: DentalFormula.D2133,
    pelvis: Pelvis.Narrow,
    locomotion: Locomotion.Quadrupedal,
    tail: Tails.Normal,
};

export const neanderthal: Primate = {
    name: "Homo neanderthalensis",
    group: Group.Hominin,
    place: Places.Europe,
    time: Times.Pleistocene,
    diet: Diets.Omnivorous,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Wide,
    locomotion: Locomotion.ObligateBiped,
    tail: Tails.None,
};

export const erectus: Primate = {
    name: "Homo erectus",
    group: Group.Hominin,
    place: Places.Africa,
    time: Times.Pleistocene,
    diet: Diets.Omnivorous,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Wide,
    locomotion: Locomotion.ObligateBiped,
    tail: Tails.None,
};

export const habilis: Primate = {
    name: "Homo habilis",
    group: Group.Hominin,
    place: Places.Africa,
    time: Times.Pliocene,
    diet: Diets.Omnivorous,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Wide,
    locomotion: Locomotion.FacultativeBiped,
    tail: Tails.None,
};

export const robustus: Primate = {
    name: "Paranthropus robustus",
    group: Group.Hominin,
    place: Places.Africa,
    time: Times.Pleistocene,
    diet: Diets.Hard_dry_foods,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Wide,
    locomotion: Locomotion.FacultativeBiped,
    tail: Tails.None,
};

export const boisei: Primate = {
    name: "Paranthropus boisei",
    group: Group.Hominin,
    place: Places.Africa,
    time: Times.Pleistocene,
    diet: Diets.Hard_dry_foods,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Wide,
    locomotion: Locomotion.FacultativeBiped,
    tail: Tails.None,
};

export const sediba: Primate = {
    name: "Australopithecus sediba",
    group: Group.Hominin,
    place: Places.Africa,
    time: Times.Pleistocene,
    diet: Diets.Fruit_and_leaves,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Wide,
    locomotion: Locomotion.FacultativeBiped,
    tail: Tails.None,
};

export const garhi: Primate = {
    name: "Australopithecus garhi",
    group: Group.Hominin,
    place: Places.Africa,
    time: Times.Pliocene,
    diet: Diets.Fruit_and_leaves,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Wide,
    locomotion: Locomotion.FacultativeBiped,
    tail: Tails.None,
};

export const africanus: Primate = {
    name: "Australopithecus africanus",
    group: Group.Hominin,
    place: Places.Africa,
    time: Times.Pliocene,
    diet: Diets.Fruit_and_leaves,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Wide,
    locomotion: Locomotion.FacultativeBiped,
    tail: Tails.None,
};

export const afarensis: Primate = {
    name: "Australopithecus afarensis",
    group: Group.Hominin,
    place: Places.Africa,
    time: Times.Pliocene,
    diet: Diets.Fruit_and_leaves,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Wide,
    locomotion: Locomotion.FacultativeBiped,
    tail: Tails.None,
};

export const anamensis: Primate = {
    name: "Australopithecus anamensis",
    group: Group.Hominin,
    place: Places.Africa,
    time: Times.Pliocene,
    diet: Diets.Fruit_and_leaves,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Wide,
    locomotion: Locomotion.FacultativeBiped,
    tail: Tails.None,
};

export const ramidus: Primate = {
    name: "Ardipithecus ramidus",
    group: Group.Hominin,
    place: Places.Africa,
    time: Times.Pliocene,
    diet: Diets.Fruit_and_leaves,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Wide,
    locomotion: Locomotion.FacultativeBiped,
    tail: Tails.None,
};

export const kadabba: Primate = {
    name: "Ardipithecus kadabba",
    group: Group.Hominin,
    place: Places.Africa,
    time: Times.Pliocene,
    diet: Diets.Fruit_and_leaves,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Wide,
    locomotion: Locomotion.FacultativeBiped,
    tail: Tails.None,
};

export const orrorin: Primate = {
    name: "Orrorin tugenensis",
    group: Group.Hominin,
    place: Places.Africa,
    time: Times.Miocene,
    diet: Diets.Fruit_and_leaves,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Wide,
    locomotion: Locomotion.FacultativeBiped,
    tail: Tails.None,
};

export const sahelanthropus: Primate = {
    name: "Sahelanthropus tchadensis",
    group: Group.Hominin,
    place: Places.Africa,
    time: Times.Miocene,
    diet: Diets.Fruit_and_leaves,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Wide,
    locomotion: Locomotion.FacultativeBiped,
    tail: Tails.None,
};

export const gigantopithecus: Primate = {
    name: "Gigantopithecus",
    group: Group.Ape,
    place: Places.Asia,
    time: Times.Pleistocene,
    diet: Diets.Fruit,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Tall,
    locomotion: Locomotion.Quadrupedal,
    tail: Tails.None,
};

export const dryopithecus: Primate = {
    name: "Dryopithecus",
    group: Group.Ape,
    place: Places.Europe,
    time: Times.Miocene,
    diet: Diets.Fruit,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Tall,
    locomotion: Locomotion.Quadrupedal,
    tail: Tails.None,
};

export const sivapithecus: Primate = {
    name: "Sivapithecus",
    group: Group.Ape,
    place: Places.Asia,
    time: Times.Miocene,
    diet: Diets.Fruit,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Tall,
    locomotion: Locomotion.Quadrupedal,
    tail: Tails.None,
};

export const oreopithecus: Primate = {
    name: "Oreopithecus",
    group: Group.Ape,
    place: Places.Europe,
    time: Times.Miocene,
    diet: Diets.Fruit_and_leaves,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Tall,
    locomotion: Locomotion.Quadrupedal,
    tail: Tails.None,
};

export const ouranopithecus: Primate = {
    name: "Ouranopithecus",
    group: Group.Ape,
    place: Places.Europe,
    time: Times.Miocene,
    diet: Diets.Fruit,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Tall,
    locomotion: Locomotion.Quadrupedal,
    tail: Tails.None,
};

export const proconsul: Primate = {
    name: "Proconsul",
    group: Group.Ape,
    place: Places.Africa,
    time: Times.Miocene,
    diet: Diets.Fruit_and_leaves,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Tall,
    locomotion: Locomotion.Quadrupedal,
    tail: Tails.None,
};