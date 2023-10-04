const rgpdBanner = document.getElementById("rgpd-banner");
const acceptButton = document.getElementById("rgpd-accept");

function acceptTerms() {
  if (!document.cookie.split('; ').find(row => row.startsWith('cookiesAccepted'))) {
    document.cookie = "cookiesAccepted=true;max-age=31536000;samesite=lax";
    rgpdBanner.style.display = "none";
  }
}

function displayBanner() {
  if (!document.cookie.split('; ').find(row => row.startsWith('cookiesAccepted'))) {
    rgpdBanner.style.display = "flex";
  }
}

displayBanner();


acceptButton.addEventListener("click", acceptTerms);
