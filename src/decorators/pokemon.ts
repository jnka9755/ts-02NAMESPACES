function printToConsole(constructor: Function){
    console.log(constructor)
}

const printToConsoleConditional = (print: boolean = false): Function => {
    if ( print )
        return printToConsole;
    else
        return () => {};
}

const blockPrototipe = function(constructor: Function) {
    Object.seal(constructor)
    Object.seal(constructor.prototype)

}


function CheckValidPokemon(){
    return function ( target: any, propertyKey: string, descriptor: PropertyDescriptor ) {
        
        const originalMethod = descriptor.value;
        
        descriptor.value = (id: number) => {
            if(id < 1 || id > 800 )
                return console.error('Id de pokemon invalido');
            else
                return originalMethod(id);
        }
    }
}

function readOnly( isWritable: boolean = true ): Function {
    return function (target: any, propertyKey: string) {

        const descriptor: PropertyDescriptor = {
            get() {
                return 'Juan';
            },
            set (this, val){
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                })
            }
        }

        return descriptor;
    }
}

@blockPrototipe
@printToConsoleConditional(false)
export class Pokemon {
    
    @readOnly(true)
    public publicApi: string = 'http://pokeapi.co'

    constructor(
        public name: string
    ){}


    @CheckValidPokemon()
    savePokemon(id: number) {
        console.log(`Pokemon guardado en la BD ${id}`);
    }
}