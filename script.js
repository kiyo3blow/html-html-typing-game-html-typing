const BEST_SCORE_KEYS = {
  phrase: "romajiTypingSprintBestScore",
  key: "typingQuestKeyModeBestScore"
};
const SOUND_SETTING_KEY = "typingQuestSoundEnabled";

const DIFFICULTY_SETTINGS = {
  easy: {
    label: "\u304b\u3093\u305f\u3093",
    duration: 75,
    maxReadingLength: 8,
    minReadingLength: 0
  },
  normal: {
    label: "\u3075\u3064\u3046",
    duration: 60,
    maxReadingLength: Infinity,
    minReadingLength: 0
  },
  hard: {
    label: "\u3080\u305a\u304b\u3057\u3044",
    duration: 45,
    maxReadingLength: Infinity,
    minReadingLength: 6
  }
};

const GAME_SETTINGS = {
  duration: DIFFICULTY_SETTINGS.normal.duration,
  mode: "normal",
  score: {
    correct: 100,
    accuracyBonus: 300,
    timeBonus: 2,
    keyCorrect: 30,
    keyCombo: 2,
    keyMissPenalty: 5
  }
};

const MONSTER_IMAGES = [
  "assets/monsters/monster-01.png",
  "assets/monsters/monster-02.png",
  "assets/monsters/monster-03.png",
  "assets/monsters/monster-04.png",
  "assets/monsters/monster-05.png",
  "assets/monsters/monster-06.png",
  "assets/monsters/monster-07.png",
  "assets/monsters/monster-08.png",
  "assets/monsters/monster-09.png",
  "assets/monsters/monster-10.png"
];
const KEY_ROWS = ["qwertyuiop-", "asdfghjkl;", "zxcvbnm"];
const KEY_LABELS = { "-": "\uff0d" };
const HOME_KEYS = new Set(["a", "s", "d", "f", "j", "k", "l", ";"]);
const KEY_POOLS = {
  top: [..."qwertyuiop"],
  home: [..."asdfghjkl"],
  bottom: [..."zxcvbnm"],
  symbol: ["-"]
};
const KEY_POOL_WEIGHTS = [
  { name: "home", weight: 0.38 },
  { name: "top", weight: 0.28 },
  { name: "bottom", weight: 0.28 },
  { name: "symbol", weight: 0.06 }
];
const KEY_FOCUS_POOLS = {
  all: null,
  home: ["a", "s", "d", "f", "j", "k", "l"],
  left: ["q", "w", "e", "r", "t", "a", "s", "d", "f", "g", "z", "x", "c", "v", "b"],
  right: ["y", "u", "i", "o", "p", "h", "j", "k", "l", "n", "m", "-"]
};

const ROMAJI_MAP = {
  "\u3042": ["a"], "\u3044": ["i"], "\u3046": ["u"], "\u3048": ["e"], "\u304a": ["o"],
  "\u304b": ["ka"], "\u304d": ["ki"], "\u304f": ["ku"], "\u3051": ["ke"], "\u3053": ["ko"],
  "\u3055": ["sa"], "\u3057": ["shi", "si"], "\u3059": ["su"], "\u305b": ["se"], "\u305d": ["so"],
  "\u305f": ["ta"], "\u3061": ["chi", "ti"], "\u3064": ["tsu", "tu"], "\u3066": ["te"], "\u3068": ["to"],
  "\u306a": ["na"], "\u306b": ["ni"], "\u306c": ["nu"], "\u306d": ["ne"], "\u306e": ["no"],
  "\u306f": ["ha"], "\u3072": ["hi"], "\u3075": ["fu", "hu"], "\u3078": ["he"], "\u307b": ["ho"],
  "\u307e": ["ma"], "\u307f": ["mi"], "\u3080": ["mu"], "\u3081": ["me"], "\u3082": ["mo"],
  "\u3084": ["ya"], "\u3086": ["yu"], "\u3088": ["yo"],
  "\u3089": ["ra"], "\u308a": ["ri"], "\u308b": ["ru"], "\u308c": ["re"], "\u308d": ["ro"],
  "\u308f": ["wa"], "\u3092": ["wo", "o"], "\u3093": ["n", "nn"],
  "\u304c": ["ga"], "\u304e": ["gi"], "\u3050": ["gu"], "\u3052": ["ge"], "\u3054": ["go"],
  "\u3056": ["za"], "\u3058": ["ji", "zi"], "\u305a": ["zu"], "\u305c": ["ze"], "\u305e": ["zo"],
  "\u3060": ["da"], "\u3062": ["ji", "di"], "\u3065": ["zu", "du"], "\u3067": ["de"], "\u3069": ["do"],
  "\u3070": ["ba"], "\u3073": ["bi"], "\u3076": ["bu"], "\u3079": ["be"], "\u307c": ["bo"],
  "\u3071": ["pa"], "\u3074": ["pi"], "\u3077": ["pu"], "\u307a": ["pe"], "\u307d": ["po"],
  "\u3041": ["a"], "\u3043": ["i"], "\u3045": ["u"], "\u3047": ["e"], "\u3049": ["o"]
};

const YOON_MAP = {
  "\u304d\u3083": ["kya"], "\u304d\u3085": ["kyu"], "\u304d\u3087": ["kyo"],
  "\u3057\u3083": ["sha", "sya"], "\u3057\u3085": ["shu", "syu"], "\u3057\u3087": ["sho", "syo"],
  "\u3061\u3083": ["cha", "tya", "cya"], "\u3061\u3085": ["chu", "tyu", "cyu"], "\u3061\u3087": ["cho", "tyo", "cyo"],
  "\u306b\u3083": ["nya"], "\u306b\u3085": ["nyu"], "\u306b\u3087": ["nyo"],
  "\u3072\u3083": ["hya"], "\u3072\u3085": ["hyu"], "\u3072\u3087": ["hyo"],
  "\u307f\u3083": ["mya"], "\u307f\u3085": ["myu"], "\u307f\u3087": ["myo"],
  "\u308a\u3083": ["rya"], "\u308a\u3085": ["ryu"], "\u308a\u3087": ["ryo"],
  "\u304e\u3083": ["gya"], "\u304e\u3085": ["gyu"], "\u304e\u3087": ["gyo"],
  "\u3058\u3083": ["ja", "jya", "zya"], "\u3058\u3085": ["ju", "jyu", "zyu"], "\u3058\u3087": ["jo", "jyo", "zyo"],
  "\u3073\u3083": ["bya"], "\u3073\u3085": ["byu"], "\u3073\u3087": ["byo"],
  "\u3074\u3083": ["pya"], "\u3074\u3085": ["pyu"], "\u3074\u3087": ["pyo"],
  "\u3044\u3047": ["ye"]
};

