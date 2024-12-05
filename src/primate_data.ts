// START OF PRIMATE GAME DATA -------------------------------------------------------------------------
export enum Group {
    Hominin,
    Ape,
    Cercopith,
    Platyrrhine,
    Tarsier,
    Strepsirrhine,
}

export enum Places {
    Europe,
    Asia,
    Africa,
    America,
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
    KnuckleWalker,
    ArborealQuadruped,
    TerrestrialQuadruped,
    Brachiator,
    VerticalClingerAndLeaper,
}

export enum Tails {
    None,
    Prehensile,
    Normal,
}

export enum Habitats {
    Forest,
    Savannah,
    Wetland,
    Mountains,
    Urban,
}

export enum SocialStructures {
    Solitary,
    PairBonded,
    MultiMaleMultiFemale,
    FissionFusion,
}

export interface Primate {
    name: string,
    group: Group,
    place: Places,
    time: Times,
    diet: Diets,
    dentalFormula: DentalFormula,
    pelvis: Pelvis,
    locomotion: Locomotion,
    tail: Tails,
    habitat: Habitats,
    socialStructure: SocialStructures,
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
    habitat: Habitats.Urban,
    socialStructure: SocialStructures.FissionFusion,
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
    habitat: Habitats.Forest,
    socialStructure: SocialStructures.MultiMaleMultiFemale,
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
    habitat: Habitats.Forest,
    socialStructure: SocialStructures.FissionFusion,
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
    habitat: Habitats.Forest,
    socialStructure: SocialStructures.FissionFusion,
};

export const orangutan: Primate = {
    name: "orangutan",
    group: Group.Ape,
    place: Places.Asia,
    time: Times.Present,
    diet: Diets.Fruit,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Tall,
    locomotion: Locomotion.ArborealQuadruped,
    tail: Tails.None,
    habitat: Habitats.Forest,
    socialStructure: SocialStructures.Solitary,
};

export const gibbon: Primate = {
    name: "gibbon",
    group: Group.Ape,
    place: Places.Asia,
    time: Times.Present,
    diet: Diets.Fruit,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Tall,
    locomotion: Locomotion.Brachiator,
    tail: Tails.None,
    habitat: Habitats.Forest,
    socialStructure: SocialStructures.PairBonded,
};

export const siamang: Primate = {
    name: "siamang",
    group: Group.Ape,
    place: Places.Asia,
    time: Times.Present,
    diet: Diets.Fruit_and_leaves,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Tall,
    locomotion: Locomotion.Brachiator,
    tail: Tails.None,
    habitat: Habitats.Forest,
    socialStructure: SocialStructures.PairBonded,
};

export const baboon: Primate = {
    name: "baboon",
    group: Group.Cercopith,
    place: Places.Africa,
    time: Times.Present,
    diet: Diets.Omnivorous,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Narrow,
    locomotion: Locomotion.TerrestrialQuadruped,
    tail: Tails.Normal,
    habitat: Habitats.Savannah,
    socialStructure: SocialStructures.MultiMaleMultiFemale,
};

export const mandrill: Primate = {
    name: "mandrill",
    group: Group.Cercopith,
    place: Places.Africa,
    time: Times.Present,
    diet: Diets.Fruit,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Narrow,
    locomotion: Locomotion.TerrestrialQuadruped,
    tail: Tails.Normal,
    habitat: Habitats.Forest,
    socialStructure: SocialStructures.MultiMaleMultiFemale,
};

export const macaque: Primate = {
    name: "macaque",
    group: Group.Cercopith,
    place: Places.Asia,
    time: Times.Present,
    diet: Diets.Omnivorous,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Narrow,
    locomotion: Locomotion.TerrestrialQuadruped,
    tail: Tails.Normal,
    habitat: Habitats.Mountains,
    socialStructure: SocialStructures.MultiMaleMultiFemale,
};

export const colobus: Primate = {
    name: "colobus",
    group: Group.Cercopith,
    place: Places.Africa,
    time: Times.Present,
    diet: Diets.Leaves,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Narrow,
    locomotion: Locomotion.ArborealQuadruped,
    tail: Tails.Normal,
    habitat: Habitats.Forest,
    socialStructure: SocialStructures.MultiMaleMultiFemale,
};

