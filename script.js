document.addEventListener("DOMContentLoaded", function () {
    const titelElement = document.getElementById("titel");
    const beschrijvingElement = document.getElementById("beschrijving");
    const afbeeldingElement = document.getElementById("afbeelding");
    const creditsElement = document.getElementById("credits");
    const naamElement = document.getElementById("naam");
    const bodyElement = document.getElementById("body");
    const titelForm = document.getElementById("titelFormulier");
    const beschrijvingForm = document.getElementById("beschrijvingFormulier");
    const titelKleurForm = document.getElementById("titelKleurFormulier");
    const beschrijvingKleurForm = document.getElementById("beschrijvingKleurFormulier");
    const achtergrondKleurForm = document.getElementById("achtergrondKleurFormulier");
    const afbeeldingForm = document.getElementById("afbeeldingFormulier");
    const afbeeldingInput = document.getElementById("afbeeldingInput");
    const creditsForm = document.getElementById("creditsFormulier");

    titelForm.classList.remove("hidden");

    document.getElementById("titelKnop").addEventListener("click", function () {
        let titel = document.getElementById("titelTekstVeld").value;
        titelElement.textContent = titel;
        document.title = '"' + titel + '"';
        titelForm.classList.add("hidden");

        beschrijvingForm.classList.remove("hidden");

        document.getElementById("beschrijvingKnop").addEventListener("click", function () {
            let beschrijving = document.getElementById("beschrijvingTekstVeld").value;
            beschrijvingElement.textContent = beschrijving;
            beschrijvingForm.classList.add("hidden");

            titelKleurForm.classList.remove("hidden");

            document.getElementById("titelKleurKnop").addEventListener("click", function () {
                let titelKleur = document.getElementById("titelKleurColorpicker").value;
                titelElement.style.color = titelKleur;
                titelKleurForm.classList.add("hidden");

                beschrijvingKleurForm.classList.remove("hidden");

                document.getElementById("beschrijvingKleurKnop").addEventListener("click", function () {
                    let beschrijvingKleur = document.getElementById("beschrijvingKleurColorpicker").value;
                    beschrijvingElement.style.color = beschrijvingKleur;
                    beschrijvingKleurForm.classList.add("hidden");

                    achtergrondKleurForm.classList.remove("hidden");

                    document.getElementById("achtergrondKleurKnop").addEventListener("click", function () {
                        let achtergrondKleur = document.getElementById("achtergrondKleurColorpicker").value;
                        bodyElement.style.backgroundColor = achtergrondKleur;
                        achtergrondKleurForm.classList.add("hidden");

                        afbeeldingForm.classList.remove("hidden");

                        document.getElementById("afbeeldingKnop").addEventListener("click", function () {
                            const bestand = afbeeldingInput.files[0];

                            if (bestand) {
                                const imageURL = URL.createObjectURL(bestand);
                                afbeeldingElement.src = imageURL;
                            }

                            afbeeldingForm.classList.add("hidden");

                            creditsForm.classList.remove("hidden");

                            document.getElementById("creditsKnop").addEventListener("click", function () {
                                let credits = document.getElementById("creditsTekstVeld").value;
                                creditsElement.style.color = beschrijvingKleur;
                                creditsElement.classList.remove("hidden");
                                naamElement.textContent = credits;
                                naamElement.style.color = "gold";
                                document.title = '"' + titel + '"' + " door " + credits;
                                creditsForm.classList.add("hidden");
                            });
                        });
                    });
                });
            });
        });
    });
});