const PHRASE_DATA = [
  { displayText: "\u624b", reading: "\u3066" },
  { displayText: "\u76ee", reading: "\u3081" },
  { displayText: "\u6728", reading: "\u304d" },
  { displayText: "\u97f3", reading: "\u304a\u3068" },
  { displayText: "\u7a7a", reading: "\u305d\u3089" },
  { displayText: "\u732b", reading: "\u306d\u3053" },
  { displayText: "\u30ad\u30fc", reading: "\u304d\u30fc" },
  { displayText: "\u30ad\u30fc\u3092\u6253\u3064", reading: "\u304d\u30fc\u3092\u3046\u3064" },
  { displayText: "\u3042\u308a\u304c\u3068\u3046", reading: "\u3042\u308a\u304c\u3068\u3046" },
  { displayText: "\u304a\u306f\u3088\u3046", reading: "\u304a\u306f\u3088\u3046" },
  { displayText: "\u304a\u3064\u304b\u308c\u3055\u307e", reading: "\u304a\u3064\u304b\u308c\u3055\u307e" },
  { displayText: "\u304c\u3093\u3070\u308d\u3046", reading: "\u304c\u3093\u3070\u308d\u3046" },
  { displayText: "\u4eca\u65e5\u3082\u5143\u6c17\u306b\u304c\u3093\u3070\u308d\u3046", reading: "\u304d\u3087\u3046\u3082\u3052\u3093\u304d\u306b\u304c\u3093\u3070\u308d\u3046" },
  { displayText: "\u3059\u3070\u3084\u304f\u6253\u3064", reading: "\u3059\u3070\u3084\u304f\u3046\u3064" },
  { displayText: "\u3057", reading: "\u3057" },
  { displayText: "\u96c6\u4e2d", reading: "\u3057\u3085\u3046\u3061\u3085\u3046" },
  { displayText: "\u96c6\u4e2d\u3057\u3066\u6587\u5b57\u3092\u6253\u3064", reading: "\u3057\u3085\u3046\u3061\u3085\u3046\u3057\u3066\u3082\u3058\u3092\u3046\u3064" },
  { displayText: "\u3061\u3085\u3046\u3044", reading: "\u3061\u3085\u3046\u3044" },
  { displayText: "\u7b11\u9854", reading: "\u3048\u304c\u304a" },
  { displayText: "\u7b11\u9854\u3067\u9032\u3080", reading: "\u3048\u304c\u304a\u3067\u3059\u3059\u3080" },
  { displayText: "\u99c5", reading: "\u3048\u304d" },
  { displayText: "\u99c5\u3078\u884c\u304f", reading: "\u3048\u304d\u3078\u3044\u304f" },
  { displayText: "\u4e16\u754c", reading: "\u305b\u304b\u3044" },
  { displayText: "\u4e16\u754c\u3092\u5e83\u3052\u308b", reading: "\u305b\u304b\u3044\u3092\u3072\u308d\u3052\u308b" },
  { displayText: "\u624b\u7d19", reading: "\u3066\u304c\u307f" },
  { displayText: "\u624b\u7d19\u3092\u66f8\u304f", reading: "\u3066\u304c\u307f\u3092\u304b\u304f" },
  {
    displayText: "\u30c1\u30e3\u30ec\u30f3\u30b8",
    reading: "\u3061\u3083\u308c\u3093\u3058",
    extraInputs: ["charennji", "tyarennji", "cyarennji"]
  },
  { displayText: "\u5c11\u3057\u305a\u3064\u4e0a\u9054\u3059\u308b", reading: "\u3059\u3053\u3057\u305a\u3064\u3058\u3087\u3046\u305f\u3064\u3059\u308b" },
  {
    displayText: "\u3053\u3093\u306b\u3061\u306f",
    reading: "\u3053\u3093\u306b\u3061\u306f",
    extraInputs: ["konnichiwa", "konnnichiwa", "konnitiwa", "konnnitiwa"]
  },
  { displayText: "\u3053\u3093\u3070\u3093\u306f", reading: "\u3053\u3093\u3070\u3093\u306f", extraInputs: ["konbanwa"] },
  { displayText: "\u6b63\u78ba\u306b\u30ad\u30fc\u3092\u62bc\u3059", reading: "\u305b\u3044\u304b\u304f\u306b\u304d\u30fc\u3092\u304a\u3059" },
  { displayText: "\u3054\u3061\u305d\u3046\u3055\u307e", reading: "\u3054\u3061\u305d\u3046\u3055\u307e" },
  { displayText: "\u307e\u305f\u660e\u65e5", reading: "\u307e\u305f\u3042\u3057\u305f" },
  { displayText: "\u3086\u3063\u304f\u308a\u9032\u3081\u308b", reading: "\u3086\u3063\u304f\u308a\u3059\u3059\u3081\u308b" },
  { displayText: "\u4eca\u65e5\u3082\u3044\u3044\u65e5", reading: "\u304d\u3087\u3046\u3082\u3044\u3044\u3072" },
  { displayText: "\u7df4\u7fd2\u3057\u3088\u3046", reading: "\u308c\u3093\u3057\u3085\u3046\u3057\u3088\u3046" },
  { displayText: "\u9593\u9055\u3048\u3066\u3082\u5927\u4e08\u592b", reading: "\u307e\u3061\u304c\u3048\u3066\u3082\u3060\u3044\u3058\u3087\u3046\u3076" },
  { displayText: "\u6700\u5f8c\u307e\u3067\u3042\u304d\u3089\u3081\u306a\u3044", reading: "\u3055\u3044\u3054\u307e\u3067\u3042\u304d\u3089\u3081\u306a\u3044" },
  { displayText: "\u5bcc\u58eb\u5c71\u3092\u898b\u308b", reading: "\u3075\u3058\u3055\u3093\u3092\u307f\u308b" },
  { displayText: "\u5199\u771f\u3092\u64ae\u308b", reading: "\u3057\u3083\u3057\u3093\u3092\u3068\u308b" },
  { displayText: "\u3061\u3087\u3063\u3068\u5f85\u3063\u3066", reading: "\u3061\u3087\u3063\u3068\u307e\u3063\u3066" },
  { displayText: "\u3058\u3083\u3093\u3051\u3093\u3067\u52dd\u3064", reading: "\u3058\u3083\u3093\u3051\u3093\u3067\u304b\u3064" },
  { displayText: "\u7d9a\u3051\u308b\u529b", reading: "\u3064\u3065\u3051\u308b\u3061\u304b\u3089" },
  { displayText: "\u6c34\u3092\u98f2\u3080", reading: "\u307f\u305a\u3092\u306e\u3080" },
  { displayText: "\u672c\u3092\u8aad\u3080", reading: "\u307b\u3093\u3092\u3088\u3080" },
  { displayText: "\u671d\u3054\u306f\u3093", reading: "\u3042\u3055\u3054\u306f\u3093" },
  { displayText: "\u591c\u7a7a\u3092\u898b\u308b", reading: "\u3088\u305e\u3089\u3092\u307f\u308b" },
  { displayText: "\u9053\u3092\u6b69\u304f", reading: "\u307f\u3061\u3092\u3042\u308b\u304f" },
  { displayText: "\u58f0\u3092\u51fa\u3059", reading: "\u3053\u3048\u3092\u3060\u3059" },
  { displayText: "\u82b1\u304c\u54b2\u304f", reading: "\u306f\u306a\u304c\u3055\u304f" },
  { displayText: "\u98a8\u304c\u5439\u304f", reading: "\u304b\u305c\u304c\u3075\u304f" },
  { displayText: "\u96e8\u304c\u3084\u3080", reading: "\u3042\u3081\u304c\u3084\u3080" },
  { displayText: "\u72ac\u3068\u8d70\u308b", reading: "\u3044\u306c\u3068\u306f\u3057\u308b" },
  { displayText: "\u3086\u3063\u304f\u308a\u606f\u3092\u3059\u308b", reading: "\u3086\u3063\u304f\u308a\u3044\u304d\u3092\u3059\u308b" },
  { displayText: "\u5927\u304d\u306a\u58f0\u3067\u8aad\u3080", reading: "\u304a\u304a\u304d\u306a\u3053\u3048\u3067\u3088\u3080" },
  { displayText: "\u65b0\u3057\u3044\u8a00\u8449\u3092\u899a\u3048\u308b", reading: "\u3042\u305f\u3089\u3057\u3044\u3053\u3068\u3070\u3092\u304a\u307c\u3048\u308b" },
  { displayText: "\u673a\u306e\u4e0a\u3092\u7247\u4ed8\u3051\u308b", reading: "\u3064\u304f\u3048\u306e\u3046\u3048\u3092\u304b\u305f\u3065\u3051\u308b" },
  { displayText: "\u97f3\u697d\u306b\u5408\u308f\u305b\u3066\u9032\u3080", reading: "\u304a\u3093\u304c\u304f\u306b\u3042\u308f\u305b\u3066\u3059\u3059\u3080" },
  { displayText: "\u6bce\u65e5\u5c11\u3057\u305a\u3064\u7d9a\u3051\u308b", reading: "\u307e\u3044\u306b\u3061\u3059\u3053\u3057\u305a\u3064\u3064\u3065\u3051\u308b" },
  { displayText: "\u5931\u6557\u3057\u3066\u3082\u3059\u3050\u76f4\u3059", reading: "\u3057\u3063\u3071\u3044\u3057\u3066\u3082\u3059\u3050\u306a\u304a\u3059" },
  { displayText: "\u753b\u9762\u3092\u898b\u306a\u304c\u3089\u6253\u3064", reading: "\u304c\u3081\u3093\u3092\u307f\u306a\u304c\u3089\u3046\u3064" },
  { displayText: "\u6b63\u3057\u3044\u59ff\u52e2\u3067\u5ea7\u308b", reading: "\u305f\u3060\u3057\u3044\u3057\u305b\u3044\u3067\u3059\u308f\u308b" },
  { displayText: "\u6700\u5f8c\u307e\u3067\u96c6\u4e2d\u3059\u308b", reading: "\u3055\u3044\u3054\u307e\u3067\u3057\u3085\u3046\u3061\u3085\u3046\u3059\u308b" },
  { displayText: "\u30bf\u30a4\u30d4\u30f3\u30b0\u306e\u30ea\u30ba\u30e0\u3092\u3064\u304b\u3080", reading: "\u305f\u3044\u3074\u3093\u3050\u306e\u308a\u305a\u3080\u3092\u3064\u304b\u3080" },
  { displayText: "\u9577\u3044\u6587\u7ae0\u3067\u3082\u3042\u308f\u3066\u306a\u3044", reading: "\u306a\u304c\u3044\u3076\u3093\u3057\u3087\u3046\u3067\u3082\u3042\u308f\u3066\u306a\u3044" },
  { displayText: "\u82e6\u624b\u306a\u30ad\u30fc\u307b\u3069\u4ef2\u826f\u304f\u306a\u308b", reading: "\u306b\u304c\u3066\u306a\u304d\u30fc\u307b\u3069\u306a\u304b\u3088\u304f\u306a\u308b" },
  { displayText: "\u6307\u306e\u4f4d\u7f6e\u3092\u601d\u3044\u51fa\u3057\u3066\u9032\u3080", reading: "\u3086\u3073\u306e\u3044\u3061\u3092\u304a\u3082\u3044\u3060\u3057\u3066\u3059\u3059\u3080" }
];

