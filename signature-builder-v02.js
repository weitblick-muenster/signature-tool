function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand("copy");
    var msg = successful ? "successful" : "unsuccessful";
    console.log("Fallback: Copying text command was " + msg);
  } catch (err) {
    console.error("Fallback: Oops, unable to copy", err);
  }

  document.body.removeChild(textArea);
}

function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(
    function() {
      console.log("Async: Copying to clipboard was successful!");
    },
    function(err) {
      console.error("Async: Could not copy text: ", err);
    }
  );
}

var isMobile = false;
function mobileChange() {
  isMobile = !isMobile;
  document.getElementById("vorschau").innerHTML = buildSignature();
}

var isSocialLinks = false;
function socialLinksChange() {
  isSocialLinks = !isSocialLinks;
  document.getElementById("vorschau").innerHTML = buildSignature();
}

function copy() {
  window.getSelection().selectAllChildren(document.getElementById("vorschau"));
  document.execCommand("copy");
  document.getSelection().removeAllRanges();
}

/**
 * Stößt den Download der Signatur an
 */
function dwnl() {
  let element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(buildSignature())
  );
  element.setAttribute("download", "signature.htm");
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();

  document.body.removeChild(element);
}
/**
 * Stellt die Signatur in der 'Vorschau' dar
 */
function previewSignature() {
  document.getElementById("vorschau").innerHTML = buildSignature();
}

/**
 * Setzt die Signatur mit den eingegebenen Daten zusammen
 */
function buildSignature() {
  var city_arr = ["Bayreuth", "Berlin", "Bochum", "Bonn", "Duisburg-Essen", "Freiburg", "Göttingen", "Hamburg", "Hannover", "Heidelberg", "Kiel", "Köln","Leipzig", "Marburg", "München", "Münster", "Osnabrück", "Bundesverband", "plus", ""]
  var address_arr = [
    "c/o Benedikt Rampelt </br>Friedrichstraße 53 | 95444 Bayreuth",
    "Tegeler Straße 38 | 13353 Berlin",
    "c/o Lewe </br>Bläulingsweg 5 | 45279 Essen",
    "Postfach 7169 | 53071 Bonn",
    "Universität Duisburg-Essen/Institut für Politikwissenschaft/LF Gebäude</br>Forsthausweg 2 | 47057 Duisburg",
    "Postfach 0602 | 79006 Freiburg im Breisgau",
    "Niedersächsische Staats- und Universitätsbibliothek Göttingen</br>Platz der Göttinger Sieben 1 | 37073 Göttingen",
    "c/o Hannah Ruprecht</br>Schlankreye 11 | 20144 Hamburg",
    "Königsworther Platz 1 | 30167 Hannover",
    "c/o Tobias Held</br>Franz-Knauff-Straße 1 | 69115 Heidelberg",
    "AStA Büro CAU Kiel</br>Westring 385 | 24118 Kiel",
    "z. Hd. Nadja Markowski</br>Dürener Str. 290 | 50935 Köln - Lindenthal",
    "c/o Jule Hegmann</br>Prager Str. 29 | 04317 Leipzig",
    "Postfach 2133 | 35009 Marburg",
    "Kaulbachstraße 25 | 80539 München",
    "Universitätsstraße 14-16 | 48143 Münster",
    "Wiebke Spree</br>Bramscher Straße 63 | 49088 Osnabrück",
    "Scanbox #01445 </br>Ehrenbergstraße 16a | 10245 Berlin",
    "Bundesverband Weitblick e. V. c/o Weitblick plus e. V.</br>Scanbox #01445</br>Ehrenbergstraße 16a | 10245 Berlin",
    "Musterstraße 77 | 12345 Weitblickhausen"
    ]
  let name = document.getElementById("name").value
    ? document.getElementById("name").value
    : "Max Mustermann";
  let city = city_arr[document.getElementById("city").value]
  let address = address_arr[document.getElementById("city").value]
  let email = document.getElementById("email").value
    ? document.getElementById("email").value
    : "max.mustermann@weitblicker.org";
  let pos1 = document.getElementById("position1").value
    ? document.getElementById("position1").value
    : "";
  let pos2 = ""

  if (pos1.length > 0){
    pos2 = "<br>"
  }
  let fb = "";
  if ((isMobile || isSocialLinks)) {
    fb = `<a style="color: rgb(59, 89, 152);" href="https://www.facebook.com/WeitblickMuenster/">facebook</a>`;
  } else {
    fb = `<a href="https://www.facebook.com/WeitblickMuenster/"><img src="resources/signatur_logo_facebook.png" alt=""></a>`;
  }
  let separator = "";
  if (!isMobile) {
    separator =
      "<br><img src='resources/separator.jpg'>";
  }
  let logo = "";
  if (!isMobile) {
    logo =
      "<br><img style= 'padding: 10px;' src='https://weitblicker.org/sites/default/files/muenster_0.png' alt='YourName'>";
  }

  let signatur = `<!DOCTYPE html>
    <html>
    <body>
      ${logo}
      <br>
      <p style="border-top: 1px dotted #FF9900; font-family: 'Open Sans', sans-serif; font-size: 9pt; color: #000000; font-weight: 300; padding-top: 10px; width: 270px">
          <span style= "font-size: 12pt; color: #FF9900; font-weight: lighter; margin: 0 0 6px 0;">${name}</span>
          <br>
          ${pos2} ${pos1}
          <br> ${email}
          <br><span style="font-size: 9pt; color: #000000; font-weight: lighter;	margin: 0px;">
            <br> Weitblick ${city} e.V.
            <br> ${address}
            <br><a style="text-decoration: none; color: #000000; font-weight: bold;	margin: 0px;" href="http://www.weitblicker.org/Stadt/${city}">www.weitblicker.org/Stadt/${city}</a>
          </span>
      </p>
      <div style="font-family: Tahoma, sans-serif; line-height: 110%; font-size: 10pt; margin: 13.333px 0px 13.333px 0px">
          ${fb}
      </div>
    </body>
    </html>`;
  signatur = replaceUmlauts(signatur);
  return signatur;
}

/**
 * Ersetzt alle Umlaute (und 'ß') in der Signatur durch entsprechende "UTF-Codierung" um Darstellungsfehler zu vermeiden
 */
function replaceUmlauts(text) {
  text = text.replace(/ä/g, "&auml;");
  text = text.replace(/ü/g, "&uuml;");
  text = text.replace(/ö/g, "&ouml;");
  text = text.replace(/ß/g, "&szlig;");
  return text;
}
