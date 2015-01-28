And finally, for ex 3: form validation:

Add <form name="addForm" class="add-form">
...
</form>

To app/sections/task-add/task-add.html

Add the following attributes to the description field:
  name="description"
  ng-maxlength='10'
  required

Add ng-disabled="taskAdd.addForm.$invalid" to the buttons.

- At this point the button should be disabled if description is empty or more
than 10 chars.

Add this to css/styles.css (these are classes we get from Angular):

.add-form input.ng-invalid.ng-touched {
  background-color: #FDD;
}

.add-form input.ng-valid.ng-touched {
  background-color: #DFD;
}

This will highlight the description field's background based on whether the data
is valid or not, once the input loses the keyboard focus.