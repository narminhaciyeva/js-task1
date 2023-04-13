// 1. Verilmiş 3 rəqəmli ədədin bütün rəqəmlərinin bi-birindən fərqli olub olmadığını tapan alqoritmi yazın(Məsələn: input 223, output "bütün rəqəmlər bərabər deyil " (false) ).

var number = prompt("Eded daxil edin:");
if(number >99 && number < 1000){
    var teklik = number % 10;

    var onluq =((number-teklik)/10)%10
var a=onluq*10+teklik;
var yuzluk=(number-a)/100


    if(teklik==onluq==yuzluk)
    {
        alert("Beraberdir!")
    }
    else{
        alert("Beraber deyil!")
    }
}
    else{
        alert("3 reqemli eded daxil edin")
    }



    // 2. İstifadəçi char tipindən dəyər daxil edib (input) char 'a' hərfinə bərabərdirsə ekrana "Azərbaycan dili seçildi" yazısı gəlsin(output), 'r' hərfinə bərabərdirsə "Rus dili seçildi" yazısı gəlsin (output). Digər bütün hallarda  "Yanlış sorğu" yazısı gəlsin(output).


    var letter=prompt("herf daxil edin")
    switch(letter){
        case "a":
        alert ("Azerbaycan dili sechildi")
        break;
        case "r":
            alert("rus dili sechildi")
            break;
            default:
                alert("yalnishdir")
                break;



    }

