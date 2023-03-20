class parent{

    hello1(){
        console.log("hello 1 function")
    }
    hello2(){
        console.log("hello 2 function")
    }
}


class child extends parent{
    
    demo(){
        super.hello1();
        super.hello2();
    }


}

var obj = new child();
obj.demo();