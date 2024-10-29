// START OF PRIMATE GAME DATA -------------------------------------------------------------------------
var Group;
(function (Group) {
    Group[Group["Hominin"] = 0] = "Hominin";
    Group[Group["Ape"] = 1] = "Ape";
    Group[Group["Cercopith"] = 2] = "Cercopith";
    Group[Group["Platyrrhine"] = 3] = "Platyrrhine";
    Group[Group["Tarsier"] = 4] = "Tarsier";
    Group[Group["Lemur_loris"] = 5] = "Lemur_loris";
})(Group || (Group = {}));
var Places;
(function (Places) {
    Places[Places["Europe"] = 0] = "Europe";
    Places[Places["Asia"] = 1] = "Asia";
    Places[Places["Africa"] = 2] = "Africa";
    Places[Places["Americas"] = 3] = "Americas";
})(Places || (Places = {}));
var Times;
(function (Times) {
    Times[Times["Miocene"] = 0] = "Miocene";
    Times[Times["Pliocene"] = 1] = "Pliocene";
    Times[Times["Pleistocene"] = 2] = "Pleistocene";
    Times[Times["Present"] = 3] = "Present";
})(Times || (Times = {}));
var Diets;
(function (Diets) {
    Diets[Diets["Fruit"] = 0] = "Fruit";
    Diets[Diets["Leaves"] = 1] = "Leaves";
    Diets[Diets["Nuts"] = 2] = "Nuts";
    Diets[Diets["Meat"] = 3] = "Meat";
    Diets[Diets["Fruit_and_leaves"] = 4] = "Fruit_and_leaves";
    Diets[Diets["Hard_dry_foods"] = 5] = "Hard_dry_foods";
    Diets[Diets["Omnivorous"] = 6] = "Omnivorous";
})(Diets || (Diets = {}));
var DentalFormula;
(function (DentalFormula) {
    DentalFormula[DentalFormula["D2133"] = 0] = "D2133";
    DentalFormula[DentalFormula["D2123"] = 1] = "D2123";
})(DentalFormula || (DentalFormula = {}));
var TeethType;
(function (TeethType) {
    TeethType[TeethType["RobustMolars"] = 0] = "RobustMolars";
    TeethType[TeethType["LargeCanines"] = 1] = "LargeCanines";
})(TeethType || (TeethType = {}));
var Pelvis;
(function (Pelvis) {
    Pelvis[Pelvis["Wide"] = 0] = "Wide";
    Pelvis[Pelvis["Tall"] = 1] = "Tall";
    Pelvis[Pelvis["Narrow"] = 2] = "Narrow";
})(Pelvis || (Pelvis = {}));
var Locomotion;
(function (Locomotion) {
    Locomotion[Locomotion["FacultativeBiped"] = 0] = "FacultativeBiped";
    Locomotion[Locomotion["ObligateBiped"] = 1] = "ObligateBiped";
    Locomotion[Locomotion["Quadrupedal"] = 2] = "Quadrupedal";
    Locomotion[Locomotion["KnuckleWalker"] = 3] = "KnuckleWalker";
})(Locomotion || (Locomotion = {}));
var Tails;
(function (Tails) {
    Tails[Tails["None"] = 0] = "None";
    Tails[Tails["Prehensile"] = 1] = "Prehensile";
    Tails[Tails["Normal"] = 2] = "Normal";
})(Tails || (Tails = {}));
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
