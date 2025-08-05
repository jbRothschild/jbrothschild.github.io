// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of my cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-photography",
          title: "photography",
          description: "a collection of my favourite photos that I&#39;ve taken",
          section: "Navigation",
          handler: () => {
            window.location.href = "/photography/";
          },
        },{id: "nav-people",
          title: "people",
          description: "members of the lab or group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-trekked-with-gorillas-in-uganda-amp-amp-raced-in-the-great-migration-in-tanzania",
          title: 'Trekked with gorillas in Uganda &amp;amp;amp; raced in the Great Migration in Tanzania....',
          description: "",
          section: "News",},{id: "news-plunged-into-the-polar-waters-of-antarctica",
          title: 'Plunged into the polar waters of Antarctica.',
          description: "",
          section: "News",},{id: "news-successfully-defended-my-dissertation",
          title: 'Successfully defended my dissertation.',
          description: "",
          section: "News",},{id: "news-ran-my-first-marathon-in-3-39-41",
          title: 'Ran my first marathon in 3:39:41.',
          description: "",
          section: "News",},{id: "news-graduated-with-a-ph-d-in-physics",
          title: 'Graduated with a Ph.D. in Physics.',
          description: "",
          section: "News",},{id: "news-visited-family-in-france-and-germany-missing-octoberfest-by-barely-a-week",
          title: 'Visited family in France and Germany, missing Octoberfest by barely a week.',
          description: "",
          section: "News",},{id: "news-started-work-as-a-research-scientist-at-extropic",
          title: 'Started work as a Research Scientist at Extropic.',
          description: "",
          section: "News",},{id: "news-completed-a-192km-trekk-around-manaslu-in-nepal",
          title: 'Completed a 192km trekk around Manaslu in Nepal.',
          description: "",
          section: "News",},{id: "news-followed-the-hand-of-franklin-reaching-for-the-beaufort-sea",
          title: 'Followed the hand of Franklin reaching for the Beaufort Sea.',
          description: "",
          section: "News",},{id: "news-no-lions-some-bears-but-mostly-tigers-as-we-took-on-the-national-parks-of-india",
          title: 'No lions, some bears, but mostly tigers as we took on the national...',
          description: "",
          section: "News",},{id: "news-ended-my-time-at-extropic",
          title: 'Ended my time at Extropic.',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-ai-gym-wrapper",
          title: 'AI Gym Wrapper',
          description: "a wrapper for AI GYM that we prepared for a hackathon",
          section: "Projects",handler: () => {
              window.location.href = "/projects/aigym/";
            },},{id: "projects-bacteria-in-constrained-space",
          title: 'Bacteria in constrained space',
          description: "how spatial exclusion effects bacterial competition",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bidimo/";
            },},{id: "projects-bumblebert",
          title: 'bumbleBert',
          description: "a text generator for academic abstracts",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bumblebert/";
            },},{id: "projects-mtgan",
          title: 'mtGan',
          description: "an image generator for Magic The Gathering card game",
          section: "Projects",handler: () => {
              window.location.href = "/projects/magicgan/";
            },},{id: "projects-the-false-niche-neutral-dichotomy",
          title: 'The false niche-neutral dichotomy',
          description: "a stochastic model to describe population dynamics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/popdynamics/";
            },},{id: "projects-active-and-passive-flow-into-tumors",
          title: 'Active and passive flow into tumors',
          description: "how microparticles enter tumors from the bloodstream",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tumortargeting/";
            },},{id: "projects-undiagnosed-1-svai",
          title: 'Undiagnosed - 1, SVAI',
          description: "Our diagnosis using data of an undiagnosable patient",
          section: "Projects",handler: () => {
              window.location.href = "/projects/undiagnosed/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
