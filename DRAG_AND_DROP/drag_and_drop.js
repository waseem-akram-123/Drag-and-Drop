let lists =  document.getElementsByClassName ("list");

let box1 = document.querySelector (".box1");
let box2 = document.querySelector (".box2");

for ( li of lists) {
    li.addEventListener("dragstart", function(e) {
        let selected = e.target;

        box2.addEventListener("dragover", function(e) {
            e.preventDefault();
        });

        box2.addEventListener("drop", function(e) {
            box2.appendChild(selected);
            selected = null;
        });

        box1.addEventListener("dragover", function(e) {
            e.preventDefault();
        });

        box1.addEventListener("drop", function(e) {
            box1.appendChild(selected);
            selected = null;
        });
    });
}