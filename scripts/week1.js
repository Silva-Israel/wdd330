const toggleNotes = () => {
    let x = document.getElementById("notesWeek1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  async function toggleExercises() {
    exercise1.innerHTML = await(await fetch('../week1/story_editor.html')).text();
  }
