class x {
    um(){
        console.log("Um");
    }
}

class y extends x {
    dois(){
        console.log("Dois");
    }
}

class z extends y {
    tres(){
        console.log("Tres");
    }
}

const Z = new z();
Z.um();
Z.dois();
Z.tres();