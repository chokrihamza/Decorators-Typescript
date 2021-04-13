function Logger(logString: string) {
      console.log('Logger factory')
      return function (constructor: Function) {
            console.log(logString)
            console.log(constructor)
            
            
      }
}

function WithTemplate(template: string, hookid: string) {
      console.log('Template factory')
      return function<T extends {new(...args:any[]):{name:string}}> (originalConstructor:T) {
        return class extends originalConstructor{
                  constructor(..._args:any[]) {
                        super();
                        console.log('Rendering template')
                        const hookEl = document.getElementById(hookid);
                        
                       
                        if (hookEl) {
                              hookEl.innerHTML = template
                              
                              hookEl.querySelector('h1')!.textContent=this.name
                        }
                }
       }
      }
}

@Logger('LOGGING_PERSON')
@WithTemplate('<h1>My Person Object</h1>','app')
class Person{
      name=`hamza`
      constructor() {
            
            console.log("Creating person Object...")
      }
      say() {
            console.log('cvblk')
      }

  
      
}
const pers1 = new Person();
console.log(pers1)
// ----
/*function Log(target:any,propertyName:string) {
      console.log('Property decorator');
      console.log(target,propertyName)
}
function Log2(target:any,name:string,descriptor:TypedPropertyDescriptor<number>) {
      console.log('Accessor decorator!');
      console.log(target);
      console.log(name);
      console.log(descriptor);
}

function Log3(target:any,name:string|Symbol,descriptor:TypedPropertyDescriptor<(tax: number) => number>) {
      console.log('Method decorator!');
      console.log(target);
      console.log(name);
      console.log(descriptor);     
}

function Log4(target:any,name:string|symbol,position:number) {
      console.log('Parameter decorator!');
      console.log(target);
      console.log(name);
      console.log(position); 
}

class Product{
      @Log
     title: string;
     private _price: number;
      @Log2
      set price(val: number) {
            if (val > 0) {
                  this.price=val
            } else {
                  throw new Error('Invalide Price-should be positive!')
            }
      }
      constructor(t: string,p:number) {
            this.title = t
            this._price=p
      }
      @Log3
      getPriceWithTax(@Log4 tax: number) {
            return (this._price)*(1+tax)
      }
}


const p1 = new Product('Book', 19);
const p2=new Product('Book 2',29)*/