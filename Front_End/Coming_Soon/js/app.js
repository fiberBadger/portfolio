const countDownDate = new Date('June 1, 2019 00:00:00').getTime();

const countDown = setInterval( ()=> {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance/(1000 * 60 * 60 * 24));
    const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((distance % (1000*60*60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000*60)) / 1000);
    
});