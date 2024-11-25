"use strict";
const musicTitleEl = document.getElementById("music_title");
const playerProgressEl = document.getElementById("player_progress");
const progressEl = document.getElementById("progress");
const currentTimeEl = document.getElementById("current_time");
const durationEl = document.getElementById("duration");
const prevBtnEl = document.getElementById("prev");
const playvBtnEl = document.getElementById("play");
const nextvBtnEl = document.getElementById("next");
const songs = [
  {
    path: "music/ueduktebe.mp3",
    displayName: "Уеду к тебе",
  },
  {
    path: "music/bumaznye.mp3",
    displayName: "Бумажные города",
  },
  {
    path: "music/otebemech.mp3",
    displayName: "Я без тебя",
  },
  {
    path: "music/vgorodeodna.mp3",
    displayName: "В этом городе",
  },
  {
    path: "music/semstakan.mp3",
    displayName: "Семечек стакан",
  },
  {
    path: "music/vecherok.mp3",
    displayName: "Вечерок-вечерочек",
  },
  {
    path: "music/devchonka.mp3",
    displayName: "Девчонка",
  },
  {
    path: "music/malstrana.mp3",
    displayName: "Маленькая страна",
  },
  {
    path: "music/nebonom7.mp3",
    displayName: "Небо №7",
  },
  {
    path: "music/osenlits.mp3",
    displayName: "Осень",
  },
  {
    path: "music/buhgalter.mp3",
    displayName: "Бухгалтер",
  },
  {
    path: "music/zvezda.mp3",
    displayName: "Звезда по имени Солнце",
  }, 
  {
    path: "music/spaskrug.mp3",
    displayName: "Спасательный круг",
  },
  {
    path: "music/zdretoya.mp3",
    displayName: "Эта ночь",
  },
  {
    path: "music/elektrichka.mp3",
    displayName: "Электричка",
  },
  {
    path: "music/medali.mp3",
    displayName: "Медали",
  },
];
const music = new Audio();
let musicIndex = 0;
let isPlaying = false;
//================== Play Song  True or False====================
function togglePlay() {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}
//================== Play Music====================
function playMusic() {
  isPlaying = true;
  playvBtnEl.classList.replace("fa-play", "fa-pause");
  playvBtnEl.setAttribute("title", "pause");
  music.play();
}
//================== Pause Music====================
function pauseMusic() {
  isPlaying = false;
  playvBtnEl.classList.replace("fa-pause", "fa-play");
  playvBtnEl.setAttribute("pause", "title");
  music.pause();
}
//================== Load Songs ====================
function loadMusic(songs) {
  music.src = songs.path;
  musicTitleEl.textContent = songs.displayName;
}
//================== Change Music ====================
function changeMusic(direction) {
  musicIndex = musicIndex + direction + (songs.length % songs.length);
  loadMusic(songs[musicIndex]);
  playMusic();
}
//================== Set Progress ====================
function setProgressBar(e) {
  const width = playerProgressEl.clientWidth;
  const xValue = e.offsetX;
  music.currentTime = (xValue / width) * music.duration;
}
//================== Set Progress ====================
function updateProgressBar() {
  const { duration, currentTime } = music;
  const ProgressPercent = (currentTime / duration) * 100;
  progressEl.style.width = `${ProgressPercent}%`;
  const formattime = (timeRanges) =>
    String(Math.floor(timeRanges)).padStart(2, "0");
  durationEl.textContent = `${formattime(duration / 60)} : ${formattime(
    duration % 60,
  )}`;
  currentTimeEl.textContent = `${formattime(currentTime / 60)} : ${formattime(
    currentTime % 60,
  )}`;
}
//================= Btn Events========================
const btnEvents = () => {
  playvBtnEl.addEventListener("click", togglePlay);
  nextvBtnEl.addEventListener("click", () => changeMusic(1));
  prevBtnEl.addEventListener("click", () => changeMusic(-1));
  //========= Progressbar===========================
  music.addEventListener("ended", () => changeMusic(1));
  music.addEventListener("timeupdate", updateProgressBar);
  playerProgressEl.addEventListener("click", setProgressBar);
};
//================= Btn Events========================
document.addEventListener("DOMContentLoaded", btnEvents);
//============ Calling Load Music
loadMusic(songs[musicIndex]);

