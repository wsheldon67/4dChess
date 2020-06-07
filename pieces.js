var p = {
    'rook':{
        'moves':function(start,o){
            var result = [];
            function listPos(positive){
                var i;
                for (i = 0; i < 4; i++){
                    var end = [...start];
                    while (true){
                        if (positive){end[i]++}else{end[i]--};
                        if (end[i] >= config.size[i] || end[i] < 0){break};
                        if (typeof(board[end]) == 'undefined'){
                            result.push([...end]);
                        } else if (board[end].team == o.team){
                            break;
                        } else {
                            result.push([...end]);
                            break;
                        }
                    }
                }
            }
            listPos(true);
            listPos(false);
            return result;
        },'w':9814,
        'b':9820,
        'def':'Moves any number of spaces in 1 dimension.'
    },'pawn':{
        'moves':function(start,o){
            var result = [];
            var move1 = [...start];
            move1[o.dim] += o.direction;
            if (typeof(board[move1]) == 'undefined' && move1[o.dim] >= 0 && move1[o.dim] < config.size[o.dim]){result.push([...move1])};
            function listPos(dim,pos){
                var end = [...start];
                end[o.dim] += o.direction;
                end[dim] += pos;
                if (o.dim == dim){return};
                if (end[o.dim] >= config.size[o.dim] || end[o.dim] < 0){return};
                if (end[dim] >= config.size[dim] || end[dim] < 0){return};
                if (typeof(board[end]) == 'undefined'){return};
                if (board[end].team == o.team){return};
                result.push([...end]);
            }
            var combos = [[0,1],[0,-1],[1,1],[1,-1],[2,1],[2,-1],[3,1],[3,-1]];
            var i;
            for (i of combos){listPos(...i)};
            return result;
        },'w':9817,
        'b':9823,
        'def':'2 Movement Types: 1. Forward one space in starting dimension, cannot capture.  2. Foward one space in starting dimension and one space in any direction in an additional dimension, must capture.'
    },'queen':{
        'moves':function(start,o){
            return p.rook.moves(start,o).concat(p.bishop.moves(start,o));
        },'w':9813,
        'b':9819,
        'def':'Moves any equal number of spaces in one or two dimensions.'
    },'king':{
        'moves':function(start,o){
            var result = [];
            function listPos(dim1,dim2,pos1,pos2){
                var end = [...start];
                end[dim1] += pos1;
                end[dim2] += pos2;
                if (end[dim1] >= config.size[dim1] || end[dim1] < 0){return};
                if (end[dim2] >= config.size[dim2] || end[dim2] < 0){return};
                if (typeof(board[end]) == 'undefined'){
                    result.push([...end])
                } else if (board[end].team != o.team){
                    result.push([...end])
                }
            }
            var posCombos = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
            var i;
            for (i of config.dimCombos){
                var j;
                for (j of posCombos){
                    listPos(...i.concat(j));
                }
            }
            return result;
        },'w':9812,
        'b':9818,
        'def':'Moves one space in one or two dimensions.'
    },'bishop':{
        'moves':function(start,o){
            var result = [];
            function listPos(dim,dim2,pos,pos2){
                var end = [...start];
                while (true){
                    end[dim]+=pos;
                    end[dim2]+=pos2;
                    if (end[dim] >= config.size[dim] || end[dim] < 0){break};
                    if (end[dim2] >= config.size[dim2] || end[dim2] < 0){break};
                    if (typeof(board[end]) == 'undefined'){
                        result.push([...end]);
                    } else if (board[end].team == o.team){
                        break;
                    } else {
                        result.push([...end]);
                        break;
                    }
                }
            }
            var i;
            var combos = [[0,1,1,1],[0,2,1,1],[0,3,1,1],[1,2,1,1],[1,3,1,1],[2,3,1,1],[0,1,1,-1],[0,2,1,-1],[0,3,1,-1],[1,2,1,-1],[1,3,1,-1],[2,3,1,-1],[0,1,-1,1],[0,2,-1,1],[0,3,-1,1],[1,2,-1,1],[1,3,-1,1],[2,3,-1,1],[0,1,-1,-1],[0,2,-1,-1],[0,3,-1,-1],[1,2,-1,-1],[1,3,-1,-1],[2,3,-1,-1]];
            for (i of combos){listPos(...i)};
            return result;
        },'w':9815,
        'b':9821,
        'def':'Moves any equal number of spaces in two dimensions.'
    },'knight':{
        'moves':function(start,o){
            var result = [];
            function listPos(dim1,dim2,pos1,pos2){
                var end = [...start];
                end[dim1]+=pos1;
                end[dim2]+=pos2;
                if (end[dim1] >= config.size[dim1] || end[dim1] < 0){return};
                if (end[dim2] >= config.size[dim2] || end[dim2] < 0){return};
                if (typeof(board[end]) == 'undefined'){
                    result.push([...end])
                } else if (board[end].team != o.team){
                    result.push([...end])
                }
            }
            var posCombos = [[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]]
            var i;
            for (i of config.dimCombos){
                var j;
                for (j of posCombos){
                    listPos(...i.concat(j));
                }
            }
            return result;
        },'w':9816,
        'b':9822,
        'def':'Moves 2 spaces in one dimension and 1 space in another dimension.  Does not collide with other pieces.'
    },'ghost':{
        'moves':function(start,o){
            var result = [];
            function listPos(a,b,c,d){
                var end = [...start];
                end[0] += a;
                end[1] += b;
                end[2] += c;
                end[3] += d;
                if (end[0] >= config.size[0] || end[0] < 0){return};
                if (end[1] >= config.size[1] || end[1] < 0){return};
                if (end[2] >= config.size[2] || end[2] < 0){return};
                if (end[3] >= config.size[3] || end[3] < 0){return};
                if (typeof(board[end]) == 'undefined'){
                    result.push([...end]);
                } else if (board[end].team != o.team){
                    var dimsUsed = 0;
                    if (a != 0){dimsUsed++};
                    if (b != 0){dimsUsed++};
                    if (c != 0){dimsUsed++};
                    if (d != 0){dimsUsed++};
                    if (dimsUsed == 1){
                        result.push([...end]);
                    }
                }
            }
            var a;
            for (a=-1;a<2;a++){
                var b;
                for (b=-1;b<2;b++){
                    var c;
                    for (c=-1;c<2;c++){
                        var d;
                        for (d=-1;d<2;d++){
                            listPos(a,b,c,d);
                        }
                    }
                }
            }
            return result;
        },'w':9863,
        'b':9865,
        'def':'2 Movement Types: 1. Moves 1 space in any number of dimensions, cannot capture. 2. Moves 1 space in one dimension, can capture.'
    },'unicorn':{
        'moves':function(start,o){
            var result = [];
            var posCombos = [[-1,-1,-1,0],[-1,-1,1,0],[-1,1,-1,0],[-1,1,1,0],[1,-1,-1,0],[1,-1,1,0],[1,1,-1,0],[1,1,1,0],[-1,-1,0,-1],[-1,-1,0,1],[-1,1,0,-1],[-1,1,0,1],[1,-1,0,-1],[1,-1,0,1],[1,1,0,-1],[1,1,0,1],[-1,0,-1,-1],[-1,0,-1,1],[-1,0,1,-1],[-1,0,1,1],[1,0,-1,-1],[1,0,-1,1],[1,0,1,-1],[1,0,1,1],[0,-1,-1,-1],[0,-1,-1,1],[0,-1,1,-1],[0,-1,1,1],[0,1,-1,-1],[0,1,-1,1],[0,1,1,-1],[0,1,1,1]];
            function listPos(a,b,c,d){
                var end = [...start];
                while(true){
                    end[0] += a;
                    end[1] += b;
                    end[2] += c;
                    end[3] += d;
                    if (end[0] >= config.size[0] || end[0] < 0){break};
                    if (end[1] >= config.size[1] || end[1] < 0){break};
                    if (end[2] >= config.size[2] || end[2] < 0){break};
                    if (end[3] >= config.size[3] || end[3] < 0){break};
                    if (typeof(board[end]) == 'undefined'){
                        result.push([...end]);
                    } else if (board[end].team == o.team){
                        break;
                    } else {
                        result.push([...end]);
                        break;
                    }
                }
            }
            var i;
            for (i of posCombos){
                listPos(...i);
            }
            return result;
        },'w':10001,
        'b':10002,
        'def':'Moves any equal number of spaces in three dimensions.'
    },'empress':{
        'moves':function(start,o){
            return p.queen.moves(start,o).concat(p.unicorn.moves(start,o));
        },'w':9678,
        'b':9673,
        'def':'Moves any equal number of spaces in one, two or three dimensions.'
    },'god':{
        'moves':function(start,o){
            var a;
            var result = [];
            for (a = 0; a <= config.size[0]-1; a++){
                var b;
                for (b = 0; b <= config.size[1]-1; b++){
                    var c;
                    for (c = 0; c <= config.size[2]-1; c++){
                        var d;
                        for (d = 0; d <= config.size[3]-1; d++){
                            result.push([a,b,c,d]);
                        }
                    }
                }
            }
            return result;
        },'w':9898,
        'b':9899,
        'def':'Moves to any space on the board.'
    },'telephone':{
        'moves':function(start,o){
            return [];
        },'w':9743,
        'b':9742,
        'def':'Cannot move.'
    },'snowman':{
        'moves':function(start,o){
            return p.king.moves(start,o);
        },'w':9731,
        'b':9927,
        'def':'Moves like a king.'
    },'star':{
        'moves':function(start,o){
            return p.capture1dim.moves(start,o).concat([...p.star.moveSet]);
        },'w':9734,
        'b':9733,
        'def':'Teleports to one of '+config.star.spaces+' random vacant spaces.  Can also capture by moving 1 space in one dimension.'
    },'turncoat':{
        'moves':function(start,o){
            var tempO = JSON.parse(JSON.stringify(o));
            tempO.team = 'w'
            var w = p[config.turncoat].moves(start,tempO);
            tempO.team = 'b';
            return w.concat(p[config.turncoat].moves(start,tempO));
        },'w':9765,
        'b':9765,
        'o':9765,
        'def':'Can be moved by either team.  Moves like a '+config.turncoat+'.'
    },'shield':{
        'moves':function(start,o){
    
        },'w':9929,
        'b':9930,
        'def':''
    },'capture1dim':{
        'moves':function(start,o){
            var result = [];
            function listPos(dim1,pos1){
                var end = [...start];
                end[dim1] += pos1;
                if (end[dim1] >= config.size[dim1] || end[dim1] < 0){return};
                if (typeof(board[end]) == 'undefined'){
                    return;
                } else if (board[end].team != o.team){
                    result.push([...end]);
                }
            }
            var i = 0;
            while(i<=3){
                listPos(i,1);
                listPos(i,-1);
                i++;
            }
            return result;
        },'w':5,
        'b':4,
        'def':'Moves 1 space in 1 dimension, but only to capture.'
    },'slowboi':{
        'moves':function(start,o){
            var result = [];
            function listPos(dim1,pos1){
                var end = [...start];
                end[dim1] += pos1;
                if (end[dim1] >= config.size[dim1] || end[dim1] < 0){return};
                if (typeof(board[end]) == 'undefined'){
                    result.push([...end]);
                } else if (board[end].team != o.team){
                    result.push([...end]);
                }
            }
            var i = 0;
            while(i<=3){
                listPos(i,1);
                listPos(i,-1);
                i++;
            }
            return result;
        },'w':5,
        'b':4,
        'def':'Moves 1 space in one dimension.'
    },'elderly king':{
        'moves':function(start,o){
            return p.slowboi.moves(start,o);
        },'w':9812,
        'b':9818,
        'def':'Moves 1 space in one dimension.'
    },'peaceful king':{
        'moves':function(start,o){
            var result = [];
            function listPos(dim1,dim2,pos1,pos2){
                var end = [...start];
                end[dim1] += pos1;
                end[dim2] += pos2;
                if (end[dim1] >= config.size[dim1] || end[dim1] < 0){return};
                if (end[dim2] >= config.size[dim2] || end[dim2] < 0){return};
                if (typeof(board[end]) == 'undefined'){
                    result.push([...end]);
                }
            }
            var posCombos = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
            var i;
            for (i of config.dimCombos){
                var j;
                for (j of posCombos){
                    listPos(...i.concat(j));
                }
            }
            return result;
        },'w':9812,
        'b':9818,
        'def':'Moves one space in one or two dimensions, cannot capture.'
    },'elderly peaceful king':{
        'moves':function(start,o){
            var result = [];
            function listPos(dim1,pos1){
                var end = [...start];
                end[dim1] += pos1;
                if (end[dim1] >= config.size[dim1] || end[dim1] < 0){return};
                if (typeof(board[end]) == 'undefined'){
                    result.push([...end]);
                }
            }
            var i = 0;
            while(i<=3){
                listPos(i,1);
                listPos(i,-1);
                i++;
            }
            return result;
        },'w':9812,
        'b':9818,
        'def':'Moves 1 space in 1 dimension, cannot capture.'
    }
    }