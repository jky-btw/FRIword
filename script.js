var wordList = {};
var wordListLength = 0;

$.getJSON("friword.json", function (data) {
  wordList = data;
  wordListLength = Object.keys(wordList).length;

  changeWord();
});

function changeWord() {
  const i = Math.floor(Math.random() * wordListLength);
  const word = Object.keys(wordList)[i];
  const definition = wordList[word];

  const splitArray = word.split(new RegExp(/([F|f]r[i|í])/));

  $(".left").css("opacity", "0");
  $(".right").css("opacity", "0");

  $(".left").text(splitArray[0]);
  $(".right").text(splitArray[2]);

  $(".left").animate({ opacity: 1 }, 600);
  $(".right").animate({ opacity: 1 }, 600);

  $(".definitionContainer").empty();

  definition.forEach((element) => {
    $(".definitionContainer").append(
      '<div class="definition">' + element + "</div>"
    );
  });

  $(".definition").fadeIn(700);

  $(document).one("DOMMouseScroll mousewheel click", function (e) {
    changeWord();
  });
}
