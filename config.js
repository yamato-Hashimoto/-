'use strict';
window.RAMEN_CONFIG = {
  LIMITS:{activeCustomers:24,orders:160,completedOrders:30,history:60,profiles:500,repairLog:30},
  VERSION: 25,
  KEY: 'yoizuki-ultimate-emoji-v25',
  MENUS: [
    {id:'shoyu',name:'宵月醤油',icon:'🍜',unlock:1,price:520,time:3,season:'all',need:{noodle:1,soup:1,negi:1}},
    {id:'shio',name:'星空塩',icon:'🍋',unlock:2,price:690,time:3,season:'all',need:{noodle:1,soup:1,nori:1}},
    {id:'miso',name:'雪国味噌',icon:'🍲',unlock:3,price:920,time:4,season:'冬',need:{noodle:1,soup:1,miso:1}},
    {id:'chashu',name:'満月チャーシュー',icon:'🥩',unlock:4,price:1280,time:5,season:'all',need:{noodle:1,soup:1,pork:2}},
    {id:'gyoza',name:'夜鳴き餃子',icon:'🥟',unlock:2,price:360,time:2,season:'all',need:{gyoza:1}},
    {id:'friedrice',name:'流星炒飯',icon:'🍚',unlock:3,price:740,time:3,season:'all',need:{rice:1,egg:1,negi:1}},
    {id:'cold',name:'涼月冷やし麺',icon:'🧊',unlock:5,price:980,time:3,season:'夏',need:{noodle:1,egg:1,negi:1}},
    {id:'spicy',name:'火星辛味噌',icon:'🌶️',unlock:6,price:1180,time:4,season:'冬',need:{noodle:1,soup:1,miso:1,spice:1}},
    {id:'seabura',name:'背脂醤油',icon:'🍜',research:'seabura',price:880,time:4,season:'all',need:{noodle:1,soup:1,pork:1}},
    {id:'special',name:'特製宵月',icon:'🍜',research:'special',price:1580,time:5,season:'all',need:{noodle:1,soup:1,pork:2,egg:1,nori:1}},
    {id:'yuzu',name:'柚子塩',icon:'🍋',research:'yuzu',price:1080,time:3,season:'all',need:{noodle:1,soup:1,nori:1,negi:1}}
  ],
  STAFF: [
    {id:'haru',name:'ハル',icon:'🧑‍🍳',role:'cook',roleName:'調理',base:900,shift:[20,2],skill:'醤油系の調理速度アップ'},
    {id:'mio',name:'ミオ',icon:'🧑‍💼',role:'serve',roleName:'接客',base:1400,shift:[21,4],skill:'接客満足度アップ'},
    {id:'tetsu',name:'テツ',icon:'👨‍🍳',role:'prep',roleName:'仕込み',base:2400,shift:[20,1],skill:'全調理速度アップ'},
    {id:'rin',name:'リン',icon:'🧑‍🎤',role:'promote',roleName:'宣伝',base:4200,shift:[22,3],skill:'来店率アップ'}
  ],
  CUSTOMERS: [
    {id:'office',label:'残業帰り',icon:'🧑‍💼',favorite:'shoyu',tip:1.00},
    {id:'worker',label:'夜勤明け',icon:'👷',favorite:'miso',tip:1.10},
    {id:'regular',label:'近所の常連候補',icon:'👵',favorite:'shio',tip:1.20},
    {id:'traveler',label:'旅人',icon:'🧳',favorite:'chashu',tip:1.30},
    {id:'streamer',label:'配信者',icon:'🧑‍💻',favorite:'friedrice',tip:1.10},
    {id:'musician',label:'音楽家',icon:'🎸',favorite:'gyoza',tip:1.15},
    {id:'driver',label:'運転手',icon:'🚕',favorite:'shoyu',tip:1.12}
  ],
  UPGRADES: [
    {id:'noodle',name:'もちもち麺',icon:'🍜',base:240,desc:'料理単価アップ'},
    {id:'soup',name:'秘伝スープ',icon:'🥣',base:360,desc:'評判と単価アップ'},
    {id:'seat',name:'丸椅子',icon:'🪑',base:550,desc:'着席可能人数アップ'},
    {id:'lantern',name:'赤提灯',icon:'🏮',base:780,desc:'来店率アップ'},
    {id:'decor',name:'店内装飾',icon:'🌿',base:1100,desc:'満足度とチップアップ'},
    {id:'kitchen',name:'厨房設備',icon:'🔥',base:1800,desc:'調理速度アップ'}
  ],
  INGREDIENTS: {
    noodle:['麺','🍜',25],soup:['スープ','🥣',30],negi:['ネギ','🌿',12],nori:['海苔','◼️',18],miso:['味噌','🫙',35],
    pork:['チャーシュー','🥩',55],gyoza:['餃子','🥟',45],rice:['米','🍚',28],egg:['味玉','🥚',22],spice:['辛味','🌶️',40]
  },
  SUPPLIERS: [
    {id:'market',name:'中央市場',unlock:1,cost:1.00,quality:1.00},
    {id:'noodleworks',name:'老舗製麺所',unlock:4,cost:1.25,quality:1.15},
    {id:'farm',name:'契約農家',unlock:7,cost:1.40,quality:1.30}
  ],
  WEATHER: [
    {name:'晴れ',icon:'🌙',traffic:1.00,revenue:1.00},
    {name:'雨',icon:'🌧️',traffic:.72,revenue:1.15},
    {name:'豪雨',icon:'⛈️',traffic:.45,revenue:1.30},
    {name:'雪',icon:'🌨️',traffic:.70,revenue:1.25},
    {name:'曇り',icon:'☁️',traffic:.90,revenue:1.00}
  ],
  EVENTS: [
    {name:'終電後ラッシュ',icon:'🚃',text:'客足が大幅アップ',traffic:1.8,revenue:1.0},
    {name:'地元誌に掲載',icon:'📰',text:'客足と売上がアップ',traffic:1.35,revenue:1.5},
    {name:'食材高騰',icon:'📈',text:'仕入価格が上昇',traffic:1.0,revenue:.95,cost:1.5},
    {name:'満月の夜',icon:'🌕',text:'売上が上昇',traffic:1.25,revenue:1.25},
    {name:'常連の差し入れ',icon:'🎁',text:'食材を少し補充',traffic:1.0,revenue:1.10,gift:3}
  ],
  RESEARCH: [
    {id:'seabura',name:'背脂醤油',icon:'🧪',level:3,cost:5000,type:'recipe',desc:'背脂醤油を解放'},
    {id:'special',name:'特製宵月',icon:'🧪',level:6,cost:14000,type:'recipe',parent:'seabura',desc:'特製宵月を解放'},
    {id:'yuzu',name:'柚子塩',icon:'🧪',level:8,cost:24000,type:'recipe',desc:'柚子塩を解放'},
    {id:'speed',name:'高速湯切り',icon:'⚡',level:10,cost:30000,type:'speed',desc:'調理速度+20%'},
    {id:'service',name:'おもてなし術',icon:'✨',level:12,cost:38000,type:'service',desc:'満足度+15'},
    {id:'offline',name:'夜間仕込み',icon:'🌙',level:15,cost:52000,type:'offline',desc:'オフライン効率アップ'}
  ],
  ACHIEVEMENTS: [
    ['first','はじめの一杯','bowls',1],['hundred','百杯店主','bowls',100],['thousand','深夜の名店','bowls',1000],
    ['tenk','一万杯の夜','bowls',10000],['rich','小さな成功','total',100000],['million','百万の暖簾','total',1000000],
    ['legend','夜の伝説','rep',5],['regular','顔なじみ','regularCount',5],
    ['century','百夜営業','night',100],['research','研究者','researchCount',6],['prestige','初めての暖簾分け','prestige',1],['master','百夜城の主','shopLv',100],['empire','月下帝国','shopLv',150],['manyregulars','常連百人','regularCount',100]
  ],
  STAGES: [['夜鳴き屋台',1],['小さなカウンター店',5],['地元の人気店',15],['深夜の名店',30],['伝説の宵月',50],['宵月 総本山',75],['百夜城 宵月',100],['月下帝国 宵月',150]],
  NAMES: ['田中','佐藤','鈴木','高橋','伊藤','渡辺','山本','中村','小林','加藤','吉田','山田','松本','井上','木村','林','斎藤','清水','山口','森'],
  DIALOGUES: ['今日も遅くなったな…','いつものお願い！','ここのスープ、落ち着くなあ','雨の夜はラーメンだね','明日も頑張れそうだ','昔は小さな屋台だったよね'],
  DEFAULT: {
    money:3000,total:3000,bowls:0,rep:1,night:1,minute:0,day:1,season:0,weather:0,shopLv:1,xp:0,prestige:0,
    up:{noodle:1,soup:1,seat:4,lantern:0,decor:0,kitchen:1},staff:{},staffState:{},
    inventory:{noodle:30,soup:30,negi:30,nori:12,miso:10,pork:12,gyoza:12,rice:12,egg:16,spice:5},
    inventoryValue:{noodle:750,soup:900,negi:360,nori:216,miso:350,pork:660,gyoza:540,rice:336,egg:352,spice:200},
    supplier:'market',profiles:{},customers:[],orders:[],research:[],
    daily:{revenue:0,cost:0,wages:0,rent:0,utilities:0,customers:0,satisfaction:0,count:0},history:[],ach:[],encyclopedia:{customers:[],recipes:['shoyu'],events:[]},
    event:null,eventLeft:0,last:Date.now(),saved:Date.now(),settings:{sound:true,volume:.5,bgm:.18,ambient:.2,reduced:false},stats:{manual:0,rejected:0,events:0,totalWait:0,servedCustomers:0,cookCounts:{},cookRevenue:{},cookSatisfaction:{},customerTypeVisits:{},eventCounts:{},firstSeen:{customers:{},recipes:{},events:{}},lastSeen:{customers:{},events:{}},staffWork:{},repairLog:[],offline:{sessions:0,seconds:0,sales:0,revenue:0,cost:0},debt:0}
  }
};