export const spider: Primate = {
    name: "spider monkey",
    group: Group.Platyrrhine,
    place: Places.America,
    time: Times.Present,
    diet: Diets.Fruit_and_leaves,
    dentalFormula: DentalFormula.D2133,
    pelvis: Pelvis.Narrow,
    locomotion: Locomotion.Brachiator,
    tail: Tails.Prehensile,
    habitat: Habitats.Forest,
    socialStructure: SocialStructures.FissionFusion,
};

export const capuchin: Primate = {
    name: "capuchin",
    group: Group.Platyrrhine,
    place: Places.America,
    time: Times.Present,
    diet: Diets.Omnivorous,
    dentalFormula: DentalFormula.D2133,
    pelvis: Pelvis.Narrow,
    locomotion: Locomotion.ArborealQuadruped,
    tail: Tails.Prehensile,
    habitat: Habitats.Forest,
    socialStructure: SocialStructures.FissionFusion,
};

export const howler: Primate = {
    name: "howler monkey",
    group: Group.Platyrrhine,
    place: Places.America,
    time: Times.Present,
    diet: Diets.Leaves,
    dentalFormula: DentalFormula.D2133,
    pelvis: Pelvis.Narrow,
    locomotion: Locomotion.ArborealQuadruped,
    tail: Tails.Prehensile,
    habitat: Habitats.Forest,
    socialStructure: SocialStructures.MultiMaleMultiFemale,
};

export const tamarin: Primate = {
    name: "tamarin",
    group: Group.Platyrrhine,
    place: Places.America,
    time: Times.Present,
    diet: Diets.Fruit,
    dentalFormula: DentalFormula.D2133,
    pelvis: Pelvis.Narrow,
    locomotion: Locomotion.ArborealQuadruped,
    tail: Tails.Normal,
    habitat: Habitats.Forest,
    socialStructure: SocialStructures.PairBonded,
};

export const squirrel: Primate = {
    name: "squirrel monkey",
    group: Group.Platyrrhine,
    place: Places.America,
    time: Times.Present,
    diet: Diets.Fruit,
    dentalFormula: DentalFormula.D2133,
    pelvis: Pelvis.Narrow,
    locomotion: Locomotion.ArborealQuadruped,
    tail: Tails.Normal,
    habitat: Habitats.Forest,
    socialStructure: SocialStructures.MultiMaleMultiFemale,
};

export const tarsier: Primate = {
    name: "tarsier",
    group: Group.Tarsier,
    place: Places.Asia,
    time: Times.Present,
    diet: Diets.Meat,
    dentalFormula: DentalFormula.D2133,
    pelvis: Pelvis.Narrow,
    locomotion: Locomotion.VerticalClingerAndLeaper,
    tail: Tails.Normal,
    habitat: Habitats.Forest,
    socialStructure: SocialStructures.PairBonded,
};

export const lemur: Primate = {
    name: "lemur",
    group: Group.Strepsirrhine,
    place: Places.Africa,
    time: Times.Present,
    diet: Diets.Fruit_and_leaves,
    dentalFormula: DentalFormula.D2133,
    pelvis: Pelvis.Narrow,
    locomotion: Locomotion.ArborealQuadruped,
    tail: Tails.Normal,
    habitat: Habitats.Forest,
    socialStructure: SocialStructures.MultiMaleMultiFemale,
};