const PHRASES = PHRASE_DATA.map((phrase) => ({
  ...phrase,
  acceptedInputs: buildAcceptedInputs(phrase)
}));

const screens = {
  start: document.getElementById("startScreen"),
  game: document.getElementById("gameScreen"),
  result: document.getElementById("resultScreen")
};

const elements = {
  startButton: document.getElementById("startButton"),
  retryButton: document.getElementById("retryButton"),
  changeSettingsButton: document.getElementById("changeSettingsButton"),
  resetBestButton: document.getElementById("resetBestButton"),
  soundToggleButton: document.getElementById("soundToggleButton"),
  difficultySelect: document.getElementById("difficultySelect"),
  phraseModeButton: document.getElementById("phraseModeButton"),
  keyModeButton: document.getElementById("keyModeButton"),
  keyFocusSelect: document.getElementById("keyFocusSelect"),
  phraseStage: document.getElementById("phraseStage"),
  keyStage: document.getElementById("keyStage"),
  typingInput: document.getElementById("typingInput"),
  phraseText: document.getElementById("phraseText"),
  readingText: document.getElementById("readingText"),
  romajiGuide: document.getElementById("romajiGuide"),
  keyTarget: document.getElementById("keyTarget"),
  keyboard: document.getElementById("keyboard"),
  comboText: document.getElementById("comboText"),
  comboAttackText: document.getElementById("comboAttackText"),
  enemyStage: document.getElementById("enemyStage"),
  enemySprite: document.getElementById("enemySprite"),
  enemyHpBar: document.getElementById("enemyHpBar"),
  modeText: document.getElementById("modeText"),
  timeText: document.getElementById("timeText"),
  timeBar: document.getElementById("timeBar"),
  scoreText: document.getElementById("scoreText"),
  correctText: document.getElementById("correctText"),
  missText: document.getElementById("missText"),
  defeatedText: document.getElementById("defeatedText"),
  stageText: document.getElementById("stageText"),
  stageNotice: document.getElementById("stageNotice"),
  liveWeakText: document.getElementById("liveWeakText"),
  stageClearBanner: document.getElementById("stageClearBanner"),
  stageClearText: document.getElementById("stageClearText"),
  resultCorrect: document.getElementById("resultCorrect"),
  resultMiss: document.getElementById("resultMiss"),
  resultAccuracy: document.getElementById("resultAccuracy"),
  resultScore: document.getElementById("resultScore"),
  rankText: document.getElementById("rankText"),
  resultDefeatedRow: document.getElementById("resultDefeatedRow"),
  resultDefeated: document.getElementById("resultDefeated"),
  weakKeyRow: document.getElementById("weakKeyRow"),
  weakKeyText: document.getElementById("weakKeyText"),
  weakRomajiRow: document.getElementById("weakRomajiRow"),
  weakRomajiText: document.getElementById("weakRomajiText"),
  bestScoreText: document.getElementById("bestScoreText")
};

