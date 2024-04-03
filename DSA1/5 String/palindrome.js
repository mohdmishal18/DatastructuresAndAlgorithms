// Check the given string is palindrome or not ...

let word = "MALAYALAM";

function palindrome(word)
{
    let reverse = '';

    for(let i = word.length - 1; i >= 0; i--)
    {
        reverse += word[i];
    }

    return word === reverse;
}

console.log(palindrome(word));