var W4it        =   { 
                        Name:       'Wait For It (aka W4it)' 
                    ,   Desc:       'A module handling Async Wait Sleep etc..'
                    ,   Version:    '0.0.1'
                    };

module.exports  =   W4it;

    W4it.done   = function  Wait4It (doneFn) {  // you may call it with  W4IT.done('boolPropertyName', obj )
                                                // where obj.boolPropery is the flag that signal when we are done :D
                                                
        if (! (doneFn instanceof Function)) {   // if not a Function we assume the above and setup setter getter for it ...
            var o       =   arguments[1]
            ,   n       =   arguments[0]
            ,   inProg  =   o[n]
            ;
            Object.defineProperty(o, n, {   set: function   (v) { inProg=v;     }    
                                        ,   get: function   ()  { return done;  } 
            });
            doneFn = function () { return !inProg; }
        }
    var 
        _out    = process.stdout
    ,   sleepT  = 13    
    ,   ntrvll  = 17
    ,   cnt     =  0 
    ,   to      =  0 
    ,   aNiMeD  = [
        '             '
     ,  '.            '
     ,  ' .           '
     ,  '  o          '
     ,  '   o         '
     ,  '    o        '
     ,  '     O       '
     ,  '      O      '
     ,  '       O     '
     ,  '        o    '
     ,  '         o   '
     ,  '          o  '
     ,  '           . '
     ,  '            .'
     ,  '             '
     ,  '            .'
     ,  '           . '
     ,  '          o  '
     ,  '         o   '
     ,  '        o    '
     ,  '       O     '
     ,  '      O      '
     ,  '     O       '
     ,  '    o        '
     ,  '   o         '
     ,  '  o          '
     ,  ' .           '
     ,  '.            '
     ,  '             '
    ]    
    ,   loop    = function () {
                    if ( doneFn()) { 
                        clearTimeout(to);
                        _out.write('Done.\n');  
                        return; 
                    }    
        if (!to){  
            cnt++;
            to=setTimeout( function () {
                 if(!doneFn()) _out.write(aNiMeD[cnt%aNiMeD.length]+'\r');
                to=0;
            },16);
        } 
        setTimeout(loop,sleepT);
    } 
    ;
    loop();
}


