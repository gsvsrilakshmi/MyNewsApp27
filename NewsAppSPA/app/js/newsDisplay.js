function getUrlButtonValue () {
    var buttons = [], hashButton;
    var splittedButton = window.location.href.slice(window.location.href.indexOf('?')+ 1);
    for(var i = 0;i < splittedButton.length;i++) {
        hashButton = splittedButton[i].split("=");
        buttons.push(hashButton[0]);
        buttons[hashButton[0]] = hashButton[1];
    }
    return buttons;
}


function loadXMLDoc(type) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)  {
            myFunction(this);
        }
    };
    // var theUrl = "";

    // switch(type) {
    //     case "AllNews" : theUrl = "https://rss.sciencedaily.com/all.xml";
    //                         break;
    //     case "TopNews" : theUrl =  "https://rss.sciencedaily.com/top.xml";
    //                         break;

    //     case "Science" : theUrl = " https://rss.sciencedaily.com/top/science.xml";
    //                         break;
    //     case "Health" : theUrl = "https://rss.sciencedaily.com/top/health.xml";
    //                         break;
    //     case  "Technology" : theUrl = "https://rss.sciencedaily.com/top/technology.xml";
    //                         break;
    //     case "Environment" : theUrl = " https://rss.sciencedaily.com/top/environment.xml";
    //                         break;
    //     case "Society" : theUrl = "https://rss.sciencedaily.com/top/society.xml";
    //                         break;
    //     case "StrangeAndOffbeat" : theUrl = "https://rss.sciencedaily.com/strange_offbeat.xml";
    //                         break;
    //     case "MostPopular" : theUrl = "https://rss.sciencedaily.com/most_popular.xml";
    //                         break;

    // }

    for (type in categoryList) {
        // console.log("hello")
        xmlhttp.open("GET", categoryList[type],true);
        try {
            xmlhttp.send();
        }
        catch(err) {
            document.write("error resolved")
        }
    }
}

function myFunction(xml)  {
    var i,j,img;
    var xmlDoc = xml.responseXML;
    var table = "";
    var x = xmlDoc.getElementsByTagName("item");

    for (i = 0;i < x.length; i++)  {
        // image extraction

        if (x[i].children.length > 5) {
            table += "<tr><td>"+ "<img src = " + x[i].children[3].attributes[0].nodeValue + "></img>" + "</td></tr>";
        }

        // $(xmlDoc).find('item').each(function() {
        //     var $item = $(this);
        //     img = $item.find("media\\:thumbnail").attr('url');
        //     alert(img);
        // })
        // table += "<tr><td>"+ "<img src = " + img + "></img>" + "</td></tr>";



        table += "<tr><td><b>" +
            x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
            "</td></tr></b><tr><td><br>"

        // date formatting from est to ist
        var date = x[i].getElementsByTagName("pubDate")[0].childNodes[0].nodeValue;
        //Tue, 07 Feb 2017 19:18:54 EST
        var subDate = date.substring(17,22);
        var time = subDate.split(":");
        var timeHrs = time[0] % 12;
        var timeMin = time[1];
        var istHr = (timeHrs + 10) % 12;
        var istMin = parseInt(timeMin) + 30;

        if (istMin >= 60) {
            istHr += 1;
            istMin %= 60;
        }

        var formattedDate = date.substring(0,16) + " " + istHr + ":" + istMin;
        table += formattedDate+"<br>" +
            x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue +
            "</td></tr>";
    }

    $(".col-sm-8").append(table);

}

function displayData() {
    var button = getUrlButtonValue()['button'];
    loadXMLDoc(button);
}