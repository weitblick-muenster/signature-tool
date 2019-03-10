<!DOCTYPE html>
<html lang='en'>

<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <meta http-equiv='X-UA-Compatible' content='ie=edge'>
    <!-- TODO: Add a favicon -->
    <!-- <link rel="icon" href=""> -->
    <!-- Bootstrap Styles importieren -->
    <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' integrity='sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm'
        crossorigin='anonymous'>
    <!-- Eigene Styles importieren -->
    <link rel='stylesheet' href='style.css'>
    <!--Font Awesome Icons importieren -->
    <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>


    <title>Signaturen-Tool</title>
</head>

<body onload="previewSignature()">
    <div class='container'>
        <div class="row">
            <div id="heading" class="col">
                <h2>Signaturen-Tool</h2>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class='card'>
                    <div class='card-body'>
                        <h5 class="card-title">
                            <span class="badge badge-pill badge-dark">1</span> Anleitung</h5>
                        <p class="card-text">
                            Tragt rechts eure pers&ouml;nlichen Daten ein. Ihr k&ouml;nnt (optional) eure Position im
                            Verein angeben (Vorstand, Gruppenleitung etc.)
                            <br>
                            <br>
                            <i class="far fa-lightbulb text-info"></i> Um die Signatur in euer Mail-Programm
                            einzubinden folgt ihr den Anleitungen unten.
                        </p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <h5 class="card-title col-8">
                                <span class="badge badge-pill badge-dark">3</span> Vorschau
                            </h5>
                            <div class="col-4">
                                <label class="checkbox-inline small">
                                    <input type="checkbox" onchange="mobileChange()" value=""> Mobile?</label>
                                <label class="checkbox-inline small">
                                    <input type="checkbox" onchange="socialLinksChange()" value=""> Social Links?</label>
                            </div>
                        </div>
                        <div id="vorschau"></div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class='card'>
                    <div class='card-body'>
                        <h5 class="card-title">
                            <span class="badge badge-pill badge-dark">2</span> Eingabefelder</h5>
                        <form>
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="input" class="form-control" id="name" placeholder="Max Mustermann" oninput="previewSignature()">
                            </div>
                            <label for="city">Weitblick Stadt</label>
                            <div class="input-group mb-3">
                              <input type="text" id="city" class="form-control" placeholder="Weitblick M&uuml;nster e.V." oninput="previewSignature()">
                            </div>
                            <div class="form-group">
                                <label for="email">E-Mail</label>
                                <input type="email" class="form-control" id="email" oninput="previewSignature()" placeholder="max.mustermann@weitblicker.org">
                            </div>
                            <div class="form-group">
                                <label for="position1">Position</label>
                                <input type="input" class="form-control" id="position1" placeholder="Stadtvorstand" oninput="previewSignature()">
                            </div>
                            <a class='btn btn-primary' onclick='copy()'>Kopieren
                                <i class="fas fa-copy"></i>
                            </a>
                            <a class='btn btn-primary' onclick='dwnl()'>Download
                                <i class="fas fa-download"></i>
                            </a>
                        </form>

                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">
                            <span class="badge badge-pill badge-dark">4</span> Signatur einbinden</h5>
                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="pill-outlook-tab" data-toggle="pill" href="#outlook-tab"
                                    role="tab">
                                    <i class="fab fa-windows"></i> + Outlook</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="pill-thunderbird-tab" data-toggle="pill" href="#thunderbird-tab"
                                    role="tab">
                                    <i class="fab fa-windows"></i> + Thunderbird</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="pill-mail-tab" data-toggle="pill" href="#mail-tab" role="tab">
                                    <i class="fab fa-apple"></i> + Mail</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="outlook-tab" role="tabpanel">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        1.
                                        <i class="fab fa-windows"></i>-Taste+R dr&uuml;cken
                                    </li>
                                    <li class="list-group-item">
                                        2. Kopiert den Pfad "
                                        <span class="font-italic text-secondary">%AppData%\Microsoft\Signatures</span>
                                        " in das Eingabefeld und dr&uuml;ckt Enter.
                                    </li>
                                    <li class="list-group-item">
                                        3. Kopiert eure heruntergeladenen Signatur in den Ordner, der sich &ouml;ffnet.
                                    </li>
                                    <li class="list-group-item">
                                        4. &Ouml;ffnet Outlook; Beim Verfassen einer neuen Mail klickt auf die Registerkarte
                                        <span class="font-italic text-secondary">"Einf&uuml;gen"</span>
                                        dann
                                        <span class="font-italic text-secondary">"Signatur"</span> und schlie&szlig;lich
                                        <span class="font-italic text-secondary">"Signaturen..."</span>
                                        <br>
                                        <img class="screenshot" src="resources/outlook_img_1.png" alt="Screenshot Outlook">
                                    </li>
                                    <li class="list-group-item">
                                        5. W&auml;hlt in dem sich &ouml;ffnenden Dialogfenster eure Signatur aus und &uuml;bernehmt
                                        die Einstellungen wie unten dargestellt.
                                        <br>
                                        <img class="screenshot" src="resources/outlook_img_2.png" alt="Outlook Screenshot">
                                    </li>
                                    <li class="list-group-item">
                                        6.
                                        <span class="font-weight-bold">Fertig
                                            <i class="fas fa-check"></i>
                                        </span> Beim Verfassen einer neuen E-Mail mit eurer Adresse erscheint jetzt
                                        automatisch
                                        die Signatur.
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-pane fade" id="thunderbird-tab" role="tabpanel">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        1. Rechtsklick auf euer Konto und dann den Men&uuml;punkt
                                        <span class="font-italic text-secondary">"Einstellung"</span> ausw&auml;hlen.
                                        <br>
                                        <img class="screenshot" src="resources/thunderbird_img_1.png" alt="Thunderbird screenshot"
                                            srcset="">
                                    </li>
                                    <li class="list-group-item">
                                        2. Setzt im sich &ouml;ffnenden Men&uuml;fenster den Haken bei
                                        <span class="font-italic text-secondary">"Stattdessen eine Datei ...</span> und
                                        w&auml;hlt unter
                                        <span class="font-italic text-secondary">"Durchsuchen"</span> eure Signatur
                                        aus.
                                        <br>
                                        <img class="screenshot" src="resources/thunderbird_img_2.png" alt="Thunderbird Screenshot"
                                            srcset="">
                                    </li>
                                    <li class="list-group-item">
                                        3.
                                        <span class="font-weight-bold">Fertig
                                            <i class="fas fa-check"></i>
                                        </span> Beim Verfassen einer neuen E-Mail mit eurer Adresse erscheint jetzt
                                        automatisch
                                        die Signatur.
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-pane fade" id="mail-tab" role="tabpanel">Work in progress
                                <i class="fas fa-wrench"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="footer" class="container">
        Made with
        <i class="fas fa-heart"></i>
    </div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>
    <!-- Eigenes Script importierem -->
    <script type='text/javascript' src='signature-builder-v02.js'></script>
</body>

</html>
