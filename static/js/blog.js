const blogPosts = [
  {
    title: "როგორ დავიწყოთ Python პროგრამირება",
    content:
      "Python არის მარტივი და ძლიერი პროგრამირების ენა, რომელიც იდეალურია დამწყებთათვის...",
    category: "Python",
  },
  {
    title: "Python-ის მონაცემთა ანალიზი: Pandas-ის შესავალი",
    content:
      "გაიგეთ, როგორ გამოიყენოთ Python მონაცემთა ანალიზისთვის Pandas-ის ბიბლიოთეკის მეშვეობით...",
    category: "Python",
  },
  {
    title: "როგორ შევქმნათ Web აპლიკაციები Python Flask-ის გამოყენებით",
    content:
      "Flask არის მინი ვებ ჩარჩო Python-თვის, რომელიც საშუალებას გაძლევთ სწრაფად შექმნათ ვებ აპლიკაციები...",
    category: "Python",
  },

  {
    title: "ვებ განვითარება HTML და CSS-ის გამოყენებით",
    content:
      "გაიგეთ, როგორ შექმნათ ვებ გვერდი HTML და CSS-ის გამოყენებით, პირველი ნაბიჯებიდან დაწყებული...",
    category: "HTML",
  },
  {
    title: "HTML5-ის ახალი ელემენტები და მათი გამოყენება",
    content:
      "HTML5 შემოგვთავაზებს ახალ ელემენტებს, როგორიცაა `<article>`, `<section>`, `<header>`, `<footer>`, და სხვა...",
    category: "HTML",
  },
  {
    title: "Responsive ვებ გვერდის შექმნა HTML და CSS-ის გამოყენებით",
    content:
      "შექმენით მოწყობილობისგან დამოუკიდებელი ვებ გვერდი HTML და CSS-ის მეშვეობით, რომ იყოს მობილურ მოწყობილობებთან თავსებადი...",
    category: "HTML",
  },

  {
    title: "გრაფიკული დიზაინის შესავალი: Adobe Photoshop",
    content:
      "Adobe Photoshop არის ერთ-ერთი ყველაზე პოპულარული ინსტრუმენტი გრაფიკულ დიზაინში...",
    category: "CSS",
  },
  {
    title: "CSS Flexbox-ის გამოყენება ლეიაუთის დიზაინში",
    content:
      "გაიგეთ, როგორ გამოიყენოთ CSS Flexbox ლეიაუთის დიზაინისთვის, რათა შექმნათ მოქნილი და ადაპტირებადი დიზაინები...",
    category: "CSS",
  },
  {
    title: "CSS Grid-ის გამოყენება ვებ გვერდის ლეიაუთში",
    content:
      "CSS Grid არის ძლიერი ინსტრუმენტი, რომელიც საშუალებას გაძლევთ შექმნათ რთული ლეიაუთები მარტივად...",
    category: "CSS",
  },
];

function renderBlogPosts() {
  const blogContainer = document.getElementById("blog-posts");
  const postsContainer = document.createElement("div");
  postsContainer.id = "posts-container";
  blogPosts.forEach((post) => {
    const article = document.createElement("article");
    article.classList.add("blog-post");
    article.setAttribute("data-category", post.category);

    const title = document.createElement("h2");
    title.textContent = post.title;

    const content = document.createElement("p");
    content.textContent = post.content;

    article.appendChild(title);
    article.appendChild(content);
    postsContainer.appendChild(article);
  });
  blogContainer.appendChild(postsContainer);
}

function filterPosts(category) {
  const posts = document.querySelectorAll(".blog-post");
  posts.forEach((post) => {
    if (category === "All" || post.getAttribute("data-category") === category) {
      post.style.display = "block";
    } else {
      post.style.display = "none";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderBlogPosts();

  const categoryButtons = document.querySelectorAll(".category-button");
  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");
      filterPosts(category);
    });
  });
});
