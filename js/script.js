/* Detect refresh before the page renders */
const navigation = performance.getEntriesByType("navigation")[0];
const isRefresh = navigation?.type === "reload";

if (isRefresh) {
  document.documentElement.classList.add("no-entrance-animation");
}

const projectDetails = {
  steelsync: {
    title: "SteelSync",
    purpose: "Details are coming soon.",
    technologies: [
      "Php",
      "Laravel 12",
      "MySQL",
      "Tailwind CSS",
      "Javascript",
      "Vite",
    ],
    features: ["Details coming soon."],
    previews: [],
    videos: [
      {
        src: "assets/img/projects_preview/SteelSync/steelsync-promotional.mp4",
        title: "SteelSync promotional video",
      },
    ],
    links: [
      {
        label:
          "Private client project — source code is not publicly available.",
      },
    ],
  },
  bookling: {
    title: "BookLing",
    purpose:
      "Help small libraries manage their collections and track books loaned to students and teachers.",
    technologies: ["Electron", "HTML5", "CSS3", "JavaScript", "SQLite"],
    features: [
      "Manage a small library's book collection.",
      "Track books loaned to students and teachers.",
      "Analyze which books are borrowed most often.",
    ],

    previews: [
      "assets/img/projects_preview/BookLing/Home Screen.png",
      "assets/img/projects_preview/BookLing/Home Screen_2.png",
      "assets/img/projects_preview/BookLing/Book Management.png",
      "assets/img/projects_preview/BookLing/Book Management_Edit.png",
      "assets/img/projects_preview/BookLing/Book Management_Popup.png",
      "assets/img/projects_preview/BookLing/Transaction List.png",
      "assets/img/projects_preview/BookLing/Transaction_Book Selection.png",
      "assets/img/projects_preview/BookLing/Reports.png",
      "assets/img/projects_preview/BookLing/Reports_2.png",
      "assets/img/projects_preview/BookLing/Book Request.png",
      "assets/img/projects_preview/BookLing/Request Report.png",
      "assets/img/projects_preview/BookLing/Request Report_2.png",
      "assets/img/projects_preview/BookLing/Settings.png",
      "assets/img/projects_preview/BookLing/Settings_2.png",
      "assets/img/projects_preview/BookLing/Settings_3.png",
    ],
    videos: [],
    links: [
      {
        label: "GitHub project link",
        href: "https://github.com/Maddwebbot/LMS.git",
      },
    ],
  },
  bloomi: {
    title: "Bloomi",
    purpose:
      "Help instructors spend less time manually creating test questions aligned with Bloom's Taxonomy.",
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "MySql",
      "OpenAI API",
      "spaCy",
      "scikit-learn",
      "Waitress",
      "Apache",
    ],
    features: [
      "Generate test questions through an API.",
      "Analyze statements with a machine-learning model trained from scratch to identify Bloom's Taxonomy categories.",
      "Tag statements with a category during question creation.",
      "Generate true/false, multiple-choice, short-answer, and matching questions.",
    ],
    previews: [
      "assets/img/projects_preview/Bloomi/Professor Dashboard 2.0.png",
      "assets/img/projects_preview/Bloomi/Professor Dashboard 2.0.1.png",
      "assets/img/projects_preview/Bloomi/Admin Dashboard 1.2.png",
      "assets/img/projects_preview/Bloomi/Admin Dashboard 1.2.1png.png",
      "assets/img/projects_preview/Bloomi/Account Page 1.3.png",
      "assets/img/projects_preview/Bloomi/Account Page 1.3.1png.png",
      "assets/img/projects_preview/Bloomi/Login 1.0.png",
      "assets/img/projects_preview/Bloomi/Login Attempt Page 1.4.png",
      "assets/img/projects_preview/Bloomi/Login Attempt Page 1.4.1.png",
      "assets/img/projects_preview/Bloomi/OTP Page 1.1.png",
      "assets/img/projects_preview/Bloomi/OTP Email Sent 1.1.1.png",
      "assets/img/projects_preview/Bloomi/TOS 1.0.png",
      "assets/img/projects_preview/Bloomi/TOS 1.1.png",
      "assets/img/projects_preview/Bloomi/tosupdated.png",
      "assets/img/projects_preview/Bloomi/File Page 2.1.png",
      "assets/img/projects_preview/Bloomi/File Page (Existing File Popup) 2.1.2.png",
      "assets/img/projects_preview/Bloomi/File Page (Upload Popup) 2.1.1.png",
      "assets/img/projects_preview/Bloomi/File Page (Process Popup) 2.1.2.png",
      "assets/img/projects_preview/Bloomi/Uploaded File Page 1.5.png",
      "assets/img/projects_preview/Bloomi/Uploaded File Page (tos popup) 1.5.1.png",
      "assets/img/projects_preview/Bloomi/Validatio Page 1.6.png",
      "assets/img/projects_preview/Bloomi/Validatio Page (Parsed Log) 1.6.1.png",
      "assets/img/projects_preview/Bloomi/Validatio Page (Question Log) 1.6.2.png",
      "assets/img/projects_preview/Bloomi/Export History Page 1.7.png",
      "assets/img/projects_preview/Bloomi/Export History Page 1.7.1.png",
      "assets/img/projects_preview/Bloomi/Parse Page 2.2.png",
      "assets/img/projects_preview/Bloomi/Question Page 2.3.png",
      "assets/img/projects_preview/Bloomi/Parse Page 2.2.1.png",
      "assets/img/projects_preview/Bloomi/Parse Page 2.2.2.png",
      "assets/img/projects_preview/Bloomi/Parse Page 2.2.3.png",
      "assets/img/projects_preview/Bloomi/Parse Page (Edit Topic Popup) 2.2.5.png",
      "assets/img/projects_preview/Bloomi/Parse Page (Add Sentence Popup) 2.2.6.png",
      "assets/img/projects_preview/Bloomi/Question Page 2.3.1.png",
      "assets/img/projects_preview/Bloomi/Question Page 2.3.2.png",
      "assets/img/projects_preview/Bloomi/Question Page 2.3.3.png",
      "assets/img/projects_preview/Bloomi/Answer_Key 1.0.png",
      "assets/img/projects_preview/Bloomi/Answer_Key 1.1.png",
      "assets/img/projects_preview/Bloomi/Answer_Key 1.2.png",
      "assets/img/projects_preview/Bloomi/Answer_Key 1.3.png",
      "assets/img/projects_preview/Bloomi/Test_Paper 1.0.png",
      "assets/img/projects_preview/Bloomi/Test_Paper 1.1.png",
      "assets/img/projects_preview/Bloomi/Test_Paper 1.2.png",
      "assets/img/projects_preview/Bloomi/Test_Paper 1.3.png",
      "assets/img/projects_preview/Bloomi/Test_Paper 1.4.png",
      "assets/img/projects_preview/Bloomi/Test_Paper 1.5.png",
      "assets/img/projects_preview/Bloomi/Test_Paper 1.6.png",
    ],
    videos: [
      {
        src: "assets/img/projects_preview/Bloomi/bloomi-guide.mp4",
        title: "BLOOMI Guide",
      },
    ],
    links: [
      {
        label: "GitHub project link",
        href: "https://github.com/Maddwebbot/bloomi.git",
      },
    ],
  },
};

