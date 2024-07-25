document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector('.intro').classList.add('active');
        document.querySelector('.logo-header').classList.add('active');
    }, 0); // Initial delay before starting the animation

    // Wait for the animation to complete before showing the main content
    setTimeout(function() {
        document.querySelector('.intro').classList.add('fade-out'); // Add fade-out class for transition
        setTimeout(function() {
            document.querySelector('.intro').style.display = 'none';
            document.querySelector('.main-content').classList.add('show');
        }, 1000); // Adjust timing to match the transition duration
    }, 3500); // Adjust timing to match the slower transition duration
});

window.onload = function() {

    var pageTitle = document.title;
    var attentionMessage = " Are you there ? ";
  
    document.addEventListener('visibilitychange', function(e) {
      var isPageActive = !document.hidden;
  
      if(!isPageActive){
        document.title = attentionMessage;
      }else {
        document.title = pageTitle;
      }
    });
  };

//   nav bar
