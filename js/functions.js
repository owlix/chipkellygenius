$(document).ready(function() {

    writeSchedule();

    $('#standings').text(standings);

    var maxId = 0;

    function App() {

        while (maxId != getCurrentId()) {
            getTweets();
        }

    }
    getTweets();

});

var standings = '2 - 3';

var winpercent = 2 / 5;

var schedule = [

    {
        'team': 'Falcons',
        'outcome': 'L'
    }, {
        'team': 'Cowboys',
        'outcome': 'L'
    }, {
        'team': 'Jets',
        'outcome': 'W'
    }, {
        'team': 'Redskins',
        'outcome': 'L'
    }, {
        'team': 'Saints',
        'outcome': 'W'
    }, {
        'team': 'Giants',
        'outcome': '?'
    }, {
        'team': 'Panthers',
        'outcome': '?'
    }, {
        'team': 'Cowboys',
        'outcome': '?'
    }, {
        'team': 'Dophins',
        'outcome': '?'
    }, {
        'team': 'Bucs',
        'outcome': '?'
    }, {
        'team': 'Lions',
        'outcome': '?'
    }, {
        'team': 'Patriots',
        'outcome': '?'
    }, {
        'team': 'Bills',
        'outcome': '?'
    }, {
        'team': 'Cardinals',
        'outcome': '?'
    }, {
        'team': 'Redskins',
        'outcome': '?'
    }, {
        'team': 'Giants',
        'outcome': '?'
    }


];

function getTweets() {

    $.ajax({
        url: 'lib/getTweets.php',
        cache: true,
        success: function(response) {
            var obj = jQuery.parseJSON(response);

            //  maxId = obj.statuses[0].id;

            //getCurrentId(maxId);

            var obj2 = [];
            for (i = 0; i < obj.statuses.length; i++) {
                obj2.push(obj.statuses[i].text);
            }

            getSentiments(obj2);


        }
    });

}

function getSentiments(obj2) {

    $.ajax({
        type: "POST",
        dataType: "json",
        url: 'lib/getSentiment.php',
        data: {
            txt: obj2
        },
        cache: true,
        success: function(response) {

            var results = {
                'Positive': 0,
                'Negative': 0,
                'Neutral': 0
            };

            for (i = 1; i < response.length; i++) {

                results[response[i].result]++;
            }

           console.log(results);
           
           var realScore = 50;
                      
           var percent = 0;
           
           if (results.Positive > 50 ) {
	           
	            percent = (results.Positive / 100);
	          	           
	        	realScore = 50 * (1 + percent); 	
	           
           }else if (results.Negative > 50 )   {
	           
	           	percent = (results.Negative / 100);
	            
	            realScore = 50 * (1 - percent); 
	            
           }
			
            //var realScore = (score / total) * 100);
                        
            console.log('Real Score: ' + realScore); 
            
            $('span#inner').css('opacity', '.8');
            
            $('span#inner').css('left', realScore + '%');

            
            //$('span#inner').css('left', realScore + '%');

        }
    });


}


function writeSchedule() {


    //prints out schedule from schedule array.
    var j = 0;

    while (j < schedule.length) {
        $('#list').append('<li><ul><li>' + schedule[j].team + '</li><li>' + schedule[j].outcome + '</li></ul></li>');
        j++
    }

    //color L's red
    var elem = $('#schedule ul > li >ul > li:nth-child(2)');
    var num = elem.length;
    var i = 0;
    while (i < num) {
        if ($(elem[i]).text() === 'L') {

            $(elem[i]).css('color', 'red');

        } else if ($(elem[i]).text() === '?') {

            $(elem[i]).css('color', 'grey');

        }

        i++;
    }


}


/*function writeId(max_id) {
	
  $.ajax({
	  type: "GET",
      url: 'lib/writeFile.php',
      data: {max_id},
      cache: true,
      success: function(response) { 
	      console.log(response);
      }
  });

}*/

/*function getCurrentId(){
		
  $.ajax({
	  type: "GET",
      url: 'lib/writeFile.php',
      cache: true,
      success: function(response) {
         var current_id = $.parseJSON(response).data;
         if(maxId > current_id){
	         writeId(maxId);
          }
          
       }
       
  });

}*/