// Loader for website
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");

  if (loader) {
    if (isRefresh) {
      // Skip the loader on refresh
      loader.style.display = "none";
    } else {
      // Show loader for 3 seconds on normal navigation
      setTimeout(() => {
        loader.style.display = "none";
      }, 3000);
    }
  }

  const projectDialog = document.getElementById("project-dialog");
  const projectDialogTitle = document.getElementById("project-dialog-title");
  const projectModalContent = document.querySelector(".project-modal-content");
  const projectDialogClose = document.querySelector(".project-dialog-close");
  const projectImageDialog = document.getElementById("project-image-dialog");
  const projectImageFull = document.querySelector(".project-image-full");
  const projectImageCaption = document.querySelector(".project-image-caption");
  const projectImageClose = document.querySelector(".project-image-close");
  let pageScrollPosition = 0;
  const releasePageScroll = () => {
    document.documentElement.classList.remove("project-dialog-open");
    document.documentElement.style.removeProperty(
      "--project-dialog-scroll-top",
    );
    window.scrollTo({ top: pageScrollPosition, behavior: "instant" });
    const video = projectModalContent?.querySelector("video");
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  if (
    projectDialog instanceof HTMLDialogElement &&
    projectDialogTitle &&
    projectModalContent &&
    projectDialogClose
  ) {
    const createDetailSection = (title) => {
      const section = document.createElement("section");
      const heading = document.createElement("h3");
      heading.textContent = title;
      section.append(heading);
      return section;
    };

    const createTextSection = (title, text) => {
      const section = createDetailSection(title);
      const paragraph = document.createElement("p");
      paragraph.textContent = text;
      section.append(paragraph);
      return section;
    };

    const createListSection = (title, items, className = "") => {
      const section = createDetailSection(title);
      const list = document.createElement("ul");

      for (const item of items) {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        list.append(listItem);
      }

      if (className) {
        list.className = className;
      }

      section.append(list);
      return section;
    };

    const getPreviewLabel = (path) =>
      path
        .split("/")
        .pop()
        .replace(/\.[^.]+$/, "")
        .replace(/[_-]/g, " ");

    const updatePreviewGallery = (gallery, requestedIndex) => {
      const paths = JSON.parse(gallery.dataset.previewPaths);
      const index = Math.max(0, Math.min(requestedIndex, paths.length - 1));
      const path = paths[index];
      const label = getPreviewLabel(path);
      const mainButton = gallery.querySelector(".project-preview-image");
      const mainImage = mainButton.querySelector("img");
      const mainCaption = gallery.querySelector("figure > figcaption");
      const counter = gallery.querySelector(".project-preview-count");
      const previousButton = gallery.querySelector(
        '[data-preview-action="previous"]',
      );
      const nextButton = gallery.querySelector('[data-preview-action="next"]');
      const thumbnailList = gallery.querySelector(
        ".project-preview-thumbnail-list",
      );
      const visibleThumbnailCount = 5;
      const thumbnailStart =
        Math.floor(index / visibleThumbnailCount) * visibleThumbnailCount;

      gallery.dataset.currentIndex = index;
      mainImage.src = path;
      mainImage.alt = `${gallery.dataset.previewProject} — ${label}`;
      mainImage.loading = "eager";
      mainButton.dataset.fullImage = path;
      mainButton.dataset.imageCaption = label;
      mainCaption.textContent = label;
      mainButton.setAttribute(
        "aria-label",
        `View full-size image: ${mainImage.alt}`,
      );
      counter.textContent = `Screenshot ${index + 1} of ${paths.length}`;
      previousButton.disabled = index === 0;
      nextButton.disabled = index === paths.length - 1;
      thumbnailList.replaceChildren();

      for (
        let thumbnailIndex = thumbnailStart;
        thumbnailIndex <
        Math.min(thumbnailStart + visibleThumbnailCount, paths.length);
        thumbnailIndex += 1
      ) {
        const thumbnailPath = paths[thumbnailIndex];
        const thumbnailLabel = getPreviewLabel(thumbnailPath);
        const thumbnailButton = document.createElement("button");
        const thumbnailImage = document.createElement("img");

        thumbnailButton.type = "button";
        thumbnailButton.className = "project-preview-thumb";
        thumbnailButton.dataset.previewIndex = thumbnailIndex;
        thumbnailButton.setAttribute(
          "aria-label",
          `Show screenshot ${thumbnailIndex + 1}: ${thumbnailLabel}`,
        );
        thumbnailButton.setAttribute(
          "aria-current",
          thumbnailIndex === index ? "true" : "false",
        );
        thumbnailImage.src = thumbnailPath;
        thumbnailImage.alt = "";
        thumbnailImage.loading = "lazy";
        thumbnailButton.append(thumbnailImage);
        thumbnailList.append(thumbnailButton);
      }
    };

    const updateVideoGallery = (gallery, requestedIndex) => {
      const videos = JSON.parse(gallery.dataset.videoItems);
      const index = Math.max(0, Math.min(requestedIndex, videos.length - 1));
      const item = videos[index];
      const video = gallery.querySelector("video");
      const source = video.querySelector("source");
      const title = gallery.querySelector(".project-video-title");
      const counter = gallery.querySelector(".project-video-count");
      const previousButton = gallery.querySelector(
        '[data-video-action="previous"]',
      );
      const nextButton = gallery.querySelector('[data-video-action="next"]');
      const videoList = gallery.querySelector(".project-video-list");

      gallery.dataset.currentVideoIndex = index;
      source.src = item.src;
      source.type = item.src.toLowerCase().endsWith(".mp4") ? "video/mp4" : "";
      video.load();
      title.textContent = item.title;
      counter.textContent = `Video ${index + 1} of ${videos.length}`;
      previousButton.disabled = index === 0;
      nextButton.disabled = index === videos.length - 1;
      previousButton.hidden = videos.length < 2;
      nextButton.hidden = videos.length < 2;
      counter.hidden = videos.length < 2;
      videoList.replaceChildren();
      videoList.hidden = videos.length < 2;

      for (let videoIndex = 0; videoIndex < videos.length; videoIndex += 1) {
        const videoButton = document.createElement("button");
        videoButton.type = "button";
        videoButton.className = "project-video-choice";
        videoButton.dataset.videoIndex = videoIndex;
        videoButton.setAttribute(
          "aria-current",
          videoIndex === index ? "true" : "false",
        );
        videoButton.textContent = videos[videoIndex].title;
        videoList.append(videoButton);
      }
    };

    const createPreviewSection = (project) => {
      const preview = document.createElement("div");
      preview.className = "project-modal-preview";

      const previewHeading = document.createElement("h3");
      previewHeading.textContent = "Project previews";
      preview.append(previewHeading);

      if (project.previews.length > 0) {
        const gallery = document.createElement("div");
        gallery.className = "project-preview-gallery";
        const mainFigure = document.createElement("figure");
        const mainButton = document.createElement("button");
        const mainImage = document.createElement("img");
        const mainCaption = document.createElement("figcaption");
        const controls = document.createElement("div");
        const previousButton = document.createElement("button");
        const counter = document.createElement("span");
        const nextButton = document.createElement("button");
        const thumbnailNav = document.createElement("div");
        const thumbnails = document.createElement("div");

        mainButton.type = "button";
        mainButton.className = "project-preview-image";
        mainButton.setAttribute("aria-label", "View full-size image");
        mainButton.append(mainImage);
        mainFigure.append(mainButton, mainCaption);

        controls.className = "project-preview-controls";
        previousButton.type = "button";
        previousButton.className = "project-preview-step";
        previousButton.dataset.previewAction = "previous";
        previousButton.setAttribute("aria-label", "Previous screenshot");
        previousButton.textContent = "←";
        counter.className = "project-preview-count";
        counter.setAttribute("aria-live", "polite");
        nextButton.type = "button";
        nextButton.className = "project-preview-step";
        nextButton.dataset.previewAction = "next";
        nextButton.setAttribute("aria-label", "Next screenshot");
        nextButton.textContent = "→";
        controls.append(previousButton, counter, nextButton);

        thumbnailNav.className = "project-preview-thumbnails";
        thumbnailNav.setAttribute("aria-label", "Choose a screenshot");
        thumbnails.className = "project-preview-thumbnail-list";
        thumbnailNav.append(thumbnails);

        gallery.append(mainFigure, controls, thumbnailNav);
        preview.append(gallery);
        gallery.dataset.previewProject = project.title;
        gallery.dataset.previewPaths = JSON.stringify(project.previews);
        updatePreviewGallery(gallery, 0);
      } else {
        const emptyPreview = document.createElement("p");
        emptyPreview.className = "project-preview-empty";
        emptyPreview.textContent =
          "Project screenshots will be added here when they are available.";
        preview.append(emptyPreview);
      }

      const videoHeading = document.createElement("h3");
      videoHeading.textContent =
        project.videos.length > 1 ? "Project videos" : "Project video";
      preview.append(videoHeading);

      if (project.videos.length > 0) {
        const videoGallery = document.createElement("div");
        const videoTitle = document.createElement("p");
        const video = document.createElement("video");
        const source = document.createElement("source");
        const controls = document.createElement("div");
        const previousButton = document.createElement("button");
        const counter = document.createElement("span");
        const nextButton = document.createElement("button");
        const videoList = document.createElement("div");

        videoGallery.className = "project-video-gallery";
        videoGallery.dataset.videoItems = JSON.stringify(project.videos);
        videoTitle.className = "project-video-title";
        videoTitle.setAttribute("aria-live", "polite");
        video.className = "project-video";
        video.controls = true;
        video.preload = "metadata";
        video.append(source);
        controls.className = "project-video-controls";
        previousButton.type = "button";
        previousButton.className = "project-preview-step";
        previousButton.dataset.videoAction = "previous";
        previousButton.setAttribute("aria-label", "Previous video");
        previousButton.textContent = "←";
        counter.className = "project-video-count";
        counter.setAttribute("aria-live", "polite");
        nextButton.type = "button";
        nextButton.className = "project-preview-step";
        nextButton.dataset.videoAction = "next";
        nextButton.setAttribute("aria-label", "Next video");
        nextButton.textContent = "→";
        controls.append(previousButton, counter, nextButton);
        videoList.className = "project-video-list";
        videoGallery.append(videoTitle, video, controls, videoList);
        preview.append(videoGallery);
        updateVideoGallery(videoGallery, 0);
      } else {
        const videoMessage = document.createElement("p");
        videoMessage.className = "project-video-empty";
        videoMessage.textContent = "No video preview available.";
        preview.append(videoMessage);
      }

      return preview;
    };

    const createLinksSection = (links) => {
      const section = createDetailSection("Links");
      const linkList = document.createElement("div");
      linkList.className = "project-modal-links";

      for (const link of links) {
        if (!link.href) {
          const note = document.createElement("span");
          note.className = "project-modal-link-unavailable";
          note.textContent = link.label;
          linkList.append(note);
          continue;
        }

        const anchor = document.createElement("a");
        anchor.href = link.href;
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
        anchor.textContent = link.label;
        linkList.append(anchor);
      }

      section.append(linkList);
      return section;
    };

    const openProjectDialog = (project) => {
      projectDialogTitle.textContent = project.title;

      const details = document.createElement("div");
      details.className = "project-modal-details";

      const technologies = createDetailSection("Technologies");
      const technologyList = document.createElement("div");
      technologyList.className = "project-modal-tech";
      for (const technology of project.technologies) {
        const tag = document.createElement("span");
        tag.textContent = technology;
        technologyList.append(tag);
      }
      technologies.append(technologyList);

      details.append(
        createTextSection("Purpose", project.purpose),
        technologies,
        createListSection("Key features", project.features),
        createLinksSection(project.links),
      );

      projectModalContent.replaceChildren(
        createPreviewSection(project),
        details,
      );
      pageScrollPosition = window.scrollY;
      projectDialog.showModal();
      document.documentElement.style.setProperty(
        "--project-dialog-scroll-top",
        `-${pageScrollPosition}px`,
      );
      document.documentElement.classList.add("project-dialog-open");
      projectDialogClose.focus();
    };

    document.querySelectorAll(".project-view").forEach((button) => {
      button.addEventListener("click", () => {
        const project = projectDetails[button.dataset.projectId];

        if (!project) {
          console.error(
            `No project details found for "${button.dataset.projectId}".`,
          );
          return;
        }

        openProjectDialog(project);
      });
    });

    projectDialogClose.addEventListener("click", () => {
      closeProjectDialog();
    });

    projectDialog.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeProjectDialog();
      }
    });

    projectDialog.addEventListener("click", (event) => {
      if (event.target === projectDialog) {
        closeProjectDialog();
      }
    });

    function closeProjectDialog() {
      if (projectDialog.open) {
        projectDialog.close();
      }
      releasePageScroll();
    }

    if (
      projectImageDialog instanceof HTMLDialogElement &&
      projectImageFull instanceof HTMLImageElement &&
      projectImageCaption &&
      projectImageClose
    ) {
      projectModalContent.addEventListener("click", (event) => {
        const target = event.target;
        if (!(target instanceof Element)) {
          return;
        }

        const gallery = target.closest(".project-preview-gallery");
        if (gallery instanceof HTMLDivElement) {
          const stepButton = target.closest(".project-preview-step");
          const thumbnailButton = target.closest(".project-preview-thumb");
          const currentIndex = Number(gallery.dataset.currentIndex);

          if (stepButton instanceof HTMLButtonElement) {
            updatePreviewGallery(
              gallery,
              currentIndex +
                (stepButton.dataset.previewAction === "next" ? 1 : -1),
            );
            return;
          }

          if (thumbnailButton instanceof HTMLButtonElement) {
            updatePreviewGallery(
              gallery,
              Number(thumbnailButton.dataset.previewIndex),
            );
            return;
          }
        }

        const videoGallery = target.closest(".project-video-gallery");
        if (videoGallery instanceof HTMLDivElement) {
          const videoStepButton = target.closest(
            ".project-video-controls button",
          );
          const videoChoice = target.closest(".project-video-choice");
          const currentIndex = Number(videoGallery.dataset.currentVideoIndex);

          if (videoStepButton instanceof HTMLButtonElement) {
            updateVideoGallery(
              videoGallery,
              currentIndex +
                (videoStepButton.dataset.videoAction === "next" ? 1 : -1),
            );
            return;
          }

          if (videoChoice instanceof HTMLButtonElement) {
            updateVideoGallery(
              videoGallery,
              Number(videoChoice.dataset.videoIndex),
            );
            return;
          }
        }

        const imageButton = target.closest(".project-preview-image");
        if (!(imageButton instanceof HTMLButtonElement)) {
          return;
        }

        const previewImage = imageButton.querySelector("img");
        const fullImagePath = imageButton.dataset.fullImage;
        if (!(previewImage instanceof HTMLImageElement) || !fullImagePath) {
          console.error(
            "Project preview image is missing its source or alt text.",
          );
          return;
        }

        projectImageFull.src = fullImagePath;
        projectImageFull.alt = previewImage.alt;
        projectImageCaption.textContent =
          imageButton.dataset.imageCaption ?? "";
        projectImageDialog.showModal();
        projectImageClose.focus();
      });

      projectImageClose.addEventListener("click", () => {
        projectImageDialog.close();
      });

      projectImageDialog.addEventListener("click", (event) => {
        if (event.target === projectImageDialog) {
          projectImageDialog.close();
        }
      });

      projectImageDialog.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          projectImageDialog.close();
        }
      });
    } else {
      console.error("Project image viewer markup is missing or invalid.");
    }
  } else {
    console.error("Project details dialog markup is missing or invalid.");
  }

  // Select both animation types
  const elements = document.querySelectorAll(".onScroll, .onLoad");

  if (isRefresh) {
    // Show elements immediately without entrance animations
    elements.forEach((element) => {
      element.classList.add("visible");
    });
    return;
  }

  // Observe elements as they enter the viewport
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    },
  );

  elements.forEach((element) => observer.observe(element));
});
