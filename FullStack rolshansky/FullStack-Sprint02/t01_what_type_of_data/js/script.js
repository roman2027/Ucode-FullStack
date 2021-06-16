let num = 23;
    big = 23n;
    str = 'hi';
    bool = 5 > 3;
    nul = null;
    und = undefined;
    obj = {};
    sym = Symbol('id');
    fun = function newFunction(){};

alert(`Variable num is data type '${typeof num}';
Variable big is data type '${typeof big}';
Variable str is data type '${typeof str}';
Variable bool is data type '${typeof bool}';
Variable nul is data type '${typeof nul}', but this is data type 'null';
Variable und is data type '${typeof und}';
Variable obj is data type '${typeof obj}';
Variable sym is data type '${typeof sym}';
Variable fun is data type '${typeof fun}'.`);