const business = {
    name: "Jonefer",
    googleReviewUrl:
        "https://maps.google.com/maps/place/Terra+Mango/@7.1615505,125.5784306,13z/data=!4m12!1m2!2m1!1sTerra+Mango+Davao!3m8!1s0x32f96b007dd388e5:0x14d3ca6e3953940c!8m2!3d7.1615224!4d125.64233!9m1!1b1!15sChFUZXJyYSBNYW5nbyBEYXZhb1oTIhF0ZXJyYSBtYW5nbyBkYXZhb5IBDmljZV9jcmVhbV9zaG9w4AEA!16s%2Fg%2F11y3hnqrfj?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
    facebookUrl: "https://www.facebook.com/terramangoph",
    tiktokUrl: "https://www.tiktok.com/@terramango",
    developerProfileUrl: "https://ep-webcraft.vercel.app/",
};
document.title = `${business.name} | Reviews & Socials`;
const name = document.querySelector("#business-name");
if (name) name.textContent = business.name;
const links = {
    ".review-action": business.googleReviewUrl,
    ".facebook-action": business.facebookUrl,
    ".tiktok-action": business.tiktokUrl,
    ".developer-credit": business.developerProfileUrl,
};
Object.entries(links).forEach(([selector, url]) => {
    const el = document.querySelector(selector);
    if (el && url) el.href = url;
});
const observer = new IntersectionObserver(
    (entries) =>
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        }),
    { threshold: 0.08 },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
