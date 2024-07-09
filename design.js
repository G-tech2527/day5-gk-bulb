var bulb=0
function findbulb()
{
    if(bulb==0)
    {
        document.getElementById("image").src = "im1.jpg"
        bulb=1;
    }
    else{
        document.getElementById("image").src = "im2.jpg"
        bulb=0;
    }

}