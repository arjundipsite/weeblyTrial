// function dynamicPages() {
// 	var counter = 1;
// 	$("#sub-content-icon").click(function () {
// 		if (counter>5){
// 			alert("Only five pages allowed in free version");
// 			return false;
// 		}

// 		var newTextBoxDiv = $(document.createElement('div')).attr("id", 'TextBoxDiv' + counter);

// 		newTextBoxDiv.after().html('<label>TextBoxDiv #' + counter + ' : </label>' + '<input type="text" name="textbox' + counter + '" class="textbox' + counter + '" value="" >');
// 		newTextBoxDiv.appendTo(".list-content");

// 		counter++;
// 	})
// }

// function contentEdit () {
// 	var x = document.getElementById("add-title");
// 	if (x.contentEditable == "true") {
// 		x.contentEditable = 
// 	}
// }

/* Adding pages */

function addPage(){
	$("#sub-content-icon").click(function () {
		$(".page-button:first").clone().appendTo(".sub-content-pages"); 
	});
}

$('.sub-content-pages').hover(
    function() {
        $('#close-btn').show();
    }, function() {
        $('#close-btn').hide();
    }
);

$('#close-btn').click(function() {
  $(this).parent().remove();
  // or any other stuff as you want
});

/* end adding pages & customization */

/* Deleting elements on page */

function deleteDiv () {
	$('.delete-title').click(function() {
		$(this).parent().remove();
		return false;
	});

	$('.delete-content').click(function() {
		$(this).parent().remove();
		return false;
	});
}

/* End delete function */

/* Drag & drop function */

function dragTitle() {
    $( "#add-title" ).sortable({
        revert: false,
        cursor: "move"
        // placeholder: 'emptydiv'
    });
    $( "#list-item1" ).draggable({
        connectToSortable: "#add-title",
        helper: "clone",
        revert: "invalid"
    });
}

function dragContent() {
    $( "#title-content" ).sortable({
        revert: false,
        cursor: "move"
        // placeholder: 'emptydiv'
    });
    $( "#list-item2" ).draggable({
        connectToSortable: "#title-content",
        helper: "clone",
        revert: "invalid"
    });
}

/* Resizing function */

$(function() {
    $( "#images" ).resizable();
});

$(function() {
    $( "#title-content" ).resizable();
});

$(function() {
    $( "#add-title" ).resizable();
});

/* End resizing function */

/* End DnD function */

/* Adding pages */

// $("#sub-content-icon").click(addPage);

// function addPage() {
//   // Grabbing page title from input
//   var pageTitle = $(this).parent().find('input[name="page-title-form"]').val();

//   // Create new json to hold the new page title.
//   var json = {
//     "title": pageTitle
//   };

//   // Post the new page title and then reload page to show new page tab.
//   $.post("", json, function() {
//     window.location.reload();
//   });
// }

/* End adding pages function */

/* Sign out */

$('#signoutButton').on('click', function(event) {
    console.log('signout initiated')
    window.location.href ="http://localhost:1337/googleLogout";
});
