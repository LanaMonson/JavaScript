window.onload = function() {

    var names = new Set();

    names.add("Shaun").add("Ryu").add("Crystal");
    names.delete("Crystal");
    //names.clear();//<--no params, not nesessary, it gonna delete everything in an array
    console.log(names.has("Ryu"));//output gonna be a 'true'
    //console.log(names.has("Crystal"));//output gonna be a 'false', b/s we deleted "Crystal" early
    console.log(names.size);

    console.log(names);
}
