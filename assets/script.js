const projects =
  [
    // {
    //   projectName: 'Portofolio V3',
    //   link: "https://ferosburn.github.io/",
    //   repository: "https://github.com/Ferosburn/ferosburn.github.io",
    //   languages: [
    //     "HTML", "CSS", "JavaScript"
    //   ],
    //   languagePercentage: [
    //     {
    //       langName: "HTML",
    //       percentage: 43.1
    //     },
    //     {
    //       langName: "CSS",
    //       percentage: 20.2
    //     },
    //     {
    //       langName: "JavaScript",
    //       percentage: 36.7
    //     }
    //   ],
    //   date: "Juni 2022",
    //   images: [],
    //   description: "Portofolio pribadi versi ketiga"
    // },
    {
      projectName: 'To-Do-List',
      link: "https://ferosburn.github.io/todo-list/",
      repository: "https://github.com/Ferosburn/todo-list",
      languages: [
        "HTML", "CSS", "JavaScript"
      ],
      frameworks: [
        "ReactJS"
      ],
      languagePercentage: [
        {
          langName: "HTML",
          percentage: 21.4
        },
        {
          langName: "CSS",
          percentage: 29.1
        },
        {
          langName: "JavaScript",
          percentage: 49.5
        }
      ],
      date: "Juni 2022",
      images: [
        "./assets/images/Todo List.png"
      ],
      description: "Proyek pribadi dibuat untuk memenuhi tugas membuat todo-list menggunakan framework ReactJS dari pelatihan DTS FGA Progate ReactJS for Web Development.",
    },
    {
      projectName: 'Kalkulator',
      link: "https://ferosburn.github.io/kalkulator/",
      repository: "https://github.com/Ferosburn/kalkulator",
      languages: [
        "HTML", "CSS", "JavaScript"
      ],
      languagePercentage: [
        {
          langName: "HTML",
          percentage: 43.1
        },
        {
          langName: "CSS",
          percentage: 36.7
        },
        {
          langName: "JavaScript",
          percentage: 20.2
        }
      ],
      date: "Juni 2022",
      images: [
        "./assets/images/Kalkulator 1.png",
        "./assets/images/Kalkulator 2.png"
      ],
      description: "Proyek pribadi dibuat untuk memenuhi tugas membuat kalkulator menggunakan JavaScript dari pelatihan DTS FGA Progate ReactJS for Web Development."
    },
    {
      projectName: 'UndangApp',
      link: "https://undangapp2.herokuapp.com/",
      repository: "https://github.com/Ferosburn/undangapp",
      languages: [
        "HTML", "CSS", "Ruby"
      ],
      frameworks: [
        "Ruby on Rails", "Bootstrap"
      ],
      languagePercentage: [
        {
          langName: "HTML",
          percentage: 41.7
        },
        {
          langName: "CSS",
          percentage: 1.2
        },
        {
          langName: "Ruby",
          percentage: 52.1
        },
        {
          langName: "Other",
          percentage: 5
        },
      ],
      date: "April 2022",
      images: [
        "./assets/images/UndangApp 1.png",
        "./assets/images/UndangApp 2.png",
        "./assets/images/UndangApp 3.png",
        "./assets/images/UndangApp 4.png",
        "./assets/images/UndangApp 5.png"
      ],
      description: "Proyek pribadi iseng setelah melakukan pelatihan DTS FGA Progate Full Stack Developer with Ruby (HTML, CSS, Ruby, Ruby on Rails). Saya membuat proyek ini untuk mengukur dan mengembangkan kemampuan saya dalam membuat sebuah web app."
    },
    {
      projectName: 'Masakan Nusantara',
      link: "https://ferosburn.github.io/masakan-nusantara/",
      repository: "https://github.com/Ferosburn/masakan-nusantara",
      languages: ["HTML", "CSS"],
      languagePercentage: [
        {
          langName: "HTML",
          percentage: 53.7
        },
        {
          langName: "CSS",
          percentage: 46.3
        }
      ],
      date: "Maret 2022",
      images: [
        "./assets/images/Masakan Nusantara Desktop.png",
        "./assets/images/Masakan Nusantara Tablet.png",
        "./assets/images/Masakan Nusantara Phone.png"
      ],
      description: "Proyek ini dikerjakan secara tim dan dibuat untuk tugas HTML dan CSS dari pelatihan DTS FGA Progate Full Stack Developer with Ruby (HTML, CSS, Ruby, Ruby on Rails)."
    },
    {
      projectName: 'Portofolio',
      link: "https://ferosburn-portofolio.herokuapp.com/",
      repository: "https://github.com/Ferosburn/ferosburn-portofolio",
      languages: ["HTML", "CSS"],
      languagePercentage: [
        {
          langName: "HTML",
          percentage: 55.4
        },
        {
          langName: "CSS",
          percentage: 44.2
        },
        {
          langName: "Other",
          percentage: 0.4
        }
      ],
      date: "September 2021",
      images: [
        "./assets/images/Portofolio 1.png",
        "./assets/images/Portofolio 2.png"
      ],
      description: "Tugas akhir individu untuk pelatihan dari Kode ID Belajar Langkah Fundamental untuk Menjadi Web Developer"
    }
  ];

