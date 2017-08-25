
var friends = require('../data/friends.js');
module.exports = function(app){

    app.get('/api/friends', function(req, res){
        res.json(friends);
    });


    app.post('/api/friends', function(req, res){

        var userResponse  = req.body.scores;
        var match = {
            name: "",
            photo: "",
        };
       
         
        for(var i = 0; i< friends.length; i++) {

            var totalDifference = 0;
            var scorefriendlist = friendData[i].scores
            
            for (var j=0; j< scorefriendlist.length; j++){
               
                var difference = Math.abs(parseInt(userResponse[j]) - parseInt(scorefriendlist[j]));
                totalDifference = totalDifference+ difference;
                
                // I couldnt figure out how to get the least amount of difference,
                // if (totalDifference ){
                //     match.name = friends[i].name;
                //     match.photo = friends[i].photo;
                    
                // }
            }
        }

 
    
 
        res.json();

    });

}