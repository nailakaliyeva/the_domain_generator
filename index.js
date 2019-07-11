var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];

function combine(){
    let myArray =[];
        for (i=0;i<pronoun.length;i++){
            for (x=0;x<adj.length;x++){
                for (y=0;y<noun.length;y++){
                   myArray.push(pronoun[i] + " "+ adj[x] + " " + noun[y] + " ");
            }
        }
    }
    return myArray;
}



let n =combine();
document.querySelector("#injection").innerHTML = n;