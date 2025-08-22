import React, { useState, useEffect } from 'react';

function BestiaryWidget() {
  const monsters = [
    { name: 'Abaya', description: 'Vodní příšera podobná utopci, obývá močály a řeky. Je rychlá a útočí drápy.', weaknesses: 'Igni, Necrophage Oil, Quen', category: 'Necrophages'},
    { name: 'Alghoul', description: 'Silnější varianta ghúla, větší a agresivnější, často vůdce smečky.', weaknesses: 'Necrophage Oil, Axii, Quen', category: 'Necrophages'},
    { name: 'Allgod', description: 'Tajuplné stvoření uctívané jako bůh, manipuluje myslí obětí.', weaknesses: 'Igni, Relict Oil, Quen', category: 'Relicts'},
    { name: 'Alp', description: 'Ženský upír, rychlý a smrtelný, útočí drápy a křikem.', weaknesses: 'Vampire Oil, Black Blood, Igni', category: 'Vampires'},
    { name: 'Alpha Garkain', description: 'Silnější varianta garkainu, extrémně rychlý upír s jedovatými útoky.', weaknesses: 'Vampire Oil, Black Blood, Quen', category: 'Vampires'},
    { name: 'The Apiarian Phantom', description: 'Duch včelího roje, útočí jedovatými žihadly.', weaknesses: 'Insectoid Oil, Igni, Aard', category: 'Relicts'},
    { name: 'Arachas', description: 'Obří pavouk s tvrdou skořápkou, útočí jedem a sítí.', weaknesses: 'Insectoid Oil, Golden Oriole, Igni', category: 'Insectoids'},
    { name: 'Arachnomorph', description: 'Menší, ale rychlí pavouci, kteří útočí ze zálohy.', weaknesses: 'Insectoid Oil, Aard, Igni', category: 'Insectoids'},
    { name: 'Archespore', description: 'Rostlinná příšera, která střílí jedovaté spory.', weaknesses: 'Igni, Relict Oil, Quen', category: 'Relicts'},
    { name: 'Armored Arachas', description: 'Silně pancéřovaná varianta arachase, odolnější vůči útoku.', weaknesses: 'Insectoid Oil, Golden Oriole, Aard', category: 'Insectoids'},
    { name: 'Barghest', description: 'Duchovní psi, kteří útočí v smečkách a způsobují strach.', weaknesses: 'Specter Oil, Quen, Igni', category: 'Specters'},
    { name: 'Basilisk', description: 'Drakonid s jedovatým dechem a silnými drápy.', weaknesses: 'Draconid Oil, Aard, Quen', category: 'Draconids'},
    { name: 'Beann’shie', description: 'Duch ženy s pronikavým křikem, útočí magií.', weaknesses: 'Specter Oil, Yrden, Quen', category: 'Specters'},
    { name: 'Bear', description: 'Mohutný medvěd s vysokou výdrží a silnými údery.', weaknesses: 'Beast Oil, Quen, Igni', category: 'Beasts'},
    { name: 'Berserker', description: 'Člověk proměněný v medvěda kletbou, velmi agresivní.', weaknesses: 'Cursed Oil, Quen, Igni', category: 'Cursed Ones'},
    { name: 'Big Bad Wolf', description: 'Inteligentní vlk z pohádkové země, rychlý a silný.', weaknesses: 'Beast Oil, Igni, Aard', category: 'Beasts'},
    { name: 'Botchling', description: 'Duch nenarozeného dítěte, slabý, ale nebezpečný v boji.', weaknesses: 'Cursed Oil, Axii, Quen', category: 'Cursed Ones'},
    { name: 'Bruxa', description: 'Upírka s hypnotickým křikem a rychlými útoky.', weaknesses: 'Vampire Oil, Black Blood, Igni', category: 'Vampires'},
    { name: 'The Bruxa of Corvo Bianco', description: 'Unikátní bruxa z Toussaint, extrémně smrtelná.', weaknesses: 'Vampire Oil, Black Blood, Quen', category: 'Vampires'},
    { name: 'Chort', description: 'Menší příbuzný fienda, rychlý a silný s hypnotickými schopnostmi.', weaknesses: 'Relict Oil, Quen, Igni', category: 'Relicts'},
    { name: 'Cloud Giant', description: 'Obří tvor z pohádkové země, silný, ale pomalý.', weaknesses: 'Ogroid Oil, Quen, Aard', category: 'Ogroids'},
    { name: 'Cockatrice', description: 'Drakonid s kamenným pohledem a rychlými křídly.', weaknesses: 'Draconid Oil, Aard, Grapeshot', category: 'Draconids'},
    { name: 'Crones', description: 'Tři mocné čarodějnice z Velen, manipulují magií a osudem.', weaknesses: 'Relict Oil, Quen, Igni', category: 'Relicts'},
    { name: 'Cyclops', description: 'Obří tvor s jedním okem, silný, ale pomalý.', weaknesses: 'Ogroid Oil, Axii, Quen', category: 'Ogroids'},
    { name: 'Cursed Mother', description: 'Prokletá žena proměněná v monstrum, útočí drápy.', weaknesses: 'Cursed Oil, Quen, Igni', category: 'Cursed Ones'},
    { name: 'Daphne', description: 'Wraith z Toussaint spojená s tragickým příběhem.', weaknesses: 'Specter Oil, Yrden, Quen', category: 'Specters'},
    { name: 'Devil by the Well', description: 'Noonwraith vázaná na studnu, útočí magií.', weaknesses: 'Specter Oil, Yrden, Quen', category: 'Specters'},
    { name: 'Djinn', description: 'Mocný elementální duch, ovládá magii a přání.', weaknesses: 'Elementa Oil, Dimeritium Bomb, Quen', category: 'Elementa'},
    { name: 'Dog', description: 'Divoký pes útočící v smečkách, rychlý, ale slabý.', weaknesses: 'Beast Oil, Igni, Aard', category: 'Beasts'},
    { name: 'Drowner', description: 'Vodní zombie obývající močály, útočí v skupinách.', weaknesses: 'Necrophage Oil, Igni, Quen', category: 'Necrophages'},
    { name: 'Drowned Dead', description: 'Silnější varianta drownera, odolnější a agresivnější.', weaknesses: 'Necrophage Oil, Igni, Quen', category: 'Necrophages'},
    { name: 'Earth Elemental', description: 'Pomalý, ale odolný tvor z kamenů a hlíny.', weaknesses: 'Elementa Oil, Dimeritium Bomb, Aard', category: 'Elementa'},
    { name: 'Ekimmara', description: 'Upír s rychlými útoky a regenerací zdraví.', weaknesses: 'Vampire Oil, Black Blood, Igni', category: 'Vampires'},
    { name: 'Endrega Drone', description: 'Drobný hmyzoidní tvor, útočí v rojích.', weaknesses: 'Insectoid Oil, Igni, Aard', category: 'Insectoids'},
    { name: 'Endrega Warrior', description: 'Silnější endrega, útočí jedem a drápy.', weaknesses: 'Insectoid Oil, Golden Oriole, Igni', category: 'Insectoids'},
    { name: 'Endrega Worker', description: 'Pracovní kasta endreg, slabší, ale rychlá.', weaknesses: 'Insectoid Oil, Igni, Aard', category: 'Insectoids'},
    { name: 'Erynia', description: 'Harpyje s rychlými křídly a drápy.', weaknesses: 'Hybrid Oil, Aard, Grapeshot', category: 'Hybrids'},
    { name: 'Fiend', description: 'Obrovský tvor s hypnotickými schopnostmi a silnými údery.', weaknesses: 'Relict Oil, Samum Bomb, Quen', category: 'Relicts'},
    { name: 'Fire Elemental', description: 'Ohnivý elementál, který zapaluje vše kolem.', weaknesses: 'Elementa Oil, Northern Wind, Aard', category: 'Elementa'},
    { name: 'Fleder', description: 'Nižší upír, rychlý a útočí drápy.', weaknesses: 'Vampire Oil, Black Blood, Igni', category: 'Vampires'},
    { name: 'Foglet', description: 'Močálový duch, který se ukrývá v mlze.', weaknesses: 'Necrophage Oil, Quen, Igni', category: 'Necrophages'},
    { name: 'Forktail', description: 'Drakonid s ocasem, který používá k útoku.', weaknesses: 'Draconid Oil, Aard, Grapeshot', category: 'Draconids'},
    { name: 'Fugas', description: 'Unikátní lesní tvor spojený s Crones, silný a magický.', weaknesses: 'Relict Oil, Quen, Igni', category: 'Relicts'},
    { name: 'Gael', description: 'Spektrální tvor, který útočí psychickými útoky.', weaknesses: 'Specter Oil, Yrden, Quen', category: 'Specters'},
    { name: 'Gargoyle', description: 'Kamenný tvor oživený magií, odolný vůči útoku.', weaknesses: 'Elementa Oil, Dimeritium Bomb, Quen', category: 'Elementa'},
    { name: 'Garkain', description: 'Upír s paralyzujícím pachem a rychlými útoky.', weaknesses: 'Vampire Oil, Black Blood, Igni', category: 'Vampires'},
    { name: 'Ghoul', description: 'Požirač mrtvol útočící v smečkách, běžný na bojištích.', weaknesses: 'Necrophage Oil, Igni, Quen', category: 'Necrophages'},
    { name: 'Giant Centipede', description: 'Obří stonožka s jedovatými čelistmi a rychlým pohybem.', weaknesses: 'Insectoid Oil, Yrden, Igni', category: 'Insectoids'},
    { name: 'Godling', description: 'Malý duch domácnosti, obvykle neškodný, ale mazaný.', weaknesses: 'Relict Oil, Axii, Quen', category: 'Relicts'},
    { name: 'Golem', description: 'Magicky oživený kamenný tvor, velmi odolný.', weaknesses: 'Elementa Oil, Dimeritium Bomb, Quen', category: 'Elementa'},
    { name: 'Golyat', description: 'Obří ogroid z Toussaint, silný, ale pomalý.', weaknesses: 'Ogroid Oil, Quen, Aard', category: 'Ogroids'},
    { name: 'Grave Hag', description: 'Nekrofág s dlouhým jazykem, útočí z hřbitovů.', weaknesses: 'Necrophage Oil, Yrden, Quen', category: 'Necrophages'},
    { name: 'Griffin', description: 'Mohutný tvor s tělem lva a hlavou orla, útočí ze vzduchu.', weaknesses: 'Hybrid Oil, Aard, Grapeshot Bomb', category: 'Hybrids'},
    { name: 'Grottore', description: 'Jeskyňní tvor s jedovatými útoky, rychlý a agresivní.', weaknesses: 'Insectoid Oil, Golden Oriole, Igni', category: 'Insectoids'},
    { name: 'Hagubman', description: 'Močálový tvor, který láká oběti do bažin.', weaknesses: 'Necrophage Oil, Igni, Quen', category: 'Necrophages'},
    { name: 'Harpy', description: 'Létající tvor s ostrými drápy, útočí ze vzduchu.', weaknesses: 'Hybrid Oil, Aard, Grapeshot', category: 'Hybrids'},
    { name: 'Higher Vampire', description: 'Mocný upír s nadlidskou silou a inteligencí.', weaknesses: 'Vampire Oil, Black Blood, Igni', category: 'Vampires'},
    { name: 'Hounds of the Wild Hunt', description: 'Spektrální psi Divokého honu, rychlí a agresivní.', weaknesses: 'Specter Oil, Igni, Quen', category: 'Specters'},
    { name: 'Howler', description: 'Unikátní chort spojený s kletbou, velmi silný.', weaknesses: 'Relict Oil, Quen, Igni', category: 'Relicts'},
    { name: 'Hym', description: 'Spektrální tvor, který se živí vinou obětí.', weaknesses: 'Specter Oil, Yrden, Quen', category: 'Specters'},
    { name: 'Ice Elemental', description: 'Ledový elementál, odolný a útočí mrazem.', weaknesses: 'Elementa Oil, Igni, Dimeritium Bomb'},
    { name: 'Ice Giant', description: 'Obří tvor z ledu, silný a odolný.', weaknesses: 'Ogroid Oil, Quen, Igni', category: 'Ogroids'},
    { name: 'Ice Troll', description: 'Trol z chladných oblastí, odolný vůči chladu.', weaknesses: 'Ogroid Oil, Igni, Quen', category: 'Ogroids'},
    { name: 'Ifrit', description: 'Ohnivý elementál spojený s magií, velmi nebezpečný.', weaknesses: 'Elementa Oil, Northern Wind, Aard', category: 'Elementa'},
    { name: 'Ignis Fatuus', description: 'Močálový duch, který láká oběti do mlhy.', weaknesses: 'Necrophage Oil, Quen, Igni', category: 'Necrophages'},
    { name: 'Imp', description: 'Malý démonický tvor, rychlý, ale slabý.', weaknesses: 'Relict Oil, Igni, Aard', category: 'Relicts'},
    { name: 'Jenny o’ the Woods', description: 'Mocná nightwraith s tragickým příběhem.', weaknesses: 'Specter Oil, Yrden, Quen', category: 'Specters'},
    { name: 'Katakan', description: 'Vyšší upír s hypnotickými schopnostmi.', weaknesses: 'Vampire Oil, Black Blood, Igni', category: 'Vampires'},
    { name: 'Kernun', description: 'Starobylý leshen, který ovládá lesní zvířata.', weaknesses: 'Relict Oil, Igni, Dimeritium Bomb', category: 'Relicts'},
    { name: 'Kikimore Warrior', description: 'Silný hmyzoidní tvor, útočí v skupinách.', weaknesses: 'Insectoid Oil, Golden Oriole, Igni', category: 'Insectoids'},
    { name: 'Kikimore Worker', description: 'Slabší kasta kikimor, rychlá a jedovatá.', weaknesses: 'Insectoid Oil, Igni, Aard', category: 'Insectoids'},
    { name: 'Leshen', description: 'Lesní duch s antlerovou hlavou, ovládá kořeny a zvířata.', weaknesses: 'Relict Oil, Igni, Dimeritium Bomb', category: 'Relicts'},
    { name: 'Longlocks', description: 'Wraith s dlouhými vlasy, spojená s pohádkovou zemí.', weaknesses: 'Specter Oil, Yrden, Quen', category: 'Specters'},
    { name: 'Mad Kiyan', description: 'Prokletý zaklínač proměněný v monstrum.', weaknesses: 'Cursed Oil, Quen, Igni', category: 'Cursed Ones'},
    { name: 'Melusine', description: 'Siréna s mocným hlasem, útočí ze vzduchu.', weaknesses: 'Hybrid Oil, Aard, Grapeshot', category: 'Hybrids'},
    { name: 'Moreau’s Golem', description: 'Unikátní golem vytvořený magií, velmi odolný.', weaknesses: 'Elementa Oil, Dimeritium Bomb, Quen', category: 'Elementa'},
    { name: 'Morkvarg', description: 'Prokletý vlkodlak, který se regeneruje.', weaknesses: 'Cursed Oil, Igni, Quen', category: 'Cursed Ones'},
    { name: 'Morvudd', description: 'Fiend s hypnotickými schopnostmi, velmi silný.', weaknesses: 'Relict Oil, Samum Bomb, Quen', category: 'Relicts'},
    { name: 'Mourntart', description: 'Grave hag, která požírá mrtvé, útočí jazykem.', weaknesses: 'Necrophage Oil, Yrden, Quen', category: 'Necrophages'},
    { name: 'Nekker', description: 'Malý tvor podobný skřetovi, útočí v rojích.', weaknesses: 'Ogroid Oil, Northern Wind, Igni', category: 'Ogroids'},
    { name: 'Nightwraith', description: 'Noční duch ženy, útočí magií a křikem.', weaknesses: 'Specter Oil, Yrden, Quen', category: 'Specters'},
    { name: 'Noonwraith', description: 'Denní duch ženy, vázaný na tragédii.', weaknesses: 'Specter Oil, Yrden, Quen', category: 'Specters'},
    { name: 'Old Speartip', description: 'Mocný kyklop, velmi odolný a agresivní.', weaknesses: 'Ogroid Oil, Quen, Aard', category: 'Ogroids'},
    { name: 'Opinicus', description: 'Vzácný griffin s magickými schopnostmi.', weaknesses: 'Hybrid Oil, Aard, Grapeshot', category: 'Hybrids'},
    { name: 'Pale Widow', description: 'Obří stonožka s jedovatými čelistmi.', weaknesses: 'Insectoid Oil, Yrden, Igni', category: 'Insectoids'},
    { name: 'Panther', description: 'Rychlá šelma, která útočí ze zálohy.', weaknesses: 'Beast Oil, Igni, Aard', category: 'Beasts'},
    { name: 'Penitent', description: 'Wraith spojená s trestem, útočí magií.', weaknesses: 'Specter Oil, Yrden, Quen', category: 'Specters'},
    { name: 'Pesta', description: 'Plague maiden šířící nemoci, velmi nebezpečná.', weaknesses: 'Specter Oil, Yrden, Quen', category: 'Specters'},
    { name: 'Phantom of the Amphitheater', description: 'Spektrální duch vázaný na divadlo.', weaknesses: 'Specter Oil, Yrden, Quen', category: 'Specters'},
    { name: 'Plague Maiden', description: 'Duch šířící mor, útočí magickými kouzly.', weaknesses: 'Specter Oil, Yrden, Quen', category: 'Specters'},
    { name: 'Protofleder', description: 'Primitivní upír, rychlý a agresivní.', weaknesses: 'Vampire Oil, Black Blood, Igni', category: 'Vampires'},
    { name: 'Rock Troll', description: 'Trol s tvrdou kůží, útočí silnými údery.', weaknesses: 'Ogroid Oil, Quen, Aard', category: 'Ogroids'},
    { name: 'Rotfiend', description: 'Nekrofág, který exploduje při smrti.', weaknesses: 'Necrophage Oil, Quen, Igni', category: 'Necrophages'},
    { name: 'Royal Wyvern', description: 'Silnější varianta wyverny, rychlá a smrtelná.', weaknesses: 'Draconid Oil, Aard, Grapeshot', category: 'Draconids'},
    { name: 'Salma', description: 'Unikátní succubus s kouzly a rychlými útoky.', weaknesses: 'Hybrid Oil, Quen, Igni', category: 'Hybrids'},
    { name: 'Sandcrabs', description: 'Píseční krabi útočící v rojích, rychlí a jedovatí.', weaknesses: 'Insectoid Oil, Igni, Aard', category: 'Insectoids'},
    { name: 'Sarasti', description: 'Mocná upírka s hypnotickými schopnostmi.', weaknesses: 'Vampire Oil, Black Blood, Igni', category: 'Vampires'},
    { name: 'Scurver', description: 'Varianta rotfienda s ostny, exploduje při smrti.', weaknesses: 'Necrophage Oil, Quen, Igni', category: 'Necrophages'},
    { name: 'Shaelmaar', description: 'Podzemní tvor, který se valí jako koule.', weaknesses: 'Relict Oil, Aard, Quen', category: 'Relicts'},
    { name: 'Shaelmaar from the Emperor of Nilfgaard', description: 'Unikátní shaelmaar, velmi odolný.', weaknesses: 'Relict Oil, Aard, Quen', category: 'Relicts'},
    { name: 'Shrieker', description: 'Drakonid s pronikavým křikem, útočí ze vzduchu.', weaknesses: 'Draconid Oil, Aard, Grapeshot', category: 'Draconids'},
    { name: 'Silver Basilisk', description: 'Vzácný basilisk s tvrdými šupinami.', weaknesses: 'Draconid Oil, Aard, Grapeshot', category: 'Draconids'},
    { name: 'Siren', description: 'Mořská panna lákající oběti svým zpěvem.', weaknesses: 'Hybrid Oil, Aard, Igni', category: 'Hybrids'},
    { name: 'Slyzard', description: 'Ohnivý drakonid, útočí ohněm a ocasem.', weaknesses: 'Draconid Oil, Aard, Grapeshot', category: 'Draconids'},
    { name: 'Slyzard Matriarch', description: 'Mocná samice slyzarda, velmi nebezpečná.', weaknesses: 'Draconid Oil, Aard, Grapeshot', category: 'Draconids'},
    { name: 'Spoon Collector', description: 'Spotted wight, která sbírá lžíce, útočí magií.', weaknesses: 'Cursed Oil, Yrden, Quen', category: 'Cursed Ones'},
    { name: 'Spriggan', description: 'Lesní tvor podobný leshenovi, ovládá rostliny.', weaknesses: 'Relict Oil, Igni, Dimeritium Bomb', category: 'Relicts'},
    { name: 'Succubus', description: 'Demonická žena lákající oběti svým kouzlem.', weaknesses: 'Hybrid Oil, Quen, Igni', category: 'Hybrids'},
    { name: 'The Dragon of Fyresdal', description: 'Unikátní drakonid, velmi silný a ohnivý.', weaknesses: 'Draconid Oil, Aard, Grapeshot', category: 'Draconids'},
    { name: 'The Monster of Tufo', description: 'Podzemní příšera, útočí jedem a drápy.', weaknesses: 'Insectoid Oil, Golden Oriole, Igni', category: 'Insectoids'},
    { name: 'The White Lady', description: 'Mocná noonwraith spojená s tragédií.', weaknesses: 'Specter Oil, Yrden, Quen', category: 'Specters'},
    { name: 'Therazane', description: 'Zemský elementál, velmi odolný a silný.', weaknesses: 'Elementa Oil, Dimeritium Bomb, Quen', category: 'Elementa'},
    { name: 'Three Little Pigs', description: 'Pohádková prasata, útočí jako divoké kance.', weaknesses: 'Beast Oil, Igni, Aard', category: 'Beasts'},
    { name: 'Ulle the Unlucky', description: 'Duch bojovníka, který se neustále vrací.', weaknesses: 'Specter Oil, Yrden, Quen', category: 'Specters'},
    { name: 'Umbra', description: 'Temný duch spojený s kletbami.', weaknesses: 'Specter Oil, Yrden, Quen', category: 'Specters'},
    { name: 'Venomous Arachas', description: 'Jedovatá varianta arachase, velmi nebezpečná.', weaknesses: 'Insectoid Oil, Golden Oriole, Igni', category: 'Insectoids'},
    { name: 'Werewolf', description: 'Vlkodlak s rychlými útoky a regenerací zdraví.', weaknesses: 'Cursed Oil, Moon Dust, Igni', category: 'Cursed Ones'},
    { name: 'Wham-a-Wham', description: 'Silný rock troll, útočí mohutnými údery.', weaknesses: 'Ogroid Oil, Quen, Aard', category: 'Ogroids'},
    { name: 'Wicked Witch', description: 'Čarodějnice z pohádkové země, útočí magií.', weaknesses: 'Relict Oil, Quen, Igni', category: 'Relicts'},
    { name: 'Wight', description: 'Prokletý tvor, který útočí magickými kletbami.', weaknesses: 'Cursed Oil, Yrden, Quen', category: 'Cursed Ones'},
    { name: 'Wolf', description: 'Divoký vlk útočící v smečkách, rychlý, ale slabý.', weaknesses: 'Beast Oil, Igni, Aard', category: 'Beasts'},
    { name: 'Woodland Spirit', description: 'Starobylý leshen s mocnějšími schopnostmi.', weaknesses: 'Relict Oil, Igni, Dimeritium Bomb', category: 'Relicts'},
    { name: 'Wraith', description: 'Duch zemřelého, útočí magií a teleportací.', weaknesses: 'Specter Oil, Yrden, Quen', category: 'Specters'},
    { name: 'Wyvern', description: 'Drakonid s rychlými útoky a jedovatým ocasem.', weaknesses: 'Draconid Oil, Aard, Grapeshot', category: 'Draconids'},
    { name: 'Witch of Lynx Crag', description: 'Čarodějnice s magickými útoky a panterem.', weaknesses: 'Relict Oil, Quen, Igni', category: 'Relicts'},
  ];

  const categories = ['Vše', ...new Set(monsters.map(monster => monster.category))];
  const [selectedCategory, setSelectedCategory] = useState('Vše');
  const [currentMonster, setCurrentMonster] = useState(monsters[0]);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favoriteMonsters');
    return saved ? JSON.parse(saved) : [];
  });

  const filteredMonsters = selectedCategory === 'Vše'
    ? monsters
    : monsters.filter(monster => monster.category === selectedCategory);

  useEffect(() => {
    localStorage.setItem('favoriteMonsters', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = () => {
    if (!favorites.some(fav => fav.name === currentMonster.name)) {
      setFavorites([...favorites, currentMonster]);
    }
  };

  const removeFromFavorites = (name) => {
    setFavorites(favorites.filter(fav => fav.name !== name));
  };

  return (
    <div
      style={{
        backgroundColor: '#2b1e16',
        color: '#e0d8c3',
        padding: '1rem',
        borderRadius: '8px',
        border: '2px solid #d4a017',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
        fontFamily: "'Mystery Quest', cursive",
        maxWidth: '100%',
        boxSizing: 'border-box',
      }}
    >
      <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.5rem', color: '#d4a017', textAlign: 'center' }}>
        Bestiář Zaklínače ⚔️
      </h2>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        style={{
          backgroundColor: '#3c2f2f',
          color: '#e0d8c3',
          border: '1px solid #d4a017',
          borderRadius: '4px',
          padding: '0.5rem',
          fontFamily: "'Mystery Quest', cursive",
          fontSize: '1rem',
          marginBottom: '0.5rem',
          width: '100%',
        }}
      >
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <img
        src={currentMonster.imageUrl || 'https://via.placeholder.com/150?text=No+Image'}
        alt={`${currentMonster.name} image`}
        style={{
          width: '100%',
          maxHeight: '150px',
          objectFit: 'contain',
          borderRadius: '4px',
          marginBottom: '0.5rem',
        }}
      />
      <h3 style={{ margin: '0.5rem 0', fontSize: '1.2rem', color: '#e0d8c3' }}>{currentMonster.name}</h3>
      <p style={{ margin: '0.5rem 0', fontSize: '1rem', color: '#e0d8c3', lineHeight: '1.4' }}>
        {currentMonster.description}
      </p>
      <p style={{ margin: '0.5rem 0 1rem', fontSize: '1rem', color: '#e0d8c3', fontStyle: 'italic' }}>
        <strong>Slabiny:</strong> {currentMonster.weaknesses}
      </p>
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
        <button
          onClick={() => {
            const randomIndex = Math.floor(Math.random() * filteredMonsters.length);
            setCurrentMonster(filteredMonsters[randomIndex]);
          }}
          style={{
            backgroundColor: '#8b0000',
            color: '#e0d8c3',
            border: '1px solid #d4a017',
            borderRadius: '4px',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            fontFamily: "'Mystery Quest', cursive",
            fontSize: '1rem',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#a11212')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#8b0000')}
        >
          Nová příšera
        </button>
        <button
          onClick={addToFavorites}
          style={{
            backgroundColor: '#3c2f2f',
            color: '#e0d8c3',
            border: '1px solid #d4a017',
            borderRadius: '4px',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            fontFamily: "'Mystery Quest', cursive",
            fontSize: '1rem',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#4b3b3b')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#3c2f2f')}
        >
          Přidat do deníku
        </button>
      </div>
      {favorites.length > 0 && (
        <div style={{ marginTop: '1rem' }}>
          <h4 style={{ margin: '0.5rem 0', fontSize: '1.1rem', color: '#d4a017' }}>Oblíbené příšery</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {favorites.map(fav => (
              <li
                key={fav.name}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.3rem 0',
                  fontSize: '0.9rem',
                  color: '#e0d8c3',
                }}
              >
                <span>{fav.name}</span>
                <button
                  onClick={() => removeFromFavorites(fav.name)}
                  style={{
                    backgroundColor: '#8b0000',
                    color: '#e0d8c3',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '0.2rem 0.5rem',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = '#a11212')}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = '#8b0000')}
                >
                  Odebrat
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
     
    </div>
  );
}

export default BestiaryWidget;