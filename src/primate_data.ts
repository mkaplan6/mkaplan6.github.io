// START OF PRIMATE GAME DATA -------------------------------------------------------------------------
enum Group {
    Hominin,
    Ape,
    Cercopith,
    Platyrrhine,
    Tarsier,
    Lemur_loris,
}

enum Places {
    Europe,
    Asia,
    Africa,
    Americas,
}

enum Times {
    Miocene,
    Pliocene,
    Pleistocene,
    Present
}

enum Diets {
    Fruit,
    Leaves,
    Nuts,
    Meat,
    Fruit_and_leaves,
    Hard_dry_foods,
    Omnivorous,
}

enum DentalFormula {
    D2133,
    D2123,
}

enum TeethType {
    RobustMolars,
    LargeCanines,
}

enum Pelvis {
    Wide, //hominin
    Tall, //ape
    Narrow, //monkey
}

enum Locomotion {
    FacultativeBiped,
    ObligateBiped,
    Quadrupedal,
    KnuckleWalker,
}

enum Tails {
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

/*
include:

Present----
human
gorilla
chimp
bonobo
orangutan
gibbon
siamang

baboon
mandrill
macaque

colobus
spider
capuchin
howler
tamarin
squirrel

tarsier
lemur
loris

Pleisto---
Homo neanderthalensis
Homo erectus
Homo habilis
Paranthropus robustus
Paranthropus boisei
Australopithecus sediba
Australopithecus garhi
Australopithecus africanus

Plio--5-3 mya
Australopithecus afarensis
Australopithecus anamensis
Ardipithecus ramidus
Ardipithecus kadabba

Mio--
Orrorin tugenesis
Sahelanthropus tchadensis
Gigantopithecus
Dryopithecus
Sivapithecus
Oreopithecus
Ouranopithecus
Proconsul

*/