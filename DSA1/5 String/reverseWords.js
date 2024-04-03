// reverse words

let sentence = "Hello im mohammed mishal";

function reverseWords(s)
{
    sentence = sentence.split(" ").reverse()
    let result = [];

    for(let i = 0; i < sentence.length; i++)
    {
        let rev = '';
        let val = sentence[i];
        for(let i = val.length - 1; i >= 0; i--)
        {
            rev += val[i]
        }
        result.push(rev)
    }

    return result.join(" ");
}

console.log((reverseWords(sentence)));