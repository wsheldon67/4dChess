var config = {
    'size':[3,3,5,5],
    'dimCombos':[[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]],
    'default':'Spread',
    'displayOrder':['pawn','rook','bishop','unicorn','knight','snowman','king','elderly king','peaceful king','elderly peaceful king','queen','ghost','star','telephone','turncoat','empress'],
    'star':{'spaces':4},
    'turncoat':'slowboi',
    'numOfPieces':20,
    'random':{
        'pawn':10,
        'rook':2,
        'bishop':2,
        'unicorn':2,
        'knight':2,
        'snowman':2,
        'queen':1,
        'ghost':2,
        'star':1,
        'telephone':1,
        'empress':1
    },
    'highlight':{
        'w':'#ffffb3',
        'b':'#999999',
        'o':'#ffffb3',
        'threat':'#ff8080',
        'moves':'#92cbdd',
        'alt':'#faf2db',
        'nextMoves':'#ebf5f9',
    },'orientation':[0,1,2,3],
    'showNextMoves':false,
}
var create = {'team':{}};
create.team.Spread = function(){
    config.size = [3,3,5,5];
    config.displayOrder = ['pawn','rook','bishop','unicorn','knight','king','queen','ghost'];
    config.orientation = [0,1,2,3];
    // 1,1
    board[[1,1,4,1]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[1,1,4,2]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[1,1,4,3]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[1,1,0,1]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[1,1,0,2]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[1,1,0,3]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    // 0,1
    board[[0,1,4,1]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[0,1,3,2]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[0,1,4,3]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[0,1,4,2]] = {'piece':'knight','team':'b'};
    board[[0,1,0,1]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[0,1,1,2]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[0,1,0,3]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[0,1,0,2]] = {'piece':'knight','team':'w'};
    // 2,1
    board[[2,1,4,1]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[2,1,3,2]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[2,1,4,3]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[2,1,4,2]] = {'piece':'knight','team':'b'};
    board[[2,1,0,1]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[2,1,1,2]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[2,1,0,3]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[2,1,0,2]] = {'piece':'knight','team':'w'};
    // 1,0
    board[[1,0,4,1]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[1,0,4,2]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[1,0,4,3]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[1,0,0,1]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[1,0,1,2]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[1,0,0,3]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[1,0,0,2]] = {'piece':'king','team':'w'};
    // 1,2
    board[[1,2,4,1]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[1,2,3,2]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[1,2,4,3]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[1,2,4,2]] = {'piece':'king','team':'b'};
    board[[1,2,0,1]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[1,2,0,2]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[1,2,0,3]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    // 0,2
    board[[0,2,4,1]] = {'piece':'rook','team':'b'};
    board[[0,2,4,2]] = {'piece':'queen','team':'b'};
    board[[0,2,4,3]] = {'piece':'unicorn','team':'b'};
    board[[0,2,3,2]] = {'piece':'bishop','team':'b'};
    // 2,2
    board[[2,2,4,1]] = {'piece':'rook','team':'b'};
    board[[2,2,4,2]] = {'piece':'ghost','team':'b'};
    board[[2,2,4,3]] = {'piece':'unicorn','team':'b'};
    board[[2,2,3,3]] = {'piece':'bishop','team':'b'};
    // 0,0
    board[[0,0,0,3]] = {'piece':'rook','team':'w'};
    board[[0,0,0,2]] = {'piece':'ghost','team':'w'};
    board[[0,0,0,1]] = {'piece':'unicorn','team':'w'};
    board[[0,0,1,1]] = {'piece':'bishop','team':'w'};
    // 2,0
    board[[2,0,0,3]] = {'piece':'rook','team':'w'};
    board[[2,0,0,2]] = {'piece':'queen','team':'w'};
    board[[2,0,0,1]] = {'piece':'unicorn','team':'w'};
    board[[2,0,1,2]] = {'piece':'bishop','team':'w'};
}
create.team['Spread - Extra Pieces'] = function(){
    config.size = [3,3,5,5];
    config.displayOrder = ['pawn','rook','bishop','unicorn','knight','king','queen','ghost','turncoat','star','snowman','empress'];
    config.turncoat = 'slowboi';
    config.orientation = [0,1,2,3];
    // 1,1
    board[[1,1,4,1]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[1,1,4,2]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[1,1,4,3]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[1,1,0,1]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[1,1,0,2]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[1,1,0,3]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[1,1,2,2]] = {'piece':'turncoat','team':'o'};
    // 0,1
    board[[0,1,4,1]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[0,1,3,2]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[0,1,4,3]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[0,1,4,2]] = {'piece':'knight','team':'b'};
    board[[0,1,0,1]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[0,1,1,2]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[0,1,0,3]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[0,1,0,2]] = {'piece':'knight','team':'w'};
    // 2,1
    board[[2,1,4,1]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[2,1,3,2]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[2,1,4,3]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[2,1,4,2]] = {'piece':'knight','team':'b'};
    board[[2,1,0,1]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[2,1,1,2]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[2,1,0,3]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[2,1,0,2]] = {'piece':'knight','team':'w'};
    // 1,0
    board[[1,0,4,1]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[1,0,4,2]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[1,0,4,3]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[1,0,0,1]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[1,0,1,2]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[1,0,0,3]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[1,0,0,2]] = {'piece':'king','team':'w'};
    board[[1,0,1,1]] = {'piece':'snowman','team':'w'};
    board[[1,0,1,3]] = {'piece':'snowman','team':'w'};
    // 1,2
    board[[1,2,4,1]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[1,2,3,2]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[1,2,4,3]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[1,2,4,2]] = {'piece':'king','team':'b'};
    board[[1,2,3,1]] = {'piece':'snowman','team':'b'};
    board[[1,2,3,3]] = {'piece':'snowman','team':'b'};
    board[[1,2,0,1]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[1,2,0,2]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[1,2,0,3]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    // 0,2
    board[[0,2,4,1]] = {'piece':'rook','team':'b'};
    board[[0,2,4,2]] = {'piece':'queen','team':'b'};
    board[[0,2,4,3]] = {'piece':'bishop','team':'b'};
    board[[0,2,3,2]] = {'piece':'unicorn','team':'b'};
    // 2,2
    board[[2,2,4,1]] = {'piece':'rook','team':'b'};
    board[[2,2,4,2]] = {'piece':'ghost','team':'b'};
    board[[2,2,4,3]] = {'piece':'unicorn','team':'b'};
    board[[2,2,3,3]] = {'piece':'bishop','team':'b'};
    board[[2,2,3,2]] = {'piece':'star','team':'b'};
    // 0,0
    board[[0,0,0,3]] = {'piece':'rook','team':'w'};
    board[[0,0,0,2]] = {'piece':'ghost','team':'w'};
    board[[0,0,0,1]] = {'piece':'unicorn','team':'w'};
    board[[0,0,1,1]] = {'piece':'bishop','team':'w'};
    board[[0,0,1,2]] = {'piece':'star','team':'w'};
    // 2,0
    board[[2,0,0,3]] = {'piece':'rook','team':'w'};
    board[[2,0,0,2]] = {'piece':'queen','team':'w'};
    board[[2,0,0,1]] = {'piece':'bishop','team':'w'};
    board[[2,0,1,2]] = {'piece':'unicorn','team':'w'};
}
create.team['Spread - Better Pawn Upgrades'] = function(){
    create.team.Spread();
    config.displayOrder = ['pawn','rook','bishop','unicorn','knight','king','queen','ghost','empress','star','snowman'];
}
create.team.Consolidated = function(){
    // 0,2,3-4,0-4
    config.size = [3,3,5,5];
    board[[1,1,3,0]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[1,1,3,1]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[1,1,3,2]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[1,1,3,3]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[1,1,3,4]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[1,1,4,0]] = {'piece':'rook','team':'b'};
    board[[1,1,4,1]] = {'piece':'knight','team':'b'};
    board[[1,1,4,2]] = {'piece':'queen','team':'b'};
    board[[1,1,4,3]] = {'piece':'king','team':'b'};
    board[[1,1,4,4]] = {'piece':'bishop','team':'b'};
    //2,0,0-1,0-4
    board[[1,1,1,0]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[1,1,1,1]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[1,1,1,2]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[1,1,1,3]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[1,1,1,4]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[1,1,0,0]] = {'piece':'rook','team':'w'};
    board[[1,1,0,1]] = {'piece':'knight','team':'w'};
    board[[1,1,0,2]] = {'piece':'queen','team':'w'};
    board[[1,1,0,3]] = {'piece':'king','team':'w'};
    board[[1,1,0,4]] = {'piece':'bishop','team':'w'};
}
create.team.Long = function(){
    config.size = [3,2,8,6];
    config.displayOrder = ['pawn','rook','bishop','knight','snowman','king','queen','ghost','empress'];
    config.orientation = [0,1,2,3];
    // 1,0 white
    board[[1,0,1,0]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[1,0,1,1]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[1,0,1,2]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[1,0,1,3]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[1,0,1,4]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[1,0,1,5]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[1,0,0,0]] = {'piece':'rook','team':'w'};
    board[[1,0,0,1]] = {'piece':'bishop','team':'w'};
    board[[1,0,0,2]] = {'piece':'king','team':'w'};
    board[[1,0,0,3]] = {'piece':'queen','team':'w'};
    board[[1,0,0,4]] = {'piece':'bishop','team':'w'};
    board[[1,0,0,5]] = {'piece':'rook','team':'w'};
    // 1,0 black
    board[[1,0,7,0]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[1,0,7,1]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[1,0,7,2]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[1,0,7,3]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[1,0,7,4]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[1,0,7,5]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    // 1,1 white
    board[[1,1,0,0]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[1,1,0,1]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[1,1,0,2]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[1,1,0,3]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[1,1,0,4]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[1,1,0,5]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    // 1,1 black
    board[[1,1,6,0]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[1,1,6,1]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[1,1,6,2]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[1,1,6,3]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[1,1,6,4]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[1,1,6,5]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[1,1,7,0]] = {'piece':'rook','team':'b'};
    board[[1,1,7,1]] = {'piece':'bishop','team':'b'};
    board[[1,1,7,2]] = {'piece':'king','team':'b'};
    board[[1,1,7,3]] = {'piece':'queen','team':'b'};
    board[[1,1,7,4]] = {'piece':'bishop','team':'b'};
    board[[1,1,7,5]] = {'piece':'rook','team':'b'};
    // 0,0
    board[[0,0,1,1]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[0,0,1,2]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[0,0,1,3]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[0,0,1,4]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[0,0,0,1]] = {'piece':'snowman','team':'w'};
    board[[0,0,0,2]] = {'piece':'knight','team':'w'};
    board[[0,0,0,3]] = {'piece':'ghost','team':'w'};
    board[[0,0,0,4]] = {'piece':'snowman','team':'w'};
    board[[0,0,7,1]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[0,0,7,2]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[0,0,7,3]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[0,0,7,4]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    // 2,0
    board[[2,0,1,1]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[2,0,1,2]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[2,0,1,3]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[2,0,1,4]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[2,0,0,1]] = {'piece':'snowman','team':'w'};
    board[[2,0,0,2]] = {'piece':'knight','team':'w'};
    board[[2,0,0,3]] = {'piece':'ghost','team':'w'};
    board[[2,0,0,4]] = {'piece':'snowman','team':'w'};
    board[[2,0,7,1]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[2,0,7,2]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[2,0,7,3]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[2,0,7,4]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    // 0,1
    board[[0,1,0,1]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[0,1,0,2]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[0,1,0,3]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[0,1,0,4]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[0,1,7,1]] = {'piece':'snowman','team':'b'};
    board[[0,1,7,2]] = {'piece':'knight','team':'b'};
    board[[0,1,7,3]] = {'piece':'ghost','team':'b'};
    board[[0,1,7,4]] = {'piece':'snowman','team':'b'};
    board[[0,1,6,1]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[0,1,6,2]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[0,1,6,3]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[0,1,6,4]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    // 2,1
    board[[2,1,0,1]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[2,1,0,2]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[2,1,0,3]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[2,1,0,4]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[2,1,7,1]] = {'piece':'snowman','team':'b'};
    board[[2,1,7,2]] = {'piece':'knight','team':'b'};
    board[[2,1,7,3]] = {'piece':'ghost','team':'b'};
    board[[2,1,7,4]] = {'piece':'snowman','team':'b'};
    board[[2,1,6,1]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[2,1,6,2]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[2,1,6,3]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[2,1,6,4]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
}
create.team.Big = function(){
    config.size = [5,3,6,6];
    config.displayOrder = ['pawn','rook','bishop','unicorn','knight','snowman','king','queen','ghost','empress','turncoat'];
    config.orientation = [0,1,2,3];
    // 2,1
    board[[2,1,0,1]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[2,1,0,2]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[2,1,0,3]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[2,1,0,4]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[2,1,5,1]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[2,1,5,2]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[2,1,5,3]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[2,1,5,4]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[2,1,2,2]] = {'piece':'turncoat','team':'o'};
    board[[2,1,2,3]] = {'piece':'turncoat','team':'o'};
    board[[2,1,3,2]] = {'piece':'turncoat','team':'o'};
    board[[2,1,3,3]] = {'piece':'turncoat','team':'o'};
    // 2,0
    board[[2,0,1,1]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[2,0,1,2]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[2,0,1,3]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[2,0,1,4]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[2,0,0,0]] = {'piece':'bishop','team':'w'};
    board[[2,0,0,1]] = {'piece':'unicorn','team':'w'};
    board[[2,0,0,2]] = {'piece':'king','team':'w'};
    board[[2,0,0,3]] = {'piece':'queen','team':'w'};
    board[[2,0,0,4]] = {'piece':'unicorn','team':'w'};
    board[[2,0,0,5]] = {'piece':'bishop','team':'w'};
    // 2,2
    board[[2,2,4,1]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[2,2,4,2]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[2,2,4,3]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[2,2,4,4]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[2,2,5,0]] = {'piece':'bishop','team':'b'};
    board[[2,2,5,1]] = {'piece':'unicorn','team':'b'};
    board[[2,2,5,2]] = {'piece':'king','team':'b'};
    board[[2,2,5,3]] = {'piece':'queen','team':'b'};
    board[[2,2,5,4]] = {'piece':'unicorn','team':'b'};
    board[[2,2,5,5]] = {'piece':'bishop','team':'b'};
    // bottom edges
    board[[0,2,5,0]] = {'piece':'rook','team':'b'};
    board[[0,2,5,1]] = {'piece':'ghost','team':'b'};
    board[[0,2,4,0]] = {'piece':'knight','team':'b'};
    board[[4,2,5,5]] = {'piece':'rook','team':'b'};
    board[[4,2,5,4]] = {'piece':'ghost','team':'b'};
    board[[4,2,4,5]] = {'piece':'knight','team':'b'};
    // top edges
    board[[0,0,0,0]] = {'piece':'rook','team':'w'};
    board[[0,0,0,1]] = {'piece':'ghost','team':'w'};
    board[[0,0,1,0]] = {'piece':'knight','team':'w'};
    board[[4,0,0,5]] = {'piece':'rook','team':'w'};
    board[[4,0,0,4]] = {'piece':'ghost','team':'w'};
    board[[4,0,1,5]] = {'piece':'knight','team':'w'};
    // extra pawns
    board[[1,1,5,2]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[1,1,5,3]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[1,1,0,2]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[1,1,0,3]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[3,1,5,2]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[3,1,5,3]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[3,1,0,2]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[3,1,0,3]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
}
create.team.Regularish = function(){
    config.size = [1,1,8,8];
    config.displayOrder = ['pawn','knight','bishop','rook','queen','king'];
    config.orientation = [0,1,2,3];
    // black, back row
    board[[0,0,7,0]] = {'piece':'rook','team':'b'};
    board[[0,0,7,1]] = {'piece':'knight','team':'b'};
    board[[0,0,7,2]] = {'piece':'bishop','team':'b'};
    board[[0,0,7,3]] = {'piece':'queen','team':'b'};
    board[[0,0,7,4]] = {'piece':'king','team':'b'};
    board[[0,0,7,5]] = {'piece':'bishop','team':'b'};
    board[[0,0,7,6]] = {'piece':'knight','team':'b'};
    board[[0,0,7,7]] = {'piece':'rook','team':'b'};
    // black, pawns
    board[[0,0,6,0]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[0,0,6,1]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[0,0,6,2]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[0,0,6,3]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[0,0,6,4]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[0,0,6,5]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[0,0,6,6]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    board[[0,0,6,7]] = {'piece':'pawn','team':'b','dim':2,'direction':-1};
    // white, back row
    board[[0,0,0,0]] = {'piece':'rook','team':'w'};
    board[[0,0,0,1]] = {'piece':'knight','team':'w'};
    board[[0,0,0,2]] = {'piece':'bishop','team':'w'};
    board[[0,0,0,3]] = {'piece':'queen','team':'w'};
    board[[0,0,0,4]] = {'piece':'king','team':'w'};
    board[[0,0,0,5]] = {'piece':'bishop','team':'w'};
    board[[0,0,0,6]] = {'piece':'knight','team':'w'};
    board[[0,0,0,7]] = {'piece':'rook','team':'w'};
    // white, pawns
    board[[0,0,1,0]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[0,0,1,1]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[0,0,1,2]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[0,0,1,3]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[0,0,1,4]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[0,0,1,5]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[0,0,1,6]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
    board[[0,0,1,7]] = {'piece':'pawn','team':'w','dim':2,'direction':1};
}
create.team.Test = function(){
    config.size = [3,3,5,5];
    config.displayOrder = ['pawn','rook','bishop','unicorn','knight','king','queen','ghost','empress','star','turncoat','snowman','god'];
    board[[1,2,3,4]] = {'piece':'empress','team':'w'};
}
create.Random = function(){
    function fill(team){
        var pCounter = 0;
        while (pCounter < config.numOfPieces){
            var coords = [randBetween(0,config.size[0]-1),randBetween(0,config.size[1]-1),randBetween(0,config.size[2]-1),randBetween(0,config.size[3]-1)];
            if (typeof(board[coords]) == 'undefined'){
                var pieceType = create.RandomPiece();
                board[coords] = {'piece':pieceType,'team':team};
                if (pCounter == config.numOfPieces-1){
                    board[coords] = {'piece':'king','team':team};
                }
                if (pieceType == 'pawn'){
                    board[coords].dim = 2;
                    if (team == 'w'){
                        board[coords].direction = 1;
                    } else {
                        board[coords].direction = -1;
                    }
                } else if (pieceType == 'turncoat'){
                    board[coords].team = 'o';
                }
                pCounter++;
            }
        }
    }
    fill('w');
    fill('b');
}
create.RandomPiece = function(){
    var totalWeight = 0;
    var i;
    var lookup = [''];
    for (i in config.random){
        totalWeight += config.random[i];
        var counter = 1;
        while (counter <= config.random[i]){
            lookup.push(i);
            counter++;
        }
    }
    var currentPiece = randBetween(1,totalWeight);
    return lookup[currentPiece];
}
create.team['Random'] = function(){
    config.displayOrder = ['pawn','rook','bishop','unicorn','knight','snowman','king','queen','ghost','star','telephone','empress','turncoat'];
    config.size = [3,3,5,5];
    config.numOfPieces = 24;
    config.random = {
        'pawn':60,
        'rook':3,
        'bishop':3,
        'unicorn':2,
        'knight':3,
        'snowman':3,
        'queen':2,
        'ghost':3,
        'star':1,
        'telephone':1,
        'empress':1,
        'turncoat':2
    }
    create.Random();
}
create.team['Spread - Elderly King'] = function(){
    create.team['Spread - Extra Pieces']();
    config.displayOrder = ['pawn','rook','bishop','unicorn','knight','elderly king','queen','ghost','turncoat','star','snowman','empress'];
    board[[1,0,0,2]].piece = 'elderly king';
    board[[1,2,4,2]].piece = 'elderly king';
}