export const loris: Primate = {
    name: "loris",
    group: Group.Strepsirrhine,
    place: Places.Asia,
    time: Times.Present,
    diet: Diets.Fruit_and_leaves,
    dentalFormula: DentalFormula.D2133,
    pelvis: Pelvis.Narrow,
    locomotion: Locomotion.ArborealQuadruped,
    tail: Tails.Normal,
    habitat: Habitats.Forest,
    socialStructure: SocialStructures.Solitary,
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
    habitat: Habitats.Forest,
    socialStructure: SocialStructures.FissionFusion,
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
    habitat: Habitats.Savannah,
    socialStructure: SocialStructures.FissionFusion,
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
    habitat: Habitats.Forest,
    socialStructure: SocialStructures.FissionFusion,
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
    habitat: Habitats.Savannah,
    socialStructure: SocialStructures.MultiMaleMultiFemale,
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
    habitat: Habitats.Forest,
    socialStructure: SocialStructures.MultiMaleMultiFemale,
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
    habitat: Habitats.Forest,
    socialStructure: SocialStructures.FissionFusion,
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
    habitat: Habitats.Forest,
    socialStructure: SocialStructures.FissionFusion,
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
    habitat: Habitats.Forest,
    socialStructure: SocialStructures.FissionFusion,
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
    habitat: Habitats.Savannah,
    socialStructure: SocialStructures.MultiMaleMultiFemale,
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
    habitat: Habitats.Forest,
    socialStructure: SocialStructures.MultiMaleMultiFemale,
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
    habitat: Habitats.Forest,
    socialStructure: SocialStructures.MultiMaleMultiFemale,
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
    habitat: Habitats.Forest,
    socialStructure: SocialStructures.Solitary,
};

export const orrorin: Primate = {
    name: "Orrorin",
    group: Group.Hominin,
    place: Places.Africa,
    time: Times.Miocene,
    diet: Diets.Fruit_and_leaves,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Wide,
    locomotion: Locomotion.FacultativeBiped,
    tail: Tails.None,
    habitat: Habitats.Forest,
    socialStructure: SocialStructures.Solitary,
};

export const sahelanthropus: Primate = {
    name: "Sahelanthropus",
    group: Group.Hominin,
    place: Places.Africa,
    time: Times.Miocene,
    diet: Diets.Fruit_and_leaves,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Wide,
    locomotion: Locomotion.FacultativeBiped,
    tail: Tails.None,
    habitat: Habitats.Forest,
    socialStructure: SocialStructures.Solitary,
};

export const gigantopithecus: Primate = {
    name: "Gigantopithecus",
    group: Group.Ape,
    place: Places.Asia,
    time: Times.Pleistocene,
    diet: Diets.Fruit,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Tall,
    locomotion: Locomotion.ArborealQuadruped,
    tail: Tails.None,
    habitat: Habitats.Forest,
    socialStructure: SocialStructures.Solitary,
};

export const dryopithecus: Primate = {
    name: "Dryopithecus",
    group: Group.Ape,
    place: Places.Europe,
    time: Times.Miocene,
    diet: Diets.Fruit,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Tall,
    locomotion: Locomotion.Brachiator,
    tail: Tails.None,
    habitat: Habitats.Forest,
    socialStructure: SocialStructures.MultiMaleMultiFemale,
};

export const sivapithecus: Primate = {
    name: "Sivapithecus",
    group: Group.Ape,
    place: Places.Asia,
    time: Times.Miocene,
    diet: Diets.Fruit,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Tall,
    locomotion: Locomotion.ArborealQuadruped,
    tail: Tails.None,
    habitat: Habitats.Forest,
    socialStructure: SocialStructures.Solitary,
};

export const oreopithecus: Primate = {
    name: "Oreopithecus",
    group: Group.Ape,
    place: Places.Europe,
    time: Times.Miocene,
    diet: Diets.Fruit_and_leaves,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Tall,
    locomotion: Locomotion.FacultativeBiped,
    tail: Tails.None,
    habitat: Habitats.Wetland,
    socialStructure: SocialStructures.MultiMaleMultiFemale,
};

export const ouranopithecus: Primate = {
    name: "Ouranopithecus",
    group: Group.Ape,
    place: Places.Europe,
    time: Times.Miocene,
    diet: Diets.Fruit,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Tall,
    locomotion: Locomotion.ArborealQuadruped,
    tail: Tails.None,
    habitat: Habitats.Forest,
    socialStructure: SocialStructures.MultiMaleMultiFemale,
};

export const proconsul: Primate = {
    name: "Proconsul",
    group: Group.Ape,
    place: Places.Africa,
    time: Times.Miocene,
    diet: Diets.Fruit_and_leaves,
    dentalFormula: DentalFormula.D2123,
    pelvis: Pelvis.Tall,
    locomotion: Locomotion.ArborealQuadruped,
    tail: Tails.None,
    habitat: Habitats.Forest,
    socialStructure: SocialStructures.MultiMaleMultiFemale,
};
