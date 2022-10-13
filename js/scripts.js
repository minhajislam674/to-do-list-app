function newItem(){
  //1. Adding a new item to the list of items:
  let $li = $('<li> </li>');
  let inputValue = $('#input').val();
  $li.append(inputValue);

  if (inputValue === '') {
    alert("You have to write something!");
  } else {
    $('#list').append($li);
  }

  //2. Crossing an item out:

	$li.on("dblclick", function crossOut() {
		$li.toggleClass('strike');
	});

  //3(i). Adding the delete button "X":

  let $crossOutButton = $('<crossOutButton></crossOutButton>')
  $crossOutButton.append(document.createTextNode('X'));
  $li.append($crossOutButton);

  //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:

  $crossOutButton.on('click', function deleteListItem() {
    $li.addClass('delete');
  });

  //Adding sort feature for list

  $('#list').sortable();
};
