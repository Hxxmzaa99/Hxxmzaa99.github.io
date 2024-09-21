function compteARebours() {
    const affichageCountdown = document.getElementById('countdown-timer');

    const dateFin = new Date('2026-12-31T23:59:59').getTime(); // Fin du diplome

    const intervalCountdown = setInterval(function() {
        const maintenant = new Date().getTime();
        const tempsRestant = dateFin - maintenant;

        const totalSecondesRestantes = Math.floor(tempsRestant / 1000);
        const annees = Math.floor(totalSecondesRestantes / (3600 * 24 * 365.25));
        const mois = Math.floor((totalSecondesRestantes % (3600 * 24 * 365.25)) / (3600 * 24 * 30));
        const jours = Math.floor((totalSecondesRestantes % (3600 * 24 * 30)) / (3600 * 24));
        const heures = Math.floor((totalSecondesRestantes % (3600 * 24)) / 3600);
        const minutes = Math.floor((totalSecondesRestantes % 3600) / 60);
        const secondes = totalSecondesRestantes % 60;

        affichageCountdown.innerHTML =
            (annees < 10 ? '0' + annees : annees) + " annees, " +
            (mois < 10 ? '0' + mois : mois) + " mois, " +
            (jours < 10 ? '0' + jours : jours) + " jours, " +
            (heures < 10 ? '0' + heures : heures) + ":" +
            (minutes < 10 ? '0' + minutes : minutes) + ":" +
            (secondes < 10 ? '0' + secondes : secondes);

        // Si le compte a rebours est termine 
        if (tempsRestant < 0) {
            clearInterval(intervalCountdown);
            affichageCountdown.innerHTML = "C'est le grand jour !";
        }
    }, 1000);
}

window.addEventListener('load', function() {
    compteARebours();
});
