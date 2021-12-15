const cardsEl = document.getElementById("cartsContainer");

function searchCourses(e) {
  e.preventDefault();
  fetch("search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ payload: e.target[0].value }),
  })
    .then((res) => res.json())
    .then((data) => {
      let payload = data.payload;
      let fullCoursesLength = data.fullCoursesLength;
      if (payload.length < 1) {
        for (let i = 1; i <= fullCoursesLength; i++) {
          let hideThisCourse = document.getElementById(i);
          hideThisCourse.classList.add("hidden");
        }
        let notfoundEl = document.getElementById("not-found");
        notfoundEl.classList.remove("hidden");
      } else {
        let notfoundEl = document.getElementById("not-found");
        notfoundEl.classList.add("hidden");
        for (let i = 1; i <= fullCoursesLength; i++) {
          let hideThisCourse = document.getElementById(i);
          hideThisCourse.classList.add("hidden");
          let courseIdSearched = payload.find(
            (course) => course.courseId === i
          );
          if (courseIdSearched) {
            let showThisCourse = document.getElementById(i);
            showThisCourse.classList.remove("hidden");
          }
        }
      }
    });
}
