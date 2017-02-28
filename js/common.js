$(document).ready(function() {

    var toDoList = $(".to-do-list");
    
// *************** Delete button functional ***************
    
    $(document).on('click', '.delete', function() {
        $(this).parents('li').remove();
    
    });

    
// ************** Completed button functional ******************8
    
    $(toDoList).on('click', '.completed', function() {
        var liForAppend = $(this).parents('li');
        liForAppend.addClass("cross");
        $(".completed-list").prepend(liForAppend);

    });
    

// *************** Add task button func *************************
    
    $(".add-task").click(function() {
       $(".hide-form").fadeIn("slow"); 
    });
    
    
// ********* Close button func ************************
    
    $(".close-bt").click(function() {
        $(".hide-form").fadeOut("slow");
    });
    
    
// *************** When we click on add note btn ***********************
    
    $(".add-note").click(function(e) {
        e.preventDefault();
        var inputVal = $("#new-note").val(),
            todoUl = $(".to-do-list"),
            newLi = $("<li></li>");
        
        if(inputVal) {
        var buttonsWrapper = $("<div></div>").addClass("buttons");
        
        var deleteBtn = $("<button></button>").addClass("delete");
        
        var completedBtn = $("<button></button>").addClass("completed");
        
        var iconDelete = $("<i></i>").addClass("fa fa-trash-o");
        
        var iconCompleted = $("<i></i>").addClass("fa fa-check");

            
// ************** append all **************************************
        
        $(deleteBtn).append(iconDelete);
        $(completedBtn).append(iconCompleted);
        $(buttonsWrapper).append(deleteBtn, completedBtn);
        $(newLi).append(buttonsWrapper, inputVal).addClass("to-do-li");
        $(todoUl).prepend(newLi);
        $("#new-note").val("");
        $(".hide-form").fadeOut("slow");
        } else {
            return false;
        };
            
    });
    

});