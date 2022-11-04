export const getRecommendationsSuggestions = (context: any) => {
  context.response.body = suggestionsRecommendationsList;
};

let suggestionsRecommendationsList: any[] = [
  {
    id: 10000,
    title: "Богатейшие люди планеты",
    isdraft: false,
    moderated: true,
    isdeleted: false,
    blocks:
      '[{"id": "YMKazieObF", "data": {"text": "asdasd"}, "type": "paragraph"}]',
    uid: 78,
    lastupdatedat: "2022-10-29 11:20:04.711073+00",
    createdat: "2022-10-29 11:20:04.711073+00",
    picture: '["/data/suggestions/1/ZHJ5R2NHeXZWb1NsMFpaT25pN0JEYzZiWk5jPQ"]',
  },
  {
    id: 20000,
    title: "The most interesting thing on Everigin",
    isdraft: false,
    moderated: true,
    isdeleted: false,
    blocks:
      '[{"id": "YMKazieObF", "data": {"text": "asdasd"}, "type": "paragraph"}]',
    uid: 78,
    lastupdatedat: "2022-10-29 11:20:04.711073+00",
    createdat: "2022-10-29 11:20:04.711073+00",
    picture: '["/data/suggestions/1/ZHJ5R2NHeXZWb1NsMFpaT25pN0JEYzZiWk5jPQ"]',
  },
  {
    id: 30000,
    title: "Распознавание фейковых новостей",
    isdraft: false,
    moderated: true,
    isdeleted: false,
    blocks:
      '[{"id": "YMKazieObF", "data": {"text": "asdasd"}, "type": "paragraph"}]',
    uid: 78,
    lastupdatedat: "2022-10-29 11:20:04.711073+00",
    createdat: "2022-10-29 11:20:04.711073+00",
    picture: '["/data/suggestions/1/ZHJ5R2NHeXZWb1NsMFpaT25pN0JEYzZiWk5jPQ"]',
  },
  {
    id: 40000,
    title: "How to get to the exhibition",
    isdraft: false,
    moderated: true,
    isdeleted: false,
    blocks:
      '[{"id": "YMKazieObF", "data": {"text": "asdasd"}, "type": "paragraph"}]',
    uid: 78,
    lastupdatedat: "2022-10-29 11:20:04.711073+00",
    createdat: "2022-10-29 11:20:04.711073+00",
    picture: '["/data/suggestions/1/ZHJ5R2NHeXZWb1NsMFpaT25pN0JEYzZiWk5jPQ"]',
  },
];
