$(document).ready(function(){

    $('#submit').click(function(){
        var entry = $('#input').val();
        
        $.ajax({
            type: 'GET',
            url:'https://jsonplaceholder.typicode.com/todos',
            
            success: function(data){
                let title = this.title
                
                for(let i of data){
                    let character = i.title.includes(entry);
                    if(character){
                         console.table(i);
                        //$('#output').append(i);
                    }

                }
                
            }

        })
        
    });

    $('#submitForId').click(function(){

         entryId = $('#inputNumber').val();

        $.ajax({
            type: 'GET',
            url:`https://jsonplaceholder.typicode.com/todos/${entryId}`,

            success: function(data){
                console.table(data)
            }

        })

    });

    $('#submitForGit').click(function(){
        let user = $('#inputForGit').val();
        $.ajax({
            
            type:'GET',
            url: `https://api.github.com/users/${user}`,

            success: function(data){
                console.table(data);
            }

        });
    });

});

