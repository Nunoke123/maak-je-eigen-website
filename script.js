// todo: fix creditskleur
document.addEventListener("DOMContentLoaded", () => {

    // ---------- Prevent form refresh (ENTER key fix) ----------
    document.querySelectorAll("form").forEach(f =>
        f.addEventListener("submit", e => e.preventDefault())
    );

    // ---------- Elements ----------
    const titel = document.getElementById("titel");
    const beschrijving = document.getElementById("beschrijving");
    const img = document.getElementById("afbeelding");
    const body = document.getElementById("body");

    const titelTekstVeld = document.getElementById("titelTekstVeld");
    const beschrijvingTekstVeld = document.getElementById("beschrijvingTekstVeld");
    const titelKleurColorpicker = document.getElementById("titelKleurColorpicker");
    const beschrijvingKleurColorpicker = document.getElementById("beschrijvingKleurColorpicker");
    const achtergrondKleurColorpicker = document.getElementById("achtergrondKleurColorpicker");

    const afbeeldingInput = document.getElementById("afbeeldingInput");

    const titelKnop = document.getElementById("titelKnop");
    const beschrijvingKnop = document.getElementById("beschrijvingKnop");
    const titelKleurKnop = document.getElementById("titelKleurKnop");
    const beschrijvingKleurKnop = document.getElementById("beschrijvingKleurKnop");
    const achtergrondKleurKnop = document.getElementById("achtergrondKleurKnop");
    const afbeeldingKnop = document.getElementById("afbeeldingKnop");
    const creditsKnop = document.getElementById("creditsKnop");

    const creditsElement = document.getElementById("credits");
    const naamElement = document.getElementById("naam");
    const creditsTekstVeld = document.getElementById("creditsTekstVeld");
    const creditsColorPicker = document.getElementById("creditsColorPicker");

    const forms = [
        "titelFormulier",
        "beschrijvingFormulier",
        "titelKleurFormulier",
        "beschrijvingKleurFormulier",
        "achtergrondKleurFormulier",
        "afbeeldingFormulier",
        "creditsFormulier"
    ];

    let beschrijvingKleur;

    // ---------- Step system (geen nesting meer) ----------
    function showStep(index) {
        forms.forEach(id =>
            document.getElementById(id).classList.add("hidden")
        );
        document.getElementById(forms[index]).classList.remove("hidden");
    }

    showStep(0);

    // ---------- LIVE PREVIEW ----------

    titelTekstVeld.addEventListener("input", () => {
        titel.textContent = titelTekstVeld.value;
        document.title = '"' + titelTekstVeld.value + '"';
    });

    beschrijvingTekstVeld.addEventListener("input", () => {
        beschrijving.textContent = beschrijvingTekstVeld.value;
    });

    titelKleurColorpicker.addEventListener("input", () => {
        titel.style.color = titelKleurColorpicker.value;
    });

    beschrijvingKleurColorpicker.addEventListener("input", () => {
        beschrijvingKleur = beschrijvingKleurColorpicker.value;
        beschrijving.style.color = beschrijvingKleur;
    });

    achtergrondKleurColorpicker.addEventListener("input", () => {
        body.style.backgroundColor = achtergrondKleurColorpicker.value;
    });

    creditsTekstVeld.addEventListener("input", () => {
        naamElement.textContent = creditsTekstVeld.value;
        // Show the credits preview as soon as the user starts typing so
        // they can see their name live (the #credits element is hidden by default)
        creditsElement.classList.remove("hidden");
    });

    creditsColorPicker.addEventListener("input", () => {
        naamElement.style.color = creditsColorPicker.value;
        // Also ensure the credits preview is visible when a color is chosen
        creditsElement.classList.remove("hidden");
    });

    // ---------- STEP BUTTONS ----------

    titelKnop.onclick = () => showStep(1);
    beschrijvingKnop.onclick = () => showStep(2);
    titelKleurKnop.onclick = () => showStep(3);
    beschrijvingKleurKnop.onclick = () => showStep(4);
    achtergrondKleurKnop.onclick = () => showStep(5);
    afbeeldingKnop.onclick = () => showStep(6);

    // ---------- IMAGE UPLOAD ----------

    afbeeldingInput.addEventListener("change", () => {
        const file = afbeeldingInput.files[0];

        if (file) {
            img.src = URL.createObjectURL(file);
        }
    });

    // ---------- DRAG & DROP IMAGE ----------

    body.addEventListener("dragover", e => e.preventDefault());

    body.addEventListener("drop", e => {
        e.preventDefault();

        const file = e.dataTransfer.files[0];

        if (file && file.type.startsWith("image")) {
            img.src = URL.createObjectURL(file);
        }
    });

    // ---------- FINAL STEP ----------

    creditsKnop.onclick = () => {

        const naam = creditsTekstVeld.value;
        const kleur = creditsColorPicker.value;

        naamElement.textContent = naam;
        creditsElement.style.color = beschrijvingKleur
        naamElement.style.color = kleur;

        creditsElement.classList.remove("hidden");

        document.title = `"${titel.textContent}" door ${naam}`;

    document.getElementById("creditsFormulier").classList.add("hidden");

    // Allow the browser to repaint the DOM changes before showing the blocking alert
    // (browsers sometimes delay painting until JavaScript yields; calling alert
    // immediately can show the dialog before visual updates are rendered)
    setTimeout(() => alert("Klaar! 🎉"), 300);
    };

});
