var e = document.querySelectorAll('td');
	var q = e.length;

	for (var j = 0; j < q; j++){
	
		e[j].addEventListener('click', function() {SetKolor('tomato'); });
		e[j].addEventListener('mouseover', function() {SetKolor('blue'); });
		e[j].addEventListener('mouseout', function() {SetKolor('orange'); });
		}
	

	function SetKolor(thekolor){
		var elements = document.querySelectorAll('td');
		var quants = elements.length;
		
		for (var i = 0; i < quants; i++) {
			elements[i].style.backgroundColor = thekolor;
		}
	}