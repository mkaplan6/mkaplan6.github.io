// START OF PRIMATE GAME DATA -------------------------------------------------------------------------
export var Group;
(function (Group) {
    Group[Group["Hominin"] = 0] = "Hominin";
    Group[Group["Ape"] = 1] = "Ape";
    Group[Group["Cercopith"] = 2] = "Cercopith";
    Group[Group["Platyrrhine"] = 3] = "Platyrrhine";
    Group[Group["Tarsier"] = 4] = "Tarsier";
    Group[Group["Lemur_loris"] = 5] = "Lemur_loris";
})(Group || (Group = {}));
export var Places;
(function (Places) {
    Places[Places["Europe"] = 0] = "Europe";
    Places[Places["Asia"] = 1] = "Asia";
    Places[Places["Africa"] = 2] = "Africa";
    Places[Places["Americas"] = 3] = "Americas";
})(Places || (Places = {}));
export var Times;
(function (Times) {
    Times[Times["Miocene"] = 0] = "Miocene";
    Times[Times["Pliocene"] = 1] = "Pliocene";
    Times[Times["Pleistocene"] = 2] = "Pleistocene";
    Times[Times["Present"] = 3] = "Present";
})(Times || (Times = {}));
export var Diets;
(function (Diets) {
    Diets[Diets["Fruit"] = 0] = "Fruit";
    Diets[Diets["Leaves"] = 1] = "Leaves";
    Diets[Diets["Nuts"] = 2] = "Nuts";
    Diets[Diets["Meat"] = 3] = "Meat";
    Diets[Diets["Fruit_and_leaves"] = 4] = "Fruit_and_leaves";
    Diets[Diets["Hard_dry_foods"] = 5] = "Hard_dry_foods";
    Diets[Diets["Omnivorous"] = 6] = "Omnivorous";
})(Diets || (Diets = {}));
export var DentalFormula;
(function (DentalFormula) {
    DentalFormula[DentalFormula["D2133"] = 0] = "D2133";
    DentalFormula[DentalFormula["D2123"] = 1] = "D2123";
})(DentalFormula || (DentalFormula = {}));
export var Pelvis;
(function (Pelvis) {
    Pelvis[Pelvis["Wide"] = 0] = "Wide";
    Pelvis[Pelvis["Tall"] = 1] = "Tall";
    Pelvis[Pelvis["Narrow"] = 2] = "Narrow";
})(Pelvis || (Pelvis = {}));
export var Locomotion;
(function (Locomotion) {
    Locomotion[Locomotion["FacultativeBiped"] = 0] = "FacultativeBiped";
    Locomotion[Locomotion["ObligateBiped"] = 1] = "ObligateBiped";
    Locomotion[Locomotion["Quadrupedal"] = 2] = "Quadrupedal";
    Locomotion[Locomotion["KnuckleWalker"] = 3] = "KnuckleWalker";
})(Locomotion || (Locomotion = {}));
export var Tails;
(function (Tails) {
    Tails[Tails["None"] = 0] = "None";
    Tails[Tails["Prehensile"] = 1] = "Prehensile";
    Tails[Tails["Normal"] = 2] = "Normal";
})(Tails || (Tails = {}));
export const human = {
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
export const gorilla = {
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
export const chimp = {
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
export const bonobo = {
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
export const orangutan = {
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
export const gibbon = {
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
export const siamang = {
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
export const baboon = {
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
export const mandrill = {
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
export const macaque = {
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
export const colobus = {
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
export const spider = {
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
export const capuchin = {
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
export const howler = {
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
export const tamarin = {
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
export const squirrel = {
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
export const tarsier = {
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
export const lemur = {
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
export const loris = {
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
export const neanderthal = {
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
export const erectus = {
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
export const habilis = {
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
export const robustus = {
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
export const boisei = {
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
export const sediba = {
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
export const garhi = {
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
export const africanus = {
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
export const afarensis = {
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
export const anamensis = {
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
export const ramidus = {
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
export const kadabba = {
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
export const orrorin = {
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
export const sahelanthropus = {
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
export const gigantopithecus = {
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
export const dryopithecus = {
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
export const sivapithecus = {
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
export const oreopithecus = {
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
export const ouranopithecus = {
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
export const proconsul = {
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
