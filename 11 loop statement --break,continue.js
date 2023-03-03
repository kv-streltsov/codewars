function grabDoll(dolls){
  var bag=[];
  //coding here
  for(doll of dolls){
	if (bag.length === 3) break
	if(doll == 'Hello Kitty'|| doll == 'Barbie doll'){
		bag.push(doll)
	}
	else continue
    
  }
  return bag;
}

grabDoll(["Mickey Mouse","Barbie doll","Hello Kitty","Hello Kitty","Hello Kitty","Snow white"])
