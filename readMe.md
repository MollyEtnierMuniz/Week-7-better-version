
Function run-times in micro-seconds, to two decimal places for ease of comparison

|        |  doubleInsert | doubleAppend |   |
|--------|--------------:|-------------:|---|
| Tiny   |      54.05 μs |     95.20 μs |   |
| Small  |      63.19 μs |    101.60 μs |   |
| Medium |     204.31 μs |    176.75 μs |   |
| Large  |   6,076.60 μs |    633.29 μs |   |
| XLarge | 873,222.01 μs |  3,956,36 μs |   |

The function "doubleInsert" uses the .push array method which results in a runtime complexity of O(n). 
A colloquial explanation for this is that the only thing the computer needs to do is one easy math problem and note the answer, say, on a virtual sticky note, right next to the last one it did.  The only thing that makes the whole process faster or slower is how many times we ask the computer to do the math problem and note the answer. Any extra work will be proportionally larger: adding an additional "chunk" of work onto a short order or a big order adds the same amount of time.   

However, the function "doubleAppend" uses the .unshift array method. This again asks the computer to do an easy math problem and note the answer, but we're telling the computer to then move, or shift, ALL THE 
PREVIOUS STICKY NOTES over one spot. This is a quick process when there are only a few, but if we have 
to move 1,000 sticky notes, and then move them again for 1,001, and then move them again for 1,002... the 
process becomes *exponentially* more time intensive. Because of this, the .unshift method pushes this function into O(n^2). It's probably fine to use something like this for small projects but potentially 
unsuitable for larger/scaled-up work. 

The space complexity of both arrays is O(n) because the amount of computer memory (RAM) 
used in the function depends on the size of the array. In other words, the "Tiny" array
needs only a small amount of RAM but the "XLarge" array, with 100,000 items, takes up
much more memory. Thus, the space complexity depends on the size of the array passed in, 
expressed as O(n).

# Week-7-better-version
