class myClass{
    constructor(a,b){
        this.firstNum = a;
        this .secondNum = b;
    }

    add(){
        let result = this.firstNum + this.secondNum;
        console.log(result);
    }
}

var obj = new myClass(100,20);
obj.add();