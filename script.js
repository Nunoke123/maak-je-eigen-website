document.addEventListener("DOMContentLoaded", function() {
    const titelElement = document.getElementById("titel");
    const beschrijvingElement = document.getElementById("beschrijving");
    const afbeeldingElement = document.getElementById("afbeelding");
    const titelForm = document.getElementById("titelFormulier");
    const beschrijvingForm = document.getElementById("beschrijvingFormulier");

    titelForm.classList.remove("hidden");

    document.getElementById("titelKnop").addEventListener("click", function () {
        let titel = document.getElementById("titelTekstVeld").value;
        titelElement.textContent = titel;
        titelForm.classList.add("hidden");

        beschrijvingForm.classList.remove("hidden");

        document.getElementById("beschrijvingKnop").addEventListener("click", function () {
                let beschrijving = document.getElementById("beschrijvingTekstVeld").value;
                beschrijvingElement.textContent = beschrijving;
                beschrijvingForm.classList.add("hidden");
            }); 
    });
});