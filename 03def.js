function a(){
    var b = 5;
    c ();
    function c(){
        console.log(b);
    }
}
a();