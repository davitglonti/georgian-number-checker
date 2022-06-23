function phonenumber(){
    const checker = document.getElementById('checker')
    const inputText = document.getElementById("phoneNumber").value;
  //number checke 
    if(inputText.match(/^599\d{6}$/) || inputText.match(/^595\d{6}$/) || inputText.match(/^591\d{6}$/) || inputText.match(/^598\d{6}$/) || inputText.match(/^596\d{6}$/)) {
        checker.innerHTML = 'ეს ნომერი ეკუთნის მაგთის' 
        checker.style.color = '#0AE521'
    } else if(inputText.match(/^577\d{6}$/) || inputText.match(/^514\d{6}$/) || inputText.match(/^555\d{6}$/) || inputText.match(/^557\d{6}$/) || inputText.match(/^558\d{6}$/) || inputText.match(/^593\d{6}$/)){
        checker.innerHTML = 'ეს ნომერი ეკუთნის ჯეოსელს'
        checker.style.color = '#0AE521'
    } else if(inputText.match(/^568\d{6}$/) || inputText.match(/^571\d{6}$/) || inputText.match(/^574\d{6}$/) || inputText.match(/^592\d{6}$/) || inputText.match(/^597\d{6}$/)){
        checker.innerHTML = 'ეს ნომერი ეკუთნის ბილაინს'
        checker.style.color = '#0AE521'
    } else {
        checker.innerHTML = 'ნომერი არ მოიძებნა'
        checker.style.color = 'red'
        checker.style.border = '2px solid'
    }
}















//    const indiaRegex = /^\+5\d{8}$/;

//inputText.match(indiaRegex) 6 xazze if tan