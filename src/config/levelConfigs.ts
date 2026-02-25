type SequentialProgression = { mode: "sequential" };
type RandomProgression = { mode: "random"; maxRepCount: number };

export type LevelConfig = {
  targetGroup: string[];
  testLength: number;
  displayMode: "single-char" | "multi-char";
  progression: SequentialProgression | RandomProgression;
};

export const LEVEL_CONFIGS: LevelConfig[] = [
  {
    targetGroup: "ASETF".split(""),
    testLength: 5,
    displayMode: "single-char",
    progression: { mode: "sequential" },
  },
  {
    targetGroup: "ASETF".split(""),
    testLength: 5,
    displayMode: "single-char",
    progression: { mode: "random", maxRepCount: 5 },
  },
  {
    targetGroup: ["th", "he", "in", "er"],
    testLength: 5,
    displayMode: "multi-char",
    progression: { mode: "sequential" },
  },
  {
    targetGroup: [
      "the", "ing", "her", "ere", "ent", "tha", "nth", "was", "eth", "for",
      "dth", "has", "nce", "edt", "tis", "oft", "sth", "men", "res", "ion",
      "all", "not", "ver", "his", "thi", "ter", "ate", "ers", "hat",
    ],
    testLength: 5,
    displayMode: "multi-char",
    progression: { mode: "sequential" },
  },
  {
    targetGroup: ["the", "be", "that", "have", "this", "but", "from", "they", "say"],
    testLength: 5,
    displayMode: "multi-char",
    progression: { mode: "sequential" },
  },
  {
    targetGroup: [
      "The man was in the room and he had a plan",
      "He was not sure if it was the one but he would try",
      "that",
      "have",
      "this",
      "but",
      "from",
      "they",
      "say",
    ],
    testLength: 1,
    displayMode: "multi-char",
    progression: { mode: "sequential" },
  },
];