const gameState = {
  active: false,
  mode: "phrase",
  selectedMode: "phrase",
  difficulty: "normal",
  soundEnabled: localStorage.getItem(SOUND_SETTING_KEY) !== "false",
  timeLeft: GAME_SETTINGS.duration,
  correctCount: 0,
  missCount: 0,
  score: 0,
  currentIndex: 0,
  timerId: null,
  lastInput: "",
  phraseOrder: [],
  defeatedCount: 0,
  currentKey: "",
  keyIndex: 0,
  combo: 0,
  phraseCombo: 0,
  bestPhraseCombo: 0,
  weakKeys: {},
  weakRomaji: {},
  phraseLock: false,
  lastProgress: 0,
  recentKeys: [],
  keyFocus: "all",
  defeatedMonsterIndexes: new Set(),
  stageClearTimerId: null
};

function buildAcceptedInputs(phrase) {
  return [...new Set([
    ...generateRomajiCandidates(phrase.reading),
    ...(phrase.extraInputs || [])
  ].map(normalizeInput))].sort((a, b) => a.length - b.length || a.localeCompare(b));
}

function generateRomajiCandidates(japanese) {
  const pieces = [];
  const tokens = tokenizeKana(japanese);

  tokens.forEach((token, index) => {
    if (token === "\u3063") {
      pieces.push(getSokuonCandidates(tokens[index + 1]));
      return;
    }

    if (token === "\u30fc" || token === "\uff0d") {
      pieces.push(getLongMarkCandidates(pieces));
      return;
    }

    pieces.push(getTokenCandidates(token));
  });

  return addLongVowelVariants(combineCandidates(pieces));
}

function tokenizeKana(text) {
  const tokens = [];
  let index = 0;

  while (index < text.length) {
    const pair = text.slice(index, index + 2);

    if (YOON_MAP[pair]) {
      tokens.push(pair);
      index += 2;
    } else {
      tokens.push(text[index]);
      index += 1;
    }
  }

  return tokens;
}

function getTokenCandidates(token) {
  return YOON_MAP[token] || ROMAJI_MAP[token] || [token];
}

function getSokuonCandidates(nextToken) {
  const nextCandidates = getTokenCandidates(nextToken || "");
  return [...new Set(nextCandidates.map((candidate) => candidate[0] || ""))];
}

function getLongMarkCandidates(candidateGroups) {
  const combined = combineCandidates(candidateGroups);
  const vowels = combined
    .map((candidate) => candidate.match(/[aiueo]$/)?.[0])
    .filter(Boolean);

  return [...new Set(vowels.length > 0 ? [...vowels, "-"] : ["-"])];
}

function combineCandidates(candidateGroups) {
  return candidateGroups.reduce((results, group) => {
    const nextResults = [];

    for (const result of results) {
      for (const candidate of group) {
        nextResults.push(result + candidate);
      }
    }

    return nextResults;
  }, [""]);
}

function addLongVowelVariants(candidates) {
  const results = new Set(candidates);

  for (const candidate of candidates) {
    results.add(candidate.replaceAll("ou", "oo"));
  }

  return [...results];
}

function showScreen(screenName) {
  Object.values(screens).forEach((screen) => {
    screen.classList.remove("screen-active");
  });
  screens[screenName].classList.add("screen-active");
}

function selectMode(mode) {
  gameState.selectedMode = mode;
  elements.phraseModeButton.classList.toggle("mode-card-active", mode === "phrase");
  elements.keyModeButton.classList.toggle("mode-card-active", mode === "key");
  elements.keyFocusSelect.hidden = mode !== "key";
  elements.phraseModeButton.setAttribute("aria-pressed", String(mode === "phrase"));
  elements.keyModeButton.setAttribute("aria-pressed", String(mode === "key"));
}

function selectKeyFocus(focus) {
  gameState.keyFocus = focus;
  elements.keyFocusSelect.querySelectorAll(".focus-button").forEach((button) => {
    button.classList.toggle("focus-button-active", button.dataset.focus === focus);
  });
}

