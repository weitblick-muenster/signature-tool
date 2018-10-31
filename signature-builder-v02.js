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
  let name = document.getElementById("name").value
    ? document.getElementById("name").value
    : "Max Mustermann";
  let phone = document.getElementById("phone").value
    ? document.getElementById("phone").value
    : "123456789";
  let email = document.getElementById("email").value
    ? document.getElementById("email").value
    : "max.mustermann@yourdomain.de";
  let pos1 = document.getElementById("position1").value;
  let pos2 = document.getElementById("position2").value
    ? document.getElementById("position2").value
    : "Finanzen";
  let linkedIn = "";
  if (document.getElementById("linkedin").value) {
    let url = document.getElementById("linkedin").value;
    if ((isMobile || isSocialLinks)) {
      linkedIn = ` | <a style="color: #0077B5;" href="${url}">linkedin</a>`;
    } else {
      linkedIn = `<a href="${url}"><img src="http://yourdomain.de/signaturen-beta/resources/signatur_logo_linkedin.png"></a>`;
    }
  }
  let xing = "";
  if (document.getElementById("xing").value) {
    let url = document.getElementById("xing").value;
    if ((isMobile || isSocialLinks)) {
      xing = ` | <a style="color: #026466;" href="${url}">xing</a>`;
    } else {
      xing = `<a href="${url}"><img src="http://yourdomain.de/signaturen-beta/resources/signatur_logo_xing.png"></a>`;
    }
  }
  let fb = "";
  if ((isMobile || isSocialLinks)) {
    fb = `<a style="color: rgb(59, 89, 152);" href="https://www.facebook.com/linktofb/">facebook</a>`;
  } else {
    fb = `<a href="https://www.facebook.com/linktofb/"><img src="http://yourdomain.de/resources/signatur_logo_facebook.png" alt=""></a>`;
  }
  let separator = "";
  if (!isMobile) {
    separator =
      "<br><img src='http://yourdomain.de/signaturen-beta/resources/separator.jpg'>";
  }
  let logo = "";
  if (!isMobile) {
    logo =
      "<br><img src='http://yourdomain.de/resources/logo.png' alt='YourName'>";
  }

  let signatur = `<!DOCTYPE html>
    <html>
    <body>
        ${separator}
        ${logo}
        <p style="font-family: Tahoma, sans-serif; line-height: 110%; font-size: 10pt; margin: 13.333px 0px 13.333px 0px">
            <span style="font-size: 11pt;">${name}</span>
            <br>
            <span style="color: #0e4194;">${pos1} ${pos2}</span>
            <br> ${email}
            <br> +49 (0) ${phone}
            <br>
            <br> YourName
            <br> Universitätsstraße 14-16 | 48143 Münster
            <br> <a style="color:black;" href="yourdomain.de">yourdomain</a>
        </p>
        <div style="font-family: Tahoma, sans-serif; line-height: 110%; font-size: 10pt; margin: 13.333px 0px 13.333px 0px">
            ${fb}${linkedIn}${xing}
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
