interface Currency {
    name: string;
    value: number;
    flag: string;
    symbol: string;
    
}
//here interface allows us to have us a certain properties attached so that whenever any new currency converter button is required it should have this minimum property
//rather than doing that manually everytime we have this property set


//d. ts files are called type declaration files. They exist for one purpose only: to describe the shape of an existing module and they only contain type information used for type checking.