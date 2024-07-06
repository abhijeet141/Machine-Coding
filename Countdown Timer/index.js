(function(){
    const hour = document.querySelector('.hour')
    const minute = document.querySelector('.minute')
    const second = document.querySelector('.second')

    const start = document.querySelector('.start')
    const stop = document.querySelector('.stop')
    const reset = document.querySelector('.reset')
    start.addEventListener('click',()=>{
        if(hour.value == 0 && minute.value == 0 && second.value == 0){
            return;
        }
        function startInterval(){
            start.style.display = "none";
            stop.style.display = "initial"

            startTimer = setInterval(()=>{
                timer();
            },1000)
        }
        startInterval();
    })
    function stopInterval(state){
        start.innerHTML = state === "pause"?"Continue" : "Start"
        start.style.display = "initial"
        stop.style.display = "none"
        clearInterval(startTimer)
    }

    function timer(){
        if(second.value>60){
            minute.value++;
            second.value = parseInt(second.value) - 59
        }
        if(minute.value>60){
            hour.value++;
            minute.value = parseInt(minute.value) - 60
        }
        if(hour.value == 0 && minute.value == 0 && second.value == 0){
            hour.value = "";
            minute.value = "";
            second.value = "";
            stopInterval();
        }
        else if(second.value!=0){
            second.value = `${second.value <= 10?"0":""}${second.value - 1}`
        }
        else if(minute.value!=0 && second.value==0){
            second.value = 59
            minute.value = `${minute.value <= 10?"0":""}${minute.value - 1}`            
        }
        else if(hour.value!=0 && minute.value==0){
            minute.value = 60
            hour.value = `${hour.value <= 10?"0":""}${hour.value - 1}`            
        }
    }
    stop.addEventListener('click',function(){
        stopInterval('pause');
    })
    reset.addEventListener('click',()=>{
        hour.value = "";
        minute.value = "";
        second.value = "";
        stopInterval();
    })
})();