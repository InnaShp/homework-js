const $checkboxes = $('input[type="checkbox"]');
let selectedCount = 0;

function handleCheckboxChange() {
  if (this.checked) selectedCount++;
  else selectedCount--;
  
  if (selectedCount === 3) disableCheckboxes();
  else enableCheckboxes();
}

function disableCheckboxes() {
  $checkboxes.not(':checked').prop('disabled', true);
}

function enableCheckboxes() {
  $checkboxes.prop('disabled', false);
}

$checkboxes.on('change', handleCheckboxChange);
