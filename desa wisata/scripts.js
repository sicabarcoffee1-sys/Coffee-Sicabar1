const testimonials = [
  {
    text: "Desa Indah memberikan pengalaman yang tak terlupakan! Alamnya sangat mempesona dan masyarakatnya ramah.",
    name: "Rina, Jakarta"
  },
  {
    text: "Suasana tenang dan pemandangan alamnya luar biasa. Saya sangat merekomendasikan untuk liburan keluarga.",
    name: "Budi, Surabaya"
  },
  {
    text: "Festival budaya di desa ini sangat menarik dan autentik. Saya belajar banyak tentang tradisi lokal.",
    name: "Sari, Bandung"
  }
];

let index = 0;
const testimonialEl = document.getElementById('testimonial');

function showTestimonial(i) {
  testimonialEl.innerHTML = `
    <p>"${testimonials[i].text}"</p>
    <span>- ${testimonials[i].name}</span>
  `;
}

function nextTestimonial() {
  index++;
  if (index >= testimonials.length) index = 0;
  showTestimonial(index);
}

setInterval(nextTestimonial, 5000);
