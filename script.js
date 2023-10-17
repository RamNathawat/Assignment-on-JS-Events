document.addEventListener("DOMContentLoaded", function() {
    // Challenge 1
    var userSpan = document.getElementById("user");
    userSpan.innerHTML = "Your Name";
  
    // Challenge 2
    var btnClick = document.getElementById("btn-click");
    btnClick.onclick = function() {
        btnClick.style.backgroundColor = "grey";
    };
  
    // Challenge 3
    var buildButton = document.getElementById("build-button");
    buildButton.addEventListener("click", function() {
        var noun = document.getElementById("noun").value;
        var verb = document.getElementById("verb").value;
        var adverb = document.getElementById("adverb").value;
        var statementDiv = document.getElementById("statement");
        statementDiv.innerHTML = noun + " " + verb + " " + adverb;
    });
  
    // Challenge 4.1 
    var childDiv = document.getElementById("child");
    childDiv.addEventListener("click", function() {
        console.log("Child clicked");
        console.log("Parent clicked");
        console.log("Grandparent clicked");
    });
  
    // Challenge 4.2 
    var grandparentDiv = document.getElementById("grandparent");
    var parentDiv = document.getElementById("parent");
  
    grandparentDiv.addEventListener("click", function() {
        console.log("Grandparent clicked");
    }, true);
  
    parentDiv.addEventListener("click", function() {
        console.log("Parent clicked");
    }, true);
  
    var childDiv2 = document.getElementById("child");
    childDiv2.addEventListener("click", function() {
        console.log("Child clicked");
    }, true);
  
    // Challenge 5 
    var categoryUl = document.getElementById("category");
    categoryUl.addEventListener("click", function(event) {
        if (event.target.id === "blazers") {
            console.log("blazers");
        }
    });
  });
  