const content = document.querySelector('.content');
const navToggleBtn = document.querySelector('.toggle-btn');
const navLinks = document.querySelector('.nav-links');
const projectLinks = document.querySelector('.project-links');

window.addEventListener('DOMContentLoaded', () => {
  displayProjectItems(projects);
  displayNavProject(projects);
  const navProjectItems = document.querySelectorAll('.link-item');
  navProjectItems.forEach(item => {
    item.addEventListener('click', () => {
      navLinks.classList.toggle('hidden');
    })
  })

  const items = document.querySelectorAll('article');
  items.forEach((item) => {
    const expand = item.querySelector('.expand');
    const info = item.querySelector('.info');
    const close = item.querySelector('.close');
    const imgBtns = item.querySelectorAll('.img-btn');
    const projectImg = item.querySelector('.project-image')

    let currentItem = 0;

    expand.addEventListener('click', () => {
      toggleInfo();
    })

    close.addEventListener('click', () => {
      toggleInfo();
    })

    const toggleInfo = () => {
      info.classList.toggle('hidden');
      expand.classList.toggle('hidden');
    }

    imgBtns.forEach(imgBtn => {
      imgBtn.addEventListener("click", (e) => {
        const index = item.id;
        const images = projects[index].images;
        if (e.currentTarget.classList.contains('prev')) {
          currentItem--;
          if (currentItem < 0) {
            currentItem = images.length - 1;
          }
        } else if (e.currentTarget.classList.contains('next')) {
          currentItem++;
          if (currentItem > images.length - 1) {
            currentItem = 0;
          }
        }
        const image = images[currentItem];
        projectImg.src = image;
      })
    })
  })
});

navToggleBtn.addEventListener('click', (e) => {
  navLinks.classList.toggle('hidden');
})

const displayNavProject = (projectItems) => {
  let displayProject = projectItems.map((item, index) => {
    return `<li>
              <a class='link-item' href='#${index}'><i class="fa-solid fa-chevron-right"></i>${item.projectName}</a>
            </li>`
  })
  displayProject = `<p>Projects</p>${displayProject.join('')}`;
  projectLinks.innerHTML = displayProject;
}

const displayProjectItems = (projectItems) => {
  let displayProject = projectItems.map((item, index) => {
    const frameworks = handleFrameworks(item);
    const languagePercentage = handleLangPercentage(item);
    const images = null;

    return `<article id='${index}'>
              <h2>${item.projectName}</h2>
              <div class='image-container'>
                <button class='img-btn prev'><i class="fa-solid fa-chevron-left"></i></button>
                  <img class='project-image' src='${item.images[0]}' alt='no-image-available'>
                <button class='img-btn next'><i class="fa-solid fa-chevron-right"></i></button>
              </div>
              <h3 class="date">${item.date}</h3>
              <p class="link">
                <a target="_blank" href="${item.link}"><i class="fa-solid fa-link"></i></a>
                <a target="_blank" href="${item.repository}"><i class="fa-brands fa-github"></i></a>
              </p>
              <div class='desc'>
                <p>${item.description}
                <span class='expand'>Selengkapnya</span></p>
                <div class='info hidden'>
                  <div class="close">X</div>
                  <p><span class='info-item'>Languages</span>: ${item.languages.join(', ')}</p>
                  <p><span class='info-item'>Framework/Library</span>: ${frameworks}</p>
                  <div>
                    <p><span class='info-item'>Language Proportion</span>:</p>
                    <div class="percentage">${languagePercentage}</div>
                  </div>
                </div>
              </div>
            </article>`
  });
  displayProject = displayProject.join('');
  content.innerHTML = displayProject;
}

const handleFrameworks = (item) => {
  let frameworks;
  if (item.frameworks) {
    frameworks = item.frameworks.join(', ');
  } else {
    frameworks = '-';
  }
  return frameworks
}

const handleLangPercentage = (item) => {
  let languagePercentage = item.languagePercentage.map((lang) => {
    return `<div class='lang ${lang.langName}' style='width: ${lang.percentage}%;'></div>`;
  });
  languagePercentage = languagePercentage.join('');
  return languagePercentage;
}