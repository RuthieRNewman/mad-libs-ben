$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput= $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

    const storyArray = [person1Input, person2Input, animalInput, exclamationInput, verbInput, nounInput];

    storyArray.forEach(function(element) {
      if (element === person1Input) {
        $(".person1").text(person1Input);
      } else if (element === person2Input) {
        $(".person2").text(person2Input);
      } else if (element === animalInput) {
        $(".animal").append(animalInput);
      } else if (element === exclamationInput) {
        $(".exclamation").append(exclamationInput);
      } else if (element === verbInput) {
        $(".verb").append(verbInput);
      } else if (element === nounInput) {
        $(".noun").append(nounInput);
      } 
    });

    $("#story").show();

    event.preventDefault();
 
  });
}); 