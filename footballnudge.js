var xhr = new XMLHttpRequest();
xhr.open("GET", "https://soccer.sportmonks.com/api/v2.0/odds/inplay/fixture/id}?api_token=pjHVFVI5vM6oMhP4F3mw07qEKUvzJ9kTLvCYvUEhnx6TCrN8j2hxeWoRtXp3", false);
xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);
