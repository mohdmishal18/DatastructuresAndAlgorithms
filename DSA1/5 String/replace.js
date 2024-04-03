// Write a function to replace each alphabet in the given string with another alphabet
// occurring at the n-th position from each of them.

let str = 'mishal';
let n = 2;

function replaceWith(str , n)
{
    str = str.toLowerCase();
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let res = '';
    let pos;
    for(let i = 0; i < str.length; i++)
    {
        pos = alphabet.indexOf(str[i]);
        res += alphabet[(pos + n) % alphabet.length];
    }
    return res;
}

console.log(replaceWith(str , n));