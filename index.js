function populate(s1,s2)
{
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
    
    s2.innerHTML = "";
    if(s1.value == "goldloan")
    {
        var optionArray = [' |','5%|5%','1%|1%'];
    }
    else if(s1.value === "homeloan")
    {
        var optionArray = ['|','7%|9%','1%|6%'];
    }
    else if(s1.value === "carLoan")
    {
        var optionArray = ['|','9%|1%','9%|1%'];
    }
    for(var option in optionArray)
    {
        var pair = optionArray[option].split("|");
        var newoption = document.createElement("option");
        newoption.value = pair[0];
        newoption.innerHTML=pair[1];
        s2.appendChild(newoption);
    }
}