document.getElementById("btn"). addEventListener("click",
function(){
  let txt = document.getElementById("input-text").
  value;
  checkPalindrome(txt);
});

function checkPalindrome(txt){
let txt_new = txt.replace(/[^a-zA-z0-9]/g,'').
toLowerCase();
let len = txt_new.length;
let halflen = Math.floor(len/2);
let result = document.getElementById("result");
let i;

for (i = 0; i<halflen; i++) {
    if(txt_new[i] !== txt_new[len-1-i]){
        result.textContent = "OOPS! Not a Palindrome";
        return;
    }
    result.textContent = "YES It is a Palindrome"
}

}