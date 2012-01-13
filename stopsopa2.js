 var stopsopa = {
       pagehtml: document.getElementsByTagName("html")[0],
       pagebody: document.getElementsByTagName("body")[0],
       sopaText: "Stop SOPA",
       // change to whatever you want
       date: new Date(),
       blackout: function () {
           var pageAry = [stopsopa.pagehtml, stopsopa.pagebody];
           for (var i in pageAry) {
               pageAry[i].setAttribute("style", "background:white;height:100%;");
           }
           //stopsopa.pagebody.setAttribute("style", "background:white;height:100%;");
           var div = document.createElement("div");
           div.setAttribute("style", "width:100%;text-align:center;font-size:130px;color:red;text-transform:uppercase;white-space:nowrap;font-family:arial, san-serif;font-weight:bold;background:black;padding:50px 20px;line-height:1.2em;position:absolute;top:50%;margin-top:-100px;");
           var text = document.createTextNode(stopsopa.sopaText);
           stopsopa.pagebody.innerHTML = "";
           div.appendChild(text);
           stopsopa.pagebody.appendChild(div);
       },
       actionDate: function () {
           if (stopsopa.date.getMonth() === 0 && stopsopa.date.getDate() === 12 && stopsopa.date.getYear() === 112) {
               stopsopa.blackout();
           }
       }
   };
   stopsopa.actionDate();
