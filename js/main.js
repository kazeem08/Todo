$(document).ready(function(){

    $('#submit').click(function(){
        var entry = $('#input').val();
        
        $.ajax({
            type: 'GET',
            url:'https://jsonplaceholder.typicode.com/todos',
            
            success: function(data){
                let title = this.title
                //let character = title.includes(entry);
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

    })




});

