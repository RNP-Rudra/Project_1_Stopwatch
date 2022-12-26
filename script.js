let hr=0;
let min=0;
let sec=0;
let counter=0;

let timer=false;

function Start(){
    timer=true;
    stopwatch();
}

function Stop(){
    timer=false;
}

function Reset(){
    timer=false;

    hr=0;
    min=0;
    sec=0;
    counter=0;

    document.getElementById("hr").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("counter").innerHTML="00";

}

function stopwatch(){

        if(timer == true)
        {
            counter=counter + 1;
            if(counter ==100)
            {
                counter = 0;
                sec=sec+1;
            }

            if(sec== 60)
            {
                sec=0;
                min=min+1;

            }
            if(min==60)
            {
                min=60;
                hr=hr+1;
            }
            setTimeout("stopwatch()",10);
        
        }
        let hrString = hr;
        let minString=min;
        let secString=sec;
        let counterString=counter;

        if(counter<10)
        {
            counterString="0"+counterString;
        }
        if(sec<10)
        {
            secString="0"+secString;
        }
        if(min<10)
        {
            minString="0"+minString;
        }
        if(hr<10)
        {
            hrString="0"+hrString;
        }


        document.getElementById("counter").innerHTML=counterString;
        document.getElementById("sec").innerHTML=secString;
        document.getElementById("min").innerHTML=minString;
        document.getElementById("hr").innerHTML=hrString;
}