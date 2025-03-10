function isAnagram(str1, str2) {
  let str1Map = {};
  for (let i = 0; i < str1.length; i++) {
    str1Map[str1[i]] = (str1Map[str1[i]] || 0) + 1;
  }

  let str2Map = {};
  for (let i = 0; i < str2.length; i++) {
    str2Map[str2[i]] = (str2Map[str2[i]] || 0) + 1;
  }

	for(let m in str1Map) {
		if (str1Map[m] !== str2Map[m]) return false;
	}

	return true;
}

console.log(isAnagram("silent", "listen"));
