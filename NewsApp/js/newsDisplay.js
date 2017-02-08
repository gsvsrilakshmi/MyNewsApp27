
function getUrlVars () {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?')+ 1).split('&');
    for(var i = 0;i < hashes.length;i++) {
        hash = hashes[i].split("=");
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
      

function loadXMLDoc(type) {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200)  {
                    myFunction(this);
                }
            };
            var theUrl = "";
            
            switch(type) {
                case "AllNews" : theUrl = "https://rss.sciencedaily.com/all.xml";
                                    break;
                case "TopNews" : theUrl =  "https://rss.sciencedaily.com/top.xml";
                                    break;

                case "Science" : theUrl = " https://rss.sciencedaily.com/top/science.xml";
                                    break;
                case "Health" : theUrl = "https://rss.sciencedaily.com/top/health.xml";
                                    break;
                case  "Technology" : theUrl = "https://rss.sciencedaily.com/top/technology.xml";
                                    break;  
                case "Environment" : theUrl = " https://rss.sciencedaily.com/top/environment.xml";
                                    break;
                case "Society" : theUrl = "https://rss.sciencedaily.com/top/society.xml";
                                    break;
                case "StrangeAndOffbeat" : theUrl = "https://rss.sciencedaily.com/strange_offbeat.xml";
                                    break;
                case "MostPopular" : theUrl = "https://rss.sciencedaily.com/most_popular.xml";
                                    break;

            }
            xmlhttp.open("GET", theUrl,true);
            try {
           		 xmlhttp.send(null);
           	}catch(err) {
           		document.write("error resolved")
           	}
             
        }
        

        function myFunction(xml)  {
            var i,j;
            var xmlDoc = xml.responseXML;
            var table = "";
            var x = xmlDoc.getElementsByTagName("item");

            for (i = 0;i < x.length; i++)  {
                var xChildren = x[i].children;
                table += "<tr><td><b>" +
                x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
                "</td></b><td><br>" +
                // x[i].getElementsByTagName("pubDate")[0].childNodes[0].nodeValue +
                // "<br>" +
                x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue +
                "</td>";
                var date = x[i].getElementsByTagName("pubDate")[0].childNodes[0].nodeValue;
                //Tue, 07 Feb 2017 19:18:54 EST
                // var testDate = date.substring(0, date.length - 4);
                // alert(testDate)
                var subDate = date.substring(16,22);
                //alert(subDate)
                var time = subDate.split(":");
                var timeHrs = time[0] % 12;
                var timeMin = time[1];
                // alert(timeHrs + " " + timeMin)
                var istHr = (timeHrs + 10) % 12;
                var istMin = parseInt(timeMin) + 30
                if (istMin >= 60) {
                    istHr += 1;
                    istMin %= 60; 
                }
                var formattedDate = date.substring(0,16) + " " + istHr + ":" + istMin;
                alert(formattedDate)
                //table += "<td>"+formattedDate+"</td></tr>";
                // alert(time)
                 // for (j = 0;j < xChildren.length;j++) {
                 //    // alert(xChildren[j].toString())
                 //    if (xChildren[j] == "media") {
                 //        table += "<td>"+x[i].xChildren[j].attributes[0]+"</td></tr>";
                 //    }
                 // }
            }
          
            $(".col-sm-8").append(table);

        }

        function displayData() {
          var button = getUrlVars()['button'];
          loadXMLDoc(button);
        }