function selectDifficulty(difficulty) {
  if (!DIFFICULTY_SETTINGS[difficulty]) {
    return;
  }

  gameState.difficulty = difficulty;
  elements.difficultySelect.querySelectorAll(".difficulty-button").forEach((button) => {
    const isActive = button.dataset.difficulty === difficulty;
    button.classList.toggle("difficulty-button-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  elements.bestScoreText.textContent = getBestScore();
}

function toggleSound() {
  setSoundEnabled(!gameState.soundEnabled);
}

function setSoundEnabled(enabled) {
  gameState.soundEnabled = enabled;
  localStorage.setItem(SOUND_SETTING_KEY, String(enabled));
  elements.soundToggleButton.textContent = enabled ? "\u97f3 ON" : "\u97f3 OFF";
  elements.soundToggleButton.setAttribute("aria-pressed", String(enabled));
}

function startGame() {
  resetGameState(gameState.selectedMode);
  showScreen("game");
  updateModeView();

  if (gameState.mode === "phrase") {
    spawnEnemy();
    setNextPhrase();
    elements.typingInput.focus();
  } else {
    setNextKey();
    document.body.focus();
  }

  updateDisplay();
  gameState.active = true;
  gameState.timerId = window.setInterval(tickTimer, 1000);
}

function resetGameState(mode) {
  window.clearInterval(gameState.timerId);
  window.clearTimeout(gameState.stageClearTimerId);
  gameState.active = false;
  gameState.mode = mode;
  gameState.timeLeft = getCurrentDuration();
  gameState.correctCount = 0;
  gameState.missCount = 0;
  gameState.score = 0;
  gameState.currentIndex = 0;
  gameState.lastInput = "";
  gameState.phraseOrder = createPhraseOrder(PHRASES);
  gameState.defeatedCount = 0;
  gameState.currentKey = "";
  gameState.keyIndex = 0;
  gameState.combo = 0;
  gameState.phraseCombo = 0;
  gameState.bestPhraseCombo = 0;
  gameState.weakKeys = {};
  gameState.weakRomaji = {};
  gameState.phraseLock = false;
  gameState.lastProgress = 0;
  gameState.recentKeys = [];
  gameState.defeatedMonsterIndexes = new Set();
  gameState.stageClearTimerId = null;
  elements.typingInput.value = "";
  elements.typingInput.disabled = false;
  elements.typingInput.classList.remove("is-wrong");
  elements.comboText.textContent = "0";
  elements.comboAttackText.textContent = "";
  elements.stageNotice.textContent = "";
  elements.liveWeakText.textContent = "-";
  hideStageClearBanner();
}

function updateModeView() {
  const isPhraseMode = gameState.mode === "phrase";

  elements.modeText.textContent = isPhraseMode
    ? `\u6587\u7ae0 / ${DIFFICULTY_SETTINGS[gameState.difficulty].label}`
    : `\u4e00\u6587\u5b57 / ${DIFFICULTY_SETTINGS[gameState.difficulty].label}`;
  elements.stageText.textContent = isPhraseMode ? getStageNumber() : "-";
  elements.phraseStage.hidden = !isPhraseMode;
  elements.keyStage.hidden = isPhraseMode;
  elements.enemyStage.hidden = !isPhraseMode;

  if (!isPhraseMode) {
    elements.typingInput.value = "";
    elements.typingInput.blur();
  }
}

function createPhraseOrder(phrases) {
  const difficulty = DIFFICULTY_SETTINGS[gameState.difficulty];
  const filteredPhrases = phrases.filter((phrase) =>
    phrase.reading.length >= difficulty.minReadingLength &&
    phrase.reading.length <= difficulty.maxReadingLength
  );
  const phrasePool = filteredPhrases.length > 0 ? filteredPhrases : phrases;

  return createProgressivePhraseOrder(phrasePool);
}

function getCurrentDuration() {
  return DIFFICULTY_SETTINGS[gameState.difficulty].duration;
}

function shufflePhrases(phrases) {
  const shuffled = [...phrases];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled;
}

function createProgressivePhraseOrder(phrases) {
  const groups = new Map();

  phrases.forEach((phrase) => {
    const band = getPhraseLengthBand(phrase.reading.length);
    const group = groups.get(band) || [];
    group.push(phrase);
    groups.set(band, group);
  });

  return [...groups.keys()]
    .sort((a, b) => a - b)
    .flatMap((band) => shufflePhrases(groups.get(band)));
}

function getPhraseLengthBand(length) {
  if (length <= 3) {
    return 1;
  }
  if (length <= 6) {
    return 2;
  }
  if (length <= 10) {
    return 3;
  }
  if (length <= 15) {
    return 4;
  }
  return 5;
}

function getCurrentPhrase() {
  if (gameState.currentIndex >= gameState.phraseOrder.length) {
    gameState.phraseOrder = createPhraseOrder(PHRASES);
    gameState.currentIndex = 0;
  }
  return gameState.phraseOrder[gameState.currentIndex];
}

function getStageNumber() {
  return Math.floor(gameState.correctCount / 10) + 1;
}

function isMidBossRound() {
  return (gameState.correctCount + 1) % 10 === 0;
}

function setNextPhrase() {
  if (!gameState.active && gameState.correctCount > 0) {
    return;
  }

  const phrase = getCurrentPhrase();
  const target = selectBestCandidate("", phrase.acceptedInputs);

  elements.phraseText.textContent = phrase.displayText;
  elements.readingText.textContent = `\u8aad\u307f\uff1a${phrase.reading}`;
  elements.stageText.textContent = getStageNumber();
  elements.stageNotice.textContent = isMidBossRound() ? "\u4e2d\u30dc\u30b9\u51fa\u73fe\uff01" : "";
  elements.typingInput.value = "";
  gameState.lastInput = "";
  gameState.phraseLock = false;
  gameState.lastProgress = 0;
  elements.typingInput.disabled = false;
  setEnemyHp(100);
  updateTypingGuide("", target);
  elements.typingInput.classList.remove("is-wrong");
  elements.typingInput.focus();
}

function handleTyping() {
  if (!gameState.active || gameState.mode !== "phrase" || gameState.phraseLock) {
    return;
  }

  const typed = normalizeInput(elements.typingInput.value);
  const acceptedInputs = getCurrentPhrase().acceptedInputs;
  const guideTarget = selectBestCandidate(typed, acceptedInputs);
  const isCorrectPrefix = checkInput(typed, acceptedInputs);
  const isCorrectAnswer = acceptedInputs.some((candidate) => typed === candidate);

  if (!isCorrectPrefix && typed !== gameState.lastInput) {
    gameState.missCount += 1;
    gameState.phraseCombo = 0;
    recordRomajiMiss(typed, guideTarget);
    updateLiveWeakText();
    playSound("miss");
    elements.typingInput.value = gameState.lastInput;
    elements.typingInput.classList.remove("is-wrong");
    void elements.typingInput.offsetWidth;
    elements.typingInput.classList.add("is-wrong");
    updateTypingGuide(gameState.lastInput, selectBestCandidate(gameState.lastInput, acceptedInputs));
    updateDisplay();
    return;
  }

  updateEnemyProgress(typed, guideTarget, isCorrectPrefix);
  elements.typingInput.classList.toggle("is-wrong", !isCorrectPrefix);
  updateTypingGuide(typed, guideTarget);
  gameState.lastInput = typed;

  if (isCorrectAnswer) {
    completePhraseAnswer();
  }

  updateDisplay();
}

function completePhraseAnswer() {
  const wasMidBoss = isMidBossRound();
  const defeatedMonsterIndex = getCurrentMonsterIndex();
  gameState.phraseLock = true;
  elements.typingInput.disabled = true;
  gameState.correctCount += 1;
  gameState.phraseCombo += 1;
  gameState.bestPhraseCombo = Math.max(gameState.bestPhraseCombo, gameState.phraseCombo);
  gameState.defeatedCount += 1;
  gameState.defeatedMonsterIndexes.add(defeatedMonsterIndex);
  gameState.currentIndex += 1;
  gameState.score = calculateScore();
  showComboAttack();
  if (wasMidBoss) {
    showStageClear();
  }
  playSound(wasMidBoss ? "stageClear" : "correct");
  updateDisplay();
  defeatEnemy(() => {
    if (!gameState.active || gameState.mode !== "phrase") {
      return;
    }
    spawnEnemy();
    setNextPhrase();
    updateDisplay();
  });
}

function recordRomajiMiss(typed, target) {
  const index = getCommonPrefixLength(typed, target);
  const wrongChar = typed.slice(index, index + 1);
  const expected = wrongChar || target.slice(index, index + 3) || "\u7d42\u308f\u308a";
  gameState.weakRomaji[expected] = (gameState.weakRomaji[expected] || 0) + 1;
}

function updateLiveWeakText() {
  if (gameState.mode === "key") {
    const weakKeys = getWeakKeysText();
    elements.liveWeakText.textContent = weakKeys === "-" ? "\u307e\u3060\u30df\u30b9\u306a\u3057" : `\u82e6\u624b\u30ad\u30fc: ${weakKeys}`;
    return;
  }

  const weakRomaji = getWeakRomajiText();
  elements.liveWeakText.textContent = weakRomaji === "-" ? "\u307e\u3060\u30df\u30b9\u306a\u3057" : `\u82e6\u624b: ${weakRomaji}`;
}

function showStageClear() {
  elements.stageClearText.textContent = `${gameState.correctCount} QUESTS!`;
  elements.stageClearBanner.hidden = false;
  elements.stageClearBanner.classList.remove("stage-clear-pop");
  void elements.stageClearBanner.offsetWidth;
  elements.stageClearBanner.classList.add("stage-clear-pop");
  window.clearTimeout(gameState.stageClearTimerId);
  gameState.stageClearTimerId = window.setTimeout(hideStageClearBanner, 780);
}

function hideStageClearBanner() {
  elements.stageClearBanner.hidden = true;
  elements.stageClearBanner.classList.remove("stage-clear-pop");
}

function showComboAttack() {
  if (gameState.phraseCombo < 2) {
    elements.comboAttackText.textContent = "";
    return;
  }

  const label = gameState.phraseCombo >= 10 ? "\u8d85\u9023\u6483" : "\u30b3\u30f3\u30dc\u653b\u6483";
  elements.comboAttackText.textContent = `${label} ${gameState.phraseCombo} COMBO!`;
  elements.comboAttackText.classList.remove("combo-pop");
  void elements.comboAttackText.offsetWidth;
  elements.comboAttackText.classList.add("combo-pop");
}

function normalizeInput(value) {
  return String(value)
    .toLowerCase()
    .replace(/[\u30fc\uff0d]/g, "-")
    .replace(/\u3000/g, " ")
    .trim();
}

function checkInput(typed, acceptedInputs) {
  return acceptedInputs.some((candidate) => candidate.startsWith(typed));
}

function selectBestCandidate(typed, acceptedInputs) {
  if (acceptedInputs.length === 0) {
    return "";
  }

  const prefixMatches = acceptedInputs.filter((candidate) => candidate.startsWith(typed));

  if (prefixMatches.length > 0) {
    return findClosestCandidate(typed, prefixMatches);
  }

  return findClosestCandidate(typed, acceptedInputs);
}

function findClosestCandidate(typed, candidates) {
  return candidates.reduce((best, candidate) => {
    const bestScore = getCandidateScore(typed, best);
    const candidateScore = getCandidateScore(typed, candidate);

    if (candidateScore > bestScore) {
      return candidate;
    }

    if (candidateScore === bestScore && Math.abs(candidate.length - typed.length) < Math.abs(best.length - typed.length)) {
      return candidate;
    }

    return best;
  }, candidates[0] || "");
}

function getCandidateScore(typed, candidate) {
  let score = getCommonPrefixLength(typed, candidate) * 20;
  const length = Math.min(typed.length, candidate.length);

  for (let index = 0; index < length; index += 1) {
    score += typed[index] === candidate[index] ? 2 : -1;
  }

  return score - Math.abs(candidate.length - typed.length);
}

function getCommonPrefixLength(typed, candidate) {
  let length = 0;

  while (
    length < typed.length &&
    length < candidate.length &&
    typed[length] === candidate[length]
  ) {
    length += 1;
  }

  return length;
}

function spawnEnemy() {
  const imageIndex = getCurrentMonsterIndex();
  elements.enemySprite.src = MONSTER_IMAGES[imageIndex];
  elements.enemySprite.classList.remove("enemy-defeated", "enemy-spawn", "enemy-damaged");
  setEnemyHp(100);
  window.requestAnimationFrame(() => {
    elements.enemySprite.classList.add("enemy-spawn");
  });
}

function getCurrentMonsterIndex() {
  if (isMidBossRound()) {
    return MONSTER_IMAGES.length - 1;
  }

  const stageProgress = (gameState.correctCount % 10) / 9;
  return Math.min(MONSTER_IMAGES.length - 2, Math.floor(stageProgress * (MONSTER_IMAGES.length - 1)));
}

function updateEnemyProgress(typed, target, isCorrectPrefix) {
  if (!isCorrectPrefix || target.length === 0) {
    return;
  }

  const progress = Math.min(typed.length / target.length, 1);
  const hp = Math.max(0, Math.round((1 - progress) * 100));
  setEnemyHp(hp);

  if (progress > gameState.lastProgress && typed.length > 0) {
    playEnemyDamage();
  }

  gameState.lastProgress = progress;
}

function setEnemyHp(percent) {
  elements.enemyHpBar.style.width = `${Math.max(0, Math.min(100, percent))}%`;
}

function playEnemyDamage() {
  elements.enemySprite.classList.remove("enemy-damaged");
  void elements.enemySprite.offsetWidth;
  elements.enemySprite.classList.add("enemy-damaged");
}

function defeatEnemy(callback) {
  setEnemyHp(0);
  elements.enemySprite.classList.remove("enemy-spawn", "enemy-damaged");
  elements.enemySprite.classList.add("enemy-defeated");
  window.setTimeout(callback, 170);
}

function renderKeyboard() {
  elements.keyboard.innerHTML = "";

  KEY_ROWS.forEach((row) => {
    const rowElement = document.createElement("div");
    rowElement.className = "keyboard-row";

    [...row].forEach((key) => {
      const keyElement = document.createElement("span");
      keyElement.className = "key";
      keyElement.dataset.key = key;
      keyElement.textContent = KEY_LABELS[key] || key;

      if (HOME_KEYS.has(key)) {
        keyElement.classList.add("key-home");
      }

      rowElement.appendChild(keyElement);
    });

    elements.keyboard.appendChild(rowElement);
  });
}

function setNextKey() {
  gameState.currentKey = chooseNextKey();
  gameState.keyIndex += 1;
  gameState.recentKeys.push(gameState.currentKey);
  gameState.recentKeys = gameState.recentKeys.slice(-3);
  elements.keyTarget.textContent = KEY_LABELS[gameState.currentKey] || gameState.currentKey;
  updateKeyboardHighlight();
}

function chooseNextKey() {
  const weakKey = chooseWeakKeyCandidate();
  if (weakKey) {
    return weakKey;
  }

  const focusPool = KEY_FOCUS_POOLS[gameState.keyFocus];

  for (let attempt = 0; attempt < 12; attempt += 1) {
    const poolName = chooseWeightedPoolName();
    let pool = KEY_POOLS[poolName];
    if (focusPool) {
      pool = pool.filter((key) => focusPool.includes(key));
      if (pool.length === 0) {
        pool = focusPool;
      }
    }
    const key = pool[Math.floor(Math.random() * pool.length)];

    if (!gameState.recentKeys.includes(key)) {
      return key;
    }
  }

  const allKeys = focusPool || Object.values(KEY_POOLS).flat();
  return allKeys.find((key) => key !== gameState.currentKey) || allKeys[0];
}

function chooseWeakKeyCandidate() {
  const weakKeys = Object.entries(gameState.weakKeys)
    .filter(([key]) => !gameState.recentKeys.includes(key))
    .sort((a, b) => b[1] - a[1]);

  if (weakKeys.length === 0 || gameState.correctCount + gameState.missCount < 6) {
    return "";
  }

  return Math.random() < 0.18 ? weakKeys[0][0] : "";
}

function chooseWeightedPoolName() {
  const roll = Math.random();
  let cursor = 0;

  for (const pool of KEY_POOL_WEIGHTS) {
    cursor += pool.weight;
    if (roll <= cursor) {
      return pool.name;
    }
  }

  return "home";
}

function updateKeyboardHighlight() {
  elements.keyboard.querySelectorAll(".key").forEach((keyElement) => {
    keyElement.classList.toggle("key-active", keyElement.dataset.key === gameState.currentKey);
  });
}

function handleKeyPractice(event) {
  if (!gameState.active || gameState.mode !== "key") {
    return;
  }

  const pressedKey = normalizeKeyInput(event.key);

  if (!isPracticeKey(pressedKey)) {
    return;
  }

  event.preventDefault();

  if (pressedKey === gameState.currentKey) {
    gameState.correctCount += 1;
    gameState.combo += 1;
    if (gameState.correctCount % 10 === 0) {
      showStageClear();
      playSound("stageClear");
    } else {
      playSound("key");
    }
    setNextKey();
  } else {
    gameState.missCount += 1;
    gameState.combo = 0;
    gameState.weakKeys[gameState.currentKey] = (gameState.weakKeys[gameState.currentKey] || 0) + 1;
    updateLiveWeakText();
    playSound("miss");
  }

  elements.comboText.textContent = gameState.combo;
  updateDisplay();
}

function normalizeKeyInput(key) {
  return String(key).toLowerCase().replace(/[\u30fc\uff0d]/g, "-");
}

function isPracticeKey(key) {
  return /^[a-z-]$/.test(key);
}

function calculateScore() {
  if (gameState.mode === "key") {
    const base = gameState.correctCount * GAME_SETTINGS.score.keyCorrect;
    const comboBonus = gameState.combo * GAME_SETTINGS.score.keyCombo;
    const penalty = gameState.missCount * GAME_SETTINGS.score.keyMissPenalty;
    return Math.max(0, base + comboBonus - penalty);
  }

  const totalTyped = gameState.correctCount + gameState.missCount;
  const accuracy = totalTyped === 0 ? 1 : gameState.correctCount / totalTyped;
  const base = gameState.correctCount * GAME_SETTINGS.score.correct;
  const accuracyBonus = Math.round(accuracy * GAME_SETTINGS.score.accuracyBonus);
  const timeBonus = gameState.timeLeft * GAME_SETTINGS.score.timeBonus;
  return Math.max(0, base + accuracyBonus + timeBonus - gameState.missCount * 5);
}

function calculateAccuracy() {
  const total = gameState.correctCount + gameState.missCount;
  if (total === 0) {
    return 100;
  }
  return Math.round((gameState.correctCount / total) * 100);
}

function getRank() {
  const accuracy = calculateAccuracy();
  if (accuracy >= 95) {
    return "S";
  }
  if (accuracy >= 85) {
    return "A";
  }
  if (accuracy >= 70) {
    return "B";
  }
  return "C";
}

function updateDisplay() {
  gameState.score = calculateScore();
  elements.timeText.textContent = gameState.timeLeft;
  const timePercent = Math.max(0, Math.min(100, (gameState.timeLeft / getCurrentDuration()) * 100));
  elements.timeBar.style.width = `${timePercent}%`;
  elements.timeBar.classList.toggle("time-low", timePercent <= 20);
  elements.scoreText.textContent = gameState.score;
  elements.correctText.textContent = gameState.correctCount;
  elements.missText.textContent = gameState.missCount;
  elements.defeatedText.textContent = gameState.defeatedCount;
  elements.stageText.textContent = gameState.mode === "phrase" ? getStageNumber() : "-";
  updateLiveWeakText();
}

function updateTypingGuide(typed, target) {
  let correctLength = 0;

  while (
    correctLength < typed.length &&
    correctLength < target.length &&
    typed[correctLength] === target[correctLength]
  ) {
    correctLength += 1;
  }

  const correctPart = escapeHtml(target.slice(0, correctLength));
  const wrongPart = escapeHtml(typed.slice(correctLength));
  const restPart = escapeHtml(target.slice(Math.max(correctLength, typed.length)));

  elements.romajiGuide.innerHTML = [
    `<span class="guide-correct">${correctPart}</span>`,
    `<span class="guide-wrong">${wrongPart}</span>`,
    `<span class="guide-rest">${restPart}</span>`
  ].join("");
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function playSound(type) {
  if (!gameState.soundEnabled) {
    return;
  }

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) {
    return;
  }

  const context = playSound.context || new AudioContext();
  playSound.context = context;
  const now = context.currentTime;

  if (type === "stageClear") {
    playStageClearSound(context, now);
    return;
  }

  const oscillator = context.createOscillator();
  const filter = context.createBiquadFilter();
  const gain = context.createGain();
  const settings = {
    correct: [460, 0.08, 0.017],
    key: [380, 0.052, 0.011],
    miss: [170, 0.08, 0.01]
  }[type] || [320, 0.06, 0.012];

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(settings[0], now);
  if (type === "correct") {
    oscillator.frequency.exponentialRampToValueAtTime(settings[0] * 1.25, now + settings[1]);
  }
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(900, now);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(settings[2], now + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.001, now + settings[1]);
  oscillator.connect(filter);
  filter.connect(gain);
  gain.connect(context.destination);
  oscillator.start(now);
  oscillator.stop(now + settings[1]);
}

function playStageClearSound(context, now) {
  [523.25, 659.25, 783.99, 1046.5].forEach((frequency, index) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const start = now + index * 0.055;
    const duration = 0.22;

    oscillator.type = "triangle";
    oscillator.frequency.setValueAtTime(frequency, start);
    oscillator.frequency.exponentialRampToValueAtTime(frequency * 1.08, start + duration);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.032, start + 0.018);
    gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(start);
    oscillator.stop(start + duration + 0.02);
  });

  const noiseLength = Math.floor(context.sampleRate * 0.18);
  const noiseBuffer = context.createBuffer(1, noiseLength, context.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  for (let index = 0; index < noiseLength; index += 1) {
    output[index] = (Math.random() * 2 - 1) * (1 - index / noiseLength);
  }

  const noise = context.createBufferSource();
  const filter = context.createBiquadFilter();
  const gain = context.createGain();
  noise.buffer = noiseBuffer;
  filter.type = "highpass";
  filter.frequency.setValueAtTime(1800, now);
  gain.gain.setValueAtTime(0.0001, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.018, now + 0.05);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
  noise.connect(filter);
  filter.connect(gain);
  gain.connect(context.destination);
  noise.start(now + 0.02);
  noise.stop(now + 0.22);
}

function tickTimer() {
  gameState.timeLeft = Math.max(0, gameState.timeLeft - 1);
  updateDisplay();

  if (gameState.timeLeft <= 0) {
    finishGame();
  }
}

function finishGame() {
  window.clearInterval(gameState.timerId);
  gameState.active = false;
  elements.typingInput.blur();
  updateBestScore(gameState.score);
  renderResult();
  showScreen("result");
}

function showStartSettings() {
  window.clearInterval(gameState.timerId);
  gameState.active = false;
  elements.typingInput.blur();
  elements.bestScoreText.textContent = getBestScore();
  showScreen("start");
}

function renderResult() {
  elements.resultCorrect.textContent = gameState.correctCount;
  elements.resultMiss.textContent = gameState.missCount;
  elements.resultAccuracy.textContent = `${calculateAccuracy()}%`;
  elements.resultScore.textContent = gameState.score;
  elements.rankText.textContent = getRank();
  elements.resultDefeatedRow.classList.toggle("result-row-hidden", gameState.mode !== "phrase");
  elements.weakKeyRow.classList.toggle("result-row-hidden", gameState.mode !== "key");
  elements.weakRomajiRow.classList.toggle("result-row-hidden", gameState.mode !== "phrase");
  elements.resultDefeated.textContent = gameState.defeatedCount;
  elements.weakKeyText.textContent = getWeakKeysText();
  elements.weakRomajiText.textContent = getWeakRomajiText();
  elements.bestScoreText.textContent = getBestScore();
}

function getWeakKeysText() {
  const entries = Object.entries(gameState.weakKeys).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  if (entries.length === 0) {
    return "-";
  }
  return entries.slice(0, 3).map(([key]) => key.toUpperCase()).join(" ");
}

function getWeakRomajiText() {
  const entries = Object.entries(gameState.weakRomaji).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  if (entries.length === 0) {
    return "-";
  }
  return entries.slice(0, 3).map(([pattern]) => pattern).join(" / ");
}

function getBestScore() {
  return Number(localStorage.getItem(getBestScoreKey())) || 0;
}

function updateBestScore(score) {
  if (score > getBestScore()) {
    localStorage.setItem(getBestScoreKey(), String(score));
  }
}

function getBestScoreKey() {
  return `${BEST_SCORE_KEYS[gameState.mode]}:${gameState.difficulty}`;
}

function resetBestScore() {
  const confirmed = window.confirm("\u73fe\u5728\u306e\u30e2\u30fc\u30c9\u306e\u6700\u9ad8\u30b9\u30b3\u30a2\u3092\u524a\u9664\u3057\u307e\u3059\u304b\uff1f");
  if (!confirmed) {
    return;
  }

  localStorage.removeItem(getBestScoreKey());
  elements.bestScoreText.textContent = "0";
}

function handleKeyDown(event) {
  if (gameState.active && gameState.mode === "key") {
    handleKeyPractice(event);
    return;
  }

  if (event.key !== "Enter") {
    return;
  }

  const canStart = screens.start.classList.contains("screen-active") ||
    screens.result.classList.contains("screen-active");

  if (canStart) {
    startGame();
  }
}

elements.startButton.addEventListener("click", startGame);
elements.retryButton.addEventListener("click", startGame);
elements.changeSettingsButton.addEventListener("click", showStartSettings);
elements.resetBestButton.addEventListener("click", resetBestScore);
elements.soundToggleButton.addEventListener("click", toggleSound);
elements.phraseModeButton.addEventListener("click", () => selectMode("phrase"));
elements.keyModeButton.addEventListener("click", () => selectMode("key"));
elements.keyFocusSelect.querySelectorAll(".focus-button").forEach((button) => {
  button.addEventListener("click", () => selectKeyFocus(button.dataset.focus));
});
elements.difficultySelect.querySelectorAll(".difficulty-button").forEach((button) => {
  button.addEventListener("click", () => selectDifficulty(button.dataset.difficulty));
});
elements.typingInput.addEventListener("input", handleTyping);
document.addEventListener("keydown", handleKeyDown);

renderKeyboard();
selectMode("phrase");
selectKeyFocus("all");
selectDifficulty("normal");
setSoundEnabled(gameState.soundEnabled);
elements.bestScoreText.textContent = getBestScore();
