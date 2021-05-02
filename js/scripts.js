
// Kindness prompts

let quotes = [
    "Sort your old toys (remember gloves) into boxes for donating.",
    "Call up an old friend and surprise them!",
    "Send a nice, long text to your mother.",
    "Order a big box of chocolates for your care giver.",
    "Help your favourite small home business with their bookkeeping or help them go online.",
    "Share your best friend's paintings online and help her reach a wider audience like she deserves.",
    "Send a happy online parcel to someone close to you.",
    "Let someone know that they are thinking of you.",
    "Send flowers to any stranger in the hospital.",
    "Sleep long and tight and wake up only when you feel full."
    ]
  
  // Get random quote and display 
  
  function getQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('newQuoteSection').innerHTML = quotes[randomNumber];
  }
  
  var generatedQuote = document.getElementById('newQuoteSection').innerHTML;
  
  // Tweet quote on click
  
  function tweetQuote() {
    var tweetUrl = ' https://twitter.com/intent/tweet?text=' + encodeURIComponent(generatedQuote);
    window.open(tweetUrl);
  }
  
  // Share prompt on Facebook
  
  var url = window.location.href;
  
  function shareQuote() {
    window.open('https://www.facebook.com/sharer/sharer.php?href=' + url,
          'facebook-share-dialog',
          'width=800,height=600'
      );
      return false;
  }
  

  /* Greetings card script */

  function openUp() {
    const $opentop= document.querySelector('#opentop');
    const $top= document.querySelector('#top');
    const $front= document.querySelector('#front');
    const $back= document.querySelector('#back');
    const $letter= document.querySelector('#letter');
    const $button= document.querySelector('button');
    
    $opentop.beginElement();
    $top.style.zIndex = 2;
    
    $top.classList.add('animate');
    $front.classList.add('animate');
    $back.classList.add('animate');
    $button.classList.add('animate');
    $letter.classList.add('animate');

}

function hidecard() {
document.querySelector("#envelope").style.display = "none";
document.querySelector("#hide").style.display = "none";
}




