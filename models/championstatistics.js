/**
 * Created by holland on 4/9/2015.
 */
var mongoose = require('mongoose');

//var Timeline = new mongoose.Schema({
//    minute:Number,
//    visionWardsPlaced:Number,
//    sightWardsPlaced:Number,
//    yellowTrinketPlaced: Number,
//    jungleMinionsKilled:Number,
//    minionsKilled:Number,
//    level:Number,
//    totalGold:Number,
//    currentGold:Number
//});

//var RawData = new mongoose.Schema({
//
//});


var ChampionStatisticsSchema = new mongoose.Schema({
    id:String,
    name:String,
    role:String,
    tier:Number,

    assists:Number,
    kills:Number,
    deaths:Number,

    magicDamageTotal:Number,
    magicDamageChamp:Number,
    magicDamageTaken:Number,
    physicalDamageTotal:Number,
    physicalDamageChamp:Number,
    physicalDamageTaken:Number,
    heals:Number,

    wardsKilled:Number,
    wardsPlaced:Number,

    totalMinionsKilled:Number,
    neutralMinionsKilledEnemyJungle:Number,
    neutralMinionsKilledTeamJungle:Number,

    blue:[],
    red:[],
    visionWardsPlaced:[],
    sightWardsPlaced:[],
    yellowTrinketPlaced: [],
    jungleMinionsKilled:[],
    minionsKilled:[],
    level:[],
    totalGold:[],
    currentGold:[],

    turretBase:Number,
    turretInner:Number,
    turretOuter:Number,
    turretNexus:Number,
    inhibitor:Number,
    dragon:[],
    baron:[]


});

module.exports = mongoose.model('ChampionStatistics', ChampionStatisticsSchema);


