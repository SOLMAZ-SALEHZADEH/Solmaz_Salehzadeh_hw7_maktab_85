// question4
function sortStrChars(str) {
    if (!str) {
      return;
    }
    str = str.split('');
    str = str.sort();
    str = str.join('');
    return str;
  }
  
  const words = ["dell", "ledl", "abc", "cba", 'boo'];
  
  function getGroupedAnagrams(words) {
    const anagrams = {}; // {abc:[abc,cba], dell:[dell, ledl]}
    words.forEach((word) => {
      const sortedWord = sortStrChars(word);
      if (anagrams[sortedWord]) {
        return anagrams[sortedWord].push(word);
      }
      anagrams[sortedWord] = [word];
    });
    return anagrams;
  }
  const arr = []
  const groupedAnagrams = getGroupedAnagrams(words);
  for (const sortedWord in groupedAnagrams) {
    arr.push(groupedAnagrams[sortedWord][0])
  }
  console.log(arr)